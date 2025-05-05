import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Services() {
  return (
    <div className='bg-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 xl:px-10'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-center">
        {/* Service 01 */}
        <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md shadow-white overflow-hidden transform transition duration-300 hover:translate-y-2 hover:shadow-lg hover:shadow-white">
          <h3 className='flex justify-center font-bold font-[Montserrat] bg-black text-white h-12 items-center'>Service 01</h3>
          <div className="relative w-full h-48 sm:h-56 md:h-64">
            <Image 
              src="/images/makeup.jpg" 
              alt="Makeup Services" 
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Makeup Services</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">This is a description of the first card.</p>
            <Link 
              href={`/appointment?service=${encodeURIComponent("Service 01 (Makeup Service)")}`} 
              className="inline-block w-full text-center border-2 border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transform transition duration-500 text-sm sm:text-base"
            >
              Get Service
            </Link>
          </div>
        </div>

        {/* Service 02 */}
        <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md shadow-white overflow-hidden transform transition duration-300 hover:translate-y-2 hover:shadow-lg hover:shadow-white">
          <h3 className='flex justify-center font-bold font-[Montserrat] bg-black text-white h-12 items-center'>Service 02</h3>
          <div className="relative w-full h-48 sm:h-56 md:h-64">
            <Image 
              src="/images/hair.jpg" 
              alt="Hair Services" 
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Hair Services</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">This is a description of the first card.</p>
            <Link 
              href={`/appointment?service=${encodeURIComponent("Service 02 (Hair Service)")}`} 
              className="inline-block w-full text-center border-2 border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transform transition duration-500 text-sm sm:text-base"
            >
              Get Service
            </Link>
          </div>
        </div>

        {/* Service 03 */}
        <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md shadow-white overflow-hidden transform transition duration-300 hover:translate-y-2 hover:shadow-lg hover:shadow-white">
          <h3 className='flex justify-center font-bold font-[Montserrat] bg-black text-white h-12 items-center'>Service 03</h3>
          <div className="relative w-full h-48 sm:h-56 md:h-64">
            <Image 
              src="/images/nail.png" 
              alt="Nail Services" 
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Nail Services</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">This is a description of the first card.</p>
            <Link 
              href={`/appointment?service=${encodeURIComponent("Service 03 (Nail Service)")}`} 
              className="inline-block w-full text-center border-2 border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transform transition duration-500 text-sm sm:text-base"
            >
              Get Service
            </Link>
          </div>
        </div>

        {/* Service 04 */}
        <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md shadow-white overflow-hidden transform transition duration-300 hover:translate-y-2 hover:shadow-lg hover:shadow-white">
          <h3 className='flex justify-center font-bold font-[Montserrat] bg-black text-white h-12 items-center'>Service 04</h3>
          <div className="relative w-full h-48 sm:h-56 md:h-64">
            <Image 
              src="/images/face.jpg" 
              alt="Skin & Facial Treatments" 
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Skin & Facial Treatments</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">This is a description of the first card.</p>
            <Link 
              href={`/appointment?service=${encodeURIComponent("Service 04 (Skin & Facial Treatments)")}`} 
              className="inline-block w-full text-center border-2 border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transform transition duration-500 text-sm sm:text-base"
            >
              Get Service
            </Link>
          </div>
        </div>

        {/* Service 05 */}
        <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md shadow-white overflow-hidden transform transition duration-300 hover:translate-y-2 hover:shadow-lg hover:shadow-white">
          <h3 className='flex justify-center font-bold font-[Montserrat] bg-black text-white h-12 items-center'>Service 05</h3>
          <div className="relative w-full h-48 sm:h-56 md:h-64">
            <Image 
              src="/images/wax.jpg" 
              alt="Waxing & Threading" 
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Waxing & Threading</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4">This is a description of the first card.</p>
            <Link 
              href={`/appointment?service=${encodeURIComponent("Service 05 (Waxing & Threading)")}`} 
              className="inline-block w-full text-center border-2 border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transform transition duration-500 text-sm sm:text-base"
            >
              Get Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;