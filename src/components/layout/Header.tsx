"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, ChevronDown } from 'lucide-react';
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
    },
    {
      name: locale === 'ko' ? '인간 체크포인트' : 'Human Checkpoints',
      href: `/${locale}/docs/checkpoints`,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-xl font-semibold text-gray-900">Diverga</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setDocsDropdownOpen(!docsDropdownOpen)}
                >
                  {item.name}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", docsDropdownOpen && "rotate-180")} />
                </button>

                {docsDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-gray-100 bg-white shadow-lg py-2 z-50">
                    <div className="px-3 py-2 border-b border-gray-100">
                      <Link
                        href={item.href}
                        className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {locale === 'ko' ? '전체 문서 보기' : 'View All Documentation'}
                      </Link>
                    </div>
                    {docsDropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-3 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-900 hover:text-gray-700">
                          {dropdownItem.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
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
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 z-50 bg-gray-900/50" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-xl">
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <span className="text-xl font-semibold text-gray-900">Diverga</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="py-4">
                <SearchBar className="w-full" />
              </div>
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  item.hasDropdown ? (
                    <div key={item.name} className="space-y-1">
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-3 space-y-1 border-l-2 border-gray-200 pl-3">
                        {docsDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
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
                  className="block rounded-lg bg-gray-900 px-4 py-2.5 text-center text-base font-semibold text-white hover:bg-gray-800"
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
