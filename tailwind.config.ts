import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Diverga Primary: Intellectual Indigo
        diverga: {
          50: "oklch(0.97 0.02 270)",
          100: "oklch(0.93 0.04 270)",
          200: "oklch(0.85 0.06 270)",
          300: "oklch(0.75 0.08 270)",
          400: "oklch(0.55 0.12 270)",
          500: "oklch(0.45 0.14 270)",
          600: "oklch(0.35 0.16 270)",
          700: "oklch(0.28 0.14 270)",
          800: "oklch(0.22 0.12 270)",
          900: "oklch(0.18 0.10 270)",
          950: "oklch(0.12 0.08 270)",
        },
        // Exploration Teal
        teal: {
          50: "oklch(0.97 0.02 175)",
          100: "oklch(0.93 0.04 175)",
          200: "oklch(0.85 0.06 175)",
          300: "oklch(0.75 0.08 175)",
          400: "oklch(0.65 0.10 175)",
          500: "oklch(0.55 0.12 175)",
          600: "oklch(0.45 0.14 175)",
          700: "oklch(0.38 0.12 175)",
          800: "oklch(0.30 0.10 175)",
          900: "oklch(0.22 0.08 175)",
        },
        // Insight Gold
        gold: {
          50: "oklch(0.97 0.02 85)",
          100: "oklch(0.93 0.04 85)",
          200: "oklch(0.88 0.08 85)",
          300: "oklch(0.82 0.10 85)",
          400: "oklch(0.75 0.12 85)",
          500: "oklch(0.68 0.14 85)",
          600: "oklch(0.58 0.14 85)",
          700: "oklch(0.48 0.12 85)",
        },
        // Category Colors
        category: {
          a: "oklch(0.55 0.15 270)", // Foundation - Indigo
          b: "oklch(0.55 0.15 295)", // Evidence - Violet
          c: "oklch(0.55 0.15 175)", // Design - Teal
          d: "oklch(0.55 0.15 55)",  // Data - Amber
          e: "oklch(0.55 0.15 25)",  // Analysis - Red
          f: "oklch(0.55 0.15 200)", // Quality - Cyan
          g: "oklch(0.55 0.15 330)", // Publication - Magenta
          h: "oklch(0.55 0.15 125)", // Specialized - Green
        },
        // T-Score Visual Encoding
        tscore: {
          modal: "oklch(0.55 0.18 25)",       // T>0.7: Warning red
          established: "oklch(0.55 0.12 240)", // T 0.4-0.7: Safe blue
          emerging: "oklch(0.55 0.15 145)",    // T 0.2-0.4: Innovative green
          experimental: "oklch(0.55 0.15 295)",// T<0.2: Bold purple
        },
        // VS Level Badges
        vs: {
          full: "oklch(0.55 0.15 145)",     // Green - Full VS Process
          enhanced: "oklch(0.55 0.12 200)", // Cyan - Enhanced
          light: "oklch(0.65 0.03 75)",     // Neutral - Light
        },
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 6vw, 4.5rem)',
        'h1': 'clamp(2rem, 4vw, 3rem)',
        'h2': 'clamp(1.5rem, 3vw, 2rem)',
        'h3': 'clamp(1.25rem, 2vw, 1.5rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-subtle': 'pulseSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
