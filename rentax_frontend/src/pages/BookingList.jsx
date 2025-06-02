import React, { useEffect, useState } from "react";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem("username");

  useEffect(() => {
    fetch("http://localhost:6543/api/bookings", {
      headers: {
        "X-Role": "user",
        "X-User": username,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [username]);

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Booking Saya</h2>
      {loading ? (
        <p>Loading data booking...</p>
      ) : (
        <table className="w-full bg-white rounded shadow overflow-hidden">
          <thead className="bg-yellow-400 text-white">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Car ID</th>
              <th className="p-4 text-left">Periode</th>
              <th className="p-4 text-left">Total Harga</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length ? (
              bookings.map((b) => (
                <tr key={b.id} className="border-b border-gray-100 hover:bg-yellow-50">
                  <td className="p-4">{b.id}</td>
                  <td className="p-4">{b.car_id}</td>
                  <td className="p-4">
                    {b.start_date} - {b.end_date}
                  </td>
                  <td className="p-4">Rp {b.total_price?.toLocaleString()}</td>
                  <td className="p-4">{b.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center p-8 text-gray-400">
                  Belum ada booking.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingList;
