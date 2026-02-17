"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { businessTypes } from "../../lib/quiz/business-types";
import { growthStages } from "../../lib/quiz/growth-stages";
import { BusinessType, GrowthStage } from "../../lib/quiz/types";
import { getQuestionsForPath } from "../../lib/quiz/questions";
import { submitQuizResult } from "../../lib/supabase";

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
  const [step, setStep] = useState<'intro' | 'business-type' | 'growth-stage' | 'questions' | 'contact' | 'results'>('intro');
  const [selectedBusinessType, setSelectedBusinessType] = useState<BusinessType | null>(null);
  const [selectedGrowthStage, setSelectedGrowthStage] = useState<GrowthStage | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [detailedAnswers, setDetailedAnswers] = useState<Array<{ questionId: string; questionText: string; selectedAnswer: string; points: number }>>([]);
  const [totalScore, setTotalScore] = useState(0);
  
  // Contact form state
  const [contactInfo, setContactInfo] = useState({
    full_name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setDetailedAnswers([]);
    setTotalScore(0);
    setSelectedBusinessType(null);
    setSelectedGrowthStage(null);
  };

  const submitContactForm = async () => {
    if (!contactInfo.full_name || !contactInfo.email || !contactInfo.phone) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const tier = calculateTier();
      const profile = resultProfiles[tier];
      
      // Get business type and growth stage names
      const businessType = businessTypes.find(bt => bt.id === selectedBusinessType);
      const growthStage = growthStages.find(gs => gs.id === selectedGrowthStage);
      
      const submission = {
        full_name: contactInfo.full_name,
        email: contactInfo.email,
        phone: contactInfo.phone,
        track: businessType?.name || selectedBusinessType || '',
        archetype: tier,
        archetype_name: profile.archetype,
        bottleneck: profile.challengeDescription,
        recommended_tier: `${profile.archetype} (${tier})`,
        strike_zone: `${profile.archetypeDescription} - ${profile.challenge}`,
        focus: profile.focusOn.items,
        ignore_list: profile.ignore.items.join(', '),
        sixty_day_path: profile.pathForward.join(' | '),
        answers: {
          businessType: selectedBusinessType,
          growthStage: selectedGrowthStage,
          questionAnswers: answers,
          detailedAnswers: detailedAnswers,
          totalScore: totalScore,
          questions: getQuestionsForPath(selectedBusinessType!, selectedGrowthStage!)
        },
        user_agent: navigator.userAgent
      };
      
      try {
        await submitQuizResult(submission);
        console.log('Quiz submitted successfully to database');
      } catch (dbError) {
        console.warn('Database not configured, quiz will work without saving:', dbError);
        // Continue to results even if database submission fails
      }
      setStep('results');
    } catch (error) {
      console.error('Error processing quiz:', error);
      alert('There was an error processing your quiz. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
    setDetailedAnswers([]);
    setStep('questions');
  };

  if (step === 'intro') {
    return (
      <>
        <Navbar hideNavLinks={true} />
        <div className="min-h-screen relative overflow-hidden pt-24">
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
        <Navbar hideNavLinks={true} />
        <div className="min-h-screen relative overflow-hidden pt-24">
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
        <Navbar hideNavLinks={true} />
        <div className="min-h-screen relative overflow-hidden pt-24">
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

    const handleAnswer = (points: number, selectedAnswerText: string) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = points;
      setAnswers(newAnswers);
      
      // Store detailed answer data
      const newDetailedAnswers = [...detailedAnswers];
      newDetailedAnswers[currentQuestionIndex] = {
        questionId: currentQuestion.id,
        questionText: currentQuestion.question,
        selectedAnswer: selectedAnswerText,
        points: points
      };
      setDetailedAnswers(newDetailedAnswers);
      
      // Save to localStorage
      localStorage.setItem('focusFoundersQuizAnswers', JSON.stringify(newAnswers));
      
      // Move to next question or results
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Calculate final results and show contact form
        const calculatedScore = newAnswers.reduce((sum, score) => sum + score, 0);
        setTotalScore(calculatedScore);
        localStorage.setItem('focusFoundersQuizScore', calculatedScore.toString());
        setStep('contact');
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
        <Navbar hideNavLinks={true} />
        <div className="min-h-screen relative overflow-hidden pt-24">
          <AutoPlayVideo src="https://res.cloudinary.com/dzlnqcmqn/video/upload/v1770000552/15_uefhjt.mp4" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 max-w-4xl mx-auto px-6 py-12 text-center text-white">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-2xl">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl font-bold text-white">ADHD Entrepreneur Assessment</h1>
                  <span className="text-white font-semibold">
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
                  className="mb-4 text-white hover:text-white/80 flex items-center font-medium"
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
                      onClick={() => handleAnswer(option.points, option.text)}
                      className="w-full text-left p-6 bg-white/80 hover:bg-white/90 rounded-xl transition-all duration-300 border border-gray-200 hover:border-blue-400"
                    >
                      <span className="text-lg text-black">{option.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center text-white/80">
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

  // Contact form step
  if (step === 'contact') {
    return (
      <>
        <Navbar hideNavLinks={true} />
        <div className="min-h-screen relative overflow-hidden pt-24">
          <AutoPlayVideo src="https://res.cloudinary.com/dzlnqcmqn/video/upload/v1770000552/15_uefhjt.mp4" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 max-w-4xl mx-auto px-6 py-12 text-center text-white">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-2xl">
              
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4 text-white">🎉 Almost Done!</h1>
                <p className="text-xl text-white/80 mb-4">
                  Enter your contact information to get your personalized ADHD entrepreneur results.
                </p>
                <div className="text-lg text-white/70">
                  Your results will be delivered instantly - no waiting!
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 rounded-xl p-6 mb-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2 text-left">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={contactInfo.full_name}
                      onChange={(e) => setContactInfo({...contactInfo, full_name: e.target.value})}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2 text-left">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2 text-left">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Privacy Note */}
              <div className="bg-yellow-500/20 rounded-lg p-4 mb-8">
                <p className="text-sm text-white/80">
                  🔒 Your information is secure and will only be used to deliver your personalized results and occasional ADHD entrepreneur tips. We never spam or share your data.
                </p>
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <button
                  onClick={submitContactForm}
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-full font-bold text-lg transition-all ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-yellow-500 hover:bg-yellow-400 text-black'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3"></div>
                      Generating Your Results...
                    </span>
                  ) : (
                    'Get My ADHD Entrepreneur Results'
                  )}
                </button>
                
                <button
                  onClick={() => setStep('questions')}
                  className="text-white/60 hover:text-white/80 text-sm"
                  disabled={isSubmitting}
                >
                  ← Back to Questions
                </button>
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
        <Navbar hideNavLinks={true} />
        <div className="min-h-screen relative overflow-hidden pt-24">
          <AutoPlayVideo src="https://res.cloudinary.com/dzlnqcmqn/video/upload/v1770000552/15_uefhjt.mp4" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 max-w-5xl mx-auto px-6 py-12 text-center">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-2xl text-white">
              
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4 text-white">🤖 Your ADHD Strike Zone Results</h1>
                <div className="text-2xl font-bold text-white mb-2">
                  You're {profile.archetype} with {profile.challenge}
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
                <h3 className="text-2xl font-bold text-center mb-6 text-blue-800">Your Path Forward:</h3>
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
                <div className="text-lg text-white mb-6">
                  Ready to transform your ADHD entrepreneurial journey?
                </div>
                <div className="space-x-4">
                  <button 
                    onClick={resetQuiz}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full transition-colors"
                  >
                    Retake Assessment
                  </button>
                  {(selectedGrowthStage !== 'startup') ? (
                    <a
                      href="https://calendly.com/rexloyer/focus-founders-qualification?back=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-400 text-black px-8 py-3 rounded-full font-semibold transition-colors inline-block"
                    >
                      Book Strategy Call
                    </a>
                  ) : null}
                  <a
                    href="https://www.skool.com/focus-founders-free/about"
                    className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold transition-colors inline-block"
                  >
                    Join Focus Founders
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