'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

interface NavItem {
  href: string;
  label: string;
  labelKo: string;
}

const navItems: NavItem[] = [
  { href: '/agents', label: 'Agents', labelKo: '에이전트' },
  { href: '/getting-started', label: 'Getting Started', labelKo: '시작하기' },
  { href: '/workflows', label: 'Workflows', labelKo: '워크플로우' },
  { href: '/docs', label: 'Docs', labelKo: '문서' },
];

export function VoidNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

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
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <span className="font-display text-xl font-bold tracking-tight text-stellar-core transition-all group-hover:text-tscore-creative">
            DIVERGA
          </span>
          <span className="rounded-none border border-stellar-faint/20 bg-void-surface/50 px-2 py-0.5 font-mono text-micro text-stellar-faint backdrop-blur-sm">
            T-0.42
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname?.includes(item.href);
            return (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
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
              href={pathname?.replace(`/${locale}`, '/en') || '/en'}
              className={`font-mono text-micro uppercase tracking-widest transition-colors ${
                locale === 'en' ? 'text-stellar-core' : 'text-stellar-faint hover:text-stellar-dim'
              }`}
            >
              EN
            </Link>
            <span className="text-stellar-faint/50">/</span>
            <Link
              href={pathname?.replace(`/${locale}`, '/ko') || '/ko'}
              className={`font-mono text-micro uppercase tracking-widest transition-colors ${
                locale === 'ko' ? 'text-stellar-core' : 'text-stellar-faint hover:text-stellar-dim'
              }`}
            >
              KO
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href={`/${locale}/getting-started`}
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
                  <Link
                    href={`/${locale}${item.href}`}
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
                </motion.div>
              ))}

              {/* Mobile Language Toggle */}
              <div className="mt-4 flex items-center gap-4 border-t border-stellar-faint/10 pt-4">
                <span className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
                  Language:
                </span>
                <Link
                  href={pathname?.replace(`/${locale}`, '/en') || '/en'}
                  className={`font-mono text-sm uppercase ${
                    locale === 'en' ? 'text-stellar-core' : 'text-stellar-faint'
                  }`}
                >
                  English
                </Link>
                <Link
                  href={pathname?.replace(`/${locale}`, '/ko') || '/ko'}
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
