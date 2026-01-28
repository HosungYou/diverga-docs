"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Github, BookOpen, Zap } from 'lucide-react';

export function CTASection() {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#050915] to-[#0a1428] overflow-hidden">
      {/* Dramatic glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FA5D29]/10 rounded-full blur-[200px]"
        />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-diverga-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FA5D29]/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-diverga-500/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#FA5D29]/20 border border-[#FA5D29]/30 px-4 py-2 text-sm font-medium text-[#FA5D29] mb-8"
            >
              <Zap className="h-4 w-4" />
              Open Source & Free Forever
            </motion.div>

            <h2 className="text-h2 sm:text-[2.5rem] font-bold text-white tracking-[-0.02em] leading-tight">
              {t('title')}
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              {t('description')}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/getting-started`}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#FA5D29] text-white font-semibold rounded-xl hover:bg-[#e54d1f] transition-all duration-300 shadow-lg shadow-[#FA5D29]/30 hover:shadow-[#FA5D29]/50 hover:scale-[1.02]"
              >
                {t('button')}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://github.com/HosungYou/Diverga"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </div>

            {/* Quick install preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-12"
            >
              <div className="rounded-xl bg-[#0a0f1a] border border-white/10 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4 font-mono text-sm">
                  <div className="flex items-center gap-3 overflow-x-auto">
                    <Terminal className="h-4 w-4 text-[#FA5D29] shrink-0" />
                    <span className="text-[#FA5D29]">/plugin marketplace add</span>
                    <span className="text-white/70">https://github.com/HosungYou/Diverga</span>
                  </div>
                  <button
                    onClick={() => navigator.clipboard.writeText('/plugin marketplace add https://github.com/HosungYou/Diverga')}
                    className="shrink-0 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60 hover:bg-white/10 hover:text-white/90 transition-all"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { icon: BookOpen, label: '40 Agents', sublabel: 'Full research lifecycle' },
                { icon: Terminal, label: 'CLI Ready', sublabel: 'Claude Code compatible' },
                { icon: Zap, label: 'VS Methodology', sublabel: 'Break mode collapse' },
              ].map((feature, index) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.03] border border-white/10 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                    <feature.icon className="h-5 w-5 text-white/60" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white text-sm">{feature.label}</p>
                    <p className="text-xs text-white/40">{feature.sublabel}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
