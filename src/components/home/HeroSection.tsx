"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Brain, Target } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-violet-100/50 via-pink-50/30 via-blue-50/40 to-white">
      {/* Soft aurora gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-gradient-to-br from-violet-200/40 to-indigo-200/30 rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-gradient-to-br from-pink-200/40 to-rose-100/30 rounded-full blur-[80px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-[20%] left-[30%] w-[350px] h-[350px] bg-gradient-to-br from-teal-100/40 to-cyan-100/30 rounded-full blur-[90px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 sm:pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/80 border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-violet-600" />
            {t('badge')}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-hero font-bold text-gray-900 tracking-[-0.04em] leading-[1.05]"
          >
            {t('title')}{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {t('titleHighlight')}
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-600 to-indigo-600 origin-left rounded-full"
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 text-lg sm:text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto"
          >
            {t('description')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={`/${locale}/getting-started`}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-gray-900/20 hover:shadow-gray-900/30 hover:scale-[1.02]"
            >
              {t('cta')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={`/${locale}/agents`}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-300 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm"
            >
              {t('ctaSecondary')}
              <ArrowRight className="h-5 w-5 opacity-50 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Brain, label: '44 Specialized Agents', sublabel: '9 categories, complete lifecycle', color: 'text-violet-600', bg: 'bg-violet-50' },
            { icon: Target, label: 'VS Methodology', sublabel: 'Beyond mode collapse', color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { icon: Zap, label: 'T-Score Analytics', sublabel: 'Typicality-aware guidance', color: 'text-teal-600', bg: 'bg-teal-50' },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
              className="group relative bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${feature.bg}`}>
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{feature.label}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{feature.sublabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* VS Methodology Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-16 sm:mt-20"
        >
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl bg-white border border-gray-200 p-1.5 shadow-xl shadow-gray-200/50">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-gray-50 text-xs text-gray-500 font-mono">
                    diverga-cli
                  </div>
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm bg-gray-900 rounded-b-xl">
                <div className="space-y-3 text-gray-300">
                  <p>
                    <span className="text-violet-400">User:</span>{' '}
                    <span className="text-gray-100">Help me choose a theoretical framework for AI adoption study</span>
                  </p>
                  <p className="mt-5 flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-amber-400 font-semibold">CHECKPOINT:</span>{' '}
                    <span className="text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded">CP_THEORY_SELECTION</span>
                  </p>
                  <p className="mt-4">
                    <span className="text-teal-400">Diverga:</span>{' '}
                    <span className="text-gray-400">Let me analyze options across the typicality spectrum:</span>
                  </p>
                  <div className="mt-4 ml-4 space-y-2.5 text-[13px]">
                    <p className="text-gray-500 italic">[Modal Awareness] TAM (T=0.92), UTAUT (T=0.85) are predictable</p>
                    <div className="mt-3 space-y-2">
                      <p className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-emerald-400 font-medium">Direction A</span>
                        <span className="text-gray-500">(T~0.6):</span>
                        <span className="text-gray-300">Self-Determination Theory x TAM</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-400" />
                        <span className="text-blue-400 font-medium">Direction B</span>
                        <span className="text-gray-500">(T~0.4):</span>
                        <span className="text-gray-300">Cognitive Load Theory + Adaptive Ecosystem</span>
                        <span className="text-violet-400">*</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-purple-400" />
                        <span className="text-purple-400 font-medium">Direction C</span>
                        <span className="text-gray-500">(T~0.2):</span>
                        <span className="text-gray-300">Neuroplasticity-based learning</span>
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-amber-300">Which direction would you like to proceed?</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
