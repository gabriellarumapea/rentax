import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulasi kirim link reset password
    setMessage(`Link reset password telah dikirim ke ${email} (simulasi).`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Reset Password
        </h2>

        {message && (
          <div className="mb-6 text-green-600 font-semibold text-center">{message}</div>
        )}

        <label className="block mb-2 font-semibold text-gray-700">
          Masukkan Email Anda
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-4 py-3 mb-8 w-full focus:outline-yellow-500"
          placeholder="email@contoh.com"
          required
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded w-full transition"
        >
          Kirim Link Reset
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
