import bcrypt from "bcrypt";
import db from "../../../lib/db";

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();

    // Validasi input
    if (!username || !email || !password) {
      return new Response(JSON.stringify({ message: "All fields are required" }), {
        status: 400,
      });
    }

    // Hash password
    const saltRounds = 10; // Semakin besar angka, semakin aman tapi lebih lambat
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Simpan user ke database
    const query = `
      INSERT INTO users (username, email, password, role)
      VALUES (?, ?, ?, ?)
    `;
    await db.execute(query, [username, email, hashedPassword, "user"]);

    return new Response(JSON.stringify({ message: "User registered successfully" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error in register route:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
