import React, { useState } from "react";

const initialBookings = [
  { id: 1, car: "Toyota Avanza", status: "Berjalan", start: "2025-06-01", end: "2025-06-05" },
  { id: 2, car: "Honda Jazz", status: "Selesai", start: "2025-05-10", end: "2025-05-12" },
];

const BookingList = () => {
  const [bookings, setBookings] = useState(initialBookings);

  const handleCancel = (id) => {
    if (window.confirm("Batalkan booking ini?")) {
      setBookings(bookings.map(b => b.id === id ? { ...b, status: "Batal" } : b));
    }
  };

  return (
    <div className="min-h-screen max-w-5xl mx-auto p-8 bg-gray-50 font-sans">
      <h1 className="text-3xl font-bold mb-6">Daftar Booking Saya</h1>
      <table className="w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-yellow-500 text-white">
          <tr>
            <th className="p-4 text-left">Mobil</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Periode</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-b border-gray-200 hover:bg-yellow-50">
              <td className="p-4">{b.car}</td>
              <td className="p-4">{b.status}</td>
              <td className="p-4">{b.start} s/d {b.end}</td>
              <td className="p-4 text-center">
                {b.status === "Berjalan" ? (
                  <button
                    onClick={() => handleCancel(b.id)}
                    className="text-red-600 hover:underline font-semibold"
                  >
                    Batalkan
                  </button>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
          {bookings.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-6 text-gray-600">
                Belum ada booking.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
