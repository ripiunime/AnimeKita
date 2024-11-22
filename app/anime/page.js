// app/anime/page.js

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AnimePage() {
  const [animeList, setAnimeList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/anime')
      .then((res) => res.json())
      .then((data) => setAnimeList(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Daftar Anime</h1>
      <ul className="anime-list">
        {animeList.map((anime) => (
          <li key={anime.id} className="anime-item">
            <h3>{anime.title}</h3>
            <p>Genre: {anime.genre}</p>
            <p>Episodes: {anime.episodes}</p>
            <Link href={`/anime/${anime.id}`}>
              <button>Lihat Ulasan</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
