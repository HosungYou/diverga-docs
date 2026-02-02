'use client';

import { motion } from 'framer-motion';
import { checkpointTypes } from '@/lib/data/features';

interface CheckpointTimelineProps {
  locale: string;
}

interface TimelinePhase {
  id: string;
  name: { en: string; ko: string };
  description: { en: string; ko: string };
  checkpointLevels: Array<'REQUIRED' | 'RECOMMENDED' | 'OPTIONAL'>;
  examples: Array<{ en: string; ko: string }>;
}

const phases: TimelinePhase[] = [
  {
    id: 'pre-project',
    name: { en: 'Pre-Project', ko: '프로젝트 전' },
    description: {
      en: 'Foundational decisions that shape your research direction',
      ko: '연구 방향을 결정하는 기초적 의사결정',
    },
    checkpointLevels: ['REQUIRED', 'REQUIRED', 'RECOMMENDED'],
    examples: [
      { en: 'Research paradigm selection', ko: '연구 패러다임 선택' },
      { en: 'Theoretical framework choice', ko: '이론적 프레임워크 선택' },
      { en: 'Literature search strategy', ko: '문헌 검색 전략' },
    ],
  },
  {
    id: 'mid-project',
    name: { en: 'Mid-Project', ko: '프로젝트 중' },
    description: {
      en: 'Methodological and analytical checkpoints during execution',
      ko: '실행 중 방법론적, 분석적 체크포인트',
    },
    checkpointLevels: ['RECOMMENDED', 'RECOMMENDED', 'OPTIONAL'],
    examples: [
      { en: 'Data collection verification', ko: '데이터 수집 검증' },
      { en: 'Analysis plan confirmation', ko: '분석 계획 확인' },
      { en: 'Intermediate results review', ko: '중간 결과 검토' },
    ],
  },
  {
    id: 'post-project',
    name: { en: 'Post-Project', ko: '프로젝트 후' },
    description: {
      en: 'Final validation and presentation decisions',
      ko: '최종 검증 및 발표 결정',
    },
    checkpointLevels: ['REQUIRED', 'RECOMMENDED', 'OPTIONAL'],
    examples: [
      { en: 'Interpretation validation', ko: '해석 검증' },
      { en: 'Presentation format selection', ko: '발표 형식 선택' },
      { en: 'Visualization preferences', ko: '시각화 선호도' },
    ],
  },
];

export function CheckpointTimeline({ locale }: CheckpointTimelineProps) {
  const getCheckpointType = (level: 'REQUIRED' | 'RECOMMENDED' | 'OPTIONAL') => {
    return checkpointTypes.find((type) => type.level === level);
  };

  return (
    <div className="relative w-full py-12">
      {/* Timeline Background */}
      <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-stellar-faint/30 to-transparent" />

      {/* Phases */}
      <div className="relative grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
        {phases.map((phase, phaseIndex) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: phaseIndex * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Phase Card */}
            <div className="relative rounded-sm border border-stellar-faint/20 bg-void-elevated p-6 backdrop-blur-sm">
              {/* Phase Header */}
              <div className="mb-6 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: phaseIndex * 0.2 + 0.3, duration: 0.4 }}
                  className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-sm border border-stellar-faint/30 bg-void-surface"
                >
                  <span className="font-mono text-heading-3 text-stellar-core">
                    {phaseIndex + 1}
                  </span>
                </motion.div>
                <h3 className="mb-2 font-display text-heading-3 text-stellar-core">
                  {locale === 'ko' ? phase.name.ko : phase.name.en}
                </h3>
                <p className="text-caption text-stellar-dim">
                  {locale === 'ko' ? phase.description.ko : phase.description.en}
                </p>
              </div>

              {/* Checkpoint Indicators */}
              <div className="mb-6 space-y-3">
                {phase.checkpointLevels.map((level, idx) => {
                  const checkpointType = getCheckpointType(level);
                  if (!checkpointType) return null;

                  return (
                    <motion.div
                      key={`${phase.id}-${level}-${idx}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: phaseIndex * 0.2 + 0.4 + idx * 0.1,
                        duration: 0.4,
                      }}
                      className="group flex items-center gap-3 rounded-sm border border-stellar-faint/10 bg-void-surface p-3 transition-all duration-300 hover:border-stellar-faint/30"
                      style={{
                        backgroundColor: `${checkpointType.color}05`,
                      }}
                    >
                      {/* Checkpoint Icon */}
                      <div
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-sm transition-all duration-300"
                        style={{
                          backgroundColor: `${checkpointType.color}20`,
                          boxShadow: `0 0 10px ${checkpointType.color}30`,
                        }}
                      >
                        <span className="text-lg">{checkpointType.icon}</span>
                      </div>

                      {/* Checkpoint Label */}
                      <div className="flex-1">
                        <div
                          className="font-mono text-micro uppercase tracking-widest transition-colors duration-300"
                          style={{ color: checkpointType.color }}
                        >
                          {locale === 'ko'
                            ? checkpointType.name.ko
                            : checkpointType.name.en}
                        </div>
                      </div>

                      {/* Animated indicator */}
                      <motion.div
                        className="h-2 w-2 rounded-full"
                        style={{
                          backgroundColor: checkpointType.color,
                        }}
                        animate={{
                          opacity: [1, 0.5, 1],
                          scale: [1, 0.8, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Examples */}
              <div className="space-y-2">
                <div className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
                  {locale === 'ko' ? '예시' : 'Examples'}
                </div>
                <ul className="space-y-2">
                  {phase.examples.map((example, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: phaseIndex * 0.2 + 0.6 + idx * 0.05,
                        duration: 0.3,
                      }}
                      className="flex items-start gap-2 text-caption text-stellar-dim"
                    >
                      <span className="mt-1 text-tscore-creative">•</span>
                      <span>{locale === 'ko' ? example.ko : example.en}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Connecting Line (desktop only) */}
            {phaseIndex < phases.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: phaseIndex * 0.2 + 0.8,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                className="absolute -right-4 top-1/2 hidden h-px w-8 origin-left md:block"
                style={{
                  background: 'linear-gradient(90deg, rgba(136,136,170,0.3), transparent)',
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-sm border border-stellar-faint/20 bg-void-surface px-6 py-3 backdrop-blur-sm">
          <span className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
            {locale === 'ko' ? '체크포인트 레벨' : 'Checkpoint Levels'}
          </span>
          {checkpointTypes.map((type, idx) => (
            <div key={type.level} className="flex items-center gap-2">
              <span className="text-sm">{type.icon}</span>
              <span
                className="font-mono text-caption"
                style={{ color: type.color }}
              >
                {locale === 'ko' ? type.name.ko : type.name.en}
              </span>
              {idx < checkpointTypes.length - 1 && (
                <span className="ml-2 text-stellar-faint">|</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
