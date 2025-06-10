"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import PopupNotification from './PopupNotification'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);


  // Check if user is logged in after component mounts
  useEffect(() => {
    setIsMounted(true);
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get('https://hair-saloon-production.up.railway.app/logout');
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
      }
      setIsLoggedIn(false);
      setShowLogoutPopup(true);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-[#ffb8d5] via-[#ffd6e7] to-[#ffe8f0] shadow-lg">
      <PopupNotification 
        isOpen={showLogoutPopup} 
        onClose={() => setShowLogoutPopup(false)}
        type="logout"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-gray-800 text-3xl font-bold tracking-tight hover:text-pink-600 transition-colors"
            >
              Salon
              <span className="block text-sm font-normal mt-[-4px] text-pink-600/90">Your beauty, our duty</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-800 hover:bg-pink-500/20 px-4 py-2 rounded-lg text-md font-medium transition-all duration-300 hover:scale-105"
              >
                HOME
              </Link>
              <Link
                href="/about-us"
                className="text-gray-800 hover:bg-pink-500/20 px-4 py-2 rounded-lg text-md font-medium transition-all duration-300 hover:scale-105"
              >
                ABOUT
              </Link>
              <Link
                href="/our-services"
                className="text-gray-800 hover:bg-pink-500/20 px-4 py-2 rounded-lg text-md font-medium transition-all duration-300 hover:scale-105"
              >
                SERVICES
              </Link>
              <Link
                href="/contact-us"
                className="text-gray-800 hover:bg-pink-500/20 px-4 py-2 rounded-lg text-md font-medium transition-all duration-300 hover:scale-105"
              >
                CONTACT
              </Link>
              {isMounted && (
                <>
                  {isLoggedIn ? (
                    <button
                      onClick={handleLogout}
                      className="bg-pink-600 text-white px-6 py-2.5 rounded-full text-md font-semibold hover:bg-pink-700 ml-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      LOG OUT
                    </button>
                  ) : (
                    <Link
                      href="/login"
                      className="bg-pink-600 text-white px-6 py-2.5 rounded-full text-md font-semibold hover:bg-pink-700 ml-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      SIGN IN
                    </Link>
                  )}
                  <Link
                    href="/appointment"
                    className="bg-pink-600 text-white px-6 py-2.5 rounded-full text-md font-semibold hover:bg-pink-700 ml-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    Book Appointment
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-pink-600 focus:outline-none p-2 rounded-full hover:bg-pink-500/20 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-6 px-4 bg-gradient-to-b from-[#ffb8d5] to-[#ffe8f0]">
          <div className="flex flex-col space-y-3 pt-2">
            <Link
              href="/"
              className="text-gray-800 hover:bg-pink-500/20 px-4 py-3 rounded-lg text-md font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about-us"
              className="text-gray-800 hover:bg-pink-500/20 px-4 py-3 rounded-lg text-md font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/our-services"
              className="text-gray-800 hover:bg-pink-500/20 px-4 py-3 rounded-lg text-md font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-800 hover:bg-pink-500/20 px-4 py-3 rounded-lg text-md font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
            {isMounted && (
              isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="bg-pink-600 text-white px-6 py-3 rounded-full text-md font-semibold hover:bg-pink-700 text-center mt-2 transition-colors"
                >
                  LOG OUT
                </button>
              ) : (
                <Link
                  href="/login"
                  className="bg-pink-600 text-white px-6 py-3 rounded-full text-md font-semibold hover:bg-pink-700 text-center mt-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  SIGN IN
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}