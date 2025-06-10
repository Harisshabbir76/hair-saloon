import Link from "next/link";
import { FaInstagram, FaFacebook, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#ffb8d5] via-[#ffd6e7] to-[#ffe8f0] text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Salon Info - Centered on mobile */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-2xl font-bold">Salon</h3>
          <p className="text-lg">Your Beauty, Our Duty</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-center md:text-left">Contact Us</h4>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-pink-600 text-xl mt-1" />
              <span>123 Beauty Street, Salon City</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-pink-600 text-xl" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-3">
              <MdEmail className="text-pink-600 text-xl" />
              <span>contact@salon.com</span>
            </div>
            {/* Social Icons moved here */}
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-center md:text-left">Opening Hours</h4>
            <div className="flex space-x-3">
              <FaClock className="text-pink-600 text-xl mt-1 flex-shrink-0" />
              <div className="space-y-1">
                <p className="whitespace-nowrap">Monday - Friday: 9am - 7pm</p>
                <p className="whitespace-nowrap">Saturday: 10am - 6pm</p>
                <p className="whitespace-nowrap">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-center md:text-left">Quick Links</h4>
            <nav className="flex flex-col space-y-2 items-center md:items-start">
              <Link href="/" className="hover:text-pink-600 transition-colors">Home</Link>
              <Link href="/our-services" className="hover:text-pink-600 transition-colors">Services</Link>
              <Link href="/about-us" className="hover:text-pink-600 transition-colors">About Us</Link>
              <Link href="/contact-us" className="hover:text-pink-600 transition-colors">Contact</Link>
              <Link href="/booking" className="hover:text-pink-600 transition-colors">Book Appointment</Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-pink-200 text-center">
          <p>&copy; {new Date().getFullYear()} Salon. All rights reserved.</p>
          <p className="text-sm">Designed by Haris Shabbir</p>
        </div>
      </div>
    </footer>
  );
}