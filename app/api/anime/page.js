'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import '../globals.css';

const AnimeCatalog = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      const response = await axios.get('/api/anime');
      setAnimeList(response.data);
    };

    fetchAnime();
  }, []);

  return (
    <div className="container">
      <h1>Anime Catalog</h1>
      <ul>
        {animeList.map((anime) => (
          <li key={anime.id}>
            <a href={`/anime/${anime.id}`}>{anime.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeCatalog;
