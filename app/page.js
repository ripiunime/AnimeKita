'use client';

import { useRouter } from 'next/navigation';
import Navbar from '../../../components/navbar'; // Adjust relative import

console.log('Navbar imported:', Navbar);

export default function Dashboard() {
    const router = useRouter();

    return (
        <div className="dashboard">
            <Navbar /> {/* Include Navbar here */}
            
            <h1 className="dashboard-title">Selamat Datang di Dashboard</h1>
            <nav className="dashboard-nav">
                <button
                    onClick={() => router.push('/auth/user-login')}
                    className="dashboard-button login-button"
                >
                    Login
                </button>
                <button
                    onClick={() => router.push('/auth/user-register')}
                    className="dashboard-button register-button"
                >
                    Register
                </button>
            </nav>
        </div>
    );
}
