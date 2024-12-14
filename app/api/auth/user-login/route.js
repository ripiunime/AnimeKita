import bcrypt from "bcrypt";
import db from "../../../lib/db";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validasi input
    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // Cek apakah user ada di database
    const query = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await db.execute(query, [email]);

    if (rows.length === 0) {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), {
        status: 401,
      });
    }

    const user = rows[0];

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), {
        status: 401,
      });
    }

    // Redirect berdasarkan role
    const redirectPath = user.role === "admin" ? "/dashboard/admin" : "/dashboard/user";
    

    return new Response(
      JSON.stringify({ message: "Login successful", redirectPath }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in login route:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
