'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { FeatureHero } from '@/components/features/FeatureHero';
import { VSProcessFlow } from '@/components/features/VSProcessFlow';
import { ModeCollapseDemo } from '@/components/features/ModeCollapseDemo';

export default function VSMethodologyPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-void-deep pt-16">
      {/* Hero Section */}
      <FeatureHero
        title={{
          en: 'Break Free from Mode Collapse',
          ko: '모드 붕괴에서 벗어나세요',
        }}
        subtitle={{
          en: 'VS Methodology',
          ko: 'VS 방법론',
        }}
        description={{
          en: 'Traditional AI gives you the same recommendations every time. VS Methodology forces diverse options across the typicality spectrum—from modal (T=1.0) to divergent (T=0.0).',
          ko: '기존 AI는 매번 같은 추천을 합니다. VS 방법론은 모달(T=1.0)부터 발산적(T=0.0)까지 전형성 스펙트럼에 걸친 다양한 옵션을 강제합니다.',
        }}
        locale={locale}
        accentColor="#22ccff"
      />

      {/* Mode Collapse Demo */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '모드 붕괴 문제' : 'The Mode Collapse Problem'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? 'AI가 항상 같은 대답만 하는 이유와 Diverga가 어떻게 다른지'
                : 'Why AI always gives the same answer, and how Diverga is different'}
            </p>
          </motion.div>
          <ModeCollapseDemo locale={locale} />
        </div>
      </section>

      {/* T-Score Spectrum */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? 'T-Score 스펙트럼' : 'T-Score Spectrum'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? '전형성 점수: 0.0(발산적) ~ 1.0(모달)'
                : 'Typicality Score: 0.0 (divergent) to 1.0 (modal)'}
            </p>
            <div className="mx-auto mt-12 max-w-4xl">
              <div className="h-4 bg-tscore-gradient" />
              <div className="mt-4 flex justify-between font-mono text-micro">
                <span className="text-tscore-divergent">0.0 Divergent</span>
                <span className="text-tscore-creative">0.25 Creative</span>
                <span className="text-tscore-balanced">0.5 Balanced</span>
                <span className="text-tscore-typical">0.75 Typical</span>
                <span className="text-tscore-modal">1.0 Modal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VS Process Flow */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? 'VS 프로세스 작동 방식' : 'How VS Process Works'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? '3단계 프로세스로 창의적 대안 생성'
                : 'A 3-stage process to generate creative alternatives'}
            </p>
          </motion.div>
          <VSProcessFlow locale={locale} />
        </div>
      </section>

      {/* Creativity Mechanisms */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '창의성 메커니즘' : 'Creativity Mechanisms'}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: { en: 'Forced Analogy', ko: '강제 유추' },
                  description: {
                    en: 'Applies patterns from unrelated fields to generate novel solutions',
                    ko: '관련 없는 분야의 패턴을 적용하여 새로운 솔루션 생성',
                  },
                },
                {
                  title: { en: 'Semantic Distance', ko: '의미적 거리' },
                  description: {
                    en: 'Measures conceptual distance to ensure diverse recommendations',
                    ko: '다양한 추천을 보장하기 위해 개념적 거리 측정',
                  },
                },
                {
                  title: { en: 'Temporal Reframing', ko: '시간적 재구성' },
                  description: {
                    en: 'Considers how concepts evolved over time for historical alternatives',
                    ko: '역사적 대안을 위해 개념의 시간적 진화 고려',
                  },
                },
                {
                  title: { en: 'Community Simulation', ko: '커뮤니티 시뮬레이션' },
                  description: {
                    en: 'Simulates different research communities perspectives',
                    ko: '다양한 연구 커뮤니티 관점 시뮬레이션',
                  },
                },
              ].map((mechanism, index) => (
                <motion.div
                  key={mechanism.title.en}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-stellar-faint/10 bg-void-elevated p-6 transition-all hover:border-tscore-divergent/30"
                >
                  <h3 className="font-mono text-sm text-tscore-divergent">
                    {locale === 'ko' ? mechanism.title.ko : mechanism.title.en}
                  </h3>
                  <p className="mt-2 text-caption text-stellar-dim">
                    {locale === 'ko' ? mechanism.description.ko : mechanism.description.en}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? 'VS 방법론 경험하기' : 'Experience VS Methodology'}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-stellar-dim">
              {locale === 'ko'
                ? 'Diverga의 모든 에이전트에서 VS 방법론이 적용됩니다.'
                : 'VS Methodology is built into every Diverga agent.'}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/${locale}/agents`}
                className="void-btn void-btn-primary px-8 py-3"
              >
                {locale === 'ko' ? '에이전트 탐색' : 'Explore Agents'}
              </Link>
              <Link
                href={`/${locale}/docs/vs-methodology`}
                className="void-btn void-btn-secondary px-8 py-3"
              >
                {locale === 'ko' ? '문서 보기' : 'View Documentation'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
