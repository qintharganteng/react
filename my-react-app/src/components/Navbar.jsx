import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    // { id: 0, text: 'Home' },
    { id: 1, text: 'Hot Items' },
    { id: 2, text: 'Avainlable Items ' },
    // { id: 4, text: 'Collection' },
    { id: 5, text: 'Search' },
  ];

  return (
    <div className='bg-white flex justify-between items-center h-24 w-full px-4 text-black   font-poppins'>
      {/* Logo */}
      <h1 className='text-3xl font-bold text-[#00df9a]'>KINGSHOP.</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
     <ul
  className={
    nav
      ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 font-poppins z-50'
      : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] font-poppins z-50'
  }
     >

        <h1 className='text-3xl font-bold text-[#00df9a] m-4'>KINGSHOP</h1>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
