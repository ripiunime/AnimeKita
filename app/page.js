'use client';

'use client';

import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const router = useRouter();

    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Selamat Datang di Dashboard</h1>
            <nav className="dashboard-nav">
                <button
                    onClick={() => router.push('/auth/login')}
                    className="dashboard-button login-button"
                >
                    Login
                </button>
                <button
                    onClick={() => router.push('/auth/register')}
                    className="dashboard-button register-button"
                >
                    Register
                </button>
            </nav>
        </div>
    );
}
