import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialCars = [
  { id: 1, name: "Toyota Avanza", price: 350000, type: "MPV" },
  { id: 2, name: "Honda Jazz", price: 450000, type: "Hatchback" },
];

const AdminCars = () => {
  const [cars, setCars] = useState(initialCars);

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus mobil ini?")) {
      setCars(cars.filter((car) => car.id !== id));
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 font-sans max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Kelola Data Mobil</h1>
      <Link
        to="/admin/cars/add"
        className="bg-yellow-500 text-white px-6 py-2 rounded shadow hover:bg-yellow-600 mb-6 inline-block"
      >
        Tambah Mobil Baru
      </Link>

      <table className="w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-yellow-500 text-white">
          <tr>
            <th className="p-4 text-left">Nama Mobil</th>
            <th className="p-4 text-left">Tipe</th>
            <th className="p-4 text-left">Harga</th>
            <th className="p-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id} className="border-b border-gray-200 hover:bg-yellow-50">
              <td className="p-4">{car.name}</td>
              <td className="p-4">{car.type}</td>
              <td className="p-4">Rp{car.price.toLocaleString()}</td>
              <td className="p-4 space-x-2 text-center">
                <Link
                  to={`/admin/cars/edit/${car.id}`}
                  className="text-yellow-600 hover:underline font-semibold"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(car.id)}
                  className="text-red-600 hover:underline font-semibold"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
          {cars.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-6 text-gray-600">
                Tidak ada data mobil.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCars;
