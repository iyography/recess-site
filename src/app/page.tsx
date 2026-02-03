"use client";

import Navbar from "@/components/Navbar";

// Floating Dots Component
function FloatingDots() {
  const dots = [
    { top: "10%", left: "5%", delay: "0s", size: "" },
    { top: "20%", left: "15%", delay: "1s", size: "lg" },
    { top: "15%", left: "85%", delay: "2s", size: "sm" },
    { top: "30%", left: "90%", delay: "0.5s", size: "" },
    { top: "40%", left: "8%", delay: "1.5s", size: "lg" },
    { top: "50%", left: "92%", delay: "3s", size: "sm" },
    { top: "60%", left: "3%", delay: "2.5s", size: "" },
    { top: "70%", left: "88%", delay: "1s", size: "lg" },
    { top: "75%", left: "12%", delay: "0s", size: "sm" },
    { top: "85%", left: "95%", delay: "2s", size: "" },
    { top: "25%", left: "50%", delay: "3.5s", size: "sm" },
    { top: "55%", left: "45%", delay: "4s", size: "lg" },
    { top: "80%", left: "55%", delay: "1.5s", size: "" },
    { top: "5%", left: "70%", delay: "2.5s", size: "sm" },
    { top: "45%", left: "25%", delay: "0.5s", size: "lg" },
    { top: "65%", left: "75%", delay: "3s", size: "" },
    { top: "90%", left: "30%", delay: "1s", size: "sm" },
    { top: "35%", left: "60%", delay: "4s", size: "lg" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dots.map((dot, i) => (
        <div
          key={i}
          className={`floating-dot ${dot.size === "lg" ? "floating-dot-lg" : dot.size === "sm" ? "floating-dot-sm" : ""}`}
          style={{
            top: dot.top,
            left: dot.left,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingDots />
      <div className="bg-[#1A1A1A] text-[#FFF8F0] relative">
        {/* Hero */}
        <section className="min-h-screen relative overflow-hidden flex items-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          >
            <source src="/bakery.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#1A1A1A]/50" />
          <div className="relative z-20 max-w-5xl mx-auto px-8 py-32 text-center">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-8xl leading-tight mb-8">
              The First Bakery School
            </h1>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#FFF8F0] max-w-3xl mx-auto mb-6 leading-relaxed">
              Learn to grow your bakery over $1M in annual sales in 90 days or less with proven systems.
            </p>
            <p className="font-sans text-xl md:text-2xl text-[#FFF8F0]/70 max-w-2xl mx-auto mb-12">
              Real advice. Real growth. Real profits. No fluff — just what works.
            </p>
            <a href="https://www.skool.com/thefirstbakeryschool" className="inline-block font-sans font-semibold bg-[#8B2332] text-white px-12 py-4 rounded-full hover:bg-[#A52D3F] transition-colors">
              Join Free
            </a>
          </div>
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <span className="font-sans text-xs tracking-widest text-[#8B2332]/60">BY MARIE TEMBY</span>
            <span className="font-sans text-xs tracking-widest text-[#8B2332]/60">66 MEMBERS</span>
          </div>
        </section>

        {/* About Marie */}
        <section id="why" className="py-24 px-8">
          <div className="max-w-4xl mx-auto">
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-[#8B2332] block mb-6 text-center">Meet Your Instructor</span>
            <div className="text-center">
              <h2 className="font-heading text-3xl lg:text-4xl leading-relaxed mb-8">
                28+ Years. $50M+ in Sales.
              </h2>
              <p className="font-sans text-lg text-[#FFF8F0]/60 leading-relaxed mb-6">
                I&apos;m a #1 best selling author who has owned bakeries for over 28 years and generated more than $50 million in sales.
              </p>
              <p className="font-sans text-lg text-[#FFF8F0]/60 leading-relaxed mb-6">
                I turn stuck businesses & staff into profitable, high performing teams. Now I&apos;m teaching all of it.
              </p>
              <p className="font-serif text-2xl text-[#8B2332] italic">
                I started as a beginner coach 3.5 years ago and won Rookie Coach of the Year.
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section id="features" className="py-24 px-8 bg-[#141414]">
          <div className="max-w-6xl mx-auto">
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-[#8B2332] block mb-4 text-center">What You&apos;ll Learn</span>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="p-10 border border-[#FFF8F0]/10 rounded-2xl">
                <span className="text-4xl mb-4 block">📈</span>
                <h3 className="font-heading text-2xl mb-4">1% Strategy</h3>
                <p className="font-sans text-lg text-[#FFF8F0]/60 leading-relaxed">
                  Scale your bakery using the proven 1% strategy that compounds into massive growth.
                </p>
              </div>
              <div className="p-10 border border-[#FFF8F0]/10 rounded-2xl">
                <span className="text-4xl mb-4 block">👥</span>
                <h3 className="font-heading text-2xl mb-4">Staff Training</h3>
                <p className="font-sans text-lg text-[#FFF8F0]/60 leading-relaxed">
                  World class staff training methods that transform your team into high performers.
                </p>
              </div>
              <div className="p-10 border border-[#FFF8F0]/10 rounded-2xl">
                <span className="text-4xl mb-4 block">⚖️</span>
                <h3 className="font-heading text-2xl mb-4">Work/Life Balance</h3>
                <p className="font-sans text-lg text-[#FFF8F0]/60 leading-relaxed">
                  How to find work/life balance in the mix of running a successful bakery.
                </p>
              </div>
              <div className="p-10 border border-[#FFF8F0]/10 rounded-2xl">
                <span className="text-4xl mb-4 block">💰</span>
                <h3 className="font-heading text-2xl mb-4">10% Sales Boost</h3>
                <p className="font-sans text-lg text-[#FFF8F0]/60 leading-relaxed">
                  How to increase sales by at least 10% in one day with simple techniques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid Statement */}
        <section className="py-32 px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B2332]/10 via-transparent to-[#8B2332]/10" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="font-heading text-3xl md:text-5xl text-white">
              Ensure every visitor who walks in your bakery returns.
            </p>
          </div>
        </section>

        {/* What's Inside */}
        <section id="for-you" className="py-24 px-8 bg-[#141414]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-[#8B2332] block mb-6">What&apos;s Inside (Worth $30K+)</span>
            <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
              <div className="p-6 border border-[#8B2332]/30 rounded-xl">
                <span className="text-2xl mr-3">🥯</span>
                <span className="font-sans text-lg">Weekly bakery hacks</span>
              </div>
              <div className="p-6 border border-[#8B2332]/30 rounded-xl">
                <span className="text-2xl mr-3">🛣️</span>
                <span className="font-sans text-lg">Custom 90 day bakery roadmap</span>
              </div>
              <div className="p-6 border border-[#8B2332]/30 rounded-xl">
                <span className="text-2xl mr-3">🎂</span>
                <span className="font-sans text-lg">The Bakery Box: 100+ world class recipes</span>
              </div>
              <div className="p-6 border border-[#8B2332]/30 rounded-xl">
                <span className="text-2xl mr-3">🍞</span>
                <span className="font-sans text-lg">Turn one customer into returning family</span>
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-24 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-[#8B2332] block mb-8">Safe Space to Grow</span>
            <p className="font-serif text-3xl lg:text-4xl text-[#FFF8F0] mb-8">
              This is a safe place to mix with other bakery owners. Share, learn, and grow without judgment.
            </p>
            <p className="font-sans text-xl text-[#FFF8F0]/70 italic">
              If you own a bakery, this community is for you.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-8 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#8B2332]/20 to-transparent" />
          <div className="relative z-10">
            <span className="font-sans text-sm tracking-[0.5em] uppercase text-[#8B2332] block mb-8">Your Move</span>
            <h2 className="font-heading text-3xl lg:text-4xl mb-10">
              Build your bakery empire with owners who&apos;ve been there.
            </h2>
            <a href="https://www.skool.com/thefirstbakeryschool" className="inline-block font-sans font-semibold bg-[#8B2332] text-white px-14 py-5 rounded-full hover:bg-[#A52D3F] transition-colors text-xl">
              Join Free
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 border-t border-[#FFF8F0]/10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="font-heading text-xl">The First Bakery School</span>
            <span className="font-sans text-xs text-[#FFF8F0]/30">
              <a href="/admin" className="hover:text-[#FFF8F0]/50 transition-colors">&copy;</a> 2026 The First Bakery School. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
