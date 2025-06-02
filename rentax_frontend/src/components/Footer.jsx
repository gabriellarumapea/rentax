import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">RentaX</h3>
          <p>Jl. Gabriella No.21, Medan</p>
          <p>Email: gabriella@gmail.com</p>
          <p>Telepon: 0813-9776-xxxx</p>
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-gray-500">
        &copy; 2025 RentaX. Tugas Besar Pemrograman Web.
      </p>
    </footer>
  );
};

export default Footer;
