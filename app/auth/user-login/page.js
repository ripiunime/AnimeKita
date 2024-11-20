'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserLoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Dummy validasi login user
        if (username === 'user' && password === 'user123') {
            // Simpan status login ke localStorage
            localStorage.setItem('userLoggedIn', true);
            router.push('/dashboard/user');
        } else {
            setError('Username atau password salah.');
        }
    };

    return (
        <div className="container">
            <h1>Login User</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            <p>
                Belum punya akun? <a href="/auth/user-register">Register</a>
            </p>
        </div>
    );
}
