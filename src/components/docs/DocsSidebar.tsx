'use client';

import { useState, useEffect, useRef } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  Home,
  Download,
  Zap,
  Settings,
  Brain,
  Sparkles,
  ShieldCheck,
  BookOpen,
  PenTool,
  Users,
  Layout,
  Search,
  Compass,
  Database,
  BarChart,
  CheckCircle,
  MessageCircle,
  Star,
  Terminal,
  Sliders,
  Layers,
  GitCommit,
  Github,
  ExternalLink,
  GraduationCap,
  Rocket,
} from 'lucide-react';
import { docsNavigation, type DocsNavItem, type DocsSection } from '@/lib/data/docs-navigation';

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  download: Download,
  zap: Zap,
  settings: Settings,
  brain: Brain,
  sparkles: Sparkles,
  'shield-check': ShieldCheck,
  'book-open': BookOpen,
  'pen-tool': PenTool,
  users: Users,
  layout: Layout,
  search: Search,
  compass: Compass,
  database: Database,
  'bar-chart': BarChart,
  'check-circle': CheckCircle,
  'message-circle': MessageCircle,
  star: Star,
  terminal: Terminal,
  sliders: Sliders,
  layers: Layers,
  'git-commit': GitCommit,
  github: Github,
  'graduation-cap': GraduationCap,
  rocket: Rocket,
};

interface DocsSidebarProps {
  locale: string;
  onClose?: () => void;
}

export function DocsSidebar({ locale, onClose }: DocsSidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['getting-started', 'tutorials', 'core-features']));
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Close mobile menu when route changes
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    onCloseRef.current?.();
  }, [pathname]);

  // next-intl Link handles locale prefixes automatically
  const buildHref = (path: string) => path;

  // Auto-expand parent sections when navigating
  useEffect(() => {
    const currentPath = pathname.replace(`/${locale}`, '');

    for (const section of docsNavigation) {
      for (const item of section.items) {
        if (item.href === currentPath || item.children?.some(child => child.href === currentPath)) {
          setExpandedSections(prev => {
            if (prev.has(section.id)) return prev;
            return new Set([...prev, section.id]);
          });
          if (item.children) {
            setExpandedItems(prev => {
              if (prev.has(item.id)) return prev;
              return new Set([...prev, item.id]);
            });
          }
        }
      }
    }
  }, [pathname, locale]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  const isActive = (href: string) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    return currentPath === href;
  };

  const isParentActive = (item: DocsNavItem) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    return item.href === currentPath || item.children?.some(child => child.href === currentPath);
  };

  const renderNavItem = (item: DocsNavItem, depth: number = 0) => {
    const Icon = item.icon ? iconMap[item.icon] : null;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    const active = isActive(item.href || '');
    const parentActive = isParentActive(item);

    return (
      <div key={item.id}>
        <div className="relative">
          {/* Link or button */}
          {item.href && !hasChildren ? (
            <Link
              href={buildHref(item.href)}
                            className={`
                group flex items-center gap-3 px-3 py-2 text-sm transition-all duration-200
                ${depth === 0 ? 'font-medium' : 'pl-10'}
                ${active
                  ? 'bg-void-elevated text-stellar-bright border-l-2 border-l-[#44ffaa]'
                  : 'text-stellar-dim hover:text-stellar-bright hover:bg-void-surface/50'
                }
              `}
            >
              {Icon && depth === 0 && (
                <Icon className={`h-4 w-4 ${active ? 'text-[#44ffaa]' : 'text-stellar-faint group-hover:text-stellar-dim'}`} />
              )}
              <span className="flex-1">{item.title[locale as 'en' | 'ko']}</span>
              {item.isNew && (
                <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase bg-[#44ffaa]/20 text-[#44ffaa] border border-[#44ffaa]/30">
                  NEW
                </span>
              )}
              {item.badge && !item.isNew && (
                <span
                  className="px-1.5 py-0.5 text-[10px] font-mono border"
                  style={{
                    color: item.badge.color,
                    backgroundColor: `${item.badge.color}20`,
                    borderColor: `${item.badge.color}30`,
                  }}
                >
                  {item.badge.text}
                </span>
              )}
              {item.isExternal && <ExternalLink className="h-3 w-3 text-stellar-faint" />}
            </Link>
          ) : (
            <button
              onClick={() => hasChildren ? toggleItem(item.id) : null}
              className={`
                group flex items-center gap-3 px-3 py-2 text-sm w-full text-left transition-all duration-200
                ${depth === 0 ? 'font-medium' : 'pl-10'}
                ${parentActive
                  ? 'text-stellar-bright'
                  : 'text-stellar-dim hover:text-stellar-bright hover:bg-void-surface/50'
                }
              `}
            >
              {Icon && depth === 0 && (
                <Icon className={`h-4 w-4 ${parentActive ? 'text-[#44ffaa]' : 'text-stellar-faint group-hover:text-stellar-dim'}`} />
              )}
              <span className="flex-1">{item.title[locale as 'en' | 'ko']}</span>
              {item.isNew && (
                <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase bg-[#44ffaa]/20 text-[#44ffaa] border border-[#44ffaa]/30">
                  NEW
                </span>
              )}
              {item.badge && !item.isNew && (
                <span
                  className="px-1.5 py-0.5 text-[10px] font-mono border"
                  style={{
                    color: item.badge.color,
                    backgroundColor: `${item.badge.color}20`,
                    borderColor: `${item.badge.color}30`,
                  }}
                >
                  {item.badge.text}
                </span>
              )}
              {hasChildren && (
                <motion.span
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="h-4 w-4 text-stellar-faint" />
                </motion.span>
              )}
            </button>
          )}

          {/* Link for items with children */}
          {item.href && hasChildren && (
            <Link
              href={buildHref(item.href)}
                            className={`
                absolute inset-0 flex items-center
                ${active ? '' : 'hover:bg-void-surface/30'}
              `}
              style={{ width: 'calc(100% - 32px)' }}
            />
          )}
        </div>

        {/* Children */}
        {hasChildren && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="border-l border-stellar-faint/10 ml-6">
                  {item.children?.map(child => (
                    <Link
                      key={child.id}
                      href={buildHref(child.href || '')}
                                            className={`
                        block px-4 py-2 text-sm transition-all duration-200
                        ${isActive(child.href || '')
                          ? 'text-[#44ffaa] bg-[#44ffaa]/5 border-l-2 border-l-[#44ffaa] -ml-px'
                          : 'text-stellar-dim hover:text-stellar-bright hover:bg-void-surface/30'
                        }
                      `}
                    >
                      {child.title[locale as 'en' | 'ko']}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    );
  };

  const renderSection = (section: DocsSection) => {
    const isExpanded = expandedSections.has(section.id);

    return (
      <div key={section.id} className="mb-6">
        {/* Section header */}
        <button
          onClick={() => toggleSection(section.id)}
          className="flex items-center justify-between w-full px-3 py-2 text-xs font-mono uppercase tracking-widest text-stellar-faint hover:text-stellar-dim transition-colors"
        >
          <span>{section.title[locale as 'en' | 'ko']}</span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-3 w-3" />
          </motion.span>
        </button>

        {/* Section items */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {section.items.map(item => renderNavItem(item))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav className="h-full overflow-y-auto py-6 px-2 scrollbar-thin scrollbar-thumb-stellar-faint/20 scrollbar-track-transparent">
      {/* Logo/Title */}
      <Link
        href={buildHref('/docs')}
        className="flex items-center gap-3 px-3 py-2 mb-6 group"
              >
        <div className="flex h-8 w-8 items-center justify-center bg-[#44ffaa]/10 border border-[#44ffaa]/30 group-hover:bg-[#44ffaa]/20 transition-colors">
          <span className="text-[#44ffaa] font-mono text-sm font-bold">D</span>
        </div>
        <div>
          <span className="text-stellar-bright font-medium">Diverga</span>
          <span className="text-stellar-faint text-xs ml-2 font-mono">docs</span>
        </div>
      </Link>

      {/* Navigation sections */}
      {docsNavigation.map(section => renderSection(section))}

      {/* Footer */}
      <div className="mt-8 px-3 pt-6 border-t border-stellar-faint/10">
        <p className="text-xs text-stellar-faint font-mono">
          v9.0.0
        </p>
      </div>
    </nav>
  );
}
