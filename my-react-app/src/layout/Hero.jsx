// src/components/layout/Hero.jsx

import baju from '/src/assets/kemeja.png';
import heroText from '/src/assets/manish.png';

export default function Hero() {
  return (
    <main className="bg-white relative overflow-hidden h-screen">
      {/* === Dekorasi === */}
      <div className="absolute top-8 left-8 w-32 h-1 bg-black rotate-45 opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-32 h-1 bg-amber-700 -rotate-45 opacity-50"></div>

      <div className="absolute top-20 right-12 w-24 h-1 bg-black rotate-12 opacity-40"></div>
      <div className="absolute bottom-20 left-12 w-24 h-1 bg-amber-700 -rotate-12 opacity-50"></div>

      <div className="absolute top-1/3 left-4 w-12 h-12 border-[3px] border-black rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 right-4 w-16 h-16 border-[3px] border-amber-700 rounded-full opacity-50"></div>

      {/* === Hero Content === */}
      <div className="flex items-center justify-center h-full pt-4 px-4 md:px-8">
        <div className="container mx-auto py-10 max-w-screen-xl">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Teks Gambar */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-start">
              <img 
                src={heroText} 
                alt="Hero Text"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
              />
            </div>

            {/* Gambar Baju */}
            <div className="w-full md:w-3/5 flex justify-center">
              <img
                src={baju}
                alt="Brand T-shirt"
                className="w-full max-w-sm md:max-w-md lg:max-w-xl object-contain"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
