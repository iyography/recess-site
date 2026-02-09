import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'resonant-red': '#8B2332',
        'soft-blue': '#9EB1C7',
        'quiet-ivory': '#FAF6E3',
        'refined-gold': '#D4A853',
        'archive-white': '#FEFEFE',
        'grounded-black': '#0A0A0A',
        'camel': '#B8865B',
      },
      fontFamily: {
        'script': ['var(--font-parisienne)', 'cursive'],
        'serif': ['var(--font-cormorant)', 'Georgia', 'serif'],
        'display': ['var(--font-space-grotesk)', 'sans-serif'],
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config