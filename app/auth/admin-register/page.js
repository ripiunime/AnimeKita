'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminRegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simpan admin baru (dummy)
        if (username && password) {
            alert('Admin berhasil terdaftar');
            router.push('/auth/admin-login');
        } else {
            setError('Username dan password harus diisi.');
        }
    };

    return (
        <div className="container">
            <h1>Register Admin</h1>
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
                <button type="submit">Register</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            <p>
                Sudah punya akun? <a href="/auth/admin-login">Login</a>
            </p>
        </div>
    );
}
