import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Database connection

export async function GET(req, { params }) {
  const { id } = params;

  const anime = await db.anime.findUnique({
    where: { id: Number(id) },
  });

  if (!anime) {
    return NextResponse.json({ message: 'Anime not found' }, { status: 404 });
  }

  return NextResponse.json(anime);
}
