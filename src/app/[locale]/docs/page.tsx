"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Zap, Shield, Code, Hand, Sparkles } from 'lucide-react';

const docSections = [
  {
    icon: BookOpen,
    title: { en: 'Getting Started', ko: '시작하기' },
    description: { en: 'Installation, setup, and first steps', ko: '설치, 설정 및 첫 단계' },
    href: '/getting-started',
    category: null,
  },
  {
    icon: Zap,
    title: { en: 'VS Methodology', ko: 'VS 방법론' },
    description: { en: 'Understanding T-Scores and creative alternatives', ko: 'T-Score와 창의적 대안 이해하기' },
    href: '/docs/vs-methodology',
    category: 'a',
    tScore: 0.42,
  },
  {
    icon: Shield,
    title: { en: 'Human Checkpoints', ko: '인간 체크포인트' },
    description: { en: 'How the checkpoint system works', ko: '체크포인트 시스템 작동 방식' },
    href: '/docs/checkpoints',
    category: 'e',
    isNew: true,
  },
  {
    icon: Code,
    title: { en: 'Agent Reference', ko: '에이전트 레퍼런스' },
    description: { en: 'Complete API reference for all 40 agents', ko: '40개 에이전트 전체 API 레퍼런스' },
    href: '/agents',
    category: null,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Helper to get T-Score color
function getTScoreColor(score: number): string {
  if (score >= 0.8) return '#ff3366';  // modal
  if (score >= 0.6) return '#ff8844';  // typical
  if (score >= 0.4) return '#ffcc22';  // balanced
  if (score >= 0.2) return '#44ffaa';  // creative
  return '#22ccff';                     // divergent
}

// Category colors from design system
const categoryColors: Record<string, { text: string; bg: string; glow: string }> = {
  a: { text: '#ff6b6b', bg: 'rgba(255, 107, 107, 0.15)', glow: 'rgba(255, 107, 107, 0.3)' },
  e: { text: '#9b59b6', bg: 'rgba(155, 89, 182, 0.15)', glow: 'rgba(155, 89, 182, 0.3)' },
};

export default function DocsPage() {
  const locale = useLocale() as 'en' | 'ko';

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          {/* T-Score Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-stellar-faint/20 bg-void-surface/50 backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#44ffaa' }} />
            <span className="font-mono text-xs uppercase tracking-widest text-stellar-faint">
              Void Cartography
            </span>
            <span className="font-mono text-sm text-stellar-dim">T-0.42</span>
          </motion.div>

          <h1 className="void-heading-1 text-stellar-core mb-4">
            {locale === 'ko' ? '문서' : 'Documentation'}
          </h1>
          <p className="text-body-lg text-stellar-dim max-w-xl mx-auto">
            {locale === 'ko'
              ? 'Diverga를 최대한 활용하는 방법 배우기'
              : 'Learn how to get the most out of Diverga'}
          </p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-12" />

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2"
        >
          {docSections.map((section, index) => {
            // Human Checkpoints card - special design with category E color
            if (section.href === '/docs/checkpoints') {
              return (
                <motion.div
                  key={section.href}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative"
                >
                  <Link
                    href={`/${locale}${section.href}`}
                    className="group relative flex flex-col gap-4 p-6 min-h-[220px]
                      bg-void-elevated border border-stellar-faint/10
                      hover:border-[#9b59b6]/50
                      transition-all duration-300"
                    style={{
                      boxShadow: 'inset 0 1px 0 0 rgba(240, 240, 245, 0.05)',
                    }}
                  >
                    {/* Glow effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(155, 89, 182, 0.1) 0%, transparent 70%)',
                      }}
                    />

                    {/* NEW v6.0 badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-void-surface border border-[#9b59b6]/30 font-mono text-xs uppercase tracking-wider text-[#9b59b6]">
                      NEW v6.0
                    </div>

                    <div className="flex items-start gap-4 relative z-10">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center border border-stellar-faint/20 transition-colors duration-300"
                        style={{ backgroundColor: categoryColors.e.bg }}
                      >
                        <Hand className="h-6 w-6" style={{ color: categoryColors.e.text }} />
                      </div>

                      <div className="flex-1">
                        <h2 className="void-heading-3 text-stellar-core group-hover:text-stellar-bright transition-colors mb-1.5">
                          {section.title[locale]}
                        </h2>
                        <p className="text-body text-stellar-dim leading-relaxed">
                          {section.description[locale]}
                        </p>
                      </div>
                    </div>

                    {/* Traffic light metaphor - void style */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-void-surface border border-stellar-faint/10">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff3366' }} />
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff8844' }} />
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffcc22' }} />
                      </div>
                      <div className="text-xs font-mono uppercase tracking-wider text-stellar-dim border-l border-stellar-faint/20 pl-3">
                        {locale === 'ko' ? '당신이 결정합니다' : 'You Decide'}
                      </div>
                    </div>

                    {/* Category E badge */}
                    <div
                      className="absolute bottom-4 right-4 px-3 py-1 font-mono text-[10px] uppercase tracking-widest border"
                      style={{
                        color: categoryColors.e.text,
                        borderColor: `${categoryColors.e.text}50`,
                        backgroundColor: categoryColors.e.bg
                      }}
                    >
                      {locale === 'ko' ? '인간 중심' : 'HUMAN-CENTERED'}
                    </div>
                  </Link>
                </motion.div>
              );
            }

            // VS Methodology card - special design with category A color and T-Score
            if (section.href === '/docs/vs-methodology') {
              return (
                <motion.div
                  key={section.href}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Link
                    href={`/${locale}${section.href}`}
                    className="group relative flex items-start gap-5 p-6 min-h-[220px]
                      bg-void-elevated border border-stellar-faint/10
                      hover:border-[#44ffaa]/50
                      transition-all duration-300"
                    style={{
                      boxShadow: 'inset 0 1px 0 0 rgba(240, 240, 245, 0.05)',
                    }}
                  >
                    {/* Glow effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(68, 255, 170, 0.1) 0%, transparent 70%)',
                      }}
                    />

                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center border border-stellar-faint/20 transition-colors duration-300"
                      style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)' }}
                    >
                      <section.icon className="h-6 w-6" style={{ color: '#44ffaa' }} />
                    </div>

                    <div className="flex-1 relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="void-heading-3 text-stellar-core group-hover:text-stellar-bright transition-colors">
                          {section.title[locale]}
                        </h2>
                        {/* T-Score indicator */}
                        {section.tScore && (
                          <div className="flex items-center gap-1.5 px-2 py-1 bg-void-surface border border-stellar-faint/20">
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: getTScoreColor(section.tScore) }}
                            />
                            <span className="font-mono text-xs text-stellar-dim">
                              T-{section.tScore.toFixed(2)}
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="text-body text-stellar-dim leading-relaxed">
                        {section.description[locale]}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            }

            // Regular card design for other sections
            return (
              <motion.div
                key={section.href}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link
                  href={`/${locale}${section.href}`}
                  className="group flex items-start gap-5 p-6
                    bg-void-elevated border border-stellar-faint/10
                    hover:border-stellar-faint/30
                    transition-all duration-300"
                  style={{
                    boxShadow: 'inset 0 1px 0 0 rgba(240, 240, 245, 0.05)',
                  }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-void-surface border border-stellar-faint/20 group-hover:border-stellar-faint/40 transition-colors">
                    <section.icon className="h-6 w-6 text-stellar-dim group-hover:text-stellar-bright transition-colors" />
                  </div>
                  <div>
                    <h2 className="void-heading-3 text-stellar-core group-hover:text-stellar-bright transition-colors mb-2">
                      {section.title[locale]}
                    </h2>
                    <p className="text-body text-stellar-dim leading-relaxed">
                      {section.description[locale]}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Section Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="void-divider-glow mt-16"
        />

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-caption text-stellar-faint mt-8 font-mono uppercase tracking-wider"
        >
          {locale === 'ko' ? '27개 에이전트 오케스트레이션 시스템' : '27-Agent Orchestration System'}
        </motion.p>
      </div>
    </div>
  );
}
