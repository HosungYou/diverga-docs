'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { List } from 'lucide-react';

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface DocsTOCProps {
  items: TOCItem[];
  locale: string;
}

export function DocsTOC({ items, locale }: DocsTOCProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    );

    items.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-24">
      <div className="flex items-center gap-2 mb-4">
        <List className="h-4 w-4 text-stellar-faint" />
        <span className="text-xs font-mono uppercase tracking-widest text-stellar-faint">
          {locale === 'ko' ? '목차' : 'On this page'}
        </span>
      </div>

      <ul className="space-y-2 border-l border-stellar-faint/10">
        {items.map(item => {
          const isActive = activeId === item.id;

          return (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative block w-full text-left px-4 py-1 text-sm transition-all duration-200
                  ${isActive
                    ? 'text-[#44ffaa] border-l-2 border-l-[#44ffaa] -ml-px'
                    : 'text-stellar-faint hover:text-stellar-dim'
                  }
                `}
              >
                {item.title}
                {isActive && (
                  <motion.div
                    layoutId="toc-indicator"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#44ffaa]"
                    style={{ marginLeft: '-1px' }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
