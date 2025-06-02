import React, { useContext } from "react";
import { AuthContext } from "../authcontext";

const mockBookings = [
  { id: 1, car: "Toyota Avanza", status: "Berjalan", date: "2025-06-01 s/d 2025-06-05" },
  { id: 2, car: "Honda Jazz", status: "Selesai", date: "2025-05-10 s/d 2025-05-12" },
  { id: 3, car: "Mitsubishi Pajero", status: "Batal", date: "2025-04-20 s/d 2025-04-25" },
];

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700">Silakan login terlebih dahulu untuk melihat dashboard.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50 font-sans max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Halo, {user.username}!</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ringkasan Booking</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-700">Booking Berjalan</p>
            <p className="text-3xl font-bold text-yellow-600">
              {mockBookings.filter((b) => b.status === "Berjalan").length}
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-700">Booking Selesai</p>
            <p className="text-3xl font-bold text-green-600">
              {mockBookings.filter((b) => b.status === "Selesai").length}
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-700">Booking Batal</p>
            <p className="text-3xl font-bold text-red-600">
              {mockBookings.filter((b) => b.status === "Batal").length}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Riwayat Booking</h2>
        <table className="w-full bg-white rounded shadow overflow-hidden">
          <thead className="bg-yellow-500 text-white">
            <tr>
              <th className="p-4 text-left">Mobil</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Periode</th>
            </tr>
          </thead>
          <tbody>
            {mockBookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b border-gray-200 hover:bg-yellow-50 cursor-pointer"
              >
                <td className="p-4">{booking.car}</td>
                <td
                  className={`p-4 font-semibold ${
                    booking.status === "Berjalan"
                      ? "text-yellow-600"
                      : booking.status === "Selesai"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {booking.status}
                </td>
                <td className="p-4">{booking.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
