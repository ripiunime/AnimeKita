'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import '../../globals.css';

const UserProfile = ({ params }) => {
  const { userId } = params;
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await axios.get(`/api/users/${userId}`);
        setUser(userResponse.data);

        const reviewsResponse = await axios.get(`/api/reviews?userId=${userId}`);
        setReviews(reviewsResponse.data);
      } catch (err) {
        router.push('/auth/user-login'); // Redirect jika user tidak ditemukan
      }
    };

    fetchUser();
  }, [userId, router]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>Profile of {user.username}</h1>
      <p>Email: {user.email}</p>
      <h2>My Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.animeTitle}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;


