"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FlaskConical, BarChart3, Users, CheckCircle2 } from 'lucide-react';
import { workflows } from '@/lib/data/workflows';
import { getAgentsByParadigm } from '@/lib/data/agents';

const workflowIcons = {
  quantitative: BarChart3,
  qualitative: Users,
  mixed: FlaskConical,
  'meta-analysis': BookOpen,
} as const;

// Category colors for workflow types (using design system)
const workflowCategoryMap = {
  quantitative: 'd', // Analysis - Sapphire Blue
  qualitative: 'e',  // Quality Control - Amethyst Purple
  mixed: 'c',        // Methodology - Emerald Green
  'meta-analysis': 'g', // Publication - Teal
} as const;

const categoryInfo: Record<string, { name: { en: string; ko: string }; description: { en: string; ko: string }; agents: string[] }> = {
  A: {
    name: { en: 'Foundation', ko: '기초' },
    description: { en: 'Research design & theoretical foundations', ko: '연구 설계 및 이론적 기초' },
    agents: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6']
  },
  B: {
    name: { en: 'Evidence', ko: '근거' },
    description: { en: 'Literature review & evidence synthesis', ko: '문헌 고찰 및 근거 종합' },
    agents: ['B1', 'B2', 'B3', 'B4', 'B5']
  },
  C: {
    name: { en: 'Design & Meta', ko: '설계 및 메타' },
    description: { en: 'Research design & meta-analysis', ko: '연구 설계 및 메타분석' },
    agents: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7']
  },
  D: {
    name: { en: 'Data Collection', ko: '데이터 수집' },
    description: { en: 'Sampling, instruments & protocols', ko: '표집, 도구 및 프로토콜' },
    agents: ['D1', 'D2', 'D3', 'D4']
  },
  E: {
    name: { en: 'Analysis', ko: '분석' },
    description: { en: 'Statistical & qualitative analysis', ko: '통계 및 질적 분석' },
    agents: ['E1', 'E2', 'E3', 'E4', 'E5']
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WorkflowsPage() {
  const locale = useLocale() as 'en' | 'ko';

  return (
    <div className="min-h-screen bg-void-deep">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-void-elevated/50 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            {/* Label */}
            <div className="mb-6 flex justify-center">
              <span className="void-badge void-badge-tscore">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-tscore-creative" />
                {locale === 'ko' ? '워크플로우 가이드' : 'Workflow Guides'}
              </span>
            </div>

            <h1 className="void-display text-stellar-core mb-6">
              {locale === 'ko' ? '연구 워크플로우' : 'Research Workflows'}
            </h1>
            <p className="text-body-lg text-stellar-dim max-w-2xl mx-auto">
              {locale === 'ko'
                ? '연구 패러다임별로 에이전트를 조합하는 가이드'
                : 'Guides for combining agents by research paradigm'}
            </p>
          </motion.div>

          {/* Visual Flow Diagram Element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="void-card p-8">
              <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4">
                {['A', 'B', 'C', 'D', 'E'].map((category, index) => {
                  const info = categoryInfo[category];
                  return (
                    <div key={category} className="flex items-center gap-4 flex-shrink-0">
                      <div className="relative group">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm font-bold category-bg-${category.toLowerCase()} category-text-${category.toLowerCase()} border border-stellar-faint/20 cursor-pointer transition-transform group-hover:scale-110`}
                        >
                          {category}
                        </motion.div>
                        {/* Tooltip */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                          <div className="bg-void-surface border border-stellar-faint/20 p-3 rounded-lg shadow-glow-sm whitespace-nowrap">
                            <p className="font-mono text-sm font-bold text-stellar-core">{info.name[locale]}</p>
                            <p className="text-micro text-stellar-dim mt-1">{info.description[locale]}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {info.agents.map(a => (
                                <span key={a} className={`px-1.5 py-0.5 text-micro font-mono category-text-${category.toLowerCase()} bg-void-deep rounded`}>{a}</span>
                              ))}
                            </div>
                          </div>
                          <div className="w-2 h-2 bg-void-surface border-b border-r border-stellar-faint/20 rotate-45 mx-auto -mt-1" />
                        </div>
                      </div>
                      {index < 4 && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="w-12 h-0.5 bg-gradient-to-r from-stellar-faint to-stellar-muted origin-left"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-stellar-faint text-micro uppercase tracking-widest mt-4">
                {locale === 'ko' ? '에이전트 카테고리 진행 흐름' : 'Agent Category Progression Flow'}
              </p>
            </div>
          </motion.div>

          {/* Workflow Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 sm:grid-cols-2"
          >
            {workflows.map((workflow, index) => {
              const Icon = workflowIcons[workflow.id as keyof typeof workflowIcons] || BookOpen;
              const categoryKey = workflowCategoryMap[workflow.id as keyof typeof workflowCategoryMap] || 'd';
              const agents = getAgentsByParadigm(workflow.paradigm);
              const checkpointCount = workflow.stages.filter(s => s.checkpoint).length;

              return (
                <motion.div
                  key={workflow.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`/${locale}/workflows/${workflow.slug}`}
                    className="group block void-card-interactive p-8"
                  >
                    {/* Icon with category color */}
                    <div className={`inline-flex p-4 category-bg-${categoryKey} border border-stellar-faint/20 transition-all duration-200 group-hover:shadow-glow-sm`}>
                      <Icon className={`h-7 w-7 category-text-${categoryKey}`} />
                    </div>

                    <h2 className="mt-6 void-heading-3 text-stellar-core group-hover:text-stellar-bright transition-colors">
                      {workflow.name[locale]}
                    </h2>
                    <p className="mt-3 text-body text-stellar-dim leading-relaxed">
                      {workflow.description[locale]}
                    </p>

                    {/* Workflow metadata with checkpoint colors */}
                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-void-surface border border-stellar-faint/20">
                        <CheckCircle2 className="w-4 h-4 text-checkpoint-complete" />
                        <span className="font-mono text-micro text-stellar-bright uppercase">
                          {workflow.stages.length} {locale === 'ko' ? '단계' : 'stages'}
                        </span>
                      </div>
                      {checkpointCount > 0 && (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-void-surface border border-checkpoint-required/30">
                          <div className="w-2 h-2 rounded-full bg-checkpoint-required animate-pulse" />
                          <span className="font-mono text-micro text-checkpoint-required uppercase">
                            {checkpointCount} {locale === 'ko' ? '체크포인트' : 'checkpoints'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Agent tags with category colors */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {workflow.stages.slice(0, 6).map((stage) => {
                        const agentCategory = stage.agent.charAt(0).toLowerCase();
                        return (
                          <span
                            key={stage.agent}
                            className={`px-3 py-1 bg-void-surface border border-stellar-faint/20 font-mono text-micro category-text-${agentCategory} hover:border-stellar-dim transition-all`}
                          >
                            {stage.agent}
                          </span>
                        );
                      })}
                      {workflow.stages.length > 6 && (
                        <span className="px-3 py-1 bg-tscore-creative/10 border border-tscore-creative/30 font-mono text-micro text-tscore-creative font-bold">
                          +{workflow.stages.length - 6}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 flex items-center text-caption font-mono uppercase tracking-wider text-tscore-creative group-hover:text-tscore-divergent transition-colors">
                      {locale === 'ko' ? '타임라인 보기' : 'View Timeline'}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="void-divider-glow" />

      {/* T-Score Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="void-heading-2 text-stellar-core mb-4">
            {locale === 'ko' ? 'T-Score 기반 워크플로우' : 'T-Score Based Workflows'}
          </h2>
          <p className="text-body text-stellar-dim mb-8">
            {locale === 'ko'
              ? '각 워크플로우는 연구 전형성 스펙트럼을 따라 다양한 접근법을 제공합니다'
              : 'Each workflow offers diverse approaches along the research typicality spectrum'}
          </p>

          {/* T-Score Spectrum Bar */}
          <div className="void-card p-6">
            <div className="h-3 w-full bg-tscore-gradient rounded-sm mb-4" />
            <div className="flex justify-between text-micro font-mono uppercase tracking-wider">
              <span className="text-tscore-divergent">
                {locale === 'ko' ? '발산적' : 'Divergent'}
              </span>
              <span className="text-tscore-balanced">
                {locale === 'ko' ? '균형' : 'Balanced'}
              </span>
              <span className="text-tscore-modal">
                {locale === 'ko' ? '모달' : 'Modal'}
              </span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
