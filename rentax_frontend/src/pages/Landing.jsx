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
    image: "https://dummyimage.com/1200x400/000/fff&text=Promo+1",
  },
  {
    id: 2,
    title: "Pilihan Mobil Terlengkap",
    desc: "Beragam mobil siap menemani perjalananmu dengan nyaman.",
    image: "https://dummyimage.com/1200x400/222/eee&text=Promo+2",
  },
  {
    id: 3,
    title: "Booking Online 24/7",
    desc: "Pesan kapan saja dan di mana saja dengan mudah.",
    image: "https://dummyimage.com/1200x400/555/fff&text=Promo+3",
  },
];

const Landing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header sudah di App.jsx, jangan duplikat di sini */}

      <section className="max-w-7xl mx-auto mt-12 px-4">
        <Slider {...settings}>
          {promos.map((promo) => (
            <div key={promo.id} className="relative rounded-lg overflow-hidden">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black bg-opacity-70 flex flex-col justify-center items-center text-center text-white p-6">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                  {promo.title}
                </h2>
                <p className="max-w-xl text-lg md:text-xl mb-6 drop-shadow-md">
                  {promo.desc}
                </p>
                <Link
                  to="/cars"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300"
                >
                  Mulai Sekarang
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Landing;
