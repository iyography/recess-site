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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/80 backdrop-blur-md ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="font-bold text-2xl md:text-3xl text-white hover:opacity-80 transition-all duration-300"
          >
            Focus Founders
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#why"
              className="font-sans text-sm text-white/70 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="/#features"
              className="font-sans text-sm text-white/70 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="/#for-you"
              className="font-sans text-sm text-white/70 hover:text-white transition-colors"
            >
              For You
            </a>
            <a
              href="/quiz"
              className="font-sans text-sm text-white/70 hover:text-white transition-colors"
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
