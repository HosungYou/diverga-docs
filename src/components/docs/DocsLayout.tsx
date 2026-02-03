'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { DocsSidebar } from './DocsSidebar';
import { DocsSearch } from './DocsSearch';

interface DocsLayoutProps {
  children: React.ReactNode;
  locale: string;
  showTOC?: boolean;
  tocComponent?: React.ReactNode;
}

export function DocsLayout({ children, locale, showTOC = false, tocComponent }: DocsLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-void-deep">
      {/* Mobile header */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center gap-4 px-4 py-3 bg-void-surface/95 backdrop-blur-sm border-b border-stellar-faint/10">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 hover:bg-void-elevated transition-colors"
        >
          <Menu className="h-5 w-5 text-stellar-dim" />
        </button>
        <div className="flex-1">
          <DocsSearch locale={locale} />
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-50 bg-void-absolute/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-80 bg-void-elevated border-r border-stellar-faint/10"
            >
              <div className="flex items-center justify-between p-4 border-b border-stellar-faint/10">
                <span className="text-stellar-bright font-medium">
                  {locale === 'ko' ? '메뉴' : 'Menu'}
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-void-surface transition-colors"
                >
                  <X className="h-5 w-5 text-stellar-dim" />
                </button>
              </div>
              <DocsSidebar locale={locale} onClose={() => setIsMobileMenuOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 sticky top-0 h-screen border-r border-stellar-faint/10 bg-void-surface/50">
          <div className="p-4 border-b border-stellar-faint/10">
            <DocsSearch locale={locale} />
          </div>
          <DocsSidebar locale={locale} />
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className={`max-w-4xl mx-auto px-6 py-8 lg:py-12 ${showTOC ? 'xl:mr-64' : ''}`}>
            {children}
          </div>
        </main>

        {/* Desktop TOC sidebar */}
        {showTOC && tocComponent && (
          <aside className="hidden xl:block w-64 shrink-0 sticky top-0 h-screen py-12 pr-8">
            {tocComponent}
          </aside>
        )}
      </div>
    </div>
  );
}
