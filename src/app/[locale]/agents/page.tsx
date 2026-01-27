"use client";

import { Suspense, useState, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import Fuse from 'fuse.js';
import { agents } from '@/lib/data/agents';
import { categories } from '@/lib/data/categories';
import { AgentCard } from '@/components/agents/AgentCard';
import { AgentFilter } from '@/components/agents/AgentFilter';

function AgentsCatalog() {
  const t = useTranslations('agents');
  const locale = useLocale();
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedParadigm, setSelectedParadigm] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');

  // Setup Fuse.js for fuzzy search
  const fuse = useMemo(() => new Fuse(agents, {
    keys: [
      { name: 'name.en', weight: 2 },
      { name: 'name.ko', weight: 2 },
      { name: 'description.en', weight: 1 },
      { name: 'description.ko', weight: 1 },
      { name: 'triggers.en', weight: 1.5 },
      { name: 'triggers.ko', weight: 1.5 },
      { name: 'id', weight: 2 },
    ],
    threshold: 0.3,
  }), []);

  // Filter agents
  const filteredAgents = useMemo(() => {
    let result = agents;

    // Apply search
    if (searchQuery) {
      const searchResults = fuse.search(searchQuery);
      result = searchResults.map(r => r.item);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(a => a.category === selectedCategory);
    }

    // Apply paradigm filter
    if (selectedParadigm !== 'all') {
      result = result.filter(a => a.paradigms.includes(selectedParadigm as any));
    }

    // Apply tier filter
    if (selectedTier !== 'all') {
      result = result.filter(a => a.tier === selectedTier);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedParadigm, selectedTier, fuse]);

  return (
    <>
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="text-h1 font-bold text-[var(--foreground)]">
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-[var(--muted-foreground)]">
          {t('description')}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--muted-foreground)]" />
          <input
            type="text"
            placeholder={t('search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-3 pl-10 pr-4 text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-diverga-500 focus:outline-none focus:ring-2 focus:ring-diverga-500/20"
          />
        </div>

        {/* Filters */}
        <AgentFilter
          categories={categories}
          selectedCategory={selectedCategory}
          selectedParadigm={selectedParadigm}
          selectedTier={selectedTier}
          onCategoryChange={setSelectedCategory}
          onParadigmChange={setSelectedParadigm}
          onTierChange={setSelectedTier}
        />
      </div>

      {/* Results count */}
      <div className="mb-6 text-sm text-[var(--muted-foreground)]">
        {filteredAgents.length} {locale === 'ko' ? '개 에이전트' : 'agents'}
      </div>

      {/* Agent Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>

      {/* Empty state */}
      {filteredAgents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[var(--muted-foreground)]">
            {locale === 'ko' ? '검색 결과가 없습니다.' : 'No agents found.'}
          </p>
        </div>
      )}
    </>
  );
}

function AgentsCatalogFallback() {
  return (
    <div className="animate-pulse">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <div className="h-10 bg-[var(--muted)] rounded-lg w-48 mx-auto mb-4" />
        <div className="h-6 bg-[var(--muted)] rounded-lg w-96 mx-auto" />
      </div>
      <div className="mb-8">
        <div className="h-12 bg-[var(--muted)] rounded-xl max-w-md mx-auto mb-4" />
        <div className="flex justify-center gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 w-24 bg-[var(--muted)] rounded-lg" />
          ))}
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-48 bg-[var(--muted)] rounded-xl" />
        ))}
      </div>
    </div>
  );
}

export default function AgentsPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Suspense fallback={<AgentsCatalogFallback />}>
          <AgentsCatalog />
        </Suspense>
      </div>
    </div>
  );
}
