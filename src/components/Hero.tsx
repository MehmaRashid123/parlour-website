'use client'; // Add this at the top to make it a Client Component

import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';

// No need for separate VideoHero component since we're handling it directly
const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-center items-center min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Text Content */}
      <div className="z-10 flex flex-col justify-center items-center p-6 lg:p-12 w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <h5 className="font-[Montserrat] text-xs sm:text-sm tracking-widest uppercase opacity-80">
          Welcome to
        </h5>
        <h1 className="font-[Montserrat] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          THE GLOW BEAUTY
        </h1>
        <p className="text-base sm:text-lg max-w-md md:max-w-xl leading-relaxed">
          Step into our luxurious parlour where elegance meets expertise. From flawless makeovers to soothing spa treatments, we bring out your natural glow with personalized care.
        </p>
        <Link 
          href="/appointment" 
          className="mt-4 inline-block border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label="Book an appointment"
        >
          Book Appointment
        </Link>
      </div>

      {/* Video Background - Directly included */}
      <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full">
        <div className="absolute inset-0 bg-black opacity-30 lg:opacity-0 z-0"></div>
    <video
      src="/images/add.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="object-cover w-full h-full"
    />
       
      </div>
    </div>
  );
};

export default Hero;