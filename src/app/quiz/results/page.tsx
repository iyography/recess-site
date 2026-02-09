"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

interface ServiceTier {
  name: string;
  price: string;
  description: string;
  services: string[];
  cta: string;
  color: string;
}

const serviceTiers: Record<string, ServiceTier> = {
  low: {
    name: "ADHD Accountability Starter",
    price: "$97-197/month",
    description: "Perfect for neurodivergent entrepreneurs just starting their journey who need daily support and community.",
    services: [
      "Daily check-ins and accountability",
      "ADHD-friendly community support", 
      "Foundational business frameworks",
      "Energy management basics",
      "Dopamine-sized wins tracking"
    ],
    cta: "Start Your ADHD Business Journey",
    color: "from-green-600 to-emerald-600"
  },
  mid: {
    name: "ADHD Business Systems Intensive", 
    price: "$497-997/month",
    description: "For growing entrepreneurs ready to build sustainable systems without burning out their ADHD brains.",
    services: [
      "Bi-weekly 1:1 strategy calls",
      "Custom ADHD-friendly systems",
      "Client retention frameworks", 
      "Energy-based scheduling",
      "Crisis support channels"
    ],
    cta: "Scale Your ADHD Business",
    color: "from-orange-600 to-amber-600"
  },
  high: {
    name: "Scale Without Burnout Mastermind",
    price: "$1997-3997/month", 
    description: "Elite support for established entrepreneurs who refuse to sacrifice their neurodivergent gifts for growth.",
    services: [
      "Weekly 1:1 strategic intensives",
      "24/7 crisis management support",
      "Advanced team building for ADHD leaders",
      "Burnout prevention protocols",
      "Peer mastermind access"
    ],
    cta: "Join the Elite Mastermind",
    color: "from-purple-600 to-violet-600"
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
  const result = serviceTiers[tier];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-orange-900 to-red-900 pt-24">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Your ADHD Business Assessment Results</h1>
              <p className="text-xl text-yellow-400">Score: {totalScore}/360 points</p>
              <p className="text-lg text-white/80 mt-2">
                Based on your responses to 90 ADHD-specific business questions
              </p>
            </div>
            
            <div className={`bg-gradient-to-r ${result.color} rounded-xl p-8 mb-8`}>
              <h2 className="text-3xl font-bold mb-4">{result.name}</h2>
              <p className="text-2xl font-semibold mb-4">{result.price}</p>
              <p className="text-lg mb-6">{result.description}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  {result.services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-yellow-300 mr-2">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-yellow-100 transition-colors">
                {result.cta}
              </button>
            </div>

            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Your ADHD Business Profile</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{Math.round((answers.filter(a => a === 1).length / 90) * 100)}%</div>
                  <div className="text-white/80">Foundation Building</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{Math.round((answers.filter(a => a === 2 || a === 3).length / 90) * 100)}%</div>
                  <div className="text-white/80">Systems Development</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{Math.round((answers.filter(a => a === 4).length / 90) * 100)}%</div>
                  <div className="text-white/80">Mastery Level</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Why This Assessment Matters</h3>
              <p className="text-white/90 mb-4">
                This comprehensive 90-question assessment was designed specifically for ADHD entrepreneurs based on real business coaching data. It evaluates your unique challenges with:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-1">
                  <li>• Executive dysfunction management</li>
                  <li>• Hyperfocus and time blindness</li>
                  <li>• Rejection sensitivity in business</li>
                  <li>• Energy-based work patterns</li>
                  <li>• Interest-driven motivation</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Client relationship management</li>
                  <li>• Business systems development</li>
                  <li>• Financial planning and pricing</li>
                  <li>• Team leadership challenges</li>
                  <li>• Sustainable growth strategies</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={resetQuiz}
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full transition-colors mr-4"
              >
                Retake Quiz
              </button>
              <a
                href="https://skool.com/focus-founders/about"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Join Focus Founders Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}