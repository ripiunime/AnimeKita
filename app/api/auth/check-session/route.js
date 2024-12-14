import { getSession } from "../../../lib/auth"; // Fungsi helper untuk mengambil sesi user

export async function GET(request) {
  try {
    const user = await getSession(request); // Ambil sesi user dari token/cookie
    if (!user) {
      return new Response(JSON.stringify({ message: "Not authenticated" }), {
        status: 401,
      });
    }

    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    console.error("Error checking session:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
