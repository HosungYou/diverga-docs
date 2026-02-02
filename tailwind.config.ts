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
        // Memory System Colors (T-Score based gradient)
        memory: {
          project: "#FF6B6B",    // tscore-modal family
          session: "#FFB347",    // tscore-typical family
          decision: "#FFE66D",   // tscore-balanced family
          research: "#4ECDC4",   // tscore-creative family
          tool: "#95E1D3",       // tscore-divergent family
        },
        // Feature Colors
        feature: {
          memory: "#9b59b6",
          vs: "#22ccff",
          checkpoint: "#ff3366",
          prisma: "#44ffaa",
          humanize: "#ff8844",
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
        // Memory System animations
        'memory-flow': 'memoryFlow 2s ease-in-out infinite',
        'memory-pulse': 'memoryPulse 1.5s ease-in-out infinite',
        'data-stream': 'dataStream 1.5s linear infinite',
        // Feature-specific animations
        'checkpoint-blink': 'checkpointBlink 2s ease-in-out infinite',
        'tscore-shift': 'tscoreShift 4s ease-in-out infinite',
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
        // Memory System keyframes
        memoryFlow: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        memoryPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(155, 89, 182, 0.4)' },
          '50%': { boxShadow: '0 0 20px 10px rgba(155, 89, 182, 0.2)' },
        },
        dataStream: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        // Checkpoint animation
        checkpointBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        // T-Score spectrum animation
        tscoreShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
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
        // Feature-specific glows
        'glow-memory': '0 0 30px rgba(155, 89, 182, 0.3)',
        'glow-vs': '0 0 30px rgba(34, 204, 255, 0.3)',
        'glow-checkpoint': '0 0 30px rgba(255, 51, 102, 0.3)',
        'glow-prisma': '0 0 30px rgba(68, 255, 170, 0.3)',
        'glow-humanize': '0 0 30px rgba(255, 136, 68, 0.3)',
      },
      backgroundImage: {
        'tscore-gradient': 'linear-gradient(90deg, #22ccff 0%, #44ffaa 25%, #ffcc22 50%, #ff8844 75%, #ff3366 100%)',
        'void-radial': 'radial-gradient(ellipse at center, #12121a 0%, #050508 70%)',
        // Memory gradient
        'memory-gradient': 'linear-gradient(90deg, #FF6B6B 0%, #FFB347 25%, #FFE66D 50%, #4ECDC4 75%, #95E1D3 100%)',
        // Feature gradients
        'feature-memory': 'linear-gradient(135deg, #9b59b6 0%, #a855f7 100%)',
        'feature-vs': 'linear-gradient(135deg, #22ccff 0%, #06b6d4 100%)',
        'feature-checkpoint': 'linear-gradient(135deg, #ff3366 0%, #f43f5e 100%)',
        'feature-prisma': 'linear-gradient(135deg, #44ffaa 0%, #10b981 100%)',
        'feature-humanize': 'linear-gradient(135deg, #ff8844 0%, #f97316 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
