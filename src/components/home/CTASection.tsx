"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Github, BookOpen, Zap } from 'lucide-react';

export function CTASection() {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Soft gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-br from-violet-100/50 to-indigo-100/30 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-white border border-gray-200 p-8 sm:p-12 lg:p-16 shadow-xl shadow-gray-200/50 overflow-hidden"
        >
          <div className="relative mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-violet-50 border border-violet-200 px-4 py-2 text-sm font-medium text-violet-700 mb-8"
            >
              <Zap className="h-4 w-4" />
              Open Source & Free Forever
            </motion.div>

            <h2 className="text-h2 sm:text-[2.5rem] font-bold text-gray-900 tracking-[-0.02em] leading-tight">
              {t('title')}
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t('description')}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/getting-started`}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-gray-900/20 hover:shadow-gray-900/30 hover:scale-[1.02]"
              >
                {t('button')}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://github.com/HosungYou/Diverga"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-300 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm"
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
              <div className="rounded-xl bg-gray-900 border border-gray-800 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4 font-mono text-sm">
                  <div className="flex items-center gap-3 overflow-x-auto">
                    <Terminal className="h-4 w-4 text-violet-400 shrink-0" />
                    <span className="text-violet-400">/plugin marketplace add</span>
                    <span className="text-gray-400">https://github.com/HosungYou/Diverga</span>
                  </div>
                  <button
                    onClick={() => navigator.clipboard.writeText('/plugin marketplace add https://github.com/HosungYou/Diverga')}
                    className="shrink-0 px-3 py-1 rounded-lg bg-gray-800 border border-gray-700 text-xs text-gray-400 hover:bg-gray-700 hover:text-gray-200 transition-all"
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
                { icon: BookOpen, label: '40 Agents', sublabel: 'Full research lifecycle', bgColor: 'bg-violet-50', iconColor: 'text-violet-600' },
                { icon: Terminal, label: 'CLI Ready', sublabel: 'Claude Code compatible', bgColor: 'bg-indigo-50', iconColor: 'text-indigo-600' },
                { icon: Zap, label: 'VS Methodology', sublabel: 'Break mode collapse', bgColor: 'bg-teal-50', iconColor: 'text-teal-600' },
              ].map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 rounded-xl bg-gray-50 border border-gray-200 p-4"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${feature.bgColor}`}>
                    <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-sm">{feature.label}</p>
                    <p className="text-xs text-gray-500">{feature.sublabel}</p>
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
