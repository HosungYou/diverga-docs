'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Branch {
  angle: number;
  length: number;
  delay: number;
  label: string;
  labelKo: string;
  color: string;
  tScore: number;
}

interface DivergenceAnimationProps {
  locale?: string;
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const branches: Branch[] = [
  { angle: -60, length: 100, delay: 0.2, label: 'Divergent', labelKo: '발산적', color: '#22ccff', tScore: 0.15 },
  { angle: -30, length: 120, delay: 0.3, label: 'Creative', labelKo: '창의적', color: '#44ffaa', tScore: 0.35 },
  { angle: 0, length: 80, delay: 0.4, label: 'Balanced', labelKo: '균형', color: '#ffcc22', tScore: 0.50 },
  { angle: 30, length: 120, delay: 0.5, label: 'Typical', labelKo: '전형적', color: '#ff8844', tScore: 0.72 },
  { angle: 60, length: 100, delay: 0.6, label: 'Modal', labelKo: '모달', color: '#ff3366', tScore: 0.92 },
];

export function DivergenceAnimation({
  locale = 'en',
  showLabels = true,
  size = 'md'
}: DivergenceAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sizeMultiplier = {
    sm: 0.6,
    md: 1,
    lg: 1.4,
  };

  const scale = sizeMultiplier[size];

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center"
      style={{ height: 350 * scale, width: '100%' }}
    >
      {/* Center point - The query origin */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
        className="absolute z-10 flex items-center justify-center"
      >
        <div
          className="rounded-full bg-stellar-core"
          style={{
            width: 20 * scale,
            height: 20 * scale,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
          }}
        />
      </motion.div>

      {/* Label for center */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="absolute text-center"
        style={{ top: `calc(50% + ${35 * scale}px)` }}
      >
        <span className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
          {locale === 'ko' ? '연구 질문' : 'Research Query'}
        </span>
      </motion.div>

      {/* Branches */}
      <svg
        className="absolute"
        style={{
          width: 400 * scale,
          height: 350 * scale,
          overflow: 'visible'
        }}
        viewBox={`${-200 * scale} ${-175 * scale} ${400 * scale} ${350 * scale}`}
      >
        {branches.map((branch, i) => {
          const radians = (branch.angle * Math.PI) / 180;
          const endX = Math.sin(radians) * branch.length * scale;
          const endY = -Math.cos(radians) * branch.length * scale;

          return (
            <g key={i}>
              {/* Line */}
              <motion.line
                x1={0}
                y1={0}
                x2={endX}
                y2={endY}
                stroke={branch.color}
                strokeWidth={2}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                transition={{ delay: branch.delay, duration: 0.4, ease: 'easeOut' }}
              />

              {/* End point with glow */}
              <motion.circle
                cx={endX}
                cy={endY}
                r={8 * scale}
                fill={branch.color}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: branch.delay + 0.3, duration: 0.3, ease: 'backOut' }}
                style={{ filter: `drop-shadow(0 0 10px ${branch.color})` }}
              />

              {/* T-Score label on the point */}
              <motion.text
                x={endX}
                y={endY + 4 * scale}
                textAnchor="middle"
                fill="#050508"
                fontSize={8 * scale}
                fontFamily="JetBrains Mono, monospace"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: branch.delay + 0.5 }}
              >
                {branch.tScore.toFixed(2)}
              </motion.text>
            </g>
          );
        })}
      </svg>

      {/* Labels positioned outside SVG for better text rendering */}
      {showLabels && branches.map((branch, i) => {
        const radians = (branch.angle * Math.PI) / 180;
        const labelDistance = (branch.length + 35) * scale;
        const labelX = Math.sin(radians) * labelDistance;
        const labelY = -Math.cos(radians) * labelDistance;

        return (
          <motion.div
            key={`label-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: branch.delay + 0.5, duration: 0.3 }}
            className="absolute flex flex-col items-center"
            style={{
              left: `calc(50% + ${labelX}px)`,
              top: `calc(50% + ${labelY}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span
              className="font-mono text-micro uppercase tracking-widest"
              style={{ color: branch.color }}
            >
              {locale === 'ko' ? branch.labelKo : branch.label}
            </span>
          </motion.div>
        );
      })}

      {/* Pulsing rings from center */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          initial={{ scale: 0, opacity: 0.4 }}
          animate={
            isInView
              ? {
                  scale: [0, 1.5, 2.5],
                  opacity: [0.3, 0.1, 0],
                }
              : { scale: 0, opacity: 0 }
          }
          transition={{
            delay: 0.5 + ring * 0.4,
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute rounded-full border border-stellar-core/20"
          style={{
            width: 20 * scale,
            height: 20 * scale,
          }}
        />
      ))}
    </div>
  );
}
