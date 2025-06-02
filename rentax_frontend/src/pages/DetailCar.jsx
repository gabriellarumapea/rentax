import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const allCars = [
  { id: 1, name: "Toyota Avanza", price: 350000, type: "MPV", description: "Mobil keluarga yang nyaman dan irit.", image: "https://dummyimage.com/800x400/000/fff&text=Toyota+Avanza" },
  { id: 2, name: "Honda Jazz", price: 450000, type: "Hatchback", description: "Mobil sporty dengan performa hebat.", image: "https://dummyimage.com/800x400/000/fff&text=Honda+Jazz" },
  { id: 3, name: "Suzuki Ertiga", price: 400000, type: "MPV", description: "Cocok untuk perjalanan jauh dan keluarga.", image: "https://dummyimage.com/800x400/000/fff&text=Suzuki+Ertiga" },
  { id: 4, name: "Mitsubishi Pajero", price: 750000, type: "SUV", description: "Mobil mewah dengan fitur lengkap.", image: "https://dummyimage.com/800x400/000/fff&text=Mitsubishi+Pajero" },
];

const DetailCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = allCars.find((c) => c.id === parseInt(id));

  if (!car) {
    return <p className="text-center mt-20 text-red-600 font-semibold">Mobil tidak ditemukan.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans max-w-5xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-yellow-600 hover:underline font-semibold"
      >
        &larr; Kembali
      </button>

      <div className="bg-white rounded shadow p-6 flex flex-col md:flex-row gap-8">
        <img src={car.image} alt={car.name} className="w-full md:w-1/2 rounded" />
        <div>
          <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
          <p className="text-gray-700 mb-4">{car.description}</p>
          <p className="text-xl font-semibold mb-6">Harga Sewa: Rp{car.price.toLocaleString()}</p>
          <button
            onClick={() => navigate("/booking")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded transition"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCar;
