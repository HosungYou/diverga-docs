"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Category } from '@/lib/data/types';
import { cn } from '@/lib/utils/cn';

interface AgentFilterProps {
  categories: Category[];
  selectedCategory: string;
  selectedParadigm: string;
  selectedTier: string;
  onCategoryChange: (value: string) => void;
  onParadigmChange: (value: string) => void;
  onTierChange: (value: string) => void;
}

export function AgentFilter({
  categories,
  selectedCategory,
  selectedParadigm,
  selectedTier,
  onCategoryChange,
  onParadigmChange,
  onTierChange,
}: AgentFilterProps) {
  const t = useTranslations('agents.filter');
  const locale = useLocale() as 'en' | 'ko';

  const paradigms = [
    { value: 'all', label: t('all') },
    { value: 'quantitative', label: locale === 'ko' ? '양적 연구' : 'Quantitative' },
    { value: 'qualitative', label: locale === 'ko' ? '질적 연구' : 'Qualitative' },
    { value: 'mixed', label: locale === 'ko' ? '혼합 방법' : 'Mixed Methods' },
  ];

  const tiers = [
    { value: 'all', label: t('all') },
    { value: 'HIGH', label: 'High (Opus)' },
    { value: 'MEDIUM', label: 'Medium (Sonnet)' },
    { value: 'LOW', label: 'Low (Haiku)' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-[var(--muted-foreground)]">
          {t('category')}:
        </span>
        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => onCategoryChange('all')}
            className={cn(
              "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
              selectedCategory === 'all'
                ? "bg-diverga-500 text-white"
                : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-diverga-100"
            )}
          >
            {t('all')}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                selectedCategory === cat.id
                  ? "bg-diverga-500 text-white"
                  : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-diverga-100"
              )}
            >
              {cat.id}: {cat.name[locale]}
            </button>
          ))}
        </div>
      </div>

      {/* Paradigm Filter */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-[var(--muted-foreground)]">
          {t('paradigm')}:
        </span>
        <select
          value={selectedParadigm}
          onChange={(e) => onParadigmChange(e.target.value)}
          className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--foreground)] focus:border-diverga-500 focus:outline-none"
        >
          {paradigms.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tier Filter */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-[var(--muted-foreground)]">
          {t('tier')}:
        </span>
        <select
          value={selectedTier}
          onChange={(e) => onTierChange(e.target.value)}
          className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--foreground)] focus:border-diverga-500 focus:outline-none"
        >
          {tiers.map((tier) => (
            <option key={tier.value} value={tier.value}>
              {tier.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
