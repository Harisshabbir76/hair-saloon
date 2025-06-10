"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import your images - adjust paths as needed
import menSlider from '../images/menslider.jpeg';
import womenSlider from '../images/womanslider.jpeg';

const slides = [
  {
    id: 1,
    image: menSlider,
    alt: "Men's hairstyle",
    title: "Premium Men's Grooming",
    subtitle: "Expert cuts & styling for the modern man"
  },
  {
    id: 2,
    image: womenSlider,
    alt: "Women's hairstyle",
    title: "Luxury Women's Styling",
    subtitle: "Transform your look with our master stylists"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, nextSlide]);

  // Pause auto-play when user interacts
  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className="w-full flex-shrink-0 relative h-[50vh] md:h-[80vh]"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-4 md:mb-8">
                  {slide.subtitle}
                </p>
                <Link 
                  href="/appointment" 
                  className="inline-block bg-[#e84393] hover:bg-[#fd79a8] text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-lg font-semibold transition-colors"
                  onClick={handleInteraction}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => {
          prevSlide();
          handleInteraction();
        }}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => {
          nextSlide();
          handleInteraction();
        }}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
              handleInteraction();
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white md:w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}