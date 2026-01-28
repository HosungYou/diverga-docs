"use client";

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { VoidHero } from '@/components/home/VoidHero';
import { TScoreSpectrum, DivergenceAnimation, AgentNetwork } from '@/components/visualization';
import { InteractiveCLI } from '@/components/cli';
import Link from 'next/link';

export default function HomePage() {
  const locale = useLocale();

  // Scroll to top on page load to ensure VoidHero is visible first
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      tscore: {
        title: 'The T-Score Spectrum',
        subtitle: 'Most AI outputs cluster at T-Score 0.8+ (modal). Diverga helps you explore the creative long tail.',
      },
      divergence: {
        title: 'VS Methodology in Action',
        subtitle: 'One query, five directions. Human decides which path to explore.',
      },
      network: {
        title: 'Agent Collaboration Network',
        subtitle: '40 specialized agents work together across 8 research lifecycle stages.',
      },
      cli: {
        title: 'Interactive Terminal',
        subtitle: 'Experience Diverga CLI with human checkpoints.',
      },
      cta: {
        title: 'Ready to Escape Mode Collapse?',
        subtitle: 'Join researchers who are exploring the long tail of methodology.',
        button: 'Start Your Journey',
        secondary: 'Read Documentation',
      },
    },
    ko: {
      tscore: {
        title: 'T-Score 스펙트럼',
        subtitle: '대부분의 AI 출력은 T-Score 0.8+ (모달)에 집중됩니다. Diverga는 창의적인 Long-tail을 탐험하도록 도와줍니다.',
      },
      divergence: {
        title: 'VS 방법론 실행',
        subtitle: '하나의 질문, 다섯 가지 방향. 인간이 어떤 경로를 탐색할지 결정합니다.',
      },
      network: {
        title: '에이전트 협업 네트워크',
        subtitle: '40개의 전문 에이전트가 8개의 연구 생애주기 단계에서 함께 작동합니다.',
      },
      cli: {
        title: '인터랙티브 터미널',
        subtitle: '인간 체크포인트가 포함된 Diverga CLI를 체험해 보세요.',
      },
      cta: {
        title: 'Mode Collapse를 탈출할 준비가 되셨나요?',
        subtitle: '방법론의 Long-tail을 탐험하는 연구자들과 함께하세요.',
        button: '연구 여정 시작',
        secondary: '문서 읽기',
      },
    },
  };

  const t = content[locale as 'en' | 'ko'];

  return (
    <div className="flex flex-col bg-void-deep">
      {/* Hero Section */}
      <VoidHero />

      {/* T-Score Philosophy Section */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="font-mono text-micro uppercase tracking-widest text-tscore-creative">
              T-Score System
            </span>
            <h2 className="mt-4 font-display void-heading-1 text-stellar-core">
              {t.tscore.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-stellar-dim">
              {t.tscore.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16"
          >
            <TScoreSpectrum locale={locale} height="md" />
          </motion.div>
        </div>
      </section>

      {/* Divergence Animation Section */}
      <section className="relative border-t border-stellar-faint/10 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="font-mono text-micro uppercase tracking-widest text-tscore-divergent">
              VS Methodology
            </span>
            <h2 className="mt-4 font-display void-heading-1 text-stellar-core">
              {t.divergence.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-stellar-dim">
              {t.divergence.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <DivergenceAnimation locale={locale} size="lg" />
          </motion.div>
        </div>
      </section>

      {/* Agent Network Section */}
      <section className="relative border-t border-stellar-faint/10 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="font-mono text-micro uppercase tracking-widest text-category-c">
              40 Agents
            </span>
            <h2 className="mt-4 font-display void-heading-1 text-stellar-core">
              {t.network.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-stellar-dim">
              {t.network.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 overflow-hidden border border-stellar-faint/10"
          >
            <AgentNetwork locale={locale} height={500} />
          </motion.div>
        </div>
      </section>

      {/* Interactive CLI Section */}
      <section className="relative border-t border-stellar-faint/10 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="font-mono text-micro uppercase tracking-widest text-tscore-balanced">
              Try It Now
            </span>
            <h2 className="mt-4 font-display void-heading-1 text-stellar-core">
              {t.cli.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-stellar-dim">
              {t.cli.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12"
          >
            <InteractiveCLI height={420} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-stellar-faint/10 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display void-heading-1 text-stellar-core">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-body-lg text-stellar-dim">
              {t.cta.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href={`/${locale}/getting-started`}
                className="void-btn void-btn-accent"
              >
                {t.cta.button}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/docs`}
                className="void-btn void-btn-ghost"
              >
                {t.cta.secondary}
              </Link>
            </div>
          </motion.div>

          {/* T-Score badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 inline-flex items-center gap-2 border border-stellar-faint/10 bg-void-surface/50 px-4 py-2 backdrop-blur-sm"
          >
            <div className="h-2 w-2 bg-tscore-creative" />
            <span className="font-mono text-micro text-stellar-faint">
              This documentation: T-Score 0.42 (Creative Range)
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
