'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Monitor,
  Settings,
  Eye,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'HUD Statusline',
    subtitle: 'Real-Time Research Session Display',
    description: 'The HUD (Heads-Up Display) provides a persistent statusline showing your current research context, active agents, and checkpoint status. Introduced in v8.0.',

    presetsTitle: 'Display Presets',
    presetsDescription: 'Choose a preset that matches your workflow:',
    presets: [
      {
        name: 'research',
        label: 'Research (Default)',
        color: '#44ffaa',
        description: 'Full research context with active agents, memory status, and checkpoint queue',
        format: '[Stage 2/7] [A2-Theory ▸ B1-Literature] [Memory: 3 decisions] [CP: 1 pending]',
      },
      {
        name: 'checkpoint',
        label: 'Checkpoint',
        color: '#ff5f56',
        description: 'Focus on checkpoint decisions and audit trail progress',
        format: '[🔴 CP_THEORY_SELECTION pending] [Decisions: 5/12] [Audit: 89% complete]',
      },
      {
        name: 'memory',
        label: 'Memory',
        color: '#22ccff',
        description: 'Memory system status with decision log and context persistence',
        format: '[Memory: Active] [Decisions: 8] [Context: 2.4KB] [Last save: 2m ago]',
      },
      {
        name: 'minimal',
        label: 'Minimal',
        color: '#8888aa',
        description: 'Compact display with just stage number and active agent',
        format: '[S2] [A2] [●]',
      },
    ],

    configTitle: 'Configuration',
    configDescription: 'Configure the HUD using the skill command:',
    configCommands: [
      { command: '/diverga:hud', description: 'Open HUD configuration menu' },
      { command: '/diverga:hud preset research', description: 'Switch to research preset' },
      { command: '/diverga:hud preset minimal', description: 'Switch to minimal preset' },
      { command: '/diverga:hud toggle', description: 'Show/hide the HUD' },
    ],

    featuresTitle: 'Key Features',
    features: [
      {
        title: 'Independent Display',
        description: 'The HUD operates independently from the oh-my-claudecode statusline. Both can run simultaneously without conflicts.',
        icon: 'monitor',
        color: '#44ffaa',
      },
      {
        title: 'Context Persistence',
        description: 'HUD state persists across conversation turns and survives context compaction.',
        icon: 'eye',
        color: '#22ccff',
      },
      {
        title: 'Live Updates',
        description: 'Agent activity, checkpoint status, and memory changes are reflected in real-time.',
        icon: 'zap',
        color: '#ffcc22',
      },
      {
        title: 'Preset Switching',
        description: 'Switch between presets at any time without losing research context.',
        icon: 'settings',
        color: '#9b59b6',
      },
    ],

    ctaTitle: 'Configure Your HUD',
    ctaDescription: 'Set up the HUD to match your research workflow.',
    ctaButtons: {
      quickStart: 'Quick Start Guide',
      configuration: 'Full Configuration',
    },
  },
  ko: {
    back: '문서로 돌아가기',
    title: 'HUD 상태표시줄',
    subtitle: '실시간 연구 세션 디스플레이',
    description: 'HUD (헤드업 디스플레이)는 현재 연구 맥락, 활성 에이전트, 체크포인트 상태를 보여주는 지속적인 상태표시줄을 제공합니다. v8.0에서 도입되었습니다.',

    presetsTitle: '디스플레이 프리셋',
    presetsDescription: '워크플로우에 맞는 프리셋을 선택하세요:',
    presets: [
      {
        name: 'research',
        label: '연구 (기본값)',
        color: '#44ffaa',
        description: '활성 에이전트, 메모리 상태, 체크포인트 큐를 포함한 전체 연구 맥락',
        format: '[2/7단계] [A2-이론 ▸ B1-문헌] [메모리: 3 결정] [CP: 1 대기]',
      },
      {
        name: 'checkpoint',
        label: '체크포인트',
        color: '#ff5f56',
        description: '체크포인트 결정 및 감사 추적 진행에 집중',
        format: '[🔴 CP_THEORY_SELECTION 대기] [결정: 5/12] [감사: 89% 완료]',
      },
      {
        name: 'memory',
        label: '메모리',
        color: '#22ccff',
        description: '결정 로그 및 맥락 지속성을 포함한 메모리 시스템 상태',
        format: '[메모리: 활성] [결정: 8] [맥락: 2.4KB] [마지막 저장: 2분 전]',
      },
      {
        name: 'minimal',
        label: '최소',
        color: '#8888aa',
        description: '단계 번호와 활성 에이전트만 표시하는 컴팩트 디스플레이',
        format: '[S2] [A2] [●]',
      },
    ],

    configTitle: '설정',
    configDescription: '스킬 명령어를 사용하여 HUD를 설정합니다:',
    configCommands: [
      { command: '/diverga:hud', description: 'HUD 설정 메뉴 열기' },
      { command: '/diverga:hud preset research', description: '연구 프리셋으로 전환' },
      { command: '/diverga:hud preset minimal', description: '최소 프리셋으로 전환' },
      { command: '/diverga:hud toggle', description: 'HUD 표시/숨기기' },
    ],

    featuresTitle: '주요 기능',
    features: [
      {
        title: '독립적 디스플레이',
        description: 'HUD는 oh-my-claudecode 상태표시줄과 독립적으로 작동합니다. 둘 다 충돌 없이 동시에 실행할 수 있습니다.',
        icon: 'monitor',
        color: '#44ffaa',
      },
      {
        title: '맥락 지속성',
        description: 'HUD 상태는 대화 턴 간에 지속되며 컨텍스트 압축에서도 유지됩니다.',
        icon: 'eye',
        color: '#22ccff',
      },
      {
        title: '실시간 업데이트',
        description: '에이전트 활동, 체크포인트 상태, 메모리 변경이 실시간으로 반영됩니다.',
        icon: 'zap',
        color: '#ffcc22',
      },
      {
        title: '프리셋 전환',
        description: '연구 맥락을 잃지 않고 언제든지 프리셋 간 전환이 가능합니다.',
        icon: 'settings',
        color: '#9b59b6',
      },
    ],

    ctaTitle: 'HUD 설정하기',
    ctaDescription: '연구 워크플로우에 맞게 HUD를 설정하세요.',
    ctaButtons: {
      quickStart: '빠른 시작 가이드',
      configuration: '전체 설정',
    },
  },
};

const featureIcons: Record<string, React.ReactNode> = {
  monitor: <Monitor className="h-6 w-6" />,
  eye: <Eye className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  settings: <Settings className="h-6 w-6" />,
};

export default function HUDPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link href={`/${locale}/docs`} className="void-nav-link inline-flex items-center gap-2 mb-8">
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center top, rgba(68, 255, 170, 0.12) 0%, transparent 50%)' }} />
          <div className="flex justify-center mb-6 relative z-10">
            <div className="flex h-16 w-16 items-center justify-center border border-[#44ffaa]/30" style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)', color: '#44ffaa' }}>
              <Monitor className="h-8 w-8" />
            </div>
          </div>
          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#44ffaa' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>
        </motion.div>

        <div className="void-divider-glow mb-16" />

        {/* Presets */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.presetsTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.presetsDescription}</p>
          <div className="space-y-6">
            {t.presets.map((preset, index) => (
              <motion.div key={preset.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-6 bg-void-elevated border border-stellar-faint/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: preset.color }} />
                  <h3 className="void-heading-3 text-stellar-core">{preset.label}</h3>
                </div>
                <p className="text-sm text-stellar-dim mb-4">{preset.description}</p>
                <div className="p-3 bg-void-deep border border-stellar-faint/10 font-mono text-xs" style={{ color: preset.color }}>
                  {preset.format}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Configuration */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.configTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.configDescription}</p>
          <div className="space-y-3">
            {t.configCommands.map((cmd, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10">
                <code className="font-mono text-sm shrink-0" style={{ color: '#44ffaa' }}>{cmd.command}</code>
                <p className="text-sm text-stellar-dim">{cmd.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Features */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="void-heading-2 text-stellar-core mb-8">{t.featuresTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {t.features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-5 bg-void-elevated border border-stellar-faint/10">
                <div className="flex h-12 w-12 items-center justify-center border mb-4" style={{ backgroundColor: `${feature.color}15`, borderColor: `${feature.color}30`, color: feature.color }}>
                  {featureIcons[feature.icon]}
                </div>
                <h3 className="void-heading-3 text-stellar-core mb-2">{feature.title}</h3>
                <p className="text-sm text-stellar-dim">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <div className="p-8 border" style={{ background: 'linear-gradient(135deg, rgba(68, 255, 170, 0.1) 0%, rgba(34, 204, 255, 0.1) 100%)', borderColor: 'rgba(68, 255, 170, 0.2)' }}>
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${locale}/docs/quick-start`} className="void-btn void-btn-accent inline-flex items-center gap-2">
                {t.ctaButtons.quickStart}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href={`/${locale}/docs/configuration`} className="void-btn void-btn-primary inline-flex items-center gap-2">
                {t.ctaButtons.configuration}
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
