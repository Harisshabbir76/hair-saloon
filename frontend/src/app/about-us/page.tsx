"use client";

import Image from "next/image";
import salonInterior from "../../images/salon-interior.jpeg"; // Replace with your image

export default function AboutUs() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-[#ffb8d5] via-[#ffd6e7] to-[#ffe8f0] text-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-200/40"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-pink-200/30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={salonInterior}
              alt="Our salon interior"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white">Since 2010</h3>
              <p className="text-white/90">Crafting beautiful looks</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
              <span className="bg-pink-500/20 text-gray-800 px-2 py-1 rounded-lg">About Our Salon</span>
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed">
              Welcome to <span className="font-semibold text-pink-600">Salon</span>, where beauty meets expertise. 
              Founded in 2010, we've been transforming hair into works of art for both 
              men and women in a luxurious, welcoming environment.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-pink-500/20 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>
                  <span className="font-semibold text-pink-600">Certified Professionals</span> - Our stylists are trained in the latest techniques.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-500/20 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>
                  <span className="font-semibold text-pink-600">Premium Products</span> - We use only top-quality hair care brands.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-pink-500/20 p-2 rounded-full mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>
                  <span className="font-semibold text-pink-600">Hygienic Environment</span> - Your safety and comfort are our priority.
                </p>
              </div>
            </div>
            
            <button className="bg-pink-600 text-white hover:bg-pink-700 px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg">
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}