"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import salonBackground from "../images/logo.jpeg";

const testimonials = [
  {
    id: 1,
    quote: "I had a very good experience with Salon. I asked them to enhance my eyebrows. Thanks for providing an amazing service!",
    author: "Zalutda Mirza"
  },
  {
    id: 2,
    quote: "The best haircut I&apos;ve ever had! The stylist really understood what I wanted.",
    author: "Michael Johnson"
  },
  {
    id: 3,
    quote: "Relaxing atmosphere and professional staff. My go-to salon for all beauty treatments.",
    author: "Sarah Williams"
  },
  {
    id: 4,
    quote: "Fantastic coloring service! My hair has never looked better.",
    author: "Emily Chen"
  },
  {
    id: 5,
    quote: "The facial treatment was incredibly rejuvenating. Highly recommend!",
    author: "David Rodriguez"
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 min-h-[500px]">
      <div className="absolute inset-0 z-0">
        <Image
          src={salonBackground}
          alt="Salon background"
          fill
          className="object-cover brightness-105 contrast-105"
          quality={90}
          priority
          style={{
            objectPosition: "center",
            filter: "saturate(1.1)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffb8d5]/60 via-[#ffd6e7]/60 to-[#ffe8f0]/60"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 drop-shadow-sm">
          Our Clients Say
        </h2>
        
        <div className="max-w-4xl mx-auto relative h-64">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center ${
                index === currentTestimonial ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="bg-white/60 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-2xl mx-auto border border-white/30">
                <p className="text-lg md:text-xl italic mb-6 text-gray-800">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-semibold text-pink-600 drop-shadow-sm">
                  — {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-pink-600 w-7 scale-110' 
                  : 'bg-pink-300/80 hover:bg-pink-400'
              }`}
              aria-label={`View testimonial from ${testimonials[index].author}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}