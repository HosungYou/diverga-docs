'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  Database,
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  Zap,
  Globe,
  Lock,
  Key,
  ExternalLink,
  Code,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Systematic Review',
    title: 'Supported Databases',
    subtitle: 'Three Databases Chosen for API Access and PDF Availability',
    description: 'ScholaRAG integrates with Semantic Scholar, OpenAlex, and arXiv to provide automated paper retrieval with 50-60% overall PDF success rate. No institutional subscriptions required.',

    // Why These Databases
    whyTitle: 'Why These Databases?',
    whyDescription: 'Traditional academic databases don\'t support automated PDF access:',
    whyReasons: [
      {
        title: 'Traditional Databases Lack Automation',
        description: 'PubMed, Scopus, Web of Science, and ERIC require manual downloads',
        icon: 'xCircle',
        color: '#ff6b6b',
      },
      {
        title: 'Open Access Focus',
        description: 'Combined 50-60% PDF retrieval success across all fields',
        icon: 'checkCircle',
        color: '#44ffaa',
      },
      {
        title: 'REST API Access',
        description: 'All three provide generous rate limits for automation',
        icon: 'zap',
        color: '#22ccff',
      },
      {
        title: 'No Subscriptions Required',
        description: 'Free access without institutional credentials',
        icon: 'lock',
        color: '#9b59b6',
      },
    ],

    // Primary Databases
    databasesTitle: 'Primary Databases',
    databasesDescription: 'Detailed comparison of the three integrated databases:',
    databases: [
      {
        name: 'Semantic Scholar',
        coverage: '~40% Open Access PDF URLs',
        color: '#4ecdc4',
        icon: 'bookOpen',
        description: 'AI-powered academic search engine with citation analysis and influential paper detection. Best for computer science, AI, and machine learning research.',
        api: {
          endpoint: 'api.semanticscholar.org/graph/v1/paper/search',
          method: 'GET',
          auth: 'None (optional API key for higher limits)',
          rateLimit: '100 requests per 5 minutes',
        },
        fields: [
          'openAccessPdf.url - Direct PDF URLs',
          'title, abstract, authors - Metadata',
          'citationCount, influentialCitationCount - Impact',
          'fieldsOfStudy - Topic classification',
        ],
        pros: [
          'No API key required for basic access',
          'Citation network analysis built-in',
          'Influential papers detection',
          'Fast response times',
        ],
        cons: [
          'Lower open access rate (~40%)',
          'CS/ML bias in coverage',
          'Rate limits for bulk requests',
        ],
      },
      {
        name: 'OpenAlex',
        coverage: '~50% Open Access',
        color: '#45b7d1',
        icon: 'database',
        description: 'Open scholarly data platform covering 250M+ works across all disciplines. Replaces Microsoft Academic Graph with comprehensive metadata and institution tracking.',
        api: {
          endpoint: 'api.openalex.org/works',
          method: 'GET',
          auth: 'None (polite pool with mailto parameter)',
          rateLimit: '10 requests per second',
        },
        fields: [
          'open_access.oa_url - Open access PDFs',
          'authorships, institutions - Author data',
          'concepts - Topic classification',
          'cited_by_count - Citation metrics',
        ],
        pros: [
          'Highest open access rate (~50%)',
          'Broad disciplinary coverage',
          'Rich metadata and affiliations',
          'Polite pool for faster access',
        ],
        cons: [
          'Newer database (quality varies)',
          'Some metadata gaps',
          'Requires mailto for best limits',
        ],
      },
      {
        name: 'arXiv',
        coverage: '100% PDF Access',
        color: '#96ceb4',
        icon: 'fileText',
        description: 'Preprint server for physics, mathematics, computer science, and more. Every paper has a freely accessible PDF with standardized URLs.',
        api: {
          endpoint: 'export.arxiv.org/api/query',
          method: 'GET',
          auth: 'None',
          rateLimit: '3 seconds between requests (required)',
        },
        fields: [
          'entry.id - arXiv identifier',
          'entry.title, entry.summary - Metadata',
          'entry.author - Author information',
          'entry.published - Publication date',
        ],
        pros: [
          '100% PDF availability',
          'Direct PDF URLs (arxiv.org/pdf/{id}.pdf)',
          'Fast preprint access',
          'No rate limit restrictions',
        ],
        cons: [
          'Preprints only (not peer-reviewed)',
          'Limited to STEM fields',
          'Requires 3-second delay',
        ],
      },
    ],

    // Comparison Table
    comparisonTitle: 'Database Comparison',
    comparisonDescription: 'Quick reference for selecting the right database:',
    comparisonTable: {
      headers: ['Database', 'Open Access', 'API Key', 'Rate Limit', 'Best For'],
      rows: [
        ['Semantic Scholar', '40%', 'Optional', '100/5min', 'CS, AI, ML'],
        ['OpenAlex', '50%', 'No', '10/sec', 'All fields'],
        ['arXiv', '100%', 'No', '3s delay', 'Preprints'],
      ],
    },

    // API Integration
    apiTitle: 'API Integration Examples',
    apiDescription: 'How ScholaRAG integrates with each database:',
    apiExamples: [
      {
        database: 'Semantic Scholar',
        color: '#4ecdc4',
        endpoint: 'GET https://api.semanticscholar.org/graph/v1/paper/search',
        params: [
          'query: "machine learning education"',
          'fields: title,abstract,authors,openAccessPdf',
          'limit: 100',
        ],
        response: {
          papers: [
            {
              paperId: 'abc123',
              title: 'Machine Learning in Education',
              openAccessPdf: { url: 'https://arxiv.org/pdf/2001.00000.pdf' },
            },
          ],
        },
      },
      {
        database: 'OpenAlex',
        color: '#45b7d1',
        endpoint: 'GET https://api.openalex.org/works',
        params: [
          'search: "chatbot language learning"',
          'filter: publication_year:2020-2024',
          'mailto: researcher@university.edu',
        ],
        response: {
          results: [
            {
              id: 'W123456789',
              title: 'Chatbots for Language Learning',
              open_access: { oa_url: 'https://example.com/paper.pdf' },
            },
          ],
        },
      },
      {
        database: 'arXiv',
        color: '#96ceb4',
        endpoint: 'GET http://export.arxiv.org/api/query',
        params: [
          'search_query: all:"deep learning"',
          'start: 0',
          'max_results: 100',
        ],
        response: {
          entry: [
            {
              id: 'http://arxiv.org/abs/2001.00000v1',
              title: 'Deep Learning Survey',
              pdf_url: 'https://arxiv.org/pdf/2001.00000.pdf',
            },
          ],
        },
      },
    ],

    // PDF Retrieval Workflow
    workflowTitle: 'PDF Retrieval Workflow',
    workflowDescription: 'ScholaRAG implements retry logic and fallback chains:',
    workflowSteps: [
      {
        step: 1,
        title: 'Fetch Metadata',
        description: 'Query all three databases in parallel',
        time: '10-20 min',
        color: '#4ecdc4',
      },
      {
        step: 2,
        title: 'Deduplicate',
        description: 'Remove duplicates by DOI, arXiv ID, title similarity',
        time: '1-2 min',
        color: '#45b7d1',
      },
      {
        step: 3,
        title: 'Download PDFs',
        description: 'Retry logic with exponential backoff, fallback chains',
        time: '20-60 min',
        color: '#96ceb4',
      },
      {
        step: 4,
        title: 'Validate',
        description: 'Check PDF integrity, file size, readability',
        time: '5-10 min',
        color: '#9b59b6',
      },
    ],

    // Success Rates
    successTitle: 'PDF Retrieval Success Rates',
    successDescription: 'Expected outcomes across different research domains:',
    successRates: [
      { domain: 'Computer Science', rate: '60-70%', color: '#4ecdc4' },
      { domain: 'Physics & Mathematics', rate: '70-80%', color: '#45b7d1' },
      { domain: 'Biomedical Sciences', rate: '40-50%', color: '#96ceb4' },
      { domain: 'Social Sciences', rate: '30-40%', color: '#9b59b6' },
      { domain: 'Humanities', rate: '20-30%', color: '#ff6b6b' },
    ],

    // Best Practices
    practicesTitle: 'Best Practices',
    practicesDescription: 'Optimize your database strategy:',
    practices: [
      {
        title: 'Use All Three Databases',
        description: 'Maximize coverage by querying Semantic Scholar, OpenAlex, and arXiv together',
        icon: 'database',
        color: '#4ecdc4',
      },
      {
        title: 'Add Polite Pool Parameters',
        description: 'Include mailto parameter for OpenAlex to access faster rate limits',
        icon: 'zap',
        color: '#45b7d1',
      },
      {
        title: 'Respect Rate Limits',
        description: 'Implement exponential backoff and 3-second delays for arXiv',
        icon: 'clock',
        color: '#96ceb4',
      },
      {
        title: 'Validate PDF URLs',
        description: 'Check HTTP status codes before downloading to avoid broken links',
        icon: 'checkCircle',
        color: '#44ffaa',
      },
    ],

    // CTA
    ctaTitle: 'Ready to Automate Your Literature Search?',
    ctaDescription: 'ScholaRAG handles database integration, deduplication, and PDF retrieval automatically.',
    ctaButtons: {
      scholarag: 'ScholaRAG CLI Guide',
      prisma: 'PRISMA Workflow',
      github: 'View on GitHub',
    },
  },
  ko: {
    back: '체계적 문헌고찰로 돌아가기',
    title: '지원 데이터베이스',
    subtitle: 'API 접근과 PDF 가용성을 위해 선택된 세 가지 데이터베이스',
    description: 'ScholaRAG는 Semantic Scholar, OpenAlex, arXiv와 통합되어 50-60%의 전체 PDF 성공률로 자동 논문 검색을 제공합니다. 기관 구독이 필요하지 않습니다.',

    // Why These Databases
    whyTitle: '왜 이 데이터베이스인가?',
    whyDescription: '전통적인 학술 데이터베이스는 자동 PDF 접근을 지원하지 않습니다:',
    whyReasons: [
      {
        title: '전통 데이터베이스는 자동화 부족',
        description: 'PubMed, Scopus, Web of Science, ERIC는 수동 다운로드 필요',
        icon: 'xCircle',
        color: '#ff6b6b',
      },
      {
        title: '오픈 액세스 중심',
        description: '모든 분야에서 50-60% PDF 검색 성공률',
        icon: 'checkCircle',
        color: '#44ffaa',
      },
      {
        title: 'REST API 접근',
        description: '세 곳 모두 자동화를 위한 넉넉한 속도 제한 제공',
        icon: 'zap',
        color: '#22ccff',
      },
      {
        title: '구독 불필요',
        description: '기관 자격 증명 없이 무료 접근',
        icon: 'lock',
        color: '#9b59b6',
      },
    ],

    // Primary Databases
    databasesTitle: '주요 데이터베이스',
    databasesDescription: '세 가지 통합 데이터베이스의 상세 비교:',
    databases: [
      {
        name: 'Semantic Scholar',
        coverage: '~40% 오픈 액세스 PDF URL',
        color: '#4ecdc4',
        icon: 'bookOpen',
        description: 'AI 기반 학술 검색 엔진으로 인용 분석 및 영향력 있는 논문 감지 기능 제공. 컴퓨터 과학, AI, 머신러닝 연구에 최적.',
        api: {
          endpoint: 'api.semanticscholar.org/graph/v1/paper/search',
          method: 'GET',
          auth: '없음 (더 높은 한도를 위한 선택적 API 키)',
          rateLimit: '5분당 100개 요청',
        },
        fields: [
          'openAccessPdf.url - 직접 PDF URL',
          'title, abstract, authors - 메타데이터',
          'citationCount, influentialCitationCount - 영향력',
          'fieldsOfStudy - 주제 분류',
        ],
        pros: [
          '기본 접근을 위한 API 키 불필요',
          '인용 네트워크 분석 내장',
          '영향력 있는 논문 감지',
          '빠른 응답 시간',
        ],
        cons: [
          '낮은 오픈 액세스 비율 (~40%)',
          '커버리지의 CS/ML 편향',
          '대량 요청에 대한 속도 제한',
        ],
      },
      {
        name: 'OpenAlex',
        coverage: '~50% 오픈 액세스',
        color: '#45b7d1',
        icon: 'database',
        description: '모든 학문 분야에 걸쳐 2억 5천만 개 이상의 저작물을 다루는 오픈 학술 데이터 플랫폼. 포괄적인 메타데이터 및 기관 추적 기능으로 Microsoft Academic Graph를 대체.',
        api: {
          endpoint: 'api.openalex.org/works',
          method: 'GET',
          auth: '없음 (mailto 매개변수를 사용한 폴라이트 풀)',
          rateLimit: '초당 10개 요청',
        },
        fields: [
          'open_access.oa_url - 오픈 액세스 PDF',
          'authorships, institutions - 저자 데이터',
          'concepts - 주제 분류',
          'cited_by_count - 인용 지표',
        ],
        pros: [
          '가장 높은 오픈 액세스 비율 (~50%)',
          '광범위한 학제 커버리지',
          '풍부한 메타데이터 및 소속',
          '더 빠른 접근을 위한 폴라이트 풀',
        ],
        cons: [
          '새로운 데이터베이스 (품질 차이)',
          '일부 메타데이터 공백',
          '최상의 한도를 위해 mailto 필요',
        ],
      },
      {
        name: 'arXiv',
        coverage: '100% PDF 접근',
        color: '#96ceb4',
        icon: 'fileText',
        description: '물리학, 수학, 컴퓨터 과학 등을 위한 프리프린트 서버. 모든 논문에 표준화된 URL로 자유롭게 액세스할 수 있는 PDF 제공.',
        api: {
          endpoint: 'export.arxiv.org/api/query',
          method: 'GET',
          auth: '없음',
          rateLimit: '요청 간 3초 (필수)',
        },
        fields: [
          'entry.id - arXiv 식별자',
          'entry.title, entry.summary - 메타데이터',
          'entry.author - 저자 정보',
          'entry.published - 출판 날짜',
        ],
        pros: [
          '100% PDF 가용성',
          '직접 PDF URL (arxiv.org/pdf/{id}.pdf)',
          '빠른 프리프린트 접근',
          '속도 제한 제한 없음',
        ],
        cons: [
          '프리프린트만 (동료 검토 없음)',
          'STEM 분야로 제한',
          '3초 지연 필요',
        ],
      },
    ],

    // Comparison Table
    comparisonTitle: '데이터베이스 비교',
    comparisonDescription: '올바른 데이터베이스 선택을 위한 빠른 참조:',
    comparisonTable: {
      headers: ['데이터베이스', '오픈 액세스', 'API 키', '속도 제한', '최적 분야'],
      rows: [
        ['Semantic Scholar', '40%', '선택적', '100/5분', 'CS, AI, ML'],
        ['OpenAlex', '50%', '없음', '10/초', '모든 분야'],
        ['arXiv', '100%', '없음', '3초 지연', '프리프린트'],
      ],
    },

    // API Integration
    apiTitle: 'API 통합 예제',
    apiDescription: 'ScholaRAG가 각 데이터베이스와 통합하는 방법:',
    apiExamples: [
      {
        database: 'Semantic Scholar',
        color: '#4ecdc4',
        endpoint: 'GET https://api.semanticscholar.org/graph/v1/paper/search',
        params: [
          'query: "machine learning education"',
          'fields: title,abstract,authors,openAccessPdf',
          'limit: 100',
        ],
        response: {
          papers: [
            {
              paperId: 'abc123',
              title: 'Machine Learning in Education',
              openAccessPdf: { url: 'https://arxiv.org/pdf/2001.00000.pdf' },
            },
          ],
        },
      },
      {
        database: 'OpenAlex',
        color: '#45b7d1',
        endpoint: 'GET https://api.openalex.org/works',
        params: [
          'search: "chatbot language learning"',
          'filter: publication_year:2020-2024',
          'mailto: researcher@university.edu',
        ],
        response: {
          results: [
            {
              id: 'W123456789',
              title: 'Chatbots for Language Learning',
              open_access: { oa_url: 'https://example.com/paper.pdf' },
            },
          ],
        },
      },
      {
        database: 'arXiv',
        color: '#96ceb4',
        endpoint: 'GET http://export.arxiv.org/api/query',
        params: [
          'search_query: all:"deep learning"',
          'start: 0',
          'max_results: 100',
        ],
        response: {
          entry: [
            {
              id: 'http://arxiv.org/abs/2001.00000v1',
              title: 'Deep Learning Survey',
              pdf_url: 'https://arxiv.org/pdf/2001.00000.pdf',
            },
          ],
        },
      },
    ],

    // PDF Retrieval Workflow
    workflowTitle: 'PDF 검색 워크플로우',
    workflowDescription: 'ScholaRAG는 재시도 로직 및 폴백 체인을 구현합니다:',
    workflowSteps: [
      {
        step: 1,
        title: '메타데이터 가져오기',
        description: '세 개의 데이터베이스를 병렬로 쿼리',
        time: '10-20분',
        color: '#4ecdc4',
      },
      {
        step: 2,
        title: '중복 제거',
        description: 'DOI, arXiv ID, 제목 유사성으로 중복 제거',
        time: '1-2분',
        color: '#45b7d1',
      },
      {
        step: 3,
        title: 'PDF 다운로드',
        description: '지수 백오프를 사용한 재시도 로직, 폴백 체인',
        time: '20-60분',
        color: '#96ceb4',
      },
      {
        step: 4,
        title: '검증',
        description: 'PDF 무결성, 파일 크기, 가독성 확인',
        time: '5-10분',
        color: '#9b59b6',
      },
    ],

    // Success Rates
    successTitle: 'PDF 검색 성공률',
    successDescription: '다양한 연구 분야에서 예상되는 결과:',
    successRates: [
      { domain: '컴퓨터 과학', rate: '60-70%', color: '#4ecdc4' },
      { domain: '물리학 및 수학', rate: '70-80%', color: '#45b7d1' },
      { domain: '생물의학 과학', rate: '40-50%', color: '#96ceb4' },
      { domain: '사회과학', rate: '30-40%', color: '#9b59b6' },
      { domain: '인문학', rate: '20-30%', color: '#ff6b6b' },
    ],

    // Best Practices
    practicesTitle: '모범 사례',
    practicesDescription: '데이터베이스 전략 최적화:',
    practices: [
      {
        title: '세 개의 데이터베이스 모두 사용',
        description: 'Semantic Scholar, OpenAlex, arXiv를 함께 쿼리하여 커버리지 극대화',
        icon: 'database',
        color: '#4ecdc4',
      },
      {
        title: '폴라이트 풀 매개변수 추가',
        description: 'OpenAlex에 mailto 매개변수를 포함하여 더 빠른 속도 제한 접근',
        icon: 'zap',
        color: '#45b7d1',
      },
      {
        title: '속도 제한 준수',
        description: 'arXiv에 대한 지수 백오프 및 3초 지연 구현',
        icon: 'clock',
        color: '#96ceb4',
      },
      {
        title: 'PDF URL 검증',
        description: '손상된 링크를 피하기 위해 다운로드 전 HTTP 상태 코드 확인',
        icon: 'checkCircle',
        color: '#44ffaa',
      },
    ],

    // CTA
    ctaTitle: '문헌 검색을 자동화할 준비가 되셨나요?',
    ctaDescription: 'ScholaRAG는 데이터베이스 통합, 중복 제거, PDF 검색을 자동으로 처리합니다.',
    ctaButtons: {
      scholarag: 'ScholaRAG CLI 가이드',
      prisma: 'PRISMA 워크플로우',
      github: 'GitHub에서 보기',
    },
  },
};

// Icon mapping
const whyIcons: Record<string, React.ReactNode> = {
  xCircle: <XCircle className="h-6 w-6" />,
  checkCircle: <CheckCircle2 className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  lock: <Lock className="h-6 w-6" />,
};

const databaseIcons: Record<string, React.ReactNode> = {
  bookOpen: <BookOpen className="h-8 w-8" />,
  database: <Database className="h-8 w-8" />,
  fileText: <FileText className="h-8 w-8" />,
};

const practiceIcons: Record<string, React.ReactNode> = {
  database: <Database className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  clock: <Clock className="h-6 w-6" />,
  checkCircle: <CheckCircle2 className="h-6 w-6" />,
};

export default function DatabasesPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/systematic-review`}
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
              background: 'radial-gradient(ellipse at center top, rgba(76, 205, 196, 0.15) 0%, transparent 50%)',
            }}
          />

          <div className="flex justify-center mb-6 relative z-10">
            <div
              className="flex h-16 w-16 items-center justify-center border border-[#4ecdc4]/30"
              style={{ backgroundColor: 'rgba(76, 205, 196, 0.15)', color: '#4ecdc4' }}
            >
              <Database className="h-8 w-8" />
            </div>
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#4ecdc4' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Why These Databases */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.whyTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.whyDescription}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.whyReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center border mb-4"
                  style={{
                    backgroundColor: `${reason.color}15`,
                    borderColor: `${reason.color}30`,
                    color: reason.color,
                  }}
                >
                  {whyIcons[reason.icon]}
                </div>
                <h3 className="void-heading-3 text-stellar-core mb-2">{reason.title}</h3>
                <p className="text-sm text-stellar-dim">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Primary Databases */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.databasesTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.databasesDescription}</p>

          <div className="space-y-8">
            {t.databases.map((db, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-void-elevated border border-stellar-faint/10"
              >
                {/* Database Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center border"
                    style={{
                      backgroundColor: `${db.color}15`,
                      borderColor: `${db.color}30`,
                      color: db.color,
                    }}
                  >
                    {databaseIcons[db.icon]}
                  </div>
                  <div className="flex-1">
                    <h3 className="void-heading-3 text-stellar-core mb-2">{db.name}</h3>
                    <p className="text-sm mb-2" style={{ color: db.color }}>{db.coverage}</p>
                    <p className="text-sm text-stellar-dim">{db.description}</p>
                  </div>
                </div>

                {/* API Details */}
                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  <div className="p-4 bg-void-deep border border-stellar-faint/10">
                    <h4 className="text-xs font-mono text-stellar-faint mb-2">API ENDPOINT</h4>
                    <code className="text-xs text-stellar-bright break-all">{db.api.endpoint}</code>
                  </div>
                  <div className="p-4 bg-void-deep border border-stellar-faint/10">
                    <h4 className="text-xs font-mono text-stellar-faint mb-2">RATE LIMIT</h4>
                    <code className="text-xs text-stellar-bright">{db.api.rateLimit}</code>
                  </div>
                </div>

                {/* Fields */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-stellar-core mb-3">Key Fields</h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {db.fields.map((field, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stellar-dim">
                        <Code className="h-3 w-3 shrink-0 mt-0.5" style={{ color: db.color }} />
                        <span>{field}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-stellar-core mb-3">Pros</h4>
                    <div className="space-y-2">
                      {db.pros.map((pro, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stellar-dim">
                          <CheckCircle2 className="h-3 w-3 shrink-0 mt-0.5" style={{ color: '#44ffaa' }} />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-stellar-core mb-3">Cons</h4>
                    <div className="space-y-2">
                      {db.cons.map((con, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stellar-dim">
                          <XCircle className="h-3 w-3 shrink-0 mt-0.5" style={{ color: '#ff6b6b' }} />
                          <span>{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Comparison Table */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.comparisonTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.comparisonDescription}</p>

          <div className="overflow-x-auto">
            <table className="w-full border border-stellar-faint/10">
              <thead>
                <tr className="bg-void-elevated border-b border-stellar-faint/10">
                  {t.comparisonTable.headers.map((header, i) => (
                    <th key={i} className="px-4 py-3 text-left text-xs font-mono text-stellar-faint">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.comparisonTable.rows.map((row, i) => (
                  <tr key={i} className="border-b border-stellar-faint/10 hover:bg-void-elevated/50 transition-colors">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-sm text-stellar-bright">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* API Integration Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.apiTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.apiDescription}</p>

          <div className="space-y-6">
            {t.apiExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-void-elevated border"
                style={{ borderColor: `${example.color}30` }}
              >
                <h3 className="void-heading-3 mb-4" style={{ color: example.color }}>{example.database}</h3>

                {/* Endpoint */}
                <div className="mb-4">
                  <h4 className="text-xs font-mono text-stellar-faint mb-2">REQUEST</h4>
                  <code className="block p-3 bg-void-deep border border-stellar-faint/10 text-xs text-stellar-bright break-all">
                    {example.endpoint}
                  </code>
                </div>

                {/* Parameters */}
                <div className="mb-4">
                  <h4 className="text-xs font-mono text-stellar-faint mb-2">PARAMETERS</h4>
                  <div className="space-y-1">
                    {example.params.map((param, i) => (
                      <code key={i} className="block p-2 bg-void-deep border border-stellar-faint/10 text-xs text-stellar-dim">
                        {param}
                      </code>
                    ))}
                  </div>
                </div>

                {/* Response */}
                <div>
                  <h4 className="text-xs font-mono text-stellar-faint mb-2">RESPONSE</h4>
                  <pre className="p-3 bg-void-deep border border-stellar-faint/10 text-xs text-stellar-dim overflow-x-auto">
                    {JSON.stringify(example.response, null, 2)}
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* PDF Retrieval Workflow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.workflowTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.workflowDescription}</p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center border mb-4 font-mono font-bold"
                  style={{
                    backgroundColor: `${step.color}15`,
                    borderColor: `${step.color}30`,
                    color: step.color,
                  }}
                >
                  {step.step}
                </div>
                <h3 className="void-heading-3 text-stellar-core mb-2">{step.title}</h3>
                <p className="text-xs text-stellar-dim mb-3">{step.description}</p>
                <div
                  className="flex items-center gap-2 text-xs px-2 py-1 border"
                  style={{
                    color: step.color,
                    borderColor: `${step.color}30`,
                    backgroundColor: `${step.color}10`,
                  }}
                >
                  <Clock className="h-3 w-3" />
                  <span>{step.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Success Rates */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.successTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.successDescription}</p>

          <div className="space-y-4">
            {t.successRates.map((rate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-stellar-bright">{rate.domain}</span>
                    <span className="text-sm font-mono font-bold" style={{ color: rate.color }}>{rate.rate}</span>
                  </div>
                  <div className="h-2 bg-void-deep border border-stellar-faint/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: rate.rate }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.2, duration: 0.8, ease: "easeOut" as any }}
                      className="h-full"
                      style={{ backgroundColor: rate.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Best Practices */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.practicesTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.practicesDescription}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.practices.map((practice, index) => (
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
                    backgroundColor: `${practice.color}15`,
                    borderColor: `${practice.color}30`,
                    color: practice.color,
                  }}
                >
                  {practiceIcons[practice.icon]}
                </div>
                <h3 className="void-heading-3 text-stellar-core mb-2">{practice.title}</h3>
                <p className="text-sm text-stellar-dim">{practice.description}</p>
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
              background: 'linear-gradient(135deg, rgba(76, 205, 196, 0.1) 0%, rgba(69, 183, 209, 0.1) 100%)',
              borderColor: 'rgba(76, 205, 196, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/systematic-review/scholarag`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                {t.ctaButtons.scholarag}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={`/${locale}/docs/systematic-review/prisma`}
                className="void-btn void-btn-primary inline-flex items-center gap-2"
              >
                {t.ctaButtons.prisma}
              </Link>
              <Link
                href="https://github.com/HosungYou/ScholaRAG"
                target="_blank"
                rel="noopener noreferrer"
                className="void-btn void-btn-ghost inline-flex items-center gap-2"
              >
                {t.ctaButtons.github}
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
