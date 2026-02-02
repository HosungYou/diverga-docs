'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface MemoryFlowDiagramProps {
  locale: string;
}

type FlowNode = {
  id: string;
  label: { en: string; ko: string };
  x: number;
  y: number;
  color: string;
};

type MemoryStorage = {
  id: string;
  name: { en: string; ko: string };
  color: string;
  icon: string;
};

const flowNodes: FlowNode[] = [
  { id: 'start', label: { en: 'Session Start', ko: '세션 시작' }, x: 50, y: 50, color: '#22ccff' },
  { id: 'checkpoint', label: { en: 'Checkpoint Passage', ko: '체크포인트 통과' }, x: 250, y: 50, color: '#ffcc22' },
  { id: 'end', label: { en: 'Session End', ko: '세션 종료' }, x: 450, y: 50, color: '#ff8844' },
  { id: 'complete', label: { en: 'Agent Complete', ko: '에이전트 완료' }, x: 650, y: 50, color: '#44ffaa' },
];

const memoryStorages: MemoryStorage[] = [
  { id: 'project', name: { en: 'Project', ko: '프로젝트' }, color: '#FF6B6B', icon: '📁' },
  { id: 'session', name: { en: 'Session', ko: '세션' }, color: '#FFB347', icon: '⏱️' },
  { id: 'decision', name: { en: 'Decision', ko: '결정' }, color: '#FFE66D', icon: '📋' },
  { id: 'research', name: { en: 'Research', ko: '연구' }, color: '#4ECDC4', icon: '📝' },
  { id: 'tool', name: { en: 'Tool', ko: '도구' }, color: '#95E1D3', icon: '⚙️' },
];

export function MemoryFlowDiagram({ locale }: MemoryFlowDiagramProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [hoveredMemory, setHoveredMemory] = useState<string | null>(null);

  const getTooltip = (nodeId: string): { en: string; ko: string } => {
    const tooltips = {
      start: { en: 'User initiates a conversation', ko: '사용자가 대화를 시작합니다' },
      checkpoint: { en: 'Critical decision recorded', ko: '중요한 결정이 기록됩니다' },
      end: { en: 'Session context saved', ko: '세션 맥락이 저장됩니다' },
      complete: { en: 'Work committed to memory', ko: '작업이 메모리에 저장됩니다' },
    };
    return tooltips[nodeId as keyof typeof tooltips] || { en: '', ko: '' };
  };

  const getMemoryTooltip = (memoryId: string): { en: string; ko: string } => {
    const tooltips = {
      project: { en: 'Permanent project-level context', ko: '영구적인 프로젝트 수준 맥락' },
      session: { en: 'Temporary 7-day session context', ko: '임시 7일 세션 맥락' },
      decision: { en: 'All checkpoint decisions with rationale', ko: '근거와 함께한 모든 체크포인트 결정' },
      research: { en: 'Findings and literature connections', ko: '발견 및 문헌 연결' },
      tool: { en: 'User preferences and settings', ko: '사용자 선호도 및 설정' },
    };
    return tooltips[memoryId as keyof typeof tooltips] || { en: '', ko: '' };
  };

  return (
    <div className="relative w-full overflow-hidden bg-void-elevated border border-stellar-faint/20 p-8">
      {/* Title */}
      <div className="mb-8 text-center">
        <h3 className="font-display text-heading-3 text-stellar-core mb-2">
          {locale === 'ko' ? '메모리 생명주기' : 'Memory Lifecycle'}
        </h3>
        <p className="text-caption text-stellar-dim">
          {locale === 'ko' ? '연구 맥락이 저장되는 시점' : 'When research context is captured'}
        </p>
      </div>

      <svg
        viewBox="0 0 800 300"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Flow connections */}
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22ccff" />
            <stop offset="33%" stopColor="#ffcc22" />
            <stop offset="66%" stopColor="#ff8844" />
            <stop offset="100%" stopColor="#44ffaa" />
          </linearGradient>

          {/* Animated flow marker */}
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="url(#flowGradient)" />
          </marker>
        </defs>

        {/* Animated flow line */}
        <motion.line
          x1={flowNodes[0].x}
          y1={flowNodes[0].y}
          x2={flowNodes[flowNodes.length - 1].x}
          y2={flowNodes[flowNodes.length - 1].y}
          stroke="url(#flowGradient)"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {/* Flow nodes */}
        {flowNodes.map((node, index) => (
          <g key={node.id}>
            {/* Node circle */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="20"
              fill={node.color}
              fillOpacity="0.2"
              stroke={node.color}
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            />

            {/* Node label */}
            <text
              x={node.x}
              y={node.y + 40}
              textAnchor="middle"
              fill="#8888aa"
              fontSize="12"
              fontFamily="monospace"
              className="pointer-events-none"
            >
              {locale === 'ko' ? node.label.ko : node.label.en}
            </text>

            {/* Tooltip */}
            {hoveredNode === node.id && (
              <motion.g
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <rect
                  x={node.x - 80}
                  y={node.y - 60}
                  width="160"
                  height="30"
                  fill="#12121a"
                  stroke={node.color}
                  strokeWidth="1"
                  rx="4"
                />
                <text
                  x={node.x}
                  y={node.y - 40}
                  textAnchor="middle"
                  fill="#f0f0f5"
                  fontSize="10"
                  fontFamily="sans-serif"
                  className="pointer-events-none"
                >
                  {locale === 'ko' ? getTooltip(node.id).ko : getTooltip(node.id).en}
                </text>
              </motion.g>
            )}
          </g>
        ))}

        {/* Memory Storage Section */}
        <text
          x="400"
          y="130"
          textAnchor="middle"
          fill="#f0f0f5"
          fontSize="14"
          fontWeight="bold"
          fontFamily="monospace"
        >
          {locale === 'ko' ? '⬇ 메모리 저장소' : '⬇ Memory Storage'}
        </text>

        {/* Memory storage boxes */}
        {memoryStorages.map((memory, index) => {
          const x = 50 + index * 150;
          const y = 180;

          return (
            <g key={memory.id}>
              {/* Memory box */}
              <motion.rect
                x={x}
                y={y}
                width="120"
                height="80"
                fill={memory.color}
                fillOpacity="0.1"
                stroke={memory.color}
                strokeWidth="2"
                rx="4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                whileHover={{ fillOpacity: 0.2 }}
                onMouseEnter={() => setHoveredMemory(memory.id)}
                onMouseLeave={() => setHoveredMemory(null)}
                className="cursor-pointer"
              />

              {/* Memory icon */}
              <text
                x={x + 60}
                y={y + 35}
                textAnchor="middle"
                fontSize="24"
                className="pointer-events-none"
              >
                {memory.icon}
              </text>

              {/* Memory label */}
              <text
                x={x + 60}
                y={y + 60}
                textAnchor="middle"
                fill="#8888aa"
                fontSize="10"
                fontFamily="monospace"
                className="pointer-events-none"
              >
                {locale === 'ko' ? memory.name.ko : memory.name.en}
              </text>

              {/* Tooltip */}
              {hoveredMemory === memory.id && (
                <motion.g
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <rect
                    x={x - 20}
                    y={y - 40}
                    width="160"
                    height="30"
                    fill="#12121a"
                    stroke={memory.color}
                    strokeWidth="1"
                    rx="4"
                  />
                  <text
                    x={x + 60}
                    y={y - 20}
                    textAnchor="middle"
                    fill="#f0f0f5"
                    fontSize="9"
                    fontFamily="sans-serif"
                    className="pointer-events-none"
                  >
                    {locale === 'ko' ? getMemoryTooltip(memory.id).ko : getMemoryTooltip(memory.id).en}
                  </text>
                </motion.g>
              )}
            </g>
          );
        })}

        {/* Data flow arrows from lifecycle to storage */}
        {[100, 250, 400, 600].map((x, i) => (
          <motion.line
            key={i}
            x1={x}
            y1={70}
            x2={100 + i * 150}
            y2={180}
            stroke="#44445a"
            strokeWidth="1"
            strokeDasharray="3,3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
          />
        ))}
      </svg>

      {/* Legend */}
      <div className="mt-6 flex justify-center gap-6 text-micro text-stellar-dim font-mono">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-memory-gradient" />
          <span>{locale === 'ko' ? '자동 캡처' : 'Auto-captured'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border-2 border-stellar-faint" />
          <span>{locale === 'ko' ? '호버 시 상세정보' : 'Hover for details'}</span>
        </div>
      </div>
    </div>
  );
}
