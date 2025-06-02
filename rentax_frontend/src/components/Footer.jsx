import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">RentaX</h3>
          <p>Jl. Contoh No.123, Jakarta</p>
          <p>Email: info@rentax.com</p>
          <p>Telepon: 021-12345678</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Menu</h3>
          <ul>
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/cars" className="hover:text-yellow-500">Mobil</a></li>
            <li><a href="/booking" className="hover:text-yellow-500">Booking</a></li>
            <li><a href="/login" className="hover:text-yellow-500">Masuk</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Sosial Media</h3>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-yellow-500">Facebook</a></li>
            <li><a href="#" className="hover:text-yellow-500">Instagram</a></li>
            <li><a href="#" className="hover:text-yellow-500">Twitter</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-gray-500">
        &copy; 2025 RentaX. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
