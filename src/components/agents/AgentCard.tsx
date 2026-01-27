"use client";

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Agent } from '@/lib/data/types';
import { TScoreBadge } from './TScoreBadge';
import { cn } from '@/lib/utils/cn';

interface AgentCardProps {
  agent: Agent;
}

const tierColors = {
  HIGH: 'bg-purple-100 text-purple-700',
  MEDIUM: 'bg-blue-100 text-blue-700',
  LOW: 'bg-gray-100 text-gray-700',
};

const tierLabels = {
  HIGH: 'Opus',
  MEDIUM: 'Sonnet',
  LOW: 'Haiku',
};

const categoryColors: Record<string, string> = {
  A: 'border-l-[oklch(0.55_0.15_270)]',
  B: 'border-l-[oklch(0.55_0.15_295)]',
  C: 'border-l-[oklch(0.55_0.15_175)]',
  D: 'border-l-[oklch(0.55_0.15_55)]',
  E: 'border-l-[oklch(0.55_0.15_25)]',
  F: 'border-l-[oklch(0.55_0.15_200)]',
  G: 'border-l-[oklch(0.55_0.15_330)]',
  H: 'border-l-[oklch(0.55_0.15_125)]',
};

export function AgentCard({ agent }: AgentCardProps) {
  const locale = useLocale() as 'en' | 'ko';

  return (
    <Link
      href={`/${locale}/agents/${agent.slug}`}
      className={cn(
        "group block rounded-xl border border-[var(--border)] border-l-4 bg-[var(--card)] p-5 shadow-sm hover:shadow-md hover:border-diverga-300 transition-all",
        categoryColors[agent.category]
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{agent.icon}</span>
          <div>
            <span className="text-xs font-mono text-[var(--muted-foreground)]">
              {agent.id}
            </span>
            <h3 className="font-semibold text-[var(--foreground)] group-hover:text-diverga-600 transition-colors">
              {agent.name[locale]}
            </h3>
          </div>
        </div>
        <span className={cn(
          "rounded-md px-2 py-1 text-xs font-medium",
          tierColors[agent.tier]
        )}>
          {tierLabels[agent.tier]}
        </span>
      </div>

      <p className="mt-3 text-sm text-[var(--muted-foreground)] line-clamp-2">
        {agent.description[locale]}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TScoreBadge vsLevel={agent.vsLevel} />
          {agent.checkpoint && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs">
              {agent.checkpoint.level === 'REQUIRED' ? '🔴' :
               agent.checkpoint.level === 'RECOMMENDED' ? '🟠' : '🟡'}
            </span>
          )}
        </div>
        <span className="text-sm text-diverga-500 group-hover:text-diverga-600 flex items-center gap-1">
          Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
