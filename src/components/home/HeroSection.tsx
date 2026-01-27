"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-diverga-50 to-[var(--background)] py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-diverga-200/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-diverga-100 px-4 py-2 text-sm font-medium text-diverga-700"
          >
            <Sparkles className="h-4 w-4" />
            {t('badge')}
          </motion.div>

          {/* Title */}
          <h1 className="text-hero font-bold tracking-tight text-[var(--foreground)]">
            {t('title')}{' '}
            <span className="gradient-text">{t('titleHighlight')}</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
            {t('description')}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/getting-started`}
              className="inline-flex items-center gap-2 rounded-xl bg-diverga-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-diverga-500/25 hover:bg-diverga-600 hover:shadow-diverga-500/35 transition-all"
            >
              {t('cta')}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href={`/${locale}/agents`}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-6 py-3 text-base font-semibold text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </motion.div>

        {/* VS Methodology Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 sm:mt-20"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-xl">
            <div className="rounded-xl bg-gray-900 p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-diverga-400">User:</span> Help me choose a theoretical framework for AI adoption study</p>
                <p className="mt-4"><span className="text-teal-400">🔴 CHECKPOINT:</span> <span className="text-gold-400">CP_THEORY_SELECTION</span></p>
                <p className="mt-2"><span className="text-diverga-400">Diverga:</span> Let me analyze options across the typicality spectrum:</p>
                <div className="mt-3 ml-4 space-y-1">
                  <p><span className="text-gray-500">[Modal Awareness]</span> TAM (T=0.92), UTAUT (T=0.85) are predictable</p>
                  <p className="mt-2"><span className="text-emerald-400">• Direction A</span> (T≈0.6): Self-Determination Theory × TAM</p>
                  <p><span className="text-blue-400">• Direction B</span> (T≈0.4): Cognitive Load Theory + Adaptive Ecosystem ⭐</p>
                  <p><span className="text-purple-400">• Direction C</span> (T≈0.2): Neuroplasticity-based learning</p>
                </div>
                <p className="mt-3 text-gold-400">Which direction would you like to proceed?</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
