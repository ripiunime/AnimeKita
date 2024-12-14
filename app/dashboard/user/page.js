'use client';

export default function AdminDashboardPage() {
    return (
        <div className="container">
            <h1>Dashboard user</h1>
            <p>Selamat datang di dashboard user!</p>
            <p>Anda dapat mengelola semua fitur dari sini.</p>
            <button onClick={() => alert('Fitur admin yang lebih lanjut')}>
                Kelola Data
            </button>
        </div>
    );
}
