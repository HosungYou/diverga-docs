'use client';

import { motion } from 'framer-motion';
import { Target, Layers, ThermometerSnowflake, ArrowRight } from 'lucide-react';

interface VSProcessFlowProps {
  locale: string;
}

interface Stage {
  id: number;
  icon: React.ReactNode;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  color: string;
  bgColor: string;
}

const stages: Stage[] = [
  {
    id: 1,
    icon: <Target className="h-8 w-8" />,
    title: {
      en: 'Modal ID',
      ko: '모달 식별',
    },
    description: {
      en: 'Identify the most frequent AI recommendations (T-Score ≥ 0.8) to understand what everyone else suggests',
      ko: '가장 빈번한 AI 추천사항(T-Score ≥ 0.8)을 식별하여 모두가 제안하는 것을 파악',
    },
    color: '#ff3366',
    bgColor: 'rgba(255, 51, 102, 0.1)',
  },
  {
    id: 2,
    icon: <Layers className="h-8 w-8" />,
    title: {
      en: 'Long-tail Sampling',
      ko: '롱테일 샘플링',
    },
    description: {
      en: 'Sample from lower probability regions (T-Score 0.2-0.6) to surface creative alternatives ignored by modal collapse',
      ko: '낮은 확률 영역(T-Score 0.2-0.6)에서 샘플링하여 모달 붕괴로 무시된 창의적 대안 발견',
    },
    color: '#ffcc22',
    bgColor: 'rgba(255, 204, 34, 0.1)',
  },
  {
    id: 3,
    icon: <ThermometerSnowflake className="h-8 w-8" />,
    title: {
      en: 'Low-T Selection',
      ko: '저온도 선택',
    },
    description: {
      en: 'Use low temperature (0.3-0.5) for final reasoning to ensure rigor while exploring the discovered divergent options',
      ko: '최종 추론에 낮은 온도(0.3-0.5)를 사용하여 발견된 발산적 옵션을 탐색하면서 엄격성 확보',
    },
    color: '#22ccff',
    bgColor: 'rgba(34, 204, 255, 0.1)',
  },
];

export function VSProcessFlow({ locale }: VSProcessFlowProps) {
  return (
    <div className="relative w-full py-12">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 font-display text-heading-2 font-bold text-stellar-core">
          {locale === 'ko' ? 'VS 방법론 프로세스' : 'VS Methodology Process'}
        </h2>
        <p className="mx-auto max-w-2xl text-body text-stellar-dim">
          {locale === 'ko'
            ? '세 단계 파이프라인으로 모달 붕괴를 피하고 창의적이면서도 엄격한 추천을 제공'
            : 'A three-stage pipeline that avoids modal collapse and delivers creative yet rigorous recommendations'}
        </p>
      </motion.div>

      {/* Process Flow */}
      <div className="relative mx-auto max-w-6xl">
        {/* Connecting Lines (Desktop) */}
        <div className="absolute inset-0 hidden items-center md:flex">
          <div className="flex w-full items-center justify-between px-24">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.3, duration: 0.6 }}
                className="h-px w-48 origin-left"
                style={{
                  background: `linear-gradient(90deg, ${stages[i].color}, ${stages[i + 1].color})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Stage Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Stage Card */}
              <div
                className="relative overflow-hidden border border-stellar-faint/20 bg-void-elevated p-6 transition-all duration-300 hover:border-stellar-faint/40"
                style={{ backgroundColor: stage.bgColor }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${stage.color}20, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Stage Number Badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center border font-mono text-sm font-bold"
                      style={{
                        borderColor: stage.color,
                        color: stage.color,
                      }}
                    >
                      {stage.id}
                    </div>
                    <div
                      className="flex h-12 w-12 items-center justify-center"
                      style={{ color: stage.color }}
                    >
                      {stage.icon}
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3
                    className="mb-3 font-display text-lg font-bold"
                    style={{ color: stage.color }}
                  >
                    {locale === 'ko' ? stage.title.ko : stage.title.en}
                  </h3>

                  {/* Stage Description */}
                  <p className="text-caption leading-relaxed text-stellar-dim">
                    {locale === 'ko'
                      ? stage.description.ko
                      : stage.description.en}
                  </p>
                </div>

                {/* Corner Accent */}
                <div
                  className="absolute -right-6 -top-6 h-12 w-12 rounded-full opacity-20"
                  style={{
                    backgroundColor: stage.color,
                    filter: `blur(20px)`,
                  }}
                />
              </div>

              {/* Arrow Connector (Mobile) */}
              {index < stages.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.4 }}
                  className="my-4 flex justify-center md:hidden"
                >
                  <ArrowRight
                    className="h-6 w-6 rotate-90"
                    style={{ color: stages[index + 1].color }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 border border-tscore-creative/30 bg-void-elevated/50 p-6 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: '#44ffaa' }}
              />
            </div>
            <div>
              <h4 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-tscore-creative">
                {locale === 'ko' ? '핵심 통찰' : 'Key Insight'}
              </h4>
              <p className="text-caption leading-relaxed text-stellar-dim">
                {locale === 'ko'
                  ? 'VS 방법론은 높은 온도로 다양성을 탐색한 후, 낮은 온도로 엄격성을 확보합니다. 이는 "창의적 발견, 엄격한 검증"이라는 이중 목표를 달성합니다.'
                  : 'VS Methodology explores diversity with high temperature, then ensures rigor with low temperature. This achieves the dual goals of "creative discovery, rigorous validation."'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
