"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-sm ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="hover:opacity-80 transition-all duration-300"
          >
            <img 
              src="/logo.png" 
              alt="Focus Founders" 
              className="h-12 md:h-15 w-auto"
            />
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#why"
              className="font-sans text-sm text-gray-600 hover:text-black transition-colors"
            >
              About
            </a>
            <a
              href="/#features"
              className="font-sans text-sm text-gray-600 hover:text-black transition-colors"
            >
              Features
            </a>
            <a
              href="/#for-you"
              className="font-sans text-sm text-gray-600 hover:text-black transition-colors"
            >
              For You
            </a>
            <a
              href="/quiz"
              className="font-sans text-sm text-gray-600 hover:text-black transition-colors"
            >
              Quiz
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="/quiz"
              className="font-sans text-xs tracking-widest uppercase px-6 py-2 bg-orange-500 text-black hover:bg-orange-400 transition-all duration-300 rounded-sm"
            >
              Take Quiz
            </a>
            <a
              href="https://www.skool.com/focus-founders-free/about"
              className="font-sans text-xs tracking-widest uppercase px-6 py-2 bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 rounded-sm"
            >
              Join Focus Founders FREE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
