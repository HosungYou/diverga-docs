'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

interface NavItem {
  href: string;
  label: string;
  labelKo: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    href: string;
    label: string;
    labelKo: string;
    icon: string;
    isNew?: boolean;
  }[];
}

const navItems: NavItem[] = [
  { href: '/agents', label: 'Agents', labelKo: '에이전트' },
  {
    href: '/features',
    label: 'Features',
    labelKo: '기능',
    hasDropdown: true,
    dropdownItems: [
      { href: '/features/memory-system', label: 'Memory System', labelKo: '메모리 시스템', icon: '🧠', isNew: true },
      { href: '/features/vs-methodology', label: 'VS Methodology', labelKo: 'VS 방법론', icon: '🎯' },
      { href: '/features/checkpoints', label: 'Human Checkpoints', labelKo: '휴먼 체크포인트', icon: '🛑' },
      { href: '/features/systematic-review', label: 'Systematic Review', labelKo: '체계적 문헌고찰', icon: '📚' },
      { href: '/features/humanization', label: 'Humanization', labelKo: '휴먼화', icon: '✍️' },
    ],
  },
  { href: '/getting-started', label: 'Getting Started', labelKo: '시작하기' },
  { href: '/workflows', label: 'Workflows', labelKo: '워크플로우' },
  { href: '/docs', label: 'Docs', labelKo: '문서' },
];

export function VoidNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const locale = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (href: string) => {
    setOpenDropdown(openDropdown === href ? null : href);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-stellar-faint/10 bg-void-deep/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-display text-xl font-bold tracking-tight text-stellar-core transition-all group-hover:text-tscore-creative">
            DIVERGA
          </span>
          <span className="rounded-none border border-stellar-faint/20 bg-void-surface/50 px-2 py-0.5 font-mono text-micro text-stellar-faint backdrop-blur-sm">
            T-0.42
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex" ref={dropdownRef}>
          {navItems.map((item) => {
            const isActive = pathname?.includes(item.href);
            const isDropdownOpen = openDropdown === item.href;

            if (item.hasDropdown) {
              return (
                <div key={item.href} className="relative">
                  <button
                    onClick={() => handleDropdownToggle(item.href)}
                    className={`void-nav-link relative flex items-center gap-1 py-2 ${
                      isActive ? 'text-stellar-core' : ''
                    }`}
                  >
                    {locale === 'ko' ? item.labelKo : item.label}
                    <svg
                      className={`h-3 w-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-px left-0 right-0 h-px bg-tscore-creative"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-64 border border-stellar-faint/10 bg-void-deep/95 backdrop-blur-xl"
                      >
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                              className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-void-hover"
                            >
                              <span className="text-lg">{dropdownItem.icon}</span>
                              <span className="font-mono text-sm text-stellar-dim hover:text-stellar-core">
                                {locale === 'ko' ? dropdownItem.labelKo : dropdownItem.label}
                              </span>
                              {dropdownItem.isNew && (
                                <span className="ml-auto rounded-none bg-tscore-creative/20 px-1.5 py-0.5 font-mono text-micro text-tscore-creative">
                                  NEW
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                        {/* View all link */}
                        <div className="border-t border-stellar-faint/10 px-4 py-2">
                          <Link
                            href={item.href}
                            className="flex items-center justify-between font-mono text-micro text-stellar-faint transition-colors hover:text-stellar-core"
                          >
                            <span>{locale === 'ko' ? '모두 보기' : 'View All Features'}</span>
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`void-nav-link relative py-2 ${
                  isActive ? 'text-stellar-core' : ''
                }`}
              >
                {locale === 'ko' ? item.labelKo : item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-px left-0 right-0 h-px bg-tscore-creative"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Language Toggle */}
          <div className="flex items-center gap-1 border-l border-stellar-faint/20 pl-6">
            <Link
              href={pathname || '/'}
              locale="en"
              className={`font-mono text-micro uppercase tracking-widest transition-colors ${
                locale === 'en' ? 'text-stellar-core' : 'text-stellar-faint hover:text-stellar-dim'
              }`}
            >
              EN
            </Link>
            <span className="text-stellar-faint/50">/</span>
            <Link
              href={pathname || '/'}
              locale="ko"
              className={`font-mono text-micro uppercase tracking-widest transition-colors ${
                locale === 'ko' ? 'text-stellar-core' : 'text-stellar-faint hover:text-stellar-dim'
              }`}
            >
              KO
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/getting-started"
            className="void-btn void-btn-primary ml-2"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <div className="relative flex h-5 w-6 flex-col justify-center gap-1.5">
            <motion.span
              animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="h-px w-full bg-stellar-core transition-colors"
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="h-px w-full bg-stellar-core transition-colors"
            />
            <motion.span
              animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="h-px w-full bg-stellar-core transition-colors"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-stellar-faint/10 bg-void-deep/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.href)}
                        className="flex w-full items-center justify-between py-3 font-display text-lg uppercase tracking-wider text-stellar-dim transition-colors hover:text-stellar-core"
                      >
                        <span>{locale === 'ko' ? item.labelKo : item.label}</span>
                        <svg
                          className={`h-4 w-4 text-stellar-faint transition-transform duration-200 ${
                            openDropdown === item.href ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.href && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 overflow-hidden border-l border-stellar-faint/10"
                          >
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className="flex items-center gap-3 py-2 pl-4 text-stellar-faint transition-colors hover:text-stellar-core"
                              >
                                <span>{dropdownItem.icon}</span>
                                <span className="font-mono text-sm">
                                  {locale === 'ko' ? dropdownItem.labelKo : dropdownItem.label}
                                </span>
                                {dropdownItem.isNew && (
                                  <span className="rounded-none bg-tscore-creative/20 px-1.5 py-0.5 font-mono text-micro text-tscore-creative">
                                    NEW
                                  </span>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3 font-display text-lg uppercase tracking-wider text-stellar-dim transition-colors hover:text-stellar-core"
                    >
                      <span>{locale === 'ko' ? item.labelKo : item.label}</span>
                      <svg
                        className="h-4 w-4 text-stellar-faint"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile Language Toggle */}
              <div className="mt-4 flex items-center gap-4 border-t border-stellar-faint/10 pt-4">
                <span className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
                  Language:
                </span>
                <Link
                  href={pathname || '/'}
                  locale="en"
                  className={`font-mono text-sm uppercase ${
                    locale === 'en' ? 'text-stellar-core' : 'text-stellar-faint'
                  }`}
                >
                  English
                </Link>
                <Link
                  href={pathname || '/'}
                  locale="ko"
                  className={`font-mono text-sm uppercase ${
                    locale === 'ko' ? 'text-stellar-core' : 'text-stellar-faint'
                  }`}
                >
                  한국어
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
