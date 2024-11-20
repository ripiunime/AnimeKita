'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();

    const handleRoleSelection = (role) => {
        if (role === 'admin') {
            router.push('/auth/admin-login');
        } else {
            router.push('/auth/user-login');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Login</h1>
            <p>Pilih jenis login Anda:</p>
            <button
                onClick={() => handleRoleSelection('admin')}
                style={{
                    margin: '10px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#0070f3',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Login sebagai Admin
            </button>
            <button
                onClick={() => handleRoleSelection('user')}
                style={{
                    margin: '10px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Login sebagai User
            </button>
        </div>
    );
}
