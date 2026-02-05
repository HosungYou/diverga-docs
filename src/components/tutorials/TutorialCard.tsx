'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Tutorial, Locale } from './types';

interface TutorialCardProps {
  tutorial: Tutorial;
  locale: Locale;
}

const difficultyConfig = {
  beginner: {
    color: 'bg-accent-green/10 text-accent-green border-accent-green/20',
    label: { en: 'Beginner', ko: '초급' }
  },
  intermediate: {
    color: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
    label: { en: 'Intermediate', ko: '중급' }
  },
  advanced: {
    color: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
    label: { en: 'Advanced', ko: '고급' }
  }
};

export default function TutorialCard({ tutorial, locale }: TutorialCardProps) {
  const difficulty = difficultyConfig[tutorial.difficulty];

  return (
    <Link href={`/tutorials/${tutorial.id}`}>
      <motion.div
        className="group relative h-full rounded-xl overflow-hidden border border-void-200 dark:border-void-800 bg-void-50 dark:bg-void-950 hover:border-accent-purple/50 dark:hover:border-accent-purple/50 transition-all"
        whileHover={{ y: -4 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Thumbnail */}
        <div className="relative h-48 bg-gradient-to-br from-accent-purple/20 via-accent-blue/20 to-transparent overflow-hidden">
          {/* Placeholder pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <pattern
                id={`pattern-${tutorial.id}`}
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1" fill="currentColor" />
              </pattern>
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill={`url(#pattern-${tutorial.id})`}
              />
            </svg>
          </div>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-accent-purple/40"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </motion.div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${difficulty.color}`}
            >
              {difficulty.label[locale]}
            </span>
          </div>

          {/* Duration */}
          <div className="absolute bottom-3 right-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-mono">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {tutorial.duration}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Title */}
          <h3 className="text-lg font-semibold text-void-900 dark:text-void-50 group-hover:text-accent-purple dark:group-hover:text-accent-purple transition-colors line-clamp-2">
            {tutorial.title[locale]}
          </h3>

          {/* Description */}
          <p className="text-sm text-void-600 dark:text-void-400 line-clamp-3">
            {tutorial.description[locale]}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-void-200 dark:border-void-800">
            <span className="text-xs text-void-500 dark:text-void-500 font-mono">
              {tutorial.steps.length} {locale === 'en' ? 'steps' : '단계'}
            </span>

            {/* Arrow Icon */}
            <motion.div
              className="text-accent-purple"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 to-transparent" />
        </div>
      </motion.div>
    </Link>
  );
}
