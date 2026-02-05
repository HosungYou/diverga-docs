'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Zap, Clock, DollarSign, Brain, Sparkles, Target } from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'Model Tiers Reference',
    subtitle: 'Strategic model routing for optimal cost-performance balance',
    philosophy: '"Use LOW tier for exploration, escalate to MEDIUM for implementation, reserve HIGH for validation"',

    // Overview
    overviewTitle: 'Model Tier System',
    overviewDescription: 'Diverga routes agents to appropriate AI models (Opus, Sonnet, Haiku) based on task complexity, ensuring optimal cost-performance balance.',

    // Tier Cards
    tiers: [
      {
        level: 'HIGH',
        model: 'Opus',
        count: 17,
        color: '#9b59b6',
        cost: 'Highest',
        speed: 'Slowest',
        useFor: 'Complex analysis, critical decisions, orchestration',
        agents: ['A1', 'A2', 'A3', 'A5', 'B5', 'C1', 'C2', 'C3', 'C5', 'D4', 'E1', 'E2', 'E3', 'G3', 'G6', 'H1', 'H2', 'I0'],
        checkpoints: 'Usually REQUIRED',
        examples: [
          'Theory selection with VS methodology',
          'Research design validation',
          'Meta-analysis orchestration',
          'Humanization transformation',
        ],
      },
      {
        level: 'MEDIUM',
        model: 'Sonnet',
        count: 18,
        color: '#45b7d1',
        cost: 'Moderate',
        speed: 'Balanced',
        useFor: 'Standard tasks, balanced quality',
        agents: ['A4', 'A6', 'B1', 'B2', 'C4', 'C6', 'C7', 'D1', 'D2', 'E5', 'F3', 'F4', 'G1', 'G2', 'G4', 'G5', 'I1', 'I2'],
        checkpoints: 'Usually RECOMMENDED',
        examples: [
          'Literature search & screening',
          'Data integrity validation',
          'AI pattern detection',
          'Ethics review',
        ],
      },
      {
        level: 'LOW',
        model: 'Haiku',
        count: 9,
        color: '#44ffaa',
        cost: 'Lowest',
        speed: 'Fastest',
        useFor: 'Quick lookups, simple transformations',
        agents: ['B3', 'B4', 'D3', 'E4', 'F1', 'F2', 'F5', 'I3'],
        checkpoints: 'Usually OPTIONAL',
        examples: [
          'Effect size extraction',
          'Code generation',
          'Checklist verification',
          'Vector database construction',
        ],
      },
    ],

    // Selection Matrix
    matrixTitle: 'Tier Selection Matrix',
    matrixDescription: 'Choose appropriate tier based on task complexity and research stage:',
    matrix: [
      { complexity: 'Critical decision', stage: 'Early (design)', tier: 'HIGH', reason: 'Foundation decisions impact entire project' },
      { complexity: 'Standard analysis', stage: 'Middle (data)', tier: 'MEDIUM', reason: 'Balanced rigor and cost-efficiency' },
      { complexity: 'Simple lookup', stage: 'Any', tier: 'LOW', reason: 'Fast, reliable, cost-effective' },
      { complexity: 'Complex orchestration', stage: 'Any', tier: 'HIGH', reason: 'Multi-agent coordination needed' },
      { complexity: 'Batch processing', stage: 'Data collection', tier: 'MEDIUM/LOW', reason: 'Volume over individual quality' },
      { complexity: 'Validation gate', stage: 'Quality check', tier: 'HIGH', reason: 'Critical quality assurance' },
    ],

    // Cost Optimization
    costTitle: 'Cost Optimization Strategy',
    costDescription: 'Maximize value by strategic tier routing:',
    costStrategies: [
      {
        title: 'Exploration → Implementation → Validation',
        description: 'Start with LOW tier agents for exploration (B3, B4), escalate to MEDIUM for implementation (B1, B2), reserve HIGH for validation (A1, A2)',
        savings: '~60-70% cost reduction vs. all-HIGH',
      },
      {
        title: 'Parallel LOW-tier Processing',
        description: 'Use LOW-tier agents for batch tasks (F1, F2, E4) that can run in parallel without checkpoints',
        savings: '~80% cost reduction vs. sequential HIGH-tier',
      },
      {
        title: 'Checkpoint-Gated Escalation',
        description: 'Only escalate to HIGH tier when checkpoint requires human decision (🔴 REQUIRED)',
        savings: '~50% cost reduction vs. default HIGH',
      },
    ],

    // Complete Agent Matrix
    agentMatrixTitle: 'Complete Agent-Tier Matrix',
    agentMatrixDescription: 'All 44 agents organized by tier and category:',

    // Temperature Settings
    temperatureTitle: 'Temperature Settings by Category',
    temperatureDescription: 'Temperature controls creativity vs. consistency:',
    temperatures: [
      { category: 'A (Foundation)', range: '0.3-0.5', rationale: 'Strategic with creativity for alternatives' },
      { category: 'B (Evidence)', range: '0.1-0.3', rationale: 'Precision in evidence synthesis' },
      { category: 'C (Design)', range: '0.5-0.7', rationale: 'Balance rigor with design creativity' },
      { category: 'D (Collection)', range: '0.3-0.5', rationale: 'Structured but adaptive protocols' },
      { category: 'E (Analysis)', range: '0.1-0.3', rationale: 'Analytical precision required' },
      { category: 'F (Quality)', range: '0.1', rationale: 'Maximum consistency for validation' },
      { category: 'G (Communication)', range: '0.5-0.7', rationale: 'Creative communication' },
      { category: 'H (Specialized)', range: '0.7-0.9', rationale: 'High contextual sensitivity' },
      { category: 'I (Systematic Review)', range: '0.1-0.3', rationale: 'PRISMA compliance precision' },
    ],

    // Manual Override
    overrideTitle: 'Manual Model Override',
    overrideDescription: 'You can override default tier by explicitly passing model parameter to Task tool:',
    overrideExample: `// Default: A4 uses sonnet (MEDIUM tier)
Task(subagent_type="diverga:a4", model="opus", prompt="...")

// Override to HIGH tier for critical ethics review`,

    // Next Steps
    nextStepsTitle: 'Related Documentation',
    nextSteps: [
      { title: 'Agent Overview', href: '/docs/agents', description: 'Complete list of 44 specialized agents' },
      { title: 'Checkpoints', href: '/docs/core-concepts/checkpoints', description: 'Human checkpoint system' },
      { title: 'VS Methodology', href: '/docs/core-concepts/vs-methodology', description: 'Beyond modal recommendations' },
    ],
  },
  ko: {
    back: '문서로 돌아가기',
    title: '모델 티어 레퍼런스',
    subtitle: '최적의 비용-성능 균형을 위한 전략적 모델 라우팅',
    philosophy: '"탐색에는 LOW 티어 사용, 구현에는 MEDIUM으로 상향, 검증에는 HIGH 예약"',

    overviewTitle: '모델 티어 시스템',
    overviewDescription: 'Diverga는 작업 복잡도에 따라 에이전트를 적절한 AI 모델(Opus, Sonnet, Haiku)로 라우팅하여 최적의 비용-성능 균형을 보장합니다.',

    tiers: [
      {
        level: 'HIGH',
        model: 'Opus',
        count: 17,
        color: '#9b59b6',
        cost: '최고',
        speed: '가장 느림',
        useFor: '복잡한 분석, 중요한 결정, 오케스트레이션',
        agents: ['A1', 'A2', 'A3', 'A5', 'B5', 'C1', 'C2', 'C3', 'C5', 'D4', 'E1', 'E2', 'E3', 'G3', 'G6', 'H1', 'H2', 'I0'],
        checkpoints: '일반적으로 필수',
        examples: [
          'VS 방법론을 사용한 이론 선택',
          '연구 설계 검증',
          '메타분석 오케스트레이션',
          '휴먼화 변환',
        ],
      },
      {
        level: 'MEDIUM',
        model: 'Sonnet',
        count: 18,
        color: '#45b7d1',
        cost: '보통',
        speed: '균형적',
        useFor: '표준 작업, 균형잡힌 품질',
        agents: ['A4', 'A6', 'B1', 'B2', 'C4', 'C6', 'C7', 'D1', 'D2', 'E5', 'F3', 'F4', 'G1', 'G2', 'G4', 'G5', 'I1', 'I2'],
        checkpoints: '일반적으로 권장',
        examples: [
          '문헌 검색 및 스크리닝',
          '데이터 무결성 검증',
          'AI 패턴 탐지',
          '윤리 검토',
        ],
      },
      {
        level: 'LOW',
        model: 'Haiku',
        count: 9,
        color: '#44ffaa',
        cost: '최저',
        speed: '가장 빠름',
        useFor: '빠른 조회, 간단한 변환',
        agents: ['B3', 'B4', 'D3', 'E4', 'F1', 'F2', 'F5', 'I3'],
        checkpoints: '일반적으로 선택적',
        examples: [
          '효과크기 추출',
          '코드 생성',
          '체크리스트 검증',
          '벡터 데이터베이스 구축',
        ],
      },
    ],

    matrixTitle: '티어 선택 매트릭스',
    matrixDescription: '작업 복잡도와 연구 단계에 따라 적절한 티어를 선택하세요:',
    matrix: [
      { complexity: '중요한 결정', stage: '초기 (설계)', tier: 'HIGH', reason: '기초 결정이 전체 프로젝트에 영향' },
      { complexity: '표준 분석', stage: '중기 (데이터)', tier: 'MEDIUM', reason: '균형잡힌 엄격성과 비용 효율성' },
      { complexity: '간단한 조회', stage: '모든 단계', tier: 'LOW', reason: '빠르고 신뢰할 수 있으며 비용 효율적' },
      { complexity: '복잡한 오케스트레이션', stage: '모든 단계', tier: 'HIGH', reason: '다중 에이전트 조정 필요' },
      { complexity: '배치 처리', stage: '데이터 수집', tier: 'MEDIUM/LOW', reason: '개별 품질보다 볼륨 중시' },
      { complexity: '검증 게이트', stage: '품질 확인', tier: 'HIGH', reason: '중요한 품질 보증' },
    ],

    costTitle: '비용 최적화 전략',
    costDescription: '전략적 티어 라우팅으로 가치 극대화:',
    costStrategies: [
      {
        title: '탐색 → 구현 → 검증',
        description: '탐색에는 LOW 티어 에이전트(B3, B4)로 시작, 구현에는 MEDIUM으로 상향(B1, B2), 검증에는 HIGH 예약(A1, A2)',
        savings: '전체 HIGH 대비 ~60-70% 비용 절감',
      },
      {
        title: '병렬 LOW-티어 처리',
        description: '체크포인트 없이 병렬로 실행 가능한 배치 작업에 LOW-티어 에이전트 사용(F1, F2, E4)',
        savings: '순차 HIGH-티어 대비 ~80% 비용 절감',
      },
      {
        title: '체크포인트 게이트 상향',
        description: '체크포인트에서 인간 결정이 필요한 경우(🔴 필수)에만 HIGH 티어로 상향',
        savings: '기본 HIGH 대비 ~50% 비용 절감',
      },
    ],

    agentMatrixTitle: '완전한 에이전트-티어 매트릭스',
    agentMatrixDescription: '티어와 카테고리별로 정리된 44개 에이전트:',

    temperatureTitle: '카테고리별 Temperature 설정',
    temperatureDescription: 'Temperature는 창의성과 일관성을 제어합니다:',
    temperatures: [
      { category: 'A (Foundation)', range: '0.3-0.5', rationale: '대안을 위한 창의성이 있는 전략적' },
      { category: 'B (Evidence)', range: '0.1-0.3', rationale: '증거 종합의 정밀성' },
      { category: 'C (Design)', range: '0.5-0.7', rationale: '엄격성과 설계 창의성의 균형' },
      { category: 'D (Collection)', range: '0.3-0.5', rationale: '구조화되었지만 적응적인 프로토콜' },
      { category: 'E (Analysis)', range: '0.1-0.3', rationale: '분석 정밀성 필요' },
      { category: 'F (Quality)', range: '0.1', rationale: '검증을 위한 최대 일관성' },
      { category: 'G (Communication)', range: '0.5-0.7', rationale: '창의적 커뮤니케이션' },
      { category: 'H (Specialized)', range: '0.7-0.9', rationale: '높은 맥락 민감성' },
      { category: 'I (Systematic Review)', range: '0.1-0.3', rationale: 'PRISMA 준수 정밀성' },
    ],

    overrideTitle: '수동 모델 오버라이드',
    overrideDescription: 'Task 도구에 model 매개변수를 명시적으로 전달하여 기본 티어를 오버라이드할 수 있습니다:',
    overrideExample: `// 기본: A4는 sonnet 사용 (MEDIUM 티어)
Task(subagent_type="diverga:a4", model="opus", prompt="...")

// 중요한 윤리 검토를 위해 HIGH 티어로 오버라이드`,

    nextStepsTitle: '관련 문서',
    nextSteps: [
      { title: '에이전트 개요', href: '/docs/agents', description: '44개 전문 에이전트 전체 목록' },
      { title: '체크포인트', href: '/docs/core-concepts/checkpoints', description: '인간 체크포인트 시스템' },
      { title: 'VS 방법론', href: '/docs/core-concepts/vs-methodology', description: '모달을 넘어선 추천' },
    ],
  },
};

// Agent data organized by tier
const agentsByTier = {
  HIGH: [
    { id: 'A1', name: 'ResearchQuestionRefiner', category: 'A', purpose: 'FINER/PICO/SPIDER formulation', checkpoint: '🔴 CP_RESEARCH_DIRECTION' },
    { id: 'A2', name: 'TheoreticalFrameworkArchitect', category: 'A', purpose: 'Theory selection with VS', checkpoint: '🔴 CP_THEORY_SELECTION' },
    { id: 'A3', name: 'DevilsAdvocate', category: 'A', purpose: 'Critical review, Reviewer 2', checkpoint: '-' },
    { id: 'A5', name: 'ParadigmWorldviewAdvisor', category: 'A', purpose: 'Paradigm guidance', checkpoint: '🔴 CP_PARADIGM_SELECTION' },
    { id: 'B5', name: 'ParallelDocumentProcessor', category: 'B', purpose: 'Batch PDF processing', checkpoint: '-' },
    { id: 'C1', name: 'QuantitativeDesignConsultant', category: 'C', purpose: 'RCTs, quasi-experimental', checkpoint: '🔴 CP_METHODOLOGY_APPROVAL' },
    { id: 'C2', name: 'QualitativeDesignConsultant', category: 'C', purpose: 'Phenomenology, GT', checkpoint: '🔴 CP_METHODOLOGY_APPROVAL' },
    { id: 'C3', name: 'MixedMethodsDesignConsultant', category: 'C', purpose: 'Sequential, convergent', checkpoint: '🔴 CP_METHODOLOGY_APPROVAL' },
    { id: 'C5', name: 'MetaAnalysisMaster', category: 'C', purpose: 'Multi-gate orchestration', checkpoint: '🔴 CP_META_GATE' },
    { id: 'D4', name: 'MeasurementInstrumentDeveloper', category: 'D', purpose: 'Scale construction', checkpoint: '🔴 CP_METHODOLOGY_APPROVAL' },
    { id: 'E1', name: 'QuantitativeAnalysisGuide', category: 'E', purpose: 'Statistical analysis', checkpoint: '🟠 CP_ANALYSIS_PLAN' },
    { id: 'E2', name: 'QualitativeCodingSpecialist', category: 'E', purpose: 'Thematic, GT coding', checkpoint: '-' },
    { id: 'E3', name: 'MixedMethodsIntegration', category: 'E', purpose: 'Joint displays', checkpoint: '🟠 CP_INTEGRATION_STRATEGY' },
    { id: 'G3', name: 'PeerReviewStrategist', category: 'G', purpose: 'Reviewer response', checkpoint: '🟠 CP_RESPONSE_APPROVAL' },
    { id: 'G6', name: 'AcademicStyleHumanizer', category: 'G', purpose: 'Transform AI patterns', checkpoint: '🟡 CP_HUMANIZATION_VERIFY' },
    { id: 'H1', name: 'EthnographicResearchAdvisor', category: 'H', purpose: 'Fieldwork, thick description', checkpoint: '🔴 CP_METHODOLOGY_APPROVAL' },
    { id: 'H2', name: 'ActionResearchFacilitator', category: 'H', purpose: 'PAR, CBPR', checkpoint: '🔴 CP_METHODOLOGY_APPROVAL' },
    { id: 'I0', name: 'ScholarAgentOrchestrator', category: 'I', purpose: 'PRISMA pipeline coordination', checkpoint: '🔴 SCH_* checkpoints' },
  ],
  MEDIUM: [
    { id: 'A4', name: 'ResearchEthicsAdvisor', category: 'A', purpose: 'IRB protocols', checkpoint: '🔴 CP_METHODOLOGY_APPROVAL' },
    { id: 'A6', name: 'ConceptualFrameworkVisualizer', category: 'A', purpose: 'Visual framework design', checkpoint: '🟡 CP_VISUALIZATION_PREFERENCE' },
    { id: 'B1', name: 'SystematicLiteratureScout', category: 'B', purpose: 'PRISMA workflows', checkpoint: '-' },
    { id: 'B2', name: 'EvidenceQualityAppraiser', category: 'B', purpose: 'RoB, GRADE', checkpoint: '-' },
    { id: 'C4', name: 'ExperimentalMaterialsDeveloper', category: 'C', purpose: 'Treatment protocols', checkpoint: '-' },
    { id: 'C6', name: 'DataIntegrityGuard', category: 'C', purpose: 'Hedges g calculation', checkpoint: '-' },
    { id: 'C7', name: 'ErrorPreventionEngine', category: 'C', purpose: 'Pattern detection', checkpoint: '-' },
    { id: 'D1', name: 'SamplingStrategyAdvisor', category: 'D', purpose: 'Probability sampling', checkpoint: '-' },
    { id: 'D2', name: 'InterviewFocusGroupSpecialist', category: 'D', purpose: 'Interview protocols', checkpoint: '-' },
    { id: 'E5', name: 'SensitivityAnalysisDesigner', category: 'E', purpose: 'Robustness checks', checkpoint: '-' },
    { id: 'F3', name: 'ReproducibilityAuditor', category: 'F', purpose: 'OSF integration', checkpoint: '-' },
    { id: 'F4', name: 'BiasTrustworthinessDetector', category: 'F', purpose: 'Bias detection', checkpoint: '-' },
    { id: 'G1', name: 'JournalMatcher', category: 'G', purpose: 'Target journal selection', checkpoint: '-' },
    { id: 'G2', name: 'AcademicCommunicator', category: 'G', purpose: 'Plain language', checkpoint: '-' },
    { id: 'G4', name: 'PreregistrationComposer', category: 'G', purpose: 'OSF registration', checkpoint: '🟠 CP_PREREGISTRATION_APPROVAL' },
    { id: 'G5', name: 'AcademicStyleAuditor', category: 'G', purpose: 'AI pattern detection', checkpoint: '🟠 CP_HUMANIZATION_REVIEW' },
    { id: 'I1', name: 'PaperRetrievalAgent', category: 'I', purpose: 'Multi-database fetching', checkpoint: '🔴 SCH_DATABASE_SELECTION' },
    { id: 'I2', name: 'ScreeningAssistant', category: 'I', purpose: 'AI-PRISMA screening', checkpoint: '🔴 SCH_SCREENING_CRITERIA' },
  ],
  LOW: [
    { id: 'B3', name: 'EffectSizeExtractor', category: 'B', purpose: 'Calculate effect sizes', checkpoint: '-' },
    { id: 'B4', name: 'ResearchRadar', category: 'B', purpose: 'Monitor publications', checkpoint: '-' },
    { id: 'D3', name: 'ObservationProtocolDesigner', category: 'D', purpose: 'Field notes', checkpoint: '-' },
    { id: 'E4', name: 'AnalysisCodeGenerator', category: 'E', purpose: 'R, Python scripts', checkpoint: '-' },
    { id: 'F1', name: 'InternalConsistencyChecker', category: 'F', purpose: 'Logic verification', checkpoint: '-' },
    { id: 'F2', name: 'ChecklistManager', category: 'F', purpose: 'PRISMA, CONSORT', checkpoint: '-' },
    { id: 'F5', name: 'HumanizationVerifier', category: 'F', purpose: 'Verify transformation', checkpoint: '-' },
    { id: 'I3', name: 'RAGBuilder', category: 'I', purpose: 'Vector database', checkpoint: '🟠 SCH_RAG_READINESS' },
  ],
};

const iconMap = {
  brain: Brain,
  zap: Zap,
  clock: Clock,
  dollarSign: DollarSign,
  sparkles: Sparkles,
  target: Target,
};

export default function ModelTiersPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-black">
      {/* Hero Section */}
      <section className="relative border-b border-white/5 bg-gradient-to-b from-void-black to-void-black/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Link
            href={`/${locale}/docs`}
            className="group mb-8 inline-flex items-center gap-2 text-sm text-void-white/60 transition-colors hover:text-accent-purple"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t.back}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-5xl font-bold tracking-tight text-void-white lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-4 text-xl text-void-white/80">{t.subtitle}</p>
            <p className="mt-4 font-mono text-sm italic text-accent-purple/80">
              {t.philosophy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="border-b border-white/5 bg-void-black/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-void-white">
            {t.overviewTitle}
          </h2>
          <p className="mt-4 text-lg text-void-white/70">
            {t.overviewDescription}
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="border-b border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {t.tiers.map((tier, idx) => (
              <motion.div
                key={tier.level}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-void-black to-void-black/50 p-8 transition-all hover:border-white/20 hover:shadow-xl"
                style={{
                  boxShadow: `0 0 40px ${tier.color}15`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10"
                  style={{
                    background: `radial-gradient(circle at top right, ${tier.color}, transparent)`,
                  }}
                />

                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <h3
                      className="font-display text-2xl font-bold"
                      style={{ color: tier.color }}
                    >
                      {tier.level}
                    </h3>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-mono text-void-white/60">
                      {tier.count} agents
                    </span>
                  </div>

                  <div className="mb-6 text-xl font-semibold text-void-white">
                    {tier.model}
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-void-white/40" />
                      <span className="text-void-white/60">
                        {locale === 'en' ? 'Cost:' : '비용:'} <span className="text-void-white">{tier.cost}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-void-white/40" />
                      <span className="text-void-white/60">
                        {locale === 'en' ? 'Speed:' : '속도:'} <span className="text-void-white">{tier.speed}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-void-white/40" />
                      <span className="text-void-white/60">
                        {locale === 'en' ? 'Use for:' : '사용:'} <span className="text-void-white">{tier.useFor}</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-void-white/40">
                      {locale === 'en' ? 'Checkpoints' : '체크포인트'}
                    </div>
                    <div className="text-sm text-void-white/80">{tier.checkpoints}</div>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-void-white/40">
                      {locale === 'en' ? 'Examples' : '예시'}
                    </div>
                    <ul className="space-y-2">
                      {tier.examples.map((example, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-void-white/70">
                          <span className="mt-1 text-xs" style={{ color: tier.color }}>▸</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-void-white/40">
                      {locale === 'en' ? 'Agents' : '에이전트'}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tier.agents.map((agent) => (
                        <span
                          key={agent}
                          className="rounded-lg bg-white/5 px-2 py-1 font-mono text-xs text-void-white/80"
                        >
                          {agent}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Matrix */}
      <section className="border-b border-white/5 bg-void-black/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-void-white">
            {t.matrixTitle}
          </h2>
          <p className="mt-4 text-lg text-void-white/70">
            {t.matrixDescription}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-void-white/80">
                    {locale === 'en' ? 'Task Complexity' : '작업 복잡도'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-void-white/80">
                    {locale === 'en' ? 'Research Stage' : '연구 단계'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-void-white/80">
                    {locale === 'en' ? 'Recommended Tier' : '권장 티어'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-void-white/80">
                    {locale === 'en' ? 'Reason' : '이유'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {t.matrix.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-white/5">
                    <td className="px-6 py-4 text-sm text-void-white">{row.complexity}</td>
                    <td className="px-6 py-4 text-sm text-void-white/70">{row.stage}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex rounded-lg bg-accent-purple/20 px-3 py-1 font-mono text-xs font-semibold text-accent-purple">
                        {row.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-void-white/60">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Optimization */}
      <section className="border-b border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-void-white">
            {t.costTitle}
          </h2>
          <p className="mt-4 text-lg text-void-white/70">
            {t.costDescription}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.costStrategies.map((strategy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-void-black to-void-black/50 p-6"
              >
                <h3 className="mb-3 font-display text-lg font-semibold text-void-white">
                  {strategy.title}
                </h3>
                <p className="mb-4 text-sm text-void-white/70">{strategy.description}</p>
                <div className="flex items-center gap-2 rounded-lg bg-accent-green/10 px-3 py-2">
                  <Sparkles className="h-4 w-4 text-accent-green" />
                  <span className="text-xs font-semibold text-accent-green">{strategy.savings}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Agent Matrix */}
      <section className="border-b border-white/5 bg-void-black/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-void-white">
            {t.agentMatrixTitle}
          </h2>
          <p className="mt-4 text-lg text-void-white/70">
            {t.agentMatrixDescription}
          </p>

          <div className="mt-8 space-y-8">
            {Object.entries(agentsByTier).map(([tier, agents]) => {
              const tierColor = tier === 'HIGH' ? '#9b59b6' : tier === 'MEDIUM' ? '#45b7d1' : '#44ffaa';
              return (
                <div key={tier} className="rounded-2xl border border-white/10 bg-void-black/50 p-6">
                  <h3 className="mb-6 font-display text-2xl font-bold" style={{ color: tierColor }}>
                    {tier} Tier ({agents.length} agents)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b border-white/10">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-void-white/60">
                            {locale === 'en' ? 'ID' : 'ID'}
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-void-white/60">
                            {locale === 'en' ? 'Agent' : '에이전트'}
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-void-white/60">
                            {locale === 'en' ? 'Category' : '카테고리'}
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-void-white/60">
                            {locale === 'en' ? 'Purpose' : '목적'}
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-void-white/60">
                            {locale === 'en' ? 'Checkpoint' : '체크포인트'}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {agents.map((agent) => (
                          <tr key={agent.id} className="transition-colors hover:bg-white/5">
                            <td className="px-4 py-3">
                              <span className="font-mono text-sm font-semibold" style={{ color: tierColor }}>
                                {agent.id}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-void-white">{agent.name}</td>
                            <td className="px-4 py-3">
                              <span className="rounded-lg bg-white/5 px-2 py-1 font-mono text-xs text-void-white/60">
                                {agent.category}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-void-white/70">{agent.purpose}</td>
                            <td className="px-4 py-3 text-xs text-void-white/60">{agent.checkpoint}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Temperature Settings */}
      <section className="border-b border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-void-white">
            {t.temperatureTitle}
          </h2>
          <p className="mt-4 text-lg text-void-white/70">
            {t.temperatureDescription}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.temperatures.map((temp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-xl border border-white/10 bg-void-black/50 p-5"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-void-white">
                    {temp.category}
                  </span>
                  <span className="rounded-full bg-accent-purple/20 px-3 py-1 font-mono text-xs text-accent-purple">
                    {temp.range}
                  </span>
                </div>
                <p className="text-sm text-void-white/60">{temp.rationale}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manual Override */}
      <section className="border-b border-white/5 bg-void-black/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-void-white">
            {t.overrideTitle}
          </h2>
          <p className="mt-4 text-lg text-void-white/70">
            {t.overrideDescription}
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-void-black p-6">
            <pre className="overflow-x-auto text-sm text-void-white/80">
              <code>{t.overrideExample}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-void-white">
            {t.nextStepsTitle}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.nextSteps.map((step, idx) => (
              <Link
                key={idx}
                href={`/${locale}${step.href}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-void-black to-void-black/50 p-6 transition-all hover:border-white/20 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="mb-2 font-display text-xl font-semibold text-void-white">
                    {step.title}
                  </h3>
                  <p className="mb-4 text-sm text-void-white/70">{step.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-accent-purple">
                    {locale === 'en' ? 'Learn more' : '더 알아보기'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
