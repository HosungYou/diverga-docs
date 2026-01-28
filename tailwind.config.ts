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
        // Void Core - Deep Space Background
        void: {
          absolute: "#000000",
          deep: "#050508",
          surface: "#0a0a0f",
          elevated: "#12121a",
          hover: "#1a1a24",
        },
        // Stellar Accents - Light on Dark
        stellar: {
          core: "#ffffff",
          bright: "#f0f0f5",
          dim: "#8888aa",
          faint: "#44445a",
          muted: "#2a2a3a",
        },
        // T-Score Spectrum (Modal → Divergent)
        tscore: {
          modal: "#ff3366",
          typical: "#ff8844",
          balanced: "#ffcc22",
          creative: "#44ffaa",
          divergent: "#22ccff",
        },
        // Category Colors (Agents A-H)
        category: {
          a: "#ff6b6b",
          b: "#ffd93d",
          c: "#6bcb77",
          d: "#4d96ff",
          e: "#9b59b6",
          f: "#e17055",
          g: "#00cec9",
          h: "#fd79a8",
        },
        // Checkpoint Status
        checkpoint: {
          required: "#ff3366",
          recommended: "#ff8844",
          optional: "#ffcc22",
          complete: "#44ffaa",
        },
        // Tier Badges
        tier: {
          opus: "#9b59b6",
          sonnet: "#4d96ff",
          haiku: "#8888aa",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'var(--font-pretendard)', 'system-ui', 'sans-serif'],
        display: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'heading-1': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-2': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-3': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'micro': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      letterSpacing: {
        'widest': '0.1em',
        'wider': '0.05em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        cursorBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      borderRadius: {
        'none': '0px',
        'sm': '2px',
        'DEFAULT': '0px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(68, 255, 170, 0.1)',
        'glow': '0 0 20px rgba(68, 255, 170, 0.15)',
        'glow-lg': '0 0 40px rgba(68, 255, 170, 0.2)',
        'glow-xl': '0 0 60px rgba(68, 255, 170, 0.25)',
      },
      backgroundImage: {
        'tscore-gradient': 'linear-gradient(90deg, #22ccff 0%, #44ffaa 25%, #ffcc22 50%, #ff8844 75%, #ff3366 100%)',
        'void-radial': 'radial-gradient(ellipse at center, #12121a 0%, #050508 70%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
