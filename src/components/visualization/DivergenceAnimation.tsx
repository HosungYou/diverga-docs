'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Branch {
  angle: number;
  length: number;
  delay: number;
  label: string;
  labelKo: string;
  color: string;
  tScore: number;
  description: string;
  descriptionKo: string;
  examples: string[];
  examplesKo: string[];
  recommendations: string;
  recommendationsKo: string;
}

interface DivergenceAnimationProps {
  locale?: string;
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const branches: Branch[] = [
  {
    angle: -60,
    length: 100,
    delay: 0.2,
    label: 'Divergent',
    labelKo: '발산적',
    color: '#22ccff',
    tScore: 0.15,
    description: 'Challenge existing assumptions with counter-intuitive approaches',
    descriptionKo: '기존 가정에 도전하는 역발상적 접근',
    examples: ['Paradoxical relationships', 'Assumption-challenging hypotheses'],
    examplesKo: ['역설적 관계', '가정 도전 가설'],
    recommendations: 'Best for paradigm-shifting research with strong theoretical justification',
    recommendationsKo: '강력한 이론적 정당화가 있는 패러다임 전환 연구에 적합',
  },
  {
    angle: -30,
    length: 120,
    delay: 0.3,
    label: 'Creative',
    labelKo: '창의적',
    color: '#44ffaa',
    tScore: 0.35,
    description: 'Novel combinations of existing theories with fresh perspectives',
    descriptionKo: '기존 이론의 새로운 조합과 신선한 관점',
    examples: ['Cross-domain theory integration', 'Unexplored mediators'],
    examplesKo: ['교차 분야 이론 통합', '미탐색 매개변수'],
    recommendations: 'Ideal for innovative research with manageable reviewer resistance',
    recommendationsKo: '관리 가능한 리뷰어 저항을 가진 혁신적 연구에 이상적',
  },
  {
    angle: 0,
    length: 80,
    delay: 0.4,
    label: 'Balanced',
    labelKo: '균형',
    color: '#ffcc22',
    tScore: 0.50,
    description: 'Extend established frameworks with meaningful additions',
    descriptionKo: '의미 있는 추가로 확립된 프레임워크 확장',
    examples: ['New moderators', 'Context-specific adaptations'],
    examplesKo: ['새로운 조절변수', '맥락 특정 적응'],
    recommendations: 'Safe yet contributes to literature; good for early career researchers',
    recommendationsKo: '안전하면서도 문헌에 기여; 초기 경력 연구자에게 좋음',
  },
  {
    angle: 30,
    length: 120,
    delay: 0.5,
    label: 'Typical',
    labelKo: '전형적',
    color: '#ff8844',
    tScore: 0.72,
    description: 'Apply well-validated frameworks to new contexts',
    descriptionKo: '잘 검증된 프레임워크를 새로운 맥락에 적용',
    examples: ['Replication in new setting', 'Standard framework application'],
    examplesKo: ['새로운 환경에서의 반복', '표준 프레임워크 적용'],
    recommendations: 'High acceptance rate but limited differentiation',
    recommendationsKo: '높은 수용률이지만 제한된 차별화',
  },
  {
    angle: 60,
    length: 100,
    delay: 0.6,
    label: 'Modal',
    labelKo: '모달',
    color: '#ff3366',
    tScore: 0.92,
    description: 'Most predictable AI-recommended approach; high risk of mode collapse',
    descriptionKo: 'AI가 가장 예측 가능하게 추천하는 접근; 모드 붕괴 위험 높음',
    examples: ['TAM for tech adoption', 'Basic correlation studies'],
    examplesKo: ['기술 채택을 위한 TAM', '기본 상관관계 연구'],
    recommendations: 'Avoid unless replicating; hard to publish in top journals',
    recommendationsKo: '반복 연구가 아니라면 피하세요; 상위 저널에 출판 어려움',
  },
];

export function DivergenceAnimation({
  locale = 'en',
  showLabels = true,
  size = 'md',
  autoPlay = true,
  autoPlayInterval = 3000,
}: DivergenceAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredBranch, setHoveredBranch] = useState<number | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<number | null>(null);
  const [highlightedBranch, setHighlightedBranch] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // Auto-play sequential animation
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;

    const interval = setInterval(() => {
      setHighlightedBranch((prev) => (prev + 1) % branches.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView, autoPlayInterval]);

  // Pause autoplay on hover or click
  useEffect(() => {
    if (hoveredBranch !== null || selectedBranch !== null) {
      setIsAutoPlaying(false);
    }
  }, [hoveredBranch, selectedBranch]);

  const sizeMultiplier = {
    sm: 0.6,
    md: 1,
    lg: 1.4,
  };

  const scale = sizeMultiplier[size];
  const activeBranch = selectedBranch ?? hoveredBranch ?? highlightedBranch;
  const activeBranchData = branches[activeBranch];

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center"
      style={{ minHeight: 350 * scale + 180 }}
    >
      {/* Main Animation Area */}
      <div
        className="relative flex items-center justify-center"
        style={{ height: 350 * scale, width: '100%' }}
      >
        {/* Center point - The query origin */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, ease: 'backOut' }}
          className="absolute z-10 flex items-center justify-center cursor-pointer"
          onClick={() => {
            setSelectedBranch(null);
            setIsAutoPlaying(true);
          }}
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
            const isActive = activeBranch === i;

            return (
              <g
                key={i}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredBranch(i)}
                onMouseLeave={() => setHoveredBranch(null)}
                onClick={() => setSelectedBranch(selectedBranch === i ? null : i)}
              >
                {/* Line */}
                <motion.line
                  x1={0}
                  y1={0}
                  x2={endX}
                  y2={endY}
                  stroke={branch.color}
                  strokeWidth={isActive ? 3 : 2}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? {
                    pathLength: 1,
                    opacity: isActive ? 1 : 0.4,
                  } : { pathLength: 0, opacity: 0 }}
                  transition={{
                    delay: branch.delay,
                    duration: 0.4,
                    ease: 'easeOut',
                    opacity: { duration: 0.2 }
                  }}
                />

                {/* End point with glow */}
                <motion.circle
                  cx={endX}
                  cy={endY}
                  r={isActive ? 10 * scale : 8 * scale}
                  fill={branch.color}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: branch.delay + 0.3, duration: 0.3, ease: 'backOut' }}
                  style={{
                    filter: isActive
                      ? `drop-shadow(0 0 15px ${branch.color})`
                      : `drop-shadow(0 0 5px ${branch.color})`
                  }}
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
          const isActive = activeBranch === i;

          return (
            <motion.div
              key={`label-${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? {
                opacity: isActive ? 1 : 0.5,
                scale: isActive ? 1.1 : 1,
              } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: branch.delay + 0.5, duration: 0.3 }}
              className="absolute flex flex-col items-center cursor-pointer"
              style={{
                left: `calc(50% + ${labelX}px)`,
                top: `calc(50% + ${labelY}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setHoveredBranch(i)}
              onMouseLeave={() => setHoveredBranch(null)}
              onClick={() => setSelectedBranch(selectedBranch === i ? null : i)}
            >
              <span
                className="font-mono text-micro uppercase tracking-widest transition-all"
                style={{
                  color: branch.color,
                  textShadow: isActive ? `0 0 10px ${branch.color}` : 'none',
                }}
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

      {/* Detail Panel */}
      <AnimatePresence mode="wait">
        {activeBranchData && (
          <motion.div
            key={activeBranch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 w-full max-w-lg border border-stellar-faint/20 bg-void-surface p-5"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: activeBranchData.color }}
              />
              <span
                className="font-mono text-sm font-semibold uppercase tracking-wider"
                style={{ color: activeBranchData.color }}
              >
                {locale === 'ko' ? activeBranchData.labelKo : activeBranchData.label}
              </span>
              <span className="font-mono text-micro text-stellar-faint">
                T-{activeBranchData.tScore.toFixed(2)}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-stellar-dim mb-4">
              {locale === 'ko' ? activeBranchData.descriptionKo : activeBranchData.description}
            </p>

            {/* Examples */}
            <div className="mb-3">
              <span className="font-mono text-micro text-stellar-faint uppercase tracking-wider">
                {locale === 'ko' ? '예시' : 'Examples'}
              </span>
              <div className="mt-1 flex flex-wrap gap-2">
                {(locale === 'ko' ? activeBranchData.examplesKo : activeBranchData.examples).map((example, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-mono bg-void-elevated border border-stellar-faint/20"
                    style={{ color: activeBranchData.color }}
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="pt-3 border-t border-stellar-faint/20">
              <span className="font-mono text-micro text-stellar-faint uppercase tracking-wider">
                {locale === 'ko' ? '권장 사항' : 'Recommendations'}
              </span>
              <p className="mt-1 text-sm text-stellar-dim">
                {locale === 'ko' ? activeBranchData.recommendationsKo : activeBranchData.recommendations}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auto-play indicator */}
      {isAutoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 flex items-center gap-2 text-stellar-faint"
        >
          <div className="flex gap-1">
            {branches.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: highlightedBranch === i ? branches[i].color : 'rgba(136, 136, 170, 0.3)'
                }}
              />
            ))}
          </div>
          <span className="font-mono text-micro">
            {locale === 'ko' ? '클릭하여 탐색' : 'Click to explore'}
          </span>
        </motion.div>
      )}
    </div>
  );
}
