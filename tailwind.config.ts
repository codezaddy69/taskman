import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // TaskMan colors
        primary: {
          DEFAULT: '#8B5CF6',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#6366F1',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#10B981',
          foreground: '#FFFFFF',
        },
        // Stat colors
        mind: {
          DEFAULT: '#8B5CF6',
          foreground: '#FFFFFF',
        },
        health: {
          DEFAULT: '#10B981',
          foreground: '#FFFFFF',
        },
        spirit: {
          DEFAULT: '#F59E0B',
          foreground: '#FFFFFF',
        },
        career: {
          DEFAULT: '#6366F1',
          foreground: '#FFFFFF',
        },
        home: {
          DEFAULT: '#EC4899',
          foreground: '#FFFFFF',
        },
        // Priority colors
        priority: {
          1: '#EF4444',
          2: '#F97316',
          3: '#F59E0B',
          4: '#3B82F6',
          5: '#6B7280',
        },
        // Energy colors
        energy: {
          low: '#10B981',
          medium: '#F59E0B',
          high: '#EF4444',
        },
        // Background colors
        background: {
          DEFAULT: '#0A0A0A',
          foreground: '#E5E7EB',
          card: '#1A1A1A',
          cardHover: '#242424',
          border: '#2A2A2A',
          input: '#2A2A2A',
        },
        // Status colors
        status: {
          notStarted: '#6B7280',
          inProgress: '#3B82F6',
          blocked: '#EF4444',
          done: '#10B981',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter-sans)', 'var(--font-inter-mono)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'system-ui', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
