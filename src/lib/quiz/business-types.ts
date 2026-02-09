import { BusinessTypeConfig } from './types';

export const businessTypes: BusinessTypeConfig[] = [
  {
    id: 'service',
    name: 'Service Business',
    emoji: '🛠️',
    description: 'You provide services like consulting, coaching, design, marketing, or other professional services.',
    examples: ['Marketing agency', 'Web design', 'Business coaching', 'Consulting', 'Freelance services']
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    emoji: '🛒',
    description: 'You sell physical or digital products online through your own store or marketplaces.',
    examples: ['Online store', 'Amazon FBA', 'Dropshipping', 'Digital products', 'Print-on-demand']
  },
  {
    id: 'saas',
    name: 'SaaS/Tech',
    emoji: '💻',
    description: 'You build and sell software, apps, or technology solutions as a service.',
    examples: ['SaaS platform', 'Mobile app', 'Software tool', 'API service', 'Tech startup']
  },
  {
    id: 'consulting',
    name: 'Expert/Creator',
    emoji: '🎯',
    description: 'You monetize your expertise through courses, content, speaking, or knowledge-based offerings.',
    examples: ['Online courses', 'Content creator', 'Speaker', 'Author', 'Expert consultant']
  }
];