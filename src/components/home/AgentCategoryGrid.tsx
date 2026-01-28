"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FlaskConical, Target, BarChart3, Microscope, Shield, FileText, Globe } from 'lucide-react';
import { categories } from '@/lib/data/categories';

const categoryMeta: Record<string, { icon: React.ElementType; bgColor: string; iconColor: string; badgeColor: string }> = {
  A: { icon: BookOpen, bgColor: 'bg-indigo-50', iconColor: 'text-indigo-600', badgeColor: 'bg-indigo-100 text-indigo-700' },
  B: { icon: FlaskConical, bgColor: 'bg-violet-50', iconColor: 'text-violet-600', badgeColor: 'bg-violet-100 text-violet-700' },
  C: { icon: Target, bgColor: 'bg-teal-50', iconColor: 'text-teal-600', badgeColor: 'bg-teal-100 text-teal-700' },
  D: { icon: BarChart3, bgColor: 'bg-amber-50', iconColor: 'text-amber-600', badgeColor: 'bg-amber-100 text-amber-700' },
  E: { icon: Microscope, bgColor: 'bg-rose-50', iconColor: 'text-rose-600', badgeColor: 'bg-rose-100 text-rose-700' },
  F: { icon: Shield, bgColor: 'bg-cyan-50', iconColor: 'text-cyan-600', badgeColor: 'bg-cyan-100 text-cyan-700' },
  G: { icon: FileText, bgColor: 'bg-fuchsia-50', iconColor: 'text-fuchsia-600', badgeColor: 'bg-fuchsia-100 text-fuchsia-700' },
  H: { icon: Globe, bgColor: 'bg-emerald-50', iconColor: 'text-emerald-600', badgeColor: 'bg-emerald-100 text-emerald-700' },
};

export function AgentCategoryGrid() {
  const t = useTranslations('categories');
  const locale = useLocale();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 mb-6 shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-violet-500" />
            8 Research Categories
          </div>
          <h2 className="text-h2 font-bold text-gray-900 tracking-[-0.02em]">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('description')}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => {
            const meta = categoryMeta[category.id] || categoryMeta.A;
            const IconComponent = meta.icon;

            return (
              <motion.div key={category.id} variants={item}>
                <Link
                  href={`/${locale}/agents?category=${category.id}`}
                  className="group relative block h-full rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${meta.bgColor}`}>
                        <IconComponent className={`h-6 w-6 ${meta.iconColor}`} />
                      </div>
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${meta.badgeColor}`}>
                        {category.agents.length}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className={`text-xs font-mono ${meta.iconColor} opacity-70`}>
                        Category {category.id}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors mb-2">
                      {category.name[locale as 'en' | 'ko']}
                    </h3>

                    <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                      {category.description[locale as 'en' | 'ko']}
                    </p>

                    <div className={`flex items-center text-sm font-medium ${meta.iconColor} opacity-70 group-hover:opacity-100 transition-opacity`}>
                      Explore agents
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href={`/${locale}/agents`}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View all 40 agents
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
