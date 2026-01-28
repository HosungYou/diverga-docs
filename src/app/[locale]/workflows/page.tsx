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
    <div className="relative overflow-hidden bg-white">
      <div className="relative py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900"
            >
              {locale === 'ko' ? '연구 워크플로우' : 'Research Workflows'}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-gray-600"
            >
              {locale === 'ko'
                ? '연구 패러다임별로 에이전트를 조합하는 가이드'
                : 'Guides for combining agents by research paradigm'}
            </motion.p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
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
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={`/${locale}/workflows/${workflow.slug}`}
                    className="group block relative overflow-hidden bg-white
                      rounded-xl p-8 border border-gray-100
                      shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]
                      hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]
                      transition-all duration-200"
                  >
                    <div className="relative">
                      <div className={`inline-flex p-4 rounded-xl border ${colorClass}
                        transition-transform duration-200`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h2 className="mt-6 text-2xl font-bold text-gray-900 transition-colors">
                        {workflow.name[locale]}
                      </h2>
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        {workflow.description[locale]}
                      </p>

                      {/* Workflow metadata */}
                      <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-teal-600" />
                          <span className="font-medium">{workflow.stages.length} {locale === 'ko' ? '단계' : 'stages'}</span>
                        </div>
                        {checkpointCount > 0 && (
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 border border-red-200">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <span className="font-medium text-red-700">{checkpointCount} {locale === 'ko' ? '체크포인트' : 'checkpoints'}</span>
                          </div>
                        )}
                      </div>

                      {/* Agent tags */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {workflow.stages.slice(0, 6).map((stage) => (
                          <span
                            key={stage.agent}
                            className="rounded-lg bg-gray-50 border border-gray-200 px-3 py-1.5 text-xs font-mono font-semibold text-gray-700
                              hover:border-gray-300 transition-all"
                          >
                            {stage.agent}
                          </span>
                        ))}
                        {workflow.stages.length > 6 && (
                          <span className="rounded-lg bg-teal-50 border border-teal-200 px-3 py-1.5 text-xs font-mono font-bold text-teal-700">
                            +{workflow.stages.length - 6}
                          </span>
                        )}
                      </div>

                      <div className="mt-6 flex items-center text-base font-semibold text-teal-600 transition-colors">
                        {locale === 'ko' ? '타임라인 보기' : 'View Timeline'}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
