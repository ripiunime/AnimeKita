'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage({ params }) {
  const [reviews, setReviews] = useState([]);
  const userId = params['user-id'];

  useEffect(() => {
    // Fetch user reviews from the API
    if (userId) {
      fetch(`/api/users/${userId}/reviews`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((err) => console.error('Error fetching user reviews:', err));
    }
  }, [userId]);

  return (
    <div className="container">
      <h1>Profil Anda</h1>
      <h2>Ulasan Anda</h2>
      {reviews.length === 0 ? (
        <p>Anda belum memberikan ulasan.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.anime.title}</h3>
              <p>Rating: {review.rating}/5</p>
              <p>{review.content}</p>
              <small>Ditulis pada: {new Date(review.createdAt).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
