"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/lib/data/categories';

const categoryIcons: Record<string, string> = {
  A: "🏛️",
  B: "📚",
  C: "🎯",
  D: "📊",
  E: "🔬",
  F: "✅",
  G: "📝",
  H: "🌍"
};

export function AgentCategoryGrid() {
  const t = useTranslations('categories');
  const locale = useLocale();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[var(--background)] to-diverga-50/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 font-bold text-[var(--foreground)]">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            {t('description')}
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={item}>
              <Link
                href={`/${locale}/agents?category=${category.id}`}
                className="group block h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm hover:shadow-md hover:border-diverga-300 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{categoryIcons[category.id]}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-diverga-100 text-sm font-bold text-diverga-600">
                    {category.agents.length}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)] group-hover:text-diverga-600 transition-colors">
                  {category.name[locale as 'en' | 'ko']}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)] line-clamp-2">
                  {category.description[locale as 'en' | 'ko']}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-diverga-500 group-hover:text-diverga-600">
                  View agents
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/agents`}
            className="inline-flex items-center gap-2 text-diverga-600 hover:text-diverga-700 font-semibold"
          >
            View all 40 agents
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
