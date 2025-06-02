import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authcontext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md px-8 py-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold text-gray-800 tracking-wide"
        >
          RentaX
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
          <Link
            to="/booking"
            className="text-gray-700 hover:text-yellow-600 font-semibold transition"
          >
            Booking
          </Link>

          {user ? (
            <>
              <Link
                to="/my-bookings"
                className="text-gray-700 hover:text-yellow-600 font-semibold transition"
              >
                Booking Saya
              </Link>
              <Link
                to="/profile"
                className="text-gray-700 hover:text-yellow-600 font-semibold transition"
              >
                Profil
              </Link>
              <span className="text-gray-800 font-semibold">
                Halo, {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded shadow-md transition"
              >
                Logout
              </button>
            </>
          ) : (
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
