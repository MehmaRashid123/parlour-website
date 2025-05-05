import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Nav2 from '@/components/Nav2';
import Services from '@/components/Services';

function services() {
  return (
    <div className='bg-black h-screen'>
      <Navbar/>
      <Nav2/>
   <Services/>
    </div>
  );
}

export default services;
