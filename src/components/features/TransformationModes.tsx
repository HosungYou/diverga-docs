'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { transformationModes } from '@/lib/data/features';
import { Shield, Zap, Sparkles } from 'lucide-react';

interface TransformationModesProps {
  locale: string;
}

const modeIcons = {
  conservative: Shield,
  balanced: Zap,
  aggressive: Sparkles,
};

const modeColors = {
  conservative: '#44ffaa',
  balanced: '#ff8844',
  aggressive: '#ff3366',
};

export function TransformationModes({ locale }: TransformationModesProps) {
  const [activeMode, setActiveMode] = useState<string>('balanced');

  const getRgbaFromHex = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const getCoveragePercentage = (mode: string) => {
    if (mode === 'conservative') return 12.5; // 3/24
    if (mode === 'balanced') return 50; // 12/24
    return 100; // 24/24
  };

  return (
    <section className="py-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <h2 className="mb-4 font-display text-heading-2 text-stellar-core">
          {locale === 'ko' ? '3가지 변환 모드' : '3 Transformation Modes'}
        </h2>
        <p className="mx-auto max-w-2xl text-body text-stellar-dim">
          {locale === 'ko'
            ? '연구 맥락과 위험 허용도에 맞는 최적의 휴먼화 수준을 선택하세요'
            : 'Choose the optimal humanization level for your research context and risk tolerance'}
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mx-auto mb-8 flex max-w-4xl justify-center gap-2 border border-stellar-faint/20 bg-void-elevated p-2"
      >
        {transformationModes.map((mode, index) => {
          const Icon = modeIcons[mode.id as keyof typeof modeIcons];
          const color = modeColors[mode.id as keyof typeof modeColors];
          const isActive = activeMode === mode.id;

          return (
            <motion.button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className="relative flex-1 px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300"
              style={{
                borderWidth: 1,
                borderColor: isActive ? color : 'transparent',
                backgroundColor: isActive ? getRgbaFromHex(color, 0.1) : 'transparent',
                color: isActive ? color : 'rgba(161, 161, 170, 1)',
              }}
              whileHover={{
                backgroundColor: isActive ? getRgbaFromHex(color, 0.1) : getRgbaFromHex(color, 0.05),
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center gap-2">
                <Icon className="h-4 w-4" />
                {locale === 'ko' ? mode.name.ko : mode.name.en}
              </div>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: color }}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Tab Content */}
      <div className="mx-auto max-w-5xl">
        <AnimatePresence mode="wait">
          {transformationModes.map(
            (mode) =>
              activeMode === mode.id && (
                <motion.div
                  key={mode.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden border p-8"
                  style={{
                    borderColor: getRgbaFromHex(
                      modeColors[mode.id as keyof typeof modeColors],
                      0.3
                    ),
                    backgroundColor: getRgbaFromHex(
                      modeColors[mode.id as keyof typeof modeColors],
                      0.05
                    ),
                  }}
                >
                  {/* Background Glow */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `radial-gradient(circle at top right, ${getRgbaFromHex(
                        modeColors[mode.id as keyof typeof modeColors],
                        0.1
                      )}, transparent 70%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="flex h-16 w-16 items-center justify-center rounded-sm border"
                          style={{
                            borderColor: getRgbaFromHex(
                              modeColors[mode.id as keyof typeof modeColors],
                              0.3
                            ),
                            backgroundColor: getRgbaFromHex(
                              modeColors[mode.id as keyof typeof modeColors],
                              0.15
                            ),
                          }}
                          animate={{
                            boxShadow: [
                              `0 0 20px ${getRgbaFromHex(
                                modeColors[mode.id as keyof typeof modeColors],
                                0.2
                              )}`,
                              `0 0 30px ${getRgbaFromHex(
                                modeColors[mode.id as keyof typeof modeColors],
                                0.4
                              )}`,
                              `0 0 20px ${getRgbaFromHex(
                                modeColors[mode.id as keyof typeof modeColors],
                                0.2
                              )}`,
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          {(() => {
                            const Icon = modeIcons[mode.id as keyof typeof modeIcons];
                            return (
                              <Icon
                                className="h-8 w-8"
                                style={{ color: modeColors[mode.id as keyof typeof modeColors] }}
                              />
                            );
                          })()}
                        </motion.div>
                        <div>
                          <h3
                            className="mb-1 font-display text-2xl font-bold"
                            style={{ color: modeColors[mode.id as keyof typeof modeColors] }}
                          >
                            {locale === 'ko' ? mode.name.ko : mode.name.en}
                          </h3>
                          <p className="text-body text-stellar-dim">
                            {locale === 'ko' ? mode.description.ko : mode.description.en}
                          </p>
                        </div>
                      </div>

                      {/* Risk level badge */}
                      <div
                        className="inline-flex items-center gap-2 border px-3 py-1.5"
                        style={{
                          borderColor: getRgbaFromHex(
                            modeColors[mode.id as keyof typeof modeColors],
                            0.4
                          ),
                          backgroundColor: getRgbaFromHex(
                            modeColors[mode.id as keyof typeof modeColors],
                            0.1
                          ),
                        }}
                      >
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: modeColors[mode.id as keyof typeof modeColors],
                          }}
                        />
                        <span
                          className="font-mono text-micro uppercase tracking-widest"
                          style={{ color: modeColors[mode.id as keyof typeof modeColors] }}
                        >
                          {locale === 'ko' ? mode.riskLevel.ko : mode.riskLevel.en}
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      className="mb-6 h-px"
                      style={{
                        background: `linear-gradient(90deg, ${
                          modeColors[mode.id as keyof typeof modeColors]
                        }, transparent)`,
                      }}
                    />

                    {/* Pattern Coverage */}
                    <div className="mb-6">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
                          {locale === 'ko' ? '패턴 커버리지' : 'Pattern Coverage'}
                        </span>
                        <span
                          className="font-mono text-sm font-bold"
                          style={{ color: modeColors[mode.id as keyof typeof modeColors] }}
                        >
                          {getCoveragePercentage(mode.id).toFixed(0)}%
                        </span>
                      </div>
                      <div className="relative h-2 overflow-hidden bg-void-elevated">
                        <motion.div
                          className="absolute inset-y-0 left-0"
                          style={{
                            backgroundColor: modeColors[mode.id as keyof typeof modeColors],
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${getCoveragePercentage(mode.id)}%` }}
                          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>
                      <div className="mt-2 text-caption text-stellar-dim">
                        {mode.id === 'conservative' && (locale === 'ko' ? '3/24 패턴' : '3/24 patterns')}
                        {mode.id === 'balanced' && (locale === 'ko' ? '12/24 패턴' : '12/24 patterns')}
                        {mode.id === 'aggressive' && (locale === 'ko' ? '24/24 패턴' : '24/24 patterns')}
                      </div>
                    </div>

                    {/* Use Case */}
                    <div className="mb-6">
                      <div className="mb-2 font-mono text-micro uppercase tracking-widest text-stellar-faint">
                        {locale === 'ko' ? '최적 사용 사례' : 'Best Use Case'}
                      </div>
                      <div
                        className="border-l-2 bg-void-surface p-4"
                        style={{
                          borderColor: modeColors[mode.id as keyof typeof modeColors],
                        }}
                      >
                        <p className="text-body leading-relaxed text-stellar-core">
                          {locale === 'ko' ? mode.useCase.ko : mode.useCase.en}
                        </p>
                      </div>
                    </div>

                    {/* Example patterns */}
                    <div>
                      <div className="mb-3 font-mono text-micro uppercase tracking-widest text-stellar-faint">
                        {locale === 'ko' ? '변환 대상 패턴' : 'Patterns Included'}
                      </div>
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        {mode.patternsIncluded.slice(0, 6).map((pattern, idx) => (
                          <motion.div
                            key={pattern}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + idx * 0.05, duration: 0.3 }}
                            className="flex items-start gap-2 rounded-sm bg-void-surface p-2 text-caption text-stellar-dim"
                          >
                            <div
                              className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                              style={{
                                backgroundColor: modeColors[mode.id as keyof typeof modeColors],
                              }}
                            />
                            <span className="flex-1">{pattern.split('_').join(' ')}</span>
                          </motion.div>
                        ))}
                      </div>
                      {mode.patternsIncluded.length > 6 && (
                        <div className="mt-2 text-caption text-stellar-faint">
                          + {mode.patternsIncluded.length - 6}{' '}
                          {locale === 'ko' ? '개 더 많은 패턴 포함' : 'more patterns included'}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div
                    className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full opacity-20 blur-3xl"
                    style={{ backgroundColor: modeColors[mode.id as keyof typeof modeColors] }}
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Mode Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mx-auto mt-12 max-w-5xl border border-feature-humanize/30 bg-void-elevated p-6"
      >
        <h3 className="mb-6 text-center font-display text-xl font-bold text-stellar-core">
          {locale === 'ko' ? '모드 비교' : 'Mode Comparison'}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stellar-faint/20">
                <th className="pb-3 text-left font-mono text-micro uppercase tracking-widest text-stellar-faint">
                  {locale === 'ko' ? '기준' : 'Criteria'}
                </th>
                {transformationModes.map((mode) => (
                  <th
                    key={mode.id}
                    className="pb-3 text-center font-mono text-micro uppercase tracking-widest"
                    style={{ color: modeColors[mode.id as keyof typeof modeColors] }}
                  >
                    {locale === 'ko' ? mode.name.ko : mode.name.en}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stellar-faint/10">
                <td className="py-3 text-caption text-stellar-dim">
                  {locale === 'ko' ? '패턴 수' : 'Pattern Count'}
                </td>
                <td className="py-3 text-center text-stellar-core">3</td>
                <td className="py-3 text-center text-stellar-core">12</td>
                <td className="py-3 text-center text-stellar-core">24</td>
              </tr>
              <tr className="border-b border-stellar-faint/10">
                <td className="py-3 text-caption text-stellar-dim">
                  {locale === 'ko' ? '탐지 위험' : 'Detection Risk'}
                </td>
                <td className="py-3 text-center text-tscore-creative">
                  {locale === 'ko' ? '최소' : 'Minimal'}
                </td>
                <td className="py-3 text-center text-feature-humanize">
                  {locale === 'ko' ? '낮음' : 'Low'}
                </td>
                <td className="py-3 text-center text-tscore-modal">
                  {locale === 'ko' ? '중간' : 'Medium'}
                </td>
              </tr>
              <tr className="border-b border-stellar-faint/10">
                <td className="py-3 text-caption text-stellar-dim">
                  {locale === 'ko' ? '처리 시간' : 'Processing'}
                </td>
                <td className="py-3 text-center text-stellar-core">
                  {locale === 'ko' ? '빠름' : 'Fast'}
                </td>
                <td className="py-3 text-center text-stellar-core">
                  {locale === 'ko' ? '중간' : 'Medium'}
                </td>
                <td className="py-3 text-center text-stellar-core">
                  {locale === 'ko' ? '느림' : 'Slow'}
                </td>
              </tr>
              <tr>
                <td className="py-3 text-caption text-stellar-dim">
                  {locale === 'ko' ? '추천 대상' : 'Recommended For'}
                </td>
                <td className="py-3 text-center text-caption text-stellar-dim">
                  {locale === 'ko' ? '저널' : 'Journals'}
                </td>
                <td className="py-3 text-center text-caption text-stellar-dim">
                  {locale === 'ko' ? '학위논문' : 'Dissertations'}
                </td>
                <td className="py-3 text-center text-caption text-stellar-dim">
                  {locale === 'ko' ? '내부 문서' : 'Internal Docs'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
