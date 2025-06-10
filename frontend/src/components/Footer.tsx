import Link from "next/link";
import { FaInstagram, FaFacebook, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#ffb8d5] via-[#ffd6e7] to-[#ffe8f0] text-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main content row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between">
          {/* Contact Info */}
          <div className="space-y-3 flex-1">
            <h4 className="text-lg md:text-xl font-semibold">Contact Info</h4>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-pink-600 text-lg mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base">123 Beauty Street, Salon City</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-pink-600 text-lg" />
              <span className="text-sm md:text-base">(123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-3">
              <MdEmail className="text-pink-600 text-lg" />
              <span className="text-sm md:text-base">contact@salon.com</span>
            </div>
            <div className="flex space-x-4 pt-1">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaInstagram className="text-xl md:text-2xl" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
                <FaFacebook className="text-xl md:text-2xl" />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3 flex-1">
            <h4 className="text-lg md:text-xl font-semibold">Opening Hours</h4>
            <div className="flex space-x-3">
              <FaClock className="text-pink-600 text-lg mt-0.5 flex-shrink-0" />
              <div className="space-y-1 text-sm md:text-base">
                <p>Monday - Friday: 9am - 7pm</p>
                <p>Saturday: 10am - 6pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 flex-1">
            <h4 className="text-lg md:text-xl font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm md:text-base">
              <Link href="/" className="hover:text-pink-600 transition-colors">Home</Link>
              <Link href="/our-services" className="hover:text-pink-600 transition-colors">Services</Link>
              <Link href="/about-us" className="hover:text-pink-600 transition-colors">About Us</Link>
              <Link href="/contact-us" className="hover:text-pink-600 transition-colors">Contact</Link>
              <Link href="/booking" className="hover:text-pink-600 transition-colors">Book Appointment</Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto pt-6 mt-6 border-t border-pink-200 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Salon. All rights reserved.</p>
          <p className="text-xs mt-1">Designed by Haris Shabbir</p>
        </div>
      </div>
    </footer>
  );
}