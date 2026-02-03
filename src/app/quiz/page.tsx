"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";

// ─── Types ───────────────────────────────────────────────────────────────────

type Step = "intro" | "questions" | "contact" | "calculating" | "results";

type ArchetypeKey = "master-baker" | "visionary-ceo" | "team-builder" | "growth-driver";

interface QuizQuestion {
  question: string;
  options: string[];
}

interface ArchetypeInfo {
  name: string;
  emoji: string;
  description: string;
  strengths: string[];
  challenges: string[];
  advice: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const QUESTIONS: QuizQuestion[] = [
  {
    question: "Which of these best describes your bakery's annual revenue?",
    options: [
      "Getting the dough to rise (<$100k)",
      "Comfortably baking ($100k - $250k)",
      "Seriously scaling ($250k - $750k)",
      "A baking empire ($750k+)",
    ],
  },
  {
    question: "What's the \"spirit animal\" of your bakery?",
    options: [
      "The Cozy Neighborhood Cafe",
      "The High-End Pâtisserie",
      "The Bustling Bread Hub",
      "The Online-Only Sensation",
    ],
  },
  {
    question: "Where in the world are your ovens heating up?",
    options: [
      "North America",
      "Europe & UK",
      "Australia / New Zealand",
      "Asia, Africa, or South America",
    ],
  },
  {
    question: "How big is your baking army?",
    options: [
      "Just me, the solo warrior!",
      "Me + a small crew (2-5)",
      "A growing team (6-10)",
      "A full battalion (11+)",
    ],
  },
  {
    question: "What's the one \"monster\" you're currently trying to defeat?",
    options: [
      "The Profit-Eating Dragon (low margins)",
      "The Time-Sucking Octopus (inefficient operations)",
      "The Empty-Store Ghost (marketing & sales)",
      "The Team-Drama Gremlin (staffing issues)",
    ],
  },
  {
    question: "If you had a magic wand for your business, what would you fix first?",
    options: [
      "Double my profits overnight",
      "Clone my best employee",
      "Find 10 more hours in the week",
      "Automate my marketing",
    ],
  },
  {
    question: "Which hat do you wear most often?",
    options: [
      "The Master Baker (hands in the dough)",
      "The Visionary CEO (working on the business)",
      "The Head of HR (managing the team)",
      "The Firefighter (solving every single problem)",
    ],
  },
  {
    question: "How long have you been in the baking game?",
    options: [
      "Fresh out of the oven (< 1 year)",
      "Finding my groove (1-3 years)",
      "A seasoned pro (4-10 years)",
      "A bakery legend (10+ years)",
    ],
  },
  {
    question: "What does \"success\" look like for you in the next 12 months?",
    options: [
      "Finally taking a real vacation",
      "Paying myself a proper salary",
      "Opening a second location",
      "Hiring a manager so I can step back",
    ],
  },
  {
    question: "What's your go-to fuel for a busy bake day?",
    options: [
      "Black coffee, strong.",
      "A fancy latte with art.",
      "Tea, calm and collected.",
      "Pure, unadulterated chaos.",
    ],
  },
  {
    question: "If your bakery was a superhero, what would be its superpower?",
    options: [
      "Sourdough that saves the day",
      "Cakes that defy gravity",
      "Pastries that hypnotize customers",
      "The best coffee in town",
    ],
  },
  {
    question: "What's the one tool in your bakery you couldn't live without?",
    options: [
      "My trusty stand mixer",
      "A perfectly organized spreadsheet",
      "My amazing team",
      "The espresso machine",
    ],
  },
  {
    question: "Where do you wish you had more customers coming from?",
    options: [
      "More foot traffic from the street",
      "Instagram & Facebook fame",
      "Rave online reviews & word-of-mouth",
      "Corporate catering contracts",
    ],
  },
  {
    question: "What's your biggest staffing headache right now?",
    options: [
      "Finding reliable people to hire",
      "Training new staff effectively",
      "Keeping my great team motivated",
      "I'm a solo act, so it's all on me!",
    ],
  },
  {
    question: "What's the #1 reason you'd join a community of bakery owners?",
    options: [
      "To solve problems with people who \"get it\"",
      "To learn new business & profit strategies",
      "To combat the loneliness of being the boss",
      "To find inspiration and new ideas",
    ],
  },
];

const ARCHETYPES: Record<ArchetypeKey, ArchetypeInfo> = {
  "master-baker": {
    name: "The Master Baker",
    emoji: "👨‍🍳",
    description: "You're a true artisan at heart. Your passion is in the craft, the dough, the perfect crust. You'd rather be elbow-deep in flour than staring at spreadsheets.",
    strengths: ["Exceptional product quality", "Deep craft knowledge", "Customer loyalty through taste", "Authentic brand story"],
    challenges: ["Delegating tasks", "Working ON the business vs IN it", "Scaling without losing quality"],
    advice: "Your craft is your superpower, but to grow, you need to teach others your magic. Document your recipes, create training systems, and trust your team to carry your vision.",
  },
  "visionary-ceo": {
    name: "The Visionary CEO",
    emoji: "🚀",
    description: "You see the big picture. While others focus on today's bake, you're planning next year's expansion. Strategy and growth are your bread and butter.",
    strengths: ["Strategic thinking", "Business acumen", "Growth mindset", "System building"],
    challenges: ["Staying connected to daily operations", "Patience with slow progress", "Team buy-in for big changes"],
    advice: "Your vision is powerful, but execution requires the whole team. Bring your staff into your vision, celebrate small wins, and remember that sustainable growth beats fast growth.",
  },
  "team-builder": {
    name: "The Team Builder",
    emoji: "👥",
    description: "People are your priority. You know that a bakery is only as good as its team, and you invest heavily in building, training, and retaining great people.",
    strengths: ["Staff retention", "Positive culture", "Delegation skills", "Leadership development"],
    challenges: ["Making tough personnel decisions", "Balancing people and profit", "Avoiding over-dependence on key staff"],
    advice: "Your people-first approach builds loyalty, but don't forget the business fundamentals. Create clear career paths, tie performance to rewards, and build systems that work even when star employees leave.",
  },
  "growth-driver": {
    name: "The Growth Driver",
    emoji: "📈",
    description: "You're all about results. Marketing, sales, and customer acquisition excite you. You love seeing the numbers go up and finding new ways to reach customers.",
    strengths: ["Marketing savvy", "Sales focus", "Customer acquisition", "Data-driven decisions"],
    challenges: ["Operational efficiency", "Product consistency", "Staff development"],
    advice: "Your growth focus is valuable, but sustainable success requires solid foundations. Invest in operations and team training to support the growth you're driving. Quality must keep pace with quantity.",
  },
};

// ─── Animation Variants ──────────────────────────────────────────────────────

const slideVariants = {
  enter: { x: 300, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function QuizPage() {
  const [step, setStep] = useState<Step>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [contactForm, setContactForm] = useState({ fullName: "", email: "", phone: "" });
  const [calcText, setCalcText] = useState("Analyzing your bakery profile...");
  const [direction, setDirection] = useState(1);
  const [resultArchetype, setResultArchetype] = useState<ArchetypeKey>("master-baker");

  const totalQuestions = QUESTIONS.length;
  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

  // ─── Navigation helpers ──────────────────────────────────────────────────

  function goTo(next: Step) {
    setDirection(1);
    setStep(next);
  }

  function goBack() {
    setDirection(-1);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    } else {
      setStep("intro");
    }
  }

  // ─── Answer selection ────────────────────────────────────────────────────

  function selectAnswer(optionIndex: number) {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setTimeout(() => {
        setDirection(1);
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        goTo("contact");
      }, 300);
    }
  }

  // ─── Scoring ─────────────────────────────────────────────────────────────

  function calculateResults() {
    // Simple scoring based on answer patterns
    const scores: Record<ArchetypeKey, number> = {
      "master-baker": 0,
      "visionary-ceo": 0,
      "team-builder": 0,
      "growth-driver": 0,
    };

    // Question 7 (hat) is most indicative
    const hatAnswer = answers[6];
    if (hatAnswer === 0) scores["master-baker"] += 3;
    if (hatAnswer === 1) scores["visionary-ceo"] += 3;
    if (hatAnswer === 2) scores["team-builder"] += 3;
    if (hatAnswer === 3) scores["master-baker"] += 2; // Firefighter often means too hands-on

    // Question 5 (monster) indicates challenges
    const monsterAnswer = answers[4];
    if (monsterAnswer === 0) scores["growth-driver"] += 2; // Profit focus
    if (monsterAnswer === 1) scores["visionary-ceo"] += 2; // Operations/systems
    if (monsterAnswer === 2) scores["growth-driver"] += 2; // Marketing
    if (monsterAnswer === 3) scores["team-builder"] += 2; // Staffing

    // Question 6 (magic wand) shows priorities
    const wandAnswer = answers[5];
    if (wandAnswer === 0) scores["growth-driver"] += 2;
    if (wandAnswer === 1) scores["team-builder"] += 2;
    if (wandAnswer === 2) scores["visionary-ceo"] += 2;
    if (wandAnswer === 3) scores["growth-driver"] += 2;

    // Question 9 (success) shows goals
    const successAnswer = answers[8];
    if (successAnswer === 0) scores["master-baker"] += 1; // Vacation = burnt out from doing too much
    if (successAnswer === 1) scores["growth-driver"] += 1;
    if (successAnswer === 2) scores["visionary-ceo"] += 2;
    if (successAnswer === 3) scores["team-builder"] += 2;

    // Question 12 (tool) shows values
    const toolAnswer = answers[11];
    if (toolAnswer === 0) scores["master-baker"] += 2;
    if (toolAnswer === 1) scores["visionary-ceo"] += 2;
    if (toolAnswer === 2) scores["team-builder"] += 2;
    if (toolAnswer === 3) scores["master-baker"] += 1;

    // Question 14 (staffing) indicates management style
    const staffAnswer = answers[13];
    if (staffAnswer === 0) scores["team-builder"] += 1;
    if (staffAnswer === 1) scores["team-builder"] += 1;
    if (staffAnswer === 2) scores["team-builder"] += 2;
    if (staffAnswer === 3) scores["master-baker"] += 2;

    // Question 15 (community reason) shows mindset
    const communityAnswer = answers[14];
    if (communityAnswer === 0) scores["team-builder"] += 1;
    if (communityAnswer === 1) scores["visionary-ceo"] += 1;
    if (communityAnswer === 2) scores["master-baker"] += 1;
    if (communityAnswer === 3) scores["growth-driver"] += 1;

    // Find highest score
    const sorted = (Object.entries(scores) as [ArchetypeKey, number][]).sort((a, b) => b[1] - a[1]);
    const topArchetype = sorted[0][0];
    setResultArchetype(topArchetype);
    return topArchetype;
  }

  // ─── Submit ──────────────────────────────────────────────────────────────

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const archetype = calculateResults();
    goTo("calculating");

    const answersData = answers.map((answerIdx, qIdx) => ({
      question: QUESTIONS[qIdx].question,
      answer: QUESTIONS[qIdx].options[answerIdx],
    }));

    try {
      await fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: contactForm.fullName,
          email: contactForm.email,
          phone: contactForm.phone,
          archetype,
          archetypeName: ARCHETYPES[archetype].name,
          answers: answersData,
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        }),
      });
    } catch {
      // Silently continue to results
    }
  }

  // ─── Calculating animation ──────────────────────────────────────────────

  useEffect(() => {
    if (step !== "calculating") return;
    const messages = [
      "Analyzing your bakery profile...",
      "Discovering your owner type...",
      "Preparing your personalized insights...",
    ];
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i < messages.length) {
        setCalcText(messages[i]);
      } else {
        clearInterval(interval);
        goTo("results");
      }
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const archetypeData = ARCHETYPES[resultArchetype];

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FFF8F0] text-[#1A1A1A] overflow-hidden font-sans pt-20">
        <AnimatePresence mode="wait" custom={direction}>
          {/* ── Intro ─────────────────────────────────────────────── */}
          {step === "intro" && (
            <motion.div
              key="intro"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative"
            >
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
              <div className="absolute inset-0 bg-white/30" />
              <div className="relative z-10 max-w-2xl">
                <div className="text-6xl mb-6">🥐</div>
                <h1 className="font-heading text-3xl md:text-5xl mb-6 leading-tight text-[#1A1A1A]">
                  Bakery Owner{" "}
                  <span className="text-[#8B2332]">Discovery Quiz</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                  Answer 15 fun questions to discover your bakery owner type
                  and get personalized insights for your business.
                </p>
                <button
                  onClick={() => goTo("questions")}
                  className="bg-[#8B2332] hover:bg-[#A52D3F] text-white text-lg font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Start Quiz &rarr;
                </button>
              </div>
            </motion.div>
          )}

          {/* ── Questions ───────────────────────────────────────────── */}
          {step === "questions" && (
            <motion.div
              key="questions"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="min-h-screen flex flex-col px-6 pt-8 pb-12 relative"
            >
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
              <div className="absolute inset-0 bg-white/30" />
              <div className="max-w-2xl w-full mx-auto flex-1 flex flex-col justify-center relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`q-${currentQuestion}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mb-8">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <button onClick={goBack} className="hover:text-[#1A1A1A] transition-colors">
                          &larr; Back
                        </button>
                        <span>Question {currentQuestion + 1} of {totalQuestions}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#8B2332] rounded-full"
                          animate={{ width: `${progressPercent}%` }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[#1A1A1A]">
                      {QUESTIONS[currentQuestion]?.question}
                    </h3>
                    <div className="space-y-3">
                      {QUESTIONS[currentQuestion]?.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => selectAnswer(idx)}
                          className="w-full text-left p-5 rounded-xl border border-gray-200 bg-white/90 backdrop-blur-sm hover:border-[#8B2332]/50 hover:shadow-md transition-all duration-300 text-lg"
                        >
                          <span className="text-[#1A1A1A]">{opt}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* ── Contact Form ──────────────────────────────────────── */}
          {step === "contact" && (
            <motion.div
              key="contact"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="min-h-screen flex flex-col items-center justify-center px-6 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B2332]/5 to-transparent" />
              <div className="max-w-md w-full relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-[#1A1A1A]">
                  Almost there!
                </h2>
                <p className="text-gray-600 text-center mb-8">
                  Enter your details to see your personalized results.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.fullName}
                      onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#8B2332] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#8B2332] transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#1A1A1A] focus:outline-none focus:border-[#8B2332] transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#8B2332] hover:bg-[#A52D3F] text-white text-lg font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] mt-4"
                  >
                    See My Results
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* ── Calculating ───────────────────────────────────────── */}
          {step === "calculating" && (
            <motion.div
              key="calculating"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-7xl mb-8"
              >
                🎂
              </motion.div>
              <h2 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Analyzing your responses...</h2>
              <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
                <motion.div
                  className="h-full bg-[#8B2332] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              </div>
              <motion.p
                key={calcText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-600 text-lg"
              >
                {calcText}
              </motion.p>
            </motion.div>
          )}

          {/* ── Results ───────────────────────────────────────────── */}
          {step === "results" && (
            <motion.div
              key="results"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="min-h-screen px-6 py-12"
            >
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                    className="inline-block text-7xl mb-4"
                  >
                    {archetypeData.emoji}
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold mb-2 text-[#1A1A1A]"
                  >
                    You are{" "}
                    <span className="text-[#8B2332]">{archetypeData.name}</span>
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-600 text-lg leading-relaxed mb-8 text-center"
                >
                  {archetypeData.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white rounded-xl p-6 mb-6 shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-4 text-[#1A1A1A]">Your Superpowers</h3>
                  <div className="space-y-3">
                    {archetypeData.strengths.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-green-600 mt-0.5">&#10003;</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-[#8B2332]/10 border border-[#8B2332]/30 rounded-xl p-6 mb-6"
                >
                  <h3 className="text-lg font-semibold text-[#8B2332] mb-4">
                    Growth Areas
                  </h3>
                  <div className="space-y-2">
                    {archetypeData.challenges.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-[#8B2332] mt-0.5">•</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="border-2 border-[#8B2332] rounded-xl p-6 mb-8 bg-[#8B2332]/5"
                >
                  <h3 className="text-sm font-semibold text-[#8B2332] uppercase tracking-wider mb-2">
                    Marie&apos;s Advice For You
                  </h3>
                  <p className="text-[#1A1A1A] text-lg">
                    {archetypeData.advice}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="rounded-xl p-6 mb-8 bg-white shadow-md border-2 border-[#8B2332]"
                >
                  <h3 className="text-lg font-semibold mb-1 text-[#1A1A1A]">Ready to Level Up?</h3>
                  <p className="text-gray-600 mb-4">
                    Join The First Bakery School community and connect with bakery owners who &quot;get it.&quot;
                  </p>

                  <a
                    href="https://www.skool.com/thefirstbakeryschool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-[#8B2332] hover:bg-[#A52D3F]"
                  >
                    Join Free Community
                  </a>
                </motion.div>

                <div className="text-center pb-8 space-y-4">
                  <button
                    onClick={() => {
                      setStep("intro");
                      setCurrentQuestion(0);
                      setAnswers([]);
                      setContactForm({ fullName: "", email: "", phone: "" });
                    }}
                    className="text-gray-500 hover:text-[#1A1A1A] transition-colors underline underline-offset-4"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
