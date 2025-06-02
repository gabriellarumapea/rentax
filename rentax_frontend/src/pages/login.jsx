import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === "admin" && form.password === "admin123") {
      localStorage.setItem("role", "admin");
      localStorage.setItem("username", "admin");
      navigate("/admin/cars");
    } else if (form.username === "user" && form.password === "user123") {
      localStorage.setItem("role", "user");
      localStorage.setItem("username", "user");
      navigate("/dashboard");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="border p-3 rounded mb-4 w-full"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-3 rounded mb-4 w-full"
          required
        />
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 rounded w-full">
          Login
        </button>
        <p className="mt-4 text-center">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Daftar Akun Baru
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
