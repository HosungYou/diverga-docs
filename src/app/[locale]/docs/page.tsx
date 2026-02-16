'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Rocket,
  Brain,
  ShieldCheck,
  BookOpen,
  PenTool,
  Users,
  Terminal,
  Github,
  ExternalLink,
} from 'lucide-react';
import { DocsCategoryCard } from '@/components/docs';
import { docsCategories } from '@/lib/data/docs-navigation';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DocsHomePage() {
  const locale = useLocale() as 'en' | 'ko';

  return (
    <div className="max-w-5xl">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-stellar-faint/20 bg-void-surface/50">
          <div className="w-2 h-2 rounded-full bg-[#44ffaa] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-stellar-faint">
            {locale === 'ko' ? '문서' : 'Documentation'}
          </span>
          <span className="font-mono text-sm text-stellar-dim">v9.0</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-display text-stellar-core mb-4">
          {locale === 'ko' ? 'Diverga와 함께하는' : 'Build with'}
          <br />
          <span className="text-[#44ffaa]">
            {locale === 'ko' ? '창의적 연구 AI' : 'Creative Research AI'}
          </span>
        </h1>

        <p className="text-lg text-stellar-dim max-w-2xl mb-8">
          {locale === 'ko'
            ? 'Diverga를 시작하고 40개 전문 에이전트로 연구를 혁신하는 방법을 알아보세요. VS 방법론으로 모드 붕괴에서 벗어나세요.'
            : 'Learn how to get started with Diverga and transform your research with 40 specialized agents. Break free from mode collapse with VS methodology.'}
        </p>

        {/* Quick action buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href={`/${locale}/docs/quick-start`}
            className="void-btn void-btn-accent inline-flex items-center gap-2"
          >
            <Rocket className="h-4 w-4" />
            {locale === 'ko' ? '빠른 시작' : 'Quick Start'}
          </Link>
          <Link
            href={`/${locale}/agents`}
            className="void-btn void-btn-secondary inline-flex items-center gap-2"
          >
            <Users className="h-4 w-4" />
            {locale === 'ko' ? '에이전트 탐색' : 'Explore Agents'}
          </Link>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="void-divider-glow mb-12" />

      {/* Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 md:grid-cols-2 mb-16"
      >
        {docsCategories.map((category, index) => (
          <motion.div key={category.id} variants={itemVariants}>
            <DocsCategoryCard
              title={category.title[locale]}
              description={category.description[locale]}
              icon={category.icon}
              color={category.color}
              items={category.items.map(item => ({
                title: item.title[locale],
                description: item.description[locale],
                href: item.href,
                icon: item.icon,
                isNew: item.isNew,
              }))}
              locale={locale}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="border-b border-stellar-faint/10 mb-12" />

      {/* Feature Highlights */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-display text-stellar-core mb-8">
          {locale === 'ko' ? '핵심 기능 하이라이트' : 'Feature Highlights'}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Brain,
              title: { en: 'Memory System', ko: '메모리 시스템' },
              description: {
                en: 'Context persists across sessions',
                ko: '세션 간 맥락 지속',
              },
              href: '/docs/memory-system',
              color: '#44ffaa',
              isNew: true,
            },
            {
              icon: Sparkles,
              title: { en: 'VS Methodology', ko: 'VS 방법론' },
              description: {
                en: 'Break free from mode collapse',
                ko: '모드 붕괴에서 벗어나기',
              },
              href: '/docs/vs-methodology',
              color: '#22ccff',
            },
            {
              icon: ShieldCheck,
              title: { en: 'Human Checkpoints', ko: '휴먼 체크포인트' },
              description: {
                en: 'Critical decisions stay with you',
                ko: '중요한 결정은 당신의 몫',
              },
              href: '/docs/checkpoints',
              color: '#ff3366',
            },
            {
              icon: BookOpen,
              title: { en: 'Systematic Review', ko: '체계적 문헌고찰' },
              description: {
                en: 'PRISMA 2020 automation',
                ko: 'PRISMA 2020 자동화',
              },
              href: '/docs/systematic-review',
              color: '#44ffaa',
            },
            {
              icon: PenTool,
              title: { en: 'Humanization', ko: '휴먼화' },
              description: {
                en: 'Natural academic writing',
                ko: '자연스러운 학술 문체',
              },
              href: '/docs/humanization',
              color: '#ff8844',
            },
            {
              icon: Users,
              title: { en: '40 Agents', ko: '40개 에이전트' },
              description: {
                en: 'Complete research lifecycle',
                ko: '연구 전 과정 지원',
              },
              href: '/agents',
              color: '#9b59b6',
            },
          ].map((feature, index) => (
            <Link
              key={index}
              href={`/${locale}${feature.href}`}
              className="group p-4 bg-void-elevated border border-stellar-faint/10 hover:border-stellar-faint/30 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center border border-stellar-faint/20"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="h-4 w-4" style={{ color: feature.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-medium text-stellar-bright group-hover:text-stellar-core transition-colors">
                      {feature.title[locale]}
                    </h3>
                    {feature.isNew && (
                      <span className="px-1 py-0.5 text-[9px] font-mono uppercase bg-[#44ffaa]/20 text-[#44ffaa] border border-[#44ffaa]/30">
                        NEW
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stellar-faint">
                    {feature.description[locale]}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-stellar-faint/50 group-hover:text-stellar-dim transition-colors mt-2" />
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Divider */}
      <div className="border-b border-stellar-faint/10 mb-12" />

      {/* Resources Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-display text-stellar-core mb-8">
          {locale === 'ko' ? '추가 리소스' : 'Additional Resources'}
        </h2>

        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="https://github.com/HosungYou/Diverga"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10 hover:border-stellar-faint/30 transition-all"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-void-surface border border-stellar-faint/20">
              <Github className="h-5 w-5 text-stellar-dim" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-stellar-bright group-hover:text-stellar-core transition-colors">
                GitHub
              </h3>
              <p className="text-xs text-stellar-faint">
                {locale === 'ko' ? '소스 코드 보기' : 'View source code'}
              </p>
            </div>
            <ExternalLink className="h-4 w-4 text-stellar-faint/50" />
          </a>

          <Link
            href={`/${locale}/docs/changelog`}
            className="group flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10 hover:border-stellar-faint/30 transition-all"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-void-surface border border-stellar-faint/20">
              <Sparkles className="h-5 w-5 text-stellar-dim" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-stellar-bright group-hover:text-stellar-core transition-colors">
                {locale === 'ko' ? '변경 로그' : 'Changelog'}
              </h3>
              <p className="text-xs text-stellar-faint">
                {locale === 'ko' ? '최신 업데이트' : 'Latest updates'}
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-stellar-faint/50" />
          </Link>

          <Link
            href={`/${locale}/docs/cli`}
            className="group flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10 hover:border-stellar-faint/30 transition-all"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-void-surface border border-stellar-faint/20">
              <Terminal className="h-5 w-5 text-stellar-dim" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-stellar-bright group-hover:text-stellar-core transition-colors">
                {locale === 'ko' ? 'CLI 레퍼런스' : 'CLI Reference'}
              </h3>
              <p className="text-xs text-stellar-faint">
                {locale === 'ko' ? '명령어 문서' : 'Command docs'}
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-stellar-faint/50" />
          </Link>
        </div>
      </motion.section>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center pt-8 border-t border-stellar-faint/10"
      >
        <p className="text-xs text-stellar-faint font-mono uppercase tracking-wider">
          {locale === 'ko'
            ? '40개 에이전트 · 8개 카테고리 · VS 방법론'
            : '40 Agents · 8 Categories · VS Methodology'}
        </p>
      </motion.div>
    </div>
  );
}
