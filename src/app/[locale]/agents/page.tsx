"use client";

import { Suspense, useState, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
        className="mx-auto max-w-3xl text-center mb-16"
      >
        <h1 className="void-heading-1 text-stellar-core mb-6">
          {t('title')}
        </h1>
        <p className="void-body text-xl text-stellar-dim leading-relaxed max-w-2xl mx-auto">
          {t('description')}
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
        className="mb-12 space-y-6"
      >
        {/* Search */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stellar-faint" />
          <input
            type="text"
            placeholder={t('search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-stellar-faint/20 bg-void-surface py-3 pl-12 pr-4 text-stellar-core placeholder:text-stellar-faint focus:border-tscore-creative/50 focus:outline-none focus:ring-2 focus:ring-tscore-creative/20 transition-all font-mono"
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
      </motion.div>

      {/* Results count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-8 flex items-center justify-between"
      >
        <div className="text-sm font-mono text-stellar-dim bg-void-surface px-3 py-1.5 border border-stellar-faint/20">
          {filteredAgents.length} {locale === 'ko' ? '개 에이전트' : 'agents'}
        </div>
      </motion.div>

      {/* Agent Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.2,
            },
          },
        }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredAgents.map((agent) => (
          <motion.div
            key={agent.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <AgentCard agent={agent} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filteredAgents.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4 opacity-50">&#x25C7;</div>
          <p className="void-heading-3 text-stellar-core mb-2">
            {locale === 'ko' ? '검색 결과가 없습니다' : 'No agents found'}
          </p>
          <p className="text-stellar-dim">
            {locale === 'ko' ? '다른 검색어나 필터를 시도해보세요' : 'Try different search terms or filters'}
          </p>
        </motion.div>
      )}
    </>
  );
}

function AgentsCatalogFallback() {
  return (
    <div className="animate-pulse">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <div className="h-10 bg-void-surface w-48 mx-auto mb-4" />
        <div className="h-6 bg-void-surface w-96 mx-auto" />
      </div>
      <div className="mb-8">
        <div className="h-12 bg-void-surface max-w-md mx-auto mb-4" />
        <div className="flex justify-center gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 w-24 bg-void-surface" />
          ))}
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-48 bg-void-surface" />
        ))}
      </div>
    </div>
  );
}

export default function AgentsPage() {
  return (
    <div className="py-12 sm:py-16 bg-void-deep min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Suspense fallback={<AgentsCatalogFallback />}>
          <AgentsCatalog />
        </Suspense>
      </div>
    </div>
  );
}
