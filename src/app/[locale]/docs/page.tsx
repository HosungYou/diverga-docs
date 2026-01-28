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
            // Special design for Human Checkpoints card - Gold gradient with glow
            if (section.href === '/docs/checkpoints') {
              return (
                <motion.div
                  key={section.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden"
                >
                  <Link
                    href={`/${locale}${section.href}`}
                    className="group relative flex flex-col gap-4 rounded-[20px] bg-gradient-to-br from-gold-50 via-white to-gold-50 p-8
                      shadow-[0_4px_6px_-1px_rgba(217,119,6,0.1),0_10px_15px_-3px_rgba(217,119,6,0.15),0_0_0_1px_rgba(217,119,6,0.1)]
                      hover:shadow-[0_20px_40px_-10px_rgba(217,119,6,0.25),0_0_0_2px_rgba(217,119,6,0.15)]
                      transition-all duration-300 min-h-[200px]"
                  >
                    {/* Glowing corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gold-200/40 via-gold-100/20 to-transparent rounded-bl-[120px] pointer-events-none"
                      animate={{
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* NEW v6.0 badge */}
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold tracking-wider
                        shadow-[0_4px_12px_rgba(217,119,6,0.4)]"
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          '0 4px 12px rgba(217,119,6,0.4)',
                          '0 6px 16px rgba(217,119,6,0.5)',
                          '0 4px 12px rgba(217,119,6,0.4)',
                        ],
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
                        className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600
                          shadow-[0_8px_16px_rgba(217,119,6,0.3)]"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Hand className="h-7 w-7 text-white" />
                        {/* Glow ring */}
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gold-400 opacity-0 group-hover:opacity-50 blur-xl"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0, 0.4, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <h2 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-gold-700 via-gold-600 to-diverga-600 group-hover:from-gold-800 group-hover:to-diverga-700 transition-all">
                            {section.title[locale]}
                          </h2>
                          <Sparkles className="h-5 w-5 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">
                          {section.description[locale]}
                        </p>
                      </div>
                    </div>

                    {/* Traffic light metaphor */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-white/90 rounded-xl border border-gold-200 relative z-10
                      shadow-[0_2px_8px_rgba(217,119,6,0.1)]">
                      <div className="flex gap-2">
                        <motion.div
                          className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-md"
                          animate={{
                            boxShadow: [
                              '0 0 0 0 rgba(239, 68, 68, 0)',
                              '0 0 0 5px rgba(239, 68, 68, 0.3)',
                              '0 0 0 0 rgba(239, 68, 68, 0)',
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <div className="w-3.5 h-3.5 rounded-full bg-amber-500 shadow-md" />
                        <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-md" />
                      </div>
                      <div className="text-xs font-bold text-gray-800 border-l-2 border-gold-400 pl-3">
                        {locale === 'ko' ? '당신이 결정합니다. Diverga가 지원합니다.' : 'You Decide. Diverga Assists.'}
                      </div>
                    </div>

                    {/* Human-Centered badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-diverga-600 text-white text-[10px] font-bold tracking-widest
                      shadow-[0_4px_12px_rgba(20,184,166,0.4)]">
                      {locale === 'ko' ? '인간 중심' : 'HUMAN-CENTERED'}
                    </div>
                  </Link>
                </motion.div>
              );
            }

            // VS Methodology card - Teal accent
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
                    className="group relative flex items-start gap-5 rounded-[20px] bg-white p-8
                      shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]
                      hover:shadow-[0_20px_40px_-10px_rgba(20,184,166,0.2)]
                      border border-gray-100 hover:border-teal-200
                      transition-all duration-300 min-h-[200px]"
                  >
                    {/* Teal accent corner */}
                    <motion.div
                      className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-100/60 to-transparent rounded-bl-[60px]"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    />

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-600
                      shadow-[0_4px_12px_rgba(20,184,166,0.3)]">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-bold text-lg text-[var(--foreground)] group-hover:text-teal-600 transition-colors mb-2">
                        {section.title[locale]}
                      </h2>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {section.description[locale]}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            }

            // Regular card design for other sections - Brevian style
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
                  className="group flex items-start gap-5 rounded-[20px] bg-white p-8
                    shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]
                    hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)]
                    border border-gray-100
                    transition-all duration-300"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-diverga-100 group-hover:bg-diverga-200 transition-colors">
                    <section.icon className="h-6 w-6 text-diverga-600" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-[var(--foreground)] group-hover:text-diverga-600 transition-colors mb-2">
                      {section.title[locale]}
                    </h2>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
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
