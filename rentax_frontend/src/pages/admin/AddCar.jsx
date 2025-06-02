import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCar = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    brand: "",
    year: "",
    price_per_day: "",
    type: "",
    description: "",
    image: "",
    status: "available"
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:6543/api/cars/${id}`, {
      headers: {
        "X-Role": "admin"
      }
    })
      .then(res => res.json())
      .then(data => {
        setForm({
          name: data.name || "",
          brand: data.brand || "",
          year: data.year || "",
          price_per_day: data.price_per_day || "",
          type: data.type || "",
          description: data.description || "",
          image: data.image || "",
          status: data.status || "available"
        });
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:6543/api/cars/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Role": "admin",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage("Mobil berhasil diupdate!");
        setTimeout(() => navigate("/admin/cars"), 1000);
      } else {
        setMessage("Update gagal!");
      }
    } catch {
      setMessage("Terjadi error.");
    }
  };

  if (loading) {
    return <p className="text-center mt-8">Loading data mobil...</p>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Mobil</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Nama Mobil" required />
        <input name="brand" value={form.brand} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Brand" required />
        <input name="year" type="number" value={form.year} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Tahun" required />
        <input name="type" value={form.type} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Tipe" required />
        <input name="price_per_day" type="number" value={form.price_per_day} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Harga per hari" required />
        <input name="image" value={form.image} onChange={handleChange} className="w-full border p-2 rounded" placeholder="URL Gambar" />
        <input name="description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Deskripsi" />
        <select name="status" value={form.status} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="available">Tersedia</option>
          <option value="booked">Disewa</option>
        </select>
        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded">
          Update Mobil
        </button>
      </form>
      {message && <div className="mt-4 text-center text-green-600 font-semibold">{message}</div>}
    </div>
  );
};

export default EditCar;
