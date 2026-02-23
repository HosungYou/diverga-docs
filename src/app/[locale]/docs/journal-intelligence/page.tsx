'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BarChart3,
  Database,
  Search,
  TrendingUp,
  GitCompare,
  Users,
  BookMarked,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Mail,
  Layers,
  Clock,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'Journal Intelligence',
    subtitle: 'Real-Time Data from OpenAlex & Crossref',
    description:
      'G1 Journal Matcher connects to the OpenAlex and Crossref APIs for live journal metrics, publication trends, and editorial profiling — replacing static knowledge with real-time data.',

    // Overview Section
    overviewTitle: 'What is Journal Intelligence?',
    overviewDescription:
      'Diverga\'s G1 Journal Matcher uses six specialized MCP tools to query live bibliometric data from OpenAlex and Crossref. A checkpoint-based pipeline guides researchers from abstract analysis through final journal selection with full bilingual support.',
    overviewFeatures: [
      { icon: 'globe', text: 'Free API access — no keys needed' },
      { icon: 'zap', text: '6 specialized MCP tools' },
      { icon: 'layers', text: 'Checkpoint-based pipeline' },
      { icon: 'sparkles', text: 'Bilingual support (EN/KO)' },
    ],

    // Pipeline Stages
    pipelineTitle: '4-Stage Matching Pipeline',
    pipelineDescription:
      'Each stage builds on the previous, guiding you from raw abstract to a final journal choice backed by live data.',
    stages: [
      {
        number: 1,
        name: 'Research Field Analysis',
        description: 'Analyze the paper abstract to identify the research field and derive candidate search terms',
        color: '#f59e0b',
        duration: '5 min',
        isCheckpoint: false,
      },
      {
        number: 2,
        name: 'Data Collection',
        description: 'Parallel API calls to OpenAlex and Crossref collect live metrics for all candidate journals',
        color: '#4ecdc4',
        duration: '2-3 min',
        isCheckpoint: false,
      },
      {
        number: 3,
        name: 'Priority Selection',
        description: 'Checkpoint — user selects ranking criteria (impact factor, OA status, APC, turnaround)',
        color: '#f59e0b',
        duration: 'Checkpoint',
        isCheckpoint: true,
      },
      {
        number: 4,
        name: 'Journal Selection',
        description: 'Checkpoint — compare finalists side by side with real-time data and make the final choice',
        color: '#f59e0b',
        duration: 'Checkpoint',
        isCheckpoint: true,
      },
    ],

    // MCP Tools
    toolsTitle: '6 MCP Tools',
    toolsDescription:
      'Each tool targets a specific dimension of journal intelligence, giving you granular control over which data to fetch.',
    tools: [
      {
        name: 'journal_search_by_field',
        source: 'OpenAlex',
        description: 'Search journals by research field, sorted by total citations',
        icon: 'search',
        color: '#f59e0b',
      },
      {
        name: 'journal_metrics',
        source: 'OpenAlex',
        description: 'h-index, 2-year average citations, works count, open access status, APC',
        icon: 'barChart',
        color: '#4ecdc4',
      },
      {
        name: 'journal_publication_trends',
        source: 'OpenAlex',
        description: 'Works and citations per year for a configurable number of years',
        icon: 'trending',
        color: '#45b7d1',
      },
      {
        name: 'journal_editor_info',
        source: 'OpenAlex',
        description: 'Top authors by publication count — editorial board profiling',
        icon: 'users',
        color: '#96ceb4',
      },
      {
        name: 'journal_compare',
        source: 'OpenAlex',
        description: 'Compare 2–5 journals side by side across all key metrics',
        icon: 'compare',
        color: '#dda0dd',
      },
      {
        name: 'journal_special_issues',
        source: 'Crossref',
        description: 'Recent themed publications — identify active special issue opportunities',
        icon: 'bookMarked',
        color: '#f0e68c',
      },
    ],

    // Email Configuration
    emailTitle: 'Email Configuration',
    emailDescription:
      'OpenAlex rewards polite API callers. Providing an email address places your requests in the "polite pool," which receives higher rate limits and priority routing.',
    emailTiers: [
      {
        label: 'OPENALEX_EMAIL env var',
        priority: 'Priority 1',
        color: '#44ffaa',
        description: 'Set once in your shell profile — applies globally',
      },
      {
        label: '.omc/config.json',
        priority: 'Priority 2',
        color: '#22ccff',
        description: 'Per-project setting in your Diverga config file',
      },
      {
        label: 'No email',
        priority: 'Fallback',
        color: '#f59e0b',
        description: 'Still works, but subject to stricter rate limits',
      },
    ],
    emailDetails: [
      'Polite pool: higher rate limits and priority routing',
      'Email is sent only in the User-Agent header — never stored',
      'Applies to all six OpenAlex-backed MCP tools automatically',
    ],

    // Quick Links
    quickTitle: 'Learn More',
    quickDescription: 'Explore detailed documentation for each component:',
    quickLinks: [
      {
        title: 'Journal MCP Server',
        description: 'Full reference for all six MCP tools and their parameters',
        href: '/docs/journal-intelligence/mcp-server',
        icon: 'database',
        color: '#f59e0b',
      },
      {
        title: 'Matching Pipeline',
        description: 'Step-by-step walkthrough of the 4-stage matching pipeline',
        href: '/docs/journal-intelligence/pipeline',
        icon: 'layers',
        color: '#4ecdc4',
      },
    ],

    // CTA
    ctaTitle: 'Ready to Start Matching Journals?',
    ctaDescription:
      'Use Diverga\'s G1 Journal Matcher to find the best-fit journal for your paper with live bibliometric data — in minutes.',
    ctaButton: 'Start Matching Journals',
  },
  ko: {
    back: '문서로 돌아가기',
    title: '저널 인텔리전스',
    subtitle: 'OpenAlex & Crossref 실시간 데이터',
    description:
      'G1 저널 매칭이 OpenAlex와 Crossref API에 연결되어 정적 지식 대신 실시간 저널 메트릭, 출판 트렌드, 편집 프로파일링을 제공합니다.',

    // Overview Section
    overviewTitle: '저널 인텔리전스란?',
    overviewDescription:
      'Diverga의 G1 저널 매칭은 6개의 전문 MCP 도구를 사용해 OpenAlex와 Crossref의 실시간 서지 데이터를 조회합니다. 체크포인트 기반 파이프라인이 초록 분석부터 최종 저널 선택까지 완전한 이중 언어 지원으로 안내합니다.',
    overviewFeatures: [
      { icon: 'globe', text: '무료 API 접근 — 키 불필요' },
      { icon: 'zap', text: '6개의 전문 MCP 도구' },
      { icon: 'layers', text: '체크포인트 기반 파이프라인' },
      { icon: 'sparkles', text: '이중 언어 지원 (영어/한국어)' },
    ],

    // Pipeline Stages
    pipelineTitle: '4단계 매칭 파이프라인',
    pipelineDescription:
      '각 단계는 이전 단계를 기반으로 구축되어 원시 초록에서 실시간 데이터를 기반으로 한 최종 저널 선택까지 안내합니다.',
    stages: [
      {
        number: 1,
        name: '연구 분야 분석',
        description: '논문 초록을 분석하여 연구 분야를 식별하고 후보 검색어를 도출합니다',
        color: '#f59e0b',
        duration: '5분',
        isCheckpoint: false,
      },
      {
        number: 2,
        name: '데이터 수집',
        description: 'OpenAlex와 Crossref에 병렬 API 호출로 모든 후보 저널의 실시간 메트릭을 수집합니다',
        color: '#4ecdc4',
        duration: '2-3분',
        isCheckpoint: false,
      },
      {
        number: 3,
        name: '우선순위 선택',
        description: '체크포인트 — 사용자가 순위 기준 선택 (임팩트 팩터, OA 여부, APC, 처리 기간)',
        color: '#f59e0b',
        duration: '체크포인트',
        isCheckpoint: true,
      },
      {
        number: 4,
        name: '저널 선택',
        description: '체크포인트 — 실시간 데이터로 최종 후보를 나란히 비교하고 최종 선택',
        color: '#f59e0b',
        duration: '체크포인트',
        isCheckpoint: true,
      },
    ],

    // MCP Tools
    toolsTitle: '6개의 MCP 도구',
    toolsDescription:
      '각 도구는 저널 인텔리전스의 특정 측면을 대상으로 하여 어떤 데이터를 가져올지 세밀하게 제어할 수 있습니다.',
    tools: [
      {
        name: 'journal_search_by_field',
        source: 'OpenAlex',
        description: '연구 분야별 저널 검색, 총 인용 수 기준 정렬',
        icon: 'search',
        color: '#f59e0b',
      },
      {
        name: 'journal_metrics',
        source: 'OpenAlex',
        description: 'h-지수, 2년 평균 인용 수, 게재 논문 수, 오픈 액세스 여부, APC',
        icon: 'barChart',
        color: '#4ecdc4',
      },
      {
        name: 'journal_publication_trends',
        source: 'OpenAlex',
        description: '설정 가능한 연도 수에 대한 연도별 게재 논문 수 및 인용 수',
        icon: 'trending',
        color: '#45b7d1',
      },
      {
        name: 'journal_editor_info',
        source: 'OpenAlex',
        description: '게재 논문 수 기준 상위 저자 — 편집위원회 프로파일링',
        icon: 'users',
        color: '#96ceb4',
      },
      {
        name: 'journal_compare',
        source: 'OpenAlex',
        description: '2~5개 저널을 모든 주요 메트릭에 걸쳐 나란히 비교',
        icon: 'compare',
        color: '#dda0dd',
      },
      {
        name: 'journal_special_issues',
        source: 'Crossref',
        description: '최근 주제별 출판물 — 활성 특별호 기회 파악',
        icon: 'bookMarked',
        color: '#f0e68c',
      },
    ],

    // Email Configuration
    emailTitle: '이메일 설정',
    emailDescription:
      'OpenAlex는 예의 바른 API 호출자에게 보상을 제공합니다. 이메일 주소를 제공하면 요청이 "폴라이트 풀"에 배치되어 더 높은 속도 제한과 우선 라우팅을 받습니다.',
    emailTiers: [
      {
        label: 'OPENALEX_EMAIL 환경 변수',
        priority: '우선순위 1',
        color: '#44ffaa',
        description: '셸 프로파일에 한 번 설정하면 전역으로 적용',
      },
      {
        label: '.omc/config.json',
        priority: '우선순위 2',
        color: '#22ccff',
        description: 'Diverga 설정 파일의 프로젝트별 설정',
      },
      {
        label: '이메일 없음',
        priority: '폴백',
        color: '#f59e0b',
        description: '여전히 작동하지만 더 엄격한 속도 제한 적용',
      },
    ],
    emailDetails: [
      '폴라이트 풀: 더 높은 속도 제한과 우선 라우팅',
      '이메일은 User-Agent 헤더에만 전송 — 저장되지 않음',
      '6개의 OpenAlex 기반 MCP 도구 모두에 자동 적용',
    ],

    // Quick Links
    quickTitle: '더 알아보기',
    quickDescription: '각 구성 요소에 대한 자세한 문서를 탐색하세요:',
    quickLinks: [
      {
        title: '저널 MCP 서버',
        description: '6개의 MCP 도구와 매개변수에 대한 전체 참조',
        href: '/docs/journal-intelligence/mcp-server',
        icon: 'database',
        color: '#f59e0b',
      },
      {
        title: '매칭 파이프라인',
        description: '4단계 매칭 파이프라인의 단계별 안내',
        href: '/docs/journal-intelligence/pipeline',
        icon: 'layers',
        color: '#4ecdc4',
      },
    ],

    // CTA
    ctaTitle: '저널 매칭을 시작할 준비가 되셨나요?',
    ctaDescription:
      'Diverga의 G1 저널 매칭을 사용해 실시간 서지 데이터로 논문에 가장 적합한 저널을 단 몇 분 만에 찾으세요.',
    ctaButton: '저널 매칭 시작하기',
  },
};

// Icon mapping
const overviewIcons: Record<string, React.ReactNode> = {
  globe: <Globe className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
  layers: <Layers className="h-5 w-5" />,
  sparkles: <Sparkles className="h-5 w-5" />,
};

const toolIcons: Record<string, React.ReactNode> = {
  search: <Search className="h-6 w-6" />,
  barChart: <BarChart3 className="h-6 w-6" />,
  trending: <TrendingUp className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  compare: <GitCompare className="h-6 w-6" />,
  bookMarked: <BookMarked className="h-6 w-6" />,
};

const quickLinkIcons: Record<string, React.ReactNode> = {
  database: <Database className="h-6 w-6" />,
  layers: <Layers className="h-6 w-6" />,
};

export default function JournalIntelligencePage() {
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
              background: 'radial-gradient(ellipse at center top, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
            }}
          />

          <div className="flex justify-center mb-6 relative z-10">
            <div
              className="flex h-16 w-16 items-center justify-center border border-[#f59e0b]/30"
              style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}
            >
              <BarChart3 className="h-8 w-8" />
            </div>
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#f59e0b' }}>{t.subtitle}</p>
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
              style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)' }}
            >
              <Sparkles className="h-5 w-5" style={{ color: '#f59e0b' }} />
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
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#f59e0b]/30"
                  style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}
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
              style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)' }}
            >
              <Layers className="h-5 w-5" style={{ color: '#f59e0b' }} />
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
                        color: stage.isCheckpoint ? '#f59e0b' : stage.color,
                        borderColor: stage.isCheckpoint ? 'rgba(245, 158, 11, 0.4)' : `${stage.color}30`,
                        backgroundColor: stage.isCheckpoint ? 'rgba(245, 158, 11, 0.12)' : `${stage.color}10`,
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

        {/* MCP Tools */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)' }}
            >
              <Database className="h-5 w-5" style={{ color: '#f59e0b' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.toolsTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.toolsDescription}</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center border mb-4"
                  style={{
                    backgroundColor: `${tool.color}15`,
                    borderColor: `${tool.color}30`,
                    color: tool.color,
                  }}
                >
                  {toolIcons[tool.icon]}
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-mono text-sm text-stellar-core">{tool.name}</h3>
                </div>
                <span
                  className="inline-block px-2 py-0.5 text-xs font-mono border mb-3"
                  style={{
                    color: tool.color,
                    borderColor: `${tool.color}30`,
                    backgroundColor: `${tool.color}10`,
                  }}
                >
                  {tool.source}
                </span>
                <p className="text-sm text-stellar-dim">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Email Configuration */}
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
              <Mail className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.emailTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.emailDescription}</p>

          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            {t.emailTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-void-elevated border"
                style={{ borderColor: `${tier.color}30` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2 py-0.5 text-xs font-mono border"
                    style={{
                      color: tier.color,
                      borderColor: `${tier.color}40`,
                      backgroundColor: `${tier.color}10`,
                    }}
                  >
                    {tier.priority}
                  </span>
                </div>
                <p className="font-mono text-sm text-stellar-core mb-2">{tier.label}</p>
                <p className="text-xs text-stellar-dim">{tier.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-5 bg-void-elevated border border-stellar-faint/10">
            <ul className="space-y-2">
              {t.emailDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-3 text-stellar-dim">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#44ffaa' }} />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
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

          <div className="grid gap-6 sm:grid-cols-2">
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
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%)',
              borderColor: 'rgba(245, 158, 11, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/journal-intelligence/pipeline`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                {t.ctaButton}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={`/${locale}/docs/quick-start`}
                className="void-btn void-btn-primary inline-flex items-center gap-2"
              >
                Quick Start
              </Link>
              <Link
                href="https://github.com/HosungYou/Diverga"
                target="_blank"
                rel="noopener noreferrer"
                className="void-btn void-btn-ghost inline-flex items-center gap-2"
              >
                GitHub
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
