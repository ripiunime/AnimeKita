'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css'; // Import CSS module sesuai direktori

export default function DashboardLandingPage() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Selamat Datang di Dashboard</h1>
            <nav className={styles.nav}>
                <button 
                    onClick={() => router.push('/auth/login')}
                    className={`${styles.button} ${styles.loginButton}`}
                >
                    Login
                </button>
                <button 
                    onClick={() => router.push('/auth/register')}
                    className={`${styles.button} ${styles.registerButton}`}
                >
                    Register
                </button>
            </nav>
        </div>
    );
}
