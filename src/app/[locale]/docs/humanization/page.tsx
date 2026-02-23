'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Shield,
  Workflow,
  ArrowRight,
  FileText,
  Zap,
  Eye
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'Humanization Pipeline',
    subtitle: 'Transform AI patterns into natural academic prose while preserving scholarly integrity',

    // Overview
    overviewTitle: 'Overview',
    overviewDescription: 'The Humanization Pipeline detects and transforms AI-generated writing patterns into natural, human-sounding academic prose. It analyzes 28 pattern categories across 4 transformation layers (vocabulary, phrase, structure, discourse) while maintaining 100% citation accuracy, statistical precision, and scholarly rigor. Powered by Humanizer MCP v3.0 with 13 quantitative stylometric metrics. Orchestrated by the /diverga:humanize skill with mandatory human checkpoints at every stage.',

    // 3-Agent Pipeline
    pipelineTitle: '3-Agent + MCP Pipeline',
    agents: [
      {
        id: 'G5',
        name: 'Academic Style Auditor',
        model: 'Sonnet',
        purpose: 'AI Pattern Detection',
        capabilities: [
          'Detects 28 AI writing pattern categories across 7 domains',
          'AI probability scoring (0-100%)',
          'Risk classification (High/Medium/Low)',
          'Section-specific detection',
          '13 quantitative stylometric metrics via Humanizer MCP',
          'v3.0 composite scoring (6-component formula)',
        ],
      },
      {
        id: 'G6',
        name: 'Academic Style Humanizer',
        model: 'Opus',
        purpose: 'Pattern Transformation',
        capabilities: [
          'Pattern-by-pattern transformation',
          '100% citation preservation',
          '100% statistical value preservation',
          'Three transformation modes',
          '4-layer transformation (vocabulary \u2192 phrase \u2192 structure \u2192 discourse)',
          'Discourse-level DT1-DT4 strategies',
        ],
      },
      {
        id: 'F5',
        name: 'Humanization Verifier',
        model: 'Haiku',
        purpose: 'Quality Assurance',
        capabilities: [
          'Citation integrity verification',
          'Statistical accuracy checking',
          'Meaning preservation validation',
          'AI pattern reduction measurement',
          '8 verification domains including discourse naturalness',
          'v3.0 composite score regression checking',
        ],
      },
    ],

    // Pattern Categories
    patternsTitle: '28 AI Pattern Categories',
    patternsDescription: 'Organized into 7 major domains for comprehensive detection',
    patternDomains: [
      {
        domain: 'Content Patterns (C1-C6)',
        color: '#ff3366',
        examples: [
          'C1: Significance Inflation - "groundbreaking", "revolutionary"',
          'C4: Promotional Language - "impressive", "remarkable"',
          'C5: Vague Attributions - "some researchers suggest"',
        ],
      },
      {
        domain: 'Language Patterns (L1-L6)',
        color: '#ff8844',
        examples: [
          'L1: AI Vocabulary - "delve", "crucial", "leverage", "foster"',
          'L2: Copula Avoidance - "serves as" instead of "is"',
          'L6: False Ranges - "challenges and opportunities"',
        ],
      },
      {
        domain: 'Style Patterns (S1-S6)',
        color: '#ffcc22',
        examples: [
          'S1: Em Dash Overuse - Multiple — dashes — per paragraph',
          'S3: Inline-Header Lists - "First, ... Second, ... Third, ..."',
          'S5: Emoji Usage - Academic text with emojis',
        ],
      },
      {
        domain: 'Communication (M1-M3)',
        color: '#44ffaa',
        examples: [
          'M1: Meta-Commentary - "As an AI language model..."',
          'M2: Excessive Affirmation - "Great question!", "Absolutely!"',
          'M3: Apology Hedging - "I apologize if this..."',
        ],
      },
      {
        domain: 'Hedging (H1-H3)',
        color: '#22ccff',
        examples: [
          'H1: Realm Language - "in the realm of", "landscape of"',
          'H2: Excessive Hedging - "could potentially perhaps suggest"',
          'H3: Redundant Intensifiers - "very unique", "extremely essential"',
        ],
      },
      {
        domain: 'Academic-Specific (A1-A6)',
        color: '#9b59b6',
        examples: [
          'A1: Overclaiming - Causal language without evidence',
          'A4: Methods Boilerplate - Generic methodology descriptions',
          'A6: Implications Inflation - "profound implications for society"',
        ],
      },
      {
        domain: 'Structural Patterns (S7-S10)',
        color: '#e74c3c',
        examples: [
          'S7: Enumeration as Prose - Lists hidden in paragraph form',
          'S8: Repetitive Paragraph Openers - Same opening pattern across paragraphs',
          'S9: Formulaic Section Structure - Predictable IMRaD layout',
          'S10: Hypothesis Checklist - Systematic hypothesis-by-hypothesis reporting',
        ],
      },
    ],

    // Transformation Modes
    modesTitle: 'Three Transformation Modes',
    modesDescription: 'Choose the right level of transformation for your context',
    modes: [
      {
        name: 'Conservative',
        target: 'High-risk patterns only',
        reduction: '20-35%',
        textChange: '5-15%',
        bestFor: 'Journal submissions, formal publications',
        patterns: 'C1, C4, C5, L1-Tier1, S5, M1, M2, A1, A6',
        layers: 'Layer 1-2 (vocabulary + phrase)',
      },
      {
        name: 'Balanced',
        target: 'High + medium-risk patterns',
        reduction: '35-50%',
        textChange: '15-30%',
        bestFor: 'Most academic writing (Recommended)',
        patterns: 'All HIGH + C2, C3, L2, L4, L6, S1, S3, H1, H2, A4, A5',
        recommended: true,
        layers: 'Layer 1-3 (vocabulary + phrase + structure)',
      },
      {
        name: 'Aggressive',
        target: 'All patterns',
        reduction: '50-70%',
        textChange: '30-50%',
        bestFor: 'Blog posts, informal writing',
        patterns: 'All 28 pattern categories',
        warning: 'May affect scholarly tone',
        layers: 'Layer 1-4 (vocabulary + phrase + structure + discourse)',
      },
    ],

    // Pipeline Flow
    flowTitle: 'Pipeline Flow',
    flowSteps: [
      'G5 Pattern Analysis + MCP Metrics',
      'Pass 1: Lexical (Layer 1-2)',
      '🟠 CP_PASS1_REVIEW',
      'Pass 2: Structural (Layer 3)',
      '🟡 CP_PASS2_REVIEW',
      'Pass 3: Discourse (Layer 4)',
      '🟠 CP_PASS3_REVIEW',
      'F5 Final Verification',
      '🟢 CP_FINAL_REVIEW',
    ],

    // Preservation Rules
    preservationTitle: 'Absolute Preservation Rules',
    preservationDescription: 'These elements are NEVER transformed',
    preservationRules: [
      'Citations: (Author, year) format preserved exactly',
      'Statistics: p-values, effect sizes, CIs, N values unchanged',
      'Direct quotes: Verbatim quoted text maintained',
      'Technical terms: Field-specific terminology kept',
      'Mathematical expressions: Formulas and equations preserved',
      'Proper nouns: Names, places, organizations unchanged',
    ],

    // Ethics Framework
    ethicsTitle: 'Ethics Framework',
    ethicsPrinciple: 'Humanization improves expression, not deception.',
    ethicsDoes: [
      'Help express ideas naturally',
      'Remove robotic phrasing',
      'Maintain scholarly tone while improving readability',
      'Remove obvious AI artifacts',
    ],
    ethicsDoesNot: [
      'Make AI use "undetectable"',
      'Replace need for AI disclosure',
      'Generate original ideas',
      'Substitute for human judgment',
    ],

    // Commands
    commandsTitle: 'Quick Commands',
    commands: [
      { command: '"Check AI patterns"', description: 'Run G5 analysis only' },
      { command: '"Humanize my draft"', description: 'Full pipeline (balanced mode)' },
      { command: '"Humanize (conservative)"', description: 'Minimal changes' },
      { command: '"Humanize (aggressive)"', description: 'Maximum naturalness' },
      { command: '"Export with humanization"', description: 'Pipeline before export' },
    ],

    // Checkpoints
    checkpointsTitle: 'Human Checkpoints',
    checkpoints: [
      {
        level: '🟠 Recommended',
        name: 'CP_HUMANIZATION_REVIEW',
        when: 'After G5 analysis',
        action: 'Select mode, approve/skip',
      },
      {
        level: '🟡 Optional',
        name: 'CP_HUMANIZATION_VERIFY',
        when: 'After G6 transformation',
        action: 'Approve/review/revert',
      },
    ],

    // CTA
    ctaTitle: 'Transform Your Academic Writing',
    ctaDescription: 'The Humanization Pipeline is built into Diverga\'s G5-AcademicStyleAuditor, G6-AcademicStyleHumanizer, and F5-HumanizationVerifier agents.',
    ctaButton: 'Explore Agents',
  },
  ko: {
    back: '문서로 돌아가기',
    title: '휴먼화 파이프라인',
    subtitle: '학술적 엄밀성을 유지하면서 AI 패턴을 자연스러운 학술 문체로 변환',

    // Overview
    overviewTitle: '개요',
    overviewDescription: '휴먼화 파이프라인은 AI 생성 작성 패턴을 감지하고 자연스러운 인간적인 학술 문체로 변환합니다. 4개 변환 레이어(어휘, 구문, 구조, 담화)에 걸쳐 28개 패턴 카테고리를 분석하면서 100% 인용 정확도, 통계적 정밀성, 학술적 엄밀성을 유지합니다. 13개의 정량적 문체 측정 메트릭을 갖춘 Humanizer MCP v3.0으로 구동됩니다. /diverga:humanize 스킬에 의해 오케스트레이션되며, 모든 단계에서 필수 휴먼 체크포인트를 적용합니다.',

    // 3-Agent Pipeline
    pipelineTitle: '3-에이전트 + MCP 파이프라인',
    agents: [
      {
        id: 'G5',
        name: '학술 스타일 감사자',
        model: 'Sonnet',
        purpose: 'AI 패턴 감지',
        capabilities: [
          '7개 도메인에서 28개 AI 작성 패턴 카테고리 감지',
          'AI 확률 점수화 (0-100%)',
          '위험 분류 (높음/중간/낮음)',
          '섹션별 감지',
          'Humanizer MCP를 통한 13개 정량적 문체 측정 메트릭',
          'v3.0 복합 점수화 (6개 구성요소 공식)',
        ],
      },
      {
        id: 'G6',
        name: '학술 스타일 휴먼화',
        model: 'Opus',
        purpose: '패턴 변환',
        capabilities: [
          '패턴별 변환',
          '100% 인용 보존',
          '100% 통계 값 보존',
          '3가지 변환 모드',
          '4단계 변환 (어휘 \u2192 구문 \u2192 구조 \u2192 담화)',
          '담화 수준 DT1-DT4 전략',
        ],
      },
      {
        id: 'F5',
        name: '휴먼화 검증자',
        model: 'Haiku',
        purpose: '품질 보증',
        capabilities: [
          '인용 무결성 검증',
          '통계 정확도 확인',
          '의미 보존 검증',
          'AI 패턴 감소 측정',
          '담화 자연스러움을 포함한 8개 검증 영역',
          'v3.0 복합 점수 회귀 검사',
        ],
      },
    ],

    // Pattern Categories
    patternsTitle: '28개 AI 패턴 카테고리',
    patternsDescription: '포괄적 감지를 위해 7개 주요 영역으로 구성',
    patternDomains: [
      {
        domain: '콘텐츠 패턴 (C1-C6)',
        color: '#ff3366',
        examples: [
          'C1: 중요성 과장 - "획기적인", "혁명적인"',
          'C4: 홍보성 언어 - "인상적인", "주목할 만한"',
          'C5: 모호한 귀속 - "일부 연구자들은 제안한다"',
        ],
      },
      {
        domain: '언어 패턴 (L1-L6)',
        color: '#ff8844',
        examples: [
          'L1: AI 어휘 - "탐구하다", "중요한", "활용하다", "촉진하다"',
          'L2: 계사 회피 - "~로 작용한다" 대신 "~이다"',
          'L6: 거짓 범위 - "도전과 기회"',
        ],
      },
      {
        domain: '스타일 패턴 (S1-S6)',
        color: '#ffcc22',
        examples: [
          'S1: Em 대시 과다 사용 - 단락당 여러 개의 — 대시 —',
          'S3: 인라인 헤더 목록 - "첫째, ... 둘째, ... 셋째, ..."',
          'S5: 이모지 사용 - 이모지가 있는 학술 텍스트',
        ],
      },
      {
        domain: '커뮤니케이션 (M1-M3)',
        color: '#44ffaa',
        examples: [
          'M1: 메타 주석 - "AI 언어 모델로서..."',
          'M2: 과도한 긍정 - "좋은 질문이에요!", "절대적으로!"',
          'M3: 사과 완화 - "이것이 맞지 않다면 죄송합니다..."',
        ],
      },
      {
        domain: '완화 (H1-H3)',
        color: '#22ccff',
        examples: [
          'H1: 영역 언어 - "~의 영역에서", "~의 풍경"',
          'H2: 과도한 완화 - "잠재적으로 아마도 제안할 수 있다"',
          'H3: 중복 강화어 - "매우 독특한", "극도로 필수적인"',
        ],
      },
      {
        domain: '학술 특화 (A1-A6)',
        color: '#9b59b6',
        examples: [
          'A1: 과다 주장 - 증거 없는 인과적 언어',
          'A4: 방법론 상용구 - 일반적인 방법론 설명',
          'A6: 함의 과장 - "사회에 대한 심오한 함의"',
        ],
      },
      {
        domain: '구조 패턴 (S7-S10)',
        color: '#e74c3c',
        examples: [
          'S7: 산문 내 열거 - 문단 형태로 숨겨진 목록',
          'S8: 반복적 문단 시작 - 문단 전체에 걸친 동일한 시작 패턴',
          'S9: 공식적 섹션 구조 - 예측 가능한 IMRaD 레이아웃',
          'S10: 가설 체크리스트 - 가설별 체계적 보고',
        ],
      },
    ],

    // Transformation Modes
    modesTitle: '3가지 변환 모드',
    modesDescription: '맥락에 맞는 변환 수준 선택',
    modes: [
      {
        name: '보수적',
        target: '높은 위험 패턴만',
        reduction: '20-35%',
        textChange: '5-15%',
        bestFor: '저널 투고, 공식 출판물',
        patterns: 'C1, C4, C5, L1-Tier1, S5, M1, M2, A1, A6',
        layers: 'Layer 1-2 (vocabulary + phrase)',
      },
      {
        name: '균형적',
        target: '높음 + 중간 위험 패턴',
        reduction: '35-50%',
        textChange: '15-30%',
        bestFor: '대부분의 학술 글쓰기 (권장)',
        patterns: '모든 높음 + C2, C3, L2, L4, L6, S1, S3, H1, H2, A4, A5',
        recommended: true,
        layers: 'Layer 1-3 (vocabulary + phrase + structure)',
      },
      {
        name: '적극적',
        target: '모든 패턴',
        reduction: '50-70%',
        textChange: '30-50%',
        bestFor: '블로그 게시물, 비공식 글쓰기',
        patterns: '28개 패턴 카테고리 모두',
        warning: '학술적 어조에 영향을 줄 수 있음',
        layers: 'Layer 1-4 (vocabulary + phrase + structure + discourse)',
      },
    ],

    // Pipeline Flow
    flowTitle: '파이프라인 흐름',
    flowSteps: [
      'G5 패턴 분석 + MCP 메트릭',
      '패스 1: 어휘 (레이어 1-2)',
      '🟠 CP_PASS1_REVIEW',
      '패스 2: 구조 (레이어 3)',
      '🟡 CP_PASS2_REVIEW',
      '패스 3: 담화 (레이어 4)',
      '🟠 CP_PASS3_REVIEW',
      'F5 최종 검증',
      '🟢 CP_FINAL_REVIEW',
    ],

    // Preservation Rules
    preservationTitle: '절대 보존 규칙',
    preservationDescription: '이러한 요소는 절대 변환되지 않습니다',
    preservationRules: [
      '인용: (저자, 연도) 형식 정확히 보존',
      '통계: p값, 효과 크기, CI, N값 변경 없음',
      '직접 인용: 그대로 인용된 텍스트 유지',
      '전문 용어: 분야별 용어 유지',
      '수학적 표현: 공식 및 방정식 보존',
      '고유 명사: 이름, 장소, 조직 변경 없음',
    ],

    // Ethics Framework
    ethicsTitle: '윤리 프레임워크',
    ethicsPrinciple: '휴먼화는 표현을 개선하지, 속이지 않습니다.',
    ethicsDoes: [
      '아이디어를 자연스럽게 표현하도록 도움',
      '로봇 같은 표현 제거',
      '가독성을 향상시키면서 학술적 어조 유지',
      '명백한 AI 흔적 제거',
    ],
    ethicsDoesNot: [
      'AI 사용을 "감지 불가능"하게 만들지 않음',
      'AI 공개 필요성을 대체하지 않음',
      '독창적인 아이디어를 생성하지 않음',
      '인간의 판단을 대체하지 않음',
    ],

    // Commands
    commandsTitle: '빠른 명령어',
    commands: [
      { command: '"AI 패턴 확인"', description: 'G5 분석만 실행' },
      { command: '"내 초안 휴먼화"', description: '전체 파이프라인 (균형 모드)' },
      { command: '"휴먼화 (보수적)"', description: '최소한의 변경' },
      { command: '"휴먼화 (적극적)"', description: '최대 자연스러움' },
      { command: '"휴먼화로 내보내기"', description: '내보내기 전 파이프라인' },
    ],

    // Checkpoints
    checkpointsTitle: '인간 체크포인트',
    checkpoints: [
      {
        level: '🟠 권장',
        name: 'CP_HUMANIZATION_REVIEW',
        when: 'G5 분석 후',
        action: '모드 선택, 승인/건너뛰기',
      },
      {
        level: '🟡 선택',
        name: 'CP_HUMANIZATION_VERIFY',
        when: 'G6 변환 후',
        action: '승인/검토/되돌리기',
      },
    ],

    // CTA
    ctaTitle: '학술 글쓰기 변환',
    ctaDescription: '휴먼화 파이프라인은 Diverga의 G5-AcademicStyleAuditor, G6-AcademicStyleHumanizer, F5-HumanizationVerifier 에이전트에 내장되어 있습니다.',
    ctaButton: '에이전트 탐색',
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } as any },
};

export default function HumanizationPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-stellar-faint/20 bg-void-surface/50 backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full bg-[#22ccff] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-stellar-faint">
              Humanization
            </span>
            <span className="font-mono text-sm text-stellar-dim">v10.0</span>
          </motion.div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="text-body-lg text-stellar-dim max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.overviewTitle}</h2>
          <p className="text-body text-stellar-dim leading-relaxed">{t.overviewDescription}</p>
        </motion.section>

        {/* Integrity Badges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: CheckCircle2, label: locale === 'ko' ? '100% 인용 보존' : '100% Citation Preserved', color: '#44ffaa' },
              { icon: CheckCircle2, label: locale === 'ko' ? '100% 통계 보존' : '100% Statistics Preserved', color: '#22ccff' },
              { icon: Shield, label: locale === 'ko' ? '학술적 엄밀성 유지' : 'Academic Rigor Maintained', color: '#9b59b6' },
            ].map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 border bg-void-elevated p-4"
                style={{ borderColor: `${badge.color}30` }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center border"
                  style={{ backgroundColor: `${badge.color}15`, borderColor: `${badge.color}30` }}
                >
                  <badge.icon className="h-4 w-4" style={{ color: badge.color }} />
                </div>
                <span className="font-mono text-sm text-stellar-core">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* 3-Agent Pipeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(34, 204, 255, 0.15)' }}
            >
              <Workflow className="h-5 w-5" style={{ color: '#22ccff' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.pipelineTitle}</h2>
          </div>

          <div className="space-y-4">
            {t.agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-stellar-faint/10 bg-void-elevated p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-lg font-bold text-[#22ccff]">{agent.id}</span>
                      <h3 className="void-heading-3 text-stellar-core">{agent.name}</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-caption text-stellar-dim">{agent.purpose}</span>
                      <span
                        className="px-2 py-0.5 font-mono text-xs uppercase border"
                        style={{
                          color: agent.model === 'Opus' ? '#44ffaa' : agent.model === 'Sonnet' ? '#22ccff' : '#ffcc22',
                          backgroundColor: agent.model === 'Opus' ? 'rgba(68, 255, 170, 0.1)' : agent.model === 'Sonnet' ? 'rgba(34, 204, 255, 0.1)' : 'rgba(255, 204, 34, 0.1)',
                          borderColor: agent.model === 'Opus' ? 'rgba(68, 255, 170, 0.3)' : agent.model === 'Sonnet' ? 'rgba(34, 204, 255, 0.3)' : 'rgba(255, 204, 34, 0.3)',
                        }}
                      >
                        {agent.model}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {agent.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-body text-stellar-dim">
                      <span className="text-[#22ccff] mt-1">•</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Pattern Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(255, 136, 68, 0.15)' }}
            >
              <Eye className="h-5 w-5" style={{ color: '#ff8844' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.patternsTitle}</h2>
          </div>
          <p className="text-body text-stellar-dim mb-8">{t.patternsDescription}</p>

          <div className="grid gap-4">
            {t.patternDomains.map((domain, index) => (
              <motion.div
                key={domain.domain}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border bg-void-elevated p-5"
                style={{ borderColor: `${domain.color}30` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: domain.color }}
                  />
                  <h3 className="font-mono font-bold text-stellar-core">{domain.domain}</h3>
                </div>
                <ul className="space-y-1.5">
                  {domain.examples.map((example, idx) => (
                    <li key={idx} className="text-body text-stellar-dim pl-6">
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Transformation Modes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)' }}
            >
              <Zap className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.modesTitle}</h2>
          </div>
          <p className="text-body text-stellar-dim mb-8">{t.modesDescription}</p>

          <div className="grid gap-4 md:grid-cols-3">
            {t.modes.map((mode, index) => (
              <motion.div
                key={mode.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border bg-void-elevated p-5"
                style={{
                  borderColor: mode.recommended ? 'rgba(68, 255, 170, 0.3)' : 'rgba(68, 68, 90, 0.3)',
                  backgroundColor: mode.recommended ? 'rgba(68, 255, 170, 0.05)' : undefined,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-mono font-bold text-stellar-core">{mode.name}</h3>
                  {mode.recommended && (
                    <span
                      className="px-2 py-0.5 font-mono text-xs uppercase"
                      style={{
                        color: '#44ffaa',
                        backgroundColor: 'rgba(68, 255, 170, 0.1)',
                        border: '1px solid rgba(68, 255, 170, 0.3)',
                      }}
                    >
                      ⭐
                    </span>
                  )}
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-caption">
                    <span className="text-stellar-faint">{locale === 'ko' ? '대상' : 'Target'}:</span>
                    <span className="text-stellar-dim">{mode.target}</span>
                  </div>
                  <div className="flex justify-between text-caption">
                    <span className="text-stellar-faint">{locale === 'ko' ? '감소' : 'Reduction'}:</span>
                    <span className="text-stellar-dim">{mode.reduction}</span>
                  </div>
                  <div className="flex justify-between text-caption">
                    <span className="text-stellar-faint">{locale === 'ko' ? '텍스트 변경' : 'Text Change'}:</span>
                    <span className="text-stellar-dim">{mode.textChange}</span>
                  </div>
                  {mode.layers && (
                    <div className="flex justify-between text-caption">
                      <span className="text-stellar-faint">{locale === 'ko' ? '레이어' : 'Layers'}:</span>
                      <span className="text-stellar-dim">{mode.layers}</span>
                    </div>
                  )}
                </div>
                <p className="text-caption text-stellar-dim mb-3">
                  <span className="font-semibold">{locale === 'ko' ? '적합' : 'Best for'}:</span> {mode.bestFor}
                </p>
                {mode.warning && (
                  <div
                    className="flex items-start gap-2 p-2 border text-caption"
                    style={{
                      backgroundColor: 'rgba(255, 136, 68, 0.05)',
                      borderColor: 'rgba(255, 136, 68, 0.2)',
                      color: '#ff8844',
                    }}
                  >
                    <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>{mode.warning}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Pipeline Flow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-8 text-center">{t.flowTitle}</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            {t.flowSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className="px-4 py-2 border bg-void-elevated text-center"
                  style={{
                    borderColor: step.includes('🟢') ? 'rgba(68, 255, 170, 0.3)' : step.includes('🟠') || step.includes('🟡') ? 'rgba(155, 89, 182, 0.3)' : 'rgba(68, 68, 90, 0.3)',
                    backgroundColor: step.includes('🟢') ? 'rgba(68, 255, 170, 0.05)' : step.includes('🟠') || step.includes('🟡') ? 'rgba(155, 89, 182, 0.05)' : undefined,
                  }}
                >
                  <span className="text-caption text-stellar-core font-mono">{step}</span>
                </div>
                {index < t.flowSteps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-stellar-faint hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Preservation Rules */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(155, 89, 182, 0.15)' }}
            >
              <Shield className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.preservationTitle}</h2>
          </div>
          <p className="text-body text-stellar-dim mb-6">{t.preservationDescription}</p>

          <div className="bg-void-elevated border border-stellar-faint/10 p-6">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {t.preservationRules.map((rule, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#9b59b6' }} />
                  <span className="text-stellar-bright">{rule}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Ethics Framework */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(255, 204, 34, 0.15)' }}
            >
              <Sparkles className="h-5 w-5" style={{ color: '#ffcc22' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.ethicsTitle}</h2>
          </div>

          <div
            className="p-6 border mb-6"
            style={{
              backgroundColor: 'rgba(255, 204, 34, 0.05)',
              borderColor: 'rgba(255, 204, 34, 0.2)',
            }}
          >
            <p className="text-body-lg font-semibold text-stellar-core text-center">
              "{t.ethicsPrinciple}"
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Does */}
            <div className="border border-stellar-faint/10 bg-void-elevated p-5">
              <h3 className="font-mono font-bold text-[#44ffaa] mb-3">
                {locale === 'ko' ? '✅ 하는 것' : '✅ DOES'}
              </h3>
              <ul className="space-y-2">
                {t.ethicsDoes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-body text-stellar-dim">
                    <span className="text-[#44ffaa]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Does Not */}
            <div className="border border-stellar-faint/10 bg-void-elevated p-5">
              <h3 className="font-mono font-bold text-[#ff3366] mb-3">
                {locale === 'ko' ? '❌ 하지 않는 것' : '❌ DOES NOT'}
              </h3>
              <ul className="space-y-2">
                {t.ethicsDoesNot.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-body text-stellar-dim">
                    <span className="text-[#ff3366]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Commands */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(34, 204, 255, 0.15)' }}
            >
              <FileText className="h-5 w-5" style={{ color: '#22ccff' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.commandsTitle}</h2>
          </div>

          <div className="space-y-3">
            {t.commands.map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between border border-stellar-faint/10 bg-void-elevated p-4"
              >
                <code className="font-mono text-sm text-[#22ccff]">{cmd.command}</code>
                <span className="text-caption text-stellar-dim">{cmd.description}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 204, 255, 0.1) 0%, rgba(68, 255, 170, 0.1) 100%)',
              borderColor: 'rgba(34, 204, 255, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6 max-w-2xl mx-auto">{t.ctaDescription}</p>
            <Link
              href={`/${locale}/agents?category=G`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.ctaButton}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
