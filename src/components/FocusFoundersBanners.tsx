"use client";

import { useState } from "react";

// Hidden Banner One - "Find Your Neurospicy Tribe" Theme
function HiddenBannerOne() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-8 rounded-xl shadow-2xl max-w-5xl mx-auto my-8">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-3">
            🧠 NEUROSPICY ENTREPRENEURS UNITE
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Finally, People Who 
            <span className="text-yellow-400"> Actually Get It</span>
          </h2>
          <p className="text-xl text-blue-100 mb-6 leading-relaxed">
            Stop trying to fit into neurotypical business advice. Join 1,000+ ADHD, Autism, AuDHD, and OCD entrepreneurs building businesses that work with their brains, not against them.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <span>Daily virtual co-working calls for body-doubling</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <span>Monthly business growth challenges with friends</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 text-xl">✓</span>
              <span>Community that celebrates neurodivergent strengths</span>
            </div>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-full transition-colors text-lg mr-4">
            Join Your Tribe - FREE
          </button>
          <div className="text-blue-200 text-sm mt-4">
            🌎 Based in Austin, TX • Welcome worldwide
          </div>
        </div>
        <div className="text-center lg:text-right">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="text-yellow-400 text-5xl font-bold">1,000+</div>
            <div className="text-lg mb-4">Neurospicy Founders</div>
            <div className="text-yellow-400 text-3xl font-bold">100%</div>
            <div className="text-lg mb-4">Understanding</div>
            <div className="text-yellow-400 text-3xl font-bold">FREE</div>
            <div className="text-lg">Community Access</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hidden Banner Two - "The Focus Founders Way" Theme  
function HiddenBannerTwo() {
  return (
    <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-800 text-white p-8 rounded-xl shadow-2xl max-w-5xl mx-auto my-8">
      <div className="text-center mb-8">
        <div className="text-yellow-300 text-sm font-semibold uppercase tracking-wider mb-4">
          🚀 THE FOCUS FOUNDERS WAY
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Good People + Focused Effort + Self-Love = 
          <br />
          <span className="text-yellow-300">Massive World Impact</span>
        </h2>
        <p className="text-2xl text-emerald-100 mb-8 max-w-4xl mx-auto leading-relaxed">
          Stop fighting your ADHD. Start building a business that leverages your neurodivergent superpowers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-emerald-900/50 rounded-lg p-6 text-center">
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="text-xl font-bold mb-3">Neurodivergent Strengths</h3>
          <p className="text-emerald-200">
            Hyperfocus, creativity, pattern recognition, and out-of-the-box thinking
          </p>
        </div>
        
        <div className="bg-teal-900/50 rounded-lg p-6 text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold mb-3">Community Support</h3>
          <p className="text-emerald-200">
            Body-doubling, accountability, and entrepreneurs who actually understand
          </p>
        </div>
        
        <div className="bg-cyan-900/50 rounded-lg p-6 text-center">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="text-xl font-bold mb-3">Real Results</h3>
          <p className="text-emerald-200">
            Get paid for your passion while making a massive world impact
          </p>
        </div>
      </div>

      <div className="bg-black/20 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4 text-center">What Makes Us Different</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl">🎯</span>
              <div>
                <div className="font-semibold">ADHD-Specific Strategies</div>
                <div className="text-sm text-emerald-200">Business advice that works with your brain</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl">⚡</span>
              <div>
                <div className="font-semibold">Daily Accountability</div>
                <div className="text-sm text-emerald-200">Virtual co-working for body-doubling</div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl">🌟</span>
              <div>
                <div className="font-semibold">Neurodiversity Celebration</div>
                <div className="text-sm text-emerald-200">Your differences are your superpowers</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-300 text-xl">🏆</span>
              <div>
                <div className="font-semibold">Proven Community</div>
                <div className="text-sm text-emerald-200">Top-ranked community with real engagement</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-12 rounded-full transition-colors text-xl">
          Join Focus Founders
        </button>
        <div className="text-emerald-300 text-sm mt-4">
          ADHD? Autism? AuDHD? OCD? Whatever - you are welcome here! 😊
        </div>
      </div>
    </div>
  );
}

// Hidden Banner Three - "Stop the Struggle" Theme
function HiddenBannerThree() {
  return (
    <div className="bg-black text-white p-8 rounded-xl shadow-2xl max-w-5xl mx-auto my-8 border-2 border-purple-500">
      <div className="text-center mb-8">
        <div className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-4">
          💜 NEURODIVERGENT ENTREPRENEURS
        </div>
        <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-red-500">Stop</span> Fighting Your Brain.{" "}
          <span className="text-green-500">Start</span> Building Your Empire.
        </h2>
        <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Tired of business advice that doesn't work for ADHD minds? Join the community where neurodivergent entrepreneurs thrive.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="text-center">
          <div className="text-purple-400 text-6xl font-bold mb-2">1K+</div>
          <div className="text-lg text-white mb-2">Neurospicy Members</div>
          <div className="text-sm text-gray-400">Growing every day</div>
        </div>
        
        <div className="text-center">
          <div className="text-green-400 text-6xl font-bold mb-2">FREE</div>
          <div className="text-lg text-white mb-2">Community Access</div>
          <div className="text-sm text-gray-400">No barriers to entry</div>
        </div>
        
        <div className="text-center">
          <div className="text-yellow-400 text-6xl font-bold mb-2">24/7</div>
          <div className="text-lg text-white mb-2">Support Available</div>
          <div className="text-sm text-gray-400">Global community</div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold mb-6 text-center">What You Get Inside</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">🎯</span>
              <div>
                <div className="font-semibold">Daily Co-Working Calls</div>
                <div className="text-sm text-gray-400">Body-doubling and accountability</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">🚀</span>
              <div>
                <div className="font-semibold">Monthly Business Challenges</div>
                <div className="text-sm text-gray-400">Grow your business with friends</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">🧠</span>
              <div>
                <div className="font-semibold">ADHD-Friendly Strategies</div>
                <div className="text-sm text-gray-400">Business advice that actually works</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">💜</span>
              <div>
                <div className="font-semibold">Understanding Community</div>
                <div className="text-sm text-gray-400">People who truly get it</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-center mb-8">
        <div className="text-2xl font-bold mb-2">
          "The best community in the world for neurodivergent entrepreneurs!"
        </div>
        <div className="text-purple-100">- Bill Widmer, Founder</div>
      </div>

      <div className="text-center">
        <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-12 rounded-full transition-colors text-xl mb-4">
          Join Focus Founders Now
        </button>
        <div className="text-gray-400 mb-2">
          🌎 Austin-based • Worldwide welcome
        </div>
        <div className="text-purple-400 text-lg">
          Good people + focused effort + self-love = massive world impact; and INCOME! 💰
        </div>
      </div>
    </div>
  );
}

// Main component that shows all three banners
export default function FocusFoundersBanners() {
  const [activeBanner, setActiveBanner] = useState(1);
  
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Focus Founders Community Banners
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Customized banners for Bill Widmer's ADHD entrepreneur community
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveBanner(1)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeBanner === 1
                  ? "bg-purple-600 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              Banner 1: Find Your Tribe
            </button>
            <button
              onClick={() => setActiveBanner(2)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeBanner === 2
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              Banner 2: The Focus Founders Way
            </button>
            <button
              onClick={() => setActiveBanner(3)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeBanner === 3
                  ? "bg-black text-purple-400"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              Banner 3: Stop the Struggle
            </button>
          </div>
        </div>

        {activeBanner === 1 && <HiddenBannerOne />}
        {activeBanner === 2 && <HiddenBannerTwo />}
        {activeBanner === 3 && <HiddenBannerThree />}
      </div>
    </div>
  );
}