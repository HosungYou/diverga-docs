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
        // Brevian Palette
        brevian: {
          // Dark backgrounds
          'dark-start': '#0f1c3e',
          'dark-end': '#050915',
          'dark-mid': '#0a1228',
          // Accent colors
          'accent': '#FA5D29',
          'accent-light': '#FF8A5B',
          'accent-dark': '#D94A1A',
          'purple': '#502bd8',
          'purple-light': '#7B5AE8',
          'green': '#AAEEC4',
          'green-dark': '#6BCF8E',
          'blue': '#49B3FC',
          'blue-light': '#7FCAFF',
          // Card backgrounds (light mode)
          'card-1': '#cbd4e4',
          'card-2': '#aeb9d4',
          'card-3': '#d1d8de',
          'card-4': '#e8ebf0',
          // Dark mode cards
          'card-dark-1': '#1a2744',
          'card-dark-2': '#152038',
          'card-dark-3': '#0f1728',
        },
      },
      fontFamily: {
        sans: ['Inter', 'var(--font-pretendard)', 'system-ui', 'sans-serif'],
        display: ['Inter', 'var(--font-pretendard)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 6vw, 4.5rem)',
        'h1': 'clamp(2rem, 4vw, 3rem)',
        'h2': 'clamp(1.5rem, 3vw, 2rem)',
        'h3': 'clamp(1.25rem, 2vw, 1.5rem)',
      },
      letterSpacing: {
        'tighter-hero': '-0.05em',
        'tight-heading': '-0.03em',
        'tight-body': '-0.015em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-subtle': 'pulseSubtle 2s infinite',
        // Brevian animations
        'glow': 'glow 3s ease-in-out infinite',
        'glow-fast': 'glow 1.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
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
        // Brevian keyframes
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        // Brevian radii
        'brevian': '20px',
        'brevian-sm': '12px',
        'brevian-lg': '24px',
        'brevian-xl': '32px',
      },
      boxShadow: {
        // Brevian layered shadows
        'brevian-card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 40px 26px rgba(0, 0, 0, 0.05)',
        'brevian-card-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 60px 40px rgba(0, 0, 0, 0.07)',
        'brevian-card-hover': '0 8px 12px -2px rgba(0, 0, 0, 0.15), 0 25px 30px -5px rgba(0, 0, 0, 0.12), 0 50px 35px rgba(0, 0, 0, 0.08)',
        'brevian-glow-orange': '0 0 40px rgba(250, 93, 41, 0.3), 0 0 80px rgba(250, 93, 41, 0.15)',
        'brevian-glow-purple': '0 0 40px rgba(80, 43, 216, 0.3), 0 0 80px rgba(80, 43, 216, 0.15)',
        'brevian-glow-blue': '0 0 40px rgba(73, 179, 252, 0.3), 0 0 80px rgba(73, 179, 252, 0.15)',
        'brevian-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'brevian-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 40px 26px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        // Brevian gradients
        'brevian-hero': 'radial-gradient(100% 100% at 50% 0, #0f1c3e 0%, #050915 100%)',
        'brevian-hero-alt': 'radial-gradient(ellipse at top, #0f1c3e 0%, #050915 100%)',
        'brevian-glow-orange': 'radial-gradient(ellipse at center, rgba(250, 93, 41, 0.3), transparent 70%)',
        'brevian-glow-purple': 'radial-gradient(ellipse at center, rgba(80, 43, 216, 0.3), transparent 70%)',
        'brevian-glow-blue': 'radial-gradient(ellipse at center, rgba(73, 179, 252, 0.25), transparent 70%)',
        'brevian-glow-green': 'radial-gradient(ellipse at center, rgba(170, 238, 196, 0.2), transparent 70%)',
        'brevian-card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'brevian-shimmer': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
        'brevian-mesh': 'radial-gradient(at 40% 20%, rgba(80, 43, 216, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(250, 93, 41, 0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(73, 179, 252, 0.1) 0px, transparent 50%)',
      },
      backdropBlur: {
        'brevian': '20px',
      },
    },
  },
  plugins: [],
} satisfies Config;
