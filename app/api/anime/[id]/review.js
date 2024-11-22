// pages/api/anime/[id]/reviews.js

import prisma from '../../../../lib/prisma';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const reviews = await prisma.review.findMany({
        where: { animeId: parseInt(id) },
        include: {
          user: { select: { username: true } },
        },
        orderBy: { createdAt: 'desc' },
      });
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: 'Gagal mengambil ulasan' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
