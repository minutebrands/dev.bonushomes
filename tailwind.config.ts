import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F3A',
        secondary: '#193C80',
        brand: {
          50:  '#eff8ff',
          100: '#dbeffe',
          200: '#b0dcfd',
          300: '#6cc0fc',
          400: '#37a6f8',
          500: '#1285f3',
          600: '#0b69d4',
          700: '#0a54ab',
          800: '#0d478d',
          900: '#113c74',
          950: '#0c264d',
        },
        accent: {
          DEFAULT: '#FF6200',
          light:   '#ff8533',
          dark:    '#cc4e00',
        },
        slate: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight:   '-0.02em',
      },
      backgroundImage: {
        'gradient-brand':   'linear-gradient(135deg, #1285f3 0%, #0a54ab 100%)',
        'gradient-dark':    'linear-gradient(135deg, #0B1F3A 0%, #193C80 100%)',
        'gradient-navy':    'linear-gradient(135deg, #0B1F3A 0%, #193C80 50%, #0a54ab 100%)',
      },
    },
  },
  plugins: [],
}

export default config
