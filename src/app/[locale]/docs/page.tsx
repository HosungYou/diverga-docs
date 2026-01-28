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
          {docSections.map((section, index) => {
            // Special design for Human Checkpoints card - Indigo/Gold border accent
            if (section.href === '/docs/checkpoints') {
              return (
                <motion.div
                  key={section.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  whileHover={{ y: -4 }}
                  className="relative"
                >
                  <Link
                    href={`/${locale}${section.href}`}
                    className="group relative flex flex-col gap-4 rounded-xl bg-white p-6
                      border-2 border-indigo-200 hover:border-gold-400
                      shadow-[0_1px_3px_rgba(0,0,0,0.1)]
                      hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]
                      transition-all duration-200 min-h-[200px]"
                  >
                    {/* NEW v6.0 badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gold-500 text-white text-xs font-bold tracking-wider">
                      NEW v6.0
                    </div>

                    <div className="flex items-start gap-4 relative z-10">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 group-hover:bg-gold-100 transition-colors">
                        <Hand className="h-6 w-6 text-indigo-600 group-hover:text-gold-600 transition-colors" />
                      </div>

                      <div className="flex-1">
                        <h2 className="font-bold text-lg text-gray-900 group-hover:text-gold-700 transition-colors mb-1.5">
                          {section.title[locale]}
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {section.description[locale]}
                        </p>
                      </div>
                    </div>

                    {/* Traffic light metaphor */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                        <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                        <div className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
                      </div>
                      <div className="text-xs font-semibold text-gray-700 border-l-2 border-indigo-400 pl-3">
                        {locale === 'ko' ? '당신이 결정합니다. Diverga가 지원합니다.' : 'You Decide. Diverga Assists.'}
                      </div>
                    </div>

                    {/* Human-Centered badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-md bg-diverga-600 text-white text-[10px] font-bold tracking-widest">
                      {locale === 'ko' ? '인간 중심' : 'HUMAN-CENTERED'}
                    </div>
                  </Link>
                </motion.div>
              );
            }

            // VS Methodology card - Teal border accent
            if (section.href === '/docs/vs-methodology') {
              return (
                <motion.div
                  key={section.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  whileHover={{ y: -4 }}
                >
                  <Link
                    href={`/${locale}${section.href}`}
                    className="group relative flex items-start gap-5 rounded-xl bg-white p-6
                      shadow-[0_1px_3px_rgba(0,0,0,0.1)]
                      hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]
                      border-2 border-gray-100 hover:border-teal-400
                      transition-all duration-200 min-h-[200px]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 group-hover:bg-teal-200 transition-colors">
                      <section.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-bold text-lg text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                        {section.title[locale]}
                      </h2>
                      <p className="text-sm text-gray-600 leading-relaxed">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                whileHover={{ y: -4 }}
              >
                <Link
                  href={`/${locale}${section.href}`}
                  className="group flex items-start gap-5 rounded-xl bg-white p-6
                    shadow-[0_1px_3px_rgba(0,0,0,0.1)]
                    hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]
                    border border-gray-100
                    transition-all duration-200"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-diverga-100 group-hover:bg-diverga-200 transition-colors">
                    <section.icon className="h-6 w-6 text-diverga-600" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-gray-900 group-hover:text-diverga-600 transition-colors mb-2">
                      {section.title[locale]}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {section.description[locale]}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
