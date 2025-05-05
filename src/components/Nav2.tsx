'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='bg-black w-full h-16 text-white flex justify-between items-center px-4 sm:px-6 lg:px-8'>
        <Link href="/" className='font-extrabold text-2xl sm:text-3xl'>
          Glow Beauty
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex gap-6 lg:gap-8 text-sm lg:text-[14px] font-[Montserrat]'>
          <Link href="/" className='hover:text-gray-300 transition-colors'>Home</Link>
          <Link href="/services" className='hover:text-gray-300 transition-colors'>Services</Link>
          <Link href="/gallery" className='hover:text-gray-300 transition-colors'>Gallery</Link>
          <Link href="/about" className='hover:text-gray-300 transition-colors'>About</Link>
          <Link href="/contact" className='hover:text-gray-300 transition-colors'>Contact</Link>
          <Link 
            href="/appointment" 
            className='bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition-colors'
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden text-2xl focus:outline-none'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Off-Canvas Menu */}
      <div className={`fixed inset-0 text-white bg-black z-50 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className='flex flex-col items-center justify-center h-full space-y-8 text-xl'>
          <Link 
            href="/" 
            className='hover:text-gray-300 transition-colors'
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className='hover:text-gray-300 transition-colors'
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/gallery" 
            className='hover:text-gray-300 transition-colors'
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            href="/about" 
            className='hover:text-gray-300 transition-colors'
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className='hover:text-gray-300 transition-colors'
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/appointment" 
            className='bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors'
            onClick={() => setIsMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav2;