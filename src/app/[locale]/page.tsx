"use client";

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { VoidHero } from '@/components/home/VoidHero';
import Link from 'next/link';

const content = {
  en: {
    problem: {
      label: 'The Problem',
      title: 'Mode Collapse',
      body: 'Every AI research assistant gives the same answer — "TAM framework", "mixed methods", "N=300 sample". T-Score: 0.92. Defensible but indistinguishable from everyone else.',
    },
    solution: {
      label: 'The Solution',
      title: 'VS Methodology',
      body: 'Diverga surfaces what AI would never suggest first. Five alternatives across the typicality spectrum. T-Score 0.35: still defensible, completely your own.',
    },
    concepts: {
      label: 'Core Concepts',
      title: 'Three ideas that change how you research',
      items: [
        {
          icon: '🎯',
          title: 'VS Methodology',
          description: 'Every query produces multiple alternatives across the T-Score spectrum. You choose — AI never decides alone.',
          href: '/features/vs-methodology',
          color: '#44ffaa',
          isNew: false,
        },
        {
          icon: '🛑',
          title: 'Human Checkpoints',
          description: 'Critical decisions stop and wait for your explicit approval. Impossible to bypass. Research integrity guaranteed.',
          href: '/features/checkpoints',
          color: '#ff3366',
          isNew: false,
        },
        {
          icon: '⚔️',
          title: 'VS Arena',
          description: 'Five debate personas argue methodology choices from different epistemological positions. Orchestrator-dispatched synthesis, not a guess.',
          href: '/docs/vs-arena',
          color: '#22ccff',
          isNew: true,
        },
      ],
    },
    quickstart: {
      label: 'Quick Start',
      title: 'Up and running in 3 commands',
      steps: [
        '/plugin marketplace add https://github.com/HosungYou/Diverga',
        '/plugin install diverga',
        '/diverga:setup',
      ],
      cta: 'Full Installation Guide',
      ctaHref: '/docs/installation',
      secondary: 'Browse Agents',
      secondaryHref: '/agents',
      tagline: 'Diverga v12.0.1 · Claude Code Exclusive · 24 Agents · 9 Categories',
    },
  },
  ko: {
    problem: {
      label: '문제',
      title: 'Mode Collapse',
      body: '모든 AI 연구 도우미는 같은 답을 줍니다 — "TAM 프레임워크", "혼합 방법론", "N=300 표본". T-Score: 0.92. 방어 가능하지만 모두와 구별되지 않습니다.',
    },
    solution: {
      label: '해결책',
      title: 'VS 방법론',
      body: 'Diverga는 AI가 절대 먼저 제안하지 않을 것들을 표면화합니다. T-Score 스펙트럼에 걸친 다섯 가지 대안. T-Score 0.35: 여전히 방어 가능하고, 완전히 당신만의 것.',
    },
    concepts: {
      label: '핵심 개념',
      title: '연구 방식을 바꾸는 세 가지 아이디어',
      items: [
        {
          icon: '🎯',
          title: 'VS 방법론',
          description: '모든 질문에 T-Score 스펙트럼에 걸친 다양한 대안을 제시합니다. 선택은 당신이 — AI는 혼자 결정하지 않습니다.',
          href: '/features/vs-methodology',
          color: '#44ffaa',
          isNew: false,
        },
        {
          icon: '🛑',
          title: '휴먼 체크포인트',
          description: '중요한 결정은 명시적 승인 전까지 완전히 중단됩니다. 우회 불가능. 연구 무결성 보장.',
          href: '/features/checkpoints',
          color: '#ff3366',
          isNew: false,
        },
        {
          icon: '⚔️',
          title: 'VS 아레나',
          description: '5개의 토론 페르소나가 서로 다른 인식론적 관점에서 방법론 선택을 논쟁합니다. 오케스트레이터가 합성을 제공합니다.',
          href: '/docs/vs-arena',
          color: '#22ccff',
          isNew: true,
        },
      ],
    },
    quickstart: {
      label: '빠른 시작',
      title: '3개 명령어로 시작하기',
      steps: [
        '/plugin marketplace add https://github.com/HosungYou/Diverga',
        '/plugin install diverga',
        '/diverga:setup',
      ],
      cta: '전체 설치 가이드',
      ctaHref: '/docs/installation',
      secondary: '에이전트 탐색',
      secondaryHref: '/agents',
      tagline: 'Diverga v12.0.1 · Claude Code 전용 · 24 에이전트 · 9 카테고리',
    },
  },
};

export default function HomePage() {
  const locale = useLocale() as 'en' | 'ko';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = content[locale];

  return (
    <div className="flex flex-col bg-void-deep">
      {/* Section 1: Hero */}
      <VoidHero />

      {/* Section 2: Problem + Solution */}
      <section className="relative border-t border-stellar-faint/10 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-5 md:grid-cols-2"
          >
            {/* Problem */}
            <div className="rounded-xl bg-void-elevated border border-stellar-faint/20 p-6">
              <span className="font-mono text-micro uppercase tracking-widest text-tscore-modal">
                {t.problem.label}
              </span>
              <h2 className="mt-3 font-display text-2xl text-stellar-core">{t.problem.title}</h2>
              <p className="mt-3 text-sm text-stellar-dim leading-relaxed">{t.problem.body}</p>
            </div>
            {/* Solution */}
            <div className="rounded-xl bg-void-elevated border border-tscore-creative/30 p-6">
              <span className="font-mono text-micro uppercase tracking-widest text-tscore-creative">
                {t.solution.label}
              </span>
              <h2 className="mt-3 font-display text-2xl text-stellar-core">{t.solution.title}</h2>
              <p className="mt-3 text-sm text-stellar-dim leading-relaxed">{t.solution.body}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: 3 Core Concepts */}
      <section className="relative border-t border-stellar-faint/10 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <span className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
              {t.concepts.label}
            </span>
            <h2 className="mt-4 font-display text-3xl text-stellar-core">{t.concepts.title}</h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {t.concepts.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/${locale}${item.href}`}>
                  <div
                    className="group h-full rounded-xl bg-void-elevated border border-stellar-faint/20 p-6
                                transition-all hover:border-stellar-faint/40"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-3xl">{item.icon}</span>
                      {item.isNew && (
                        <span className="border border-tscore-creative/30 bg-tscore-creative/10 px-2 py-0.5 font-mono text-micro text-tscore-creative">
                          NEW
                        </span>
                      )}
                    </div>
                    <h3
                      className="mb-2 font-display text-lg transition-colors group-hover:brightness-110"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-stellar-dim leading-relaxed">{item.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Quick Start + CTA */}
      <section className="relative border-t border-stellar-faint/10 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="font-mono text-micro uppercase tracking-widest text-tscore-balanced">
              {t.quickstart.label}
            </span>
            <h2 className="mt-4 font-display text-3xl text-stellar-core">{t.quickstart.title}</h2>

            {/* Terminal block */}
            <div className="mt-8 rounded-xl border border-stellar-faint/20 bg-void-elevated p-6 text-left">
              {t.quickstart.steps.map((cmd, i) => (
                <div key={i} className="mb-3 flex items-start gap-3 last:mb-0">
                  <span className="w-4 shrink-0 font-mono text-micro text-stellar-faint">{i + 1}</span>
                  <code className="font-mono text-sm text-tscore-creative">{cmd}</code>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href={`/${locale}${t.quickstart.ctaHref}`} className="void-btn void-btn-accent">
                {t.quickstart.cta}
              </Link>
              <Link href={`/${locale}${t.quickstart.secondaryHref}`} className="void-btn void-btn-ghost">
                {t.quickstart.secondary}
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-12 inline-flex items-center gap-2 border border-stellar-faint/10 bg-void-surface/50 px-4 py-2 backdrop-blur-sm"
            >
              <div className="h-2 w-2 bg-tscore-creative" />
              <span className="font-mono text-micro text-stellar-faint">
                {t.quickstart.tagline}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
