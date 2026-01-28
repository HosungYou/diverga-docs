"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Brain, Target } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-[#0f1c3e] via-[#0a1428] to-[#050915]">
      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-diverga-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-[#FA5D29]/10 rounded-full blur-[80px]"
        />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 sm:pt-32 pb-16">
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
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-2.5 text-sm font-medium text-white/90"
          >
            <Sparkles className="h-4 w-4 text-[#FA5D29]" />
            {t('badge')}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-hero font-bold text-white tracking-[-0.04em] leading-[1.05]"
          >
            {t('title')}{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#FA5D29] via-[#FF8A5B] to-[#FA5D29] bg-clip-text text-transparent">
                {t('titleHighlight')}
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FA5D29] to-[#FF8A5B] origin-left"
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 text-lg sm:text-xl leading-relaxed text-white/70 max-w-2xl mx-auto"
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
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#FA5D29] text-white font-semibold rounded-xl hover:bg-[#e54d1f] transition-all duration-300 shadow-lg shadow-[#FA5D29]/30 hover:shadow-[#FA5D29]/50 hover:scale-[1.02]"
            >
              {t('cta')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={`/${locale}/agents`}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
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
            { icon: Brain, label: '40 Specialized Agents', sublabel: 'Complete research lifecycle' },
            { icon: Target, label: 'VS Methodology', sublabel: 'Beyond mode collapse' },
            { icon: Zap, label: 'T-Score Analytics', sublabel: 'Typicality-aware guidance' },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
              className="group relative bg-white/[0.05] backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FA5D29]/20 to-[#FA5D29]/5 border border-[#FA5D29]/20">
                  <feature.icon className="h-5 w-5 text-[#FA5D29]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{feature.label}</h3>
                  <p className="text-xs text-white/50 mt-0.5">{feature.sublabel}</p>
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
            <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-1.5 shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#27ca40]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-white/5 text-xs text-white/40 font-mono">
                    diverga-cli
                  </div>
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-3 text-white/80">
                  <p>
                    <span className="text-[#FA5D29]">User:</span>{' '}
                    <span className="text-white/90">Help me choose a theoretical framework for AI adoption study</span>
                  </p>
                  <p className="mt-5 flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[#FA5D29] animate-pulse" />
                    <span className="text-[#FA5D29] font-semibold">CHECKPOINT:</span>{' '}
                    <span className="text-gold-400 bg-gold-400/10 px-2 py-0.5 rounded">CP_THEORY_SELECTION</span>
                  </p>
                  <p className="mt-4">
                    <span className="text-teal-400">Diverga:</span>{' '}
                    <span className="text-white/70">Let me analyze options across the typicality spectrum:</span>
                  </p>
                  <div className="mt-4 ml-4 space-y-2.5 text-[13px]">
                    <p className="text-white/40 italic">[Modal Awareness] TAM (T=0.92), UTAUT (T=0.85) are predictable</p>
                    <div className="mt-3 space-y-2">
                      <p className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-emerald-400 font-medium">Direction A</span>
                        <span className="text-white/50">(T~0.6):</span>
                        <span className="text-white/80">Self-Determination Theory x TAM</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-400" />
                        <span className="text-blue-400 font-medium">Direction B</span>
                        <span className="text-white/50">(T~0.4):</span>
                        <span className="text-white/80">Cognitive Load Theory + Adaptive Ecosystem</span>
                        <span className="text-[#FA5D29]">*</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-purple-400" />
                        <span className="text-purple-400 font-medium">Direction C</span>
                        <span className="text-white/50">(T~0.2):</span>
                        <span className="text-white/80">Neuroplasticity-based learning</span>
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-gold-400">Which direction would you like to proceed?</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
