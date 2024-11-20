export async function POST(req) {
  const body = await req.json();

  // Contoh validasi sederhana
  if (body.username === 'admin' && body.password === 'password123') {
      return new Response(
          JSON.stringify({ success: true, message: 'Login berhasil' }),
          { status: 200 }
      );
  } else {
      return new Response(
          JSON.stringify({ success: false, message: 'Username atau password salah' }),
          { status: 401 }
      );
  }
}
