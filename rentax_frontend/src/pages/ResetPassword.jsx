import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    if (password !== confirmPass) {
      setError("Password dan konfirmasi password tidak cocok");
      return;
    }

    // Simulasi reset password sukses
    alert("Password berhasil diubah!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Buat Password Baru
        </h2>

        {error && (
          <div className="mb-6 text-red-600 font-semibold text-center">{error}</div>
        )}

        <label className="block mb-2 font-semibold text-gray-700">Password Baru</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded px-4 py-3 mb-6 w-full focus:outline-yellow-500"
          placeholder="Masukkan password baru"
          required
        />

        <label className="block mb-2 font-semibold text-gray-700">
          Konfirmasi Password
        </label>
        <input
          type="password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          className="border border-gray-300 rounded px-4 py-3 mb-8 w-full focus:outline-yellow-500"
          placeholder="Konfirmasi password baru"
          required
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded w-full transition"
        >
          Ubah Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
