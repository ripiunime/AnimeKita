'use client';

import { useRouter } from 'next/navigation';

export default function DashboardLandingPage() {
    const router = useRouter();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Selamat Datang di Dashboard</h1>
            <nav style={{ marginTop: '20px' }}>
                <button 
                    onClick={() => router.push('/auth/login')}
                    style={{
                        marginRight: '10px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#0070f3',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Login
                </button>
                <button 
                    onClick={() => router.push('/auth/register')}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Register
                </button>
            </nav>
        </div>
    );
}
