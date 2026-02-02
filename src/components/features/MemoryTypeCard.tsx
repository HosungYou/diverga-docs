'use client';

import { motion } from 'framer-motion';
import { MemoryType } from '@/lib/data/features';

interface MemoryTypeCardProps {
  memoryType: MemoryType;
  locale: string;
  index?: number;
}

export function MemoryTypeCard({ memoryType, locale, index = 0 }: MemoryTypeCardProps) {
  const localizedName = memoryType.name[locale as keyof typeof memoryType.name] || memoryType.name.en;
  const localizedDescription = memoryType.description[locale as keyof typeof memoryType.description] || memoryType.description.en;
  const localizedScope = memoryType.scope[locale as keyof typeof memoryType.scope] || memoryType.scope.en;
  const localizedDuration = memoryType.duration[locale as keyof typeof memoryType.duration] || memoryType.duration.en;

  // Convert hex to rgba for glow effects
  const getRgbaFromHex = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative h-full"
    >
      {/* Main card container */}
      <div
        className="relative h-full bg-void-elevated border-2 p-6 transition-all duration-300 overflow-hidden"
        style={{
          borderColor: getRgbaFromHex(memoryType.color, 0.3),
          backgroundColor: getRgbaFromHex(memoryType.color, 0.05),
        }}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${getRgbaFromHex(memoryType.color, 0.15)}, transparent 40%)`,
          }}
        />

        {/* Border glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: `0 0 30px ${getRgbaFromHex(memoryType.color, 0.3)}, inset 0 0 20px ${getRgbaFromHex(memoryType.color, 0.1)}`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon and header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span
                className="text-4xl filter drop-shadow-lg"
                style={{
                  filter: `drop-shadow(0 0 8px ${getRgbaFromHex(memoryType.color, 0.4)})`,
                }}
              >
                {memoryType.icon}
              </span>
              <div>
                <h4
                  className="font-display text-lg font-semibold mb-1"
                  style={{ color: memoryType.color }}
                >
                  {localizedName}
                </h4>
              </div>
            </div>

            {/* Accent dot */}
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: memoryType.color }}
              animate={{
                boxShadow: [
                  `0 0 0 0 ${getRgbaFromHex(memoryType.color, 0.4)}`,
                  `0 0 20px 5px ${getRgbaFromHex(memoryType.color, 0.2)}`,
                  `0 0 0 0 ${getRgbaFromHex(memoryType.color, 0.4)}`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Description */}
          <p className="text-caption text-stellar-dim leading-relaxed mb-4">
            {localizedDescription}
          </p>

          {/* Metadata grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div
              className="border px-3 py-2"
              style={{
                borderColor: getRgbaFromHex(memoryType.color, 0.2),
                backgroundColor: getRgbaFromHex(memoryType.color, 0.05),
              }}
            >
              <div className="text-micro text-stellar-faint font-mono uppercase tracking-wider mb-1">
                {locale === 'ko' ? '범위' : 'Scope'}
              </div>
              <div className="text-caption text-stellar-core font-medium">
                {localizedScope}
              </div>
            </div>

            <div
              className="border px-3 py-2"
              style={{
                borderColor: getRgbaFromHex(memoryType.color, 0.2),
                backgroundColor: getRgbaFromHex(memoryType.color, 0.05),
              }}
            >
              <div className="text-micro text-stellar-faint font-mono uppercase tracking-wider mb-1">
                {locale === 'ko' ? '지속기간' : 'Duration'}
              </div>
              <div className="text-caption text-stellar-core font-medium">
                {localizedDuration}
              </div>
            </div>
          </div>

          {/* Examples */}
          <div>
            <div className="text-micro text-stellar-faint font-mono uppercase tracking-wider mb-2">
              {locale === 'ko' ? '예시' : 'Examples'}
            </div>
            <ul className="space-y-2">
              {memoryType.examples.map((example, i) => {
                const localizedExample = example[locale as keyof typeof example] || example.en;
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-start gap-2 text-caption text-stellar-dim"
                  >
                    <span
                      className="mt-1.5 block w-1 h-1 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: memoryType.color }}
                    />
                    <span className="leading-relaxed">{localizedExample}</span>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Hover indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              className="h-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${memoryType.color}, transparent)`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
