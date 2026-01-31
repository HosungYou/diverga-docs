'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, ArrowRight, Info } from 'lucide-react';
import type { DecisionHelper, Agent } from '@/lib/data/types';

interface DecisionHelperProps {
  decisionHelper: DecisionHelper;
  locale: 'en' | 'ko';
  agents?: Agent[];
}

export function DecisionHelperComponent({ decisionHelper, locale, agents }: DecisionHelperProps) {
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  // Find agent by ID
  const getAgent = (agentId: string) => {
    return agents?.find((a) => a.id === agentId);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-stellar-core font-display">
        {locale === 'ko' ? '의사결정 가이드' : 'Decision Guide'}
      </h3>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* USE WHEN - Green affirmative column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-tscore-creative/10 to-transparent rounded-2xl blur-xl group-hover:from-tscore-creative/20 transition-all duration-500" />

          <div className="relative rounded-2xl bg-void-elevated border-2 border-tscore-creative/30 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-tscore-creative/15 to-transparent border-b border-tscore-creative/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-void-surface">
                  <CheckCircle2 className="w-5 h-5 text-tscore-creative" />
                </div>
                <h4 className="text-lg font-bold text-tscore-creative font-mono uppercase tracking-wider">
                  {locale === 'ko' ? '이 에이전트를 사용하세요' : 'Use This Agent'}
                </h4>
              </div>
            </div>

            {/* Checklist */}
            <div className="p-6 space-y-3">
              {decisionHelper.useWhen.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-void-surface/50 hover:bg-void-surface transition-colors group/item"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-tscore-creative/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-tscore-creative group-hover/item:animate-glow-pulse" />
                  </div>
                  <p className="text-sm text-stellar-dim leading-relaxed flex-1">
                    {condition[locale]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* DON'T USE WHEN - Yellow warning column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-tscore-balanced/10 to-transparent rounded-2xl blur-xl group-hover:from-tscore-balanced/20 transition-all duration-500" />

          <div className="relative rounded-2xl bg-void-elevated border-2 border-tscore-balanced/30 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-tscore-balanced/15 to-transparent border-b border-tscore-balanced/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-void-surface">
                  <AlertTriangle className="w-5 h-5 text-tscore-balanced" />
                </div>
                <h4 className="text-lg font-bold text-tscore-balanced font-mono uppercase tracking-wider">
                  {locale === 'ko' ? '대안을 고려하세요' : 'Consider Alternatives'}
                </h4>
              </div>
            </div>

            {/* Warning list */}
            <div className="p-6 space-y-3">
              {decisionHelper.dontUseWhen.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-void-surface/50 hover:bg-void-surface transition-colors group/item"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-tscore-balanced/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-tscore-balanced/60 group-hover/item:bg-tscore-balanced" />
                  </div>
                  <p className="text-sm text-stellar-dim leading-relaxed flex-1 opacity-90">
                    {condition[locale]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Alternative agents grid */}
      {decisionHelper.alternativeAgents && decisionHelper.alternativeAgents.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-4 h-4 text-tscore-divergent" />
            <h4 className="text-sm font-mono font-bold text-stellar-faint uppercase tracking-wider">
              {locale === 'ko' ? '대안 에이전트' : 'Alternative Agents'}
            </h4>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {decisionHelper.alternativeAgents.map((alt, index) => {
              const agent = getAgent(alt.agentId);
              const isHovered = hoveredAgent === alt.agentId;

              return (
                <motion.div
                  key={alt.agentId}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  onHoverStart={() => setHoveredAgent(alt.agentId)}
                  onHoverEnd={() => setHoveredAgent(null)}
                  className="relative group/card cursor-pointer"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-tscore-divergent/10 rounded-xl blur-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                  <div className="relative rounded-xl bg-void-surface border border-stellar-faint/20 group-hover/card:border-tscore-divergent/40 transition-all p-4">
                    {/* Agent mini-card */}
                    <div className="flex items-start gap-3 mb-3">
                      {agent && (
                        <>
                          <span className="text-2xl">{agent.icon}</span>
                          <div className="flex-1">
                            <span className="text-xs font-mono text-stellar-faint">
                              {agent.id}
                            </span>
                            <h5 className="font-semibold text-stellar-bright text-sm">
                              {agent.name[locale]}
                            </h5>
                          </div>
                        </>
                      )}
                      {!agent && (
                        <div className="flex-1">
                          <span className="text-xs font-mono text-stellar-faint">
                            {alt.agentId}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Condition tooltip */}
                    <div className={`
                      transition-all duration-300 overflow-hidden
                      ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="pt-3 border-t border-stellar-faint/10">
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-3 h-3 text-tscore-divergent flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-stellar-dim leading-relaxed">
                            {alt.condition[locale]}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Mobile: always show condition */}
                    <div className="sm:hidden pt-3 border-t border-stellar-faint/10 mt-3">
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-tscore-divergent flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-stellar-dim leading-relaxed">
                          {alt.condition[locale]}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
