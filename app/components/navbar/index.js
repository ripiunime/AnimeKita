'use client';
import './navbar.css'; // Import file CSS

export default function Navbar() {
    console.log('Navbar component loaded'); // Log untuk debug
    return (
        <nav className="navbar">
            <h1 className="navbar-title">AnimeKita</h1>
            <div className="navbar-links">
                <a href="/dashboard/user" className="navbar-link">Dashboard</a>
                <a href="../profile/[user-id]" className="navbar-link">Profile</a>
                <a href="/auth/user-login" className="navbar-link">Login</a>
            </div>
        </nav>
    );
}
