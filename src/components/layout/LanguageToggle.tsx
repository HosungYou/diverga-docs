"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils/cn';

export function LanguageToggle() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: Locale) => {
    // Replace the current locale in the pathname with the new one
    const segments = pathname.split('/');
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center gap-1 rounded-lg border border-[var(--border)] p-1">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => handleLocaleChange(l)}
          className={cn(
            "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
            locale === l
              ? "bg-diverga-500 text-white"
              : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
          )}
        >
          <span>{localeFlags[l]}</span>
          <span className="hidden sm:inline">{localeNames[l]}</span>
        </button>
      ))}
    </div>
  );
}
