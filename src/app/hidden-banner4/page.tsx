"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// Theme colors - Bakery School
const CREAM_BG = '#FFF8F0';
const RED = '#8B2332';
const BLACK = '#1A1A1A';
const WHITE = '#ffffff';

export default function HiddenBanner4() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRed, setShowRed] = useState(false);
  const [showGreen, setShowGreen] = useState(false);
  const [showBlue, setShowBlue] = useState(true);
  const [showPurple, setShowPurple] = useState(false);

  const [textSize, setTextSize] = useState(16);
  const [statSize, setStatSize] = useState(48);
  const [altLayout, setAltLayout] = useState(true);
  const [skoolSize, setSkoolSize] = useState(68);

  const [skoolTitle, setSkoolTitle] = useState("28+ YEARS");
  const [skoolSubtitle, setSkoolSubtitle] = useState("OF BAKERY\nEXPERIENCE");
  const [skoolSubtitleSize, setSkoolSubtitleSize] = useState(41);

  const [skoolPosition, setSkoolPosition] = useState({ x: 0, y: 0 });
  const [isSkoolDragging, setIsSkoolDragging] = useState(false);
  const skoolDragStart = useRef({ x: 0, y: 0 });
  const skoolPosStart = useRef({ x: 0, y: 0 });

  const [badgePositionY, setBadgePositionY] = useState(0);
  const [isBadgeDragging, setIsBadgeDragging] = useState(false);
  const badgeDragStartY = useRef(0);
  const badgePosStartY = useRef(0);

  const handleSkoolMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSkoolDragging(true);
    skoolDragStart.current = { x: e.clientX, y: e.clientY };
    skoolPosStart.current = { ...skoolPosition };
  };

  const handleBadgeMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsBadgeDragging(true);
    badgeDragStartY.current = e.clientY;
    badgePosStartY.current = badgePositionY;
  };

  useEffect(() => {
    const handleSkoolMouseMove = (e: MouseEvent) => {
      if (isSkoolDragging) {
        const deltaX = e.clientX - skoolDragStart.current.x;
        const deltaY = e.clientY - skoolDragStart.current.y;
        setSkoolPosition({ x: skoolPosStart.current.x + deltaX, y: skoolPosStart.current.y + deltaY });
      }
    };
    const handleSkoolMouseUp = () => setIsSkoolDragging(false);

    if (isSkoolDragging) {
      window.addEventListener('mousemove', handleSkoolMouseMove);
      window.addEventListener('mouseup', handleSkoolMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleSkoolMouseMove);
      window.removeEventListener('mouseup', handleSkoolMouseUp);
    };
  }, [isSkoolDragging]);

  useEffect(() => {
    const handleBadgeMouseMove = (e: MouseEvent) => {
      if (isBadgeDragging) {
        const deltaY = e.clientY - badgeDragStartY.current;
        setBadgePositionY(badgePosStartY.current + deltaY);
      }
    };
    const handleBadgeMouseUp = () => setIsBadgeDragging(false);

    if (isBadgeDragging) {
      window.addEventListener('mousemove', handleBadgeMouseMove);
      window.addEventListener('mouseup', handleBadgeMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleBadgeMouseMove);
      window.removeEventListener('mouseup', handleBadgeMouseUp);
    };
  }, [isBadgeDragging]);

  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [guideOffsets, setGuideOffsets] = useState({ red: 64, green: 64, blue: 64, purple: 64 });
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

  const stats = [
    { value: "$50M+", label: "Sales", sublabel: "Generated" },
    { value: "28+", label: "Years", sublabel: "Experience" },
    { value: "#1", label: "Best Seller", sublabel: "Author" },
    { value: "66+", label: "Members", sublabel: "& Growing" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: CREAM_BG }}>
      {/* Background */}
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
                <button onClick={() => setTextSize(s => Math.min(24, s + 1))} className="w-6 h-6 bg-gray-700 text-white text-xs rounded">+</button>
              </div>

              <div className="ml-2 flex items-center gap-1">
                <span className="text-white text-xs">Stats:</span>
                <button onClick={() => setStatSize(s => Math.max(32, s - 4))} className="w-6 h-6 bg-gray-700 text-white text-xs rounded">-</button>
                <span className="text-white text-xs w-6 text-center">{statSize}</span>
                <button onClick={() => setStatSize(s => Math.min(72, s + 4))} className="w-6 h-6 bg-gray-700 text-white text-xs rounded">+</button>
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
        <div className="flex-1 flex flex-col items-center py-8 px-4">
          <motion.div className={`relative mb-12 flex gap-8 ${altLayout ? 'items-start' : 'items-center'}`}
            style={{ marginTop: '4px' }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>

            {altLayout && (
              <div className="flex flex-col items-center cursor-move select-none"
                style={{ transform: `translate(${skoolPosition.x}px, ${skoolPosition.y}px)`, zIndex: isSkoolDragging ? 100 : 1 }}
                onMouseDown={handleSkoolMouseDown}>
                <div className="font-black text-center uppercase whitespace-nowrap"
                  style={{ fontSize: `${skoolSize}px`, color: BLACK, lineHeight: 1 }}>
                  {skoolTitle}
                </div>
                {skoolSubtitle.split('\n').map((line, i) => (
                  <div key={i} className="font-black text-center uppercase whitespace-nowrap"
                    style={{ fontSize: `${skoolSubtitleSize}px`, color: BLACK, lineHeight: 1.2 }}>
                    {line}
                  </div>
                ))}
              </div>
            )}

            {/* Marie's Photo */}
            <div className="rounded-full overflow-hidden border-4"
              style={{ borderColor: RED, width: '500px', height: '500px' }}>
              <Image
                src="/marie.jpg"
                alt="Marie Temby"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <div
                className="bg-[#8B2332] text-white px-8 py-4 rounded-2xl text-center cursor-move select-none"
                style={{ transform: `translateY(${badgePositionY}px)`, zIndex: isBadgeDragging ? 100 : 1 }}
                onMouseDown={handleBadgeMouseDown}
              >
                <div className="text-2xl font-bold">#1 Best Selling</div>
                <div className="text-lg">Bakery Author</div>
              </div>
              {!altLayout && (
                <div className="flex flex-col items-center mt-2">
                  <div className="font-black text-center uppercase whitespace-nowrap"
                    style={{ fontSize: `${skoolSize}px`, color: BLACK, lineHeight: 1 }}>
                    {skoolTitle}
                  </div>
                  {skoolSubtitle.split('\n').map((line, i) => (
                    <div key={i} className="font-black text-center uppercase whitespace-nowrap"
                      style={{ fontSize: `${skoolSubtitleSize}px`, color: BLACK, lineHeight: 1.1 }}>
                      {line}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.h2 className="font-bold tracking-wide text-center mt-8"
            style={{ fontSize: '32px', color: BLACK }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            Built. Scaled. Now Teaching.
          </motion.h2>
        </div>

        {/* Bottom Stats Banner */}
        <motion.div className="w-full py-12 px-4" style={{ backgroundColor: BLACK, marginTop: '28px' }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div key={stat.label} className="text-center"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}>
                  <div className="font-black" style={{ fontSize: `${statSize + 8}px`, color: RED }}>{stat.value}</div>
                  <div className="font-bold text-white uppercase tracking-wider" style={{ fontSize: `${textSize + 4}px` }}>{stat.label}</div>
                  <div className="text-gray-400" style={{ fontSize: `${textSize}px` }}>{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="fixed bottom-8 left-8 z-[10001] flex flex-col gap-3">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-black/90 rounded-lg px-3 py-2">
            <span className="text-white text-sm font-bold">Title:</span>
            <input type="text" value={skoolTitle} onChange={(e) => setSkoolTitle(e.target.value.toUpperCase())}
              className="w-32 px-2 py-1 bg-gray-700 text-white text-sm rounded border border-gray-600" placeholder="28+ YEARS" />
          </div>
          <div className="flex items-center gap-2 bg-black/90 rounded-lg px-3 py-2">
            <span className="text-white text-sm font-bold">Subtitle:</span>
            <textarea value={skoolSubtitle} onChange={(e) => setSkoolSubtitle(e.target.value.toUpperCase())}
              className="w-40 h-12 px-2 py-1 bg-gray-700 text-white text-sm rounded border border-gray-600 resize-none" />
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <button onClick={() => setAltLayout(!altLayout)}
            className={`px-4 py-2 rounded-lg font-bold shadow-lg transition-colors ${altLayout ? 'bg-blue-500 text-white' : 'bg-black/80 text-gray-300'}`}>
            {altLayout ? 'Alt: ON' : 'Alt: OFF'}
          </button>
          <div className="flex items-center gap-2 bg-black/80 rounded-lg px-3 py-2">
            <span className="text-white text-sm font-bold">Title:</span>
            <button onClick={() => setSkoolSize(s => Math.max(24, s - 4))} className="w-8 h-8 rounded-lg bg-gray-700 text-gray-300">-</button>
            <span className="text-white text-sm w-12 text-center">{skoolSize}</span>
            <button onClick={() => setSkoolSize(s => Math.min(120, s + 4))} className="w-8 h-8 rounded-lg bg-gray-700 text-gray-300">+</button>
          </div>
          <div className="flex items-center gap-2 bg-black/80 rounded-lg px-3 py-2">
            <span className="text-white text-sm font-bold">Subtitle:</span>
            <button onClick={() => setSkoolSubtitleSize(s => Math.max(16, s - 2))} className="w-8 h-8 rounded-lg bg-gray-700 text-gray-300">-</button>
            <span className="text-white text-sm w-12 text-center">{skoolSubtitleSize}</span>
            <button onClick={() => setSkoolSubtitleSize(s => Math.min(80, s + 2))} className="w-8 h-8 rounded-lg bg-gray-700 text-gray-300">+</button>
            <button onClick={() => setSkoolPosition({ x: 0, y: 0 })} className="ml-2 px-2 py-1 rounded bg-gray-600 text-white text-xs">Reset</button>
            <button onClick={() => setBadgePositionY(0)} className="ml-2 px-2 py-1 rounded bg-gray-600 text-white text-xs">Reset Badge</button>
          </div>
        </div>
      </div>
    </div>
  );
}
