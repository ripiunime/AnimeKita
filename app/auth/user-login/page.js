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
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Login User</h1>
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
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Login
                </button>
            </form>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
    );
}
