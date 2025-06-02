import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Andi Saputra",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Pelayanan cepat dan mobilnya selalu dalam kondisi prima. Recommended!",
  },
  {
    id: 2,
    name: "Siti Aminah",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Booking online mudah dan harga bersaing. Saya pasti pakai lagi.",
  },
  {
    id: 3,
    name: "Budi Santoso",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Fitur lengkap dan responsif. Sangat membantu untuk perjalanan bisnis.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-yellow-50 py-16 px-6 max-w-7xl mx-auto rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold mb-12 text-center text-gray-900">Apa Kata Pelanggan Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(({ id, name, photo, text }) => (
          <div
            key={id}
            className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <p className="mb-4 text-gray-700 italic">"{text}"</p>
            <div className="flex items-center space-x-4">
              <img
                src={photo}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{name}</p>
                <p className="text-yellow-500 font-bold">★ ★ ★ ★ ★</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
