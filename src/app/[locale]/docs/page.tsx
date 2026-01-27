"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Zap, Shield, Code } from 'lucide-react';

const docSections = [
  {
    icon: BookOpen,
    title: { en: 'Getting Started', ko: '시작하기' },
    description: { en: 'Installation, setup, and first steps', ko: '설치, 설정 및 첫 단계' },
    href: '/getting-started',
  },
  {
    icon: Zap,
    title: { en: 'VS Methodology', ko: 'VS 방법론' },
    description: { en: 'Understanding T-Scores and creative alternatives', ko: 'T-Score와 창의적 대안 이해하기' },
    href: '/docs/vs-methodology',
  },
  {
    icon: Shield,
    title: { en: 'Human Checkpoints', ko: '인간 체크포인트' },
    description: { en: 'How the checkpoint system works', ko: '체크포인트 시스템 작동 방식' },
    href: '/docs/checkpoints',
  },
  {
    icon: Code,
    title: { en: 'Agent Reference', ko: '에이전트 레퍼런스' },
    description: { en: 'Complete API reference for all 40 agents', ko: '40개 에이전트 전체 API 레퍼런스' },
    href: '/agents',
  },
];

export default function DocsPage() {
  const locale = useLocale() as 'en' | 'ko';

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-h1 font-bold text-[var(--foreground)]"
          >
            {locale === 'ko' ? '문서' : 'Documentation'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-[var(--muted-foreground)]"
          >
            {locale === 'ko'
              ? 'Diverga를 최대한 활용하는 방법 배우기'
              : 'Learn how to get the most out of Diverga'}
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {docSections.map((section, index) => (
            <motion.div
              key={section.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link
                href={`/${locale}${section.href}`}
                className="group flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 hover:border-diverga-300 hover:shadow-md transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-diverga-100">
                  <section.icon className="h-5 w-5 text-diverga-600" />
                </div>
                <div>
                  <h2 className="font-semibold text-[var(--foreground)] group-hover:text-diverga-600 transition-colors">
                    {section.title[locale]}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                    {section.description[locale]}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
