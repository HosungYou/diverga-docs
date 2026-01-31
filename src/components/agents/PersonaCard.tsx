'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import type { AgentPersona } from '@/lib/data/types';

interface PersonaCardProps {
  persona: AgentPersona;
  locale: 'en' | 'ko';
  themeColor: string;
}

export function PersonaCard({ persona, locale, themeColor }: PersonaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const voiceSample = persona.voiceSample[locale];

  // Typewriter effect on hover
  const handleMouseEnter = () => {
    if (typedText === voiceSample) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= voiceSample.length) {
        setTypedText(voiceSample.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onHoverStart={handleMouseEnter}
      onHoverEnd={() => setIsExpanded(true)}
      className="relative group cursor-pointer"
    >
      {/* Background gradient mesh */}
      <div
        className="absolute inset-0 rounded-2xl opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${themeColor}40, transparent 70%),
                       radial-gradient(circle at 70% 50%, ${themeColor}20, transparent 70%)`
        }}
      />

      <div className="relative rounded-2xl bg-void-elevated border border-stellar-faint/20 overflow-hidden">
        {/* Archetype header with serif accent */}
        <div
          className="px-6 py-5 border-b border-stellar-faint/10"
          style={{
            background: `linear-gradient(135deg, ${themeColor}08, transparent)`
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full animate-glow-pulse"
                style={{ backgroundColor: themeColor }}
              />
              <h3 className="text-2xl font-bold text-stellar-core font-serif tracking-tight">
                {persona.archetype}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-5 h-5 text-tscore-creative" />
            </motion.div>
          </div>
        </div>

        {/* Voice sample speech bubble */}
        <div className="p-6 space-y-4">
          <div className="relative">
            <div className="absolute -left-1 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: `${themeColor}60` }} />
            <div className="pl-4 pr-2 py-3 rounded-r-xl bg-void-surface border border-stellar-faint/10">
              <div className="flex items-start gap-2 mb-2">
                <Quote className="w-4 h-4 text-stellar-faint flex-shrink-0 mt-0.5" />
                <span className="text-xs font-mono text-stellar-faint uppercase tracking-wider">
                  {locale === 'ko' ? '음성 샘플' : 'Voice Sample'}
                </span>
              </div>
              <p className="text-stellar-dim leading-relaxed font-mono text-sm">
                {typedText}
                {typedText.length < voiceSample.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-4 ml-0.5 bg-tscore-creative"
                  />
                )}
              </p>
            </div>
          </div>

          {/* Motto in italic quote style */}
          <div className="relative pl-8 pr-4 py-4 bg-gradient-to-br from-void-surface to-transparent rounded-xl border border-stellar-faint/10">
            <div
              className="absolute left-3 top-3 text-5xl opacity-20 font-serif leading-none"
              style={{ color: themeColor }}
            >
              "
            </div>
            <p className="text-lg italic text-stellar-bright leading-relaxed relative z-10">
              {persona.motto[locale]}
            </p>
          </div>

          {/* Catchphrase (if exists) */}
          {persona.catchphrase && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ delay: 0.3 }}
              className="px-4 py-2 rounded-lg bg-void-deep border border-stellar-faint/10"
            >
              <span className="text-sm font-mono" style={{ color: themeColor }}>
                # {persona.catchphrase[locale]}
              </span>
            </motion.div>
          )}

          {/* Expandable personality description */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-3 border-t border-stellar-faint/10"
              >
                <p className="text-sm text-stellar-dim leading-relaxed">
                  {persona.personality[locale]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expand prompt */}
          {!isExpanded && (
            <motion.button
              onClick={() => setIsExpanded(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 text-xs font-mono text-stellar-faint hover:text-tscore-creative transition-colors"
            >
              {locale === 'ko' ? '성격 상세보기 ↓' : 'View personality ↓'}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
