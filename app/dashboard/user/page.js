'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserDashboardPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [animeList, setAnimeList] = useState([]);

  const handleSearch = () => {
    fetch(`/api/anime?search=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setAnimeList(data))
      .catch((err) => console.error('Error fetching anime:', err));
  };

  return (
    <div className="container">
      <h1>Dashboard User</h1>
      <p>Selamat datang di dashboard user! Anda dapat mengakses fitur sebagai pengguna dari sini.</p>

      {/* Search for Anime */}
      <input
        type="text"
        placeholder="Cari anime..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Cari</button>

      <h2>Anime List</h2>
      <ul>
        {animeList.map((anime) => (
          <li key={anime.id}>
            <button onClick={() => router.push(`/anime/${anime.id}`)}>
              <img src={anime.posterUrl} alt={anime.title} />
              <h3>{anime.title}</h3>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
