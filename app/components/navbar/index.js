'use client';

import { useState, useEffect } from 'react';
import './navbar.css'; // Pastikan file CSS sudah ada

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State login

    // Cek status login dari localStorage
    useEffect(() => {
        const syncLoginState = () => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        console.log("localStorage isLoggedIn:", localStorage.getItem('isLoggedIn')); // Cek isi localStorage
        console.log("Logged in status:", loggedIn);
        setIsLoggedIn(loggedIn);
        };

        syncLoginState();

        window.addEventListener('storage', syncLoginState);

        return () => window.removeEventListener('storage', syncLoginState);

    }, []);

    

    return (
        <nav className="navbar">
            <a href="../" className="navbar-title">AnimeKita</a>
            <div className="navbar-links">
                {!isLoggedIn ? (
                    <>
                        <a href="/auth/user-login" className="navbar-link">Login</a>
                        <a href="/auth/user-register" className="navbar-link">Register</a>
                        <a href="../profile" className="navbar-link">Profile</a>
                    </>
                ) : (
                    <a href="../profile" className="navbar-link">Profile</a>
                )}
            </div>
        </nav>
    );  
}
