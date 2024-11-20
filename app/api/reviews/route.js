import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Database connection

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const animeId = searchParams.get('animeId');

  const reviews = await db.review.findMany({
    where: {
      ...(userId && { userId: Number(userId) }),
      ...(animeId && { animeId: Number(animeId) }),
    },
  });

  return NextResponse.json(reviews);
}

export async function POST(req) {
  const { animeId, userId, content, animeTitle } = await req.json();

  const review = await db.review.create({
    data: {
      animeId: Number(animeId),
      userId: Number(userId),
      content,
      animeTitle,
    },
  });

  return NextResponse.json({ message: 'Review added successfully', review });
}
