'use client';

import { useRouter } from 'next/navigation';
import Navbar from './components/navbar'; // Adjust relative import

console.log('Navbar imported:', Navbar);

export default function Dashboard() {
    const router = useRouter();

    return (
        <div className="dashboard">
            <Navbar /> {/* Include Navbar here */}
        </div>
    );
}
