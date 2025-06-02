import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const promos = [
  {
    id: 1,
    title: "Sewa Mobil Mudah dan Cepat",
    desc: "Nikmati kemudahan sewa mobil dengan harga terbaik di RentaX.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "Pilihan Mobil Terlengkap",
    desc: "Beragam mobil siap menemani perjalananmu dengan nyaman.",
    image:
      "https://plus.unsplash.com/premium_photo-1683140916567-6d3cea90caf6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Booking Online 24/7",
    desc: "Pesan kapan saja dan di mana saja dengan mudah.",
    image:
      "https://plus.unsplash.com/premium_photo-1682088122308-448e4af02945?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const features = [
  {
    id: 1,
    title: "Proses Cepat",
    description: "Booking dan sewa mobil dengan proses cepat tanpa ribet.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 h-16 w-16 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Pilihan Terlengkap",
    description:
      "Beragam jenis mobil dengan harga bersaing siap menemani perjalananmu.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mb-4 h-16 w-16 text-yellow-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Layanan 24/7",
    description: "Dapatkan layanan sewa mobil kapan saja, di mana saja.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 h-16 w-16 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>
    ),
  },
];

const PLACEHOLDER = "https://fakeimg.pl/800x400?text=No+Image";

const Landing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Slider Section */}
      <section className="max-w-7xl mx-auto mt-16 px-4">
        <Slider {...settings}>
          {promos.map((promo) => (
            <div key={promo.id} className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={promo.image}
                alt={promo.title}
                role="img"
                loading="lazy"
                onError={e => { e.target.onerror = null; e.target.src = PLACEHOLDER; }}
                className="w-full h-80 md:h-96 object-cover filter brightness-75"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
                  {promo.title}
                </h2>
                <p className="max-w-xl text-lg md:text-xl mb-6 drop-shadow-md">
                  {promo.desc}
                </p>
                <Link
                  to="/cars"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-lg font-semibold shadow-lg transition duration-300"
                >
                  Mulai Sekarang
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto mt-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {features.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            {icon}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Landing;
