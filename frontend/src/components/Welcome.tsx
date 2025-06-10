"use client";

import Link from "next/link";
import Image from "next/image";
import salonEquipment from "../images/salon-equipment.jpeg";

export default function HeroWelcome() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-r from-[#ffb8d5] via-[#ffd6e7] to-[#ffe8f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Text Content - Centered on mobile */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800">
              WELCOME TO <span className="text-pink-600">SALON</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-3 md:mb-4 text-gray-800">
              SALON WHERE &quot;ME TIME&quot; IS YOUR
            </h2>
            
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-600 mb-6 md:mb-8">
              DESERVING OPULENCE.
            </h3>
            
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-gray-700 px-4 md:px-0">
              Let us help your beauty manifest while you relax in our sanctuary. At Salon,
              we offer a full range of hair, beauty and spa services. We invite you to
              schedule an appointment with us today.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/booking"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold inline-block transition-all duration-300 hover:shadow-lg"
              >
                Book Today
              </Link>
            </div>
          </div>

          {/* Image - Full width on mobile, half on desktop */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={salonEquipment}
                alt="Professional salon equipment"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}