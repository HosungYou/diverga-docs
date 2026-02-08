'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  Database,
  Search,
  Filter,
  FileText,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  DollarSign,
  Clock,
  Workflow,
  FolderTree,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'Systematic Review Automation',
    subtitle: 'PRISMA 2020 Pipeline with I-Category Agents',
    description: 'Conversation-driven systematic literature review automation with AI-assisted screening, automated PDF retrieval, and RAG-powered analysis.',

    // Overview Section
    overviewTitle: 'What is Systematic Review Automation?',
    overviewDescription: 'Diverga\'s I-category agents provide a 7-stage automated systematic literature review pipeline following PRISMA 2020 guidelines. They combine conversation-driven workflow with AI-assisted screening and RAG technology.',
    overviewFeatures: [
      { icon: 'workflow', text: 'PRISMA 2020 compliant workflow' },
      { icon: 'sparkles', text: 'AI-assisted screening with Groq LLM' },
      { icon: 'database', text: 'Automated PDF retrieval (5 databases)' },
      { icon: 'zap', text: 'RAG-powered literature analysis' },
    ],

    // Pipeline Stages
    pipelineTitle: '7-Stage Pipeline',
    pipelineDescription: 'Each stage builds on the previous, ensuring systematic and reproducible research.',
    stages: [
      {
        number: 1,
        name: 'Research Domain Setup',
        description: 'Define research question, scope, and constraints',
        color: '#ff6b6b',
        duration: '15-20 min',
      },
      {
        number: 2,
        name: 'Query Strategy Design',
        description: 'Design search queries with keywords and operators',
        color: '#4ecdc4',
        duration: '20-30 min',
      },
      {
        number: 3,
        name: 'PRISMA Configuration',
        description: 'Set inclusion/exclusion criteria and thresholds',
        color: '#45b7d1',
        duration: '15-25 min',
      },
      {
        number: 4,
        name: 'Database Search',
        description: 'Fetch papers from Semantic Scholar, OpenAlex, arXiv',
        color: '#96ceb4',
        duration: '10-20 min',
      },
      {
        number: 5,
        name: 'Screening & Selection',
        description: 'AI-assisted relevance screening with configurable LLM',
        color: '#dda0dd',
        duration: '30-60 min',
      },
      {
        number: 6,
        name: 'RAG System Building',
        description: 'Create vector database for semantic search',
        color: '#f0e68c',
        duration: '20-40 min',
      },
      {
        number: 7,
        name: 'Analysis & Synthesis',
        description: 'Query literature and generate PRISMA diagram',
        color: '#87ceeb',
        duration: 'Ongoing',
      },
    ],

    // Project Types
    projectTypesTitle: 'Two Project Types',
    projectTypesDescription: 'Choose the workflow that matches your research scope:',
    projectTypes: [
      {
        name: 'Knowledge Repository',
        papers: '15,000-20,000 papers',
        threshold: '50% relevance threshold',
        color: '#00bcd4',
        description: 'Broad exploration, topic discovery, RAG-first workflow',
        useCases: ['Emerging research fields', 'Interdisciplinary topics', 'Exploratory reviews'],
      },
      {
        name: 'Systematic Review',
        papers: '50-300 papers',
        threshold: '90% relevance threshold',
        color: '#9b59b6',
        description: 'Rigorous PRISMA 2020 compliance, publication-ready',
        useCases: ['Meta-analysis', 'Clinical guidelines', 'Evidence synthesis'],
      },
    ],

    // Project Structure
    structureTitle: 'Project Structure',
    structureDescription: 'Diverga creates a dual-directory structure separating system files from researcher-facing documentation:',
    structures: [
      {
        name: 'General Research Project',
        description: 'Created by natural language project init or /diverga:setup',
        color: '#9b59b6',
        tree: `.research/                    # System files (hidden)
├── baselines/
│   ├── literature/
│   ├── methodology/
│   └── framework/
├── changes/
│   ├── current/
│   └── archive/
├── sessions/
├── project-state.yaml        # Research configuration
├── decision-log.yaml         # Checkpoint decisions
├── checkpoints.yaml          # Checkpoint states
└── hud-state.json            # HUD display state

docs/                          # Researcher-facing (auto-generated)
├── PROJECT_STATUS.md          # Progress tracking
├── DECISION_LOG.md            # Decision audit trail
├── RESEARCH_AUDIT.md          # IRB/reproducibility audit
├── METHODOLOGY.md             # Research design summary
├── TIMELINE.md                # Milestones and deadlines
├── REFERENCES.md              # Bibliography tracking
└── README.md                  # Project overview (editable)`,
      },
      {
        name: 'PRISMA Pipeline Project',
        description: 'Additional structure created when running systematic review pipeline',
        color: '#00bcd4',
        tree: `data/
├── raw/                       # Downloaded PDFs
│   ├── semantic_scholar/
│   ├── openalex/
│   └── arxiv/
├── processed/
│   ├── deduplicated.json      # After deduplication
│   ├── screened.json           # After AI screening
│   └── included.json           # Final included papers
├── vectordb/                   # ChromaDB vector database
│   └── chroma/
├── reports/
│   ├── prisma_flow.png         # PRISMA 2020 diagram
│   └── screening_report.md     # Screening statistics
└── config.yaml                 # Pipeline configuration`,
      },
    ],

    // Databases
    databasesTitle: 'Supported Databases',
    databasesDescription: 'Three databases chosen for API access and PDF availability:',
    databases: [
      {
        name: 'Semantic Scholar',
        coverage: '~40% open access',
        icon: 'bookOpen',
        color: '#4ecdc4',
        features: ['Free API access', 'Citation network', 'Influential papers'],
      },
      {
        name: 'OpenAlex',
        coverage: '~50% open access',
        icon: 'database',
        color: '#45b7d1',
        features: ['Polite pool (faster)', 'Rich metadata', 'Institution tracking'],
      },
      {
        name: 'arXiv',
        coverage: '100% PDF access',
        icon: 'fileText',
        color: '#96ceb4',
        features: ['Preprint server', 'Full-text access', 'No rate limits'],
      },
    ],

    // Cost & Efficiency
    costTitle: 'Cost Efficiency',
    costDescription: 'Minimize API costs while maintaining quality:',
    costMetrics: [
      { label: '500-paper review', value: '~$0.07', icon: 'dollarSign', color: '#44ffaa' },
      { label: 'Screening time', value: '30-60 min', icon: 'clock', color: '#22ccff' },
      { label: 'PDF retrieval', value: '50-60%', icon: 'checkCircle', color: '#ffcc22' },
    ],
    costDetails: [
      'Groq LLM (default): $0.01 per 100 papers',
      'Local embeddings: Zero cost (sentence-transformers)',
      'No institutional subscriptions required',
    ],

    // Key Features
    featuresTitle: 'Key Features',
    features: [
      {
        icon: 'sparkles',
        title: 'AI-Assisted Screening',
        description: 'Groq LLM (llama-3.3-70b) for relevance scoring with configurable thresholds',
        color: '#9b59b6',
      },
      {
        icon: 'workflow',
        title: 'Conversation-Driven',
        description: 'Stage-by-stage prompts guide researchers through PRISMA workflow',
        color: '#00bcd4',
      },
      {
        icon: 'database',
        title: 'Automated PDF Retrieval',
        description: 'Retry logic, fallback chains, and progress tracking for 50-60% success rate',
        color: '#4ecdc4',
      },
      {
        icon: 'zap',
        title: 'RAG-Powered Analysis',
        description: 'ChromaDB vector database for semantic search and synthesis',
        color: '#45b7d1',
      },
      {
        icon: 'barChart',
        title: 'PRISMA Diagram',
        description: 'Auto-generate PRISMA 2020 flow diagram with exclusion tracking',
        color: '#dda0dd',
      },
      {
        icon: 'checkCircle',
        title: 'Quality Validation',
        description: 'Checkpoint integration ensures reproducibility and transparency',
        color: '#44ffaa',
      },
    ],

    // Quick Links
    quickTitle: 'Learn More',
    quickDescription: 'Explore detailed documentation for each component:',
    quickLinks: [
      {
        title: 'PRISMA Guidelines',
        description: 'PRISMA 2020 compliance and flow diagram',
        href: '/docs/systematic-review/prisma',
        icon: 'checkCircle',
        color: '#9b59b6',
      },
      {
        title: 'Supported Databases',
        description: 'Database API integration and PDF retrieval strategy',
        href: '/docs/systematic-review/databases',
        icon: 'database',
        color: '#45b7d1',
      },
      {
        title: 'Project Structure',
        description: 'Auto-generated documentation and folder layout',
        href: '/docs/project-init',
        icon: 'sparkles',
        color: '#9b59b6',
      },
    ],

    // CTA
    ctaTitle: 'Ready to Automate Your Systematic Review?',
    ctaDescription: 'Start with Diverga\'s I-category agents to conduct PRISMA 2020 compliant systematic reviews in hours, not weeks.',
    ctaButtons: {
      agents: 'View I-Category Agents',
      quickStart: 'Quick Start Guide',
      github: 'GitHub Repository',
    },
  },
  ko: {
    back: '문서로 돌아가기',
    title: '체계적 문헌고찰 자동화',
    subtitle: 'I-카테고리 에이전트를 통한 PRISMA 2020 파이프라인',
    description: 'AI 지원 스크리닝, 자동 PDF 검색, RAG 기반 분석을 갖춘 대화형 체계적 문헌고찰 자동화.',

    // Overview Section
    overviewTitle: '체계적 문헌고찰 자동화란?',
    overviewDescription: 'Diverga의 I-카테고리 에이전트는 PRISMA 2020 지침을 따르는 7단계 자동 체계적 문헌고찰 파이프라인을 제공합니다. 대화형 워크플로우와 AI 지원 스크리닝, RAG 기술을 결합합니다.',
    overviewFeatures: [
      { icon: 'workflow', text: 'PRISMA 2020 준수 워크플로우' },
      { icon: 'sparkles', text: 'Groq LLM을 사용한 AI 지원 스크리닝' },
      { icon: 'database', text: '자동 PDF 검색 (5개 데이터베이스)' },
      { icon: 'zap', text: 'RAG 기반 문헌 분석' },
    ],

    // Pipeline Stages
    pipelineTitle: '7단계 파이프라인',
    pipelineDescription: '각 단계는 이전 단계를 기반으로 구축되어 체계적이고 재현 가능한 연구를 보장합니다.',
    stages: [
      {
        number: 1,
        name: '연구 영역 설정',
        description: '연구 질문, 범위, 제약 조건 정의',
        color: '#ff6b6b',
        duration: '15-20분',
      },
      {
        number: 2,
        name: '쿼리 전략 설계',
        description: '키워드와 연산자를 사용한 검색 쿼리 설계',
        color: '#4ecdc4',
        duration: '20-30분',
      },
      {
        number: 3,
        name: 'PRISMA 구성',
        description: '포함/제외 기준 및 임계값 설정',
        color: '#45b7d1',
        duration: '15-25분',
      },
      {
        number: 4,
        name: '데이터베이스 검색',
        description: 'Semantic Scholar, OpenAlex, arXiv에서 논문 검색',
        color: '#96ceb4',
        duration: '10-20분',
      },
      {
        number: 5,
        name: '스크리닝 및 선택',
        description: '구성 가능한 LLM을 사용한 AI 지원 관련성 스크리닝',
        color: '#dda0dd',
        duration: '30-60분',
      },
      {
        number: 6,
        name: 'RAG 시스템 구축',
        description: '의미론적 검색을 위한 벡터 데이터베이스 생성',
        color: '#f0e68c',
        duration: '20-40분',
      },
      {
        number: 7,
        name: '분석 및 종합',
        description: '문헌 쿼리 및 PRISMA 다이어그램 생성',
        color: '#87ceeb',
        duration: '지속적',
      },
    ],

    // Project Types
    projectTypesTitle: '두 가지 프로젝트 유형',
    projectTypesDescription: '연구 범위에 맞는 워크플로우를 선택하세요:',
    projectTypes: [
      {
        name: '지식 저장소',
        papers: '15,000-20,000편의 논문',
        threshold: '50% 관련성 임계값',
        color: '#00bcd4',
        description: '광범위한 탐색, 주제 발견, RAG 우선 워크플로우',
        useCases: ['신흥 연구 분야', '학제간 주제', '탐색적 리뷰'],
      },
      {
        name: '체계적 문헌고찰',
        papers: '50-300편의 논문',
        threshold: '90% 관련성 임계값',
        color: '#9b59b6',
        description: '엄격한 PRISMA 2020 준수, 출판 준비 완료',
        useCases: ['메타분석', '임상 지침', '증거 종합'],
      },
    ],

    // Project Structure
    structureTitle: '프로젝트 구조',
    structureDescription: 'Diverga는 시스템 파일과 연구자용 문서를 분리하는 이중 디렉토리 구조를 생성합니다:',
    structures: [
      {
        name: '일반 연구 프로젝트',
        description: '자연어 프로젝트 초기화 또는 /diverga:setup으로 생성',
        color: '#9b59b6',
        tree: `.research/                    # 시스템 파일 (숨김)
├── baselines/
│   ├── literature/
│   ├── methodology/
│   └── framework/
├── changes/
│   ├── current/
│   └── archive/
├── sessions/
├── project-state.yaml        # 연구 설정
├── decision-log.yaml         # 체크포인트 결정
├── checkpoints.yaml          # 체크포인트 상태
└── hud-state.json            # HUD 표시 상태

docs/                          # 연구자 문서 (자동 생성)
├── PROJECT_STATUS.md          # 진행 상황 추적
├── DECISION_LOG.md            # 결정 감사 추적
├── RESEARCH_AUDIT.md          # IRB/재현성 감사
├── METHODOLOGY.md             # 연구 설계 요약
├── TIMELINE.md                # 마일스톤 및 기한
├── REFERENCES.md              # 참고문헌 추적
└── README.md                  # 프로젝트 개요 (편집 가능)`,
      },
      {
        name: 'PRISMA 파이프라인 프로젝트',
        description: '체계적 문헌고찰 파이프라인 실행 시 추가 생성되는 구조',
        color: '#00bcd4',
        tree: `data/
├── raw/                       # 다운로드된 PDF
│   ├── semantic_scholar/
│   ├── openalex/
│   └── arxiv/
├── processed/
│   ├── deduplicated.json      # 중복 제거 후
│   ├── screened.json           # AI 스크리닝 후
│   └── included.json           # 최종 포함 논문
├── vectordb/                   # ChromaDB 벡터 데이터베이스
│   └── chroma/
├── reports/
│   ├── prisma_flow.png         # PRISMA 2020 다이어그램
│   └── screening_report.md     # 스크리닝 통계
└── config.yaml                 # 파이프라인 설정`,
      },
    ],

    // Databases
    databasesTitle: '지원 데이터베이스',
    databasesDescription: 'API 접근과 PDF 가용성을 위해 선택된 세 가지 데이터베이스:',
    databases: [
      {
        name: 'Semantic Scholar',
        coverage: '~40% 오픈 액세스',
        icon: 'bookOpen',
        color: '#4ecdc4',
        features: ['무료 API 접근', '인용 네트워크', '영향력 있는 논문'],
      },
      {
        name: 'OpenAlex',
        coverage: '~50% 오픈 액세스',
        icon: 'database',
        color: '#45b7d1',
        features: ['폴라이트 풀 (더 빠름)', '풍부한 메타데이터', '기관 추적'],
      },
      {
        name: 'arXiv',
        coverage: '100% PDF 접근',
        icon: 'fileText',
        color: '#96ceb4',
        features: ['프리프린트 서버', '전문 접근', '속도 제한 없음'],
      },
    ],

    // Cost & Efficiency
    costTitle: '비용 효율성',
    costDescription: '품질을 유지하면서 API 비용 최소화:',
    costMetrics: [
      { label: '500편 논문 리뷰', value: '~$0.07', icon: 'dollarSign', color: '#44ffaa' },
      { label: '스크리닝 시간', value: '30-60분', icon: 'clock', color: '#22ccff' },
      { label: 'PDF 검색률', value: '50-60%', icon: 'checkCircle', color: '#ffcc22' },
    ],
    costDetails: [
      'Groq LLM (기본값): 100편당 $0.01',
      '로컬 임베딩: 무료 (sentence-transformers)',
      '기관 구독 불필요',
    ],

    // Key Features
    featuresTitle: '주요 기능',
    features: [
      {
        icon: 'sparkles',
        title: 'AI 지원 스크리닝',
        description: '구성 가능한 임계값을 가진 Groq LLM (llama-3.3-70b) 관련성 점수 매기기',
        color: '#9b59b6',
      },
      {
        icon: 'workflow',
        title: '대화형 방식',
        description: '단계별 프롬프트가 연구자를 PRISMA 워크플로우로 안내',
        color: '#00bcd4',
      },
      {
        icon: 'database',
        title: '자동 PDF 검색',
        description: '재시도 로직, 폴백 체인, 50-60% 성공률을 위한 진행 상황 추적',
        color: '#4ecdc4',
      },
      {
        icon: 'zap',
        title: 'RAG 기반 분석',
        description: '의미론적 검색 및 종합을 위한 ChromaDB 벡터 데이터베이스',
        color: '#45b7d1',
      },
      {
        icon: 'barChart',
        title: 'PRISMA 다이어그램',
        description: '제외 추적을 통한 PRISMA 2020 흐름도 자동 생성',
        color: '#dda0dd',
      },
      {
        icon: 'checkCircle',
        title: '품질 검증',
        description: '체크포인트 통합으로 재현성 및 투명성 보장',
        color: '#44ffaa',
      },
    ],

    // Quick Links
    quickTitle: '더 알아보기',
    quickDescription: '각 구성 요소에 대한 자세한 문서를 탐색하세요:',
    quickLinks: [
      {
        title: 'PRISMA 지침',
        description: 'PRISMA 2020 준수 및 흐름도',
        href: '/docs/systematic-review/prisma',
        icon: 'checkCircle',
        color: '#9b59b6',
      },
      {
        title: '지원 데이터베이스',
        description: '데이터베이스 API 통합 및 PDF 검색 전략',
        href: '/docs/systematic-review/databases',
        icon: 'database',
        color: '#45b7d1',
      },
      {
        title: '프로젝트 구조',
        description: '자동 생성 문서 및 폴더 레이아웃',
        href: '/docs/project-init',
        icon: 'sparkles',
        color: '#9b59b6',
      },
    ],

    // CTA
    ctaTitle: '체계적 문헌고찰을 자동화할 준비가 되셨나요?',
    ctaDescription: 'Diverga의 I-카테고리 에이전트로 시작하여 몇 주가 아닌 몇 시간 만에 PRISMA 2020 준수 체계적 문헌고찰을 수행하세요.',
    ctaButtons: {
      agents: 'I 카테고리 에이전트 보기',
      quickStart: '빠른 시작 가이드',
      github: 'GitHub 저장소',
    },
  },
};

// Icon mapping
const overviewIcons: Record<string, React.ReactNode> = {
  workflow: <Workflow className="h-5 w-5" />,
  sparkles: <Sparkles className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
};

const databaseIcons: Record<string, React.ReactNode> = {
  bookOpen: <BookOpen className="h-6 w-6" />,
  database: <Database className="h-6 w-6" />,
  fileText: <FileText className="h-6 w-6" />,
};

const featureIcons: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="h-6 w-6" />,
  workflow: <Workflow className="h-6 w-6" />,
  database: <Database className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  barChart: <BarChart3 className="h-6 w-6" />,
  checkCircle: <CheckCircle2 className="h-6 w-6" />,
};

const costIcons: Record<string, React.ReactNode> = {
  dollarSign: <DollarSign className="h-5 w-5" />,
  clock: <Clock className="h-5 w-5" />,
  checkCircle: <CheckCircle2 className="h-5 w-5" />,
};

const quickLinkIcons: Record<string, React.ReactNode> = {
  checkCircle: <CheckCircle2 className="h-6 w-6" />,
  sparkles: <Sparkles className="h-6 w-6" />,
  database: <Database className="h-6 w-6" />,
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

export default function SystematicReviewPage() {
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

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
        >
          {/* Glow background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(0, 188, 212, 0.15) 0%, transparent 50%)',
            }}
          />

          <div className="flex justify-center mb-6 relative z-10">
            <div
              className="flex h-16 w-16 items-center justify-center border border-[#00bcd4]/30"
              style={{ backgroundColor: 'rgba(0, 188, 212, 0.15)', color: '#00bcd4' }}
            >
              <Search className="h-8 w-8" />
            </div>
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#00bcd4' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>
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
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(0, 188, 212, 0.15)' }}
            >
              <Sparkles className="h-5 w-5" style={{ color: '#00bcd4' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.overviewTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.overviewDescription}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.overviewFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#00bcd4]/30"
                  style={{ backgroundColor: 'rgba(0, 188, 212, 0.15)', color: '#00bcd4' }}
                >
                  {overviewIcons[feature.icon]}
                </div>
                <p className="text-stellar-bright pt-2">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Pipeline Stages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(0, 188, 212, 0.15)' }}
            >
              <Workflow className="h-5 w-5" style={{ color: '#00bcd4' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.pipelineTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.pipelineDescription}</p>

          <div className="space-y-4">
            {t.stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-5 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden group hover:border-stellar-faint/20 transition-colors"
              >
                {/* Stage number badge */}
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center font-mono font-bold text-xl border"
                  style={{
                    backgroundColor: `${stage.color}15`,
                    borderColor: `${stage.color}30`,
                    color: stage.color,
                  }}
                >
                  {stage.number}
                </div>

                {/* Stage content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="void-heading-3 text-stellar-core">{stage.name}</h3>
                    <span
                      className="px-3 py-1 text-xs font-mono border"
                      style={{
                        color: stage.color,
                        borderColor: `${stage.color}30`,
                        backgroundColor: `${stage.color}10`,
                      }}
                    >
                      {stage.duration}
                    </span>
                  </div>
                  <p className="text-stellar-dim">{stage.description}</p>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at left, ${stage.color}10 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Project Types */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(0, 188, 212, 0.15)' }}
            >
              <Filter className="h-5 w-5" style={{ color: '#00bcd4' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.projectTypesTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.projectTypesDescription}</p>

          <div className="grid gap-6 md:grid-cols-2">
            {t.projectTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top right, ${type.color}15 0%, transparent 70%)`,
                  }}
                />

                <h3 className="void-heading-3 mb-3" style={{ color: type.color }}>{type.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-stellar-dim">
                    <BookOpen className="h-4 w-4" />
                    <span>{type.papers}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-stellar-dim">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{type.threshold}</span>
                  </div>
                </div>
                <p className="text-stellar-dim mb-4">{type.description}</p>

                {/* Use cases */}
                <div className="space-y-2">
                  {type.useCases.map((useCase, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm px-3 py-1.5 border"
                      style={{
                        color: type.color,
                        borderColor: `${type.color}30`,
                        backgroundColor: `${type.color}10`,
                      }}
                    >
                      <div className="h-1.5 w-1.5" style={{ backgroundColor: type.color }} />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Project Structure */}
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
              <FolderTree className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.structureTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.structureDescription}</p>

          <div className="grid gap-6 lg:grid-cols-2">
            {t.structures.map((structure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-void-elevated border border-stellar-faint/10 overflow-hidden h-full">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-stellar-faint/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f56' }} />
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#27c93f' }} />
                    </div>
                    <span className="text-xs font-mono" style={{ color: structure.color }}>{structure.name}</span>
                  </div>
                  <p className="px-4 py-2 text-xs text-stellar-faint border-b border-stellar-faint/5">{structure.description}</p>
                  <pre className="p-4 text-xs font-mono text-stellar-bright overflow-x-auto whitespace-pre">{structure.tree}</pre>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Databases */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(0, 188, 212, 0.15)' }}
            >
              <Database className="h-5 w-5" style={{ color: '#00bcd4' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.databasesTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.databasesDescription}</p>

          <div className="grid gap-6 sm:grid-cols-3">
            {t.databases.map((db, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center border mb-4"
                  style={{
                    backgroundColor: `${db.color}15`,
                    borderColor: `${db.color}30`,
                    color: db.color,
                  }}
                >
                  {databaseIcons[db.icon]}
                </div>
                <h3 className="void-heading-3 text-stellar-core mb-2">{db.name}</h3>
                <p className="text-sm mb-4" style={{ color: db.color }}>{db.coverage}</p>
                <div className="space-y-1.5">
                  {db.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stellar-faint">
                      <div className="h-1 w-1 bg-stellar-faint" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Cost & Efficiency */}
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
              <DollarSign className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.costTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.costDescription}</p>

          <div className="grid gap-6 sm:grid-cols-3 mb-6">
            {t.costMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-void-elevated border"
                style={{ borderColor: `${metric.color}30` }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center border mb-3"
                  style={{
                    backgroundColor: `${metric.color}15`,
                    borderColor: `${metric.color}30`,
                    color: metric.color,
                  }}
                >
                  {costIcons[metric.icon]}
                </div>
                <p className="text-xs text-stellar-faint mb-1">{metric.label}</p>
                <p className="text-2xl font-bold" style={{ color: metric.color }}>{metric.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-5 bg-void-elevated border border-stellar-faint/10">
            <ul className="space-y-2">
              {t.costDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-3 text-stellar-dim">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#44ffaa' }} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-8">{t.featuresTitle}</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center border mb-4"
                  style={{
                    backgroundColor: `${feature.color}15`,
                    borderColor: `${feature.color}30`,
                    color: feature.color,
                  }}
                >
                  {featureIcons[feature.icon]}
                </div>
                <h3 className="void-heading-3 text-stellar-core mb-2">{feature.title}</h3>
                <p className="text-sm text-stellar-dim">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Quick Links */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.quickTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.quickDescription}</p>

          <div className="grid gap-6 sm:grid-cols-3">
            {t.quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/${locale}${link.href}`}
                  className="block p-5 bg-void-elevated border border-stellar-faint/10 hover:border-stellar-faint/20 transition-all group"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center border mb-4 group-hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: `${link.color}15`,
                      borderColor: `${link.color}30`,
                      color: link.color,
                    }}
                  >
                    {quickLinkIcons[link.icon]}
                  </div>
                  <h3 className="void-heading-3 text-stellar-core mb-2 flex items-center justify-between">
                    {link.title}
                    <ArrowRight className="h-5 w-5 text-stellar-faint group-hover:text-stellar-bright group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-sm text-stellar-dim">{link.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)',
              borderColor: 'rgba(0, 188, 212, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/agents/collection`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                {t.ctaButtons.agents}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={`/${locale}/docs/quick-start`}
                className="void-btn void-btn-primary inline-flex items-center gap-2"
              >
                {t.ctaButtons.quickStart}
              </Link>
              <Link
                href="https://github.com/HosungYou/Diverga"
                target="_blank"
                rel="noopener noreferrer"
                className="void-btn void-btn-ghost inline-flex items-center gap-2"
              >
                {t.ctaButtons.github}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
