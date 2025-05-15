import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCar = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    image: "",
    status: "available",
  });

  useEffect(() => {
    const cars = JSON.parse(localStorage.getItem("cars")) || [];
    const car = cars.find((c) => c.id === Number(id));
    if (car) setForm(car);
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cars = JSON.parse(localStorage.getItem("cars")) || [];
    const updated = cars.map((car) =>
      car.id === Number(id) ? { ...form, id: Number(id) } : car
    );
    localStorage.setItem("cars", JSON.stringify(updated));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 px-6 py-8 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6 border border-blue-100 w-full max-w-md space-y-4"
      >
        <h2 className="text-center text-2xl font-bold text-blue-700 mb-2">Edit Mobil</h2>

        {["brand", "model", "year", "price", "image"].map((field) => (
          <div key={field}>
            <label className="block mb-1 font-medium text-gray-700 capitalize">{field}</label>
            <input
              type={field === "year" || field === "price" ? "number" : "text"}
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
              className="w-full border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        <div>
          <label className="block mb-1 font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border border-blue-200 rounded px-4 py-2"
          >
            <option value="available">Tersedia</option>
            <option value="rented">Disewa</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
};

export default EditCar;
