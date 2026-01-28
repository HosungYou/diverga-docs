"use client";

import { use } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWorkflowBySlug } from '@/lib/data/workflows';
import { getAgentById } from '@/lib/data/agents';
import CheckpointTimeline from '@/components/CheckpointTimeline';
import { ConceptualFramework, NanobananaDemoBlock } from '@/components/visualization';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

const categoryNames: Record<string, { en: string; ko: string }> = {
  a: { en: 'Foundation', ko: '기초' },
  b: { en: 'Evidence', ko: '근거' },
  c: { en: 'Design & Meta', ko: '설계 및 메타' },
  d: { en: 'Data Collection', ko: '데이터 수집' },
  e: { en: 'Analysis', ko: '분석' },
  f: { en: 'Quality', ko: '품질' },
  g: { en: 'Communication', ko: '커뮤니케이션' },
  h: { en: 'Specialized', ko: '전문화' },
};

// Progress step indicator with T-Score colors
function ProgressIndicator({
  stages,
  locale
}: {
  stages: { agent: string; checkpoint?: string; description: { en: string; ko: string } }[];
  locale: 'en' | 'ko';
}) {
  const totalSteps = stages.length;
  const checkpointCount = stages.filter(s => s.checkpoint).length;

  return (
    <div className="void-card p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="void-label text-stellar-dim">
          {locale === 'ko' ? '워크플로우 진행도' : 'Workflow Progress'}
        </span>
        <span className="font-mono text-micro text-stellar-faint">
          {totalSteps} {locale === 'ko' ? '단계' : 'steps'} / {checkpointCount} {locale === 'ko' ? '체크포인트' : 'checkpoints'}
        </span>
      </div>

      {/* Progress bar with step indicators */}
      <div className="relative">
        <div className="flex items-center gap-1">
          {stages.map((stage, index) => {
            // Determine color based on checkpoint status
            const isCheckpoint = stage.checkpoint;
            const progressPercent = (index / (totalSteps - 1)) * 100;

            // T-Score color based on position in workflow
            let colorClass = 'bg-tscore-divergent';
            if (progressPercent >= 80) colorClass = 'bg-tscore-modal';
            else if (progressPercent >= 60) colorClass = 'bg-tscore-typical';
            else if (progressPercent >= 40) colorClass = 'bg-tscore-balanced';
            else if (progressPercent >= 20) colorClass = 'bg-tscore-creative';

            const agent = getAgentById(stage.agent);
            return (
              <motion.div
                key={index}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex-1 relative group"
              >
                <div
                  className={`h-2 ${isCheckpoint ? 'bg-checkpoint-required' : colorClass} transition-all duration-200 group-hover:h-3`}
                />
                {isCheckpoint && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-checkpoint-required border-2 border-void-deep flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-void-deep" />
                  </div>
                )}
                {/* Hover tooltip */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                  <div className="bg-void-surface border border-stellar-faint/20 p-3 rounded-lg shadow-glow-sm whitespace-nowrap">
                    <span className="font-mono text-micro text-stellar-faint">Step {index + 1}</span>
                    <p className="font-bold text-sm text-stellar-core">{agent?.name[locale] || stage.agent}</p>
                    <p className="text-micro text-stellar-dim mt-0.5">{stage.description[locale]}</p>
                    {stage.checkpoint && (
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-checkpoint-required" />
                        <span className="text-micro text-checkpoint-required font-mono">CHECKPOINT</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4 text-micro">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-checkpoint-required" />
          <span className="text-stellar-dim">{locale === 'ko' ? '필수 체크포인트' : 'Required Checkpoint'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-2 bg-tscore-gradient rounded-sm" />
          <span className="text-stellar-dim">{locale === 'ko' ? 'T-Score 진행' : 'T-Score Progress'}</span>
        </div>
      </div>
    </div>
  );
}

export default function WorkflowDetailPage({ params }: Props) {
  const { slug } = use(params);
  const locale = useLocale() as 'en' | 'ko';

  const workflow = getWorkflowBySlug(slug);

  if (!workflow) {
    notFound();
  }

  const checkpointCount = workflow.stages.filter(s => s.checkpoint).length;

  return (
    <div className="min-h-screen bg-void-deep">
      {/* Hero section with gradient */}
      <section className="relative overflow-hidden pb-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-void-surface via-void-deep to-void-deep" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 pt-12 sm:pt-16">
          {/* Back navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href={`/${locale}/workflows`}
              className="inline-flex items-center gap-2 text-stellar-dim hover:text-stellar-core mb-12 transition-colors group font-mono text-caption uppercase tracking-wider"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {locale === 'ko' ? '워크플로우로 돌아가기' : 'Back to Workflows'}
            </Link>
          </motion.div>

          {/* Workflow Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            {/* Badge */}
            <div className="mb-6">
              <span className="void-badge void-badge-tscore">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-tscore-creative" />
                {locale === 'ko' ? '연구 워크플로우' : 'Research Workflow'}
              </span>
            </div>

            <h1 className="void-display text-stellar-core mb-6">
              {workflow.name[locale]}
            </h1>
            <p className="text-body-lg text-stellar-dim leading-relaxed mb-8 max-w-3xl">
              {workflow.description[locale]}
            </p>

            {/* Workflow Metadata */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-5 py-3 void-card">
                <Clock className="w-5 h-5 text-stellar-dim" />
                <span className="font-mono text-caption text-stellar-bright uppercase">
                  {workflow.estimatedTime}
                </span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 void-card border-checkpoint-required/30">
                <Target className="w-5 h-5 text-checkpoint-required" />
                <span className="font-mono text-caption text-checkpoint-required uppercase">
                  {checkpointCount} {locale === 'ko' ? '체크포인트' : 'checkpoints'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ProgressIndicator stages={workflow.stages} locale={locale} />
          </motion.div>

          {/* Terminal-style preview card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <div className="void-terminal overflow-hidden">
              {/* Terminal header */}
              <div className="void-terminal-header">
                <div className="flex items-center gap-2">
                  <div className="void-terminal-dot void-terminal-dot-red" />
                  <div className="void-terminal-dot void-terminal-dot-yellow" />
                  <div className="void-terminal-dot void-terminal-dot-green" />
                </div>
                <span className="text-micro text-stellar-faint ml-4">workflow_timeline.tsx</span>
              </div>

              {/* Terminal content - mini timeline preview */}
              <div className="p-6">
                <div className="flex items-center gap-2">
                  {workflow.stages.slice(0, 8).map((stage, i) => {
                    const agentCategory = stage.agent.charAt(0).toLowerCase();
                    return (
                      <div key={i} className="flex items-center gap-2">
                        <div className="relative group">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.05 }}
                            className={`w-8 h-8 flex items-center justify-center category-bg-${agentCategory} border border-stellar-faint/20 font-mono text-micro ${stage.checkpoint ? 'ring-2 ring-checkpoint-required' : ''} cursor-pointer`}
                          >
                            <span className={`category-text-${agentCategory}`}>
                              {agentCategory.toUpperCase()}
                            </span>
                          </motion.div>
                          {/* Category tooltip */}
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                            <div className="bg-void-deep border border-stellar-faint/20 px-3 py-1.5 rounded whitespace-nowrap">
                              <span className="font-bold text-micro text-stellar-core">{categoryNames[agentCategory]?.[locale] || agentCategory.toUpperCase()}</span>
                              <span className="text-stellar-faint text-micro ml-2">{stage.agent}</span>
                            </div>
                          </div>
                        </div>
                        {i < Math.min(workflow.stages.length - 1, 7) && (
                          <ChevronRight className="w-3 h-3 text-stellar-faint" />
                        )}
                      </div>
                    );
                  })}
                  {workflow.stages.length > 8 && (
                    <span className="text-stellar-dim font-mono text-micro">+{workflow.stages.length - 8}</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="void-divider-glow" />

      {/* Timeline content section */}
      <section className="relative mx-auto max-w-6xl px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">
            {locale === 'ko' ? '상세 타임라인' : 'Detailed Timeline'}
          </h2>
          <p className="text-body text-stellar-dim">
            {locale === 'ko'
              ? '각 단계를 클릭하여 에이전트 세부 정보를 확인하세요'
              : 'Click each stage to view agent details'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <CheckpointTimeline stages={workflow.stages} locale={locale} />
        </motion.div>
      </section>

      {/* A6 Conceptual Framework Example Section (only for a6-ai-education workflow) */}
      {workflow.example && (
        <>
          <div className="void-divider-glow" />
          <section className="relative mx-auto max-w-6xl px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="void-badge void-badge-tscore">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-tscore-creative" />
                  {locale === 'ko' ? 'A6 시각화 예시' : 'A6 Visualization Example'}
                </span>
              </div>
              <h2 className="void-heading-2 text-stellar-core mb-2">
                {locale === 'ko' ? '개념적 프레임워크 시각화' : 'Conceptual Framework Visualization'}
              </h2>
              <p className="text-body text-stellar-dim">
                {locale === 'ko'
                  ? 'A6 에이전트가 Nano Banana 이미지 합성을 사용하여 생성한 개념적 프레임워크입니다'
                  : 'Conceptual framework generated by A6 agent using Nano Banana image synthesis'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ConceptualFramework locale={locale} example={workflow.example} />
            </motion.div>

            {workflow.slug === 'a6-conceptual-framework' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <NanobananaDemoBlock locale={locale} example={workflow.example} />
              </motion.div>
            )}
          </section>
        </>
      )}

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="void-card p-12">
            <h2 className="void-heading-2 text-stellar-core mb-4">
              {locale === 'ko' ? '시작할 준비가 되셨나요?' : 'Ready to Start?'}
            </h2>
            <p className="text-body text-stellar-dim mb-8 max-w-xl mx-auto">
              {locale === 'ko'
                ? '이 워크플로우의 에이전트들을 탐색하고 연구를 시작하세요'
                : 'Explore the agents in this workflow and begin your research'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/agents`}
                className="void-btn void-btn-accent"
              >
                {locale === 'ko' ? '에이전트 탐색' : 'Explore Agents'}
              </Link>
              <Link
                href={`/${locale}/getting-started`}
                className="void-btn void-btn-primary"
              >
                {locale === 'ko' ? '시작 가이드' : 'Getting Started'}
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
