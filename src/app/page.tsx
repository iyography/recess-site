"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useRef, useState } from "react";

// Generate poster image URL from video URL (skip for local videos)
function getPosterFromVideo(videoUrl: string): string {
  // For local videos, return empty string to avoid poster issues
  if (videoUrl.startsWith('/videos/')) {
    return '';
  }
  // Handle Cloudinary URLs
  if (videoUrl.includes('cloudinary.com')) {
    return videoUrl
      .replace("/video/upload/", "/video/upload/so_0,f_jpg,q_auto/")
      .replace(".mp4", ".jpg");
  }
  return videoUrl
    .replace("/video/upload/q_auto,f_auto/", "/video/upload/so_0,f_jpg,q_auto/")
    .replace(".mp4", ".jpg");
}

// AutoPlay Video component - hides video until playing to avoid play button
function AutoPlayVideo({ src, className }: { src: string; className: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const posterUrl = getPosterFromVideo(src);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force muted state (required for mobile autoplay)
    video.muted = true;

    // Show video when it starts playing
    const handlePlaying = () => setIsPlaying(true);
    video.addEventListener("playing", handlePlaying);

    // Attempt to play
    const playVideo = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    // Try on various events
    video.addEventListener("loadedmetadata", playVideo);
    video.addEventListener("canplay", playVideo);
    playVideo();

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) playVideo();
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    // User interaction fallback
    const handleInteraction = () => playVideo();
    document.addEventListener("touchstart", handleInteraction, { once: true, passive: true });
    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("scroll", handleInteraction, { once: true, passive: true });

    return () => {
      observer.disconnect();
      video.removeEventListener("playing", handlePlaying);
    };
  }, []);

  return (
    <div className={className} style={{ backgroundImage: `url(${posterUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

// ============================================
// DESIGN 1: Focus Founders (Current)
// ============================================
function Design1() {
  const videos = {
    hero: "https://res.cloudinary.com/dzlnqcmqn/video/upload/v1770663304/1_wlywzm.mp4",
    about: "https://res.cloudinary.com/dzlnqcmqn/video/upload/v1770663315/8_gdac6h.mp4",
    feature: "/videos/3.mp4",
    findPeople: "/videos/4.mp4",
    whatIsnt: "https://res.cloudinary.com/dzlnqcmqn/video/upload/v1770000552/15_uefhjt.mp4",
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-orange-900 to-red-900 text-white relative">
      {/* Hero */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        <AutoPlayVideo src={videos.hero} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-20 max-w-5xl mx-auto px-8 py-32 text-center">
          <div className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-6">
            🧠 NEURODIVERGENT ENTREPRENEURS UNITE
          </div>
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
            Focus Founders
          </h1>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white max-w-3xl mx-auto mb-6 leading-relaxed">
            Where ADHD entrepreneurs build businesses that work with their brains, not against them.
          </p>
          <p className="font-sans text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12">
            Good people + focused effort + self-love = massive world impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="https://www.skool.com/focus-founders-free/about" className="inline-block font-sans font-semibold bg-yellow-500 hover:bg-yellow-400 text-black px-12 py-4 rounded-full transition-colors">
              Join Focus Founders FREE
            </a>
            <a href="/quiz" className="inline-block font-sans font-semibold bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 px-12 py-4 rounded-full transition-colors">
              Take ADHD Business Quiz
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <span className="font-sans text-xs tracking-widest text-yellow-400/60">EST. 2024</span>
          <span className="font-sans text-xs tracking-widest text-yellow-400/60">FOR NEURODIVERGENT ENTREPRENEURS</span>
        </div>
      </section>

      {/* What Is Focus Founders - Video & Text */}
      <section id="why" className="grid lg:grid-cols-2">
        <div className="aspect-square lg:aspect-auto lg:h-screen relative">
          <AutoPlayVideo src={videos.about} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex items-center justify-center p-12 lg:p-24 bg-orange-900/50">
          <div className="max-w-lg">
            <span className="font-sans text-sm tracking-[0.3em] uppercase text-yellow-400 block mb-6">What Is Focus Founders?</span>
            <h2 className="font-serif text-4xl lg:text-5xl leading-relaxed mb-8 text-white">
              A community built for neurodivergent entrepreneurs.
            </h2>
            <p className="font-sans text-lg text-white/80 leading-relaxed mb-6">
              I built Focus Founders because traditional business advice doesn't work for ADHD minds. We're the #1 community for neurodivergent entrepreneurs.
            </p>
            <p className="font-sans text-lg text-white/80 leading-relaxed mb-6">
              Not another place selling courses, but a place where ADHD entrepreneurs find their tribe and build businesses that work with their brains.
            </p>
            <p className="font-serif text-2xl text-yellow-400 italic">
              So I built Focus Founders. Where neurodivergent entrepreneurs thrive.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Here */}
      <section id="features" className="py-24 px-8 bg-orange-900">
        <div className="max-w-6xl mx-auto">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-yellow-400 block mb-4 text-center">What Happens Here</span>
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="p-10 border border-orange-500/20 rounded-2xl bg-orange-900/20">
              <span className="text-4xl mb-4 block">🧠</span>
              <h3 className="font-serif text-3xl mb-4 text-white">Daily Co-Working Calls</h3>
              <p className="font-sans text-lg text-white/80 leading-relaxed">
                Body-doubling sessions every day. Join hundreds of ADHD entrepreneurs getting stuff done together. Your ultimate accountability system.
              </p>
            </div>
            <div className="p-10 border border-orange-500/20 rounded-2xl bg-orange-900/20">
              <span className="text-4xl mb-4 block">🚀</span>
              <h3 className="font-serif text-3xl mb-4 text-white">Monthly Business Challenges</h3>
              <p className="font-sans text-lg text-white/80 leading-relaxed">
                Grow your business with friends. Monthly challenges designed specifically for neurodivergent minds. Real progress, real results.
              </p>
            </div>
            <div className="p-10 border border-orange-500/20 rounded-2xl bg-orange-900/20">
              <span className="text-4xl mb-4 block">🎉</span>
              <h3 className="font-serif text-3xl mb-4 text-white">Friday Wins Celebration</h3>
              <p className="font-sans text-lg text-white/80 leading-relaxed">
                Every Friday, we celebrate neurodivergent victories. First client. First $1K month. Every hyperfocus session. We get it here.
              </p>
            </div>
            <div className="p-10 border border-orange-500/20 rounded-2xl bg-orange-900/20">
              <span className="text-4xl mb-4 block">💜</span>
              <h3 className="font-serif text-3xl mb-4 text-white">ADHD-Friendly Strategies</h3>
              <p className="font-sans text-lg text-white/80 leading-relaxed">
                Business advice that actually works for ADHD minds. No neurotypical BS. Just real strategies from people who understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Video */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden">
            <AutoPlayVideo src={videos.feature} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Find Your Tribe */}
      <section className="h-[70vh] relative">
        <AutoPlayVideo src={videos.findPeople} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-orange-900/60">
          <div className="text-center">
            <p className="font-bold text-5xl md:text-7xl text-white text-center px-8 mb-4">
              Find your neurospicy tribe.
            </p>
            <p className="text-xl md:text-2xl text-yellow-400 font-semibold">
              Finally, people who actually get it. 🧠
            </p>
          </div>
        </div>
      </section>

      {/* This Is For You */}
      <section id="for-you" className="py-24 px-8 bg-gradient-to-r from-purple-900 to-orange-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-yellow-400 block mb-6">This Is For You</span>
          <p className="font-serif text-3xl lg:text-4xl leading-relaxed mb-8 text-white">
            Whether you're ADHD, Autism, AuDHD, or OCD. Whether you're just starting or scaling. Whether you're struggling with focus or crushing your goals.
          </p>
          <p className="font-sans text-xl text-white/80 italic mb-8">
            If you're neurodivergent and building a business, you belong here.
          </p>
          <p className="font-bold text-2xl text-yellow-400">
            Good people + focused effort + self-love = massive world impact! 💰
          </p>
        </div>
      </section>

      {/* What This Isn't */}
      <section className="py-24 px-8 relative overflow-hidden">
        <AutoPlayVideo src={videos.whatIsnt} className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="font-sans text-sm tracking-[0.3em] uppercase text-yellow-400 block mb-8">What This Isn&apos;t</span>
          <p className="font-sans text-2xl text-white/90 mb-8">
            Not another course. Not neurotypical business advice. Not a place that asks you to "just focus harder."
          </p>
          <p className="font-serif text-4xl lg:text-5xl text-white italic">
            This is understanding. This is community. This is Focus Founders.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 text-center bg-gradient-to-br from-purple-900 via-orange-900 to-red-900">
        <span className="font-sans text-sm tracking-[0.5em] uppercase text-yellow-400 block mb-8">Ready?</span>
        <h2 className="font-serif text-5xl lg:text-6xl mb-6 text-white">
          Join your neurospicy tribe.
        </h2>
        <p className="font-sans text-xl text-white/80 mb-10 max-w-3xl mx-auto">
          Stop fighting your ADHD. Start building a business that leverages your neurodivergent superpowers.
        </p>
        <a href="https://www.skool.com/focus-founders-free/about" className="inline-block font-sans font-semibold bg-yellow-500 hover:bg-yellow-400 text-black px-14 py-5 rounded-full transition-colors text-xl">
          Join Focus Founders FREE
        </a>
        <p className="text-white/60 text-sm mt-6">
          🌎 Austin-based • Welcome worldwide • ADHD? Autism? AuDHD? OCD? You belong here! 💜
        </p>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-orange-500/20 bg-orange-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="font-bold text-3xl text-white">Focus Founders</span>
          <span className="font-sans text-xs text-white/50">&copy; 2026 Focus Founders. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function Home() {
  return (
    <>
      <Navbar />
      <Design1 />
    </>
  );
}
