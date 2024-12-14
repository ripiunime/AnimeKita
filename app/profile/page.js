"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        // Ambil token dari localStorage
        const token = localStorage.getItem("authToken");
        if (!token) {
          // Jika tidak ada token, redirect ke halaman login
          router.push("/auth/user-login");
          return;
        }

        // Validasi token dengan API backend
        const res = await fetch("/api/auth/check-session", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Kirim token sebagai Authorization header
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data.user); // Set data user
        } else {
          // Jika token tidak valid, redirect ke login
          localStorage.removeItem("authToken"); // Hapus token yang tidak valid
          router.push("/auth/user-login");
        }
      } catch (err) {
        setError("Failed to load user data");
        router.push("/auth/user-login");
      }
    };

    checkSession();
  }, [router]);

  const handleLogout = async () => {
    try {
      // Hapus session di backend jika menggunakan session-based auth
      await fetch("/api/auth/logout", { method: "POST" });

      // Hapus token atau informasi login dari localStorage
      localStorage.removeItem("authToken");
      router.push("/auth/user-login"); // Redirect ke halaman login
    } catch (err) {
      console.error("Failed to logout:", err);
      setError("Failed to logout. Please try again.");
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {user.username}!</p>
      <p>Role: {user.role}</p>

      {user.role === "admin" && (
        <div>
          <h2>Admin Panel</h2>
          <p>You can manage users, anime, and reviews here.</p>
        </div>
      )}

      {user.role === "user" && (
        <div>
          <h2>Your Reviews</h2>
          <p>Here is your personalized content as a user.</p>
        </div>
      )}

      {/* Tombol Logout */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

      {/* Pesan Error */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
