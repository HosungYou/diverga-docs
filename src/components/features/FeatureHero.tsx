'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface FeatureHeroProps {
  title: { en: string; ko: string };
  subtitle?: { en: string; ko: string };
  description: { en: string; ko: string };
  ctaText?: { en: string; ko: string };
  ctaHref?: string;
  locale: string;
  accentColor?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export function FeatureHero({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  locale,
  accentColor = '#44ffaa', // Default to tscore-creative
}: FeatureHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      particles = [];
      const rect = canvas.getBoundingClientRect();
      const count = Math.floor((rect.width * rect.height) / 15000);

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 1.2 + 0.4,
          alpha: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Draw subtle connections
      ctx.lineWidth = 0.4;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const opacity = (1 - dist / 100) * 0.06;
            ctx.strokeStyle = `rgba(136, 136, 170, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = rect.width;
        if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height;
        if (p.y > rect.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(136, 136, 170, ${p.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Convert hex color to rgba for glow effects
  const getRgbaFromHex = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[400px] overflow-hidden bg-void-deep py-24 md:min-h-[500px] md:py-32"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void-deep/90 pointer-events-none" />

      {/* Accent glow effect */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${accentColor} 0%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 text-center"
        >
          {/* Subtitle badge */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <div
                className="inline-flex items-center gap-2 border px-4 py-2 backdrop-blur-sm"
                style={{
                  borderColor: getRgbaFromHex(accentColor, 0.2),
                  backgroundColor: getRgbaFromHex(accentColor, 0.05),
                }}
              >
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: accentColor }}
                />
                <span className="font-mono text-micro uppercase tracking-widest text-stellar-dim">
                  {locale === 'ko' ? subtitle.ko : subtitle.en}
                </span>
              </div>
            </motion.div>
          )}

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-heading-1 md:text-display font-bold tracking-tight text-stellar-core"
          >
            {locale === 'ko' ? title.ko : title.en}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto max-w-3xl text-body-lg text-stellar-dim"
          >
            {locale === 'ko' ? description.ko : description.en}
          </motion.p>

          {/* CTA Button */}
          {ctaText && ctaHref && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="pt-4"
            >
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-3 border px-6 py-3 font-display text-caption uppercase tracking-widest transition-all duration-300"
                style={{
                  borderColor: getRgbaFromHex(accentColor, 0.3),
                  color: accentColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accentColor;
                  e.currentTarget.style.boxShadow = `0 0 20px ${getRgbaFromHex(accentColor, 0.3)}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = getRgbaFromHex(accentColor, 0.3);
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span className="relative z-10">
                  {locale === 'ko' ? ctaText.ko : ctaText.en}
                </span>
                <svg
                  className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-30"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
        }}
      />
    </div>
  );
}
