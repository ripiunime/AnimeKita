import { getSession } from "@/lib/auth"; // Fungsi helper untuk memvalidasi sesi
import db from "@/lib/db"; // Koneksi database menggunakan mysql2/promise

export async function GET(request) {
  const user = await getSession(request);
  if (!user) {
    return new Response(JSON.stringify({ message: "Not authenticated" }), {
      status: 401,
    });
  }

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return new Response(
      JSON.stringify({ message: "User ID is required" }),
      { status: 400 }
    );
  }

  try {
    const query = `
      SELECT reviews.id, reviews.content, reviews.rating, anime.title AS animeTitle
      FROM reviews
      INNER JOIN anime ON reviews.anime_id = anime.id
      WHERE reviews.user_id = ?
    `;

    const [rows] = await db.execute(query, [userId]); // Gunakan query prepared statement
    return new Response(JSON.stringify({ reviews: rows }), { status: 200 });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
