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

  const categoryColors: Record<string, string> = {
    A: 'from-[oklch(0.65_0.15_270)] to-[oklch(0.75_0.15_270)]',
    B: 'from-[oklch(0.65_0.15_295)] to-[oklch(0.75_0.15_295)]',
    C: 'from-[oklch(0.65_0.15_175)] to-[oklch(0.75_0.15_175)]',
    D: 'from-[oklch(0.65_0.15_55)] to-[oklch(0.75_0.15_55)]',
    E: 'from-[oklch(0.65_0.15_25)] to-[oklch(0.75_0.15_25)]',
    F: 'from-[oklch(0.65_0.15_200)] to-[oklch(0.75_0.15_200)]',
    G: 'from-[oklch(0.65_0.15_330)] to-[oklch(0.75_0.15_330)]',
    H: 'from-[oklch(0.65_0.15_125)] to-[oklch(0.75_0.15_125)]',
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-gray-700">
          {t('category')}
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange('all')}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
              "border-2",
              selectedCategory === 'all'
                ? "bg-gradient-to-r from-diverga-500 to-diverga-600 text-white border-diverga-600 shadow-lg shadow-diverga-200"
                : "bg-white text-gray-700 border-gray-200 hover:border-diverga-300 hover:shadow-md"
            )}
          >
            {t('all')}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300",
                "border-2",
                selectedCategory === cat.id
                  ? cn(
                      "bg-gradient-to-r text-white shadow-lg",
                      `bg-gradient-to-r ${categoryColors[cat.id]}`
                    )
                  : "bg-white text-gray-700 border-gray-200 hover:border-diverga-300 hover:shadow-md"
              )}
            >
              {cat.id}: {cat.name[locale]}
            </button>
          ))}
        </div>
      </div>

      {/* Paradigm Filter */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-700">
          {t('paradigm')}
        </span>
        <select
          value={selectedParadigm}
          onChange={(e) => onParadigmChange(e.target.value)}
          className="rounded-full border-2 border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:border-diverga-500 focus:outline-none focus:ring-4 focus:ring-diverga-100 transition-all hover:shadow-md"
        >
          {paradigms.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tier Filter */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-700">
          {t('tier')}
        </span>
        <select
          value={selectedTier}
          onChange={(e) => onTierChange(e.target.value)}
          className="rounded-full border-2 border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:border-diverga-500 focus:outline-none focus:ring-4 focus:ring-diverga-100 transition-all hover:shadow-md"
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
