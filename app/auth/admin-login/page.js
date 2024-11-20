'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Dummy validasi
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('adminLoggedIn', true);
            router.push('/dashboard/admin');
        } else {
            setError('Username atau password salah.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Login Admin</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ display: 'block', margin: '10px auto', padding: '10px', width: '200px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ display: 'block', margin: '10px auto', padding: '10px', width: '200px' }}
                />
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
