"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { X, Check, AlertTriangle, Lightbulb, Users, TrendingUp } from 'lucide-react';

export function ProblemSolution() {
  const t = useTranslations();

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-gray-900 tracking-[-0.02em]">
            The Problem We Solve
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Most AI research assistants suffer from mode collapse - they give you the same popular answers everyone else gets.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full rounded-2xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-4 py-1.5 text-sm font-medium text-red-700 mb-6">
                <X className="h-4 w-4" />
                Mode Collapse Problem
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('problem.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t('problem.description')}
              </p>

              <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-red-600">User:</span>{' '}
                      <span className="text-gray-600">{t('problem.example.question')}</span>
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-red-600">AI:</span>{' '}
                      <span className="text-gray-600">{t('problem.example.answer')}</span>
                    </p>
                    <p className="text-xs text-red-600/80 italic border-t border-gray-200 pt-3 mt-3">
                      {t('problem.example.note')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual indicator */}
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
                <div className="flex -space-x-1">
                  {[0.92, 0.88, 0.85].map((score, i) => (
                    <div
                      key={i}
                      className="h-6 w-6 rounded-full bg-red-100 border-2 border-white flex items-center justify-center text-[10px] text-red-600 font-mono"
                    >
                      {score.toFixed(1)}
                    </div>
                  ))}
                </div>
                <span>High T-scores = predictable, overused frameworks</span>
              </div>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full rounded-2xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-6">
                <Check className="h-4 w-4" />
                VS Methodology Solution
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('solution.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t('solution.description')}
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    icon: TrendingUp,
                    bgColor: 'bg-violet-50',
                    borderColor: 'border-violet-200',
                    iconColor: 'text-violet-600',
                    title: t('solution.stage1.title'),
                    description: t('solution.stage1.description'),
                  },
                  {
                    step: '2',
                    icon: Lightbulb,
                    bgColor: 'bg-teal-50',
                    borderColor: 'border-teal-200',
                    iconColor: 'text-teal-600',
                    title: t('solution.stage2.title'),
                    description: t('solution.stage2.description'),
                  },
                  {
                    step: '3',
                    icon: Users,
                    bgColor: 'bg-amber-50',
                    borderColor: 'border-amber-200',
                    iconColor: 'text-amber-600',
                    title: t('solution.stage3.title'),
                    description: t('solution.stage3.description'),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className={`flex items-start gap-4 rounded-xl ${item.bgColor} border ${item.borderColor} p-4`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border ${item.borderColor}`}>
                      <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Visual indicator */}
              <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
                <div className="flex -space-x-1">
                  {[0.6, 0.4, 0.2].map((score, i) => (
                    <div
                      key={i}
                      className="h-6 w-6 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-[10px] text-emerald-600 font-mono"
                    >
                      {score.toFixed(1)}
                    </div>
                  ))}
                </div>
                <span>Lower T-scores = innovative, unexplored territory</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
