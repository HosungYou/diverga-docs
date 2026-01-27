"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, ChevronDown, Zap, Hand } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { SearchBar } from '@/components/common/SearchBar';
import { ThemeToggleSimple } from '@/components/common/ThemeToggle';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);

  const navigation = [
    { name: t('agents'), href: `/${locale}/agents` },
    { name: t('gettingStarted'), href: `/${locale}/getting-started` },
    { name: t('workflows'), href: `/${locale}/workflows` },
    { name: t('docs'), href: `/${locale}/docs`, hasDropdown: true },
  ];

  const docsDropdownItems = [
    {
      name: locale === 'ko' ? 'VS 방법론' : 'VS Methodology',
      href: `/${locale}/docs/vs-methodology`,
      icon: Zap,
      badge: locale === 'ko' ? '핵심' : 'Core',
    },
    {
      name: locale === 'ko' ? '인간 체크포인트' : 'Human Checkpoints',
      href: `/${locale}/docs/checkpoints`,
      icon: Hand,
      badge: 'v6.0',
    },
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
            item.hasDropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setDocsDropdownOpen(true)}
                onMouseLeave={() => setDocsDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
                  onClick={() => setDocsDropdownOpen(!docsDropdownOpen)}
                >
                  {item.name}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", docsDropdownOpen && "rotate-180")} />
                </button>

                {docsDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 rounded-lg border border-[var(--border)] bg-[var(--background)] shadow-lg py-2 z-50">
                    <div className="px-3 py-2 border-b border-[var(--border)]">
                      <Link
                        href={item.href}
                        className="text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                      >
                        {locale === 'ko' ? '전체 문서 보기' : 'View All Documentation'}
                      </Link>
                    </div>
                    {docsDropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="flex items-start gap-3 px-3 py-2.5 hover:bg-[var(--muted)] transition-colors group"
                      >
                        <div className="mt-0.5">
                          <dropdownItem.icon className="h-4 w-4 text-diverga-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-diverga-600 transition-colors">
                              {dropdownItem.name}
                            </span>
                            <span className="inline-flex items-center rounded-full bg-diverga-100 px-2 py-0.5 text-xs font-medium text-diverga-700">
                              {dropdownItem.badge}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
              >
                {item.name}
              </Link>
            )
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
                  item.hasDropdown ? (
                    <div key={item.name} className="space-y-1">
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-[var(--foreground)] hover:bg-[var(--muted)]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-3 space-y-1 border-l-2 border-[var(--border)] pl-3">
                        {docsDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <dropdownItem.icon className="h-4 w-4 text-diverga-500" />
                            <span>{dropdownItem.name}</span>
                            <span className="ml-auto inline-flex items-center rounded-full bg-diverga-100 px-2 py-0.5 text-xs font-medium text-diverga-700">
                              {dropdownItem.badge}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-[var(--foreground)] hover:bg-[var(--muted)]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
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
