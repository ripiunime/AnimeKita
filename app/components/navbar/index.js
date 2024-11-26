'use client';

// /components/navbar/index.js
export default function Navbar() {
    console.log('Navbar component loaded');  // This will show up in the console if it's rendered
    return (
      <nav>
        <ul>
          <h1>AnimeKita</h1>
          <li><a href="/dashboard/user">Dashboard</a></li>
          <li><a href="../profile/[user-id]">Profile</a></li>
          <li><a href="/auth/user-login">Login</a></li>
        </ul>
      </nav>
    );
  }
  