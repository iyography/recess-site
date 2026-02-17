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

// Growing stage questions (for businesses doing $1K-$5K/month)
const serviceGrowingQuestions: QuizQuestion[] = [
  {
    id: 'service-growing-1',
    question: 'What\'s your biggest challenge with client acquisition at your current level?',
    options: [
      { text: 'I need to scale my client acquisition systems', points: 2 },
      { text: 'I find good clients but struggle with capacity management', points: 3 },
      { text: 'I get clients but they\'re not aligned with my growth goals', points: 3 },
      { text: 'I need to systematize my sales process for growth', points: 4 }
    ]
  },
  {
    id: 'service-growing-2',
    question: 'How do you handle increased demand with your ADHD?',
    options: [
      { text: 'I panic and either burn out or let clients down', points: 1 },
      { text: 'I try to take on everything and quality suffers', points: 2 },
      { text: 'I\'m learning to manage capacity but it\'s inconsistent', points: 3 },
      { text: 'I have systems to manage demand and maintain quality', points: 4 }
    ]
  },
  {
    id: 'service-growing-3',
    question: 'What\'s your approach to pricing as you grow?',
    options: [
      { text: 'I\'m still undercharging because I don\'t feel worth more', points: 1 },
      { text: 'I want to raise prices but struggle with the confidence', points: 2 },
      { text: 'I\'ve raised prices some but not to where they should be', points: 3 },
      { text: 'I price based on value and raise rates confidently', points: 4 }
    ]
  },
  {
    id: 'service-growing-4',
    question: 'How do you manage multiple client projects simultaneously?',
    options: [
      { text: 'It\'s chaos - I lose track and miss deadlines regularly', points: 1 },
      { text: 'I juggle projects but some clients always get neglected', points: 2 },
      { text: 'I have systems but they break down when I\'m overwhelmed', points: 3 },
      { text: 'I have reliable project management systems that scale', points: 4 }
    ]
  },
  {
    id: 'service-growing-5',
    question: 'What\'s your biggest struggle with saying no to work?',
    options: [
      { text: 'I take everything because I\'m scared money will dry up', points: 1 },
      { text: 'I know I should say no but the FOMO is too strong', points: 2 },
      { text: 'I sometimes say no but often cave when pressured', points: 3 },
      { text: 'I confidently decline work that doesn\'t fit my criteria', points: 4 }
    ]
  },
  {
    id: 'service-growing-6',
    question: 'How do you handle the need to start creating systems?',
    options: [
      { text: 'Systems feel overwhelming so I avoid them entirely', points: 1 },
      { text: 'I start creating systems but never finish or maintain them', points: 2 },
      { text: 'I have some systems but they\'re inconsistently used', points: 3 },
      { text: 'I systematically build and maintain ADHD-friendly systems', points: 4 }
    ]
  },
  {
    id: 'service-growing-7',
    question: 'What\'s your experience with building a team or getting help?',
    options: [
      { text: 'I think I need help but don\'t know where to start', points: 1 },
      { text: 'I\'ve tried hiring but it didn\'t work out', points: 2 },
      { text: 'I have some help but struggle with delegation and training', points: 3 },
      { text: 'I effectively delegate and build my support team', points: 4 }
    ]
  },
  {
    id: 'service-growing-8',
    question: 'How do you maintain quality as demand increases?',
    options: [
      { text: 'Quality definitely suffers when I\'m busy', points: 1 },
      { text: 'I try to maintain quality but rush when overwhelmed', points: 2 },
      { text: 'I have quality standards but they\'re not systematized', points: 3 },
      { text: 'I have systems to maintain consistent quality at scale', points: 4 }
    ]
  },
  {
    id: 'service-growing-9',
    question: 'What\'s your approach to marketing and visibility now that you have some traction?',
    options: [
      { text: 'I\'m so busy with client work I\'ve stopped marketing entirely', points: 1 },
      { text: 'I market inconsistently when I remember or when things slow down', points: 2 },
      { text: 'I try to maintain marketing but it\'s not systematic', points: 3 },
      { text: 'I have consistent marketing systems that don\'t depend on my memory', points: 4 }
    ]
  },
  {
    id: 'service-growing-10',
    question: 'How do you handle financial planning and business metrics?',
    options: [
      { text: 'I don\'t track anything beyond what\'s in my bank account', points: 1 },
      { text: 'I track income but don\'t understand the bigger financial picture', points: 2 },
      { text: 'I track basics but don\'t use data to make decisions', points: 3 },
      { text: 'I track key metrics and use them to guide growth decisions', points: 4 }
    ]
  },
  {
    id: 'service-growing-11',
    question: 'What\'s your biggest challenge with time management at this level?',
    options: [
      { text: 'I work constantly but never feel caught up', points: 1 },
      { text: 'I alternate between being super productive and completely scattered', points: 2 },
      { text: 'I\'m productive but struggle to balance growth activities with client work', points: 3 },
      { text: 'I manage time effectively across all business activities', points: 4 }
    ]
  },
  {
    id: 'service-growing-12',
    question: 'How do you handle client expectations as your business grows?',
    options: [
      { text: 'Clients expect the same availability I had when starting out', points: 1 },
      { text: 'I struggle to set appropriate expectations for my new capacity', points: 2 },
      { text: 'I\'m learning to set boundaries but clients push back', points: 3 },
      { text: 'I set clear expectations and maintain professional boundaries', points: 4 }
    ]
  },
  {
    id: 'service-growing-13',
    question: 'What\'s your experience with cash flow management?',
    options: [
      { text: 'Cash flow is unpredictable and stresses me out constantly', points: 1 },
      { text: 'I have some good months and some scary ones', points: 2 },
      { text: 'Cash flow is generally positive but not predictable', points: 3 },
      { text: 'I have reliable systems for predicting and managing cash flow', points: 4 }
    ]
  },
  {
    id: 'service-growing-14',
    question: 'How do you handle the isolation of running a growing business?',
    options: [
      { text: 'I feel completely alone and don\'t know who to talk to about business challenges', points: 1 },
      { text: 'I talk to friends and family but they don\'t really understand', points: 2 },
      { text: 'I have some business connections but no close entrepreneurial relationships', points: 3 },
      { text: 'I have a strong network of fellow entrepreneurs who get it', points: 4 }
    ]
  },
  {
    id: 'service-growing-15',
    question: 'What\'s your approach to professional development at this stage?',
    options: [
      { text: 'I\'m too busy with client work to focus on learning', points: 1 },
      { text: 'I want to learn but don\'t know what skills to prioritize', points: 2 },
      { text: 'I learn sporadically when something interesting comes up', points: 3 },
      { text: 'I systematically develop skills that support business growth', points: 4 }
    ]
  },
  {
    id: 'service-growing-16',
    question: 'How do you maintain work-life balance as your business grows?',
    options: [
      { text: 'What balance? I work all the time and burn out regularly', points: 1 },
      { text: 'I try to maintain balance but client demands always take priority', points: 2 },
      { text: 'I have boundaries but they get fuzzy when business is busy', points: 3 },
      { text: 'I maintain clear boundaries between work and personal time', points: 4 }
    ]
  },
  {
    id: 'service-growing-17',
    question: 'What\'s your experience with standardizing your service delivery?',
    options: [
      { text: 'Every client gets completely customized work - no consistency', points: 1 },
      { text: 'I try to standardize but end up customizing everything anyway', points: 2 },
      { text: 'I have some standard processes but they\'re not well-documented', points: 3 },
      { text: 'I have standardized, documented processes that ensure consistency', points: 4 }
    ]
  },
  {
    id: 'service-growing-18',
    question: 'How do you handle the mental load of running a growing business?',
    options: [
      { text: 'I carry everything in my head and feel overwhelmed constantly', points: 1 },
      { text: 'I try to brain dump but my systems are chaotic', points: 2 },
      { text: 'I have some external systems but still carry too much mentally', points: 3 },
      { text: 'I have reliable external systems that hold information so my brain doesn\'t have to', points: 4 }
    ]
  },
  {
    id: 'service-growing-19',
    question: 'What\'s your approach to building recurring revenue?',
    options: [
      { text: 'Every month I start from zero - no recurring income', points: 1 },
      { text: 'I have some repeat clients but nothing guaranteed', points: 2 },
      { text: 'I\'m building some recurring elements but they\'re inconsistent', points: 3 },
      { text: 'I have strong recurring revenue that provides stability', points: 4 }
    ]
  },
  {
    id: 'service-growing-20',
    question: 'How do you envision the next phase of growth for your business?',
    options: [
      { text: 'I honestly don\'t know how to grow beyond where I am now', points: 1 },
      { text: 'I have ideas but no clear plan for systematic growth', points: 2 },
      { text: 'I have growth goals but need help with execution', points: 3 },
      { text: 'I have clear systems and plans for scaling to the next level', points: 4 }
    ]
  }
];

// Established stage questions (for businesses doing $5K-$10K/month)
const serviceEstablishedQuestions: QuizQuestion[] = [
  {
    id: 'service-established-1', 
    question: 'What\'s your biggest challenge with managing your established business?',
    options: [
      { text: 'I need to delegate client work but struggle with letting go', points: 2 },
      { text: 'I want to optimize but don\'t know how to systematize my expertise', points: 3 },
      { text: 'I have systems but they don\'t work with my ADHD brain', points: 3 },
      { text: 'I need help optimizing ADHD-friendly business systems', points: 4 }
    ]
  },
  {
    id: 'service-established-2',
    question: 'How do you handle delegation with your ADHD?',
    options: [
      { text: 'I can\'t delegate because no one does it exactly like I do', points: 1 },
      { text: 'I delegate but end up redoing most of the work anyway', points: 2 },
      { text: 'I delegate effectively sometimes but inconsistently', points: 3 },
      { text: 'I have clear systems for delegation that work consistently', points: 4 }
    ]
  },
  {
    id: 'service-established-3',
    question: 'What\'s your approach to premium pricing at this level?',
    options: [
      { text: 'I still struggle with pricing confidence despite my success', points: 1 },
      { text: 'I charge decent rates but probably not what I\'m worth', points: 2 },
      { text: 'I charge well but don\'t always communicate value effectively', points: 3 },
      { text: 'I confidently charge premium rates and clients see the value', points: 4 }
    ]
  },
  {
    id: 'service-established-4',
    question: 'How do you manage multiple revenue streams or service lines?',
    options: [
      { text: 'I have too many offerings and can\'t focus on optimizing any', points: 1 },
      { text: 'I offer several services but some are much more profitable than others', points: 2 },
      { text: 'I\'m working to streamline but struggle with saying no to opportunities', points: 3 },
      { text: 'I have strategic focus on my most profitable and scalable offerings', points: 4 }
    ]
  },
  {
    id: 'service-established-5',
    question: 'What\'s your experience with building and managing a team?',
    options: [
      { text: 'I have team members but managing people is exhausting', points: 1 },
      { text: 'I struggle with clear communication and expectations with my team', points: 2 },
      { text: 'I have a good team but managing them isn\'t systematic', points: 3 },
      { text: 'I effectively lead and manage my team with clear systems', points: 4 }
    ]
  },
  {
    id: 'service-established-6',
    question: 'How do you handle strategic planning and goal setting?',
    options: [
      { text: 'I\'m so busy in the business I never work on strategy', points: 1 },
      { text: 'I set goals but get distracted by urgent client needs', points: 2 },
      { text: 'I plan strategically but struggle with consistent execution', points: 3 },
      { text: 'I systematically plan and execute strategic initiatives', points: 4 }
    ]
  },
  {
    id: 'service-established-7',
    question: 'What\'s your approach to automating business processes?',
    options: [
      { text: 'I know I need automation but it feels overwhelming to implement', points: 1 },
      { text: 'I\'ve automated some things but many processes are still manual', points: 2 },
      { text: 'I have good automation but it\'s not integrated or strategic', points: 3 },
      { text: 'I systematically automate processes to maximize efficiency', points: 4 }
    ]
  },
  {
    id: 'service-established-8',
    question: 'How do you maintain quality control across your established business?',
    options: [
      { text: 'Quality varies depending on who does the work and when', points: 1 },
      { text: 'I have quality standards but they\'re not consistently applied', points: 2 },
      { text: 'Most work meets standards but I still need to check everything', points: 3 },
      { text: 'I have systematic quality control that doesn\'t require my constant oversight', points: 4 }
    ]
  },
  {
    id: 'service-established-9',
    question: 'What\'s your experience with marketing at this established level?',
    options: [
      { text: 'I rely mostly on referrals and don\'t do systematic marketing', points: 1 },
      { text: 'I market sporadically but don\'t measure what\'s working', points: 2 },
      { text: 'I have marketing activities but they\'re not strategically coordinated', points: 3 },
      { text: 'I have a comprehensive marketing strategy that generates consistent leads', points: 4 }
    ]
  },
  {
    id: 'service-established-10',
    question: 'How do you handle financial management and business metrics?',
    options: [
      { text: 'I track revenue but don\'t understand profitability by service or client', points: 1 },
      { text: 'I know my numbers but don\'t use them to make strategic decisions', points: 2 },
      { text: 'I track key metrics but analysis and action planning is inconsistent', points: 3 },
      { text: 'I systematically track, analyze, and act on financial and business metrics', points: 4 }
    ]
  },
  {
    id: 'service-established-11',
    question: 'What\'s your approach to work-life integration at this level?',
    options: [
      { text: 'I work constantly because the business demands it', points: 1 },
      { text: 'I try to maintain boundaries but client emergencies override them', points: 2 },
      { text: 'I have good boundaries most of the time but they slip during busy periods', points: 3 },
      { text: 'I maintain clear boundaries and the business runs without constant involvement', points: 4 }
    ]
  },
  {
    id: 'service-established-12',
    question: 'How do you handle client relationships at this established level?',
    options: [
      { text: 'I still do all client relationship management myself', points: 1 },
      { text: 'I\'ve delegated some client communication but handle all the important stuff', points: 2 },
      { text: 'My team handles routine communication but I manage strategic relationships', points: 3 },
      { text: 'I have systematic client relationship management that doesn\'t require my constant involvement', points: 4 }
    ]
  },
  {
    id: 'service-established-13',
    question: 'What\'s your experience with building business partnerships?',
    options: [
      { text: 'I work mostly independently and don\'t have strategic partners', points: 1 },
      { text: 'I have some referral relationships but nothing formal', points: 2 },
      { text: 'I have partnerships but they\'re not strategically developed', points: 3 },
      { text: 'I systematically build and manage strategic partnerships', points: 4 }
    ]
  },
  {
    id: 'service-established-14',
    question: 'How do you approach professional development and staying current?',
    options: [
      { text: 'I\'m too busy to focus on learning new skills', points: 1 },
      { text: 'I learn when something interesting comes up but it\'s not systematic', points: 2 },
      { text: 'I invest in development but don\'t always apply what I learn', points: 3 },
      { text: 'I systematically develop skills that support business objectives', points: 4 }
    ]
  },
  {
    id: 'service-established-15',
    question: 'What\'s your approach to innovation and service development?',
    options: [
      { text: 'I offer the same services I\'ve always offered', points: 1 },
      { text: 'I add new services based on client requests but without strategy', points: 2 },
      { text: 'I develop new offerings but don\'t always test them systematically', points: 3 },
      { text: 'I strategically innovate and test new services based on market needs', points: 4 }
    ]
  },
  {
    id: 'service-established-16',
    question: 'How do you handle competitive differentiation?',
    options: [
      { text: 'I compete mostly on price because I don\'t know how else to differentiate', points: 1 },
      { text: 'I know I\'m different but struggle to articulate why clients should choose me', points: 2 },
      { text: 'I have clear differentiators but don\'t consistently communicate them', points: 3 },
      { text: 'I have strong differentiation that\'s clearly communicated and consistently delivered', points: 4 }
    ]
  },
  {
    id: 'service-established-17',
    question: 'What\'s your experience with scaling operations?',
    options: [
      { text: 'I\'m still involved in every aspect of service delivery', points: 1 },
      { text: 'I\'ve systematized some operations but many still require my direct involvement', points: 2 },
      { text: 'Most operations run independently but I\'m still the bottleneck for growth', points: 3 },
      { text: 'I have scalable operations that can grow without my constant involvement', points: 4 }
    ]
  },
  {
    id: 'service-established-18',
    question: 'How do you manage the mental and emotional demands of business ownership?',
    options: [
      { text: 'The pressure is constant and I feel overwhelmed regularly', points: 1 },
      { text: 'I have good days and bad days but the stress affects my health', points: 2 },
      { text: 'I manage stress reasonably well but don\'t have systematic support', points: 3 },
      { text: 'I have strong systems and support for managing the mental demands of leadership', points: 4 }
    ]
  },
  {
    id: 'service-established-19',
    question: 'What\'s your approach to exit planning or business value creation?',
    options: [
      { text: 'I haven\'t thought about this at all - the business is too dependent on me', points: 1 },
      { text: 'I know I should think about business value but don\'t know where to start', points: 2 },
      { text: 'I\'m building some business value but it\'s not systematic', points: 3 },
      { text: 'I systematically build business value and have clear long-term plans', points: 4 }
    ]
  },
  {
    id: 'service-established-20',
    question: 'How do you envision the next phase of your business evolution?',
    options: [
      { text: 'I want to grow but I\'m not sure how without burning out', points: 1 },
      { text: 'I have growth aspirations but need clarity on the path forward', points: 2 },
      { text: 'I have growth plans but need help with systematic execution', points: 3 },
      { text: 'I have clear vision and systematic plans for scaling to the next level', points: 4 }
    ]
  }
];

// Scaling stage questions (for businesses doing $10K+/month)
const serviceScalingQuestions: QuizQuestion[] = [
  {
    id: 'service-scaling-1',
    question: 'What\'s your biggest challenge with scaling to the next level?',
    options: [
      { text: 'I need advanced systems for delegation and team management', points: 3 },
      { text: 'I want to scale but need ADHD-friendly leadership strategies', points: 4 },
      { text: 'I have the revenue but need help building scalable operations', points: 4 },
      { text: 'I need expert guidance for sustainable high-level growth', points: 4 }
    ]
  },
  {
    id: 'service-scaling-2',
    question: 'How do you handle advanced team leadership with your ADHD?',
    options: [
      { text: 'I struggle with consistent leadership and team members are confused about priorities', points: 1 },
      { text: 'I lead well when focused but my ADHD creates inconsistent management', points: 2 },
      { text: 'I\'m a good leader but need systems to manage my ADHD leadership challenges', points: 3 },
      { text: 'I have ADHD-friendly leadership systems that enable consistent, effective management', points: 4 }
    ]
  },
  {
    id: 'service-scaling-3',
    question: 'What\'s your approach to strategic partnerships and joint ventures?',
    options: [
      { text: 'I avoid partnerships because they seem too complicated to manage', points: 1 },
      { text: 'I\'ve tried partnerships but they didn\'t work out well', points: 2 },
      { text: 'I have some partnerships but they\'re not strategically developed', points: 3 },
      { text: 'I systematically develop and manage strategic partnerships for growth', points: 4 }
    ]
  },
  {
    id: 'service-scaling-4',
    question: 'How do you manage multiple business units or significant diversification?',
    options: [
      { text: 'I have too many initiatives and can\'t focus on scaling any effectively', points: 1 },
      { text: 'I manage multiple areas but some are much more successful than others', points: 2 },
      { text: 'I focus on key areas but struggle with systematic expansion', points: 3 },
      { text: 'I systematically scale focused business units with clear success metrics', points: 4 }
    ]
  },
  {
    id: 'service-scaling-5',
    question: 'What\'s your experience with raising capital or significant investment?',
    options: [
      { text: 'I\'ve never considered external funding and don\'t know if I need it', points: 1 },
      { text: 'I think I might need funding but don\'t know how to approach it', points: 2 },
      { text: 'I\'m exploring funding options but need guidance on the best approach', points: 3 },
      { text: 'I strategically use funding and investment to accelerate growth', points: 4 }
    ]
  },
  {
    id: 'service-scaling-6',
    question: 'How do you handle advanced business analytics and data-driven decisions?',
    options: [
      { text: 'I rely mostly on intuition rather than systematic data analysis', points: 1 },
      { text: 'I track metrics but don\'t use advanced analytics for strategic decisions', points: 2 },
      { text: 'I have good data but need help with advanced analysis and interpretation', points: 3 },
      { text: 'I use sophisticated analytics to drive strategic decisions and optimize performance', points: 4 }
    ]
  },
  {
    id: 'service-scaling-7',
    question: 'What\'s your approach to building scalable technology and systems?',
    options: [
      { text: 'My systems are cobbled together and becoming a barrier to growth', points: 1 },
      { text: 'I have decent systems but they\'re not integrated or optimized for scale', points: 2 },
      { text: 'I have good systems but need help optimizing them for significant growth', points: 3 },
      { text: 'I have enterprise-level systems that can support significant scaling', points: 4 }
    ]
  },
  {
    id: 'service-scaling-8',
    question: 'How do you manage organizational culture and values at scale?',
    options: [
      { text: 'Culture is whatever happens naturally - I don\'t actively manage it', points: 1 },
      { text: 'I try to maintain culture but it\'s getting harder as we grow', points: 2 },
      { text: 'I work on culture but don\'t have systematic approaches', points: 3 },
      { text: 'I systematically build and maintain culture through all growth phases', points: 4 }
    ]
  },
  {
    id: 'service-scaling-9',
    question: 'What\'s your experience with mergers, acquisitions, or significant partnerships?',
    options: [
      { text: 'I\'ve never considered M&A and don\'t know if it would benefit my business', points: 1 },
      { text: 'I\'m curious about M&A but don\'t know how to evaluate opportunities', points: 2 },
      { text: 'I\'m actively exploring M&A but need expert guidance on execution', points: 3 },
      { text: 'I strategically use M&A as a tool for accelerating growth and market expansion', points: 4 }
    ]
  },
  {
    id: 'service-scaling-10',
    question: 'How do you handle advanced financial management and optimization?',
    options: [
      { text: 'I track the basics but don\'t do sophisticated financial analysis', points: 1 },
      { text: 'I have financial reports but don\'t use them for advanced strategic planning', points: 2 },
      { text: 'I do financial analysis but need help with optimization and advanced planning', points: 3 },
      { text: 'I use sophisticated financial analysis and optimization for strategic advantage', points: 4 }
    ]
  },
  {
    id: 'service-scaling-11',
    question: 'What\'s your approach to market expansion and geographic scaling?',
    options: [
      { text: 'I serve whoever finds me but don\'t actively expand to new markets', points: 1 },
      { text: 'I want to expand markets but don\'t know how to do it systematically', points: 2 },
      { text: 'I\'m expanding but need help with systematic market entry strategies', points: 3 },
      { text: 'I systematically research, enter, and optimize new markets for growth', points: 4 }
    ]
  },
  {
    id: 'service-scaling-12',
    question: 'How do you manage your role transition from operator to CEO?',
    options: [
      { text: 'I\'m still heavily involved in operations and struggle to step back', points: 1 },
      { text: 'I try to focus on strategy but get pulled back into operations regularly', points: 2 },
      { text: 'I mostly focus on CEO activities but sometimes revert to operational work', points: 3 },
      { text: 'I systematically operate as a CEO with clear boundaries around operational involvement', points: 4 }
    ]
  },
  {
    id: 'service-scaling-13',
    question: 'What\'s your experience with board management or investor relations?',
    options: [
      { text: 'I don\'t have a board or investors and haven\'t considered if I need them', points: 1 },
      { text: 'I have advisors but no formal board structure or investor relationships', points: 2 },
      { text: 'I have board members or investors but managing these relationships is challenging', points: 3 },
      { text: 'I effectively manage board and investor relationships to accelerate growth', points: 4 }
    ]
  },
  {
    id: 'service-scaling-14',
    question: 'How do you handle advanced competitive strategy and market positioning?',
    options: [
      { text: 'I focus on my business and don\'t spend much time on competitive analysis', points: 1 },
      { text: 'I track competitors but don\'t use that information strategically', points: 2 },
      { text: 'I do competitive analysis but need help with advanced strategic positioning', points: 3 },
      { text: 'I use sophisticated competitive intelligence to maintain strategic advantage', points: 4 }
    ]
  },
  {
    id: 'service-scaling-15',
    question: 'What\'s your approach to innovation and R&D at this scale?',
    options: [
      { text: 'Innovation happens accidentally - I don\'t have systematic R&D', points: 1 },
      { text: 'I try new things but don\'t have dedicated innovation processes', points: 2 },
      { text: 'I invest in innovation but need help making it more systematic and strategic', points: 3 },
      { text: 'I have sophisticated innovation and R&D processes that drive competitive advantage', points: 4 }
    ]
  },
  {
    id: 'service-scaling-16',
    question: 'How do you manage regulatory compliance and risk at this level?',
    options: [
      { text: 'I handle compliance as needed but don\'t have systematic risk management', points: 1 },
      { text: 'I track major compliance issues but don\'t have comprehensive risk strategies', points: 2 },
      { text: 'I have good compliance but need help with advanced risk management', points: 3 },
      { text: 'I have comprehensive compliance and risk management systems', points: 4 }
    ]
  },
  {
    id: 'service-scaling-17',
    question: 'What\'s your experience with building multiple revenue streams or business models?',
    options: [
      { text: 'I have one main revenue stream and haven\'t diversified systematically', points: 1 },
      { text: 'I have multiple revenue streams but they\'re not strategically developed', points: 2 },
      { text: 'I\'m building diversified revenue but need help optimizing the portfolio', points: 3 },
      { text: 'I systematically build and optimize multiple revenue streams for stability and growth', points: 4 }
    ]
  },
  {
    id: 'service-scaling-18',
    question: 'How do you handle succession planning and business continuity?',
    options: [
      { text: 'The business is still too dependent on me to have succession plans', points: 1 },
      { text: 'I have key people but no formal succession or continuity plans', points: 2 },
      { text: 'I\'m building succession capabilities but need help systematizing the process', points: 3 },
      { text: 'I have comprehensive succession and continuity plans that reduce key person risk', points: 4 }
    ]
  },
  {
    id: 'service-scaling-19',
    question: 'What\'s your approach to thought leadership and industry influence?',
    options: [
      { text: 'I focus on my business and don\'t actively build thought leadership', points: 1 },
      { text: 'I occasionally speak or write but don\'t have a systematic thought leadership strategy', points: 2 },
      { text: 'I\'m building thought leadership but need help making it more strategic and impactful', points: 3 },
      { text: 'I systematically build thought leadership that drives business growth and industry influence', points: 4 }
    ]
  },
  {
    id: 'service-scaling-20',
    question: 'How do you envision your long-term exit strategy or legacy building?',
    options: [
      { text: 'I haven\'t thought about exit strategy - I\'m focused on current growth', points: 1 },
      { text: 'I have general ideas about exit but no specific strategy or timeline', points: 2 },
      { text: 'I\'m actively planning exit strategy but need expert guidance on execution', points: 3 },
      { text: 'I have sophisticated exit strategy and legacy planning that guides current decisions', points: 4 }
    ]
  }
];

export function getQuestionsForPath(businessType: BusinessType, growthStage: GrowthStage): QuizQuestion[] {
  // Return stage-specific question sets
  switch (growthStage) {
    case 'startup':
      return serviceStartupQuestions;
    case 'growing':
      return serviceGrowingQuestions;
    case 'established':
      return serviceEstablishedQuestions;
    case 'scaling':
      return serviceScalingQuestions;
    default:
      return serviceStartupQuestions;
  }
}

export { serviceStartupQuestions };