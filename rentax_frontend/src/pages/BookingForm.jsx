import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    car: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking berhasil untuk ${formData.name} dengan mobil ${formData.car}`);
    // Reset form
    setFormData({ name: "", car: "", startDate: "", endDate: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Formulir Pemesanan</h2>

        <label className="block mb-2 font-semibold text-gray-700">Nama Lengkap</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-yellow-500"
          required
        />

        <label className="block mb-2 font-semibold text-gray-700">Pilih Mobil</label>
        <select
          name="car"
          value={formData.car}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-yellow-500"
          required
        >
          <option value="">-- Pilih Mobil --</option>
          <option value="Toyota Avanza">Toyota Avanza</option>
          <option value="Honda Jazz">Honda Jazz</option>
          <option value="Suzuki Ertiga">Suzuki Ertiga</option>
        </select>

        <label className="block mb-2 font-semibold text-gray-700">Tanggal Mulai</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-yellow-500"
          required
        />

        <label className="block mb-2 font-semibold text-gray-700">Tanggal Selesai</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="border border-gray-300 rounded px-4 py-2 mb-6 w-full focus:outline-yellow-500"
          required
        />

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded w-full transition"
        >
          Pesan Sekarang
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
