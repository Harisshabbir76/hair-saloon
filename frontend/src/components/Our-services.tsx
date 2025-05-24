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
    <section className="py-16 bg-gradient-to-br from-[#ffb8d5] via-[#ffd6e7] to-[#ffe8f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Women's Services */}
          <div className="lg:w-1/2 bg-white/60 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-pink-600 text-center">
              For Women
            </h3>
            <ul className="space-y-4">
              {womenServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-pink-500/20 p-1.5 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Men's Services */}
          <div className="lg:w-1/2 bg-white/60 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-pink-600 text-center">
              For Men
            </h3>
            <ul className="space-y-4">
              {menServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-pink-500/20 p-1.5 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}