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

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
          <Link href={`/${locale}/agents`} className="hover:text-diverga-600">
            {t('title')}
          </Link>
          <span>/</span>
          <Link
            href={`/${locale}/agents?category=${category.id}`}
            className="hover:text-diverga-600"
          >
            {category.name[locale]}
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)]">{agent.id}</span>
        </nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-start gap-4">
            <span className="text-5xl">{agent.icon}</span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="font-mono text-lg text-[var(--muted-foreground)]">
                  {agent.id}
                </span>
                <span className={cn(
                  "rounded-md border px-2 py-1 text-xs font-medium",
                  tierColors[agent.tier]
                )}>
                  {tierLabels[agent.tier]}
                </span>
                <TScoreBadge vsLevel={agent.vsLevel} />
                {agent.checkpoint && agent.checkpoint.level && (
                  <CheckpointBadge
                    checkpointId={agent.checkpoint.id}
                    level={agent.checkpoint.level}
                    locale={locale}
                    variant="compact"
                  />
                )}
              </div>
              <h1 className="text-h1 font-bold text-[var(--foreground)]">
                {agent.name[locale]}
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-gray max-w-none mb-8"
        >
          <p className="text-lg text-[var(--muted-foreground)]">
            {agent.description[locale]}
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          {/* Purpose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5"
          >
            <h2 className="flex items-center gap-2 font-semibold text-[var(--foreground)] mb-3">
              <Zap className="h-5 w-5 text-gold-500" />
              {locale === 'ko' ? '목적' : 'Purpose'}
            </h2>
            <p className="text-sm text-[var(--muted-foreground)]">
              {agent.purpose[locale]}
            </p>
          </motion.div>

          {/* Paradigms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5"
          >
            <h2 className="flex items-center gap-2 font-semibold text-[var(--foreground)] mb-3">
              <GitBranch className="h-5 w-5 text-teal-500" />
              {locale === 'ko' ? '지원 패러다임' : 'Supported Paradigms'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {agent.paradigms.map((p) => (
                <span
                  key={p}
                  className="rounded-md bg-[var(--muted)] px-2 py-1 text-sm text-[var(--muted-foreground)]"
                >
                  {paradigmLabels[p][locale]}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 mb-8"
        >
          <h2 className="font-semibold text-[var(--foreground)] mb-3">
            {t('triggers')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {agent.triggers[locale].split(', ').map((trigger, i) => (
              <span
                key={i}
                className="rounded-full bg-diverga-100 px-3 py-1 text-sm font-medium text-diverga-700"
              >
                {trigger}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Checkpoint Section - Enhanced */}
        {agent.checkpoint && agent.checkpoint.level && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={cn(
              "rounded-xl border-2 p-6 mb-8 relative overflow-hidden",
              agent.checkpoint.level === 'REQUIRED' && "border-rose-300 bg-gradient-to-br from-rose-50 to-rose-100/50",
              agent.checkpoint.level === 'RECOMMENDED' && "border-amber-300 bg-gradient-to-br from-amber-50 to-amber-100/50",
              agent.checkpoint.level === 'OPTIONAL' && "border-yellow-300 bg-gradient-to-br from-yellow-50 to-yellow-100/50"
            )}
          >
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="checkpoint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#checkpoint-grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                {agent.checkpoint.level && (
                  <CheckpointBadge
                    checkpointId={agent.checkpoint.id}
                    level={agent.checkpoint.level}
                    locale={locale}
                    variant="full"
                  />
                )}
              </div>

              <div className={cn(
                "text-sm leading-relaxed",
                agent.checkpoint.level === 'REQUIRED' && "text-rose-700",
                agent.checkpoint.level === 'RECOMMENDED' && "text-amber-700",
                agent.checkpoint.level === 'OPTIONAL' && "text-yellow-700"
              )}>
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
            transition={{ delay: 0.6 }}
          >
            <h2 className="font-semibold text-[var(--foreground)] mb-4">
              {t('relatedAgents')}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedAgents.map((related) => (
                <Link
                  key={related.id}
                  href={`/${locale}/agents/${related.slug}`}
                  className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 hover:border-diverga-300 transition-colors group"
                >
                  <span className="text-2xl">{related.icon}</span>
                  <div className="flex-1">
                    <span className="text-xs font-mono text-[var(--muted-foreground)]">
                      {related.id}
                    </span>
                    <h3 className="font-medium text-[var(--foreground)] group-hover:text-diverga-600">
                      {related.name[locale]}
                    </h3>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--muted-foreground)] group-hover:text-diverga-500" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <Link
            href={`/${locale}/agents`}
            className="inline-flex items-center gap-2 text-diverga-600 hover:text-diverga-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === 'ko' ? '모든 에이전트 보기' : 'View all agents'}
          </Link>
        </div>
      </div>
    </div>
  );
}
