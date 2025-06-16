import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineHeart, AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const navItems = [
    'Hot Items',
    'Available Items',
    'Collection',
    'Our Store',
    'Search',
  ];

  return (
    <div className="w-full font-poppins text-sm">

    {/* Top Bar */}
<div className="bg-black overflow-hidden whitespace-nowrap">
  <div className="inline-block text-white text-xs tracking-wide px-6 py-2 animate-scroll w-max">
    🎁 FREE SHIPPING 25K ON YOUR FIRST PURCHASE • 🎁 FREE SHIPPING 25K ON YOUR FIRST PURCHASE • 🎁 FREE SHIPPING 25K ON YOUR FIRST PURCHASE
  </div>
</div>


      {/* Logo Section */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <div className="text-xl font-bold tracking-widest">KINGSHOP.</div>
       

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4 text-lg">
          <AiOutlineUser className="cursor-pointer" />
          <AiOutlineHeart className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <AiOutlineShopping />
            <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50" onClick={toggleNav}>
          {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex justify-between items-center px-6 py-4">
        {/* Nav Items */}
        <ul className="flex gap-6 uppercase tracking-widest font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer hover:underline flex items-center gap-1">
              {item === 'Search' && <FiSearch size={14} />}
              {item}
              {item === 'Search' && <span className="border-b border-black w-16 block"></span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-white z-40 p-6 transform duration-300 ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h2 className="text-2xl font-bold text-[#00df9a] mb-6">KINGSHOP.</h2>
        <ul className="space-y-4 uppercase tracking-widest">
          {navItems.map((item, index) => (
            <li key={index} className="border-b border-gray-300 pb-2 flex items-center gap-2 cursor-pointer">
              {item === 'Search' && <FiSearch size={16} />}
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-6 text-xl">
          <AiOutlineUser className="cursor-pointer" />
          <AiOutlineHeart className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <AiOutlineShopping />
            <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
