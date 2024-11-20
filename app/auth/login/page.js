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
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <p className="login-description">Pilih jenis login Anda:</p>
      <button
        className="login-button admin"
        onClick={() => handleRoleSelection('admin')}
      >
        Login sebagai Admin
      </button>
      <button
        className="login-button user"
        onClick={() => handleRoleSelection('user')}
      >
        Login sebagai User
      </button>
    </div>
  );
}
