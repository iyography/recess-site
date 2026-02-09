export type BusinessType = 'service' | 'ecommerce' | 'saas' | 'consulting';

export type GrowthStage = 'startup' | 'growing' | 'scaling';

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  points: number;
  tags?: string[];
}

export interface BusinessTypeConfig {
  id: BusinessType;
  name: string;
  emoji: string;
  description: string;
  examples: string[];
}

export interface GrowthStageConfig {
  id: GrowthStage;
  name: string;
  emoji: string;
  description: string;
  revenue: string;
}

export interface QuizState {
  businessType?: BusinessType;
  growthStage?: GrowthStage;
  currentQuestion: number;
  answers: Record<string, any>;
  completed: boolean;
}