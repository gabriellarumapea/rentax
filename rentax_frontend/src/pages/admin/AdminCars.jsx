import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminCars = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:6543/api/cars", {
      headers: {
        "X-Role": "admin",
      },
    })
      .then((res) => res.json())
      .then(setCars)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Kelola Mobil</h1>
      <button
        onClick={() => navigate("/admin/add-car")}
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded mb-4"
      >
        + Tambah Mobil
      </button>
      <table className="w-full bg-white rounded shadow">
        <thead className="bg-yellow-400 text-white">
          <tr>
            <th className="p-4 text-left">Nama</th>
            <th className="p-4 text-left">Brand</th>
            <th className="p-4 text-left">Tahun</th>
            <th className="p-4 text-left">Harga/Hari</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id} className="border-b hover:bg-yellow-50">
              <td className="p-4">{car.name}</td>
              <td className="p-4">{car.brand}</td>
              <td className="p-4">{car.year}</td>
              <td className="p-4">Rp {car.price_per_day?.toLocaleString()}</td>
              <td className="p-4">{car.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCars;
