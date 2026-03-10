'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Workflow,
  Search,
  Filter,
  Database,
  AlertCircle,
  CheckCircle2,
  Clock,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Agents',
    title: 'Category I: Systematic Review Agents',
    subtitle: 'PRISMA 2020 pipeline automation with AI-assisted screening and RAG',
    description: 'Systematic Review agents automate the complete PRISMA 2020 literature review workflow. From multi-database paper retrieval to AI-assisted screening and vector database construction, they handle the technical complexity so researchers can focus on synthesis.',

    principleTitle: 'Core Principle',
    principleText: 'Automated but transparent — every decision is logged, every exclusion is justified, every step follows PRISMA 2020 guidelines',

    agents: [
      {
        id: 'I0',
        name: 'SR Pipeline Orchestrator',
        icon: 'workflow',
        color: '#00bcd4',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'None',
        purpose: 'Coordinate the 7-stage systematic review pipeline, manage stage transitions and validation',
        triggers: {
          en: ['systematic review', 'PRISMA', 'literature review automation', 'pipeline'],
          ko: ['체계적 문헌고찰', '프리즈마', '문헌고찰 자동화', '파이프라인'],
        },
        capabilities: [
          'Stage-by-stage pipeline coordination (7 stages)',
          'Prerequisite validation before stage transitions',
          'Project initialization and configuration management',
          'Progress tracking and status reporting',
          'PRISMA flow diagram generation',
        ],
        vsProcess: 'Direct orchestration — no VS needed for pipeline coordination',
        example: {
          input: '"I want to conduct a systematic review on AI in education"',
          output: 'Initializes project → Stage 1: Research domain setup → Validates scope → Stage 2: Query design → Continues through all 7 stages with checkpoints',
        },
      },
      {
        id: 'I1',
        name: 'Paper Retrieval Agent',
        icon: 'search',
        color: '#4ecdc4',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_DATABASE_SELECTION',
        checkpointLevel: 'REQUIRED',
        vsLevel: 'None',
        purpose: 'Fetch papers from multiple academic databases with parallel queries and deduplication',
        triggers: {
          en: ['fetch papers', 'database search', 'paper retrieval', 'Semantic Scholar', 'OpenAlex', 'arXiv'],
          ko: ['논문 검색', '데이터베이스 검색', '논문 수집', '시맨틱 스콜라', '오픈알렉스'],
        },
        capabilities: [
          'Multi-database parallel querying (Semantic Scholar, OpenAlex, arXiv)',
          'Institutional database support (Scopus, Web of Science)',
          'DOI-based and title-similarity deduplication',
          'API key validation and rate limit management',
          'PDF URL extraction and availability checking',
        ],
        vsProcess: 'Database selection validated at checkpoint before execution',
        example: {
          input: '"Search for papers on AI chatbots in language learning from 2020-2024"',
          output: '🔴 CP_DATABASE_SELECTION → User selects databases → Parallel fetch: Semantic Scholar (1,200 results) + OpenAlex (980) + arXiv (340) → Deduplicate: 1,890 unique papers',
        },
      },
      {
        id: 'I2',
        name: 'Screening Assistant',
        icon: 'filter',
        color: '#9b59b6',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_SCREENING_CRITERIA',
        checkpointLevel: 'REQUIRED',
        vsLevel: 'None',
        purpose: 'AI-assisted PRISMA 6-dimension screening with configurable LLM providers',
        triggers: {
          en: ['screening', 'inclusion criteria', 'exclusion criteria', 'relevance scoring', 'PRISMA screening'],
          ko: ['스크리닝', '포함 기준', '제외 기준', '관련성 평가', 'PRISMA 스크리닝'],
        },
        capabilities: [
          'AI-PRISMA 6-dimension relevance scoring',
          'Configurable LLM providers (Groq, Claude, Ollama)',
          'Title/abstract screening with threshold management',
          'Exclusion reason tracking and categorization',
          'Human validation sampling for inter-rater reliability',
        ],
        vsProcess: 'Screening criteria validated at checkpoint before AI scoring begins',
        example: {
          input: '"Screen 1,890 papers for relevance to AI chatbot language learning"',
          output: '🔴 CP_SCREENING_CRITERIA → Define inclusion/exclusion → Groq LLM scores papers → Auto-include: 245 (score>40) | Auto-exclude: 1,420 (score<20) | Manual review: 225 (borderline)',
        },
      },
      {
        id: 'I3',
        name: 'RAG Builder',
        icon: 'database',
        color: '#45b7d1',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'None',
        checkpointLevel: 'Recommended',
        vsLevel: 'None',
        purpose: 'Construct vector databases from collected PDFs using local embeddings for zero-cost semantic search, with parallel document processing for large corpora (absorbed B5)',
        triggers: {
          en: ['RAG', 'vector database', 'embeddings', 'ChromaDB', 'semantic search', 'parallel processing'],
          ko: ['RAG', '벡터 데이터베이스', '임베딩', '크로마DB', '의미론적 검색', '병렬 처리'],
        },
        capabilities: [
          'PDF text extraction with PyMuPDF and OCR fallback',
          'Local embedding generation (sentence-transformers, zero cost)',
          'ChromaDB vector database construction',
          'Configurable chunk size and overlap settings',
          'Ingestion logging and quality validation',
          'Parallel document processing for large-scale corpora (absorbed B5)',
        ],
        vsProcess: 'Direct execution — validates PDF collection completeness before building',
        example: {
          input: '"Build RAG system from 180 downloaded PDFs"',
          output: 'Extract text from 180 PDFs (parallel processing) → Generate embeddings (local, $0 cost) → Create ChromaDB index → 15,400 chunks indexed → Ready for semantic queries',
        },
      },
    ],

    paradigmCoverage: 'Pipeline Coverage',
    paradigmText: 'Knowledge Repository (15K-20K papers, 50% threshold) and Systematic Review (50-300 papers, 90% threshold)',

    integrationTitle: 'Integration with Other Categories',
    integrationPoints: [
      'Category A (Foundation): Research question from A1 drives search strategy',
      'Category B (Evidence): B1 literature review strategy informs query design',
      'Category C (Design): C5 meta-analysis protocol feeds Stage 3 configuration',
      'Category G (Communication): G2 Publication Specialist validates PRISMA checklist compliance at each stage',
    ],

    checkpointInfo: 'Checkpoint Information',
    checkpointText: 'I1 (Paper Retrieval) requires CP_DATABASE_SELECTION (🔴 REQUIRED) before fetching. I2 (Screening) requires CP_SCREENING_CRITERIA (🔴 REQUIRED) before AI scoring begins. These ensure researcher control over critical pipeline decisions.',

    bestPractices: 'Best Practices',
    practices: [
      'Use all available databases: Maximize coverage by combining open access (3) and institutional (2) sources',
      'Validate screening criteria: Have domain expert review inclusion/exclusion criteria before AI screening',
      'Monitor PDF retrieval rates: Expect 50-60% success; supplement with manual retrieval for critical papers',
      'Test RAG queries: Verify vector database quality with known-answer queries before full analysis',
    ],

    autoTrigger: 'Auto-Trigger Examples',
    autoTriggerExamples: [
      {
        userInput: '"I want to do a systematic review on AI in education"',
        detected: 'Keywords: "systematic review" → Triggers I0 (Pipeline Orchestrator)',
        execution: 'I0 initializes project → Stage 1 conversation → Validates research scope → Proceeds to Stage 2',
      },
      {
        userInput: '"Fetch papers from Semantic Scholar and OpenAlex about chatbot learning"',
        detected: 'Keywords: "fetch papers", "Semantic Scholar", "OpenAlex" → Triggers I1 (Paper Retrieval)',
        execution: '🔴 CP_DATABASE_SELECTION → I1 validates APIs → Parallel fetch → Deduplication → Results CSV',
      },
    ],
  },
  ko: {
    back: '에이전트로 돌아가기',
    title: '카테고리 I: 체계적 문헌고찰 에이전트',
    subtitle: 'AI 지원 스크리닝 및 RAG를 통한 PRISMA 2020 파이프라인 자동화',
    description: '체계적 문헌고찰 에이전트는 PRISMA 2020 문헌 검토 워크플로우를 완전히 자동화합니다. 다중 데이터베이스 논문 검색부터 AI 지원 스크리닝, 벡터 데이터베이스 구축까지 기술적 복잡성을 처리하여 연구자가 종합에 집중할 수 있도록 합니다.',

    principleTitle: '핵심 원칙',
    principleText: '자동화되지만 투명한 — 모든 결정은 기록되고, 모든 제외는 정당화되며, 모든 단계는 PRISMA 2020 지침을 따릅니다',

    agents: [
      {
        id: 'I0',
        name: 'SR 파이프라인 오케스트레이터',
        icon: 'workflow',
        color: '#00bcd4',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'None',
        purpose: '7단계 체계적 문헌고찰 파이프라인 조정, 단계 전환 및 검증 관리',
        triggers: {
          en: ['systematic review', 'PRISMA', 'literature review automation', 'pipeline'],
          ko: ['체계적 문헌고찰', '프리즈마', '문헌고찰 자동화', '파이프라인'],
        },
        capabilities: [
          '단계별 파이프라인 조정 (7단계)',
          '단계 전환 전 전제조건 검증',
          '프로젝트 초기화 및 설정 관리',
          '진행 상황 추적 및 상태 보고',
          'PRISMA 흐름도 생성',
        ],
        vsProcess: '직접 오케스트레이션 — 파이프라인 조정에 VS 불필요',
        example: {
          input: '"교육에서의 AI에 대한 체계적 문헌고찰을 하고 싶어요"',
          output: '프로젝트 초기화 → 1단계: 연구 영역 설정 → 범위 검증 → 2단계: 쿼리 설계 → 체크포인트와 함께 모든 7단계 진행',
        },
      },
      {
        id: 'I1',
        name: '논문 검색 에이전트',
        icon: 'search',
        color: '#4ecdc4',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_DATABASE_SELECTION',
        checkpointLevel: 'REQUIRED',
        vsLevel: 'None',
        purpose: '병렬 쿼리와 중복 제거를 통한 다중 학술 데이터베이스에서 논문 검색',
        triggers: {
          en: ['fetch papers', 'database search', 'paper retrieval', 'Semantic Scholar', 'OpenAlex', 'arXiv'],
          ko: ['논문 검색', '데이터베이스 검색', '논문 수집', '시맨틱 스콜라', '오픈알렉스'],
        },
        capabilities: [
          '다중 데이터베이스 병렬 쿼리 (Semantic Scholar, OpenAlex, arXiv)',
          '기관 데이터베이스 지원 (Scopus, Web of Science)',
          'DOI 기반 및 제목 유사성 중복 제거',
          'API 키 검증 및 속도 제한 관리',
          'PDF URL 추출 및 가용성 확인',
        ],
        vsProcess: '실행 전 체크포인트에서 데이터베이스 선택 검증',
        example: {
          input: '"2020-2024년 언어 학습에서의 AI 챗봇에 대한 논문 검색"',
          output: '🔴 CP_DATABASE_SELECTION → 사용자가 데이터베이스 선택 → 병렬 검색: Semantic Scholar (1,200개) + OpenAlex (980개) + arXiv (340개) → 중복 제거: 1,890개 고유 논문',
        },
      },
      {
        id: 'I2',
        name: '스크리닝 어시스턴트',
        icon: 'filter',
        color: '#9b59b6',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_SCREENING_CRITERIA',
        checkpointLevel: 'REQUIRED',
        vsLevel: 'None',
        purpose: '구성 가능한 LLM 제공자를 사용한 AI 지원 PRISMA 6차원 스크리닝',
        triggers: {
          en: ['screening', 'inclusion criteria', 'exclusion criteria', 'relevance scoring', 'PRISMA screening'],
          ko: ['스크리닝', '포함 기준', '제외 기준', '관련성 평가', 'PRISMA 스크리닝'],
        },
        capabilities: [
          'AI-PRISMA 6차원 관련성 점수 매기기',
          '구성 가능한 LLM 제공자 (Groq, Claude, Ollama)',
          '임계값 관리를 통한 제목/초록 스크리닝',
          '제외 사유 추적 및 분류',
          '평가자 간 신뢰도를 위한 인간 검증 샘플링',
        ],
        vsProcess: 'AI 점수 매기기 시작 전 체크포인트에서 스크리닝 기준 검증',
        example: {
          input: '"AI 챗봇 언어 학습에 대한 1,890편의 논문 스크리닝"',
          output: '🔴 CP_SCREENING_CRITERIA → 포함/제외 기준 정의 → Groq LLM 점수 매기기 → 자동 포함: 245편 (점수>40) | 자동 제외: 1,420편 (점수<20) | 수동 검토: 225편 (경계선)',
        },
      },
      {
        id: 'I3',
        name: 'RAG 빌더',
        icon: 'database',
        color: '#45b7d1',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'None',
        checkpointLevel: 'Recommended',
        vsLevel: 'None',
        purpose: '무료 의미론적 검색을 위한 로컬 임베딩을 사용하여 수집된 PDF에서 벡터 데이터베이스 구축, 대규모 코퍼스를 위한 병렬 문서 처리 (B5 흡수)',
        triggers: {
          en: ['RAG', 'vector database', 'embeddings', 'ChromaDB', 'semantic search', 'parallel processing'],
          ko: ['RAG', '벡터 데이터베이스', '임베딩', '크로마DB', '의미론적 검색', '병렬 처리'],
        },
        capabilities: [
          'PyMuPDF 및 OCR 폴백을 사용한 PDF 텍스트 추출',
          '로컬 임베딩 생성 (sentence-transformers, 무료)',
          'ChromaDB 벡터 데이터베이스 구축',
          '구성 가능한 청크 크기 및 오버랩 설정',
          '수집 로깅 및 품질 검증',
          '대규모 코퍼스를 위한 병렬 문서 처리 (B5 흡수)',
        ],
        vsProcess: '직접 실행 — 구축 전 PDF 수집 완전성 검증',
        example: {
          input: '"180개 다운로드된 PDF에서 RAG 시스템 구축"',
          output: '180개 PDF에서 텍스트 추출 (병렬 처리) → 임베딩 생성 (로컬, $0 비용) → ChromaDB 인덱스 생성 → 15,400개 청크 인덱싱 → 의미론적 쿼리 준비 완료',
        },
      },
    ],

    paradigmCoverage: '파이프라인 적용 범위',
    paradigmText: '지식 저장소 (15K-20K 논문, 50% 임계값) 및 체계적 문헌고찰 (50-300편, 90% 임계값)',

    integrationTitle: '다른 카테고리와의 통합',
    integrationPoints: [
      '카테고리 A (기초): A1의 연구 질문이 검색 전략을 주도',
      '카테고리 B (근거): B1 문헌 검토 전략이 쿼리 설계에 정보 제공',
      '카테고리 C (설계): C5 메타분석 프로토콜이 3단계 구성에 피드',
      '카테고리 G (커뮤니케이션): G2 출판 전문가가 각 단계에서 PRISMA 체크리스트 준수 검증',
    ],

    checkpointInfo: '체크포인트 정보',
    checkpointText: 'I1 (논문 검색)은 검색 전 CP_DATABASE_SELECTION (🔴 필수)이 필요합니다. I2 (스크리닝)는 AI 점수 매기기 시작 전 CP_SCREENING_CRITERIA (🔴 필수)가 필요합니다. 이는 중요한 파이프라인 결정에 대한 연구자 통제를 보장합니다.',

    bestPractices: '모범 사례',
    practices: [
      '사용 가능한 모든 데이터베이스 사용: 오픈 액세스(3개)와 기관(2개) 소스를 결합하여 커버리지 극대화',
      '스크리닝 기준 검증: AI 스크리닝 전 도메인 전문가의 포함/제외 기준 검토',
      'PDF 검색률 모니터링: 50-60% 성공 예상; 중요 논문은 수동 검색으로 보충',
      'RAG 쿼리 테스트: 전체 분석 전 알려진 답변 쿼리로 벡터 데이터베이스 품질 확인',
    ],

    autoTrigger: '자동 트리거 예시',
    autoTriggerExamples: [
      {
        userInput: '"교육에서의 AI에 대한 체계적 문헌고찰을 하고 싶어요"',
        detected: '키워드: "체계적 문헌고찰" → I0 (파이프라인 오케스트레이터) 트리거',
        execution: 'I0 프로젝트 초기화 → 1단계 대화 → 연구 범위 검증 → 2단계로 진행',
      },
      {
        userInput: '"Semantic Scholar와 OpenAlex에서 챗봇 학습에 대한 논문 검색"',
        detected: '키워드: "논문 검색", "Semantic Scholar", "OpenAlex" → I1 (논문 검색) 트리거',
        execution: '🔴 CP_DATABASE_SELECTION → I1 API 검증 → 병렬 검색 → 중복 제거 → 결과 CSV',
      },
    ],
  },
};

const iconMap = {
  workflow: Workflow,
  search: Search,
  filter: Filter,
  database: Database,
  alertCircle: AlertCircle,
  checkCircle2: CheckCircle2,
  clock: Clock,
};

export default function SystematicReviewAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-black text-void-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back button */}
        <Link
          href={`/${locale}/docs/agents`}
          className="inline-flex items-center gap-2 text-void-gray-400 hover:text-void-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-block px-3 py-1 bg-[#00bcd4]/20 text-[#00bcd4] rounded-full text-sm mb-4">
            Category I
          </div>
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-void-gray-400 mb-6">{t.subtitle}</p>
          <p className="text-void-gray-300 leading-relaxed">{t.description}</p>
        </motion.div>

        {/* Core Principle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-void-gray-900 border border-void-gray-800 rounded-lg p-6 mb-12"
        >
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#00bcd4]" />
            {t.principleTitle}
          </h2>
          <p className="text-void-gray-300">{t.principleText}</p>
        </motion.div>

        {/* Agents */}
        <div className="space-y-8 mb-12">
          {t.agents.map((agent, index) => {
            const Icon = iconMap[agent.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-void-gray-900 border border-void-gray-800 rounded-lg overflow-hidden hover:border-[#00bcd4]/50 transition-colors"
              >
                {/* Agent header */}
                <div className="p-6 border-b border-void-gray-800">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${agent.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: agent.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-semibold">{agent.name}</h3>
                        <span className="px-2 py-1 bg-void-gray-800 text-void-gray-400 rounded text-xs">
                          {agent.id}
                        </span>
                      </div>
                      <p className="text-void-gray-300 mb-4">{agent.purpose}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                          {agent.model}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                          {agent.tier}
                        </span>
                        {agent.checkpoint !== 'None' && (
                          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                            🔴 {agent.checkpoint}
                          </span>
                        )}
                        <span className="px-3 py-1 bg-void-gray-800 text-void-gray-400 rounded-full text-sm">
                          {agent.vsLevel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Agent details */}
                <div className="p-6 space-y-4">
                  {/* Triggers */}
                  <div>
                    <h4 className="text-sm font-semibold text-void-gray-400 mb-2">
                      {locale === 'en' ? 'Trigger Keywords' : '트리거 키워드'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.triggers.en.map((trigger, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-void-gray-800 text-void-gray-300 rounded text-sm"
                        >
                          {trigger}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <h4 className="text-sm font-semibold text-void-gray-400 mb-2">
                      {locale === 'en' ? 'Capabilities' : '기능'}
                    </h4>
                    <ul className="space-y-1">
                      {agent.capabilities.map((cap, i) => (
                        <li key={i} className="text-void-gray-300 text-sm flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00bcd4] mt-0.5 flex-shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* VS Process */}
                  <div>
                    <h4 className="text-sm font-semibold text-void-gray-400 mb-2">
                      {locale === 'en' ? 'VS Process' : 'VS 프로세스'}
                    </h4>
                    <p className="text-void-gray-300 text-sm">{agent.vsProcess}</p>
                  </div>

                  {/* Example */}
                  <div className="bg-void-gray-950 rounded p-4">
                    <h4 className="text-sm font-semibold text-void-gray-400 mb-2">
                      {locale === 'en' ? 'Example' : '예시'}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-void-gray-500">Input:</span>{' '}
                        <span className="text-void-gray-300">{agent.example.input}</span>
                      </div>
                      <div>
                        <span className="text-void-gray-500">Output:</span>{' '}
                        <span className="text-void-gray-300">{agent.example.output}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pipeline Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-void-gray-900 border border-void-gray-800 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-3">{t.paradigmCoverage}</h2>
          <p className="text-void-gray-300">{t.paradigmText}</p>
        </motion.div>

        {/* Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-void-gray-900 border border-void-gray-800 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">{t.integrationTitle}</h2>
          <ul className="space-y-2">
            {t.integrationPoints.map((point, i) => (
              <li key={i} className="text-void-gray-300 text-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00bcd4] mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Checkpoint Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-400" />
            {t.checkpointInfo}
          </h2>
          <p className="text-void-gray-300">{t.checkpointText}</p>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-void-gray-900 border border-void-gray-800 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">{t.bestPractices}</h2>
          <ul className="space-y-2">
            {t.practices.map((practice, i) => (
              <li key={i} className="text-void-gray-300 text-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00bcd4] mt-0.5 flex-shrink-0" />
                <span>{practice}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Auto-Trigger Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-void-gray-900 border border-void-gray-800 rounded-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-4">{t.autoTrigger}</h2>
          <div className="space-y-4">
            {t.autoTriggerExamples.map((example, i) => (
              <div key={i} className="bg-void-gray-950 rounded p-4">
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-void-gray-500">
                      {locale === 'en' ? 'User Input:' : '사용자 입력:'}
                    </span>{' '}
                    <span className="text-void-gray-300">{example.userInput}</span>
                  </div>
                  <div>
                    <span className="text-void-gray-500">
                      {locale === 'en' ? 'Detected:' : '감지됨:'}
                    </span>{' '}
                    <span className="text-yellow-400">{example.detected}</span>
                  </div>
                  <div>
                    <span className="text-void-gray-500">
                      {locale === 'en' ? 'Execution:' : '실행:'}
                    </span>{' '}
                    <span className="text-void-gray-300">{example.execution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
