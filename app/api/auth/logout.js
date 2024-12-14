export async function POST(req, res) {
    // Logika untuk menghapus session di server
    res.status(200).json({ message: "Logout successful" });
  }
  