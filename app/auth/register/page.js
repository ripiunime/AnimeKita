'use client';

import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleRoleSelection = (role) => {
    if (role === 'admin') {
      router.push('/auth/admin-register');
    } else {
      router.push('/auth/user-register');
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <p className="register-description">Pilih jenis registrasi Anda:</p>
      <button
        onClick={() => handleRoleSelection('admin')}
        className="register-button admin"
      >
        Register sebagai Admin
      </button>
      <button
        onClick={() => handleRoleSelection('user')}
        className="register-button user"
      >
        Register sebagai User
      </button>
    </div>
  );
}
