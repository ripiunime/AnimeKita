export async function POST(req) {
  const body = await req.json();

  // Contoh validasi dan penyimpanan dummy
  if (body.username && body.password) {
      // Simulasi penyimpanan data (ganti dengan database nyata)
      return new Response(
          JSON.stringify({ success: true, message: 'Admin berhasil diregistrasi!' }),
          { status: 200 }
      );
  } else {
      return new Response(
          JSON.stringify({ success: false, message: 'Username dan password diperlukan.' }),
          { status: 400 }
      );
  }
}
