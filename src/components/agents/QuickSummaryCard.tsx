'use client';

import { motion } from 'framer-motion';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';
import type { QuickSummary } from '@/lib/data/types';

interface QuickSummaryCardProps {
  quickSummary: QuickSummary;
  locale: 'en' | 'ko';
}

export function QuickSummaryCard({ quickSummary, locale }: QuickSummaryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-void-elevated via-void-surface to-void-elevated border border-stellar-faint/30 shadow-glow-lg"
    >
      {/* Ambient glow effect */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-tscore-creative/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-tscore-divergent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative p-8">
        {/* Hero one-liner with dramatic typography */}
        <div className="mb-8 relative">
          <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-tscore-creative to-tscore-divergent rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-bold text-stellar-core leading-tight tracking-tight pl-6">
            {quickSummary.oneLiner[locale]}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Best For - Green positive vibe */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-mono font-bold text-tscore-creative uppercase tracking-wider">
              <div className="w-5 h-5 rounded bg-tscore-creative/20 flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-tscore-creative" />
              </div>
              {locale === 'ko' ? '이런 경우에 최적' : 'Best For'}
            </h3>
            <ul className="space-y-2">
              {quickSummary.bestFor.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-2 text-sm text-stellar-dim"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-tscore-creative mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item[locale]}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Not For - Red warning vibe */}
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-sm font-mono font-bold text-tscore-modal uppercase tracking-wider">
              <div className="w-5 h-5 rounded bg-tscore-modal/20 flex items-center justify-center">
                <XCircle className="w-3 h-3 text-tscore-modal" />
              </div>
              {locale === 'ko' ? '피해야 할 경우' : 'Not Suitable For'}
            </h3>
            <ul className="space-y-2">
              {quickSummary.notFor.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-2 text-sm text-stellar-dim"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-tscore-modal/60 mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed opacity-80">{item[locale]}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Time estimate with progress bar aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 pt-6 border-t border-stellar-faint/20"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-void-surface border border-tscore-balanced/30">
                <Clock className="w-4 h-4 text-tscore-balanced" />
              </div>
              <span className="text-sm font-mono text-stellar-faint">
                {locale === 'ko' ? '예상 소요시간' : 'Time to Result'}
              </span>
            </div>
            <span className="text-xl font-bold text-tscore-balanced font-mono">
              {quickSummary.timeToResult}
            </span>
          </div>
          {/* Visual progress bar */}
          <div className="mt-3 h-1 bg-void-deep rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-tscore-creative via-tscore-balanced to-tscore-divergent"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
