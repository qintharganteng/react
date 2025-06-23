import React from 'react';
import { useState, useEffect } from 'react';
import baju from '/images/baju.png'; // pastikan ini file PNG transparan di folder src/assets
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';

const products = [
  {
    id: 1,
    image: person1,
    name: 'Light Brown',
    desc: 'Street style edition',
  },
  {
    id: 2,
    image: person2,
    name: 'Light Green',
    desc: 'Simplicity in fashion',
  },
  {
    id: 3,
    image: person3,
    name: 'Brick Brown',
    desc: 'Black never fails',
  },
  {
    id: 4,
    image: person4,
    name: 'Light Blue',
    desc: 'Timeless retro feels',
  },
];

// Tambahkan gambar lain dari folder assets
import gallery1 from '../assets/all1.jpg';
import gallery2 from '../assets/all2.jpg';
import gallery3 from '../assets/all3.jpg';
import gallery4 from '../assets/all4.jpg';

const galleryImages = [gallery1, gallery2, gallery3, gallery4];

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <main className="bg-white relative overflow-hidden h-screen">
        <div className="flex items-center justify-center h-full pt-4">
          <div className="container px-6 py-10 max-w-screen-xl transform translate-x-8">
            <div className="flex flex-wrap items-center">
              {/* TEKS */}
              <div className="sm:w-2/3 lg:w-2/5 flex flex-col">
                <h1 className="font-poppins text-6xl sm:text-8xl font-black flex flex-col leading-none text-black">
                  T-Shirt
                  <span className="text-5xl sm:text-7xl">Timeless</span>
                </h1>
                <div className="flex mt-8">
                  <a
                    href="#"
                    className="uppercase py-2 px-4 rounded-lg bg-black border-2 border-transparent text-white font-pop text-md mr-4 hover:bg-green-500 hover:border-green-500 transition duration-300"
                  >
                    SHOP NOW
                  </a>
                </div>
           {/* <span className="mt-2 block w-24 h-[2px] bg-black"></span> */}
              </div>

              {/* GAMBAR BAJU */}
              <div className="hidden sm:block sm:w-1/3 lg:w-3/5">
                <div className="flex justify-center">
                  <img
                    src={baju}
                    alt="Brand T-shirt"
                    className="max-w-xs md:max-w-sm object-contain"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>



      {/* CARD SECTION */}
      <CardSection />
    
    </>
  );
}
// CardSection component moved outside of Hero
export function CardSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const item = products[currentIndex];

 return (
  <section className="bg-white py-6 px-6">
    {/* Judul */}
    <div className="mb-10 flex justify-center items-center gap-4 text-center">
  <h2 className="text-3xl font-poppins text-gray-800 uppercase tracking-wide font-bold">
    Our Colors
  </h2>
  <span className="mt-2 block w-24 h-[4px] bg-black"></span>
</div>


    {/* Kontainer Flex untuk Card dan Gallery */}
  <div className="flex flex-col lg:flex-row items-start justify-center gap-48 px-10">
    
  {/* Card */}
  <div className="bg-black rounded-6xl shadow-lg w-[25rem] h-[32rem] p-6 flex flex-col justify-between items-center relative">
    <div className="flex flex-col justify-center items-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-50 h-50 object-contain mb-4"
      />
      <h3 className="text-lg font-poppins text-black">{item.name}</h3>
      <p className="text-sm text-black font-poppins mb-6">{item.desc}</p>

      {/* Indikator Dot */}
      <div className="flex gap-3 mt-2">
        {products.map((_, index) => {
          const colors = ['bg-amber-700', 'bg-green-700', 'bg-amber-900', 'bg-blue-900'];
          const color = colors[index % colors.length];

          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? color : `${color} opacity-50 hover:opacity-80`
              }`}
            />
          );
        })}
      </div>
    </div>
  </div>

  {/* Grid Galeri */}
  <div className="grid grid-cols-2 gap-4 max-w-sm pl-6">
    {galleryImages.map((img, i) => (
      <div key={i} className="rounded-lg overflow-hidden">
        <img src={img} alt={`Gallery ${i + 1}`} className="object-cover w-full h-full" />
      </div>
    ))}
  </div>
</div>
  </section>
  );

}



