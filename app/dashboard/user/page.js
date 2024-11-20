'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UserDashboard() {
    const router = useRouter();

    useEffect(() => {
        // Cek apakah user sudah login
        const isLoggedIn = localStorage.getItem('userLoggedIn');

        if (!isLoggedIn) {
            router.push('/auth/user-login'); // Arahkan ke halaman login user
        }
    }, [router]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Dashboard User</h1>
            <p>Selamat datang di Dashboard User!</p>
        </div>
    );
}
