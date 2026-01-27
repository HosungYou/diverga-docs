"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export function CTASection() {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-diverga-600 to-diverga-800 px-6 py-16 sm:px-16 sm:py-24"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-teal-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-h2 font-bold text-white">
              {t('title')}
            </h2>
            <p className="mt-4 text-lg text-diverga-100">
              {t('description')}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/getting-started`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-diverga-600 shadow-lg hover:bg-diverga-50 transition-colors"
              >
                {t('button')}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Quick install preview */}
            <div className="mt-12 rounded-xl bg-black/30 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 font-mono text-sm text-white/90">
                <Terminal className="h-4 w-4 text-teal-400" />
                <span className="text-teal-400">/plugin marketplace add</span>
                <span>https://github.com/HosungYou/Diverga</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
