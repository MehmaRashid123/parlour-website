import React from 'react';
import { IoPhonePortraitOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";

function Contact() {
  return (
    <div className="bg-black">
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-9 p-4 max-w-7xl mx-auto">
        {/* Phone Card */}
        <div className='bg-[#111111] h-96 w-full md:w-96 flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
          <div className='text-white text-8xl mb-4'>
            <IoPhonePortraitOutline />
          </div>
          <h2 className='text-4xl text-white font-light mb-2'>Contact Us</h2>
          <a href="tel:+923432974210" className='text-lg font-medium text-gray-400 hover:text-white transition-colors'>
            0343 2974210
          </a>
          <a href="tel:+923432974210" className='text-lg font-medium text-gray-400 hover:text-white transition-colors'>
            0343 2974210
          </a>
        </div>

        {/* Email Card */}
        <div className='bg-[#111111] h-96 w-full md:w-96 flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
          <div className='text-white text-8xl mb-4'>
            <IoMailOutline />
          </div>
          <h2 className='text-4xl text-white font-light mb-2'>Email Us</h2>
          <a href="mailto:example@email.com" className='text-lg font-medium text-gray-400 hover:text-white transition-colors'>
            example@email.com
          </a>
          <a href="mailto:support@email.com" className='text-lg font-medium text-gray-400 hover:text-white transition-colors'>
            support@email.com
          </a>
        </div>

        {/* Location Card */}
        <div className='bg-[#111111] h-96 w-full md:w-96 flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
          <div className='text-white text-8xl mb-4'>
            <IoLocationOutline />
          </div>
          <h2 className='text-4xl text-white font-light mb-2'>Find Us</h2>
          <p className='text-lg font-medium text-gray-400 text-center px-4'>
            D.H.A. Phase 2, Karachi, Pakistan
          </p>
          <div className="mt-4 w-full px-4">
            <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7241.671201287095!2d67.05295349560409!3d24.835295148429022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c3765cb8f1f%3A0x1fdb63938983f474!2sD.H.A.%20Phase%202%20Phase%202%20Defence%20Housing%20Authority%2C%20Karachi%2C%2075500%2C%20Pakistan!5e0!3m2!1sen!2s!4v1746207070278!5m2!1sen!2s" 
                className="w-full h-48"
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Our location on Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;