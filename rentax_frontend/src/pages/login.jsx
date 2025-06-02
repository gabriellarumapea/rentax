import React, { useState, useContext } from "react";
import { AuthContext } from "../authcontext";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim().length < 3 || password.trim().length < 3) {
      setError("Username dan password minimal 3 karakter");
      return;
    }

    // Simulasi login user/admin
    if (username === "admin" && password === "admin123") {
      login({ username, role: "admin" });
      navigate(from, { replace: true });
    } else if (username === "user" && password === "user123") {
      login({ username, role: "user" });
      navigate(from, { replace: true });
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Masuk ke RentaX
        </h2>

        {error && (
          <div className="mb-6 text-red-600 font-semibold text-center">{error}</div>
        )}

        <label className="block mb-2 font-semibold text-gray-700">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded px-4 py-3 mb-6 w-full focus:outline-yellow-500"
          placeholder="Masukkan username"
          required
        />

        <label className="block mb-2 font-semibold text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded px-4 py-3 mb-4 w-full focus:outline-yellow-500"
          placeholder="Masukkan password"
          required
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded w-full transition"
        >
          Masuk
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          <Link
            to="/forgot-password"
            className="text-yellow-600 hover:underline font-semibold"
          >
            Lupa Password?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
