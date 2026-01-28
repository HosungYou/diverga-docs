'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface Agent {
  id: string;
  name: { en: string; ko: string };
  description: { en: string; ko: string };
  category: string;
  tier: 'HIGH' | 'MEDIUM' | 'LOW';
  vsLevel: 'FULL' | 'ENHANCED' | 'LIGHT';
  checkpoints: string[];
  capabilities?: { en: string; ko: string }[];
  tScore?: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  A: '#ff6b6b',
  B: '#ffd93d',
  C: '#6bcb77',
  D: '#4d96ff',
  E: '#9b59b6',
  F: '#e17055',
  G: '#00cec9',
  H: '#fd79a8',
};

const TIER_CONFIG = {
  HIGH: { label: 'Opus', color: '#9b59b6' },
  MEDIUM: { label: 'Sonnet', color: '#4d96ff' },
  LOW: { label: 'Haiku', color: '#8888aa' },
};

const VS_CONFIG = {
  FULL: { label: 'Full VS', color: '#44ffaa' },
  ENHANCED: { label: 'Enhanced', color: '#22ccff' },
  LIGHT: { label: 'Light', color: '#8888aa' },
};

interface VoidAgentCardProps {
  agent: Agent;
  index?: number;
  showLink?: boolean;
}

export function VoidAgentCard({ agent, index = 0, showLink = true }: VoidAgentCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const locale = useLocale();

  const categoryColor = CATEGORY_COLORS[agent.category] || '#8888aa';
  const tierConfig = TIER_CONFIG[agent.tier];
  const vsConfig = VS_CONFIG[agent.vsLevel];
  const tScore = agent.tScore ?? (0.3 + Math.random() * 0.4);

  const getTScoreColor = (score: number) => {
    if (score >= 0.8) return '#ff3366';
    if (score >= 0.6) return '#ff8844';
    if (score >= 0.4) return '#ffcc22';
    if (score >= 0.2) return '#44ffaa';
    return '#22ccff';
  };

  const CardContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group h-[320px] w-full cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 border border-stellar-faint/10 bg-void-elevated p-5 transition-all duration-300 group-hover:border-stellar-faint/20 group-hover:shadow-glow-sm"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            {/* Category Badge */}
            <span
              className="inline-block px-2 py-1 font-mono text-micro uppercase tracking-widest"
              style={{
                backgroundColor: `${categoryColor}15`,
                color: categoryColor,
                border: `1px solid ${categoryColor}30`,
              }}
            >
              {agent.category}
            </span>

            {/* T-Score */}
            <div className="flex items-center gap-1.5 font-mono text-micro">
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: getTScoreColor(tScore) }}
              />
              <span style={{ color: getTScoreColor(tScore) }}>
                T-{tScore.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Agent ID */}
          <span className="mt-4 block font-mono text-micro text-stellar-faint">
            {agent.id}
          </span>

          {/* Name */}
          <h3 className="mt-1 font-display text-heading-3 font-semibold text-stellar-core">
            {agent.name[locale as 'en' | 'ko']}
          </h3>

          {/* Description */}
          <p className="mt-3 flex-1 text-body text-stellar-dim line-clamp-3">
            {agent.description[locale as 'en' | 'ko']}
          </p>

          {/* Bottom badges */}
          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-center gap-2">
              {/* Tier Badge */}
              <span
                className="px-2 py-0.5 font-mono text-micro"
                style={{
                  backgroundColor: `${tierConfig.color}15`,
                  color: tierConfig.color,
                  border: `1px solid ${tierConfig.color}30`,
                }}
              >
                {tierConfig.label}
              </span>

              {/* VS Badge */}
              <span
                className="px-2 py-0.5 font-mono text-micro"
                style={{
                  backgroundColor: `${vsConfig.color}15`,
                  color: vsConfig.color,
                  border: `1px solid ${vsConfig.color}30`,
                }}
              >
                {vsConfig.label}
              </span>
            </div>

            {/* Flip hint */}
            <div className="mt-3 flex items-center gap-2 text-stellar-faint/50">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="font-mono text-micro uppercase tracking-widest">
                {locale === 'ko' ? '클릭하여 상세 보기' : 'Click to see details'}
              </span>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 p-5"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderColor: `${categoryColor}30`,
            borderWidth: '1px',
            background: `linear-gradient(135deg, ${categoryColor}08 0%, #12121a 100%)`,
          }}
        >
          <h4 className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
            {locale === 'ko' ? '주요 기능' : 'Capabilities'}
          </h4>

          <ul className="mt-4 space-y-3 overflow-y-auto" style={{ maxHeight: '180px' }}>
            {(agent.capabilities || [
              { en: 'Specialized research analysis', ko: '전문 연구 분석' },
              { en: 'Context-aware recommendations', ko: '맥락 인식 권장' },
              { en: 'Checkpoint-based validation', ko: '체크포인트 기반 검증' },
            ]).map((cap, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0"
                  style={{ backgroundColor: categoryColor }}
                />
                <span className="text-caption text-stellar-dim">
                  {cap[locale as 'en' | 'ko']}
                </span>
              </li>
            ))}
          </ul>

          {/* Checkpoints */}
          {agent.checkpoints.length > 0 && (
            <div className="mt-4">
              <h5 className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
                {locale === 'ko' ? '체크포인트' : 'Checkpoints'}
              </h5>
              <div className="mt-2 flex flex-wrap gap-1">
                {agent.checkpoints.slice(0, 3).map((cp, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 font-mono text-micro text-stellar-dim"
                    style={{ backgroundColor: 'rgba(136, 136, 170, 0.1)' }}
                  >
                    {cp}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back hint */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-stellar-faint/50">
              <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="font-mono text-micro uppercase tracking-widest">
                {locale === 'ko' ? '뒤집기' : 'Flip back'}
              </span>
            </div>

            {showLink && (
              <Link
                href={`/${locale}/agents/${agent.id.toLowerCase()}`}
                onClick={(e) => e.stopPropagation()}
                className="void-btn void-btn-ghost py-1.5 px-3 text-micro"
              >
                {locale === 'ko' ? '자세히' : 'Details'} →
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return <CardContent />;
}
