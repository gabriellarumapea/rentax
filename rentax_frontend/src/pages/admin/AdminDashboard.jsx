import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50 font-sans max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Dashboard Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          to="/admin/cars"
          className="bg-yellow-500 text-white p-6 rounded shadow hover:bg-yellow-600 text-center font-semibold"
        >
          Kelola Mobil
        </Link>
        <Link
          to="/admin/bookings"
          className="bg-yellow-500 text-white p-6 rounded shadow hover:bg-yellow-600 text-center font-semibold"
        >
          Kelola Booking
        </Link>
        <Link
          to="/admin/users"
          className="bg-yellow-500 text-white p-6 rounded shadow hover:bg-yellow-600 text-center font-semibold"
        >
          Kelola Pengguna
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
