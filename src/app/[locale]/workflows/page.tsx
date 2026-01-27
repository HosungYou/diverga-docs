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

const workflowColors = {
  quantitative: 'bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
  qualitative: 'bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
  mixed: 'bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-800',
  'meta-analysis': 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
} as const;

export default function WorkflowsPage() {
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
            {locale === 'ko' ? '연구 워크플로우' : 'Research Workflows'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-[var(--muted-foreground)]"
          >
            {locale === 'ko'
              ? '연구 패러다임별로 에이전트를 조합하는 가이드'
              : 'Guides for combining agents by research paradigm'}
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {workflows.map((workflow, index) => {
            const Icon = workflowIcons[workflow.id as keyof typeof workflowIcons] || BookOpen;
            const colorClass = workflowColors[workflow.id as keyof typeof workflowColors] || workflowColors.quantitative;
            const agents = getAgentsByParadigm(workflow.paradigm);
            const checkpointCount = workflow.stages.filter(s => s.checkpoint).length;

            return (
              <motion.div
                key={workflow.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link
                  href={`/${locale}/workflows/${workflow.slug}`}
                  className="group block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-diverga-300 hover:shadow-lg transition-all"
                >
                  <div className={`inline-flex p-3 rounded-xl border ${colorClass}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-[var(--foreground)] group-hover:text-diverga-600 transition-colors">
                    {workflow.name[locale]}
                  </h2>
                  <p className="mt-2 text-[var(--muted-foreground)]">
                    {workflow.description[locale]}
                  </p>

                  {/* Workflow metadata */}
                  <div className="mt-4 flex items-center gap-4 text-xs text-[var(--muted-foreground)]">
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-diverga-500" />
                      <span>{workflow.stages.length} {locale === 'ko' ? '단계' : 'stages'}</span>
                    </div>
                    {checkpointCount > 0 && (
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span>{checkpointCount} {locale === 'ko' ? '체크포인트' : 'checkpoints'}</span>
                      </div>
                    )}
                  </div>

                  {/* Agent tags */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {workflow.stages.slice(0, 6).map((stage) => (
                      <span
                        key={stage.agent}
                        className="rounded-md bg-[var(--muted)] px-2 py-0.5 text-xs font-mono text-[var(--muted-foreground)]"
                      >
                        {stage.agent}
                      </span>
                    ))}
                    {workflow.stages.length > 6 && (
                      <span className="rounded-md bg-[var(--muted)] px-2 py-0.5 text-xs font-mono text-[var(--muted-foreground)]">
                        +{workflow.stages.length - 6}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center text-sm font-medium text-diverga-500 group-hover:text-diverga-600 transition-colors">
                    {locale === 'ko' ? '타임라인 보기' : 'View Timeline'}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
