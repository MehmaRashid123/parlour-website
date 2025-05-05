import Nav2 from '@/components/Nav2';
import Navbar from '@/components/Navbar';
import React from 'react'
import ContactComponent from '@/components/Contact';
import Footer from '@/components/Footer';


function Contact() {
  return (
    <div>
        <Navbar/>
        <Nav2/>
        <div className='flex justify-center items-center'>
        <ContactComponent/>
        </div>
    </div>
  )
}

export default Contact
