'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Database,
  Globe,
  Key,
  Code,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  Server,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Journal Intelligence',
    title: 'Journal MCP Server',
    subtitle: '6 Tools powered by OpenAlex & Crossref',
    description:
      'The journal-server.js MCP server provides 6 specialized tools for real-time journal data retrieval. No API keys required — just an optional email for faster rate limits.',

    // Tool Details
    toolsTitle: 'Tool Details',
    toolsDescription: 'All 6 specialized tools provided by journal-server.js:',
    tools: [
      {
        name: 'journal_search_by_field',
        color: '#f59e0b',
        icon: 'database',
        description: 'Search journals by academic field or discipline. Returns sources sorted by citation count.',
        params: [
          'field — Academic discipline or research area to search',
          'per_page — Number of results to return (default: 10)',
        ],
        api: 'OpenAlex /sources',
        returns: 'Journals sorted by citation count with metadata',
        returnFields: [
          'id, display_name — Journal identifier and name',
          'cited_by_count — Total citation volume',
          'works_count — Number of published works',
          'is_oa — Open access status flag',
        ],
      },
      {
        name: 'journal_metrics',
        color: '#f59e0b',
        icon: 'barChart',
        description: 'Retrieve detailed metrics for a specific journal by ID or ISSN.',
        params: [
          'journal_id — OpenAlex source ID (e.g. S1234567890)',
          'issn — ISSN-L or ISSN as alternative identifier',
        ],
        api: 'OpenAlex /sources/{id}',
        returns: 'Comprehensive journal quality indicators',
        returnFields: [
          'h_index — H-index impact measure',
          'cited_by_count — Total citations received',
          'works_count — Total published articles',
          'is_oa, apc_usd — Open access % and APC cost',
        ],
      },
      {
        name: 'journal_publication_trends',
        color: '#f59e0b',
        icon: 'zap',
        description: 'Analyze publication volume trends for a journal over a specified year range.',
        params: [
          'journal_id — OpenAlex source ID',
          'years — Number of past years to include (default: 5)',
        ],
        api: 'OpenAlex /sources/{id} with counts_by_year',
        returns: 'Year-by-year publication and citation counts',
        returnFields: [
          'year — Publication year',
          'works_count — Papers published that year',
          'cited_by_count — Citations received that year',
          'trend — Calculated growth direction',
        ],
      },
      {
        name: 'journal_editor_info',
        color: '#f59e0b',
        icon: 'key',
        description: 'Retrieve top authors and contributors associated with a journal.',
        params: [
          'journal_id — OpenAlex source ID',
          'per_page — Number of top authors to return (default: 10)',
        ],
        api: 'OpenAlex /authors?filter=last_known_source.id',
        returns: 'Top authors ranked by citation count',
        returnFields: [
          'id, display_name — Author identifier and name',
          'cited_by_count — Author citation impact',
          'works_count — Total works published',
          'last_known_institution — Affiliated organization',
        ],
      },
      {
        name: 'journal_compare',
        color: '#f59e0b',
        icon: 'globe',
        description: 'Compare 2 to 5 journals side-by-side across key quality metrics.',
        params: [
          'journal_ids — Array of 2–5 OpenAlex source IDs',
        ],
        api: 'Parallel OpenAlex /sources/{id} calls',
        returns: 'Comparative table of metrics across journals',
        returnFields: [
          'display_name — Journal name per entry',
          'h_index, cited_by_count — Impact comparison',
          'is_oa, apc_usd — Access model comparison',
          'works_count — Volume comparison',
        ],
      },
      {
        name: 'journal_special_issues',
        color: '#f59e0b',
        icon: 'code',
        description: 'Discover recent special issues and themed publications for a journal.',
        params: [
          'journal_name — Full journal name for query',
          'issn — ISSN as alternative identifier',
        ],
        api: 'Crossref /works?filter=container-title',
        returns: 'Recent themed publications and special issues',
        returnFields: [
          'title — Special issue or paper title',
          'published — Publication date',
          'subject — Thematic classification',
          'DOI — Direct article identifier',
        ],
      },
    ],

    // API Architecture
    archTitle: 'API Architecture',
    archDescription: 'The journal-server.js routes requests across two external APIs:',
    archItems: [
      {
        title: 'OpenAlex',
        base: 'https://api.openalex.org/',
        description: 'Primary source for journal metadata, citation metrics, author data, and publication trends.',
        color: '#f59e0b',
        icon: 'globe',
      },
      {
        title: 'Crossref',
        base: 'https://api.crossref.org/',
        description: 'Secondary source for publication records and special issue discovery.',
        color: '#f59e0b',
        icon: 'database',
      },
    ],
    emailTitle: 'Email Resolution Order',
    emailSteps: [
      {
        step: 1,
        label: 'Environment Variable',
        value: 'OPENALEX_EMAIL',
        description: 'Highest priority — set in shell or .env file',
        color: '#f59e0b',
      },
      {
        step: 2,
        label: 'OMC Config File',
        value: '.omc/config.json → openalex_email',
        description: 'Project-level config file override',
        color: '#f59e0b',
      },
      {
        step: 3,
        label: 'No Email',
        value: 'none',
        description: 'Falls back to standard rate limit pool',
        color: '#f59e0b',
      },
    ],
    rateTitle: 'Rate Limit Tiers',
    rateLimits: [
      { label: 'With email (polite pool)', detail: 'Faster responses, higher concurrency', color: '#44ffaa' },
      { label: 'Without email (standard)', detail: 'Lower throughput, may be throttled', color: '#ff6b6b' },
    ],

    // Error Handling
    errorTitle: 'Error Handling',
    errorDescription: 'The server implements graceful degradation across all failure modes:',
    errors: [
      {
        scenario: 'Network Failures',
        handling: 'Graceful error messages returned to the MCP caller without crashing the server.',
        icon: 'globe',
        color: '#f59e0b',
      },
      {
        scenario: 'Missing Parameters',
        handling: 'Input validation runs before any API call. Clear error messages indicate which params are required.',
        icon: 'key',
        color: '#f59e0b',
      },
      {
        scenario: 'Rate Limiting',
        handling: 'Automatic retry with exponential backoff when 429 responses are received from OpenAlex or Crossref.',
        icon: 'zap',
        color: '#f59e0b',
      },
    ],

    // CTA
    ctaTitle: 'Ready to Query Journal Data?',
    ctaDescription: 'Connect the journal-server.js MCP to your AI assistant and start retrieving live journal metrics in seconds.',
    ctaButtons: {
      pipeline: 'Pipeline Docs',
      github: 'View on GitHub',
    },
  },

  ko: {
    back: '저널 인텔리전스로 돌아가기',
    title: '저널 MCP 서버',
    subtitle: 'OpenAlex & Crossref 기반 6개 도구',
    description:
      'journal-server.js MCP 서버는 실시간 저널 데이터 검색을 위한 6개의 전문 도구를 제공합니다. API 키 불필요 — 더 빠른 속도 제한을 위한 선택적 이메일만 필요합니다.',

    // Tool Details
    toolsTitle: '도구 상세',
    toolsDescription: 'journal-server.js가 제공하는 6개의 전문 도구 전체:',
    tools: [
      {
        name: 'journal_search_by_field',
        color: '#f59e0b',
        icon: 'database',
        description: '학문 분야 또는 학제로 저널을 검색합니다. 인용 수 기준으로 정렬된 결과를 반환합니다.',
        params: [
          'field — 검색할 학문 분야 또는 연구 영역',
          'per_page — 반환할 결과 수 (기본값: 10)',
        ],
        api: 'OpenAlex /sources',
        returns: '인용 수 기준으로 정렬된 메타데이터 포함 저널 목록',
        returnFields: [
          'id, display_name — 저널 식별자 및 이름',
          'cited_by_count — 총 인용 수',
          'works_count — 출판된 저작물 수',
          'is_oa — 오픈 액세스 상태 플래그',
        ],
      },
      {
        name: 'journal_metrics',
        color: '#f59e0b',
        icon: 'barChart',
        description: 'ID 또는 ISSN으로 특정 저널의 상세 지표를 검색합니다.',
        params: [
          'journal_id — OpenAlex 소스 ID (예: S1234567890)',
          'issn — 대체 식별자로 사용되는 ISSN-L 또는 ISSN',
        ],
        api: 'OpenAlex /sources/{id}',
        returns: '종합적인 저널 품질 지표',
        returnFields: [
          'h_index — H-인덱스 영향력 측정값',
          'cited_by_count — 총 수신 인용 수',
          'works_count — 총 출판 논문 수',
          'is_oa, apc_usd — 오픈 액세스 % 및 APC 비용',
        ],
      },
      {
        name: 'journal_publication_trends',
        color: '#f59e0b',
        icon: 'zap',
        description: '지정된 연도 범위에 걸쳐 저널의 출판량 추세를 분석합니다.',
        params: [
          'journal_id — OpenAlex 소스 ID',
          'years — 포함할 과거 연도 수 (기본값: 5)',
        ],
        api: 'OpenAlex /sources/{id} (counts_by_year 포함)',
        returns: '연도별 출판 및 인용 수',
        returnFields: [
          'year — 출판 연도',
          'works_count — 해당 연도 출판된 논문 수',
          'cited_by_count — 해당 연도 수신된 인용 수',
          'trend — 계산된 성장 방향',
        ],
      },
      {
        name: 'journal_editor_info',
        color: '#f59e0b',
        icon: 'key',
        description: '저널과 관련된 상위 저자 및 기여자를 검색합니다.',
        params: [
          'journal_id — OpenAlex 소스 ID',
          'per_page — 반환할 상위 저자 수 (기본값: 10)',
        ],
        api: 'OpenAlex /authors?filter=last_known_source.id',
        returns: '인용 수 기준으로 순위가 매겨진 상위 저자',
        returnFields: [
          'id, display_name — 저자 식별자 및 이름',
          'cited_by_count — 저자 인용 영향력',
          'works_count — 총 출판된 저작물 수',
          'last_known_institution — 소속 기관',
        ],
      },
      {
        name: 'journal_compare',
        color: '#f59e0b',
        icon: 'globe',
        description: '주요 품질 지표에 걸쳐 2~5개의 저널을 나란히 비교합니다.',
        params: [
          'journal_ids — 2~5개의 OpenAlex 소스 ID 배열',
        ],
        api: '병렬 OpenAlex /sources/{id} 호출',
        returns: '저널 간 지표 비교 테이블',
        returnFields: [
          'display_name — 항목별 저널 이름',
          'h_index, cited_by_count — 영향력 비교',
          'is_oa, apc_usd — 액세스 모델 비교',
          'works_count — 출판량 비교',
        ],
      },
      {
        name: 'journal_special_issues',
        color: '#f59e0b',
        icon: 'code',
        description: '저널의 최근 특별호 및 주제별 출판물을 발견합니다.',
        params: [
          'journal_name — 쿼리를 위한 전체 저널 이름',
          'issn — 대체 식별자로 사용되는 ISSN',
        ],
        api: 'Crossref /works?filter=container-title',
        returns: '최근 주제별 출판물 및 특별호',
        returnFields: [
          'title — 특별호 또는 논문 제목',
          'published — 출판 날짜',
          'subject — 주제 분류',
          'DOI — 직접 기사 식별자',
        ],
      },
    ],

    // API Architecture
    archTitle: 'API 아키텍처',
    archDescription: 'journal-server.js는 두 개의 외부 API에 요청을 라우팅합니다:',
    archItems: [
      {
        title: 'OpenAlex',
        base: 'https://api.openalex.org/',
        description: '저널 메타데이터, 인용 지표, 저자 데이터 및 출판 추세의 기본 소스.',
        color: '#f59e0b',
        icon: 'globe',
      },
      {
        title: 'Crossref',
        base: 'https://api.crossref.org/',
        description: '출판 레코드 및 특별호 발견을 위한 보조 소스.',
        color: '#f59e0b',
        icon: 'database',
      },
    ],
    emailTitle: '이메일 해결 순서',
    emailSteps: [
      {
        step: 1,
        label: '환경 변수',
        value: 'OPENALEX_EMAIL',
        description: '최우선 순위 — 셸 또는 .env 파일에 설정',
        color: '#f59e0b',
      },
      {
        step: 2,
        label: 'OMC 설정 파일',
        value: '.omc/config.json → openalex_email',
        description: '프로젝트 수준 설정 파일 재정의',
        color: '#f59e0b',
      },
      {
        step: 3,
        label: '이메일 없음',
        value: 'none',
        description: '표준 속도 제한 풀로 폴백',
        color: '#f59e0b',
      },
    ],
    rateTitle: '속도 제한 등급',
    rateLimits: [
      { label: '이메일 있음 (폴라이트 풀)', detail: '더 빠른 응답, 더 높은 동시성', color: '#44ffaa' },
      { label: '이메일 없음 (표준)', detail: '더 낮은 처리량, 스로틀링 가능', color: '#ff6b6b' },
    ],

    // Error Handling
    errorTitle: '오류 처리',
    errorDescription: '서버는 모든 오류 모드에 걸쳐 우아한 저하를 구현합니다:',
    errors: [
      {
        scenario: '네트워크 오류',
        handling: '서버 충돌 없이 MCP 호출자에게 우아한 오류 메시지가 반환됩니다.',
        icon: 'globe',
        color: '#f59e0b',
      },
      {
        scenario: '누락된 매개변수',
        handling: 'API 호출 전에 입력 유효성 검사가 실행됩니다. 명확한 오류 메시지가 필수 매개변수를 나타냅니다.',
        icon: 'key',
        color: '#f59e0b',
      },
      {
        scenario: '속도 제한',
        handling: 'OpenAlex 또는 Crossref에서 429 응답을 받을 때 지수 백오프를 사용한 자동 재시도.',
        icon: 'zap',
        color: '#f59e0b',
      },
    ],

    // CTA
    ctaTitle: '저널 데이터를 쿼리할 준비가 되셨나요?',
    ctaDescription: 'journal-server.js MCP를 AI 어시스턴트에 연결하고 몇 초 만에 실시간 저널 지표를 검색하세요.',
    ctaButtons: {
      pipeline: '파이프라인 문서',
      github: 'GitHub에서 보기',
    },
  },
};

// Icon mapping helpers
const toolIconMap: Record<string, React.ReactNode> = {
  database: <Database className="h-6 w-6" />,
  barChart: <BarChart3 className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  key: <Key className="h-6 w-6" />,
  globe: <Globe className="h-6 w-6" />,
  code: <Code className="h-6 w-6" />,
};

const archIconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="h-8 w-8" />,
  database: <Database className="h-8 w-8" />,
};

const errorIconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="h-6 w-6" />,
  key: <Key className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
};

export default function JournalMcpServerPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/journal-intelligence`}
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
              <Server className="h-8 w-8" />
            </div>
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#f59e0b' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Tool Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.toolsTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.toolsDescription}</p>

          <div className="space-y-8">
            {t.tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-6 bg-void-elevated border"
                style={{ borderColor: `${tool.color}30` }}
              >
                {/* Tool Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center border"
                    style={{
                      backgroundColor: `${tool.color}15`,
                      borderColor: `${tool.color}30`,
                      color: tool.color,
                    }}
                  >
                    {toolIconMap[tool.icon]}
                  </div>
                  <div className="flex-1">
                    <code
                      className="block text-sm font-mono font-bold mb-2"
                      style={{ color: tool.color }}
                    >
                      {tool.name}
                    </code>
                    <p className="text-sm text-stellar-dim">{tool.description}</p>
                  </div>
                </div>

                {/* Parameters */}
                <div className="mb-4">
                  <h4 className="text-xs font-mono text-stellar-faint mb-2">PARAMETERS</h4>
                  <div className="space-y-1">
                    {tool.params.map((param, i) => (
                      <code
                        key={i}
                        className="block p-2 bg-void-deep border border-stellar-faint/10 text-xs text-stellar-dim"
                      >
                        {param}
                      </code>
                    ))}
                  </div>
                </div>

                {/* API Source */}
                <div className="mb-4">
                  <h4 className="text-xs font-mono text-stellar-faint mb-2">API SOURCE</h4>
                  <code className="block p-3 bg-void-deep border border-stellar-faint/10 text-xs text-stellar-bright">
                    {tool.api}
                  </code>
                </div>

                {/* Return Fields */}
                <div>
                  <h4 className="text-xs font-mono text-stellar-faint mb-2">RETURNS — {tool.returns}</h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {tool.returnFields.map((field, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stellar-dim">
                        <Code
                          className="h-3 w-3 shrink-0 mt-0.5"
                          style={{ color: tool.color }}
                        />
                        <span>{field}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* API Architecture */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.archTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.archDescription}</p>

          {/* API Sources */}
          <div className="grid gap-6 sm:grid-cols-2 mb-10">
            {t.archItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center border mb-4"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}30`,
                    color: item.color,
                  }}
                >
                  {archIconMap[item.icon]}
                </div>
                <h3 className="void-heading-3 text-stellar-core mb-1">{item.title}</h3>
                <code className="block text-xs mb-3" style={{ color: item.color }}>
                  {item.base}
                </code>
                <p className="text-sm text-stellar-dim">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Email Resolution */}
          <h3 className="void-heading-3 text-stellar-core mb-4">{t.emailTitle}</h3>
          <div className="space-y-3 mb-8">
            {t.emailSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border font-mono font-bold text-sm"
                  style={{
                    backgroundColor: `${step.color}15`,
                    borderColor: `${step.color}30`,
                    color: step.color,
                  }}
                >
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-semibold text-stellar-core">{step.label}</span>
                    <code className="text-xs px-2 py-0.5 bg-void-deep border border-stellar-faint/10 text-stellar-bright">
                      {step.value}
                    </code>
                  </div>
                  <p className="text-xs text-stellar-dim">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rate Limits */}
          <h3 className="void-heading-3 text-stellar-core mb-4">{t.rateTitle}</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.rateLimits.map((rate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: rate.color }} />
                <div>
                  <p className="text-sm font-semibold text-stellar-core mb-1">{rate.label}</p>
                  <p className="text-xs text-stellar-dim">{rate.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Error Handling */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.errorTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.errorDescription}</p>

          <div className="grid gap-6 sm:grid-cols-3">
            {t.errors.map((error, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center border mb-4"
                  style={{
                    backgroundColor: `${error.color}15`,
                    borderColor: `${error.color}30`,
                    color: error.color,
                  }}
                >
                  {errorIconMap[error.icon]}
                </div>
                <h3 className="void-heading-3 text-stellar-core mb-2">{error.scenario}</h3>
                <p className="text-sm text-stellar-dim">{error.handling}</p>
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
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
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
                {t.ctaButtons.pipeline}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/HosungYou/Diverga"
                target="_blank"
                rel="noopener noreferrer"
                className="void-btn void-btn-ghost inline-flex items-center gap-2"
              >
                {t.ctaButtons.github}
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
