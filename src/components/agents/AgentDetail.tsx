"use client";

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Zap, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import { Agent, Category } from '@/lib/data/types';
import { TScoreBadge } from './TScoreBadge';
import { CheckpointBadge } from './CheckpointBadge';
import { cn } from '@/lib/utils/cn';

interface AgentDetailProps {
  agent: Agent;
  category: Category;
  relatedAgents: Agent[];
}

const tierColors = {
  HIGH: 'bg-purple-100 text-purple-700 border-purple-200',
  MEDIUM: 'bg-blue-100 text-blue-700 border-blue-200',
  LOW: 'bg-gray-100 text-gray-700 border-gray-200',
};

const tierLabels = {
  HIGH: 'Opus',
  MEDIUM: 'Sonnet',
  LOW: 'Haiku',
};

const paradigmLabels = {
  quantitative: { en: 'Quantitative', ko: '양적 연구' },
  qualitative: { en: 'Qualitative', ko: '질적 연구' },
  mixed: { en: 'Mixed Methods', ko: '혼합 방법' },
};

export function AgentDetail({ agent, category, relatedAgents }: AgentDetailProps) {
  const locale = useLocale() as 'en' | 'ko';
  const t = useTranslations('agents');

  const categoryGradients: Record<string, string> = {
    A: 'from-[oklch(0.35_0.15_270)] via-[oklch(0.25_0.15_270)] to-[oklch(0.20_0.1_270)]',
    B: 'from-[oklch(0.35_0.15_295)] via-[oklch(0.25_0.15_295)] to-[oklch(0.20_0.1_295)]',
    C: 'from-[oklch(0.35_0.15_175)] via-[oklch(0.25_0.15_175)] to-[oklch(0.20_0.1_175)]',
    D: 'from-[oklch(0.35_0.15_55)] via-[oklch(0.25_0.15_55)] to-[oklch(0.20_0.1_55)]',
    E: 'from-[oklch(0.35_0.15_25)] via-[oklch(0.25_0.15_25)] to-[oklch(0.20_0.1_25)]',
    F: 'from-[oklch(0.35_0.15_200)] via-[oklch(0.25_0.15_200)] to-[oklch(0.20_0.1_200)]',
    G: 'from-[oklch(0.35_0.15_330)] via-[oklch(0.25_0.15_330)] to-[oklch(0.20_0.1_330)]',
    H: 'from-[oklch(0.35_0.15_125)] via-[oklch(0.25_0.15_125)] to-[oklch(0.20_0.1_125)]',
  };

  return (
    <div>
      {/* Dark Hero Section */}
      <div className={cn(
        "relative py-16 sm:py-20 bg-gradient-to-br overflow-hidden",
        categoryGradients[agent.category]
      )}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/70">
            <Link href={`/${locale}/agents`} className="hover:text-white transition-colors">
              {t('title')}
            </Link>
            <span>/</span>
            <Link
              href={`/${locale}/agents?category=${category.id}`}
              className="hover:text-white transition-colors"
            >
              {category.name[locale]}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{agent.id}</span>
          </nav>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-6"
          >
            <motion.span
              className="text-6xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              {agent.icon}
            </motion.span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="font-mono text-base text-white/90 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  {agent.id}
                </span>
                <span className={cn(
                  "rounded-full border-2 px-3 py-1 text-xs font-bold backdrop-blur-sm",
                  agent.tier === 'HIGH' && "border-purple-300 bg-purple-500/20 text-purple-100",
                  agent.tier === 'MEDIUM' && "border-blue-300 bg-blue-500/20 text-blue-100",
                  agent.tier === 'LOW' && "border-gray-300 bg-gray-500/20 text-gray-100"
                )}>
                  {tierLabels[agent.tier]}
                </span>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <TScoreBadge vsLevel={agent.vsLevel} />
                </div>
                {agent.checkpoint && agent.checkpoint.level && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1"
                  >
                    <CheckpointBadge
                      checkpointId={agent.checkpoint.id}
                      level={agent.checkpoint.level}
                      locale={locale}
                      variant="compact"
                    />
                  </motion.div>
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {agent.name[locale]}
              </h1>
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                {agent.description[locale]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Glass-morphism Info Cards */}
        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          {/* Purpose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative rounded-[20px] bg-white/80 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <h2 className="flex items-center gap-2 font-bold text-gray-900 mb-3 text-lg">
                <div className="p-2 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                {locale === 'ko' ? '목적' : 'Purpose'}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {agent.purpose[locale]}
              </p>
            </div>
          </motion.div>

          {/* Paradigms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-[20px] bg-white/80 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <h2 className="flex items-center gap-2 font-bold text-gray-900 mb-3 text-lg">
                <div className="p-2 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg">
                  <GitBranch className="h-5 w-5 text-white" />
                </div>
                {locale === 'ko' ? '지원 패러다임' : 'Supported Paradigms'}
              </h2>
              <div className="flex flex-wrap gap-2">
                {agent.paradigms.map((p, i) => (
                  <motion.span
                    key={p}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="rounded-full bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1.5 text-sm font-medium text-gray-800 border border-gray-300/50"
                  >
                    {paradigmLabels[p][locale]}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative rounded-[20px] bg-white/80 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 mb-8 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-diverga-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative">
            <h2 className="font-bold text-gray-900 mb-4 text-lg">
              {t('triggers')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {agent.triggers[locale].split(', ').map((trigger, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full bg-gradient-to-r from-diverga-500 to-diverga-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                >
                  {trigger}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Checkpoint Section - Floating Badge */}
        {agent.checkpoint && agent.checkpoint.level && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className={cn(
              "relative rounded-[24px] p-8 mb-8 overflow-hidden shadow-xl",
              agent.checkpoint.level === 'REQUIRED' && "bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700",
              agent.checkpoint.level === 'RECOMMENDED' && "bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700",
              agent.checkpoint.level === 'OPTIONAL' && "bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700"
            )}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)',
                backgroundSize: '48px 48px'
              }} />
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 shadow-lg"
                >
                  {agent.checkpoint.level && (
                    <CheckpointBadge
                      checkpointId={agent.checkpoint.id}
                      level={agent.checkpoint.level}
                      locale={locale}
                      variant="full"
                    />
                  )}
                </motion.div>
              </div>

              <div className="text-sm leading-relaxed text-white/95 bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-inner">
                {agent.checkpoint.level === 'REQUIRED'
                  ? (locale === 'ko'
                      ? '이 에이전트는 중요한 연구 결정에서 실행을 중지하고 명시적 승인을 기다립니다. 이는 AI가 자동으로 진행하기 전에 인간의 판단이 필요한 중요한 선택임을 의미합니다.'
                      : 'This agent STOPS execution at critical research decisions and waits for explicit approval. This ensures human judgment is applied before AI proceeds with important choices.')
                  : agent.checkpoint.level === 'RECOMMENDED'
                  ? (locale === 'ko'
                      ? '이 에이전트는 중요한 지점에서 일시 정지하고 검토를 강력히 권장합니다. 승인 없이 계속할 수 있지만, 검토가 연구 품질을 향상시킵니다.'
                      : 'This agent PAUSES at important points and strongly recommends review. You can proceed without approval, but review improves research quality.')
                  : (locale === 'ko'
                      ? '이 에이전트는 선택사항을 제시하지만 승인 없이 계속할 수 있습니다. 검토는 선택사항이지만 권장됩니다.'
                      : 'This agent presents options but can proceed without approval. Review is optional but recommended.')}
              </div>
            </div>
          </motion.div>
        )}

        {/* Related Agents */}
        {relatedAgents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="font-bold text-gray-900 mb-6 text-2xl">
              {t('relatedAgents')}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedAgents.map((related, i) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <Link href={`/${locale}/agents/${related.slug}`}>
                    <motion.div
                      whileHover={{ x: 4, scale: 1.02 }}
                      className="flex items-center gap-4 rounded-[20px] bg-white/80 backdrop-blur-xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-white/50 group overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-diverga-500/0 to-diverga-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.span
                        className="text-3xl relative z-10"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {related.icon}
                      </motion.span>
                      <div className="flex-1 relative z-10">
                        <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {related.id}
                        </span>
                        <h3 className="font-bold text-gray-900 group-hover:text-diverga-600 transition-colors mt-1">
                          {related.name[locale]}
                        </h3>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-diverga-500 transition-colors relative z-10" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back link */}
        <div className="mt-12 pt-8">
          <Link href={`/${locale}/agents`}>
            <motion.div
              whileHover={{ x: -4 }}
              className="inline-flex items-center gap-2 text-diverga-600 hover:text-diverga-700 font-bold text-lg group"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              {locale === 'ko' ? '모든 에이전트 보기' : 'View all agents'}
            </motion.div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
