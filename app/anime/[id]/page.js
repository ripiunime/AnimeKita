'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import '../../globals.css';

const AnimeDetail = ({ params }) => {
  const { id } = params;
  const [anime, setAnime] = useState(null);
  const [reviewContent, setReviewContent] = useState(''); // Pindahkan ke dalam komponen
  const [successMessage, setSuccessMessage] = useState(''); // Pindahkan ke dalam komponen
  const router = useRouter();

  // Fetch anime details
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get(`/api/anime/${id}`);
        setAnime(response.data);
      } catch (error) {
        console.error('Failed to fetch anime:', error);
        router.push('/404'); // Redirect ke halaman 404 jika gagal
      }
    };

    fetchAnime();
  }, [id, router]);

  // Handle form submission
  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const user = localStorage.getItem('user');
    if (!user) {
      alert('You must be logged in to add a review');
      return;
    }

    try {
      const parsedUser = JSON.parse(user);

      await axios.post('/api/reviews', {
        animeId: id,
        userId: parsedUser.id,
        content: reviewContent,
        animeTitle: anime.title,
      });

      setSuccessMessage('Review added successfully!');
      setReviewContent('');
    } catch (err) {
      console.error('Failed to add review:', err);
      alert('Failed to add review');
    }
  };

  if (!anime) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      {/* Detail Anime */}
      <h1>{anime.title}</h1>
      <img src={anime.imageUrl} alt={anime.title} style={{ width: '300px', borderRadius: '10px' }} />
      <p>{anime.description}</p>

      {/* Form Tambah Ulasan */}
      <div>
        <h2>Add Review</h2>
        {successMessage && <p>{successMessage}</p>}
        <form onSubmit={handleReviewSubmit}>
          <textarea
            placeholder="Write your review here..."
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            required
            style={{
              width: '100%',
              height: '100px',
              marginBottom: '10px',
              borderRadius: '5px',
              padding: '10px',
            }}
          ></textarea>
          <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnimeDetail;
