'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const router = useRouter();

    useEffect(() => {
        // Contoh logika autentikasi dummy
        const isLoggedIn = localStorage.getItem('adminLoggedIn');

        if (!isLoggedIn) {
            router.push('/auth/admin-login');
        }
    }, [router]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Dashboard Admin</h1>
            <p>Selamat datang di Dashboard Admin!</p>
        </div>
    );
}
