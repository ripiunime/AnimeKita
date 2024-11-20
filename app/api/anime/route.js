import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Database connection

export async function GET() {
  const animeList = await db.anime.findMany(); // Ambil semua data anime dari database
  return NextResponse.json(animeList);
}

export async function POST(req) {
  const { title, description, imageUrl } = await req.json();

  const anime = await db.anime.create({
    data: {
      title,
      description,
      imageUrl,
    },
  });

  return NextResponse.json({ message: 'Anime added successfully', anime });
}
