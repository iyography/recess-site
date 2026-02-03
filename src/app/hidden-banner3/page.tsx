"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Theme colors - Bakery School
const CREAM_BG = '#FFF8F0';
const RED = '#8B2332';
const BLACK = '#1A1A1A';
const WHITE = '#ffffff';

export default function HiddenBanner3() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRed, setShowRed] = useState(false);
  const [showGreen, setShowGreen] = useState(false);
  const [showBlue, setShowBlue] = useState(true);
  const [showPurple, setShowPurple] = useState(false);

  const [textSize, setTextSize] = useState(24);
  const [headlineSize, setHeadlineSize] = useState(80);

  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [guideOffsets, setGuideOffsets] = useState({
    red: 64, green: 64, blue: 64, purple: 64
  });
  const [isGuideDragging, setIsGuideDragging] = useState(false);
  const guideDragStartY = useRef(0);
  const guideDragStartOffset = useRef(0);

  const handleGuideMouseDown = (e: React.MouseEvent, guide: string) => {
    e.preventDefault();
    setSelectedGuide(guide);
    setIsGuideDragging(true);
    guideDragStartY.current = e.clientY;
    guideDragStartOffset.current = guideOffsets[guide as keyof typeof guideOffsets];
  };

  useEffect(() => {
    const handleGuideMouseMove = (e: MouseEvent) => {
      if (isGuideDragging && selectedGuide) {
        const deltaY = e.clientY - guideDragStartY.current;
        const newOffset = Math.max(0, guideDragStartOffset.current + deltaY);
        setGuideOffsets(prev => ({ ...prev, [selectedGuide]: newOffset }));
      }
    };
    const handleGuideMouseUp = () => setIsGuideDragging(false);

    if (isGuideDragging) {
      window.addEventListener('mousemove', handleGuideMouseMove);
      window.addEventListener('mouseup', handleGuideMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleGuideMouseMove);
      window.removeEventListener('mouseup', handleGuideMouseUp);
    };
  }, [isGuideDragging, selectedGuide]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const leftFeatures = [
    { emoji: "🥐", title: "Bakery Growth Quiz", desc: "Discover your owner type in 3 minutes" },
    { emoji: "📚", title: "28+ Years of Wisdom", desc: "Step-by-step guides from $50M+ in sales" },
    { emoji: "🎂", title: "100+ World-Class Recipes", desc: "The Bakery Box collection" },
    { emoji: "💡", title: "Proven Growth Strategies", desc: "1% strategy that compounds into massive growth" },
    { emoji: "📞", title: "Weekly Live Q&A Calls", desc: "Get your questions answered live by Marie" },
  ];

  const rightFeatures = [
    { emoji: "🚀", title: "90-Day Roadmap", desc: "Custom plan to grow your bakery" },
    { emoji: "👥", title: "Staff Training Systems", desc: "Turn staff into high performers" },
    { emoji: "🔥", title: "Real Community", desc: "Connect with bakery owners who get it" },
    { emoji: "⚖️", title: "Work/Life Balance", desc: "Build a bakery that doesn't burn you out" },
    { emoji: "💰", title: "Profit Frameworks", desc: "Increase sales by 10%+ in one day" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: CREAM_BG }}>
      {/* Background graphic elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20" style={{ backgroundColor: RED }} />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full opacity-15" style={{ backgroundColor: RED }} />
        <div className="absolute top-0 right-0 w-full h-full opacity-5">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute h-[2px] w-[200%] origin-left"
              style={{ backgroundColor: RED, top: `${i * 120}px`, left: '-50%', transform: 'rotate(-15deg)' }} />
          ))}
        </div>
      </div>

      {/* Crop guides */}
      {showRed && (
        <div className={`fixed z-[9999] ${selectedGuide === 'red' ? 'cursor-move' : 'pointer-events-none'}`}
          style={{ width: '1400px', height: '790px', border: `4px dashed ${selectedGuide === 'red' ? '#FF0000' : '#FF000080'}`, top: `${guideOffsets.red}px`, left: '50%', transform: 'translateX(-50%)' }}
          onMouseDown={(e) => selectedGuide === 'red' && handleGuideMouseDown(e, 'red')} />
      )}
      {showGreen && (
        <div className={`fixed z-[9998] ${selectedGuide === 'green' ? 'cursor-move' : 'pointer-events-none'}`}
          style={{ width: '1750px', height: '988px', border: `4px dashed ${selectedGuide === 'green' ? '#00FF00' : '#00FF0080'}`, top: `${guideOffsets.green}px`, left: '50%', transform: 'translateX(-50%)' }}
          onMouseDown={(e) => selectedGuide === 'green' && handleGuideMouseDown(e, 'green')} />
      )}
      {showBlue && (
        <div className={`fixed z-[9997] ${selectedGuide === 'blue' ? 'cursor-move' : 'pointer-events-none'}`}
          style={{ width: '2100px', height: '1185px', border: `4px dashed ${selectedGuide === 'blue' ? '#0088FF' : '#0088FF80'}`, top: `${guideOffsets.blue}px`, left: '50%', transform: 'translateX(-50%)' }}
          onMouseDown={(e) => selectedGuide === 'blue' && handleGuideMouseDown(e, 'blue')} />
      )}
      {showPurple && (
        <div className={`fixed z-[9996] ${selectedGuide === 'purple' ? 'cursor-move' : 'pointer-events-none'}`}
          style={{ width: '2800px', height: '1580px', border: `4px dashed ${selectedGuide === 'purple' ? '#FF00FF' : '#FF00FF80'}`, top: `${guideOffsets.purple}px`, left: '50%', transform: 'translateX(-50%)' }}
          onMouseDown={(e) => selectedGuide === 'purple' && handleGuideMouseDown(e, 'purple')} />
      )}

      {/* Navbar */}
      <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm"
        style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}
        initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <span className="font-bold text-white text-xl">The First Bakery School</span>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              <button onClick={() => { if (!showRed) setShowRed(true); setSelectedGuide(selectedGuide === 'red' ? null : 'red'); }}
                onDoubleClick={() => setShowRed(!showRed)}
                className={`w-6 h-6 rounded border-2 ${showRed ? 'bg-red-500 border-red-500' : 'bg-transparent border-red-500'} ${selectedGuide === 'red' ? 'ring-2 ring-white' : ''}`} />
              <button onClick={() => { if (!showGreen) setShowGreen(true); setSelectedGuide(selectedGuide === 'green' ? null : 'green'); }}
                onDoubleClick={() => setShowGreen(!showGreen)}
                className={`w-6 h-6 rounded border-2 ${showGreen ? 'bg-green-500 border-green-500' : 'bg-transparent border-green-500'} ${selectedGuide === 'green' ? 'ring-2 ring-white' : ''}`} />
              <button onClick={() => { if (!showBlue) setShowBlue(true); setSelectedGuide(selectedGuide === 'blue' ? null : 'blue'); }}
                onDoubleClick={() => setShowBlue(!showBlue)}
                className={`w-6 h-6 rounded border-2 ${showBlue ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-blue-500'} ${selectedGuide === 'blue' ? 'ring-2 ring-white' : ''}`} />
              <button onClick={() => { if (!showPurple) setShowPurple(true); setSelectedGuide(selectedGuide === 'purple' ? null : 'purple'); }}
                onDoubleClick={() => setShowPurple(!showPurple)}
                className={`w-6 h-6 rounded border-2 ${showPurple ? 'bg-purple-500 border-purple-500' : 'bg-transparent border-purple-500'} ${selectedGuide === 'purple' ? 'ring-2 ring-white' : ''}`} />
              <button onClick={() => { setShowRed(false); setShowGreen(false); setShowBlue(false); setShowPurple(false); setSelectedGuide(null); }}
                className="ml-2 px-2 py-1 bg-gray-700 text-white text-xs rounded">Hide All</button>

              <div className="ml-4 flex items-center gap-1">
                <span className="text-white text-xs">Text:</span>
                <button onClick={() => setTextSize(s => Math.max(12, s - 1))} className="w-6 h-6 bg-gray-700 text-white text-xs rounded">-</button>
                <span className="text-white text-xs w-6 text-center">{textSize}</span>
                <button onClick={() => setTextSize(s => Math.min(28, s + 1))} className="w-6 h-6 bg-gray-700 text-white text-xs rounded">+</button>
              </div>

              <div className="ml-2 flex items-center gap-1">
                <span className="text-white text-xs">Title:</span>
                <button onClick={() => setHeadlineSize(s => Math.max(32, s - 4))} className="w-6 h-6 bg-gray-700 text-white text-xs rounded">-</button>
                <span className="text-white text-xs w-6 text-center">{headlineSize}</span>
                <button onClick={() => setHeadlineSize(s => Math.min(80, s + 4))} className="w-6 h-6 bg-gray-700 text-white text-xs rounded">+</button>
              </div>
            </div>

            <button className="md:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-20 flex flex-col" style={{ height: '1185px' }}>
        <div className="flex-1 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 className="font-black tracking-tight mb-16"
              style={{ fontSize: `${headlineSize}px`, color: RED }}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              Everything You Need To Grow Your Bakery{" "}
              <span style={{ color: BLACK }}>To $1M+</span>
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
              <div className="space-y-6">
                {leftFeatures.map((feature, index) => (
                  <motion.div key={feature.title} className="flex items-start gap-4 text-left"
                    initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}>
                    <span className="text-4xl flex-shrink-0">{feature.emoji}</span>
                    <div>
                      <h3 className="font-bold" style={{ fontSize: `${textSize + 2}px`, color: BLACK }}>{feature.title}</h3>
                      <p className="font-semibold" style={{ fontSize: `${textSize - 2}px`, color: RED }}>{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6">
                {rightFeatures.map((feature, index) => (
                  <motion.div key={feature.title} className="flex items-start gap-4 text-left"
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}>
                    <span className="text-4xl flex-shrink-0">{feature.emoji}</span>
                    <div>
                      <h3 className="font-bold" style={{ fontSize: `${textSize + 2}px`, color: BLACK }}>{feature.title}</h3>
                      <p className="font-semibold" style={{ fontSize: `${textSize - 2}px`, color: RED }}>{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div className="w-full py-12 px-4" style={{ backgroundColor: BLACK }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-4xl font-black" style={{ color: RED }}>Worth $30K+. Start free.</p>
            <p className="text-xl mt-2" style={{ color: WHITE }}>Join 66+ bakery owners building their empire</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
