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
            // Special design for Human Checkpoints card
            if (section.href === '/docs/checkpoints') {
              return (
                <motion.div
                  key={section.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="relative overflow-hidden"
                >
                  <Link
                    href={`/${locale}${section.href}`}
                    className="group relative flex flex-col gap-4 rounded-xl border-2 border-gold-300 bg-gradient-to-br from-gold-50 via-white to-diverga-50 p-6 hover:border-gold-400 hover:shadow-2xl transition-all duration-500 min-h-[180px]"
                  >
                    {/* Glowing corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-200/40 to-transparent rounded-bl-[100px] pointer-events-none"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* NEW v6.0 badge */}
                    <motion.div
                      className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold tracking-wider shadow-lg"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      NEW v6.0
                    </motion.div>

                    <div className="flex items-start gap-4 relative z-10">
                      {/* Icon with glow effect */}
                      <motion.div
                        className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Hand className="h-6 w-6 text-white" />
                        {/* Glow ring */}
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gold-400 opacity-0 group-hover:opacity-50 blur-lg"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.3, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-gold-700 via-gold-600 to-diverga-600 group-hover:from-gold-800 group-hover:to-diverga-700 transition-all">
                            {section.title[locale]}
                          </h2>
                          <Sparkles className="h-4 w-4 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-gray-600 font-medium">
                          {section.description[locale]}
                        </p>
                      </div>
                    </div>

                    {/* Traffic light metaphor */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-white/80 rounded-lg border border-gold-200 relative z-10">
                      <div className="flex gap-1.5">
                        <motion.div
                          className="w-3 h-3 rounded-full bg-red-500 shadow-sm"
                          animate={{
                            boxShadow: [
                              '0 0 0 0 rgba(239, 68, 68, 0)',
                              '0 0 0 4px rgba(239, 68, 68, 0.3)',
                              '0 0 0 0 rgba(239, 68, 68, 0)',
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm" />
                      </div>
                      <div className="text-xs font-semibold text-gray-700 border-l border-gold-300 pl-3">
                        {locale === 'ko' ? '당신이 결정합니다. Diverga가 지원합니다.' : 'You Decide. Diverga Assists.'}
                      </div>
                    </div>

                    {/* Human-Centered badge */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-diverga-600 text-white text-[10px] font-bold tracking-wide shadow-md opacity-90">
                      {locale === 'ko' ? '인간 중심' : 'HUMAN-CENTERED'}
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
