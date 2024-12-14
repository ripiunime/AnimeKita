import pool from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM anime");
    return Response.json({ anime: rows });
  } catch (error) {
    return Response.json({ message: "Error fetching data", error }, { status: 500 });
  }
}
