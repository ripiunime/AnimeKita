import { verifyToken } from "../lib/jwt"; // Fungsi untuk memverifikasi token

export async function getSession(request) {
  const token = request.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return null; // Tidak ada token, user tidak login
  }

  try {
    const user = await verifyToken(token); // Verifikasi token JWT
    return user; // Kembalikan data user jika valid
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}
