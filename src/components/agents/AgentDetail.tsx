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
    A: 'from-indigo-50 via-purple-50 to-blue-50',
    B: 'from-purple-50 via-pink-50 to-purple-50',
    C: 'from-emerald-50 via-teal-50 to-cyan-50',
    D: 'from-amber-50 via-orange-50 to-yellow-50',
    E: 'from-rose-50 via-pink-50 to-red-50',
    F: 'from-cyan-50 via-sky-50 to-blue-50',
    G: 'from-fuchsia-50 via-purple-50 to-pink-50',
    H: 'from-lime-50 via-green-50 to-emerald-50',
  };

  return (
    <div>
      {/* Light Hero Section */}
      <div className={cn(
        "relative py-16 sm:py-20 bg-gradient-to-br overflow-hidden",
        categoryGradients[agent.category]
      )}>
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.05) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${locale}/agents`} className="hover:text-gray-900 transition-colors">
              {t('title')}
            </Link>
            <span>/</span>
            <Link
              href={`/${locale}/agents?category=${category.id}`}
              className="hover:text-gray-900 transition-colors"
            >
              {category.name[locale]}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{agent.id}</span>
          </nav>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-6"
          >
            <span className="text-6xl">
              {agent.icon}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="font-mono text-sm text-gray-600 bg-white/80 px-3 py-1 rounded-lg border border-gray-200">
                  {agent.id}
                </span>
                <span className={cn(
                  "rounded-lg border px-2.5 py-1 text-xs font-medium bg-white/80",
                  tierColors[agent.tier]
                )}>
                  {tierLabels[agent.tier]}
                </span>
                <div className="bg-white/80 rounded-lg px-2.5 py-1 border border-gray-200">
                  <TScoreBadge vsLevel={agent.vsLevel} />
                </div>
                {agent.checkpoint && agent.checkpoint.level && (
                  <div className="bg-white/80 rounded-lg px-2.5 py-1 border border-gray-200">
                    <CheckpointBadge
                      checkpointId={agent.checkpoint.id}
                      level={agent.checkpoint.level}
                      locale={locale}
                      variant="compact"
                    />
                  </div>
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {agent.name[locale]}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                {agent.description[locale]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Clean Info Cards */}
        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          {/* Purpose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] border border-gray-100"
          >
            <h2 className="flex items-center gap-2 font-semibold text-gray-900 mb-3 text-base">
              <div className="p-1.5 rounded-lg bg-indigo-100">
                <Zap className="h-4 w-4 text-indigo-600" />
              </div>
              {locale === 'ko' ? '목적' : 'Purpose'}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {agent.purpose[locale]}
            </p>
          </motion.div>

          {/* Paradigms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] border border-gray-100"
          >
            <h2 className="flex items-center gap-2 font-semibold text-gray-900 mb-3 text-base">
              <div className="p-1.5 rounded-lg bg-teal-100">
                <GitBranch className="h-4 w-4 text-teal-600" />
              </div>
              {locale === 'ko' ? '지원 패러다임' : 'Supported Paradigms'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {agent.paradigms.map((p) => (
                <span
                  key={p}
                  className="rounded-lg bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-200"
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
          transition={{ delay: 0.3 }}
          className="rounded-xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] border border-gray-100 mb-8"
        >
          <h2 className="font-semibold text-gray-900 mb-4 text-base">
            {t('triggers')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {agent.triggers[locale].split(', ').map((trigger, i) => (
              <span
                key={i}
                className="rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 border border-indigo-100"
              >
                {trigger}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Checkpoint Section */}
        {agent.checkpoint && agent.checkpoint.level && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={cn(
              "rounded-xl p-6 mb-8 border-2",
              agent.checkpoint.level === 'REQUIRED' && "bg-rose-50 border-rose-200",
              agent.checkpoint.level === 'RECOMMENDED' && "bg-amber-50 border-amber-200",
              agent.checkpoint.level === 'OPTIONAL' && "bg-yellow-50 border-yellow-200"
            )}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className={cn(
                "rounded-lg p-2",
                agent.checkpoint.level === 'REQUIRED' && "bg-rose-100",
                agent.checkpoint.level === 'RECOMMENDED' && "bg-amber-100",
                agent.checkpoint.level === 'OPTIONAL' && "bg-yellow-100"
              )}>
                {agent.checkpoint.level && (
                  <CheckpointBadge
                    checkpointId={agent.checkpoint.id}
                    level={agent.checkpoint.level}
                    locale={locale}
                    variant="full"
                  />
                )}
              </div>
            </div>

            <p className={cn(
              "text-sm leading-relaxed",
              agent.checkpoint.level === 'REQUIRED' && "text-rose-800",
              agent.checkpoint.level === 'RECOMMENDED' && "text-amber-800",
              agent.checkpoint.level === 'OPTIONAL' && "text-yellow-800"
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
            </p>
          </motion.div>
        )}

        {/* Related Agents */}
        {relatedAgents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="font-semibold text-gray-900 mb-6 text-xl">
              {t('relatedAgents')}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedAgents.map((related) => (
                <div key={related.id}>
                  <Link href={`/${locale}/agents/${related.slug}`}>
                    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] border border-gray-100 group hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] transition-all">
                      <span className="text-2xl">
                        {related.icon}
                      </span>
                      <div className="flex-1">
                        <span className="text-xs font-mono text-gray-500">
                          {related.id}
                        </span>
                        <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors mt-0.5">
                          {related.name[locale]}
                        </h3>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href={`/${locale}/agents`}>
            <div className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium group">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {locale === 'ko' ? '모든 에이전트 보기' : 'View all agents'}
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
