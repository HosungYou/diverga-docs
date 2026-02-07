'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Stethoscope,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Shield,
  Settings,
  Key,
  FolderTree,
  Zap,
  ArrowRight,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'Diagnostics',
    subtitle: 'System Health Checks for Diverga',
    description: 'The Doctor skill performs comprehensive diagnostics on your Diverga installation. It follows an OpenClaw-style Check-Report-Fix pattern to identify and resolve issues. Introduced in v8.0.2.',

    layersTitle: '5-Layer Diagnostic Checks',
    layersDescription: 'Doctor examines your installation from top to bottom:',
    layers: [
      {
        name: 'Plugin Health',
        icon: 'shield',
        color: '#44ffaa',
        checks: ['Plugin files present and valid', 'Version compatibility with oh-my-claudecode', 'Skill files properly linked', 'AGENTS.md file accessible'],
      },
      {
        name: 'Skill Sync',
        icon: 'zap',
        color: '#22ccff',
        checks: ['All 44 agent skills registered', 'Skill trigger patterns valid', 'No duplicate skill names', 'Skill-to-agent mapping correct'],
      },
      {
        name: 'Config Validity',
        icon: 'settings',
        color: '#ffcc22',
        checks: ['CLAUDE.md syntax valid', 'Agent definitions parseable', 'Checkpoint configurations consistent', 'Memory system paths correct'],
      },
      {
        name: 'API Keys',
        icon: 'key',
        color: '#ff8844',
        checks: ['ANTHROPIC_API_KEY set', 'GROQ_API_KEY set (for screening)', 'Optional: SCOPUS_API_KEY, WOS_API_KEY', 'Key format validation (no whitespace)'],
      },
      {
        name: 'Project State',
        icon: 'folderTree',
        color: '#9b59b6',
        checks: ['.diverga/ directory structure', 'Memory files readable', 'Decision log integrity', 'Active project state valid'],
      },
    ],

    patternTitle: 'Check-Report-Fix Pattern',
    patternDescription: 'Doctor follows a predictable three-step process:',
    patternSteps: [
      { step: 'Check', color: '#22ccff', description: 'Run all diagnostic checks across 5 layers. Read-only, no modifications.' },
      { step: 'Report', color: '#ffcc22', description: 'Display results with severity levels: PASS, WARN, or FAIL for each check.' },
      { step: 'Fix', color: '#44ffaa', description: 'Suggest actionable fix commands for any WARN or FAIL results. User confirms before execution.' },
    ],

    usageTitle: 'Usage',
    usageDescription: 'Run diagnostics with the skill command:',
    usageCommand: '/diverga:doctor',
    usageNote: 'Doctor is read-only by default. Fix commands are suggested but require user confirmation.',

    outputTitle: 'Example Output',
    outputExample: `[CHECK] Plugin Health
  ✅ Plugin files present
  ✅ Version v8.0.2 compatible
  ✅ 44 skills registered
  ⚠️ AGENTS.md last updated 14 days ago

[CHECK] API Keys
  ✅ ANTHROPIC_API_KEY set
  ✅ GROQ_API_KEY set
  ❌ SCOPUS_API_KEY not set
  ⚠️ WOS_API_KEY not set

[REPORT] 2 warnings, 1 failure
[FIX] Run: export SCOPUS_API_KEY=your_key`,

    ctaTitle: 'Run Diagnostics Now',
    ctaDescription: 'Check your Diverga installation health.',
    ctaButtons: {
      quickStart: 'Quick Start Guide',
      configuration: 'Configuration',
    },
  },
  ko: {
    back: '문서로 돌아가기',
    title: '진단',
    subtitle: 'Diverga 시스템 건강 검사',
    description: 'Doctor 스킬은 Diverga 설치에 대한 포괄적인 진단을 수행합니다. OpenClaw 스타일의 검사-보고-수정 패턴을 따라 문제를 식별하고 해결합니다. v8.0.2에서 도입되었습니다.',

    layersTitle: '5계층 진단 검사',
    layersDescription: 'Doctor는 설치를 위에서 아래로 검사합니다:',
    layers: [
      {
        name: '플러그인 건강',
        icon: 'shield',
        color: '#44ffaa',
        checks: ['플러그인 파일 존재 및 유효성', 'oh-my-claudecode와 버전 호환성', '스킬 파일 올바르게 연결됨', 'AGENTS.md 파일 접근 가능'],
      },
      {
        name: '스킬 동기화',
        icon: 'zap',
        color: '#22ccff',
        checks: ['44개 에이전트 스킬 모두 등록됨', '스킬 트리거 패턴 유효', '중복 스킬 이름 없음', '스킬-에이전트 매핑 올바름'],
      },
      {
        name: '설정 유효성',
        icon: 'settings',
        color: '#ffcc22',
        checks: ['CLAUDE.md 구문 유효', '에이전트 정의 파싱 가능', '체크포인트 설정 일관성', '메모리 시스템 경로 올바름'],
      },
      {
        name: 'API 키',
        icon: 'key',
        color: '#ff8844',
        checks: ['ANTHROPIC_API_KEY 설정됨', 'GROQ_API_KEY 설정됨 (스크리닝용)', '선택적: SCOPUS_API_KEY, WOS_API_KEY', '키 형식 검증 (공백 없음)'],
      },
      {
        name: '프로젝트 상태',
        icon: 'folderTree',
        color: '#9b59b6',
        checks: ['.diverga/ 디렉토리 구조', '메모리 파일 읽기 가능', '결정 로그 무결성', '활성 프로젝트 상태 유효'],
      },
    ],

    patternTitle: '검사-보고-수정 패턴',
    patternDescription: 'Doctor는 예측 가능한 3단계 프로세스를 따릅니다:',
    patternSteps: [
      { step: '검사', color: '#22ccff', description: '5개 계층에 걸쳐 모든 진단 검사를 실행합니다. 읽기 전용, 수정 없음.' },
      { step: '보고', color: '#ffcc22', description: '각 검사에 대해 통과, 경고 또는 실패 심각도 수준으로 결과를 표시합니다.' },
      { step: '수정', color: '#44ffaa', description: '경고 또는 실패 결과에 대해 실행 가능한 수정 명령을 제안합니다. 실행 전 사용자 확인 필요.' },
    ],

    usageTitle: '사용법',
    usageDescription: '스킬 명령어로 진단을 실행합니다:',
    usageCommand: '/diverga:doctor',
    usageNote: 'Doctor는 기본적으로 읽기 전용입니다. 수정 명령은 제안되지만 사용자 확인이 필요합니다.',

    outputTitle: '출력 예시',
    outputExample: `[검사] 플러그인 건강
  ✅ 플러그인 파일 존재
  ✅ 버전 v8.0.2 호환
  ✅ 44개 스킬 등록됨
  ⚠️ AGENTS.md 마지막 업데이트 14일 전

[검사] API 키
  ✅ ANTHROPIC_API_KEY 설정됨
  ✅ GROQ_API_KEY 설정됨
  ❌ SCOPUS_API_KEY 미설정
  ⚠️ WOS_API_KEY 미설정

[보고] 2개 경고, 1개 실패
[수정] 실행: export SCOPUS_API_KEY=your_key`,

    ctaTitle: '지금 진단 실행',
    ctaDescription: 'Diverga 설치 건강을 확인하세요.',
    ctaButtons: {
      quickStart: '빠른 시작 가이드',
      configuration: '설정',
    },
  },
};

const layerIcons: Record<string, React.ReactNode> = {
  shield: <Shield className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  settings: <Settings className="h-6 w-6" />,
  key: <Key className="h-6 w-6" />,
  folderTree: <FolderTree className="h-6 w-6" />,
};

export default function DoctorPage() {
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center top, rgba(34, 204, 255, 0.12) 0%, transparent 50%)' }} />
          <div className="flex justify-center mb-6 relative z-10">
            <div className="flex h-16 w-16 items-center justify-center border border-[#22ccff]/30" style={{ backgroundColor: 'rgba(34, 204, 255, 0.15)', color: '#22ccff' }}>
              <Stethoscope className="h-8 w-8" />
            </div>
          </div>
          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#22ccff' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>
        </motion.div>

        <div className="void-divider-glow mb-16" />

        {/* 5-Layer Checks */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.layersTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.layersDescription}</p>
          <div className="space-y-6">
            {t.layers.map((layer, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-6 bg-void-elevated border border-stellar-faint/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center border" style={{ backgroundColor: `${layer.color}15`, borderColor: `${layer.color}30`, color: layer.color }}>
                    {layerIcons[layer.icon]}
                  </div>
                  <h3 className="void-heading-3 text-stellar-core">{layer.name}</h3>
                </div>
                <div className="space-y-2">
                  {layer.checks.map((check, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: layer.color }} />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Check-Report-Fix */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.patternTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.patternDescription}</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {t.patternSteps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-5 bg-void-elevated border" style={{ borderColor: `${step.color}30` }}>
                <div className="flex h-10 w-10 items-center justify-center border mb-4 font-mono font-bold" style={{ backgroundColor: `${step.color}15`, borderColor: `${step.color}30`, color: step.color }}>
                  {index + 1}
                </div>
                <h3 className="void-heading-3 mb-2" style={{ color: step.color }}>{step.step}</h3>
                <p className="text-sm text-stellar-dim">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Usage */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.usageTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.usageDescription}</p>
          <div className="p-4 bg-void-elevated border border-[#22ccff]/30 mb-4">
            <code className="font-mono text-lg" style={{ color: '#22ccff' }}>{t.usageCommand}</code>
          </div>
          <p className="text-sm text-stellar-faint italic">{t.usageNote}</p>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Output Example */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="void-heading-2 text-stellar-core mb-6">{t.outputTitle}</h2>
          <div className="bg-void-elevated border border-stellar-faint/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-stellar-faint/10">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f56' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#27c93f' }} />
              <span className="ml-2 font-mono text-xs text-stellar-faint">diverga:doctor</span>
            </div>
            <pre className="p-6 text-sm font-mono text-stellar-bright overflow-x-auto whitespace-pre">{t.outputExample}</pre>
          </div>
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <div className="p-8 border" style={{ background: 'linear-gradient(135deg, rgba(34, 204, 255, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)', borderColor: 'rgba(34, 204, 255, 0.2)' }}>
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
