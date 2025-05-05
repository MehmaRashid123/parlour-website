import Image from 'next/image';
import React from 'react';

const brides = [
  {
    name: "Ayesha & Zain",
    image: "/images/img1.jpg",
    subtitle: "Elegant Bridal Look",
    description: "Soft glam, traditional jewelry, and a dewy finish for her special day.",
  },
  {
    name: "Hira",
    image: "/images/img2.jpg",
    subtitle: "Royal Mehndi Look",
    description: "Bright tones with festive florals and bold eye makeup.",
  },
  {
    name: "Sarah's Walima",
    image: "/images/img3.webp",
    subtitle: "Walima Glow",
    description: "Subtle elegance with a radiant complexion and nude tones.",
  },
  {
    name: "Mehak",
    image: "/images/img4.jpg",
    subtitle: "Classic Barat Look",
    description: "A traditional red bridal look with regal gold detailing and bold lips.",
  },
  {
    name: "Sana",
    image: "/images/img5.jpg",
    subtitle: "Haldi Ceremony Glow",
    description: "Minimal makeup with floral jewelry and vibrant hues for a day function.",
  },
  {
    name: "Areeba",
    image: "/images/img6.jpg",
    subtitle: "Reception Elegance",
    description: "Smokey eyes, soft curls, and nude lips for a grand reception night.",
  },
  {
    name: "Noor Fatima",
    image: "/images/img7.jpg",
    subtitle: "Traditional Beauty",
    description: "Ornate jewelry and deep tones for a classic desi bride aesthetic.",
  },
  {
    name: "Iqra & Asad",
    image: "/images/img8.jpg",
    subtitle: "Couple Shoot",
    description: "Soft makeup to match the elegant theme of their couple session.",
  },
];

function Gallery() {
  return (
    <section className="text-gray-800 body-font ">
      <div className="container px-5 py-12 md:py-24 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold title-font text-white mb-4">Our Beloved Brides</h1>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-gray-600">
            A glimpse of the radiant brides we've had the honor of styling for their big day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {brides.map((bride, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="aspect-w-4 aspect-h-5 w-full">
                <Image
                  className="w-full h-full object-cover object-center"
                  src={bride.image}
                  alt={bride.name}
                  width={400}
                  height={500}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlZWVlIi8+PC9zdmc+"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6 text-white">
                <h2 className="text-sm md:text-base font-semibold text-pink-200">{bride.subtitle}</h2>
                <h1 className="text-lg md:text-xl font-bold">{bride.name}</h1>
                <p className="text-xs md:text-sm mt-1 md:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">{bride.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;