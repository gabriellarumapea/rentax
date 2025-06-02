import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const allCars = [
  {
    id: 1,
    name: "Toyota Avanza",
    price: 350000,
    type: "MPV",
    image: "https://dummyimage.com/400x250/000/fff&text=Toyota+Avanza",
  },
  {
    id: 2,
    name: "Honda Jazz",
    price: 450000,
    type: "Hatchback",
    image: "https://dummyimage.com/400x250/000/fff&text=Honda+Jazz",
  },
  {
    id: 3,
    name: "Suzuki Ertiga",
    price: 400000,
    type: "MPV",
    image: "https://dummyimage.com/400x250/000/fff&text=Suzuki+Ertiga",
  },
  {
    id: 4,
    name: "Mitsubishi Pajero",
    price: 750000,
    type: "SUV",
    image: "https://dummyimage.com/400x250/000/fff&text=Mitsubishi+Pajero",
  },
];

const CarList = () => {
  const [filterType, setFilterType] = useState("All");
  const [filterPrice, setFilterPrice] = useState("All");
  const navigate = useNavigate();

  const filteredCars = allCars.filter((car) => {
    const matchType = filterType === "All" || car.type === filterType;
    const matchPrice =
      filterPrice === "All" ||
      (filterPrice === "<500k" && car.price < 500000) ||
      (filterPrice === ">=500k" && car.price >= 500000);
    return matchType && matchPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
        Daftar Mobil Tersedia
      </h2>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 mb-8">
        <div>
          <label className="block font-semibold mb-1">Tipe Mobil</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="All">Semua</option>
            <option value="MPV">MPV</option>
            <option value="Hatchback">Hatchback</option>
            <option value="SUV">SUV</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Harga</label>
          <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="All">Semua</option>
            <option value="<500k">Kurang dari Rp500.000</option>
            <option value=">=500k">Rp500.000 ke atas</option>
          </select>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredCars.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full">
            Mobil tidak ditemukan.
          </p>
        ) : (
          filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-gray-700 mb-1">Tipe: {car.type}</p>
                <p className="text-gray-700 mb-4">
                  Harga: Rp{car.price.toLocaleString()}
                </p>
                <button
                  onClick={() => navigate(`/cars/${car.id}`)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition w-full"
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CarList;
