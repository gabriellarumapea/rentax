import React, { useContext, useState } from "react";
import { AuthContext } from "../authcontext";

const Profile = () => {
  const { user, login } = useContext(AuthContext);

  // Simulasi data profil, sebenarnya ambil dari backend
  const [profile, setProfile] = useState({
    username: user.username,
    email: "user@example.com",
    phone: "08123456789",
  });
  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirmPass: "",
  });
  const [message, setMessage] = useState("");

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Simulasi update profil
    setMessage("Profil berhasil diperbarui.");
    // Update context user jika username berubah
    if (profile.username !== user.username) {
      login({ ...user, username: profile.username });
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPass !== passwords.confirmPass) {
      setMessage("Password baru dan konfirmasi tidak cocok.");
      return;
    }
    if (passwords.newPass.length < 6) {
      setMessage("Password minimal 6 karakter.");
      return;
    }
    // Simulasi update password berhasil
    setMessage("Password berhasil diubah.");
    setPasswords({ current: "", newPass: "", confirmPass: "" });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 max-w-xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-6">Profil Saya</h1>

      {message && (
        <div className="mb-6 p-3 bg-green-200 text-green-800 rounded">{message}</div>
      )}

      <form onSubmit={handleProfileSubmit} className="mb-10 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Update Data Profil</h2>

        <label className="block mb-2 font-semibold text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          value={profile.username}
          onChange={handleProfileChange}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-yellow-500"
          required
        />

        <label className="block mb-2 font-semibold text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleProfileChange}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-yellow-500"
          required
        />

        <label className="block mb-2 font-semibold text-gray-700">Nomor Telepon</label>
        <input
          type="tel"
          name="phone"
          value={profile.phone}
          onChange={handleProfileChange}
          className="border border-gray-300 rounded px-4 py-2 mb-6 w-full focus:outline-yellow-500"
          required
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded transition w-full"
        >
          Simpan Profil
        </button>
      </form>

      <form onSubmit={handlePasswordSubmit} className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Ganti Password</h2>

        <label className="block mb-2 font-semibold text-gray-700">Password Saat Ini</label>
        <input
          type="password"
          name="current"
          value={passwords.current}
          onChange={handlePasswordChange}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-yellow-500"
          required
        />

        <label className="block mb-2 font-semibold text-gray-700">Password Baru</label>
        <input
          type="password"
          name="newPass"
          value={passwords.newPass}
          onChange={handlePasswordChange}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-yellow-500"
          required
        />

        <label className="block mb-2 font-semibold text-gray-700">Konfirmasi Password Baru</label>
        <input
          type="password"
          name="confirmPass"
          value={passwords.confirmPass}
          onChange={handlePasswordChange}
          className="border border-gray-300 rounded px-4 py-2 mb-6 w-full focus:outline-yellow-500"
          required
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded transition w-full"
        >
          Ganti Password
        </button>
      </form>
    </div>
  );
};

export default Profile;
