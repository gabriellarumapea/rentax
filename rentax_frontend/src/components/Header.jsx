import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md px-8 py-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold text-gray-900 tracking-wide"
        >
          Rentax
        </Link>
        <nav className="space-x-6 flex items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-yellow-600 font-semibold transition"
          >
            Home
          </Link>
          <Link
            to="/cars"
            className="text-gray-700 hover:text-yellow-600 font-semibold transition"
          >
            Mobil
          </Link>
          {role === "user" && (
            <>
              <Link
                to="/booking"
                className="text-gray-700 hover:text-yellow-600 font-semibold transition"
              >
                Booking
              </Link>
              <Link
                to="/my-bookings"
                className="text-gray-700 hover:text-yellow-600 font-semibold transition"
              >
                Booking Saya
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-yellow-600 font-semibold transition"
              >
                Dashboard
              </Link>
              <span className="text-gray-800 font-semibold">
                Halo, {username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded shadow-md transition"
              >
                Logout
              </button>
            </>
          )}
          {role === "admin" && (
            <>
              <Link
                to="/admin"
                className="text-gray-700 hover:text-yellow-600 font-semibold transition"
              >
                Admin Dashboard
              </Link>
              <Link
                to="/admin/cars"
                className="text-gray-700 hover:text-yellow-600 font-semibold transition"
              >
                Kelola Mobil
              </Link>
              <Link
                to="/admin/bookings"
                className="text-gray-700 hover:text-yellow-600 font-semibold transition"
              >
                Data Booking
              </Link>
              <span className="text-gray-800 font-semibold">
                Halo, {username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded shadow-md transition"
              >
                Logout
              </button>
            </>
          )}
          {!role && (
            <>
              <Link
                to="/login"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded shadow-md transition"
              >
                Masuk
              </Link>
              <Link
                to="/register"
                className="text-yellow-600 hover:underline font-semibold"
              >
                Daftar
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
