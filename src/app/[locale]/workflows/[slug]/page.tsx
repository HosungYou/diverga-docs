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
    <div className="relative bg-white">
      {/* Light hero section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pb-20">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-12 sm:pt-16">
          <Link
            href={`/${locale}/workflows`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-12 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {locale === 'ko' ? '워크플로우로 돌아가기' : 'Back to Workflows'}
          </Link>

          {/* Workflow Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              {workflow.name[locale]}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl">
              {workflow.description[locale]}
            </p>

            {/* Workflow Metadata */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-200">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="text-base font-semibold text-gray-900">
                  {workflow.estimatedTime}
                </span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-red-200">
                <Target className="w-5 h-5 text-red-500" />
                <span className="text-base font-semibold text-red-700">
                  {checkpointCount} {locale === 'ko' ? '체크포인트' : 'checkpoints'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Clean workflow preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-gray-200 bg-white p-8 overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-teal-500" />
                </div>
                <span className="text-sm font-mono text-gray-500">workflow_timeline.tsx</span>
              </div>

              {/* Mini timeline preview */}
              <div className="flex items-center justify-between gap-2">
                {workflow.stages.slice(0, 5).map((stage, i) => (
                  <div key={i} className="flex-1">
                    <div className={`h-2 rounded-full ${stage.checkpoint ? 'bg-red-500' : 'bg-gray-200'}`} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline content section */}
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <CheckpointTimeline stages={workflow.stages} locale={locale} />
        </motion.div>
      </div>
    </div>
  );
}
