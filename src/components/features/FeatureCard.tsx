"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FeatureItem } from '@/lib/data/features';
import { cn } from '@/lib/utils/cn';

interface FeatureCardProps {
  feature: FeatureItem;
  locale: string;
  index?: number;
}

export function FeatureCard({ feature, locale, index = 0 }: FeatureCardProps) {
  const localizedName = feature.name[locale as keyof typeof feature.name] || feature.name.en;
  const localizedDescription = feature.description[locale as keyof typeof feature.description] || feature.description.en;
  const localizedBadge = feature.badge?.[locale as keyof typeof feature.badge] || feature.badge?.en;

  return (
    <Link href={`/${locale}/features/${feature.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1]
        }}
        whileHover={{ y: -4 }}
        className={cn(
          "group relative h-full",
          "bg-void-elevated rounded-xl p-6",
          "border border-stellar-faint/20",
          "hover:border-stellar-faint/40",
          "transition-all duration-300",
          "overflow-hidden"
        )}
        style={{
          backgroundColor: feature.bgColor,
        }}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${feature.color}15, transparent 40%)`,
          }}
        />

        {/* Border glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: `0 0 20px ${feature.color}30, inset 0 0 20px ${feature.color}10`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon and Badge Row */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span
                className="text-4xl filter drop-shadow-lg"
                style={{
                  filter: `drop-shadow(0 0 8px ${feature.color}40)`,
                }}
              >
                {feature.icon}
              </span>
              {feature.isNew && localizedBadge && (
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-medium font-mono"
                  style={{
                    backgroundColor: `${feature.color}20`,
                    color: feature.accentColor,
                    border: `1px solid ${feature.color}40`,
                  }}
                >
                  {localizedBadge}
                </span>
              )}
            </div>

            {/* Accent dot */}
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: feature.color,
                boxShadow: `0 0 8px ${feature.color}60`,
              }}
            />
          </div>

          {/* Feature Name */}
          <h3
            className="font-semibold text-lg mb-2 group-hover:translate-x-1 transition-transform duration-300"
            style={{
              color: feature.accentColor,
            }}
          >
            {localizedName}
          </h3>

          {/* Description */}
          <p className="text-sm text-stellar-dim leading-relaxed mb-4 line-clamp-2">
            {localizedDescription}
          </p>

          {/* Learn More Link */}
          <div className="flex items-center gap-2 text-stellar-faint group-hover:text-stellar-core transition-colors duration-300">
            <span className="text-sm font-medium font-mono">
              {locale === 'ko' ? '자세히 보기' : 'Learn more'}
            </span>
            <ArrowRight
              className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
              style={{
                color: feature.color,
              }}
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
