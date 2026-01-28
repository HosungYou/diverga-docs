'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DataPoint {
  label: string;
  labelKo?: string;
  score: number;
  description?: string;
  descriptionKo?: string;
}

interface TScoreSpectrumProps {
  data?: DataPoint[];
  locale?: string;
  showLabels?: boolean;
  height?: 'sm' | 'md' | 'lg';
}

const defaultData: DataPoint[] = [
  { label: 'TAM', labelKo: 'TAM', score: 0.92, description: 'Technology Acceptance Model - Most commonly recommended' },
  { label: 'UTAUT', labelKo: 'UTAUT', score: 0.85, description: 'Unified Theory of Acceptance and Use of Technology' },
  { label: 'Hybrid', labelKo: '하이브리드', score: 0.55, description: 'Custom hybrid frameworks' },
  { label: 'SDT+TAM', labelKo: 'SDT+TAM', score: 0.38, description: 'Self-Determination Theory combined with TAM' },
  { label: 'Novel', labelKo: '새로운 이론', score: 0.18, description: 'Novel theoretical combinations' },
];

export function TScoreSpectrum({
  data = defaultData,
  locale = 'en',
  showLabels = true,
  height = 'md'
}: TScoreSpectrumProps) {
  const [activePoint, setActivePoint] = useState<DataPoint | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const getColor = (score: number) => {
    if (score >= 0.8) return '#ff3366';
    if (score >= 0.6) return '#ff8844';
    if (score >= 0.4) return '#ffcc22';
    if (score >= 0.2) return '#44ffaa';
    return '#22ccff';
  };

  const getZoneLabel = (score: number) => {
    if (score >= 0.8) return { en: 'Modal', ko: '모달' };
    if (score >= 0.6) return { en: 'Typical', ko: '전형적' };
    if (score >= 0.4) return { en: 'Balanced', ko: '균형' };
    if (score >= 0.2) return { en: 'Creative', ko: '창의적' };
    return { en: 'Divergent', ko: '발산적' };
  };

  const heightClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className="relative w-full py-8">
      {/* Spectrum Bar */}
      <div className="relative mx-auto max-w-4xl">
        <div className={`relative ${heightClasses[height]} overflow-hidden`}>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg,
                #22ccff 0%,
                #44ffaa 25%,
                #ffcc22 50%,
                #ff8844 75%,
                #ff3366 100%
              )`,
            }}
          />
        </div>

        {/* Zone Labels */}
        {showLabels && (
          <div className="mt-3 flex justify-between px-1">
            <span className="font-mono text-micro uppercase tracking-widest" style={{ color: '#22ccff' }}>
              {locale === 'ko' ? '발산적' : 'Divergent'} (0.0)
            </span>
            <span className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
              (0.5)
            </span>
            <span className="font-mono text-micro uppercase tracking-widest" style={{ color: '#ff3366' }}>
              {locale === 'ko' ? '모달' : 'Modal'} (1.0)
            </span>
          </div>
        )}

        {/* Data Points */}
        <div className="relative mt-8 h-24">
          {data.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="absolute -translate-x-1/2 cursor-pointer"
              style={{ left: `${point.score * 100}%` }}
              onMouseEnter={(e) => {
                setActivePoint(point);
                const rect = e.currentTarget.getBoundingClientRect();
                setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top });
              }}
              onMouseLeave={() => setActivePoint(null)}
            >
              {/* Vertical line */}
              <div
                className="mx-auto h-6 w-px opacity-40"
                style={{ backgroundColor: getColor(point.score) }}
              />

              {/* Point */}
              <motion.div
                whileHover={{ scale: 1.5 }}
                className="mx-auto h-3 w-3 transition-shadow"
                style={{
                  backgroundColor: getColor(point.score),
                  boxShadow: activePoint === point ? `0 0 15px ${getColor(point.score)}` : 'none'
                }}
              />

              {/* Label */}
              <p className="mt-2 whitespace-nowrap text-center font-mono text-micro text-stellar-dim">
                {locale === 'ko' ? point.labelKo || point.label : point.label}
              </p>
              <p className="text-center font-mono text-micro" style={{ color: getColor(point.score) }}>
                T-{point.score.toFixed(2)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {activePoint && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="pointer-events-none fixed z-50 max-w-xs border border-stellar-faint/20 bg-void-surface p-4 shadow-glow-sm"
            style={{
              left: `${tooltipPos.x}px`,
              top: `${tooltipPos.y - 100}px`,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2"
                style={{ backgroundColor: getColor(activePoint.score) }}
              />
              <span className="font-display text-sm font-semibold text-stellar-core">
                {locale === 'ko' ? activePoint.labelKo || activePoint.label : activePoint.label}
              </span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span
                className="font-mono text-micro"
                style={{ color: getColor(activePoint.score) }}
              >
                T-Score: {activePoint.score.toFixed(2)}
              </span>
              <span className="text-stellar-faint">·</span>
              <span className="font-mono text-micro text-stellar-faint">
                {getZoneLabel(activePoint.score)[locale as 'en' | 'ko']}
              </span>
            </div>
            {activePoint.description && (
              <p className="mt-2 text-caption text-stellar-dim">
                {locale === 'ko' ? activePoint.descriptionKo || activePoint.description : activePoint.description}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Simple inline version for badges
export function TScoreBar({ score, width = 100 }: { score: number; width?: number }) {
  const getColor = (s: number) => {
    if (s >= 0.8) return '#ff3366';
    if (s >= 0.6) return '#ff8844';
    if (s >= 0.4) return '#ffcc22';
    if (s >= 0.2) return '#44ffaa';
    return '#22ccff';
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className="relative h-1 overflow-hidden bg-void-elevated"
        style={{ width }}
      >
        <div
          className="absolute inset-y-0 left-0"
          style={{
            width: `${score * 100}%`,
            backgroundColor: getColor(score)
          }}
        />
      </div>
      <span className="font-mono text-micro" style={{ color: getColor(score) }}>
        {score.toFixed(2)}
      </span>
    </div>
  );
}
