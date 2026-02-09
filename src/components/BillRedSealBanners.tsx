"use client";

import { useState } from "react";

// Hidden Banner One - "Stop the Struggle" Theme
function HiddenBannerOne() {
  return (
    <div className="bg-gradient-to-r from-red-900 to-red-700 text-white p-8 rounded-lg shadow-2xl max-w-4xl mx-auto my-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-2">
            RED SEAL REALITY CHECK
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Tired of the Same Boring Repetition?
          </h2>
          <p className="text-xl text-red-100 mb-6 leading-relaxed">
            Break free from ineffective study methods that keep you stuck. Join 30+ serious tradespeople who actually take action and pass their Red Seal on the first try.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-full transition-colors text-lg">
              Join the Elite Red Seal Community
            </button>
            <div className="text-red-200 text-sm flex items-center">
              <span className="text-yellow-400 mr-2">⚡</span>
              No time-wasters. Serious electricians only.
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-black/30 rounded-lg p-6">
            <div className="text-yellow-400 text-6xl font-bold">70%</div>
            <div className="text-lg">Minimum to Pass</div>
            <div className="text-yellow-400 text-4xl font-bold mt-2">85%</div>
            <div className="text-lg">Our Target Score</div>
            <div className="text-xs text-red-200 mt-2">No 69% failures here</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hidden Banner Two - "Exclusivity/Quality" Theme  
function HiddenBannerTwo() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-lg shadow-2xl max-w-4xl mx-auto my-8 border border-yellow-600/30">
      <div className="text-center">
        <div className="text-yellow-500 text-sm font-semibold uppercase tracking-wider mb-4">
          ELITE CERTIFICATION COMMUNITY
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Not Everyone Makes the Cut
        </h2>
        <p className="text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          We're not looking for everyone. We want serious tradespeople who are committed to achieving their Red Seal certification.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-900/50 rounded-lg p-6 border border-red-700/50">
            <div className="text-red-400 text-3xl mb-2">❌</div>
            <div className="text-lg font-semibold text-red-300">What We Don't Want</div>
            <div className="text-sm text-gray-400 mt-2">
              People who say they want to build things but don't take action
            </div>
          </div>
          
          <div className="bg-yellow-900/30 rounded-lg p-6 border border-yellow-600/50">
            <div className="text-yellow-400 text-3xl mb-2">⚡</div>
            <div className="text-lg font-semibold text-yellow-300">What We Demand</div>
            <div className="text-sm text-gray-400 mt-2">
              Consistent action, serious commitment, no excuses
            </div>
          </div>
          
          <div className="bg-green-900/50 rounded-lg p-6 border border-green-700/50">
            <div className="text-green-400 text-3xl mb-2">✓</div>
            <div className="text-lg font-semibold text-green-300">What You Get</div>
            <div className="text-sm text-gray-400 mt-2">
              Engaged community, proven methods, expert guidance
            </div>
          </div>
        </div>

        <div className="text-yellow-400 text-lg mb-4">
          <span className="text-2xl font-bold">700,000+</span> skilled trades shortage in Canada
        </div>
        <div className="text-gray-400 text-lg mb-6">
          <span className="text-xl font-bold text-white">22,000-25,000</span> take the exam annually
        </div>
        
        <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-4 px-10 rounded-full transition-colors text-xl mb-4">
          See if You Qualify
        </button>
        <div className="text-gray-500 text-sm">
          We reduced our community from 70 to 30 active members for a reason.
        </div>
      </div>
    </div>
  );
}

// Hidden Banner Three - "Results-Focused" Theme
function HiddenBannerThree() {
  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-2xl max-w-4xl mx-auto my-8 border-2 border-yellow-500">
      <div className="text-center mb-8">
        <div className="text-yellow-500 text-sm font-semibold uppercase tracking-wider mb-4">
          CANADA'S MOST FOCUSED RED SEAL COMMUNITY
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-red-500">70%</span> Minimum.{" "}
          <span className="text-yellow-500">85%</span> Target.{" "}
          <span className="text-green-500">100%</span> Commitment.
        </h2>
        <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Master the trick questions. Beat the pass-fail pressure. Join Canada's most focused Red Seal community.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="text-center">
          <div className="text-yellow-500 text-6xl font-bold mb-2">10+</div>
          <div className="text-lg text-white mb-2">Years in Red Seal Space</div>
          <div className="text-sm text-gray-400">Proven expertise you can trust</div>
        </div>
        
        <div className="text-center">
          <div className="text-green-500 text-6xl font-bold mb-2">30</div>
          <div className="text-lg text-white mb-2">Active Members</div>
          <div className="text-sm text-gray-400">Quality over quantity always</div>
        </div>
        
        <div className="text-center">
          <div className="text-red-500 text-6xl font-bold mb-2">0</div>
          <div className="text-lg text-white mb-2">Tolerance for Inaction</div>
          <div className="text-sm text-gray-400">Serious tradespeople only</div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4 text-center">What Makes This Different</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 text-xl">🎯</span>
            <div>
              <div className="font-semibold">No More Boring Repetition</div>
              <div className="text-sm text-gray-400">Proven methods that actually work</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 text-xl">🤝</span>
            <div>
              <div className="font-semibold">Engaged Community</div>
              <div className="text-sm text-gray-400">People who actually take action</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 text-xl">⚡</span>
            <div>
              <div className="font-semibold">Expert Guidance</div>
              <div className="text-sm text-gray-400">From someone who knows the struggle</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 text-xl">📈</span>
            <div>
              <div className="font-semibold">Results-Focused</div>
              <div className="text-sm text-gray-400">85% target, not just passing</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-gray-400 mb-4">
          "This shit is hard, man. It is, it's very hard. But we'll get through it together."
        </div>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-12 rounded-full transition-colors text-xl">
          Get Your Red Seal Strategy
        </button>
        <div className="text-gray-500 text-sm mt-4">
          For electricians who are done with ineffective study methods
        </div>
      </div>
    </div>
  );
}

// Main component that shows all three banners
export default function BillRedSealBanners() {
  const [activeBanner, setActiveBanner] = useState(1);
  
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Bill's Red Seal Community Banners
          </h1>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveBanner(1)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeBanner === 1
                  ? "bg-red-600 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              Banner 1: Stop the Struggle
            </button>
            <button
              onClick={() => setActiveBanner(2)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeBanner === 2
                  ? "bg-gray-800 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              Banner 2: Exclusivity
            </button>
            <button
              onClick={() => setActiveBanner(3)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeBanner === 3
                  ? "bg-black text-yellow-400"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              Banner 3: Results-Focused
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