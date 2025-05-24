"use client";

import Image from "next/image";
import womenServicesImage from "../../images/women-services.jpeg";
import menServicesImage from "../../images/men-services.jpeg";

export default function ServicesPage() {
  const womenServices = [
    "Haircut & Styling",
    "Hair Coloring",
    "Balayage & Highlights",
    "Keratin Treatment",
    "Hair Spa",
    "Bridal Makeup",
    "Facial Treatments",
    "Waxing & Threading",
    "Manicure & Pedicure"
  ];

  const menServices = [
    "Men's Haircut",
    "Beard Trim & Styling",
    "Hair Coloring",
    "Hair Spa",
    "Scalp Treatment",
    "Shaving Services",
    "Facial for Men",
    "Waxing",
    "Manicure & Pedicure"
  ];

  return (
    <div className="bg-gradient-to-br from-[#ffb8d5] via-[#ffd6e7] to-[#ffe8f0]">
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-white/10 backdrop-blur-sm"></div>
      </div>

      {/* Women's Services Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400">
                Services For Women
              </span>
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Services List - Left */}
            <div className="lg:w-1/2 bg-white/70 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-all duration-300">
              <ul className="space-y-5">
                {womenServices.map((service, index) => (
                  <li key={`women-${index}`} className="flex items-center group">
                    <div className="bg-pink-500/20 p-2 rounded-full mr-5 transition-all duration-300 group-hover:bg-pink-500/30 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xl font-medium text-gray-700 group-hover:text-pink-600 transition-colors duration-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image - Right */}
            <div className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] transform hover:scale-[1.02] transition-all duration-500">
              <Image
                src={womenServicesImage}
                alt="Women's salon services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <span className="inline-block bg-white/90 text-pink-600 px-6 py-2 rounded-full text-lg font-semibold backdrop-blur-sm">
                  Luxury Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Men's Services Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400">
                Services For Men
              </span>
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Services List - Right */}
            <div className="lg:w-1/2 bg-white/70 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-all duration-300">
              <ul className="space-y-5">
                {menServices.map((service, index) => (
                  <li key={`men-${index}`} className="flex items-center group">
                    <div className="bg-pink-500/20 p-2 rounded-full mr-5 transition-all duration-300 group-hover:bg-pink-500/30 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xl font-medium text-gray-700 group-hover:text-pink-600 transition-colors duration-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image - Left */}
            <div className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] transform hover:scale-[1.02] transition-all duration-500">
              <Image
                src={menServicesImage}
                alt="Men's salon services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <span className="inline-block bg-white/90 text-pink-600 px-6 py-2 rounded-full text-lg font-semibold backdrop-blur-sm">
                  Premium Grooming
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}