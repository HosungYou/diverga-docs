"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Search, X, FileText, Users, Workflow, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface SearchResult {
  type: 'agent' | 'doc' | 'workflow';
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
}

const typeIcons = {
  agent: Users,
  doc: FileText,
  workflow: Workflow,
};

const typeLabels = {
  en: { agent: 'Agent', doc: 'Documentation', workflow: 'Workflow' },
  ko: { agent: '에이전트', doc: '문서', workflow: '워크플로우' },
};

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

export function SearchBar({ className, placeholder }: SearchBarProps) {
  const locale = useLocale() as 'en' | 'ko';
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const defaultPlaceholder = locale === 'ko' ? '에이전트, 문서 검색...' : 'Search agents, docs...';

  // Debounced search
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(query)}&locale=${locale}&limit=8`
        );
        const data = await response.json();
        setResults(data.results || []);
        setIsOpen(true);
        setSelectedIndex(-1);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, locale]);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen || results.length === 0) {
        if (e.key === 'Escape') {
          setQuery('');
          inputRef.current?.blur();
        }
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            navigateToResult(results[selectedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setQuery('');
          inputRef.current?.blur();
          break;
      }
    },
    [isOpen, results, selectedIndex]
  );

  const navigateToResult = (result: SearchResult) => {
    setIsOpen(false);
    setQuery('');
    router.push(`/${locale}${result.href}`);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && results.length > 0 && setIsOpen(true)}
          placeholder={placeholder || defaultPlaceholder}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] py-2 pl-9 pr-9 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:border-diverga-500 focus:outline-none focus:ring-2 focus:ring-diverga-500/20"
        />
        {isLoading ? (
          <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)] animate-spin" />
        ) : query.length > 0 ? (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-lg overflow-hidden">
          <div className="max-h-[400px] overflow-y-auto">
            {results.map((result, index) => {
              const Icon = typeIcons[result.type];
              return (
                <button
                  key={`${result.type}-${result.id}`}
                  onClick={() => navigateToResult(result)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={cn(
                    'w-full flex items-start gap-3 px-4 py-3 text-left transition-colors',
                    selectedIndex === index
                      ? 'bg-diverga-50'
                      : 'hover:bg-[var(--muted)]'
                  )}
                >
                  <div className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                    result.type === 'agent' ? 'bg-diverga-100 text-diverga-600' :
                    result.type === 'workflow' ? 'bg-teal-100 text-teal-600' :
                    'bg-gold-100 text-gold-600'
                  )}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[var(--foreground)] truncate">
                        {result.title}
                      </span>
                      {result.type === 'agent' && (
                        <span className="text-xs font-mono text-[var(--muted-foreground)]">
                          {result.id}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)] truncate">
                      {result.description}
                    </p>
                    <span className="text-xs text-[var(--muted-foreground)]">
                      {typeLabels[locale][result.type]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Keyboard hint */}
          <div className="border-t border-[var(--border)] px-4 py-2 text-xs text-[var(--muted-foreground)] flex items-center gap-4">
            <span><kbd className="px-1.5 py-0.5 rounded bg-[var(--muted)] font-mono">↑↓</kbd> {locale === 'ko' ? '이동' : 'navigate'}</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-[var(--muted)] font-mono">↵</kbd> {locale === 'ko' ? '선택' : 'select'}</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-[var(--muted)] font-mono">esc</kbd> {locale === 'ko' ? '닫기' : 'close'}</span>
          </div>
        </div>
      )}

      {/* No results message */}
      {isOpen && query.length >= 2 && results.length === 0 && !isLoading && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-lg p-4 text-center text-sm text-[var(--muted-foreground)]">
          {locale === 'ko' ? '검색 결과가 없습니다.' : 'No results found.'}
        </div>
      )}
    </div>
  );
}
