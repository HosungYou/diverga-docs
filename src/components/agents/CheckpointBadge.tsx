"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface CheckpointBadgeProps {
  checkpointId: string;
  level: 'REQUIRED' | 'RECOMMENDED' | 'OPTIONAL';
  locale: 'en' | 'ko';
  variant?: 'compact' | 'full';
}

const checkpointConfig = {
  REQUIRED: {
    icon: AlertCircle,
    color: {
      bg: 'bg-rose-500',
      bgLight: 'bg-rose-50',
      border: 'border-rose-300',
      text: 'text-rose-700',
      glow: 'shadow-rose-500/50',
    },
    label: {
      en: 'Requires Your Approval',
      ko: '승인 필요',
    },
    tooltip: {
      en: 'System STOPS and waits for your explicit approval',
      ko: '시스템이 멈추고 명시적 승인을 기다립니다',
    },
    pulse: true,
  },
  RECOMMENDED: {
    icon: CheckCircle,
    color: {
      bg: 'bg-amber-500',
      bgLight: 'bg-amber-50',
      border: 'border-amber-300',
      text: 'text-amber-700',
      glow: 'shadow-amber-500/50',
    },
    label: {
      en: 'Review Suggested',
      ko: '검토 권장',
    },
    tooltip: {
      en: 'System PAUSES and strongly suggests review',
      ko: '시스템이 일시 정지하고 검토를 권장합니다',
    },
    pulse: false,
  },
  OPTIONAL: {
    icon: Info,
    color: {
      bg: 'bg-yellow-500',
      bgLight: 'bg-yellow-50',
      border: 'border-yellow-300',
      text: 'text-yellow-700',
      glow: 'shadow-yellow-500/50',
    },
    label: {
      en: 'Your Choice',
      ko: '선택 사항',
    },
    tooltip: {
      en: 'System ASKS but can be skipped',
      ko: '시스템이 묻지만 건너뛸 수 있습니다',
    },
    pulse: false,
  },
};

export function CheckpointBadge({
  checkpointId,
  level,
  locale,
  variant = 'compact'
}: CheckpointBadgeProps) {
  const config = checkpointConfig[level];
  const Icon = config.icon;

  if (variant === 'compact') {
    return (
      <Link href={`/${locale}/docs/checkpoints`}>
        <motion.div
          className={cn(
            "group relative inline-flex items-center gap-2 rounded-lg border-2 px-3 py-1.5",
            "cursor-pointer transition-all duration-300",
            "hover:scale-105 hover:shadow-lg",
            config.color.border,
            config.color.bgLight,
            config.pulse && "animate-pulse"
          )}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glow effect */}
          {config.pulse && (
            <motion.div
              className={cn(
                "absolute inset-0 rounded-lg blur-sm -z-10",
                config.color.bg,
                "opacity-0 group-hover:opacity-50"
              )}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Icon */}
          <Icon className={cn("h-4 w-4", config.color.text)} />

          {/* Label */}
          <span className={cn("text-sm font-semibold", config.color.text)}>
            {config.label[locale]}
          </span>

          {/* Tooltip on hover */}
          <div className={cn(
            "absolute left-1/2 -translate-x-1/2 top-full mt-2",
            "opacity-0 group-hover:opacity-100 pointer-events-none",
            "transition-opacity duration-200 z-50",
            "w-max max-w-xs"
          )}>
            <div className={cn(
              "rounded-lg border shadow-xl px-3 py-2 text-xs",
              config.color.border,
              config.color.bgLight,
              config.color.text
            )}>
              <div className="font-semibold mb-1">{checkpointId}</div>
              <div className="opacity-90">{config.tooltip[locale]}</div>
              {/* Arrow */}
              <div className={cn(
                "absolute left-1/2 -translate-x-1/2 -top-1",
                "w-2 h-2 rotate-45",
                config.color.bgLight,
                config.color.border,
                "border-t border-l"
              )} />
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  // Full variant for detail page header
  return (
    <Link href={`/${locale}/docs/checkpoints`}>
      <motion.div
        className={cn(
          "group relative inline-flex items-center gap-3 rounded-xl border-2 px-5 py-3",
          "cursor-pointer transition-all duration-300",
          "hover:scale-[1.02] hover:shadow-2xl",
          config.color.border,
          config.color.bgLight,
          config.pulse && "animate-pulse"
        )}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Enhanced glow effect */}
        {config.pulse && (
          <motion.div
            className={cn(
              "absolute inset-0 rounded-xl blur-lg -z-10",
              config.color.bg,
              "opacity-0 group-hover:opacity-60"
            )}
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Icon with animated ring */}
        <div className="relative">
          <Icon className={cn("h-6 w-6", config.color.text)} />
          {config.pulse && (
            <motion.div
              className={cn(
                "absolute inset-0 rounded-full",
                config.color.bg,
                "opacity-20"
              )}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-0.5">
          <span className={cn("text-xs font-medium uppercase tracking-wide", config.color.text, "opacity-75")}>
            Checkpoint
          </span>
          <span className={cn("text-base font-bold", config.color.text)}>
            {config.label[locale]}
          </span>
        </div>

        {/* Hover arrow */}
        <motion.div
          className={cn("ml-auto opacity-0 group-hover:opacity-100", config.color.text)}
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          →
        </motion.div>

        {/* Enhanced tooltip */}
        <div className={cn(
          "absolute left-1/2 -translate-x-1/2 top-full mt-3",
          "opacity-0 group-hover:opacity-100 pointer-events-none",
          "transition-all duration-300 z-50",
          "w-max max-w-sm"
        )}>
          <motion.div
            className={cn(
              "rounded-xl border-2 shadow-2xl px-4 py-3",
              config.color.border,
              config.color.bgLight,
              config.color.glow
            )}
            initial={{ y: -10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            <div className={cn("font-bold mb-2 text-sm", config.color.text)}>
              {checkpointId}
            </div>
            <div className={cn("text-xs leading-relaxed", config.color.text, "opacity-90")}>
              {config.tooltip[locale]}
            </div>
            <div className={cn("text-xs mt-2 italic", config.color.text, "opacity-75")}>
              {locale === 'ko' ? '자세히 보기 →' : 'Learn more →'}
            </div>
            {/* Arrow */}
            <div className={cn(
              "absolute left-1/2 -translate-x-1/2 -top-2",
              "w-3 h-3 rotate-45",
              config.color.bgLight,
              config.color.border,
              "border-t-2 border-l-2"
            )} />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
