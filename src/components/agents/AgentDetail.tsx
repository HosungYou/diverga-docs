"use client";

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Zap, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import { Agent, Category, ExtendedAgentContent } from '@/lib/data/types';
import { TScoreBadge } from './TScoreBadge';
import { CheckpointBadge } from './CheckpointBadge';
import { AgentDetailSections } from './AgentDetailSections';
import { cn } from '@/lib/utils/cn';

interface AgentDetailProps {
  agent: Agent;
  category: Category;
  relatedAgents: Agent[];
  extendedContent?: ExtendedAgentContent;
}

const tierColors = {
  HIGH: 'bg-void-surface text-[#9b59b6] border-[#9b59b6]/30',
  MEDIUM: 'bg-void-surface text-[#4d96ff] border-[#4d96ff]/30',
  LOW: 'bg-void-surface text-[#8888aa] border-[#8888aa]/30',
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

export function AgentDetail({ agent, category, relatedAgents, extendedContent }: AgentDetailProps) {
  const locale = useLocale() as 'en' | 'ko';
  const t = useTranslations('agents');

  const categoryColors: Record<string, string> = {
    A: '#ff6b6b',
    B: '#ffd93d',
    C: '#6bcb77',
    D: '#4d96ff',
    E: '#9b59b6',
    F: '#e17055',
    G: '#00cec9',
    H: '#fd79a8',
  };

  return (
    <div className="bg-void-deep min-h-screen">
      {/* Void Hero Section */}
      <div className="relative py-16 sm:py-20 bg-void-surface overflow-hidden border-b border-stellar-faint/10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(136 136 170 / 0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        {/* Category glow accent */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: categoryColors[agent.category] }}
        />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-stellar-dim font-mono">
            <Link href={`/${locale}/agents`} className="hover:text-stellar-bright transition-colors">
              {t('title')}
            </Link>
            <span>/</span>
            <Link
              href={`/${locale}/agents?category=${category.id}`}
              className="hover:text-stellar-bright transition-colors"
            >
              {category.name[locale]}
            </Link>
            <span>/</span>
            <span className="text-stellar-core font-medium">{agent.id}</span>
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
                <span
                  className="font-mono text-sm px-3 py-1 rounded-lg border"
                  style={{
                    backgroundColor: 'rgba(10, 10, 15, 0.8)',
                    color: categoryColors[agent.category],
                    borderColor: `${categoryColors[agent.category]}40`
                  }}
                >
                  {agent.id}
                </span>
                <span className={cn(
                  "rounded-lg border px-2.5 py-1 text-xs font-medium font-mono",
                  tierColors[agent.tier]
                )}>
                  {tierLabels[agent.tier]}
                </span>
                <div className="bg-void-elevated/80 rounded-lg px-2.5 py-1 border border-stellar-faint/20">
                  <TScoreBadge vsLevel={agent.vsLevel} />
                </div>
                {agent.checkpoint && agent.checkpoint.level && (
                  <div className="bg-void-elevated/80 rounded-lg px-2.5 py-1 border border-stellar-faint/20">
                    <CheckpointBadge
                      checkpointId={agent.checkpoint.id}
                      level={agent.checkpoint.level}
                      locale={locale}
                      variant="compact"
                    />
                  </div>
                )}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-stellar-core mb-4 font-display">
                {agent.name[locale]}
              </h1>
              <p className="text-lg text-stellar-dim leading-relaxed max-w-2xl">
                {agent.description[locale]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 sm:py-16 bg-void-deep">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Void Cards */}
        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          {/* Purpose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ boxShadow: '0 0 20px rgba(68, 255, 170, 0.15)' }}
            className="rounded-xl bg-void-elevated p-6 border border-stellar-faint/20 shadow-[0_0_10px_rgba(68,255,170,0.05)]"
          >
            <h2 className="flex items-center gap-2 font-semibold text-stellar-core mb-3 text-base font-mono">
              <div className="p-1.5 rounded-lg bg-void-surface">
                <Zap className="h-4 w-4 text-tscore-creative" />
              </div>
              {locale === 'ko' ? '목적' : 'Purpose'}
            </h2>
            <p className="text-sm text-stellar-dim leading-relaxed">
              {agent.purpose[locale]}
            </p>
          </motion.div>

          {/* Paradigms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ boxShadow: '0 0 20px rgba(68, 255, 170, 0.15)' }}
            className="rounded-xl bg-void-elevated p-6 border border-stellar-faint/20 shadow-[0_0_10px_rgba(68,255,170,0.05)]"
          >
            <h2 className="flex items-center gap-2 font-semibold text-stellar-core mb-3 text-base font-mono">
              <div className="p-1.5 rounded-lg bg-void-surface">
                <GitBranch className="h-4 w-4 text-tscore-divergent" />
              </div>
              {locale === 'ko' ? '지원 패러다임' : 'Supported Paradigms'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {agent.paradigms.map((p) => (
                <span
                  key={p}
                  className="rounded-lg bg-void-surface px-3 py-1.5 text-sm font-medium text-stellar-bright border border-stellar-faint/20 font-mono"
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
          whileHover={{ boxShadow: '0 0 20px rgba(68, 255, 170, 0.15)' }}
          className="rounded-xl bg-void-elevated p-6 border border-stellar-faint/20 shadow-[0_0_10px_rgba(68,255,170,0.05)] mb-8"
        >
          <h2 className="font-semibold text-stellar-core mb-4 text-base font-mono">
            {t('triggers')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {agent.triggers[locale].split(', ').map((trigger, i) => (
              <span
                key={i}
                className="rounded-lg bg-void-surface px-3 py-1.5 text-sm font-medium text-tscore-creative border border-tscore-creative/30 font-mono"
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
            whileHover={{ boxShadow: '0 0 30px rgba(255, 51, 102, 0.2)' }}
            className={cn(
              "rounded-xl p-6 mb-8 border-2 bg-void-elevated",
              agent.checkpoint.level === 'REQUIRED' && "border-tscore-modal/50",
              agent.checkpoint.level === 'RECOMMENDED' && "border-tscore-typical/50",
              agent.checkpoint.level === 'OPTIONAL' && "border-tscore-balanced/50"
            )}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className={cn(
                "rounded-lg p-2",
                agent.checkpoint.level === 'REQUIRED' && "bg-void-surface",
                agent.checkpoint.level === 'RECOMMENDED' && "bg-void-surface",
                agent.checkpoint.level === 'OPTIONAL' && "bg-void-surface"
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
              agent.checkpoint.level === 'REQUIRED' && "text-tscore-modal",
              agent.checkpoint.level === 'RECOMMENDED' && "text-tscore-typical",
              agent.checkpoint.level === 'OPTIONAL' && "text-tscore-balanced"
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

        {/* Extended Content Sections */}
        {extendedContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <AgentDetailSections content={extendedContent} locale={locale} />
          </motion.div>
        )}

        {/* Related Agents */}
        {relatedAgents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="font-semibold text-stellar-core mb-6 text-xl font-display">
              {t('relatedAgents')}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedAgents.map((related) => {
                const relatedCategoryColor = categoryColors[related.category];
                return (
                  <div key={related.id}>
                    <Link href={`/${locale}/agents/${related.slug}`}>
                      <motion.div
                        whileHover={{ boxShadow: '0 0 20px rgba(68, 255, 170, 0.2)' }}
                        className="flex items-center gap-4 rounded-xl bg-void-elevated p-4 border border-stellar-faint/20 group transition-all"
                      >
                        <span className="text-2xl">
                          {related.icon}
                        </span>
                        <div className="flex-1">
                          <span
                            className="text-xs font-mono"
                            style={{ color: relatedCategoryColor }}
                          >
                            {related.id}
                          </span>
                          <h3 className="font-medium text-stellar-bright group-hover:text-tscore-creative transition-colors mt-0.5">
                            {related.name[locale]}
                          </h3>
                        </div>
                        <ArrowRight className="h-4 w-4 text-stellar-faint group-hover:text-tscore-creative transition-colors" />
                      </motion.div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-stellar-faint/20">
          <Link href={`/${locale}/agents`}>
            <div className="inline-flex items-center gap-2 text-tscore-creative hover:text-tscore-creative/80 font-medium group font-mono">
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
