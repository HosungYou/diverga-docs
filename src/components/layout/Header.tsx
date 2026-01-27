"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { SearchBar } from '@/components/common/SearchBar';
import { ThemeToggleSimple } from '@/components/common/ThemeToggle';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('agents'), href: `/${locale}/agents` },
    { name: t('gettingStarted'), href: `/${locale}/getting-started` },
    { name: t('workflows'), href: `/${locale}/workflows` },
    { name: t('docs'), href: `/${locale}/docs` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={`/${locale}`} className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="relative">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-diverga-500 to-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full bg-gold-400 border-2 border-[var(--background)]" />
            </div>
            <span className="text-xl font-bold gradient-text">Diverga</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--foreground)]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
          <SearchBar className="w-64" />
          <ThemeToggleSimple />
          <LanguageToggle />
          <Link
            href={`/${locale}/getting-started`}
            className="rounded-lg bg-diverga-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-diverga-600 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[var(--background)] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[var(--border)]">
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-diverga-500 to-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold gradient-text">Diverga</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-[var(--foreground)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-[var(--border)]">
              {/* Mobile Search */}
              <div className="py-4">
                <SearchBar className="w-full" />
              </div>
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-[var(--foreground)] hover:bg-[var(--muted)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <div className="flex items-center gap-3">
                  <ThemeToggleSimple />
                  <LanguageToggle />
                </div>
                <Link
                  href={`/${locale}/getting-started`}
                  className="block rounded-lg bg-diverga-500 px-4 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-diverga-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
