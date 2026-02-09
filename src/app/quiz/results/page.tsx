"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

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

interface ServiceTier {
  name: string;
  price: string;
  description: string;
  services: string[];
  cta: string;
  color: string;
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

const serviceTiers: Record<string, ServiceTier> = {
  low: {
    name: "Foundation Builder Program",
    price: "$197/month",
    description: "Build the ADHD-friendly foundation your business needs to thrive.",
    services: [
      "Daily accountability check-ins",
      "ADHD business framework library", 
      "Energy-based scheduling system",
      "Dopamine reward tracking",
      "Community support access"
    ],
    cta: "Join Foundation Builder →",
    color: "from-green-500 to-emerald-600"
  },
  mid: {
    name: "Scale Smart Intensive", 
    price: "$697/month",
    description: "Scale your business with custom ADHD-friendly systems that prevent burnout.",
    services: [
      "Bi-weekly 1:1 strategy sessions",
      "Custom business system design",
      "Client delivery optimization", 
      "Team workflow development",
      "Crisis support protocols"
    ],
    cta: "Join Scale Smart →",
    color: "from-orange-500 to-red-500"
  },
  high: {
    name: "Visionary Leaders Mastermind",
    price: "$1,997/month", 
    description: "Elite mastermind for ADHD entrepreneurs building 7-figure+ businesses.",
    services: [
      "Weekly strategic intensives",
      "Neurodivergent leadership development",
      "Advanced team scaling systems",
      "Legacy business planning",
      "Direct founder access"
    ],
    cta: "Join the Mastermind →",
    color: "from-purple-500 to-violet-600"
  }
};

export default function QuizResults() {
  const router = useRouter();
  const [totalScore, setTotalScore] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    // Get score and answers from localStorage
    const savedScore = localStorage.getItem('focusFoundersQuizScore');
    const savedAnswers = localStorage.getItem('focusFoundersQuizAnswers');
    
    if (savedScore) {
      setTotalScore(parseInt(savedScore));
    }
    
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const calculateTier = () => {
    if (totalScore <= 180) return 'low';
    if (totalScore <= 270) return 'mid';
    return 'high';
  };

  const resetQuiz = () => {
    localStorage.removeItem('focusFoundersQuizScore');
    localStorage.removeItem('focusFoundersQuizAnswers');
    router.push('/quiz');
  };

  const tier = calculateTier();
  const profile = resultProfiles[tier];
  const service = serviceTiers[tier];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
            
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2">🤖 Your Strike Zone Results</h1>
              <div className="text-2xl font-bold text-gray-700">
                You're {profile.archetype} with {profile.challenge}
              </div>
            </div>

            {/* Your Archetype Section */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{profile.archetypeEmoji}</span>
                <h2 className="text-2xl font-bold">Your Archetype</h2>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{profile.archetype}</h3>
              <p className="text-gray-600 mb-3">{profile.archetypeDescription}</p>
              <p className="text-gray-800">{profile.archetypeDetail}</p>
            </div>

            {/* Your Challenge Section */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{profile.challengeEmoji}</span>
                <h2 className="text-2xl font-bold">Your Challenge</h2>
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-2">{profile.challenge}</h3>
              <p className="text-gray-600 mb-3">{profile.challengeDescription}</p>
            </div>

            {/* Your Path Forward */}
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">Your Path Forward:</h2>
              <ul className="space-y-2 mb-6">
                {profile.pathForward.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-700 mb-2">{profile.focusOn.title}</h3>
                  <ul className="space-y-1">
                    {profile.focusOn.items.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-700 mb-2">{profile.ignore.title}</h3>
                  <ul className="space-y-1">
                    {profile.ignore.items.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Options to Consider */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-2">Options to Consider</h2>
              <p className="text-gray-600 mb-6">If you're not sure, book a discovery call.</p>
              
              <div className="space-y-6">
                {/* Primary Service */}
                <div className={`bg-gradient-to-r ${service.color} rounded-xl p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-xl mb-4">{service.price}</p>
                  <p className="mb-6 opacity-90">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.services.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-yellow-300 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                    {service.cta}
                  </button>
                </div>

                {/* Discovery Call Option */}
                <div className="bg-gray-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Work With Me 1-on-1 →</h3>
                  <p className="text-gray-700 mb-4">I personally help you scale to $5K/mo + beyond</p>
                  
                  <ul className="space-y-1 text-sm text-gray-700 mb-4">
                    <li>• Weekly 1-on-1 strategy sessions</li>
                    <li>• Custom ADHD-friendly business systems</li>
                    <li>• Done-for-you implementation</li>
                    <li>• Direct founder access (48hr response)</li>
                    <li>• Custom 90-day roadmap</li>
                  </ul>
                  
                  <button className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-400 transition-colors">
                    Book Discovery Call
                  </button>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-6 border-t">
              <button 
                onClick={resetQuiz}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full transition-colors mr-4"
              >
                Retake Assessment
              </button>
              <a
                href="https://www.skool.com/focus-founders-free/about"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}