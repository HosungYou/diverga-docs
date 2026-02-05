'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Database, Brain, Zap, FileText, Clock, Shield } from 'lucide-react';

interface MemoryArchitectureDiagramProps {
  locale: string;
}

interface Layer {
  id: string;
  name: { en: string; ko: string };
  description: { en: string; ko: string };
  icon: React.ReactNode;
  color: string;
  features: Array<{ en: string; ko: string }>;
}

export function MemoryArchitectureDiagram({ locale }: MemoryArchitectureDiagramProps) {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const layers: Layer[] = [
    {
      id: 'priority',
      name: { en: 'Priority Context', ko: '우선순위 컨텍스트' },
      description: {
        en: 'Always-loaded critical information that persists across all sessions',
        ko: '모든 세션에서 항상 로드되는 중요 정보',
      },
      icon: <Zap className="h-6 w-6" />,
      color: '#e74c3c',
      features: [
        { en: 'Max 500 chars', ko: '최대 500자' },
        { en: 'Auto-loaded on startup', ko: '시작 시 자동 로드' },
        { en: 'Research question', ko: '연구 질문' },
        { en: 'Core methodology', ko: '핵심 방법론' },
      ],
    },
    {
      id: 'working',
      name: { en: 'Working Memory', ko: '작업 메모리' },
      description: {
        en: 'Recent session notes with auto-pruning after 7 days',
        ko: '7일 후 자동 정리되는 최근 세션 노트',
      },
      icon: <Clock className="h-6 w-6" />,
      color: '#9b59b6',
      features: [
        { en: 'Timestamped entries', ko: '타임스탬프 엔트리' },
        { en: 'Auto-pruned (7 days)', ko: '자동 정리 (7일)' },
        { en: 'Session decisions', ko: '세션 결정' },
        { en: 'Interim findings', ko: '중간 발견' },
      ],
    },
    {
      id: 'manual',
      name: { en: 'Manual Archive', ko: '수동 아카이브' },
      description: {
        en: 'Permanent knowledge base that never expires',
        ko: '만료되지 않는 영구 지식 베이스',
      },
      icon: <Shield className="h-6 w-6" />,
      color: '#3498db',
      features: [
        { en: 'Never auto-pruned', ko: '자동 정리 안됨' },
        { en: 'Long-term insights', ko: '장기 통찰' },
        { en: 'Literature notes', ko: '문헌 노트' },
        { en: 'Theoretical frameworks', ko: '이론적 프레임워크' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        {layers.map((layer, index) => (
          <motion.div
            key={layer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setActiveLayer(layer.id)}
            onMouseLeave={() => setActiveLayer(null)}
            className="group relative cursor-pointer"
          >
            <div
              className={'border border-stellar-faint/20 bg-void-elevated p-6 transition-all duration-300 ' + (activeLayer === layer.id ? 'border-stellar-faint/40 bg-void-surface' : '')}
              style={{
                boxShadow: activeLayer === layer.id ? '0 0 20px ' + layer.color + '40' : 'none',
              }}
            >
              <div
                className="mb-4 inline-flex items-center justify-center rounded-lg p-3"
                style={{
                  backgroundColor: layer.color + '20',
                  color: layer.color,
                }}
              >
                {layer.icon}
              </div>
              <h3 className="font-mono text-sm font-semibold text-stellar-core">
                {locale === 'ko' ? layer.name.ko : layer.name.en}
              </h3>
              <p className="mt-2 text-caption text-stellar-dim">
                {locale === 'ko' ? layer.description.ko : layer.description.en}
              </p>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeLayer === layer.id ? 'auto' : 0,
                  opacity: activeLayer === layer.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2 border-t border-stellar-faint/10 pt-4">
                  {layer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-micro text-stellar-dim">
                      <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: layer.color }} />
                      <span>{locale === 'ko' ? feature.ko : feature.en}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border border-stellar-faint/10 bg-void-elevated p-6"
      >
        <div className="flex items-start gap-4">
          <Database className="h-5 w-5 flex-shrink-0 text-stellar-dim" />
          <div className="flex-1">
            <h4 className="font-mono text-micro uppercase text-stellar-core">
              {locale === 'ko' ? '저장 위치' : 'Storage Location'}
            </h4>
            <p className="mt-2 font-mono text-micro text-stellar-dim">
              .omc/notepad.md
            </p>
            <p className="mt-4 text-caption text-stellar-dim">
              {locale === 'ko' ? 'SQLite + FTS5 전문 검색 인덱스로 밀리초 단위 검색 지원' : 'SQLite + FTS5 full-text search index for millisecond retrieval'}
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border border-stellar-faint/10 bg-void-elevated p-6"
      >
        <div className="flex items-start gap-4">
          <Brain className="h-5 w-5 flex-shrink-0 text-stellar-dim" />
          <div className="flex-1">
            <h4 className="font-mono text-micro uppercase text-stellar-core">
              {locale === 'ko' ? 'MCP 도구' : 'MCP Tools'}
            </h4>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {['notepad_read', 'notepad_write_priority', 'notepad_write_working', 'notepad_write_manual', 'notepad_prune', 'notepad_stats'].map((tool) => (
                <div key={tool} className="flex items-center gap-2 font-mono text-micro text-stellar-dim">
                  <FileText className="h-3 w-3 text-tscore-creative" />
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
