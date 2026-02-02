"use client";

import { motion } from 'framer-motion';
import { features } from '@/lib/data/features';
import { FeatureCard } from './FeatureCard';

interface FeaturesGridProps {
  locale: string;
}

export function FeaturesGrid({ locale }: FeaturesGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 mb-6 shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-violet-500" />
            {locale === 'ko' ? '5가지 핵심 기능' : '5 Core Features'}
          </div>
          <h2 className="text-h2 font-bold text-gray-900 tracking-[-0.02em]">
            {locale === 'ko'
              ? '사회과학 연구를 위한 혁신적 기능'
              : 'Revolutionary Features for Social Science Research'}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {locale === 'ko'
              ? 'Diverga는 연구자의 통제권을 유지하면서 AI가 창의적 대안을 제시하도록 설계되었습니다'
              : 'Diverga is designed to help AI provide creative alternatives while keeping researchers in control'}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={item}>
              <FeatureCard feature={feature} locale={locale} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
