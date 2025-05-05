import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

function Navbar() {
  return (
    <div className='bg-[#141428] w-full text-white'>
      <div className='container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center'>
        {/* Left side - Contact info */}
        <div className='flex flex-wrap justify-center md:justify-start gap-4 md:gap-5 lg:gap-20 mb-2 md:mb-0 text-xs sm:text-sm md:text-[14px]'>
          <Link href="#" className='hover:text-gray-300 transition-colors'>
            <span>Address Here,</span>
          </Link>
          <Link href="#" className='hover:text-gray-300 transition-colors'>
            <span>Contact Here</span>
          </Link>
          <Link href="mailto:info@abc.com" className='hover:text-gray-300 transition-colors'>
            <span>info@abc.com</span>
          </Link>
        </div>

        {/* Right side - Social icons */}
        <div className='flex gap-3 sm:gap-4 md:gap-5 text-base sm:text-lg md:text-[18px]'>
          <Link 
            href="#" 
            aria-label="Instagram"
            className='hover:text-gray-300 transition-colors'
          >
            <FaInstagram />
          </Link>
          <Link 
            href="#" 
            aria-label="Facebook"
            className='hover:text-gray-300 transition-colors'
          >
            <FaFacebookF />
          </Link>
          <Link 
            href="mailto:info@abc.com" 
            aria-label="Email"
            className='hover:text-gray-300 transition-colors'
          >
            <BiLogoGmail />
          </Link>
          <Link 
            href="#" 
            aria-label="Location"
            className='hover:text-gray-300 transition-colors'
          >
            <MdLocationOn />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;