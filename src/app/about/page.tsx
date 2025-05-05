import React from 'react';
import Navbar from '@/components/Navbar';
import Nav2 from '@/components/Nav2';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-black text-gray-800 min-h-screen">
      <Navbar />
      <Nav2 />
      
      {/* About Us Section */}
      <section className="flex flex-col md:flex-row items-center justify-center font-[Montserrat] bg-black text-white py-12 px-4 sm:px-6 lg:px-20 gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 max-w-2xl">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white text-center md:text-left">
            About Us
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
            Welcome to <span className="font-semibold text-pink-400">Glow Beauty</span>, where timeless beauty meets modern elegance.
            We specialize in luxury bridal services designed to make every bride look and feel radiant on her most cherished day.
            At the heart of our philosophy is the belief that bridal beauty is both an art and a responsibility—
            one we proudly uphold with care, expertise, and passion.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center max-w-[500px]">
          <Image
            className="w-full rounded-lg shadow-md object-cover aspect-square"
            alt="Our Staff"
            src="/images/staff.webp"
            width={500}
            height={500}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="text-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-20 gap-6">
        <h3 className="font-bold text-3xl sm:text-4xl font-[Montserrat] text-center">
          Our Story
        </h3>
        <p className="text-base sm:text-lg leading-relaxed w-full max-w-4xl text-center">
          Founded in 2000, <span className="text-pink-400 font-semibold">Glow Beauty</span> was born out of a desire to create a dedicated space for brides-to-be—a place where tradition, glamour, and individuality merge to create unforgettable bridal transformations.
          Over the years, we have become a trusted name in bridal beauty, known for our attention to detail, personalized care, and high standards of excellence.
        </p>
      </section>

      {/* The Bridal Experience */}
      <section className="text-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-20 gap-6">
        <h3 className="font-bold text-3xl sm:text-4xl font-[Montserrat] text-center">
          The Bridal Experience
        </h3>
        <div className="w-full max-w-4xl space-y-6">
          <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
            Your wedding day is more than an event; it's a journey. From the first consultation to the final touch-up, we are with you every step of the way. We begin with personalized bridal consultations to understand your skin type, outfit theme, and personal style. Whether your dream look is regal and traditional or soft and modern, our artists craft it with precision and flair.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
            Our bridal makeup includes premium, long-lasting products that photograph beautifully and withstand long hours without compromising your comfort or glow. Paired with elegant hairstyles and customized skincare regimens, your bridal look is sure to leave a lasting impression.
          </p>
        </div>
      </section>

      {/* Our Team of Experts */}
      <section className="text-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-20 gap-6">
        <h3 className="font-bold text-3xl sm:text-4xl font-[Montserrat] text-center">
          Our Team of Experts
        </h3>
        <p className="text-base sm:text-lg leading-relaxed w-full max-w-4xl text-center md:text-left">
          Our handpicked team of bridal makeup artists, hairstylists, and skincare professionals are not only highly skilled but also passionate about their work. With years of experience and training in the latest techniques and trends, our artists bring a blend of creativity, sensitivity, and professionalism to every session. Every bride receives our full attention—because no two brides are alike.
        </p>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-8 py-8 w-full max-w-6xl">
          {[
            { name: "Mrs. Alina", role: "Bridal Makeup Artist" },
            { name: "Mrs. Ayesha", role: "Expert Nail Artist" },
            { name: "Mrs. Alina", role: "Expert Mehndi Artist" }
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center gap-4 text-white">
              <div className="relative h-40 w-40">
                <Image 
                  src="/images/female.webp"
                  className="bg-white rounded-full object-cover"
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100px, 160px"
                />
              </div>
              <h5 className="text-xl font-semibold">{member.name}</h5>
              <p className="text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}