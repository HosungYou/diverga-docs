export const locales = ['en', 'ko'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  ko: '🇰🇷',
};
