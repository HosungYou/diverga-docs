import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import "@/styles/globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Diverga - Beyond Modal Research AI",
  description: "40 specialized AI agents for the complete research lifecycle. Break free from mode collapse with VS methodology.",
  keywords: ["research AI", "meta-analysis", "systematic review", "Claude Code", "VS methodology"],
  authors: [{ name: "Hosung You" }],
  openGraph: {
    title: "Diverga - Beyond Modal Research AI",
    description: "40 specialized AI agents for the complete research lifecycle",
    url: "https://diverga.vercel.app",
    siteName: "Diverga",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diverga - Beyond Modal Research AI",
    description: "40 specialized AI agents for the complete research lifecycle",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--background)] font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
