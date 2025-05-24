"use client";

import Link from "next/link";
import Image from "next/image";
import salonEquipment from "../images/salon-equipment.jpeg"; // Replace with your image path

export default function HeroWelcome() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-[#ffb8d5] via-[#ffd6e7] to-[#ffe8f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              WELCOME TO <span className="text-pink-600">SALON</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
              SALON WHERE "ME TIME" IS YOUR
            </h2>
            
            <h3 className="text-xl md:text-2xl font-semibold text-pink-600 mb-8">
              DESERVING OPULENCE.
            </h3>
            
            <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-700">
              Let us help your beauty manifest while you relax in our sanctuary. At Salon,
              we offer a full range of hair, beauty and spa services. We invite you to
              schedule an appointment with us today.
            </p>
            
            <Link
              href="/booking"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-block transition-all duration-300 hover:shadow-lg"
            >
              Book Today
            </Link>
          </div>

          {/* Image - Right Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={salonEquipment}
                alt="Professional salon equipment"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}