"use client";

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Github, ExternalLink } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const links = [
    { name: t('links.github'), href: 'https://github.com/HosungYou/Diverga', external: true },
    { name: t('links.docs'), href: `/${locale}/docs` },
    { name: t('links.agents'), href: `/${locale}/agents` },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-diverga-500 to-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold gradient-text">Diverga</span>
            </Link>
            <p className="text-sm text-[var(--muted-foreground)]">{t('tagline')}</p>
          </div>

          <nav className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.name}
                {link.external && <ExternalLink className="h-3 w-3" />}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between border-t border-[var(--border)] pt-8">
          <p className="text-xs text-[var(--muted-foreground)]">
            {t('copyright')}
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/HosungYou/Diverga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
