"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { X, Check, AlertTriangle, Lightbulb, Users, TrendingUp } from 'lucide-react';

export function ProblemSolution() {
  const t = useTranslations();

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#050915] via-[#0a1428] to-[#0f1c3e] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-red-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 font-bold text-white tracking-[-0.02em]">
            The Problem We Solve
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
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
            <div className="h-full rounded-2xl bg-gradient-to-br from-red-500/10 to-red-500/5 backdrop-blur-sm border border-red-500/20 p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-500/30 px-4 py-1.5 text-sm font-medium text-red-400 mb-6">
                <X className="h-4 w-4" />
                Mode Collapse Problem
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {t('problem.title')}
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">
                {t('problem.description')}
              </p>

              <div className="rounded-xl bg-[#0a0f1a] border border-red-500/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/20">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-white/80">
                      <span className="font-semibold text-red-400">User:</span>{' '}
                      <span className="text-white/70">{t('problem.example.question')}</span>
                    </p>
                    <p className="text-sm text-white/80">
                      <span className="font-semibold text-red-400">AI:</span>{' '}
                      <span className="text-white/70">{t('problem.example.answer')}</span>
                    </p>
                    <p className="text-xs text-red-400/80 italic border-t border-red-500/20 pt-3 mt-3">
                      {t('problem.example.note')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual indicator */}
              <div className="mt-6 flex items-center gap-3 text-sm text-white/40">
                <div className="flex -space-x-1">
                  {[0.92, 0.88, 0.85].map((score, i) => (
                    <div
                      key={i}
                      className="h-6 w-6 rounded-full bg-red-500/30 border-2 border-[#0a0f1a] flex items-center justify-center text-[10px] text-red-400 font-mono"
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
            <div className="h-full rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 backdrop-blur-sm border border-emerald-500/20 p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-4 py-1.5 text-sm font-medium text-emerald-400 mb-6">
                <Check className="h-4 w-4" />
                VS Methodology Solution
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {t('solution.title')}
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">
                {t('solution.description')}
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    icon: TrendingUp,
                    color: 'from-diverga-500/20 to-diverga-500/5',
                    borderColor: 'border-diverga-500/30',
                    textColor: 'text-diverga-400',
                    title: t('solution.stage1.title'),
                    description: t('solution.stage1.description'),
                  },
                  {
                    step: '2',
                    icon: Lightbulb,
                    color: 'from-teal-500/20 to-teal-500/5',
                    borderColor: 'border-teal-500/30',
                    textColor: 'text-teal-400',
                    title: t('solution.stage2.title'),
                    description: t('solution.stage2.description'),
                  },
                  {
                    step: '3',
                    icon: Users,
                    color: 'from-gold-500/20 to-gold-500/5',
                    borderColor: 'border-gold-500/30',
                    textColor: 'text-gold-400',
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
                    className={`flex items-start gap-4 rounded-xl bg-gradient-to-r ${item.color} border ${item.borderColor} p-4`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border ${item.borderColor}`}>
                      <item.icon className={`h-5 w-5 ${item.textColor}`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold text-white text-sm`}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/50 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Visual indicator */}
              <div className="mt-6 flex items-center gap-3 text-sm text-white/40">
                <div className="flex -space-x-1">
                  {[0.6, 0.4, 0.2].map((score, i) => (
                    <div
                      key={i}
                      className="h-6 w-6 rounded-full bg-emerald-500/30 border-2 border-[#0a0f1a] flex items-center justify-center text-[10px] text-emerald-400 font-mono"
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
