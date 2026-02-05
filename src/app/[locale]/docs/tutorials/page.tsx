"use client";

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Rocket, Database, Clock, Star, Video, ExternalLink, ArrowRight } from 'lucide-react';

// Tutorial data
const tutorials = [
  {
    id: 'quick-start',
    title: { en: 'Quick Start Tutorial', ko: '빠른 시작 튜토리얼' },
    description: {
      en: 'Get your first Diverga agent running in 5 minutes. Step-by-step tutorial with examples.',
      ko: '5분 안에 첫 번째 Diverga 에이전트를 실행하세요. 예제가 포함된 단계별 튜토리얼.'
    },
    difficulty: 'beginner',
    duration: '5 min',
    icon: Rocket,
    href: '/docs/tutorials/quick-start',
    color: '#44ffaa'
  },
  {
    id: 'meta-analysis',
    title: { en: 'Meta-Analysis Pipeline', ko: '메타분석 파이프라인' },
    description: {
      en: 'Master the C5-C7 agents for systematic meta-analysis with data extraction and validation.',
      ko: 'C5-C7 에이전트를 활용한 체계적 메타분석 데이터 추출 및 검증.'
    },
    difficulty: 'advanced',
    duration: '45 min',
    icon: Database,
    href: '/docs/tutorials/meta-analysis',
    color: '#f39c12'
  }
];

// Coming soon tutorials
const comingSoon = [
  {
    id: 'scholarag',
    title: { en: 'ScholaRAG Workflow', ko: 'ScholaRAG 워크플로' },
    description: {
      en: 'PRISMA 2020 systematic literature review automation with I0-I4 agents.',
      ko: 'I0-I4 에이전트로 PRISMA 2020 체계적 문헌고찰 자동화.'
    },
    difficulty: 'advanced',
    duration: '60 min',
    icon: BookOpen,
    color: '#22ccff'
  },
  {
    id: 'humanization',
    title: { en: 'Humanization Pipeline', ko: '휴먼화 파이프라인' },
    description: {
      en: 'Transform AI-generated text into natural academic writing with G1-G6 agents.',
      ko: 'G1-G6 에이전트로 AI 생성 텍스트를 자연스러운 학술 문체로 변환.'
    },
    difficulty: 'intermediate',
    duration: '30 min',
    icon: Star,
    color: '#ff8844'
  }
];

// Difficulty badge styles
const difficultyStyles = {
  beginner: {
    label: { en: 'Beginner', ko: '초급' },
    color: '#44ffaa',
    bg: 'bg-[#44ffaa]/10',
    border: 'border-[#44ffaa]/30',
    text: 'text-[#44ffaa]'
  },
  intermediate: {
    label: { en: 'Intermediate', ko: '중급' },
    color: '#22ccff',
    bg: 'bg-[#22ccff]/10',
    border: 'border-[#22ccff]/30',
    text: 'text-[#22ccff]'
  },
  advanced: {
    label: { en: 'Advanced', ko: '고급' },
    color: '#f39c12',
    bg: 'bg-[#f39c12]/10',
    border: 'border-[#f39c12]/30',
    text: 'text-[#f39c12]'
  }
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function TutorialsPage() {
  const locale = useLocale() as 'en' | 'ko';

  // Build href with locale prefix only for non-default locales
  const buildHref = (path: string) => {
    if (locale === 'en') {
      return path;
    }
    return `/${locale}${path}`;
  };

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
          <BookOpen className="h-3 w-3 text-[#44ffaa]" />
          <span className="font-mono text-xs uppercase tracking-widest text-stellar-faint">
            {locale === 'ko' ? '튜토리얼' : 'Tutorials'}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-display text-stellar-core mb-4">
          {locale === 'ko' ? 'Diverga 마스터하기' : 'Master Diverga'}
        </h1>

        <p className="text-lg text-stellar-dim max-w-2xl">
          {locale === 'ko'
            ? '실습 가이드로 Diverga를 배워보세요. 초보자부터 고급 사용자까지 모든 레벨에 맞는 튜토리얼을 제공합니다.'
            : 'Learn Diverga with hands-on guides. From beginner to advanced, tutorials for every level.'}
        </p>
      </motion.div>

      {/* Divider */}
      <div className="void-divider-glow mb-12" />

      {/* Available Tutorials */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <h2 className="text-2xl font-display text-stellar-core mb-8">
          {locale === 'ko' ? '이용 가능한 튜토리얼' : 'Available Tutorials'}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {tutorials.map((tutorial) => {
            const diffStyle = difficultyStyles[tutorial.difficulty as keyof typeof difficultyStyles];
            const Icon = tutorial.icon;

            return (
              <motion.div key={tutorial.id} variants={itemVariants}>
                <Link
                  href={buildHref(tutorial.href)}
                  className="group block h-full p-6 bg-void-elevated border border-stellar-faint/10 hover:border-stellar-faint/30 transition-all duration-300"
                >
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center border border-stellar-faint/20"
                      style={{ backgroundColor: `${tutorial.color}15` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: tutorial.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-stellar-bright group-hover:text-stellar-core transition-colors">
                        {tutorial.title[locale]}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-stellar-dim mb-4">
                    {tutorial.description[locale]}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 text-xs font-mono uppercase border ${diffStyle.bg} ${diffStyle.border} ${diffStyle.text}`}>
                      {diffStyle.label[locale]}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-stellar-faint">
                      <Clock className="h-3 w-3" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-stellar-faint/50 group-hover:text-stellar-dim group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Divider */}
      <div className="border-b border-stellar-faint/10 mb-12" />

      {/* Coming Soon */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-display text-stellar-core">
            {locale === 'ko' ? '준비 중' : 'Coming Soon'}
          </h2>
          <div className="h-2 w-2 rounded-full bg-[#ff8844] animate-pulse" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {comingSoon.map((tutorial) => {
            const diffStyle = difficultyStyles[tutorial.difficulty as keyof typeof difficultyStyles];
            const Icon = tutorial.icon;

            return (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative p-6 bg-void-surface border border-stellar-faint/10 opacity-60"
              >
                {/* Coming Soon Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 text-xs font-mono uppercase bg-[#ff8844]/20 text-[#ff8844] border border-[#ff8844]/30">
                  {locale === 'ko' ? '준비 중' : 'Soon'}
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center border border-stellar-faint/20"
                    style={{ backgroundColor: `${tutorial.color}15` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: tutorial.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-stellar-bright">
                      {tutorial.title[locale]}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-stellar-dim mb-4">
                  {tutorial.description[locale]}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 text-xs font-mono uppercase border ${diffStyle.bg} ${diffStyle.border} ${diffStyle.text}`}>
                    {diffStyle.label[locale]}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-stellar-faint">
                    <Clock className="h-3 w-3" />
                    <span>{tutorial.duration}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Divider */}
      <div className="border-b border-stellar-faint/10 mb-12" />

      {/* Video Tutorials (Placeholder) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-8">
          <Video className="h-6 w-6 text-[#22ccff]" />
          <h2 className="text-2xl font-display text-stellar-core">
            {locale === 'ko' ? '비디오 튜토리얼' : 'Video Tutorials'}
          </h2>
        </div>

        <div className="p-8 bg-void-surface border border-stellar-faint/10 text-center">
          <Video className="h-12 w-12 text-stellar-faint/30 mx-auto mb-4" />
          <p className="text-stellar-dim mb-2">
            {locale === 'ko'
              ? '비디오 튜토리얼이 곧 제공될 예정입니다.'
              : 'Video tutorials coming soon.'}
          </p>
          <p className="text-sm text-stellar-faint">
            {locale === 'ko'
              ? '실시간 워크플로 데모와 단계별 가이드를 준비하고 있습니다.'
              : 'We\'re preparing live workflow demos and step-by-step guides.'}
          </p>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="border-b border-stellar-faint/10 mb-12" />

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 bg-void-elevated border border-stellar-faint/10"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-display text-stellar-core mb-2">
              {locale === 'ko' ? '도움이 필요하신가요?' : 'Need Help?'}
            </h3>
            <p className="text-sm text-stellar-dim">
              {locale === 'ko'
                ? '문서를 확인하거나 GitHub에서 이슈를 제출하세요.'
                : 'Check the documentation or open an issue on GitHub.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={buildHref('/docs')}
              className="void-btn void-btn-secondary inline-flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              {locale === 'ko' ? '문서 보기' : 'View Docs'}
            </Link>
            <a
              href="https://github.com/HosungYou/Diverga/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="void-btn void-btn-ghost inline-flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center pt-8 border-t border-stellar-faint/10 mt-12"
      >
        <p className="text-xs text-stellar-faint font-mono uppercase tracking-wider">
          {locale === 'ko'
            ? '실습으로 배우기 · 단계별 가이드 · 실제 예제'
            : 'Learn by Doing · Step-by-Step · Real Examples'}
        </p>
      </motion.div>
    </div>
  );
}
