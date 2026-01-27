"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { X, Check, AlertTriangle, Lightbulb, Users } from 'lucide-react';

export function ProblemSolution() {
  const t = useTranslations();

  return (
    <section className="py-20 sm:py-28 bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700 mb-4">
              <X className="h-4 w-4" />
              Mode Collapse
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">
              {t('problem.title')}
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              {t('problem.description')}
            </p>

            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <p className="text-sm text-red-800">
                    <span className="font-semibold">User:</span> {t('problem.example.question')}
                  </p>
                  <p className="mt-3 text-sm text-red-800">
                    <span className="font-semibold">AI:</span> {t('problem.example.answer')}
                  </p>
                  <p className="mt-3 text-xs text-red-600">
                    {t('problem.example.note')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 mb-4">
              <Check className="h-4 w-4" />
              VS Methodology
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">
              {t('solution.title')}
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)]">
              {t('solution.description')}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-diverga-100">
                  <span className="text-lg font-bold text-diverga-600">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">
                    {t('solution.stage1.title')}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {t('solution.stage1.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                  <Lightbulb className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">
                    {t('solution.stage2.title')}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {t('solution.stage2.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100">
                  <Users className="h-5 w-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)]">
                    {t('solution.stage3.title')}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {t('solution.stage3.description')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
