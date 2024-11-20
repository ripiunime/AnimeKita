'use client';

export default function UserDashboardPage() {
    return (
        <div className="container">
            <h1>Dashboard User</h1>
            <p>Selamat datang di dashboard user!</p>
            <p>Anda dapat mengakses fitur sebagai pengguna dari sini.</p>
            <button onClick={() => alert('Fitur user yang lebih lanjut')}>
                Lihat Profil
            </button>
        </div>
    );
}
