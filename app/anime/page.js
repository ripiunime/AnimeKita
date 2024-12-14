"use client";
import { useEffect, useState } from "react";

export default function AnimePage() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    async function fetchAnime() {
      const res = await fetch("/api/anime");
      const data = await res.json();
      setAnime(data.anime);
    }
    fetchAnime();
  }, []);

  return (
    <div>
      <h1>Daftar Anime</h1>
      <ul>
        {anime.map((a) => (
          <li key={a.id}>
            <h2>{a.title}</h2>
            <p>{a.description}</p>
            <p>Release Date: {a.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
