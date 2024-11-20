import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Database connection

export async function GET(req, { params }) {
  const { userId } = params;

  const user = await db.user.findUnique({
    where: { id: Number(userId) },
  });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(user);
}
