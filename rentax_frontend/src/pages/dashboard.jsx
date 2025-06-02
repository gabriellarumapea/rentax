import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const username = localStorage.getItem("username");

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white mt-10 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Dashboard User</h1>
      <p className="mb-6">Halo, <b>{username}</b>! Selamat datang di Rentax.</p>
      <div className="space-x-3">
        <Link to="/booking" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow">Booking Mobil</Link>
        <Link to="/my-bookings" className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded shadow">Lihat Booking Saya</Link>
      </div>
    </div>
  );
};

export default Dashboard;
