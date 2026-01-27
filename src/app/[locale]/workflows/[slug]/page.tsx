"use client";

import { use } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft, Clock, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { getWorkflowBySlug } from '@/lib/data/workflows';
import CheckpointTimeline from '@/components/CheckpointTimeline';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export default function WorkflowDetailPage({ params }: Props) {
  const { slug } = use(params);
  const locale = useLocale() as 'en' | 'ko';

  const workflow = getWorkflowBySlug(slug);

  if (!workflow) {
    notFound();
  }

  const checkpointCount = workflow.stages.filter(s => s.checkpoint).length;

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link
          href={`/${locale}/workflows`}
          className="inline-flex items-center gap-2 text-diverga-600 hover:text-diverga-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {locale === 'ko' ? '워크플로우로 돌아가기' : 'Back to Workflows'}
        </Link>

        {/* Workflow Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-h1 font-bold text-[var(--foreground)] mb-3">
            {workflow.name[locale]}
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">
            {workflow.description[locale]}
          </p>

          {/* Workflow Metadata */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800">
              <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-sm font-medium text-teal-700 dark:text-teal-300">
                {workflow.estimatedTime}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-diverga-50 dark:bg-diverga-950 border border-diverga-200 dark:border-diverga-800">
              <Target className="w-4 h-4 text-diverga-600 dark:text-diverga-400" />
              <span className="text-sm font-medium text-diverga-700 dark:text-diverga-300">
                {checkpointCount} {locale === 'ko' ? '체크포인트' : 'checkpoints'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Checkpoint Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8"
        >
          <CheckpointTimeline stages={workflow.stages} locale={locale} />
        </motion.div>
      </div>
    </div>
  );
}
