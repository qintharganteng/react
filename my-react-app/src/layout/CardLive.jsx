// src/components/layout/HeroCollection.jsx

import poloImgTop from '/src/assets/all3.jpg';   // gambar atas
import poloImg from '/src/assets/all1.jpg';      // gambar utama (tengah)
import poloImgBottom from '/src/assets/all4.jpg';// gambar bawah
import shirtImg from '/src/assets/all2.jpg';     // gambar kanan

export default function HeroCollection() {
  return (
    <section className="w-full flex flex-col md:flex-row justify-center items-center gap-12 py-20 px-4 relative overflow-hidden">
      {/* === Dekorasi Pinggir === */}

      {/* Garis diagonal hitam */}
      <div className="absolute top-8 left-8 w-32 h-1 bg-black rotate-45 opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-32 h-1 bg-black -rotate-45 opacity-40"></div>

      {/* Garis diagonal coklat */}
      <div className="absolute top-20 right-12 w-24 h-1 bg-amber-700 rotate-12 opacity-50"></div>
      <div className="absolute bottom-20 left-12 w-24 h-1 bg-amber-700 -rotate-12 opacity-50"></div>

      {/* Lingkaran hitam */}
      <div className="absolute top-1/4 left-4 w-12 h-12 border-[3px] border-black rounded-full opacity-40"></div>

      {/* Lingkaran coklat */}
      <div className="absolute bottom-1/3 right-4 w-16 h-16 border-[3px] border-amber-700 rounded-full opacity-50"></div>

      {/* === Blok Polo === */}
      <div className="w-full md:w-1/2 flex flex-col items-center relative">
        {/* Gambar Atas */}
        <img
          src={poloImgTop}
          alt="Polo Top"
          className="max-w-[150px] md:max-w-[180px] absolute -top-10 -left-8 rotate-[-10deg] shadow-lg"
        />

        {/* Gambar Tengah */}
        <img
          src={poloImg}
          alt="Polo Main"
          className="max-w-xs md:max-w-sm lg:max-w-md relative z-10"
        />

        {/* Gambar Bawah */}
        <img
          src={poloImgBottom}
          alt="Polo Bottom"
          className="max-w-[150px] md:max-w-[180px] absolute bottom-0 -right-8 rotate-[12deg] shadow-lg"
        />
      </div>

      {/* === Blok Shirt === */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <img
          src={shirtImg}
          alt="Shirt Collection"
          className="max-w-xs md:max-w-sm lg:max-w-md relative z-10"
        />
      </div>
    </section>
  );
}
