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
    <div className="relative">
      {/* Dark gradient hero section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-[var(--background)] pb-32">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-12 sm:pt-16">
          <Link
            href={`/${locale}/workflows`}
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 mb-12 transition-colors group"
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
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-teal-100 to-purple-100 bg-clip-text text-transparent mb-6">
              {workflow.name[locale]}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              {workflow.description[locale]}
            </p>

            {/* Workflow Metadata */}
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-teal-500/20 to-teal-600/20 border border-teal-400/30 backdrop-blur-sm
                  shadow-lg shadow-teal-500/10"
              >
                <Clock className="w-5 h-5 text-teal-400" />
                <span className="text-base font-semibold text-teal-100">
                  {workflow.estimatedTime}
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-400/30 backdrop-blur-sm
                  shadow-lg shadow-red-500/10"
              >
                <Target className="w-5 h-5 text-red-400" />
                <span className="text-base font-semibold text-red-100">
                  {checkpointCount} {locale === 'ko' ? '체크포인트' : 'checkpoints'}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating workflow diagram visualization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-2">
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 overflow-hidden">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-teal-500 shadow-lg shadow-teal-500/50" />
                  </div>
                  <span className="text-sm font-mono text-gray-400">workflow_timeline.tsx</span>
                </div>

                {/* Mini timeline preview */}
                <div className="flex items-center justify-between gap-2">
                  {workflow.stages.slice(0, 5).map((stage, i) => (
                    <div key={i} className="flex-1">
                      <div className={`h-2 rounded-full ${stage.checkpoint ? 'bg-gradient-to-r from-red-500 to-amber-500' : 'bg-teal-500/50'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline content section with overlap */}
      <div className="relative -mt-24 mx-auto max-w-4xl px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative rounded-3xl border border-gray-200 bg-white p-10
            shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]"
        >
          <CheckpointTimeline stages={workflow.stages} locale={locale} />
        </motion.div>
      </div>
    </div>
  );
}
