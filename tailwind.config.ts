import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Diverga Primary: Intellectual Indigo (kept as brand accent)
        diverga: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        // Exploration Teal (kept as accent)
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        // Insight Gold (kept as accent)
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        // Aurora Palette (pastel gradients)
        aurora: {
          purple: "#c4b5fd",
          pink: "#f9a8d4",
          blue: "#93c5fd",
          teal: "#99f6e4",
        },
        // Category Colors (kept for agents)
        category: {
          a: "#6366f1", // Foundation - Indigo
          b: "#8b5cf6", // Evidence - Violet
          c: "#14b8a6", // Design - Teal
          d: "#f59e0b", // Data - Amber
          e: "#ef4444", // Analysis - Red
          f: "#06b6d4", // Quality - Cyan
          g: "#ec4899", // Publication - Magenta
          h: "#22c55e", // Specialized - Green
        },
        // Checkpoint Colors (kept for status)
        checkpoint: {
          red: "#ef4444",
          amber: "#f59e0b",
          yellow: "#eab308",
          green: "#22c55e",
        },
        // T-Score Visual Encoding (kept)
        tscore: {
          modal: "#ef4444",
          established: "#3b82f6",
          emerging: "#22c55e",
          experimental: "#8b5cf6",
        },
        // VS Level Badges (kept)
        vs: {
          full: "#22c55e",
          enhanced: "#06b6d4",
          light: "#9ca3af",
        },
        // Reform Light Theme
        reform: {
          bg: "#ffffff",
          "bg-subtle": "#fafafa",
          "bg-muted": "#f5f5f5",
          foreground: "#111111",
          "foreground-muted": "#6b7280",
          border: "#e5e7eb",
          "border-light": "#f3f4f6",
        },
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'Inter', 'var(--font-pretendard)', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'var(--font-pretendard)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(2.5rem, 6vw, 4.5rem)',
        'h1': 'clamp(2rem, 4vw, 3rem)',
        'h2': 'clamp(1.5rem, 3vw, 2rem)',
        'h3': 'clamp(1.25rem, 2vw, 1.5rem)',
      },
      letterSpacing: {
        'tighter-hero': '-0.04em',
        'tight-heading': '-0.02em',
        'tight-body': '-0.01em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
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
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      borderRadius: {
        'reform': '12px',
        'reform-sm': '8px',
        'reform-lg': '16px',
        'reform-xl': '24px',
      },
      boxShadow: {
        'reform-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'reform': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'reform-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'reform-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'reform-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'reform-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'reform-card': '0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04)',
        'reform-card-hover': '0 4px 12px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        // Aurora gradient for hero sections
        'aurora': 'linear-gradient(135deg, rgba(196, 181, 253, 0.4) 0%, rgba(249, 168, 212, 0.3) 25%, rgba(147, 197, 253, 0.4) 50%, rgba(153, 246, 228, 0.3) 75%, rgba(255, 255, 255, 1) 100%)',
        'aurora-subtle': 'linear-gradient(135deg, rgba(196, 181, 253, 0.2) 0%, rgba(249, 168, 212, 0.15) 25%, rgba(147, 197, 253, 0.2) 50%, rgba(153, 246, 228, 0.15) 75%, rgba(255, 255, 255, 1) 100%)',
        'aurora-radial': 'radial-gradient(ellipse at top, rgba(196, 181, 253, 0.3) 0%, rgba(147, 197, 253, 0.2) 40%, rgba(255, 255, 255, 1) 70%)',
        // Accent gradients
        'gradient-diverga': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        'gradient-teal': 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
