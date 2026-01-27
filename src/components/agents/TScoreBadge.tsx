"use client";

import { cn } from '@/lib/utils/cn';

interface TScoreBadgeProps {
  vsLevel: 'FULL' | 'ENHANCED' | 'LIGHT';
  className?: string;
}

const vsLevelConfig = {
  FULL: {
    label: 'VS Full',
    className: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  },
  ENHANCED: {
    label: 'VS Enhanced',
    className: 'bg-cyan-100 text-cyan-700 border-cyan-200',
  },
  LIGHT: {
    label: 'VS Light',
    className: 'bg-gray-100 text-gray-600 border-gray-200',
  },
};

export function TScoreBadge({ vsLevel, className }: TScoreBadgeProps) {
  const config = vsLevelConfig[vsLevel];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
