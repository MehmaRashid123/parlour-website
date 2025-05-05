import React from 'react';
import Link from 'next/link';

function Packages() {
  // Package data array for cleaner code
  const packages = [
    {
      name: "BASIC",
      price: 999,
      features: [
        "Haircut & Styling",
        "Basic Manicure",
        "Express Facial (30 mins)"
      ],
      description: "Perfect for quick beauty touch-ups"
    },
    {
      name: "PREMIUM",
      price: 2499,
      features: [
        "Haircut with Blow Dry",
        "Deluxe Manicure & Pedicure",
        "Gold Facial (60 mins)",
        "Eyebrow Threading"
      ],
      description: "Our most popular beauty package",
      popular: true
    },
    {
      name: "DELUXE",
      price: 3999,
      features: [
        "Hair Spa with Treatment",
        "Luxury Manicure & Pedicure",
        "Diamond Facial (90 mins)",
        "Full Body Waxing",
        "Makeup (Basic)"
      ],
      description: "Complete beauty transformation"
    },
    {
      name: "VIP",
      price: 6999,
      features: [
        "Premium Hair Treatment",
        "Signature Spa Pedicure",
        "Platinum Facial (120 mins)",
        "Full Body Massage (60 mins)",
        "Bridal Makeup (Trial)"
      ],
      description: "Luxury pampering experience"
    }
  ];

  return (
    <section className="bg-black text-gray-600 body-font overflow-hidden">
      <div className="container px-4 sm:px-6 py-12 md:py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12 md:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium title-font mb-2 text-white">
            Our Beauty Packages
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
            Choose the perfect package for your beauty needs. All packages include complimentary drinks and consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div key={index} className="w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden transition-transform duration-300 hover:scale-105">
                {pkg.popular && (
                  <span className="bg-white text-black px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                )}
                
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium bg-white text-black rounded-full w-20 mx-auto py-1 text-center">
                  {pkg.name}
                </h2>
                
                <h1 className="text-4xl sm:text-5xl text-white pb-4 mb-4 border-b border-gray-700 leading-none text-center">
                  <span className="text-2xl sm:text-3xl">₹</span>{pkg.price.toLocaleString()}
                </h1>
                
                <ul className="mb-6 space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/appointment?package=${encodeURIComponent(pkg.name)}`}
                  className="mt-auto flex items-center justify-center text-white border-2 border-white py-2 px-4 w-full focus:outline-none hover:bg-white hover:text-black rounded transition-colors duration-300"
                  aria-label={`Book ${pkg.name} Package`}
                >
                  Book Now
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                
                <p className="text-xs text-gray-400 mt-3 text-center">
                  {pkg.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;