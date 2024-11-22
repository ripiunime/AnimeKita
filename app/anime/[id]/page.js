'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AnimeDetailPage({ params }) {
  const router = useRouter();
  const [anime, setAnime] = useState(null);
  const [review, setReview] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userIdFromLocalStorage = localStorage.getItem('userId');
    setUserId(userIdFromLocalStorage);

    fetch(`/api/anime/${params.id}`)
      .then((res) => res.json())
      .then((data) => setAnime(data))
      .catch((err) => console.error('Error fetching anime details:', err));
  }, [params.id]);

  // Handle review submission
  const handleReviewSubmit = () => {
    if (!review || !userId) return;

    const reviewData = {
      userId,
      animeId: anime.id,
      content: review,
      rating: 5,  // You can add a rating system if necessary
    };

    fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then(() => {
        alert('Ulasan berhasil ditambahkan!');
        router.push(`/profile/${userId}`);  // Redirect to user profile page after submitting the review
      })
      .catch((err) => console.error('Error submitting review:', err));
  };

  return (
    <div className="container">
      {anime ? (
        <>
          <h1>{anime.title}</h1>
          <img src={anime.posterUrl} alt={anime.title} />
          <p>{anime.description}</p>

          <h2>Berikan Ulasan Anda</h2>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Tulis ulasan Anda..."
          />
          <button onClick={handleReviewSubmit}>Kirim Ulasan</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
