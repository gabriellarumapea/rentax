import React, { useState } from "react";

const BookingForm = () => {
  const [form, setForm] = useState({
    car_id: "",
    start_date: "",
    end_date: "",
    total_price: "",
    status: "active",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = localStorage.getItem("username");

    try {
      const res = await fetch("http://localhost:6543/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Role": "user",
          "X-User": username,
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage("Booking berhasil dibuat!");
        setForm({
          car_id: "",
          start_date: "",
          end_date: "",
          total_price: "",
          status: "active",
        });
      } else {
        setMessage("Booking gagal. Pastikan semua data valid!");
      }
    } catch {
      setMessage("Terjadi kesalahan saat booking.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Booking Mobil</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="car_id"
          value={form.car_id}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="ID Mobil"
          required
        />
        <input
          name="start_date"
          type="date"
          value={form.start_date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="end_date"
          type="date"
          value={form.end_date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="total_price"
          type="number"
          value={form.total_price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Total Harga"
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
        >
          Booking
        </button>
      </form>
      {message && (
        <div className="mt-4 text-center text-green-600 font-semibold">
          {message}
        </div>
      )}
    </div>
  );
};

export default BookingForm;
