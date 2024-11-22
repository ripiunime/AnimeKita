// pages/api/anime/[id]/index.js

import prisma from '../../../../lib/prisma';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const anime = await prisma.anime.findUnique({
        where: { id: parseInt(id) },
        select: {
          id: true,
          title: true,
          genre: true,
          episodes: true,
        },
      });

      if (anime) {
        res.status(200).json(anime);
      } else {
        res.status(404).json({ error: 'Anime tidak ditemukan' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Gagal mengambil data anime' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
