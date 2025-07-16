// src/pages/LandingPage.jsx

import Navbar from '../layout/Navbar';
import Hero from '../layout/Hero';
import CardLive from '/src/layout/CardLive'; // ✅ Huruf besar S
import CardProduct from '/src/layout/CardProduk'; // ✅ Huruf besar S
import Footer from '/src/layout/Footer'; // ✅ Huruf besar S

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CardLive />
        {/* <CardProduct /> */}

      </main>
      {/* <Footer /> */}
    </div>
  );
}
