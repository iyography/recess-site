"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Theme colors - Bakery School
const CREAM_BG = '#FFF8F0';
const RED = '#8B2332';
const BLACK = '#1A1A1A';

// Color combos for main headline
const COLOR_COMBOS = [
  { name: 'White/Red', textColor: '#ffffff', shadowColor: '#8B2332' },
  { name: 'Red/White', textColor: '#8B2332', shadowColor: '#ffffff' },
  { name: 'Black/Cream', textColor: '#1A1A1A', shadowColor: '#FFF8F0' },
  { name: 'Cream/Black', textColor: '#FFF8F0', shadowColor: '#1A1A1A' },
  { name: 'White/Black', textColor: '#ffffff', shadowColor: '#000000' },
  { name: 'Black/Red', textColor: '#1A1A1A', shadowColor: '#8B2332' },
];

// Font options
const FONT_OPTIONS = [
  { name: 'Default', className: 'font-black tracking-tight', family: '' },
  { name: 'Georgia', className: 'font-bold', family: 'Georgia, serif' },
  { name: 'Times Bold', className: 'font-bold', family: 'Times New Roman, serif' },
  { name: 'Palatino', className: 'font-bold', family: 'Palatino Linotype, serif' },
  { name: 'Baskerville', className: 'font-bold', family: 'Baskerville, serif' },
];

export default function HiddenBanner5() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRed, setShowRed] = useState(false);
  const [showGreen, setShowGreen] = useState(false);
  const [showBlue, setShowBlue] = useState(true);
  const [showPurple, setShowPurple] = useState(false);

  const [textSize, setTextSize] = useState(28);
  const [headlineSize, setHeadlineSize] = useState(104);
  const [mainTitleSize, setMainTitleSize] = useState(64);
  const [altVersion, setAltVersion] = useState<1 | 2>(1);
  const [fontIndex, setFontIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

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

  const features = [
    { title: "WEEKLY LIVE CALLS", subtitle: "Get your questions answered by Marie in real-time" },
    { title: "100+ WORLD-CLASS RECIPES", subtitle: "The Bakery Box collection worth $30K+" },
    { title: "90-DAY ROADMAP", subtitle: "Custom plan to grow your bakery to $1M+" },
    { title: "STAFF TRAINING SYSTEMS", subtitle: "Turn your team into high performers" },
  ];

  const alt2LeftFeatures = [
    { title: "WEEKLY LIVE Q&A", subtitle: "Different topics each week" },
    { title: "100+ RECIPES", subtitle: "The Bakery Box collection" },
    { title: "COMMUNITY ACCESS", subtitle: "Connect with owners who get it" },
    { title: "PROFIT FRAMEWORKS", subtitle: "Increase sales by 10%+ in one day" },
  ];

  const alt2RightFeatures = [
    { title: "90-DAY ROADMAP", subtitle: "Custom plan for your bakery" },
    { title: "STAFF SYSTEMS", subtitle: "Build high-performing teams" },
    { title: "1% STRATEGY", subtitle: "Compound growth that scales" },
    { title: "WORK/LIFE BALANCE", subtitle: "Build without burning out" },
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
      <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md"
        initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <span className="font-bold text-white text-lg">The First Bakery School</span>
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
                <button onClick={() => setTextSize(s => Math.min(32, s + 1))} className="w-6 h-6 bg-gray-700 text-white text-xs rounded">+</button>
              </div>

              <div className="ml-2 flex items-center gap-1">
                <span className="text-white text-xs">Title:</span>
                <button onClick={() => setHeadlineSize(s => Math.max(48, s - 4))} className="w-6 h-6 bg-gray-700 text-white text-xs rounded">-</button>
                <span className="text-white text-xs w-6 text-center">{headlineSize}</span>
                <button onClick={() => setHeadlineSize(s => Math.min(120, s + 4))} className="w-6 h-6 bg-gray-700 text-white text-xs rounded">+</button>
              </div>

              <div className="ml-2 flex items-center gap-1">
                <span className="text-white text-xs">Main:</span>
                <button onClick={() => setMainTitleSize(s => Math.max(32, s - 4))} className="w-6 h-6 bg-gray-700 text-white text-xs rounded">-</button>
                <span className="text-white text-xs w-6 text-center">{mainTitleSize}</span>
                <button onClick={() => setMainTitleSize(s => Math.min(120, s + 4))} className="w-6 h-6 bg-gray-700 text-white text-xs rounded">+</button>
              </div>
            </div>

            <button className="md:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-24 flex flex-col items-center justify-center relative z-10" style={{ height: '1185px' }}>
        <div className="w-full flex flex-col items-center px-8">
          <motion.h1 className="text-center font-black tracking-tight mb-12 whitespace-nowrap w-full"
            style={{
              fontSize: `${mainTitleSize}px`,
              color: COLOR_COMBOS[colorIndex].textColor,
              textShadow: `4px 4px 0px ${COLOR_COMBOS[colorIndex].shadowColor}80, 8px 8px 0px ${COLOR_COMBOS[colorIndex].shadowColor}40, 0 0 30px ${COLOR_COMBOS[colorIndex].shadowColor}50`
            }}
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring" }}>
            What&apos;s Inside The Bakery School?
          </motion.h1>

          {/* Alt 1: Single column */}
          {altVersion === 1 && (
            <div className="flex flex-col gap-12">
              {features.map((feature, index) => (
                <motion.div key={feature.title} className="text-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}>
                  <motion.h2 className="font-black tracking-tight"
                    style={{
                      fontSize: `${headlineSize}px`, color: BLACK,
                      textShadow: `4px 4px 0px ${RED}80, 8px 8px 0px ${RED}40, 0 0 30px ${RED}50`
                    }}
                    whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    {feature.title}
                  </motion.h2>
                  <motion.p className="font-bold mt-2 uppercase" style={{ fontSize: `${textSize}px`, color: RED }}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.15 + 0.3 }}>
                    {feature.subtitle}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Alt 2: Two columns */}
          {altVersion === 2 && (
            <div className="flex gap-16 w-full justify-center">
              <div className="flex flex-col gap-8 items-center">
                {alt2LeftFeatures.map((feature, index) => (
                  <motion.div key={feature.title} className="text-center flex flex-col items-center"
                    initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}>
                    <motion.h2 className={`whitespace-nowrap ${FONT_OPTIONS[fontIndex].className}`}
                      style={{
                        fontSize: `${headlineSize - 20}px`, color: BLACK,
                        fontFamily: FONT_OPTIONS[fontIndex].family || undefined,
                        textShadow: '3px 3px 0px rgba(139,35,50,0.5), 6px 6px 0px rgba(139,35,50,0.3)'
                      }}>
                      {feature.title}
                    </motion.h2>
                    <motion.p className="font-bold mt-1 uppercase" style={{ fontSize: `${textSize - 2}px`, color: RED }}>
                      {feature.subtitle}
                    </motion.p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-8 items-center">
                {alt2RightFeatures.map((feature, index) => (
                  <motion.div key={feature.title} className="text-center flex flex-col items-center"
                    initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}>
                    <motion.h2 className={`whitespace-nowrap ${FONT_OPTIONS[fontIndex].className}`}
                      style={{
                        fontSize: `${headlineSize - 20}px`, color: BLACK,
                        fontFamily: FONT_OPTIONS[fontIndex].family || undefined,
                        textShadow: '3px 3px 0px rgba(139,35,50,0.5), 6px 6px 0px rgba(139,35,50,0.3)'
                      }}>
                      {feature.title}
                    </motion.h2>
                    <motion.p className="font-bold mt-1 uppercase" style={{ fontSize: `${textSize - 2}px`, color: RED }}>
                      {feature.subtitle}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="fixed bottom-8 left-8 z-[10001] flex gap-2">
        <button onClick={() => setAltVersion(1)}
          className={`px-4 py-2 rounded-lg font-bold shadow-lg transition-all ${altVersion === 1 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
          Alt 1
        </button>
        <button onClick={() => setAltVersion(2)}
          className={`px-4 py-2 rounded-lg font-bold shadow-lg transition-all ${altVersion === 2 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}>
          Alt 2
        </button>
        {altVersion === 2 && (
          <div className="flex items-center gap-2">
            <button onClick={() => setFontIndex((fontIndex - 1 + FONT_OPTIONS.length) % FONT_OPTIONS.length)}
              className="w-8 h-8 rounded-lg font-bold shadow-lg bg-gray-700 text-gray-300">
              &larr;
            </button>
            <span className="px-3 py-2 rounded-lg bg-purple-500 text-white font-bold min-w-[100px] text-center">
              {FONT_OPTIONS[fontIndex].name}
            </span>
            <button onClick={() => setFontIndex((fontIndex + 1) % FONT_OPTIONS.length)}
              className="w-8 h-8 rounded-lg font-bold shadow-lg bg-gray-700 text-gray-300">
              &rarr;
            </button>
          </div>
        )}
        <div className="flex items-center gap-2 ml-4">
          <button onClick={() => setColorIndex((colorIndex - 1 + COLOR_COMBOS.length) % COLOR_COMBOS.length)}
            className="w-8 h-8 rounded-lg font-bold shadow-lg bg-gray-700 text-gray-300">
            &larr;
          </button>
          <span className="px-3 py-2 rounded-lg bg-green-500 text-white font-bold min-w-[100px] text-center">
            {COLOR_COMBOS[colorIndex].name}
          </span>
          <button onClick={() => setColorIndex((colorIndex + 1) % COLOR_COMBOS.length)}
            className="w-8 h-8 rounded-lg font-bold shadow-lg bg-gray-700 text-gray-300">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
