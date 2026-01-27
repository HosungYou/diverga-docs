"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FlaskConical, BarChart3, Users } from 'lucide-react';

const workflows = [
  {
    id: 'quantitative',
    icon: BarChart3,
    name: { en: 'Quantitative Research', ko: '양적 연구' },
    description: {
      en: 'RCTs, surveys, and statistical analysis workflows',
      ko: 'RCT, 설문조사 및 통계 분석 워크플로우'
    },
    agents: ['A1', 'A2', 'C1', 'D1', 'D4', 'E1', 'F2'],
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'qualitative',
    icon: Users,
    name: { en: 'Qualitative Research', ko: '질적 연구' },
    description: {
      en: 'Phenomenology, grounded theory, and case study workflows',
      ko: '현상학, 근거이론 및 사례연구 워크플로우'
    },
    agents: ['A1', 'A5', 'C2', 'D2', 'E2', 'F4'],
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'mixed-methods',
    icon: FlaskConical,
    name: { en: 'Mixed Methods', ko: '혼합 방법' },
    description: {
      en: 'Sequential and convergent mixed methods designs',
      ko: '순차적 및 수렴적 혼합방법 설계'
    },
    agents: ['A1', 'A5', 'C3', 'E3', 'F2'],
    color: 'bg-teal-100 text-teal-600',
  },
  {
    id: 'meta-analysis',
    icon: BookOpen,
    name: { en: 'Meta-Analysis', ko: '메타분석' },
    description: {
      en: 'Systematic review and meta-analysis pipelines',
      ko: '체계적 문헌고찰 및 메타분석 파이프라인'
    },
    agents: ['B1', 'B2', 'B3', 'C5', 'C6', 'C7', 'E5'],
    color: 'bg-emerald-100 text-emerald-600',
  },
];

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
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link
                href={`/${locale}/workflows/${workflow.id}`}
                className="group block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-diverga-300 hover:shadow-md transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl ${workflow.color}`}>
                  <workflow.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-[var(--foreground)] group-hover:text-diverga-600 transition-colors">
                  {workflow.name[locale]}
                </h2>
                <p className="mt-2 text-[var(--muted-foreground)]">
                  {workflow.description[locale]}
                </p>
                <div className="mt-4 flex flex-wrap gap-1">
                  {workflow.agents.map((agent) => (
                    <span
                      key={agent}
                      className="rounded-md bg-[var(--muted)] px-2 py-0.5 text-xs font-mono text-[var(--muted-foreground)]"
                    >
                      {agent}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-diverga-500 group-hover:text-diverga-600">
                  {locale === 'ko' ? '워크플로우 보기' : 'View Workflow'}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
