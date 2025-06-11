import Link from "next/link";
import { FaInstagram, FaFacebook, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-50 to-pink-100 text-gray-800 py-16 px-4 sm:px-6 lg:px-8 border-t border-pink-200">
      <div className="max-w-7xl mx-auto">
        {/* Salon Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-4">
            Luxe Beauty Salon
          </h2>
          <p className="text-lg text-pink-700 max-w-2xl mx-auto">
            Your premier destination for beauty and relaxation
          </p>
        </div>

        {/* Contact Info and Opening Hours - Side by Side */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center mb-12">
          {/* Contact Info */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg flex-1 max-w-md border border-pink-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-6 text-pink-600 text-center">
              Contact Us
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-pink-600 text-xl" />
                </div>
                <span className="text-gray-700">123 Beauty Street, Salon City</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 p-2 rounded-full">
                  <FaPhone className="text-pink-600 text-xl" />
                </div>
                <span className="text-gray-700">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 p-2 rounded-full">
                  <MdEmail className="text-pink-600 text-xl" />
                </div>
                <span className="text-gray-700">contact@luxebeauty.com</span>
              </div>
              <div className="flex justify-center space-x-6 pt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="bg-pink-100 hover:bg-pink-200 p-3 rounded-full text-pink-600 hover:text-pink-800 transition-all duration-300">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                   className="bg-pink-100 hover:bg-pink-200 p-3 rounded-full text-pink-600 hover:text-pink-800 transition-all duration-300">
                  <FaFacebook className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg flex-1 max-w-md border border-pink-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-6 text-pink-600 text-center">
              Opening Hours
            </h3>
            <div className="flex space-x-4">
              <div className="bg-pink-100 p-2 rounded-full h-fit">
                <FaClock className="text-pink-600 text-xl" />
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-pink-600">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links - Below */}
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-3xl mx-auto border border-pink-100 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-pink-600 text-center">
            Quick Links
          </h3>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/our-services", label: "Services" },
              { href: "/about-us", label: "About Us" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact-us", label: "Contact" },
              { href: "/booking", label: "Book Appointment" },
            ].map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg hover:bg-pink-100 hover:text-pink-700 transition-all duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-pink-300 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Luxe Beauty Salon. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Crafted with ♡ by <span className="text-pink-600">Haris Shabbir</span>
          </p>
        </div>
      </div>
    </footer>
  );
}