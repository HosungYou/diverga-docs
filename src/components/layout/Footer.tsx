"use client";

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Github, ExternalLink, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const links = [
    { name: t('links.github'), href: 'https://github.com/HosungYou/Diverga', external: true },
    { name: t('links.docs'), href: `/${locale}/docs` },
    { name: t('links.agents'), href: `/${locale}/agents` },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#050915]">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-diverga-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href={`/${locale}`} className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#FA5D29] to-[#FF8A5B] flex items-center justify-center shadow-lg shadow-[#FA5D29]/20">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold text-white">Diverga</span>
            </Link>
            <p className="text-sm text-white/50">{t('tagline')}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.name}
                {link.external && <ExternalLink className="h-3 w-3" />}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-between border-t border-white/10 pt-8">
          <p className="text-xs text-white/40">
            {t('copyright')}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/HosungYou/Diverga"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white transition-all"
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
