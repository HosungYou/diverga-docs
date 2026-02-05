'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Edit, Save, Search, Trash2 } from 'lucide-react';

interface MemoryFlowAnimationProps {
  locale: string;
}

interface FlowStep {
  id: string;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  icon: React.ReactNode;
  color: string;
}

export function MemoryFlowAnimation({ locale }: MemoryFlowAnimationProps) {
  const steps: FlowStep[] = [
    {
      id: 'capture',
      title: { en: 'Capture', ko: '캡처' },
      description: {
        en: 'Agent records context during conversation',
        ko: '대화 중 에이전트가 컨텍스트 기록',
      },
      icon: <Edit className="h-5 w-5" />,
      color: '#e74c3c',
    },
    {
      id: 'store',
      title: { en: 'Store', ko: '저장' },
      description: {
        en: 'Saved to appropriate layer (Priority/Working/Manual)',
        ko: '적절한 레이어에 저장 (우선순위/작업/수동)',
      },
      icon: <Save className="h-5 w-5" />,
      color: '#9b59b6',
    },
    {
      id: 'index',
      title: { en: 'Index', ko: '인덱싱' },
      description: {
        en: 'Full-text search index built with FTS5',
        ko: 'FTS5로 전문 검색 인덱스 구축',
      },
      icon: <Search className="h-5 w-5" />,
      color: '#3498db',
    },
    {
      id: 'prune',
      title: { en: 'Prune', ko: '정리' },
      description: {
        en: 'Auto-cleanup of old Working Memory (7 days)',
        ko: '오래된 작업 메모리 자동 정리 (7일)',
      },
      icon: <Trash2 className="h-5 w-5" />,
      color: '#95a5a6',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Flow Visualization */}
      <div className="relative">
        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="border border-stellar-faint/20 bg-void-elevated p-6 text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="mb-4 inline-flex items-center justify-center rounded-lg p-3"
                    style={{
                      backgroundColor: step.color + '20',
                      color: step.color,
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  <h3 className="font-mono text-sm font-semibold text-stellar-core">
                    {locale === 'ko' ? step.title.ko : step.title.en}
                  </h3>

                  <p className="mt-2 text-micro text-stellar-dim">
                    {locale === 'ko' ? step.description.ko : step.description.en}
                  </p>
                </div>

                {/* Arrow (not on last item) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block"
                  >
                    <ArrowRight className="h-6 w-6 text-stellar-dim" />
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border border-stellar-faint/10 bg-void-elevated p-6"
      >
        <h3 className="mb-6 font-mono text-sm font-semibold text-stellar-core">
          {locale === 'ko' ? '세션 간 메모리 지속성' : 'Memory Persistence Across Sessions'}
        </h3>

        <div className="space-y-6">
          {/* Session 1 */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-tscore-creative" />
            <div className="absolute left-[5px] top-5 h-full w-0.5 bg-stellar-faint/20" />
            <div className="space-y-1">
              <div className="font-mono text-micro text-stellar-core">
                {locale === 'ko' ? '세션 1' : 'Session 1'}
              </div>
              <div className="text-micro text-stellar-dim">
                {locale === 'ko'
                  ? '연구 질문과 이론적 프레임워크 정의 → Priority Context에 저장'
                  : 'Define research question & theoretical framework → Saved to Priority Context'}
              </div>
            </div>
          </div>

          {/* Session 2 */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-tscore-creative" />
            <div className="absolute left-[5px] top-5 h-full w-0.5 bg-stellar-faint/20" />
            <div className="space-y-1">
              <div className="font-mono text-micro text-stellar-core">
                {locale === 'ko' ? '세션 2' : 'Session 2'}
              </div>
              <div className="text-micro text-stellar-dim">
                {locale === 'ko'
                  ? '✓ Priority Context 자동 로드 → 문헌 검토 시작 → Working Memory에 저장'
                  : '✓ Priority Context auto-loaded → Start literature review → Saved to Working Memory'}
              </div>
            </div>
          </div>

          {/* Session 3 */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-tscore-creative" />
            <div className="space-y-1">
              <div className="font-mono text-micro text-stellar-core">
                {locale === 'ko' ? '세션 3' : 'Session 3'}
              </div>
              <div className="text-micro text-stellar-dim">
                {locale === 'ko'
                  ? '✓ 모든 컨텍스트 사용 가능 → 메타분석 완료 → Manual Archive에 저장'
                  : '✓ All context available → Complete meta-analysis → Saved to Manual Archive'}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Performance Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid gap-4 sm:grid-cols-3"
      >
        {[
          { label: locale === 'ko' ? '검색 속도' : 'Search Speed', value: '<10ms', color: '#e74c3c' },
          { label: locale === 'ko' ? '저장 용량' : 'Storage Size', value: '~50KB', color: '#9b59b6' },
          { label: locale === 'ko' ? '정리 주기' : 'Prune Cycle', value: '7 days', color: '#3498db' },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="border border-stellar-faint/10 bg-void-elevated p-4 text-center"
          >
            <div className="font-mono text-2xl font-bold" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="mt-1 text-micro text-stellar-dim">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
