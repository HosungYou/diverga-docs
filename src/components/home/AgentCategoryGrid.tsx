"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FlaskConical, Target, BarChart3, Microscope, Shield, FileText, Globe } from 'lucide-react';
import { categories } from '@/lib/data/categories';

const categoryMeta: Record<string, { icon: React.ElementType; gradient: string; glowColor: string }> = {
  A: { icon: BookOpen, gradient: 'from-indigo-500/20 to-indigo-500/5', glowColor: 'bg-indigo-500/20' },
  B: { icon: FlaskConical, gradient: 'from-violet-500/20 to-violet-500/5', glowColor: 'bg-violet-500/20' },
  C: { icon: Target, gradient: 'from-teal-500/20 to-teal-500/5', glowColor: 'bg-teal-500/20' },
  D: { icon: BarChart3, gradient: 'from-amber-500/20 to-amber-500/5', glowColor: 'bg-amber-500/20' },
  E: { icon: Microscope, gradient: 'from-rose-500/20 to-rose-500/5', glowColor: 'bg-rose-500/20' },
  F: { icon: Shield, gradient: 'from-cyan-500/20 to-cyan-500/5', glowColor: 'bg-cyan-500/20' },
  G: { icon: FileText, gradient: 'from-fuchsia-500/20 to-fuchsia-500/5', glowColor: 'bg-fuchsia-500/20' },
  H: { icon: Globe, gradient: 'from-emerald-500/20 to-emerald-500/5', glowColor: 'bg-emerald-500/20' },
};

const categoryColors: Record<string, string> = {
  A: 'text-indigo-400 border-indigo-500/30',
  B: 'text-violet-400 border-violet-500/30',
  C: 'text-teal-400 border-teal-500/30',
  D: 'text-amber-400 border-amber-500/30',
  E: 'text-rose-400 border-rose-500/30',
  F: 'text-cyan-400 border-cyan-500/30',
  G: 'text-fuchsia-400 border-fuchsia-500/30',
  H: 'text-emerald-400 border-emerald-500/30',
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
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0f1c3e] via-[#0a1428] to-[#050915] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-diverga-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium text-white/70 mb-6">
            <span className="inline-flex h-2 w-2 rounded-full bg-[#FA5D29]" />
            8 Research Categories
          </div>
          <h2 className="text-h2 font-bold text-white tracking-[-0.02em]">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-white/60">
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
            const colors = categoryColors[category.id] || categoryColors.A;
            const IconComponent = meta.icon;

            return (
              <motion.div key={category.id} variants={item}>
                <Link
                  href={`/${locale}/agents?category=${category.id}`}
                  className="group relative block h-full rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
                >
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 ${meta.glowColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${meta.gradient} border ${colors.split(' ')[1]}`}>
                        <IconComponent className={`h-6 w-6 ${colors.split(' ')[0]}`} />
                      </div>
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-sm font-bold ${colors.split(' ')[0]}`}>
                        {category.agents.length}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className={`text-xs font-mono ${colors.split(' ')[0]} opacity-60`}>
                        Category {category.id}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white group-hover:text-white transition-colors mb-2">
                      {category.name[locale as 'en' | 'ko']}
                    </h3>

                    <p className="text-sm text-white/50 line-clamp-2 mb-4">
                      {category.description[locale as 'en' | 'ko']}
                    </p>

                    <div className={`flex items-center text-sm font-medium ${colors.split(' ')[0]} opacity-60 group-hover:opacity-100 transition-opacity`}>
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
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            View all 40 agents
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
