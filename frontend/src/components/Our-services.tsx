"use client";

export default function Services() {
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
    <section className="py-12 md:py-16 bg-gradient-to-br from-[#ffb8d5] via-[#ffd6e7] to-[#ffe8f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Our Services
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Men's Services - Left side on mobile and desktop */}
          <div className="w-full md:w-1/2 bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg order-1 md:order-1">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-pink-600 text-center md:text-left">
              For Men
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {menServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-pink-500/20 p-1 md:p-1.5 rounded-full mr-3 md:mr-4 mt-0.5 md:mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Women's Services - Right side on mobile and desktop */}
          <div className="w-full md:w-1/2 bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg order-2 md:order-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-pink-600 text-center md:text-left">
              For Women
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {womenServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-pink-500/20 p-1 md:p-1.5 rounded-full mr-3 md:mr-4 mt-0.5 md:mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}