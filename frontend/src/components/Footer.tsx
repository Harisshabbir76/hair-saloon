import Link from "next/link";
import { FaInstagram, FaFacebook, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-50 to-pink-100 text-gray-800 py-8 px-4 border-t border-pink-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* Contact Info - Left */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-3 text-pink-600">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-pink-500" />
                <span>123 Beauty Street, Salon City</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-pink-500" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-pink-500" />
                <span>contact@luxebeauty.com</span>
              </div>
              <div className="flex gap-4 mt-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="text-pink-500 hover:text-pink-700 transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                   className="text-pink-500 hover:text-pink-700 transition-colors">
                  <FaFacebook className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours - Middle */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-3 text-pink-600">Opening Hours</h3>
            <div className="flex gap-2">
              <FaClock className="text-pink-500 mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <p className="whitespace-nowrap">Monday - Friday: 9am - 7pm</p>
                <p className="whitespace-nowrap">Saturday: 10am - 6pm</p>
                <p className="whitespace-nowrap">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Quick Links - Right */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-3 text-pink-600">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link href="/" className="hover:text-pink-700 transition-colors">Home</Link>
              <Link href="/our-services" className="hover:text-pink-700 transition-colors">Services</Link>
              <Link href="/about-us" className="hover:text-pink-700 transition-colors">About Us</Link>
              <Link href="/gallery" className="hover:text-pink-700 transition-colors">Gallery</Link>
              <Link href="/contact-us" className="hover:text-pink-700 transition-colors">Contact</Link>
              <Link href="/booking" className="hover:text-pink-700 transition-colors">Book Appointment</Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-pink-200 text-center text-sm">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Luxe Beauty Salon. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-1">Crafted with ♡ by Haris Shabbir</p>
        </div>
      </div>
    </footer>
  );
}