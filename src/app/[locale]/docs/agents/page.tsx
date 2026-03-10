'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Brain,
  BookOpen,
  Beaker,
  Users,
  BarChart3,
  Shield,
  FileText,
  Sparkles,
  ArrowRight,
  Zap,
  Target,
  Database,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: '24 Specialized Research Agents',
    subtitle: 'AI Research Assistant for the Complete Research Lifecycle',
    philosophy: '"Beyond Modal: Creative alternatives, not obvious choices"',

    // Section 2: How Agents Work
    howTitle: 'How Agents Work',
    howDescription: 'Agents are automatically triggered by keywords and context, dispatched via the Task tool for specialized research tasks.',
    howPoints: [
      { icon: 'brain', text: 'Auto-detect research context from your conversation' },
      { icon: 'zap', text: 'Parallel execution when tasks are independent' },
      { icon: 'target', text: 'Checkpoint integration ensures human decisions' },
    ],

    // Section 3: Agent Categories
    categoriesTitle: '9 Agent Categories',
    categoriesDescription: 'Organized by research lifecycle stage and function',
    categories: [
      {
        id: 'A',
        name: 'Foundation',
        count: 3,
        color: '#ff6b6b',
        description: 'Research questions, theory, paradigm foundations',
        icon: 'brain',
        agents: ['A1-ResearchQuestionRefiner', 'A2-TheoryCritiqueArchitect', 'A5-ParadigmWorldviewAdvisor'],
      },
      {
        id: 'B',
        name: 'Literature & Evidence',
        count: 2,
        color: '#4ecdc4',
        description: 'Literature search, quality appraisal',
        icon: 'bookOpen',
        agents: ['B1-LiteratureScout', 'B2-EvidenceQualityAppraiser'],
      },
      {
        id: 'C',
        name: 'Study Design',
        count: 4,
        color: '#45b7d1',
        description: 'Research design, meta-analysis orchestration',
        icon: 'beaker',
        agents: ['C1-QuantitativeDesignSampling', 'C2-QualitativeDesign', 'C3-MixedMethodsDesign', 'C5-MetaAnalysisMaster'],
      },
      {
        id: 'D',
        name: 'Data Collection',
        count: 2,
        color: '#96ceb4',
        description: 'Instruments, interview protocols',
        icon: 'database',
        agents: ['D2-DataCollectionSpecialist', 'D4-MeasurementInstrumentDeveloper'],
      },
      {
        id: 'E',
        name: 'Analysis',
        count: 3,
        color: '#dda0dd',
        description: 'Statistical, qualitative, mixed methods analysis',
        icon: 'barChart',
        agents: ['E1-QuantitativeAnalysisCodeGen', 'E2-QualitativeCodingSpecialist', 'E3-MixedMethodsIntegration'],
      },
      {
        id: 'F',
        name: 'Quality & Validation',
        count: 1,
        color: '#f0e68c',
        description: 'Humanization verification',
        icon: 'shield',
        agents: ['F5-HumanizationVerifier'],
      },
      {
        id: 'G',
        name: 'Publication & Communication',
        count: 4,
        color: '#87ceeb',
        description: 'Publication, humanization, journal matching',
        icon: 'fileText',
        agents: ['G1-JournalMatcher', 'G2-PublicationSpecialist', 'G5-AcademicStyleAuditor', 'G6-AcademicStyleHumanizer'],
      },
      {
        id: 'I',
        name: 'Systematic Review',
        count: 4,
        color: '#9b59b6',
        description: 'PRISMA automation, RAG pipelines',
        icon: 'sparkles',
        agents: ['I0-SRPipelineOrchestrator', 'I1-PaperRetrievalAgent', 'I2-ScreeningAssistant', 'I3-RAGBuilder'],
      },
      {
        id: 'X',
        name: 'Cross-Cutting',
        count: 1,
        color: '#ffa07a',
        description: 'Research integrity, ethics oversight',
        icon: 'users',
        agents: ['X1-ResearchGuardian'],
      },
    ],

    // Section 4: Model Routing
    routingTitle: 'Model Routing by Complexity',
    routingDescription: 'Agents use appropriate models based on task complexity:',
    tiers: [
      { level: 'HIGH', model: 'Opus', count: 13, color: '#9b59b6', description: 'Complex decisions, theory, orchestration' },
      { level: 'MEDIUM', model: 'Sonnet', count: 9, color: '#45b7d1', description: 'Standard research tasks, screening' },
      { level: 'LOW', model: 'Haiku', count: 2, color: '#44ffaa', description: 'Quick validation, RAG building' },
    ],

    // Section 5: Invocation Pattern
    invocationTitle: 'Agent Invocation',
    invocationDescription: 'Agents are triggered automatically by keywords or manually via Task tool:',
    invocationExample: `Task(
  subagent_type="diverga:a1",
  model="opus",
  prompt="Refine research question using FINER criteria"
)`,

    // Section 6: Parallel Execution
    parallelTitle: 'Parallel Execution Groups',
    parallelDescription: 'Multiple agents can run simultaneously when tasks are independent:',
    parallelGroups: [
      { name: 'Research Design', agents: 'A1 + A2 + A5', description: 'Question, theory, paradigm' },
      { name: 'Literature & Evidence', agents: 'B1 + B2', description: 'Search, appraisal' },
      { name: 'Publication Prep', agents: 'G1 + G2 + G5', description: 'Journal match, writing, AI audit' },
      { name: 'SR Pipeline', agents: 'I0 + I1 + I2 + I3', description: 'Orchestration, retrieval, screening, RAG' },
    ],

    // Section 7: Quick Links
    quickTitle: 'Explore Agent Categories',
    quickDescription: 'Browse detailed documentation for each category:',

    // Section 8: CTA
    ctaTitle: 'Ready to Use Specialized Agents?',
    ctaDescription: 'Start your research with 24 agents covering the complete research lifecycle.',
    ctaButtons: {
      checkpoints: 'View Checkpoints',
      vs: 'Learn VS Methodology',
      start: 'Get Started',
    },
  },
  ko: {
    back: '문서로 돌아가기',
    title: '24개 전문 연구 에이전트',
    subtitle: '전체 연구 생애주기를 위한 AI 연구 어시스턴트',
    philosophy: '"모달을 넘어서: 창의적 대안, 명백한 선택이 아닌"',

    // Section 2: How Agents Work
    howTitle: '에이전트 작동 방식',
    howDescription: '에이전트는 키워드와 맥락에 의해 자동으로 트리거되고, Task 도구를 통해 전문 연구 작업에 배치됩니다.',
    howPoints: [
      { icon: 'brain', text: '대화에서 연구 맥락 자동 감지' },
      { icon: 'zap', text: '독립적인 작업은 병렬 실행' },
      { icon: 'target', text: '체크포인트 통합으로 인간 결정 보장' },
    ],

    // Section 3: Agent Categories
    categoriesTitle: '9개 에이전트 카테고리',
    categoriesDescription: '연구 생애주기 단계와 기능별로 구성',
    categories: [
      {
        id: 'A',
        name: '기초',
        count: 3,
        color: '#ff6b6b',
        description: '연구 질문, 이론, 패러다임 기초',
        icon: 'brain',
        agents: ['A1-연구질문정제사', 'A2-이론비판설계자', 'A5-패러다임세계관조언자'],
      },
      {
        id: 'B',
        name: '문헌 및 증거',
        count: 2,
        color: '#4ecdc4',
        description: '문헌 검색, 품질 평가',
        icon: 'bookOpen',
        agents: ['B1-문헌탐색자', 'B2-증거품질평가자'],
      },
      {
        id: 'C',
        name: '연구 설계',
        count: 4,
        color: '#45b7d1',
        description: '연구 설계, 메타분석 오케스트레이션',
        icon: 'beaker',
        agents: ['C1-양적설계표집', 'C2-질적설계', 'C3-혼합방법설계', 'C5-메타분석마스터'],
      },
      {
        id: 'D',
        name: '데이터 수집',
        count: 2,
        color: '#96ceb4',
        description: '도구, 인터뷰 프로토콜',
        icon: 'database',
        agents: ['D2-데이터수집전문가', 'D4-측정도구개발자'],
      },
      {
        id: 'E',
        name: '분석',
        count: 3,
        color: '#dda0dd',
        description: '통계, 질적, 혼합방법 분석',
        icon: 'barChart',
        agents: ['E1-양적분석코드생성', 'E2-질적코딩전문가', 'E3-혼합방법통합자'],
      },
      {
        id: 'F',
        name: '품질 및 검증',
        count: 1,
        color: '#f0e68c',
        description: '휴먼화 검증',
        icon: 'shield',
        agents: ['F5-휴먼화검증자'],
      },
      {
        id: 'G',
        name: '출판 및 커뮤니케이션',
        count: 4,
        color: '#87ceeb',
        description: '출판, 휴먼화, 저널 매칭',
        icon: 'fileText',
        agents: ['G1-저널매처', 'G2-출판전문가', 'G5-학술스타일감사자', 'G6-학술스타일휴먼화자'],
      },
      {
        id: 'I',
        name: '체계적 문헌고찰',
        count: 4,
        color: '#9b59b6',
        description: 'PRISMA 자동화, RAG 파이프라인',
        icon: 'sparkles',
        agents: ['I0-SR파이프라인오케스트레이터', 'I1-논문수집에이전트', 'I2-스크리닝어시스턴트', 'I3-RAG빌더'],
      },
      {
        id: 'X',
        name: '범분야',
        count: 1,
        color: '#ffa07a',
        description: '연구 무결성, 윤리 감독',
        icon: 'users',
        agents: ['X1-연구수호자'],
      },
    ],

    // Section 4: Model Routing
    routingTitle: '복잡도별 모델 라우팅',
    routingDescription: '에이전트는 작업 복잡도에 따라 적절한 모델을 사용합니다:',
    tiers: [
      { level: 'HIGH', model: 'Opus', count: 13, color: '#9b59b6', description: '복잡한 결정, 이론, 오케스트레이션' },
      { level: 'MEDIUM', model: 'Sonnet', count: 9, color: '#45b7d1', description: '표준 연구 작업, 스크리닝' },
      { level: 'LOW', model: 'Haiku', count: 2, color: '#44ffaa', description: '빠른 검증, RAG 빌딩' },
    ],

    // Section 5: Invocation Pattern
    invocationTitle: '에이전트 호출',
    invocationDescription: '에이전트는 키워드에 의해 자동 트리거되거나 Task 도구를 통해 수동으로 호출됩니다:',
    invocationExample: `Task(
  subagent_type="diverga:a1",
  model="opus",
  prompt="FINER 기준을 사용하여 연구 질문 정제"
)`,

    // Section 6: Parallel Execution
    parallelTitle: '병렬 실행 그룹',
    parallelDescription: '작업이 독립적일 때 여러 에이전트가 동시에 실행될 수 있습니다:',
    parallelGroups: [
      { name: '연구 설계', agents: 'A1 + A2 + A5', description: '질문, 이론, 패러다임' },
      { name: '문헌 및 증거', agents: 'B1 + B2', description: '검색, 평가' },
      { name: '출판 준비', agents: 'G1 + G2 + G5', description: '저널 매칭, 글쓰기, AI 감사' },
      { name: 'SR 파이프라인', agents: 'I0 + I1 + I2 + I3', description: '조율, 검색, 스크리닝, RAG' },
    ],

    // Section 7: Quick Links
    quickTitle: '에이전트 카테고리 탐색',
    quickDescription: '각 카테고리에 대한 자세한 문서를 확인하세요:',

    // Section 8: CTA
    ctaTitle: '전문 에이전트를 사용할 준비가 되셨나요?',
    ctaDescription: '전체 연구 생애주기를 다루는 24개 에이전트로 연구를 시작하세요.',
    ctaButtons: {
      checkpoints: '체크포인트 보기',
      vs: 'VS 방법론 알아보기',
      start: '시작하기',
    },
  },
};

// Icon mapping
const categoryIcons: Record<string, React.ReactNode> = {
  brain: <Brain className="h-6 w-6" />,
  bookOpen: <BookOpen className="h-6 w-6" />,
  beaker: <Beaker className="h-6 w-6" />,
  database: <Database className="h-6 w-6" />,
  barChart: <BarChart3 className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
  fileText: <FileText className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  sparkles: <Sparkles className="h-6 w-6" />,
};

const howIcons: Record<string, React.ReactNode> = {
  brain: <Brain className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
  target: <Target className="h-5 w-5" />,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as any },
};

export default function AgentsOverviewPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Section 1: Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
        >
          {/* Subtle glow background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(68, 255, 170, 0.1) 0%, transparent 50%)',
            }}
          />

          {/* Category icons grid */}
          <div className="flex justify-center mb-8 gap-4 flex-wrap relative z-10">
            {['brain', 'bookOpen', 'beaker', 'database', 'barChart', 'shield', 'fileText', 'users', 'sparkles'].map((icon, i) => (
              <motion.div
                key={icon}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="flex h-12 w-12 items-center justify-center border border-stellar-faint/20"
                style={{ backgroundColor: 'rgba(68, 255, 170, 0.1)', color: '#44ffaa' }}
              >
                {categoryIcons[icon]}
              </motion.div>
            ))}
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#44ffaa' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim italic max-w-2xl mx-auto">{t.philosophy}</p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 2: How Agents Work */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(34, 204, 255, 0.15)' }}
            >
              <Zap className="h-5 w-5" style={{ color: '#22ccff' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.howTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.howDescription}</p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {t.howPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-stellar-faint/20"
                  style={{ backgroundColor: 'rgba(34, 204, 255, 0.15)', color: '#22ccff' }}
                >
                  {howIcons[point.icon]}
                </div>
                <p className="text-stellar-bright pt-2">{point.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 3: Agent Categories Grid */}
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
              <Brain className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.categoriesTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.categoriesDescription}</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative p-6 bg-void-elevated border border-stellar-faint/10 transition-all duration-300 cursor-pointer group"
                style={{
                  boxShadow: `inset 0 1px 0 0 rgba(240, 240, 245, 0.05)`,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at center, ${category.color}20 0%, transparent 70%)`,
                  }}
                />

                {/* Category header */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div
                    className="flex h-12 w-12 items-center justify-center border"
                    style={{
                      backgroundColor: `${category.color}15`,
                      borderColor: `${category.color}30`,
                      color: category.color,
                    }}
                  >
                    {categoryIcons[category.icon]}
                  </div>
                  <div
                    className="flex h-8 w-8 items-center justify-center font-mono font-bold text-lg"
                    style={{ color: category.color }}
                  >
                    {category.id}
                  </div>
                </div>

                {/* Category info */}
                <h3 className="void-heading-3 text-stellar-core mb-2">{category.name}</h3>
                <p className="text-sm text-stellar-dim mb-3">{category.description}</p>

                {/* Agent count badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 font-mono text-xs border"
                  style={{
                    color: category.color,
                    borderColor: `${category.color}30`,
                    backgroundColor: `${category.color}10`,
                  }}
                >
                  <span>{category.count}</span>
                  <span className="text-stellar-faint">{locale === 'ko' ? '에이전트' : 'agents'}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 4: Model Routing */}
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
              <Target className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.routingTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.routingDescription}</p>

          <div className="grid gap-6 sm:grid-cols-3">
            {t.tiers.map((tier, index) => (
              <motion.div
                key={tier.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="inline-flex px-4 py-1.5 font-mono text-xs uppercase tracking-wider mb-4 border"
                  style={{
                    color: tier.color,
                    borderColor: `${tier.color}30`,
                    backgroundColor: `${tier.color}10`,
                  }}
                >
                  {tier.level}
                </div>
                <h3 className="void-heading-3 mb-2" style={{ color: tier.color }}>{tier.model}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-stellar-core">{tier.count}</span>
                  <span className="text-sm text-stellar-faint">{locale === 'ko' ? '에이전트' : 'agents'}</span>
                </div>
                <p className="text-sm text-stellar-dim">{tier.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 5: Invocation Pattern */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.invocationTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.invocationDescription}</p>

          <div className="void-terminal overflow-hidden">
            <div className="void-terminal-header">
              <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
              <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
              <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
              <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                Task Tool Pattern
              </span>
            </div>
            <pre className="p-6 text-sm text-stellar-bright font-mono overflow-x-auto">
              {t.invocationExample}
            </pre>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 6: Parallel Execution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.parallelTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.parallelDescription}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.parallelGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-void-elevated border border-stellar-faint/10"
              >
                <h3 className="font-mono font-bold mb-2" style={{ color: '#44ffaa' }}>{group.name}</h3>
                <p className="font-mono text-sm text-stellar-dim mb-2">{group.agents}</p>
                <p className="text-sm text-stellar-faint">{group.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 7: Quick Links to Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.quickTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.quickDescription}</p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/${locale}/docs/agents/${category.id.toLowerCase() === 'a' ? 'foundation' :
                    category.id.toLowerCase() === 'b' ? 'evidence' :
                    category.id.toLowerCase() === 'c' ? 'design' :
                    category.id.toLowerCase() === 'd' ? 'collection' :
                    category.id.toLowerCase() === 'e' ? 'analysis' :
                    category.id.toLowerCase() === 'f' ? 'quality' :
                    category.id.toLowerCase() === 'g' ? 'communication' :
                    category.id.toLowerCase() === 'x' ? 'cross-cutting' :
                    'systematic-review'}`}
                  className="block p-4 bg-void-elevated border border-stellar-faint/10 hover:border-stellar-faint/30 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center border"
                        style={{
                          backgroundColor: `${category.color}15`,
                          borderColor: `${category.color}30`,
                          color: category.color,
                        }}
                      >
                        {categoryIcons[category.icon]}
                      </div>
                      <div>
                        <h3 className="font-semibold text-stellar-core group-hover:text-stellar-bright transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-xs text-stellar-faint">{category.count} {locale === 'ko' ? '에이전트' : 'agents'}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-stellar-faint group-hover:text-stellar-bright transition-colors" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 8: CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(68, 255, 170, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)',
              borderColor: 'rgba(68, 255, 170, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/checkpoints`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                {t.ctaButtons.checkpoints}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={`/${locale}/docs/vs-methodology`}
                className="void-btn void-btn-primary inline-flex items-center gap-2"
              >
                {t.ctaButtons.vs}
              </Link>
              <Link
                href={`/${locale}/getting-started`}
                className="void-btn void-btn-ghost inline-flex items-center gap-2"
              >
                {t.ctaButtons.start}
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
