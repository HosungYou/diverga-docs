"use client";

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Agent } from '@/lib/data/types';
import { TScoreBadge } from './TScoreBadge';
import { cn } from '@/lib/utils/cn';

interface AgentCardProps {
  agent: Agent;
}

const tierColors = {
  HIGH: 'bg-purple-50 text-purple-700 border-purple-200',
  MEDIUM: 'bg-blue-50 text-blue-700 border-blue-200',
  LOW: 'bg-gray-50 text-gray-700 border-gray-200',
};

const tierLabels = {
  HIGH: 'Opus',
  MEDIUM: 'Sonnet',
  LOW: 'Haiku',
};

const categoryGradients: Record<string, string> = {
  A: 'from-[oklch(0.65_0.15_270)] to-[oklch(0.75_0.15_270)]',
  B: 'from-[oklch(0.65_0.15_295)] to-[oklch(0.75_0.15_295)]',
  C: 'from-[oklch(0.65_0.15_175)] to-[oklch(0.75_0.15_175)]',
  D: 'from-[oklch(0.65_0.15_55)] to-[oklch(0.75_0.15_55)]',
  E: 'from-[oklch(0.65_0.15_25)] to-[oklch(0.75_0.15_25)]',
  F: 'from-[oklch(0.65_0.15_200)] to-[oklch(0.75_0.15_200)]',
  G: 'from-[oklch(0.65_0.15_330)] to-[oklch(0.75_0.15_330)]',
  H: 'from-[oklch(0.65_0.15_125)] to-[oklch(0.75_0.15_125)]',
};

export function AgentCard({ agent }: AgentCardProps) {
  const locale = useLocale() as 'en' | 'ko';

  return (
    <Link href={`/${locale}/agents/${agent.slug}`}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "group relative bg-white rounded-[20px] p-6",
          "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]",
          "hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)]",
          "transition-all duration-300 border border-gray-100",
          "overflow-hidden"
        )}
      >
        {/* Category accent bar */}
        <div className={cn(
          "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r",
          categoryGradients[agent.category]
        )} />

        <div className="flex items-start justify-between mt-2">
          <div className="flex items-center gap-3">
            <motion.span
              className="text-3xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {agent.icon}
            </motion.span>
            <div>
              <span className="text-xs font-mono text-gray-500">
                {agent.id}
              </span>
              <h3 className="font-bold text-gray-900 group-hover:text-diverga-600 transition-colors text-lg">
                {agent.name[locale]}
              </h3>
            </div>
          </div>
          <span className={cn(
            "rounded-lg border px-2.5 py-1 text-xs font-semibold shrink-0",
            tierColors[agent.tier]
          )}>
            {tierLabels[agent.tier]}
          </span>
        </div>

        <p className="mt-4 text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {agent.description[locale]}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TScoreBadge vsLevel={agent.vsLevel} />
            {agent.checkpoint && agent.checkpoint.level && (
              <motion.span
                whileHover={{ scale: 1.15 }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-xs shadow-sm"
              >
                {agent.checkpoint.level === 'REQUIRED' ? '🔴' :
                 agent.checkpoint.level === 'RECOMMENDED' ? '🟠' : '🟡'}
              </motion.span>
            )}
          </div>
          <motion.span
            className="text-sm font-semibold text-diverga-500 group-hover:text-diverga-600 flex items-center gap-1.5"
            whileHover={{ x: 4 }}
          >
            {locale === 'ko' ? '상세보기' : 'Details'}
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
}
