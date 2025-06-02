import React, { useState } from "react";

const faqs = [
  {
    question: "Bagaimana cara melakukan booking?",
    answer:
      "Kamu bisa pilih mobil di halaman daftar, klik pesan, lalu isi formulir booking yang tersedia.",
  },
  {
    question: "Apakah ada biaya tambahan?",
    answer:
      "Harga sudah termasuk asuransi dan pajak, tidak ada biaya tersembunyi.",
  },
  {
    question: "Bisakah membatalkan pesanan?",
    answer:
      "Pembatalan bisa dilakukan maksimal 24 jam sebelum waktu sewa tanpa dikenakan biaya.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto my-16 px-6">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900">Pertanyaan Umum</h2>
      <div className="space-y-4">
        {faqs.map(({ question, answer }, i) => (
          <div
            key={i}
            className="border border-gray-300 rounded-md cursor-pointer"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left p-4 font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
            >
              {question}
              <span>{activeIndex === i ? "−" : "+"}</span>
            </button>
            {activeIndex === i && (
              <div className="p-4 text-gray-700 border-t border-gray-300">
                {answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
