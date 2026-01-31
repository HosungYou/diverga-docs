'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Sparkles, Target } from 'lucide-react';
import type { Journey } from '@/lib/data/types';

interface JourneyNarrativeSectionProps {
  journey: Journey;
  locale: 'en' | 'ko';
}

export function JourneyNarrativeSection({ journey, locale }: JourneyNarrativeSectionProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-void-surface border border-tscore-creative/30"
        >
          <Sparkles className="w-4 h-4 text-tscore-creative" />
          <span className="text-sm font-mono font-bold text-tscore-creative">
            {locale === 'ko' ? '변화의 여정' : 'Transformation Journey'}
          </span>
        </motion.div>
        <h3 className="text-3xl font-bold text-stellar-core font-display">
          {locale === 'ko' ? '연구자의 변화 스토리' : 'Your Transformation Story'}
        </h3>
      </div>

      {/* Timeline visualization */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tscore-modal via-tscore-balanced to-tscore-creative" />

        <div className="space-y-12">
          {/* BEFORE STATE - Red/Modal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-start gap-6 sm:gap-8">
              {/* Timeline node */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-void-surface border-4 border-tscore-modal flex items-center justify-center shadow-glow-lg">
                  <div className="w-8 h-8 rounded-full bg-tscore-modal/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-tscore-modal animate-glow-pulse" />
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="absolute -top-2 -right-2 px-2 py-1 rounded-lg bg-tscore-modal text-void-deep text-xs font-mono font-bold"
                >
                  {locale === 'ko' ? '이전' : 'Before'}
                </motion.div>
              </div>

              {/* Content card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex-1 rounded-2xl bg-void-elevated border-2 border-tscore-modal/30 p-6 shadow-glow"
                style={{ boxShadow: '0 0 30px rgba(255, 51, 102, 0.15)' }}
              >
                <h4 className="text-lg font-bold text-tscore-modal mb-3 font-mono uppercase tracking-wider">
                  {locale === 'ko' ? '현재 상태' : 'Current State'}
                </h4>
                <p className="text-stellar-dim leading-relaxed">
                  {journey.startState[locale]}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* TRANSFORMATION STEPS - Gradient progression */}
          {journey.transformation.map((step, index) => {
            const progress = (index + 1) / journey.transformation.length;
            const color = `hsl(${180 + progress * 90}, 70%, 60%)`; // Gradient from cyan to green

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${index % 2 === 0 ? 'sm:pr-16' : 'sm:pl-16'}`}
              >
                <div className={`flex items-start gap-6 sm:gap-8 ${index % 2 === 0 ? '' : 'sm:flex-row-reverse'}`}>
                  {/* Timeline node */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-full bg-void-surface border-4 flex items-center justify-center"
                      style={{ borderColor: color }}
                    >
                      <ArrowRight className="w-6 h-6" style={{ color }} />
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-void-surface border border-stellar-faint/30 text-xs font-mono text-stellar-faint"
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex-1 rounded-xl bg-void-elevated border border-stellar-faint/20 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-1 h-full rounded-full flex-shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-sm text-stellar-dim leading-relaxed">
                        {step[locale]}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* AFTER STATE - Green/Creative */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-start gap-6 sm:gap-8">
              {/* Timeline node */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-void-surface border-4 border-tscore-creative flex items-center justify-center shadow-glow-xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-tscore-creative to-tscore-divergent flex items-center justify-center"
                  >
                    <Target className="w-6 h-6 text-void-deep" />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="absolute -top-2 -right-2 px-2 py-1 rounded-lg bg-tscore-creative text-void-deep text-xs font-mono font-bold"
                >
                  {locale === 'ko' ? '이후' : 'After'}
                </motion.div>
              </div>

              {/* Content card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex-1 rounded-2xl bg-gradient-to-br from-void-elevated via-void-surface to-void-elevated border-2 border-tscore-creative/40 p-6 shadow-glow-xl"
                style={{ boxShadow: '0 0 40px rgba(68, 255, 170, 0.25)' }}
              >
                <h4 className="text-lg font-bold text-tscore-creative mb-3 font-mono uppercase tracking-wider">
                  {locale === 'ko' ? '목표 상태' : 'Target State'}
                </h4>
                <p className="text-stellar-bright leading-relaxed text-base">
                  {journey.endState[locale]}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Time estimate footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 pt-8 border-t border-stellar-faint/20"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-void-surface border border-stellar-faint/20">
            <Clock className="w-5 h-5 text-tscore-balanced" />
            <div className="text-left">
              <div className="text-xs font-mono text-stellar-faint uppercase tracking-wider">
                {locale === 'ko' ? '예상 소요시간' : 'Estimated Time'}
              </div>
              <div className="text-xl font-bold text-tscore-balanced font-mono">
                {journey.timeEstimate}
              </div>
            </div>
          </div>
          <div className="text-sm text-stellar-faint italic">
            {locale === 'ko'
              ? '실제 소요시간은 프로젝트 복잡도에 따라 다를 수 있습니다'
              : 'Actual time may vary based on project complexity'}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
