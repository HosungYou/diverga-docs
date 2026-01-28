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
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "group relative bg-white rounded-xl p-6",
          "shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]",
          "hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]",
          "transition-all duration-200 border border-gray-100"
        )}
      >
        {/* Category accent dot */}
        <div className={cn(
          "absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r",
          categoryGradients[agent.category]
        )} />

        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl">
            {agent.icon}
          </span>
          <div className="flex-1">
            <span className="text-xs font-mono text-gray-500">
              {agent.id}
            </span>
            <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors text-base mt-0.5">
              {agent.name[locale]}
            </h3>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
          {agent.description[locale]}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={cn(
              "rounded border px-2 py-0.5 text-xs font-medium",
              tierColors[agent.tier]
            )}>
              {tierLabels[agent.tier]}
            </span>
            {agent.checkpoint && agent.checkpoint.level && (
              <span className="text-xs">
                {agent.checkpoint.level === 'REQUIRED' ? '🔴' :
                 agent.checkpoint.level === 'RECOMMENDED' ? '🟠' : '🟡'}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-gray-400 group-hover:text-indigo-600 flex items-center gap-1 transition-colors">
            {locale === 'ko' ? '상세보기' : 'Details'}
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
