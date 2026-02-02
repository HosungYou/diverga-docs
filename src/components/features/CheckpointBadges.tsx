'use client';

import { motion } from 'framer-motion';
import { checkpointTypes } from '@/lib/data/features';

interface CheckpointBadgesProps {
  locale: string;
}

export function CheckpointBadges({ locale }: CheckpointBadgesProps) {
  const getRgbaFromHex = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {checkpointTypes.map((checkpoint, index) => (
        <motion.div
          key={checkpoint.level}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          className="group relative overflow-hidden rounded-sm border"
          style={{
            borderColor: getRgbaFromHex(checkpoint.color, 0.3),
            backgroundColor: getRgbaFromHex(checkpoint.color, 0.05),
          }}
        >
          {/* Background Glow Effect */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at top, ${getRgbaFromHex(checkpoint.color, 0.15)}, transparent 70%)`,
            }}
          />

          {/* Top Accent Bar */}
          <motion.div
            className="h-1"
            style={{
              backgroundColor: checkpoint.color,
              boxShadow: `0 0 20px ${getRgbaFromHex(checkpoint.color, 0.5)}`,
            }}
            animate={{
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8">
            {/* Icon */}
            <motion.div
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-sm"
              style={{
                backgroundColor: getRgbaFromHex(checkpoint.color, 0.15),
                border: `1px solid ${getRgbaFromHex(checkpoint.color, 0.3)}`,
              }}
              animate={{
                boxShadow: [
                  `0 0 20px ${getRgbaFromHex(checkpoint.color, 0.2)}`,
                  `0 0 30px ${getRgbaFromHex(checkpoint.color, 0.4)}`,
                  `0 0 20px ${getRgbaFromHex(checkpoint.color, 0.2)}`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="text-4xl">{checkpoint.icon}</span>
            </motion.div>

            {/* Level Badge */}
            <div className="mb-4">
              <motion.div
                className="inline-flex items-center gap-2 rounded-sm border px-3 py-1"
                style={{
                  borderColor: getRgbaFromHex(checkpoint.color, 0.3),
                  backgroundColor: getRgbaFromHex(checkpoint.color, 0.1),
                }}
                whileHover={{
                  borderColor: checkpoint.color,
                  boxShadow: `0 0 15px ${getRgbaFromHex(checkpoint.color, 0.3)}`,
                }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="h-2 w-2 rounded-full animate-checkpoint-blink"
                  style={{ backgroundColor: checkpoint.color }}
                />
                <span
                  className="font-mono text-micro font-bold uppercase tracking-widest"
                  style={{ color: checkpoint.color }}
                >
                  {checkpoint.level}
                </span>
              </motion.div>
            </div>

            {/* Name */}
            <h3
              className="mb-3 font-display text-heading-3 font-bold transition-colors duration-300"
              style={{ color: checkpoint.color }}
            >
              {locale === 'ko' ? checkpoint.name.ko : checkpoint.name.en}
            </h3>

            {/* Description */}
            <p className="mb-6 text-body leading-relaxed text-stellar-dim">
              {locale === 'ko' ? checkpoint.description.ko : checkpoint.description.en}
            </p>

            {/* Divider */}
            <div
              className="mb-6 h-px"
              style={{
                background: `linear-gradient(90deg, ${checkpoint.color}, transparent)`,
              }}
            />

            {/* Examples Section */}
            <div className="space-y-4">
              <div className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
                {locale === 'ko' ? '예시' : 'Examples'}
              </div>

              <ul className="space-y-3">
                {checkpoint.examples.map((example, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.15 + 0.3 + idx * 0.1,
                      duration: 0.4,
                    }}
                    className="group/item flex items-start gap-3 rounded-sm p-2 transition-all duration-200"
                    style={{
                      backgroundColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = getRgbaFromHex(
                        checkpoint.color,
                        0.05
                      );
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    {/* Bullet Point */}
                    <motion.div
                      className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm"
                      style={{
                        backgroundColor: getRgbaFromHex(checkpoint.color, 0.15),
                      }}
                      whileHover={{
                        backgroundColor: getRgbaFromHex(checkpoint.color, 0.25),
                      }}
                    >
                      <div
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: checkpoint.color }}
                      />
                    </motion.div>

                    {/* Example Text */}
                    <span className="flex-1 text-caption text-stellar-bright transition-colors duration-200 group-hover/item:text-stellar-core">
                      {locale === 'ko' ? example.ko : example.en}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Status Indicator */}
            <motion.div
              className="mt-6 flex items-center gap-2 rounded-sm border px-3 py-2"
              style={{
                borderColor: getRgbaFromHex(checkpoint.color, 0.2),
                backgroundColor: getRgbaFromHex(checkpoint.color, 0.05),
              }}
              animate={{
                borderColor: [
                  getRgbaFromHex(checkpoint.color, 0.2),
                  getRgbaFromHex(checkpoint.color, 0.4),
                  getRgbaFromHex(checkpoint.color, 0.2),
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: checkpoint.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <span className="font-mono text-micro text-stellar-dim">
                  {locale === 'ko'
                    ? checkpoint.level === 'REQUIRED'
                      ? '시스템 정지'
                      : checkpoint.level === 'RECOMMENDED'
                        ? '시스템 일시정지'
                        : '시스템 문의'
                    : checkpoint.level === 'REQUIRED'
                      ? 'System STOPS'
                      : checkpoint.level === 'RECOMMENDED'
                        ? 'System PAUSES'
                        : 'System ASKS'}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Corner Accent */}
          <div
            className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
            style={{ backgroundColor: checkpoint.color }}
          />
        </motion.div>
      ))}
    </div>
  );
}
