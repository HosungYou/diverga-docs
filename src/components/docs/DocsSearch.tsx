'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Command, Sparkles } from 'lucide-react';
import { flattenNavigation, docsNavigation, type DocsNavItem } from '@/lib/data/docs-navigation';

interface DocsSearchProps {
  locale: string;
  placeholder?: string;
}

// Static - computed once at module load since docsNavigation is a static import
const allItems = flattenNavigation(docsNavigation);

export function DocsSearch({ locale, placeholder }: DocsSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DocsNavItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const defaultPlaceholder = locale === 'ko' ? 'Diverga 문서 검색...' : 'Search Diverga docs...';

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = allItems.filter(item => {
      const titleEn = item.title.en.toLowerCase();
      const titleKo = item.title.ko.toLowerCase();
      return titleEn.includes(searchQuery) || titleKo.includes(searchQuery);
    }).slice(0, 8);

    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  // Keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Cmd/Ctrl + K to open
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setIsOpen(prev => !prev);
    }

    // Escape to close
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle navigation in results
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      const item = results[selectedIndex];
      if (item.href && !item.isExternal) {
        router.push(item.href);
        setIsOpen(false);
        setQuery('');
      }
    }
  };

  const navigateToResult = (item: DocsNavItem) => {
    if (item.href) {
      if (item.isExternal) {
        window.open(item.href, '_blank');
      } else {
        router.push(item.href);
      }
      setIsOpen(false);
      setQuery('');
    }
  };

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-3 w-full px-4 py-2.5 bg-void-surface border border-stellar-faint/20 hover:border-stellar-faint/40 transition-colors"
      >
        <Search className="h-4 w-4 text-stellar-faint group-hover:text-stellar-dim" />
        <span className="flex-1 text-left text-sm text-stellar-faint">
          {placeholder || defaultPlaceholder}
        </span>
        <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 bg-void-deep border border-stellar-faint/20 text-xs text-stellar-faint font-mono">
          <Command className="h-3 w-3" />
          <span>K</span>
        </kbd>
      </button>

      {/* Search modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-void-absolute/80 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className="fixed left-1/2 top-[15%] z-50 w-full max-w-2xl -translate-x-1/2"
            >
              <div className="mx-4 bg-void-elevated border border-stellar-faint/20 shadow-2xl overflow-hidden">
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-stellar-faint/10">
                  <Search className="h-5 w-5 text-stellar-faint" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    placeholder={placeholder || defaultPlaceholder}
                    className="flex-1 bg-transparent text-stellar-bright placeholder:text-stellar-faint outline-none"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      className="p-1 hover:bg-void-surface rounded transition-colors"
                    >
                      <X className="h-4 w-4 text-stellar-faint" />
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-2 py-1 text-xs text-stellar-faint hover:text-stellar-dim border border-stellar-faint/20 font-mono"
                  >
                    ESC
                  </button>
                </div>

                {/* Results */}
                <div className="max-h-[60vh] overflow-y-auto">
                  {results.length > 0 ? (
                    <div className="py-2">
                      {results.map((item, index) => (
                        <button
                          key={item.id}
                          onClick={() => navigateToResult(item)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`
                            w-full flex items-center gap-3 px-4 py-3 text-left transition-colors
                            ${index === selectedIndex ? 'bg-void-surface' : 'hover:bg-void-surface/50'}
                          `}
                        >
                          <div className="flex h-8 w-8 items-center justify-center bg-void-deep border border-stellar-faint/20">
                            <Sparkles className="h-4 w-4 text-stellar-faint" />
                          </div>
                          <div className="flex-1">
                            <p className={`text-sm ${index === selectedIndex ? 'text-stellar-bright' : 'text-stellar-dim'}`}>
                              {item.title[locale as 'en' | 'ko']}
                            </p>
                            {item.href && (
                              <p className="text-xs text-stellar-faint font-mono">
                                {item.href}
                              </p>
                            )}
                          </div>
                          {index === selectedIndex && (
                            <ArrowRight className="h-4 w-4 text-[#44ffaa]" />
                          )}
                          {item.isNew && (
                            <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase bg-[#44ffaa]/20 text-[#44ffaa] border border-[#44ffaa]/30">
                              NEW
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  ) : query ? (
                    <div className="py-12 text-center">
                      <Search className="h-8 w-8 text-stellar-faint mx-auto mb-3 opacity-50" />
                      <p className="text-stellar-dim">
                        {locale === 'ko' ? '결과가 없습니다' : 'No results found'}
                      </p>
                      <p className="text-sm text-stellar-faint mt-1">
                        {locale === 'ko' ? '다른 검색어를 시도해보세요' : 'Try a different search term'}
                      </p>
                    </div>
                  ) : (
                    <div className="py-8 px-4">
                      <p className="text-xs font-mono uppercase tracking-widest text-stellar-faint mb-4">
                        {locale === 'ko' ? '빠른 링크' : 'Quick Links'}
                      </p>
                      <div className="grid gap-2">
                        {[
                          { title: { en: 'Getting Started', ko: '시작하기' }, href: '/docs/quick-start' },
                          { title: { en: 'Agent Catalog', ko: '에이전트 카탈로그' }, href: '/agents' },
                          { title: { en: 'VS Methodology', ko: 'VS 방법론' }, href: '/docs/vs-methodology' },
                          { title: { en: 'Memory System', ko: '메모리 시스템' }, href: '/docs/memory-system' },
                        ].map(link => (
                          <button
                            key={link.href}
                            onClick={() => {
                              router.push(link.href);
                              setIsOpen(false);
                            }}
                            className="flex items-center gap-3 px-3 py-2 text-sm text-stellar-dim hover:text-stellar-bright hover:bg-void-surface/50 transition-colors"
                          >
                            <ArrowRight className="h-3 w-3 text-stellar-faint" />
                            {link.title[locale as 'en' | 'ko']}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-stellar-faint/10 bg-void-surface/50">
                  <div className="flex items-center gap-4 text-xs text-stellar-faint">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-void-deep border border-stellar-faint/20 font-mono">↑↓</kbd>
                      {locale === 'ko' ? '탐색' : 'Navigate'}
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-void-deep border border-stellar-faint/20 font-mono">↵</kbd>
                      {locale === 'ko' ? '이동' : 'Go'}
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-void-deep border border-stellar-faint/20 font-mono">esc</kbd>
                      {locale === 'ko' ? '닫기' : 'Close'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
