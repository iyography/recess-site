"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { businessTypes } from "../../lib/quiz/business-types";
import { growthStages } from "../../lib/quiz/growth-stages";
import { BusinessType, GrowthStage } from "../../lib/quiz/types";
import { getQuestionsForPath } from "../../lib/quiz/questions";

interface ResultProfile {
  archetype: string;
  archetypeEmoji: string;
  archetypeDescription: string;
  archetypeDetail: string;
  challenge: string;
  challengeEmoji: string;
  challengeDescription: string;
  pathForward: string[];
  focusOn: {
    title: string;
    items: string[];
  };
  ignore: {
    title: string;
    items: string[];
  };
}

const resultProfiles: Record<string, ResultProfile> = {
  low: {
    archetype: "The Foundation Seeker",
    archetypeEmoji: "🌱",
    archetypeDescription: "Visionary, High Energy, Needs Structure",
    archetypeDetail: "You have big dreams and the drive to make them happen, but you need solid systems to channel your ADHD superpowers effectively.",
    challenge: "Structure & Systems Gap",
    challengeEmoji: "⚡",
    challengeDescription: "Brilliant ideas, scattered execution. You know what to do but struggle with consistent systems and daily accountability.",
    pathForward: [
      "Start with ONE simple daily routine that works with your ADHD brain",
      "Focus on energy-based scheduling instead of time-based",
      "Build dopamine reward systems into every business task"
    ],
    focusOn: {
      title: "What to focus on:",
      items: ["Daily accountability systems", "ADHD-friendly productivity methods", "Community support and connection"]
    },
    ignore: {
      title: "What to ignore:",
      items: ["Complex business strategies", "Traditional time management", "Perfectionist thinking"]
    }
  },
  mid: {
    archetype: "The System Builder",
    archetypeEmoji: "🔧",
    archetypeDescription: "Growing Fast, Learning Quickly, Scaling Challenges",
    archetypeDetail: "You've got momentum but need custom systems that work with your neurodivergent brain to scale sustainably.",
    challenge: "Scaling Without Burnout",
    challengeEmoji: "🚀",
    challengeDescription: "You're growing but hitting capacity limits. Traditional business advice doesn't work for your ADHD brain.",
    pathForward: [
      "Create ADHD-friendly client delivery systems",
      "Build energy-based team workflows", 
      "Develop sustainable pricing that accounts for neurodivergent work patterns"
    ],
    focusOn: {
      title: "What to focus on:",
      items: ["Custom ADHD business systems", "Client retention frameworks", "Energy management protocols"]
    },
    ignore: {
      title: "What to ignore:",
      items: ["Generic business courses", "Hustle culture mentality", "One-size-fits-all solutions"]
    }
  },
  high: {
    archetype: "The Visionary Leader",
    archetypeEmoji: "👑",
    archetypeDescription: "Established, Innovative, Ready for Mastery",
    archetypeDetail: "You're successful but ready to scale to the next level while honoring your neurodivergent leadership style.",
    challenge: "Leadership & Legacy",
    challengeEmoji: "🎯",
    challengeDescription: "You want to build something bigger than yourself while staying true to your ADHD strengths and avoiding traditional burnout.",
    pathForward: [
      "Develop neurodivergent-friendly leadership systems",
      "Create scalable team structures that complement ADHD",
      "Build legacy systems that work without constant oversight"
    ],
    focusOn: {
      title: "What to focus on:",
      items: ["Advanced ADHD leadership training", "Scalable team systems", "Legacy business building"]
    },
    ignore: {
      title: "What to ignore:",
      items: ["Traditional leadership advice", "Micromanagement strategies", "Cookie-cutter scaling methods"]
    }
  }
};

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
    <div className={className} style={{ backgroundImage: `url(${posterUrl})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#1a1a1a" }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-80"}`}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default function Quiz() {
  const router = useRouter();
  const [step, setStep] = useState<'intro' | 'business-type' | 'growth-stage' | 'questions' | 'results'>('intro');
  const [selectedBusinessType, setSelectedBusinessType] = useState<BusinessType | null>(null);
  const [selectedGrowthStage, setSelectedGrowthStage] = useState<GrowthStage | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [totalScore, setTotalScore] = useState(0);

  const startQuiz = () => {
    setStep('business-type');
  };

  const selectBusinessType = (businessType: BusinessType) => {
    setSelectedBusinessType(businessType);
    setStep('growth-stage');
  };

  const calculateTier = () => {
    // 20 questions × 4 points max = 80 total possible
    if (totalScore <= 35) return 'low';     // 0-35: Foundation Seeker
    if (totalScore <= 55) return 'mid';     // 36-55: System Builder 
    return 'high';                          // 56-80: Visionary Leader
  };

  const resetQuiz = () => {
    localStorage.removeItem('focusFoundersQuizScore');
    localStorage.removeItem('focusFoundersQuizAnswers');
    setStep('intro');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTotalScore(0);
    setSelectedBusinessType(null);
    setSelectedGrowthStage(null);
  };

  const selectGrowthStage = (growthStage: GrowthStage) => {
    setSelectedGrowthStage(growthStage);
    
    // Clear any existing quiz data and start fresh with the selected path
    localStorage.removeItem('focusFoundersQuizScore');
    localStorage.removeItem('focusFoundersQuizAnswers');
    localStorage.setItem('focusFoundersQuizPath', JSON.stringify({
      businessType: selectedBusinessType,
      growthStage: growthStage
    }));
    
    // Start the questions on this page
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setStep('questions');
  };

  if (step === 'intro') {
    return (
      <>
        <Navbar />
        <div className="min-h-screen relative overflow-hidden flex items-center">
          <AutoPlayVideo src="https://res.cloudinary.com/dzlnqcmqn/video/upload/v1770000552/15_uefhjt.mp4" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 max-w-4xl mx-auto px-6 py-12 text-center text-white">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-2xl">
              <h1 className="text-4xl font-bold mb-6">ADHD Entrepreneur Assessment</h1>
              <p className="text-xl mb-8">
                Discover the perfect business support level for your unique ADHD journey
              </p>
              <div className="bg-yellow-400/20 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">What You'll Get:</h2>
                <ul className="space-y-2 text-lg">
                  <li>✓ 20 questions tailored to your business type and stage</li>
                  <li>✓ Personalized service recommendations</li>
                  <li>✓ Insights into your unique neurodivergent business strengths</li>
                  <li>✓ Action plan for your next steps toward sustainable success</li>
                </ul>
              </div>
              <button 
                onClick={startQuiz}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-12 py-4 rounded-full font-semibold text-xl transition-colors"
              >
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (step === 'business-type') {
    return (
      <>
        <Navbar />
        <div className="min-h-screen relative overflow-hidden flex items-center">
          <AutoPlayVideo src="https://res.cloudinary.com/dzlnqcmqn/video/upload/v1770000552/15_uefhjt.mp4" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 max-w-4xl mx-auto px-6 py-12 text-center text-white">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 text-black border border-white/40 shadow-2xl">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-4">What type of business do you run?</h1>
                  <p className="text-lg text-gray-600">
                    Choose the option that best describes your business model
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {businessTypes.map((businessType) => (
                    <button
                      key={businessType.id}
                      onClick={() => selectBusinessType(businessType.id)}
                      className="text-left p-6 bg-white/80 hover:bg-white/90 rounded-xl transition-all duration-300 border border-gray-200 hover:border-blue-400"
                    >
                      <div className="text-4xl mb-4">{businessType.emoji}</div>
                      <h3 className="text-xl font-semibold mb-2 text-black">{businessType.name}</h3>
                      <p className="text-gray-700 mb-4">{businessType.description}</p>
                      <div className="text-sm text-blue-600 font-medium">
                        Examples: {businessType.examples.join(', ')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </>
    );
  }

  if (step === 'growth-stage') {
    const selectedType = businessTypes.find(bt => bt.id === selectedBusinessType);
    
    return (
      <>
        <Navbar />
        <div className="min-h-screen relative overflow-hidden flex items-center">
          <AutoPlayVideo src="https://res.cloudinary.com/dzlnqcmqn/video/upload/v1770000552/15_uefhjt.mp4" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 max-w-4xl mx-auto px-6 py-12 text-center text-white">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 text-black border border-white/40 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl mr-2">{selectedType?.emoji}</span>
                    <span className="text-2xl font-semibold">{selectedType?.name}</span>
                  </div>
                  <h1 className="text-3xl font-bold mb-4">What stage is your business in?</h1>
                  <p className="text-lg text-gray-600">
                    Choose the stage that best describes where you are now
                  </p>
                </div>
                
                <div className="space-y-6">
                  {growthStages.map((stage) => (
                    <button
                      key={stage.id}
                      onClick={() => selectGrowthStage(stage.id)}
                      className="w-full text-left p-6 bg-white/80 hover:bg-white/90 rounded-xl transition-all duration-300 border border-gray-200 hover:border-blue-400"
                    >
                      <div className="flex items-start">
                        <div className="text-3xl mr-4">{stage.emoji}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-black">{stage.name}</h3>
                            <span className="text-blue-600 font-medium">{stage.revenue}</span>
                          </div>
                          <p className="text-gray-700">{stage.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setStep('business-type')}
                    className="text-blue-600 hover:text-blue-500 font-medium"
                  >
                    ← Back to business type
                  </button>
                </div>
              </div>
          </div>
        </div>
      </>
    );
  }

  // Questions step - handle all questions on this page
  if (step === 'questions') {
    const questions = getQuestionsForPath(selectedBusinessType!, selectedGrowthStage!);
    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const handleAnswer = (points: number) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = points;
      setAnswers(newAnswers);
      
      // Save to localStorage
      localStorage.setItem('focusFoundersQuizAnswers', JSON.stringify(newAnswers));
      
      // Move to next question or results
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Calculate final results and show on same page
        const calculatedScore = newAnswers.reduce((sum, score) => sum + score, 0);
        setTotalScore(calculatedScore);
        localStorage.setItem('focusFoundersQuizScore', calculatedScore.toString());
        setStep('results');
      }
    };

    const goBack = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      } else {
        setStep('growth-stage');
      }
    };

    return (
      <>
        <Navbar />
        <div className="min-h-screen relative overflow-hidden flex items-center">
          <AutoPlayVideo src="https://res.cloudinary.com/dzlnqcmqn/video/upload/v1770000552/15_uefhjt.mp4" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 max-w-4xl mx-auto px-6 py-12 text-center text-white">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-2xl">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl font-bold text-white">ADHD Entrepreneur Assessment</h1>
                  <span className="text-blue-600 font-semibold">
                    {currentQuestionIndex + 1} of {questions.length}
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <button
                  onClick={goBack}
                  className="mb-4 text-blue-600 hover:text-blue-500 flex items-center font-medium"
                >
                  ← Previous
                </button>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-8 text-white">
                  {currentQuestion.question}
                </h2>
                
                <div className="space-y-4">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.points)}
                      className="w-full text-left p-6 bg-white/80 hover:bg-white/90 rounded-xl transition-all duration-300 border border-gray-200 hover:border-blue-400"
                    >
                      <span className="text-lg text-black">{option.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center text-gray-600">
                <p className="text-sm">
                  This assessment helps us recommend the perfect ADHD-friendly business support for your current stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Results step - show results on same page
  if (step === 'results') {
    const tier = calculateTier();
    const profile = resultProfiles[tier];

    return (
      <>
        <Navbar />
        <div className="min-h-screen relative overflow-hidden flex items-center">
          <AutoPlayVideo src="https://res.cloudinary.com/dzlnqcmqn/video/upload/v1770000552/15_uefhjt.mp4" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 max-w-5xl mx-auto px-6 py-12 text-center">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-2xl text-white">
              
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">🤖 Your ADHD Strike Zone Results</h1>
                <div className="text-2xl font-bold text-gray-700 mb-2">
                  You're {profile.archetype} with {profile.challenge}
                </div>
                <div className="text-lg text-gray-600">
                  Based on {answers.length} questions • Score: {totalScore}/80
                </div>
              </div>

              {/* Visual Archetype Card */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">{profile.archetypeEmoji}</div>
                  <h2 className="text-3xl font-bold mb-3">{profile.archetype}</h2>
                  <p className="text-xl opacity-90 mb-4">{profile.archetypeDescription}</p>
                  <p className="text-lg opacity-80">{profile.archetypeDetail}</p>
                </div>
              </div>

              {/* Challenge Section */}
              <div className="bg-red-50 rounded-xl p-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-3">{profile.challengeEmoji}</div>
                  <h3 className="text-2xl font-bold text-red-700 mb-3">{profile.challenge}</h3>
                  <p className="text-gray-700">{profile.challengeDescription}</p>
                </div>
              </div>

              {/* Path Forward */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-2xl font-bold text-center mb-6">Your Path Forward:</h3>
                <div className="space-y-4">
                  {profile.pathForward.map((step, index) => (
                    <div key={index} className="flex items-start text-left">
                      <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-800">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Areas */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 text-lg mb-3">{profile.focusOn.title}</h4>
                  <ul className="space-y-2">
                    {profile.focusOn.items.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-green-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-6">
                  <h4 className="font-bold text-red-800 text-lg mb-3">{profile.ignore.title}</h4>
                  <ul className="space-y-2">
                    {profile.ignore.items.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-red-600 mr-2">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center space-y-4">
                <div className="text-lg text-gray-700 mb-6">
                  Ready to transform your ADHD entrepreneurial journey?
                </div>
                <div className="space-x-4">
                  <button 
                    onClick={resetQuiz}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full transition-colors"
                  >
                    Retake Assessment
                  </button>
                  {(selectedGrowthStage === 'established' || selectedGrowthStage === 'scaling' || tier === 'high' || tier === 'mid') ? (
                    <a
                      href="https://calendly.com/focus-founders/strategy-call"
                      className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-block"
                    >
                      Book Strategy Call
                    </a>
                  ) : null}
                  <a
                    href="https://www.skool.com/focus-founders-free/about"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-block"
                  >
                    Join Free Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}