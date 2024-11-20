import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Database connection

export async function POST(req) {
  const { username, email, password } = await req.json();

  // Simpan user ke database
  const user = await db.user.create({
    data: {
      username,
      email,
      password,
    },
  });

  return NextResponse.json({ message: 'User registered successfully', user });
}
