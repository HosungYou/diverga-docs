'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { patternCategories } from '@/lib/data/features';

interface PatternHeatmapProps {
  locale: string;
}

export function PatternHeatmap({ locale }: PatternHeatmapProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const getColorByCount = (count: number) => {
    if (count >= 6) return '#ff3366';
    if (count >= 5) return '#ff8844';
    if (count >= 4) return '#ffcc22';
    if (count >= 3) return '#44ffaa';
    return '#22ccff';
  };

  const getIntensity = (count: number) => {
    const maxCount = Math.max(...patternCategories.map((c) => c.count));
    return count / maxCount;
  };

  const getRgbaFromHex = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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
          {locale === 'ko' ? '24개 AI 패턴 카테고리' : '24 AI Pattern Categories'}
        </h2>
        <p className="mx-auto max-w-2xl text-body text-stellar-dim">
          {locale === 'ko'
            ? '6개 주요 카테고리에 걸쳐 24가지 AI 작성 패턴을 감지하고 변환합니다'
            : 'Detect and transform 24 AI writing patterns across 6 major categories'}
        </p>
      </motion.div>

      {/* Heatmap Grid */}
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {patternCategories.map((category, index) => {
            const color = getColorByCount(category.count);
            const intensity = getIntensity(category.count);
            const isHovered = hoveredCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredCategory(category.id)}
                onHoverEnd={() => setHoveredCategory(null)}
                className="group relative cursor-pointer overflow-hidden border"
                style={{
                  borderColor: getRgbaFromHex(color, 0.3),
                  backgroundColor: getRgbaFromHex(color, 0.05 + intensity * 0.1),
                }}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${getRgbaFromHex(color, 0.15)}, transparent 70%)`,
                  }}
                />

                {/* Top intensity bar */}
                <motion.div
                  className="h-1"
                  style={{ backgroundColor: color }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: intensity }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                />

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Category name */}
                  <h3 className="mb-3 font-display text-xl font-bold text-stellar-core">
                    {locale === 'ko' ? category.name.ko : category.name.en}
                  </h3>

                  {/* Pattern count badge */}
                  <div className="mb-4 flex items-center gap-3">
                    <motion.div
                      className="flex h-16 w-16 items-center justify-center rounded-sm border"
                      style={{
                        borderColor: getRgbaFromHex(color, 0.3),
                        backgroundColor: getRgbaFromHex(color, 0.15),
                      }}
                      animate={{
                        boxShadow: isHovered
                          ? `0 0 30px ${getRgbaFromHex(color, 0.4)}`
                          : `0 0 10px ${getRgbaFromHex(color, 0.1)}`,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center">
                        <div
                          className="font-display text-2xl font-bold"
                          style={{ color }}
                        >
                          {category.count}
                        </div>
                        <div className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
                          {locale === 'ko' ? '패턴' : 'patterns'}
                        </div>
                      </div>
                    </motion.div>

                    {/* Intensity indicator */}
                    <div className="flex-1">
                      <div className="mb-1 font-mono text-micro uppercase tracking-widest text-stellar-faint">
                        {locale === 'ko' ? '강도' : 'Intensity'}
                      </div>
                      <div className="relative h-2 overflow-hidden bg-void-elevated">
                        <motion.div
                          className="absolute inset-y-0 left-0"
                          style={{ backgroundColor: color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${intensity * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                        />
                      </div>
                      <div className="mt-1 font-mono text-micro text-stellar-dim">
                        {Math.round(intensity * 100)}%
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className="mb-4 h-px"
                    style={{
                      background: `linear-gradient(90deg, ${color}, transparent)`,
                    }}
                  />

                  {/* Patterns list preview */}
                  <div className="mb-2 font-mono text-micro uppercase tracking-widest text-stellar-faint">
                    {locale === 'ko' ? '주요 패턴' : 'Key Patterns'}
                  </div>
                  <div className="space-y-2">
                    {category.patterns.slice(0, 3).map((pattern, idx) => (
                      <motion.div
                        key={pattern}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 + idx * 0.05, duration: 0.3 }}
                        className="flex items-start gap-2 text-caption text-stellar-dim"
                      >
                        <div
                          className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <span className="flex-1 leading-relaxed">
                          {pattern.split('_').join(' ')}
                        </span>
                      </motion.div>
                    ))}
                    {category.patterns.length > 3 && (
                      <div className="font-mono text-micro text-stellar-faint">
                        + {category.patterns.length - 3} {locale === 'ko' ? '개 더' : 'more'}
                      </div>
                    )}
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 font-mono text-micro uppercase tracking-widest opacity-0 group-hover:opacity-100"
                    style={{ color }}
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {locale === 'ko' ? '호버 중' : 'Hover'}
                  </motion.div>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ backgroundColor: color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pattern Details Popup */}
      <AnimatePresence>
        {hoveredCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-8 max-w-5xl border border-feature-humanize/30 bg-void-elevated p-6"
          >
            <div className="flex items-start gap-4">
              <div
                className="h-2 w-2 flex-shrink-0 rounded-full"
                style={{
                  backgroundColor: getColorByCount(
                    patternCategories.find((c) => c.id === hoveredCategory)?.count || 0
                  ),
                }}
              />
              <div className="flex-1">
                <h3 className="mb-3 font-display text-lg font-bold text-stellar-core">
                  {locale === 'ko'
                    ? patternCategories.find((c) => c.id === hoveredCategory)?.name.ko
                    : patternCategories.find((c) => c.id === hoveredCategory)?.name.en}
                </h3>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {patternCategories
                    .find((c) => c.id === hoveredCategory)
                    ?.patterns.map((pattern, idx) => (
                      <motion.div
                        key={pattern}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03, duration: 0.2 }}
                        className="flex items-start gap-2 text-caption text-stellar-dim"
                      >
                        <div
                          className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{
                            backgroundColor: getColorByCount(
                              patternCategories.find((c) => c.id === hoveredCategory)?.count || 0
                            ),
                          }}
                        />
                        <span className="flex-1">{pattern.split('_').join(' ')}</span>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mx-auto mt-12 max-w-5xl"
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 font-display text-3xl font-bold text-feature-humanize">
              24
            </div>
            <div className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
              {locale === 'ko' ? '총 패턴' : 'Total Patterns'}
            </div>
          </div>
          <div className="text-center">
            <div className="mb-2 font-display text-3xl font-bold text-feature-humanize">
              6
            </div>
            <div className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
              {locale === 'ko' ? '카테고리' : 'Categories'}
            </div>
          </div>
          <div className="text-center">
            <div className="mb-2 font-display text-3xl font-bold text-feature-humanize">
              100%
            </div>
            <div className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
              {locale === 'ko' ? '인용 보존' : 'Citations Preserved'}
            </div>
          </div>
          <div className="text-center">
            <div className="mb-2 font-display text-3xl font-bold text-feature-humanize">
              3
            </div>
            <div className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
              {locale === 'ko' ? '변환 모드' : 'Transform Modes'}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
