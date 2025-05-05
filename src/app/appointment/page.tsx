'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Nav2 from '@/components/Nav2';
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { useSearchParams } from 'next/navigation';

export default function Appointment() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setSelectedService(serviceParam);
    }
  }, [serviceParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Handle form submission logic here
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Nav2 />

      <main className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold font-[Montserrat] mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            We would love to serve you. Fill out the form below to schedule your session.
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
          <form 
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            </div>

            <div>
              <label htmlFor="service" className="sr-only">Select Service</label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition appearance-none"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="">Select Service</option>
                <option value="Service 01 (Makeup Service)">Service 01 (Makeup Service)</option>
                <option value="Service 02 (Hair Service)">Service 02 (Hair Service)</option>
                <option value="Service 03 (Nail Service)">Service 03 (Nail Service)</option>
                <option value="Service 04 (Skin & Facial Treatments)">Service 04 (Skin & Facial Treatments)</option>
                <option value="Service 05 (Waxing & Threading)">Service 05 (Waxing & Threading)</option>
              </select>
            </div>

            <div>
              <label htmlFor="datetime" className="sr-only">Date & Time</label>
              <input
                id="datetime"
                type="datetime-local"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-pink-600 text-white font-semibold py-3 rounded-lg hover:bg-pink-700 transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Processing...' : 'Book Appointment'}
            </button>
          </form>

          <div className="px-6 sm:px-8 pb-8 text-center">
            <p className="text-gray-400 mb-4">Prefer instant booking?</p>
            <Link 
              href="https://wa.me/+923432974210" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}