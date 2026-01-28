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
  HIGH: 'bg-void-surface text-[#9b59b6] border-[#9b59b6]/30',
  MEDIUM: 'bg-void-surface text-[#4d96ff] border-[#4d96ff]/30',
  LOW: 'bg-void-surface text-[#8888aa] border-[#8888aa]/30',
};

const tierLabels = {
  HIGH: 'Opus',
  MEDIUM: 'Sonnet',
  LOW: 'Haiku',
};

const categoryColors: Record<string, string> = {
  A: '#ff6b6b',
  B: '#ffd93d',
  C: '#6bcb77',
  D: '#4d96ff',
  E: '#9b59b6',
  F: '#e17055',
  G: '#00cec9',
  H: '#fd79a8',
};

export function AgentCard({ agent }: AgentCardProps) {
  const locale = useLocale() as 'en' | 'ko';
  const categoryColor = categoryColors[agent.category] || '#8888aa';

  return (
    <Link href={`/${locale}/agents/${agent.slug}`}>
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "group relative bg-void-elevated rounded-xl p-6",
          "border border-stellar-faint/20",
          "hover:border-stellar-faint/40 hover:shadow-glow-sm",
          "transition-all duration-200"
        )}
      >
        {/* Category accent dot with glow */}
        <div
          className="absolute top-4 right-4 w-2 h-2 rounded-full"
          style={{
            backgroundColor: categoryColor,
            boxShadow: `0 0 8px ${categoryColor}40`
          }}
        />

        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl">
            {agent.icon}
          </span>
          <div className="flex-1">
            <span
              className="text-xs font-mono"
              style={{ color: categoryColor }}
            >
              {agent.id}
            </span>
            <h3 className="font-semibold text-stellar-core group-hover:text-tscore-creative transition-colors text-base mt-0.5">
              {agent.name[locale]}
            </h3>
          </div>
        </div>

        <p className="text-sm text-stellar-dim line-clamp-2 leading-relaxed mb-4">
          {agent.description[locale]}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={cn(
              "rounded border px-2 py-0.5 text-xs font-medium font-mono",
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
          <span className="text-sm font-medium text-stellar-faint group-hover:text-tscore-creative flex items-center gap-1 transition-colors font-mono">
            {locale === 'ko' ? '상세보기' : 'Details'}
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
