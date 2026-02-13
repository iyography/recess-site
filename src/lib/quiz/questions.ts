import { QuizQuestion, BusinessType, GrowthStage } from './types';

// Sample questions for Service Business + Startup path
const serviceStartupQuestions: QuizQuestion[] = [
  {
    id: 'service-startup-1',
    question: 'What\'s your biggest challenge with getting your first clients?',
    options: [
      { text: 'I don\'t know where to find potential clients', points: 1 },
      { text: 'I find clients but struggle to close them', points: 2 },
      { text: 'I get clients but they\'re not the right fit', points: 3 },
      { text: 'I close clients but struggle with pricing', points: 2 }
    ]
  },
  {
    id: 'service-startup-2',
    question: 'How do you handle your ADHD when networking or doing sales calls?',
    options: [
      { text: 'I avoid them completely - too overwhelming', points: 1 },
      { text: 'I do them but get exhausted and scattered', points: 2 },
      { text: 'I do well in the moment but forget follow-ups', points: 3 },
      { text: 'I have systems to manage the process', points: 4 }
    ]
  },
  {
    id: 'service-startup-3',
    question: 'What\'s your experience with defining your service offerings?',
    options: [
      { text: 'I change what I offer constantly based on interest', points: 1 },
      { text: 'I offer too many things and confuse clients', points: 2 },
      { text: 'I have core offerings but sometimes add random things', points: 3 },
      { text: 'I have clear, focused service packages', points: 4 }
    ]
  },
  {
    id: 'service-startup-4',
    question: 'How do you manage project timelines with your ADHD?',
    options: [
      { text: 'Time blindness makes me terrible at estimates', points: 1 },
      { text: 'I underestimate everything and stress clients', points: 2 },
      { text: 'I pad timelines but still struggle with consistency', points: 3 },
      { text: 'I have realistic systems for time management', points: 4 }
    ]
  },
  {
    id: 'service-startup-5',
    question: 'What\'s your biggest struggle with client communication?',
    options: [
      { text: 'I forget to respond to messages for days', points: 1 },
      { text: 'I respond but miss important details they mentioned', points: 2 },
      { text: 'I over-communicate when hyperfocused, under-communicate when not', points: 3 },
      { text: 'I have consistent communication systems', points: 4 }
    ]
  },
  {
    id: 'service-startup-6',
    question: 'How do you handle rejection sensitivity in your business?',
    options: [
      { text: 'Client feedback devastates me for weeks', points: 1 },
      { text: 'I take criticism personally but recover in a few days', points: 2 },
      { text: 'I struggle with it but have some coping strategies', points: 3 },
      { text: 'I separate feedback from personal worth effectively', points: 4 }
    ]
  },
  {
    id: 'service-startup-7',
    question: 'What\'s your approach to pricing your services?',
    options: [
      { text: 'I undercharge because I feel guilty asking for money', points: 1 },
      { text: 'I price inconsistently based on how I feel about the client', points: 2 },
      { text: 'I have set prices but often discount to avoid confrontation', points: 3 },
      { text: 'I price confidently based on value delivered', points: 4 }
    ]
  },
  {
    id: 'service-startup-8',
    question: 'How do you maintain focus during client work sessions?',
    options: [
      { text: 'I get distracted constantly and work takes forever', points: 1 },
      { text: 'Focus comes and goes unpredictably', points: 2 },
      { text: 'I can focus but only during certain times/conditions', points: 3 },
      { text: 'I\'ve optimized my environment and schedule for focus', points: 4 }
    ]
  },
  {
    id: 'service-startup-9',
    question: 'What\'s your experience with creating proposals or contracts?',
    options: [
      { text: 'I wing it every time and often forget important details', points: 1 },
      { text: 'I have templates but forget to customize them properly', points: 2 },
      { text: 'I have good templates but sometimes skip steps when excited', points: 3 },
      { text: 'I have systematic proposal and contract processes', points: 4 }
    ]
  },
  {
    id: 'service-startup-10',
    question: 'How do you handle the feast-or-famine cycle of client work?',
    options: [
      { text: 'I hyperfocus on current clients and forget to prospect', points: 1 },
      { text: 'I alternate between working and panicking about finding work', points: 2 },
      { text: 'I try to balance both but one always suffers', points: 3 },
      { text: 'I have systems to maintain both consistently', points: 4 }
    ]
  },
  {
    id: 'service-startup-11',
    question: 'What\'s your biggest challenge with building credibility?',
    options: [
      { text: 'I doubt my abilities and it shows in my marketing', points: 1 },
      { text: 'I have imposter syndrome but try to push through', points: 2 },
      { text: 'I showcase my work but struggle with self-promotion', points: 3 },
      { text: 'I confidently demonstrate my expertise and value', points: 4 }
    ]
  },
  {
    id: 'service-startup-12',
    question: 'How do you manage energy during client interactions?',
    options: [
      { text: 'Client meetings drain me completely for the rest of the day', points: 1 },
      { text: 'Some interactions energize me, others drain me unpredictably', points: 2 },
      { text: 'I can manage energy but need recovery time between clients', points: 3 },
      { text: 'I match my energy to client needs and recover effectively', points: 4 }
    ]
  },
  {
    id: 'service-startup-13',
    question: 'What\'s your approach to setting boundaries with clients?',
    options: [
      { text: 'I have no boundaries and clients walk all over me', points: 1 },
      { text: 'I set boundaries but break them when I feel bad', points: 2 },
      { text: 'I have boundaries but struggle to enforce them consistently', points: 3 },
      { text: 'I maintain clear, professional boundaries always', points: 4 }
    ]
  },
  {
    id: 'service-startup-14',
    question: 'How do you handle detailed client requirements?',
    options: [
      { text: 'I miss important details and have to redo work', points: 1 },
      { text: 'I try to track everything but my system is chaotic', points: 2 },
      { text: 'I capture most details but sometimes things slip through', points: 3 },
      { text: 'I have reliable systems for capturing and tracking all requirements', points: 4 }
    ]
  },
  {
    id: 'service-startup-15',
    question: 'What\'s your experience with following up after project completion?',
    options: [
      { text: 'I finish the work and disappear - follow-up feels awkward', points: 1 },
      { text: 'I mean to follow up but forget or procrastinate', points: 2 },
      { text: 'I follow up sometimes but it\'s inconsistent', points: 3 },
      { text: 'I have systematic follow-up processes for all clients', points: 4 }
    ]
  },
  {
    id: 'service-startup-16',
    question: 'How do you manage the business side while doing client work?',
    options: [
      { text: 'I only focus on one or the other - both suffer', points: 1 },
      { text: 'I try to do both but admin tasks pile up', points: 2 },
      { text: 'I batch admin time but sometimes it interferes with client work', points: 3 },
      { text: 'I have clear systems for balancing both effectively', points: 4 }
    ]
  },
  {
    id: 'service-startup-17',
    question: 'What\'s your biggest challenge with consistency in service delivery?',
    options: [
      { text: 'My output quality varies wildly based on my ADHD state', points: 1 },
      { text: 'I deliver good work but timelines are unpredictable', points: 2 },
      { text: 'I\'m mostly consistent but have occasional off periods', points: 3 },
      { text: 'I deliver consistent quality and timing regardless of my state', points: 4 }
    ]
  },
  {
    id: 'service-startup-18',
    question: 'How do you handle client education and expectation setting?',
    options: [
      { text: 'I assume clients understand and often have mismatched expectations', points: 1 },
      { text: 'I try to explain but sometimes miss important details', points: 2 },
      { text: 'I educate clients but sometimes over-explain when hyperfocused', points: 3 },
      { text: 'I have clear processes for educating and setting expectations', points: 4 }
    ]
  },
  {
    id: 'service-startup-19',
    question: 'What\'s your approach to building long-term client relationships?',
    options: [
      { text: 'I do the work and move on - relationships feel overwhelming', points: 1 },
      { text: 'I want long-term relationships but don\'t know how to build them', points: 2 },
      { text: 'I maintain some relationships but it\'s hit or miss', points: 3 },
      { text: 'I systematically build and maintain long-term client relationships', points: 4 }
    ]
  },
  {
    id: 'service-startup-20',
    question: 'How do you envision scaling your service business?',
    options: [
      { text: 'I have no idea how to scale beyond doing everything myself', points: 1 },
      { text: 'I want to scale but don\'t know where to start', points: 2 },
      { text: 'I have ideas for scaling but struggle with implementation', points: 3 },
      { text: 'I have clear systems and plans for scaling my service business', points: 4 }
    ]
  }
];

export function getQuestionsForPath(businessType: BusinessType, growthStage: GrowthStage): QuizQuestion[] {
  // Create stage-specific variations of questions
  const questions = [...serviceStartupQuestions];
  
  // Customize first question based on growth stage
  if (growthStage === 'growing') {
    questions[0] = {
      id: 'service-growing-1',
      question: 'What\'s your biggest challenge with client acquisition at your current level?',
      options: [
        { text: 'I need to scale my client acquisition systems', points: 2 },
        { text: 'I find good clients but struggle with capacity management', points: 3 },
        { text: 'I get clients but they\'re not aligned with my growth goals', points: 3 },
        { text: 'I need to systematize my sales process for growth', points: 4 }
      ]
    };
  } else if (growthStage === 'established') {
    questions[0] = {
      id: 'service-established-1', 
      question: 'What\'s your biggest challenge with managing your established business?',
      options: [
        { text: 'I need to delegate client work but struggle with letting go', points: 2 },
        { text: 'I want to optimize but don\'t know how to systematize my expertise', points: 3 },
        { text: 'I have systems but they don\'t work with my ADHD brain', points: 3 },
        { text: 'I need help optimizing ADHD-friendly business systems', points: 4 }
      ]
    };
  } else if (growthStage === 'scaling') {
    questions[0] = {
      id: 'service-scaling-1',
      question: 'What\'s your biggest challenge with scaling to the next level?',
      options: [
        { text: 'I need advanced systems for delegation and team management', points: 3 },
        { text: 'I want to scale but need ADHD-friendly leadership strategies', points: 4 },
        { text: 'I have the revenue but need help building scalable operations', points: 4 },
        { text: 'I need expert guidance for sustainable high-level growth', points: 4 }
      ]
    };
  }
  
  return questions;
}

export { serviceStartupQuestions };