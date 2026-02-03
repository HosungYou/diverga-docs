'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Rocket,
  Sparkles,
  Users,
  GraduationCap,
  Download,
  Zap,
  Settings,
  Brain,
  ShieldCheck,
  Grid,
  Book,
  Layers,
  BookOpen,
  PenTool,
  Terminal,
  ArrowRight,
} from 'lucide-react';

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  rocket: Rocket,
  sparkles: Sparkles,
  users: Users,
  'graduation-cap': GraduationCap,
  download: Download,
  zap: Zap,
  settings: Settings,
  brain: Brain,
  'shield-check': ShieldCheck,
  grid: Grid,
  book: Book,
  layers: Layers,
  'book-open': BookOpen,
  'pen-tool': PenTool,
  terminal: Terminal,
};

interface DocsCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  color?: string;
  isNew?: boolean;
  isExternal?: boolean;
  locale: string;
}

export function DocsCard({
  title,
  description,
  href,
  icon,
  color = '#44ffaa',
  isNew,
  isExternal,
  locale,
}: DocsCardProps) {
  const Icon = iconMap[icon] || Sparkles;

  const content = (
    <motion.div
      whileHover={{ y: -4, borderColor: `${color}50` }}
      transition={{ duration: 0.2 }}
      className="group relative h-full p-5 bg-void-elevated border border-stellar-faint/10 transition-all duration-300 overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${color}10 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div
        className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20 mb-4 transition-colors duration-300"
        style={{
          backgroundColor: `${color}10`,
        }}
      >
        <span style={{ color }}>
          <Icon className="h-5 w-5" />
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-stellar-bright font-medium group-hover:text-stellar-core transition-colors">
            {title}
          </h3>
          {isNew && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase bg-[#44ffaa]/20 text-[#44ffaa] border border-[#44ffaa]/30">
              NEW
            </span>
          )}
        </div>
        <p className="text-sm text-stellar-dim leading-relaxed">
          {description}
        </p>
      </div>

      {/* Arrow indicator */}
      <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span style={{ color }}>
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </motion.div>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={`/${locale}${href}`} className="block h-full">
      {content}
    </Link>
  );
}

// Category card with multiple items
interface DocsCategoryCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  items: {
    title: string;
    description: string;
    href: string;
    icon: string;
    isNew?: boolean;
  }[];
  locale: string;
}

export function DocsCategoryCard({
  title,
  description,
  icon,
  color,
  items,
  locale,
}: DocsCategoryCardProps) {
  const Icon = iconMap[icon] || Sparkles;

  return (
    <div className="bg-void-elevated border border-stellar-faint/10 overflow-hidden">
      {/* Category header */}
      <div
        className="px-6 py-4 border-b"
        style={{ borderColor: `${color}30`, backgroundColor: `${color}05` }}
      >
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center border"
            style={{ backgroundColor: `${color}20`, borderColor: `${color}30` }}
          >
            <span style={{ color }}>
              <Icon className="h-5 w-5" />
            </span>
          </div>
          <div>
            <h2 className="text-stellar-bright font-medium">{title}</h2>
            <p className="text-sm text-stellar-dim">{description}</p>
          </div>
        </div>
      </div>

      {/* Items grid */}
      <div className="p-4 grid gap-3">
        {items.map((item, index) => {
          const ItemIcon = iconMap[item.icon] || Sparkles;

          return (
            <Link
              key={index}
              href={`/${locale}${item.href}`}
              className="group flex items-start gap-3 p-3 hover:bg-void-surface/50 transition-colors"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-void-surface border border-stellar-faint/20 group-hover:border-stellar-faint/40 transition-colors">
                <ItemIcon className="h-4 w-4 text-stellar-faint group-hover:text-stellar-dim transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-stellar-dim group-hover:text-stellar-bright transition-colors font-medium">
                    {item.title}
                  </span>
                  {item.isNew && (
                    <span className="px-1 py-0.5 text-[9px] font-mono uppercase bg-[#44ffaa]/20 text-[#44ffaa] border border-[#44ffaa]/30">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-xs text-stellar-faint truncate">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-stellar-faint/50 group-hover:text-stellar-dim transition-colors mt-2" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
