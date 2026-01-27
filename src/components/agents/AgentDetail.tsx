"use client";

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Zap, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import { Agent, Category } from '@/lib/data/types';
import { TScoreBadge } from './TScoreBadge';
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
              <div className="flex items-center gap-3 mb-2">
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

        {/* Checkpoint */}
        {agent.checkpoint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-xl border-2 border-red-200 bg-red-50 p-5 mb-8"
          >
            <h2 className="flex items-center gap-2 font-semibold text-red-700 mb-2">
              {agent.checkpoint.level === 'REQUIRED' ? '🔴' :
               agent.checkpoint.level === 'RECOMMENDED' ? '🟠' : '🟡'}
              {t('checkpoint')}: {agent.checkpoint.id}
            </h2>
            <p className="text-sm text-red-600">
              {agent.checkpoint.level === 'REQUIRED'
                ? (locale === 'ko'
                    ? '이 체크포인트에서 시스템이 멈추고 명시적 승인을 기다립니다.'
                    : 'System STOPS at this checkpoint and waits for explicit approval.')
                : agent.checkpoint.level === 'RECOMMENDED'
                ? (locale === 'ko'
                    ? '시스템이 일시 정지하고 승인을 권장합니다.'
                    : 'System PAUSES and strongly suggests approval.')
                : (locale === 'ko'
                    ? '시스템이 묻지만 건너뛸 수 있습니다.'
                    : 'System ASKS but can be skipped.')}
            </p>
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
