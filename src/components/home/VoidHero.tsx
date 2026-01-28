'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

function TScoreIndicator({ score, label, description, descriptionKo, locale }: {
  score: number;
  label: string;
  description?: string;
  descriptionKo?: string;
  locale?: string;
}) {
  const getColor = (s: number) => {
    if (s >= 0.8) return '#ff3366';
    if (s >= 0.6) return '#ff8844';
    if (s >= 0.4) return '#ffcc22';
    if (s >= 0.2) return '#44ffaa';
    return '#22ccff';
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-3 border border-stellar-faint/20 bg-void-surface/50 px-4 py-2 backdrop-blur-sm">
        <div
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: getColor(score) }}
        />
        <span className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
          {label}
        </span>
        <span className="font-mono text-sm text-stellar-dim">
          T-{score.toFixed(2)}
        </span>
      </div>
      {description && (
        <span className="font-mono text-micro text-stellar-faint/70">
          {locale === 'ko' ? descriptionKo || description : description}
        </span>
      )}
    </div>
  );
}

export function VoidHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const locale = useLocale();

  const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.25], [0, -80]);
  const titleScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let animationId: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((window.innerWidth * window.innerHeight) / 12000);

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw connections first (behind particles)
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.08;
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
        // Mouse repulsion
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 180;
          p.vx -= (dx / dist) * force * 0.3;
          p.vy -= (dy / dist) * force * 0.3;
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Friction
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Wrap around
        if (p.x < 0) p.x = window.innerWidth;
        if (p.x > window.innerWidth) p.x = 0;
        if (p.y < 0) p.y = window.innerHeight;
        if (p.y > window.innerHeight) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(136, 136, 170, ${p.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen min-h-[600px] overflow-hidden bg-void-deep">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void-deep/80 pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6"
      >
        {/* T-Score Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <TScoreIndicator
            score={0.42}
            label="Void Cartography"
            description="Anti-modal yet feasible"
            descriptionKo="뻔하지 않으면서도 실현 가능한 영역"
            locale={locale}
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center font-display void-display font-bold tracking-tight text-stellar-core"
        >
          DIVERGA
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 max-w-2xl text-center text-body-lg text-stellar-dim"
        >
          {locale === 'ko'
            ? '40개의 전문 에이전트가 체계적 문헌 고찰을 오케스트레이션합니다.'
            : '40 specialized agents orchestrating systematic literature review.'
          }
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-2 text-center text-body text-stellar-faint"
        >
          {locale === 'ko'
            ? 'Mode Collapse를 탈출하고, Long-tail을 탐험하세요.'
            : 'Escape mode collapse. Explore the long tail.'
          }
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link
            href={`/${locale}/getting-started`}
            className="void-btn void-btn-primary group"
          >
            <span className="relative z-10">
              {locale === 'ko' ? '연구 여정 시작' : 'Begin Journey'}
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
          <Link
            href={`/${locale}/agents`}
            className="void-btn void-btn-ghost"
          >
            {locale === 'ko' ? '에이전트 탐색' : 'Explore Agents'}
          </Link>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            { label: '40 Agents', value: 'Specialized Research' },
            { label: 'VS Methodology', value: 'Beyond Mode Collapse' },
            { label: 'T-Score', value: 'Typicality-Aware' },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 text-stellar-faint">
              <div className="h-1.5 w-1.5 rounded-full bg-tscore-creative" />
              <div>
                <span className="font-display text-micro uppercase tracking-widest text-stellar-dim">
                  {feature.label}
                </span>
                <span className="mx-2 text-stellar-faint/30">·</span>
                <span className="text-caption text-stellar-faint">
                  {feature.value}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-stellar-faint to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}
