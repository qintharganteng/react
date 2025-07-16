// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200 py-10 px-4">
      {/* === Dekorasi === */}
      <div className="absolute top-4 left-4 w-20 h-1 bg-black rotate-12 opacity-40"></div>
      <div className="absolute bottom-4 right-4 w-20 h-1 bg-amber-700 -rotate-12 opacity-50"></div>
      <div className="absolute top-1/3 right-4 w-10 h-10 border-[2px] border-black rounded-full opacity-30"></div>
      <div className="absolute bottom-1/3 left-4 w-12 h-12 border-[2px] border-amber-700 rounded-full opacity-40"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-2xl font-bold text-black">Manish</div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-gray-500 text-sm">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#" className="hover:text-black transition">Products</a>
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-black transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22,12a10,10,0,1,0-11.65,9.87V15.47H7.09V12h3.26V9.77c0-3.23,1.92-5,4.86-5a19.74,19.74,0,0,1,2.88.25v3.16H16.48c-1.57,0-2.06,1-2.06,2V12h3.51l-.56,3.47H14.42v6.4A10,10,0,0,0,22,12Z" />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23,3a10.9,10.9,0,0,1-3.14,1.53A4.48,4.48,0,0,0,22.4,1a9.09,9.09,0,0,1-2.88,1.1A4.52,4.52,0,0,0,16.11,0C13.3,0,11,2.31,11,5.16A5,5,0,0,0,11.1,6A12.82,12.82,0,0,1,1.64,1.1,5.15,5.15,0,0,0,3.29,7.1,4.48,4.48,0,0,1,1,6.15V6.18A4.52,4.52,0,0,0,4.51,10.6a4.5,4.5,0,0,1-2,.07,4.52,4.52,0,0,0,4.21,3.14A9.07,9.07,0,0,1,1,16.56,9.09,9.09,0,0,1,0,16.5a12.83,12.83,0,0,0,6.95,2" />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.04c-5.52 0-10 4.48-10 10.02 0 4.42 3.62 8.07 8.19 8.72v-6.17h-2.47v-2.55h2.47V9.53c0-2.44 1.44-3.78 3.65-3.78 1.06 0 2.17.19 2.17.19v2.4h-1.22c-1.2 0-1.57.74-1.57 1.5v1.8h2.67l-.43 2.55h-2.24v6.17C18.38 20.13 22 16.48 22 12.06c0-5.54-4.48-10.02-10-10.02z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Manish. All rights reserved.
      </div>
    </footer>
  );
}
