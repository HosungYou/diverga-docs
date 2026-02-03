'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { getBreadcrumbPath } from '@/lib/data/docs-navigation';

interface DocsBreadcrumbProps {
  locale: string;
}

export function DocsBreadcrumb({ locale }: DocsBreadcrumbProps) {
  const pathname = usePathname();
  const currentPath = pathname.replace(`/${locale}`, '');
  const breadcrumbs = getBreadcrumbPath(currentPath, locale);

  // Don't show breadcrumb on docs home
  if (currentPath === '/docs') {
    return null;
  }

  return (
    <nav className="flex items-center gap-2 text-sm mb-6">
      <Link
        href={`/${locale}/docs`}
        className="flex items-center gap-1 text-stellar-faint hover:text-stellar-dim transition-colors"
      >
        <Home className="h-3.5 w-3.5" />
      </Link>

      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center gap-2">
          <ChevronRight className="h-3.5 w-3.5 text-stellar-faint/50" />
          {index === breadcrumbs.length - 1 ? (
            <span className="text-stellar-bright font-medium">
              {crumb.title}
            </span>
          ) : (
            <Link
              href={crumb.href}
              className="text-stellar-faint hover:text-stellar-dim transition-colors"
            >
              {crumb.title}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
