"use client";

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Github, ExternalLink } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  const links = [
    { name: t('links.github'), href: 'https://github.com/HosungYou/Diverga', external: true },
    { name: t('links.docs'), href: '/docs' },
    { name: t('links.agents'), href: '/agents' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-semibold text-gray-900">Diverga</span>
            </Link>
            <p className="text-sm text-gray-500">{t('tagline')}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1.5"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.name}
                {link.external && <ExternalLink className="h-3 w-3" />}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-between border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500">
            {t('copyright')}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/HosungYou/Diverga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
