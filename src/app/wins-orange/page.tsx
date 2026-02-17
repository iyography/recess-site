"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Real reviews data
const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    business: "Freelance Designer",
    review: "Focus Founders changed everything for me. Finally found people who understand why I hyperfocus for 12 hours straight and then can't answer emails for a week. The body doubling sessions are a lifesaver!",
    rating: 5,
    highlight: "Body doubling sessions are a lifesaver!"
  },
  {
    id: 2,
    name: "Marcus T.",
    business: "SaaS Founder",
    review: "I was burning out trying to force my ADHD brain into neurotypical systems. Focus Founders taught me to work WITH my brain, not against it. Revenue up 300% since joining.",
    rating: 5,
    highlight: "Revenue up 300% since joining"
  },
  {
    id: 3,
    name: "Jessica L.",
    business: "E-commerce Store",
    review: "The rejection sensitivity was killing my business growth. Focus Founders gave me tools and a community that actually gets it. Now I pitch confidently and close deals I would have avoided before.",
    rating: 5,
    highlight: "Now I pitch confidently and close deals"
  },
  {
    id: 4,
    name: "David K.",
    business: "Marketing Agency",
    review: "Time blindness made me the worst project manager ever. The ADHD-friendly systems from Focus Founders helped me build processes that actually work for my brain. Clients love the consistency now.",
    rating: 5,
    highlight: "Built processes that work for my brain"
  },
  {
    id: 5,
    name: "Rachel P.",
    business: "Online Coach",
    review: "I used to think my ADHD was a business liability. Focus Founders showed me it's actually my superpower. The hyperfocus sessions help me create months of content in single sittings.",
    rating: 5,
    highlight: "ADHD is actually my superpower"
  },
  {
    id: 6,
    name: "Mike R.",
    business: "Software Developer",
    review: "The emotional dysregulation was sabotaging client relationships. Focus Founders taught me energy management and communication strategies. Now I'm the go-to developer for long-term projects.",
    rating: 5,
    highlight: "Now I'm the go-to developer"
  }
];

export default function WinsOrange() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-red-600 to-orange-800">
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-orange-900/80 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            <Link
              href="/"
              className="font-bold text-2xl md:text-3xl text-white hover:opacity-80 transition-all duration-300"
            >
              Focus Founders
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/#why" className="text-sm text-white/70 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/#features" className="text-sm text-white/70 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/quiz" className="text-sm text-white/70 hover:text-white transition-colors">
                Quiz
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/quiz"
                className="text-xs tracking-widest uppercase px-6 py-2 bg-orange-500 text-black hover:bg-orange-400 transition-all duration-300 rounded-sm"
              >
                Take Quiz
              </Link>
              <Link
                href="https://www.skool.com/focus-founders-free/about"
                className="text-xs tracking-widest uppercase px-6 py-2 bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-300 rounded-sm"
              >
                Join Free
              </Link>
            </div>

            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <div className="pb-16 px-4 sm:px-6 lg:px-8" style={{ paddingTop: '120px' }}>
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-black text-5xl lg:text-7xl text-white mb-8">
              🎉 Member Wins
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Real stories from ADHD entrepreneurs who stopped fighting their brains and started building businesses that work WITH their neurodivergent superpowers.
            </p>
            <div className="bg-orange-500/20 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-white">
                These are actual reviews from Focus Founders members who transformed their businesses by embracing their ADHD.
              </p>
            </div>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-orange-500/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                
                <blockquote className="text-white/90 text-lg leading-relaxed mb-6">
                  "{review.review}"
                </blockquote>
                
                <div className="border-t border-orange-500/20 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <p className="text-orange-300 text-sm">{review.business}</p>
                    </div>
                    <div className="text-orange-400 text-2xl">🚀</div>
                  </div>
                  <div className="mt-3 bg-orange-500/20 rounded-lg p-3">
                    <p className="text-sm text-white font-medium">
                      💡 "{review.highlight}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-orange-500/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of ADHD entrepreneurs who've stopped masking and started thriving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link 
                href="https://www.skool.com/focus-founders-free/about"
                className="inline-block font-sans font-semibold bg-yellow-500 hover:bg-yellow-400 text-black px-12 py-4 rounded-full transition-colors text-lg"
              >
                Join Focus Founders
              </Link>
              <Link 
                href="/quiz"
                className="inline-block font-sans font-semibold bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 px-12 py-4 rounded-full transition-colors text-lg"
              >
                Take ADHD Business Quiz
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}