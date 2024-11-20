'use client';

export default function AdminDashboardPage() {
    return (
        <div className="container">
            <h1>Dashboard Admin</h1>
            <p>Selamat datang di dashboard admin!</p>
            <p>Anda dapat mengelola semua fitur dari sini.</p>
            <button onClick={() => alert('Fitur admin yang lebih lanjut')}>
                Kelola Data
            </button>
        </div>
    );
}
