'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { FeatureHero } from '@/components/features/FeatureHero';
import { HumanizationDemo } from '@/components/features/HumanizationDemo';
import { PatternHeatmap } from '@/components/features/PatternHeatmap';
import { TransformationModes } from '@/components/features/TransformationModes';

export default function HumanizationPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-void-deep pt-16">
      {/* Hero Section */}
      <FeatureHero
        title={{
          en: 'AI Text to Natural Academic Writing',
          ko: 'AI 텍스트를 자연스러운 학술 문체로',
        }}
        subtitle={{
          en: '4-Layer Humanization Pipeline',
          ko: '4단계 휴먼화 파이프라인',
        }}
        description={{
          en: 'Detect and transform 28 categories across 4 transformation layers of AI writing patterns while preserving 100% of citations, statistics, and academic rigor.',
          ko: '인용, 통계, 학술적 엄밀성을 100% 보존하면서 4개 변환 레이어에 걸친 28개 카테고리의 AI 작성 패턴을 감지하고 변환합니다.',
        }}
        locale={locale}
        accentColor="#ff8844"
      />

      {/* Before/After Demo */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '변환 전후 비교' : 'Before & After Comparison'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? 'AI 패턴이 어떻게 자연스러운 학술 문체로 변환되는지 확인하세요'
                : 'See how AI patterns are transformed into natural academic writing'}
            </p>
          </motion.div>
          <HumanizationDemo locale={locale} />
        </div>
      </section>

      {/* Integrity Badges */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { icon: '✅', label: { en: '100% Citation Preserved', ko: '100% 인용 보존' } },
                { icon: '✅', label: { en: '100% Statistics Preserved', ko: '100% 통계 보존' } },
                { icon: '✅', label: { en: 'Academic Rigor Maintained', ko: '학술적 엄밀성 유지' } },
              ].map((badge, index) => (
                <motion.div
                  key={badge.label.en}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 border border-tscore-creative/30 bg-void-elevated p-4"
                >
                  <span className="text-2xl">{badge.icon}</span>
                  <span className="font-mono text-sm text-stellar-core">
                    {locale === 'ko' ? badge.label.ko : badge.label.en}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pattern Categories */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '28개 AI 패턴 카테고리' : '28 AI Pattern Categories'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? '7개 주요 영역에서 감지되는 AI 작성 패턴'
                : 'AI writing patterns detected across 7 major areas'}
            </p>
          </motion.div>
          <PatternHeatmap locale={locale} />
        </div>
      </section>

      {/* Transformation Modes */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '3가지 변환 모드' : 'Three Transformation Modes'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? '용도에 맞는 변환 수준 선택'
                : 'Choose the right level of transformation for your needs'}
            </p>
          </motion.div>
          <TransformationModes locale={locale} />
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '작동 방식' : 'How It Works'}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  step: '01',
                  title: { en: 'Pattern Detection', ko: '패턴 감지' },
                  description: {
                    en: 'Analyze text for 28 AI writing patterns across 7 domains using G5-AIPatternSpotter',
                    ko: 'G5-AI패턴스파터를 사용하여 7개 도메인의 28개 AI 작성 패턴 분석',
                  },
                },
                {
                  step: '02',
                  title: { en: 'Selective Transform', ko: '선택적 변환' },
                  description: {
                    en: 'Apply 4-layer transformation (vocabulary → phrase → structure → discourse) via G6-NaturalVoice based on selected mode',
                    ko: 'G6-자연스러운목소리를 통해 선택된 모드에 따라 4단계 변환 적용 (어휘 → 구문 → 구조 → 담화)',
                  },
                },
                {
                  step: '03',
                  title: { en: 'Integrity Check', ko: '무결성 검사' },
                  description: {
                    en: 'Verify all citations, statistics, and academic claims are preserved including discourse naturalness via F5-VerificationGuard',
                    ko: 'F5-검증보호자를 통해 담화 자연스러움을 포함하여 모든 인용, 통계, 학술적 주장이 보존되었는지 확인',
                  },
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative border border-stellar-faint/10 bg-void-elevated p-6"
                >
                  <div className="absolute -top-3 left-4 bg-void-elevated px-2 font-mono text-micro text-tscore-typical">
                    {item.step}
                  </div>
                  <h3 className="mt-2 font-display text-lg text-stellar-core">
                    {locale === 'ko' ? item.title.ko : item.title.en}
                  </h3>
                  <p className="mt-2 text-caption text-stellar-dim">
                    {locale === 'ko' ? item.description.ko : item.description.en}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '자연스러운 학술 문체로 변환하세요' : 'Transform to Natural Academic Writing'}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-stellar-dim">
              {locale === 'ko'
                ? 'Diverga의 G5-AI패턴스파터, G6-자연스러운목소리, F5-검증보호자 에이전트로 구성된 완전한 휴먼화 파이프라인을 활용하세요.'
                : 'The complete Humanization Pipeline is powered by Diverga\'s G5-AIPatternSpotter, G6-NaturalVoice, and F5-VerificationGuard agents working together.'}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/${locale}/agents`}
                className="void-btn void-btn-primary px-8 py-3"
              >
                {locale === 'ko' ? '에이전트 탐색' : 'Explore Agents'}
              </Link>
              <Link
                href={`/${locale}/getting-started`}
                className="void-btn void-btn-secondary px-8 py-3"
              >
                {locale === 'ko' ? '시작하기' : 'Get Started'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
