'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Compass,
  Users,
  Database,
  Search,
  FileCheck,
  FolderTree,
  AlertCircle,
  CheckCircle2,
  Workflow,
  DollarSign,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Agents',
    title: 'Categories H & I: Specialized Agents',
    subtitle: 'Advanced qualitative methodologies and systematic review automation',
    description: 'Specialized agents support advanced research paradigms and automated PRISMA 2020 systematic literature reviews with cost-optimized workflows.',

    // Category H
    categoryHTitle: 'Category H: Specialized Research Paradigms',
    categoryHDescription: 'Advanced qualitative and participatory research methodologies',
    categoryHColor: '#e91e63',

    categoryHAgents: [
      {
        id: 'H1',
        name: 'Ethnographic Research Advisor',
        icon: 'compass',
        color: '#e91e63',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_METHODOLOGY_APPROVAL',
        checkpointLevel: 'REQUIRED',
        purpose: 'Guide fieldwork planning, cultural immersion strategies, and thick description development',
        triggers: {
          en: ['ethnography', 'fieldwork', 'participant observation', 'thick description', 'cultural immersion'],
          ko: ['민족지학', '현장연구', '참여관찰', '두꺼운 기술', '문화적 몰입'],
        },
        capabilities: [
          'Fieldwork protocol development',
          'Participant observation strategies',
          'Thick description guidance (Geertzian approach)',
          'Cultural sensitivity and reflexivity',
          'Field note organization and coding',
          'Ethnographic writing techniques',
        ],
        example: {
          input: '"Study AI adoption in K-12 classrooms through ethnography"',
          output: 'Fieldwork plan: 6-month classroom observation | Participant roles: Observer-as-participant | Data: Field notes, interviews, artifacts | Thick description: Capture context (teacher beliefs, school culture, tech policies) | Reflexivity: Document positionality as researcher',
        },
      },
      {
        id: 'H2',
        name: 'Action Research Facilitator',
        icon: 'users',
        color: '#c2185b',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_METHODOLOGY_APPROVAL',
        checkpointLevel: 'REQUIRED',
        purpose: 'Support participatory action research (PAR), community-based participatory research (CBPR), and action research cycles',
        triggers: {
          en: ['action research', 'PAR', 'CBPR', 'participatory research', 'practitioner research', 'action cycles'],
          ko: ['실행연구', '참여적 연구', '현장 연구', '실천가 연구'],
        },
        capabilities: [
          'Action research cycle design (Plan → Act → Observe → Reflect)',
          'Stakeholder engagement and collaboration',
          'Participatory data collection methods',
          'Change documentation and impact assessment',
          'Practitioner-researcher partnerships',
          'Democratic validity and catalytic validity assessment',
        ],
        example: {
          input: '"Teachers and researchers co-design AI literacy curriculum"',
          output: 'Cycle 1: Plan (co-design curriculum) → Act (pilot in 3 classes) → Observe (student engagement) → Reflect (teacher feedback) | Cycle 2: Revise curriculum → Scale to 10 classes → Measure outcomes → Document change | Stakeholder roles: Teachers as co-researchers',
        },
      },
    ],

    // Category I
    categoryITitle: 'Category I: Systematic Review Automation (ScholaRAG)',
    categoryIDescription: 'PRISMA 2020 compliant automated systematic literature reviews with cost-optimized workflows',
    categoryIColor: '#00bcd4',

    categoryIAgents: [
      {
        id: 'I0',
        name: 'ScholaRAG Pipeline Orchestrator',
        icon: 'workflow',
        color: '#00bcd4',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'All SCH_* checkpoints',
        checkpointLevel: 'REQUIRED',
        purpose: 'Coordinate 7-stage PRISMA 2020 pipeline from research question to RAG system',
        triggers: {
          en: ['systematic review', 'PRISMA', 'ScholaRAG', 'literature review automation', 'evidence synthesis'],
          ko: ['체계적 문헌고찰', '프리즈마', '스콜라랙', '문헌고찰 자동화', '증거 종합'],
        },
        capabilities: [
          'Stage 1-7 pipeline coordination',
          'Checkpoint enforcement (4 mandatory checkpoints)',
          'Two project types: knowledge_repository (50% threshold), systematic_review (90% threshold)',
          'Cost optimization with Groq LLM (100x cheaper than Claude)',
          'PRISMA 2020 flow diagram generation',
          'Delegate to I1 (retrieval), I2 (screening), I3 (RAG)',
        ],
        pipelineStages: [
          { stage: 1, name: 'Identification', description: 'Fetch papers from Semantic Scholar, OpenAlex, arXiv' },
          { stage: 2, name: 'Deduplication', description: 'Remove duplicates by DOI, arXiv ID, title similarity' },
          { stage: 3, name: 'Screening', description: 'AI-PRISMA 6-dimension relevance screening' },
          { stage: 4, name: 'PDF Download', description: 'Automated PDF retrieval with retry logic' },
          { stage: 5, name: 'RAG Building', description: 'Vector database construction (ChromaDB)' },
          { stage: 6, name: 'Querying', description: 'Interactive/batch literature review queries' },
          { stage: 7, name: 'PRISMA Diagram', description: 'Generate PRISMA 2020 flow diagram' },
        ],
        example: {
          input: '"Conduct systematic review on AI chatbots for language learning"',
          output: 'Detect: Systematic review → Initialize I0 orchestrator | Stage 1: I1 fetches 500 papers | Stage 2: Dedup → 350 unique | Stage 3: I2 screens → 120 included (90% threshold) | Stage 4-5: I3 downloads PDFs, builds RAG | Stage 6: Query-ready',
        },
      },
      {
        id: 'I1',
        name: 'Paper Retrieval Agent',
        icon: 'search',
        color: '#0097a7',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'SCH_DATABASE_SELECTION',
        checkpointLevel: 'REQUIRED',
        purpose: 'Multi-database paper fetching with rate limiting and deduplication',
        triggers: {
          en: ['fetch papers', 'retrieve papers', 'database search', 'Semantic Scholar', 'OpenAlex', 'arXiv'],
          ko: ['논문 수집', '논문 검색', '데이터베이스 검색', '시맨틱 스칼라', '오픈알렉스'],
        },
        capabilities: [
          'Semantic Scholar API (~40% open access PDF URLs)',
          'OpenAlex API (~50% open access, polite pool)',
          'arXiv API (100% PDF access)',
          'Scopus, Web of Science (institutional access)',
          'Rate limiting and retry logic',
          'Deduplication by DOI, arXiv ID, title similarity',
        ],
        databases: [
          { name: 'Semantic Scholar', coverage: '~40% OA PDFs', api: 'Free, no key required' },
          { name: 'OpenAlex', coverage: '~50% OA', api: 'Free, email for polite pool' },
          { name: 'arXiv', coverage: '100% PDFs', api: 'Free, 3s delay' },
          { name: 'Scopus/WoS', coverage: 'Institutional', api: 'Requires subscription' },
        ],
        example: {
          input: '"AI chatbots language learning 2015-2024"',
          output: 'Query: (chatbot OR agent) AND language learning | Semantic Scholar: 250 papers | OpenAlex: 180 papers | arXiv: 70 papers | Dedup: 500 → 350 unique | PDF URLs: 175 (50% retrieval success)',
        },
      },
      {
        id: 'I2',
        name: 'Screening Assistant',
        icon: 'fileCheck',
        color: '#00838f',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'SCH_SCREENING_CRITERIA',
        checkpointLevel: 'REQUIRED',
        purpose: 'AI-PRISMA 6-dimension screening with Groq LLM (100x cheaper than Claude)',
        triggers: {
          en: ['screen papers', 'PRISMA screening', 'inclusion criteria', 'relevance assessment'],
          ko: ['논문 스크리닝', '선별', '포함 기준', '관련성 평가'],
        },
        capabilities: [
          'AI-PRISMA 6-dimension scoring (Relevance, Methodology, Quality, Scope, Outcome, Accessibility)',
          'Groq LLM integration (llama-3.3-70b-versatile)',
          'Two modes: knowledge_repository (50% threshold), systematic_review (90% threshold)',
          'Cost: $0.01 per 100 papers (vs. $1.00 for Claude)',
          'JSON output with justifications',
        ],
        costComparison: [
          { provider: 'Groq (llama-3.3-70b)', cost: '$0.01 / 100 papers', speed: 'Fast' },
          { provider: 'Claude (haiku-4-5)', cost: '$0.15 / 100 papers', speed: 'Medium' },
          { provider: 'Ollama (local)', cost: '$0 (local)', speed: 'Slow' },
        ],
        example: {
          input: '"Screen 350 papers, systematic_review mode (90% threshold)"',
          output: 'Screening: 350 papers → 6-dimension scoring | Pass threshold: 120 papers (34%) | Groq cost: $0.035 total | Time: ~8 minutes | Output: JSON with scores + justifications',
        },
      },
      {
        id: 'I3',
        name: 'RAG Builder',
        icon: 'database',
        color: '#006064',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'SCH_RAG_READINESS',
        checkpointLevel: 'RECOMMENDED',
        purpose: 'Vector database construction with local embeddings (zero cost)',
        triggers: {
          en: ['build RAG', 'vector database', 'embed documents', 'ChromaDB', 'FAISS'],
          ko: ['RAG 구축', '벡터 DB', '문서 임베딩', '크로마DB'],
        },
        capabilities: [
          'PDF download with retry logic',
          'Token-based chunking (tiktoken, 500 tokens/chunk)',
          'Local embeddings: sentence-transformers/all-MiniLM-L6-v2 ($0 cost)',
          'ChromaDB vector storage',
          'Metadata preservation (title, authors, year, DOI)',
          'Query interface for literature review',
        ],
        ragCostBreakdown: [
          { component: 'Embeddings', provider: 'Local (MiniLM)', cost: '$0' },
          { component: 'Vector DB', provider: 'ChromaDB (local)', cost: '$0' },
          { component: 'Queries', provider: 'Groq LLM', cost: '$0.02 / 100 queries' },
        ],
        example: {
          input: '"Build RAG from 120 screened papers"',
          output: 'PDF download: 120 papers, 85 successful (71%) | Chunking: 1,200 chunks (avg 10/paper) | Embeddings: Local MiniLM, $0 cost | ChromaDB: Vector storage complete | Query-ready for systematic review',
        },
      },
    ],

    // Checkpoints
    checkpointTitle: 'Checkpoint Integration',
    checkpointDescription: 'Specialized agents enforce critical decision points:',
    categoryHCheckpoints: [
      { id: 'CP_METHODOLOGY_APPROVAL', level: 'REQUIRED', agents: 'H1, H2', description: 'Ethical review complete for specialized paradigms' },
    ],
    categoryICheckpoints: [
      { id: 'SCH_DATABASE_SELECTION', level: 'REQUIRED', agent: 'I1', description: 'Database selection approved before retrieval' },
      { id: 'SCH_SCREENING_CRITERIA', level: 'REQUIRED', agent: 'I2', description: 'PRISMA inclusion/exclusion criteria approved' },
      { id: 'SCH_RAG_READINESS', level: 'RECOMMENDED', agent: 'I3', description: 'RAG system validated before queries' },
      { id: 'SCH_PRISMA_GENERATION', level: 'OPTIONAL', agent: 'I0', description: 'PRISMA flow diagram generation' },
    ],

    // ScholaRAG Pipeline Diagram
    pipelineTitle: 'ScholaRAG 7-Stage Pipeline',
    pipelineDescription: 'Automated PRISMA 2020 workflow from research question to RAG system:',

    // Cost optimization
    costTitle: 'Cost Optimization',
    costDescription: 'ScholaRAG achieves 100x cost reduction vs. Claude-only approach:',
    costBreakdown: [
      { task: 'Screening (500 papers)', provider: 'Groq (llama-3.3-70b)', cost: '$0.05' },
      { task: 'RAG Queries (100 queries)', provider: 'Groq', cost: '$0.02' },
      { task: 'Embeddings', provider: 'Local (MiniLM)', cost: '$0.00' },
      { task: 'Vector DB', provider: 'ChromaDB (local)', cost: '$0.00' },
    ],
    totalCost: 'Total 500-paper systematic review: ~$0.07',

    // Typical workflows
    workflowTitle: 'Typical Workflows',
    categoryHWorkflow: [
      { agent: 'H1', action: 'Plan ethnographic fieldwork', checkpoint: 'CP_METHODOLOGY_APPROVAL', parallel: false },
      { agent: 'H2', action: 'Design action research cycles', checkpoint: 'CP_METHODOLOGY_APPROVAL', parallel: false },
    ],
    categoryIWorkflow: [
      { agent: 'I0', action: 'Initialize systematic review', checkpoint: 'None', parallel: false },
      { agent: 'I1', action: 'Fetch papers from databases', checkpoint: 'SCH_DATABASE_SELECTION', parallel: false },
      { agent: 'I2', action: 'Screen papers (AI-PRISMA)', checkpoint: 'SCH_SCREENING_CRITERIA', parallel: false },
      { agent: 'I3', action: 'Build RAG system', checkpoint: 'SCH_RAG_READINESS', parallel: false },
      { agent: 'I0', action: 'Generate PRISMA diagram', checkpoint: 'SCH_PRISMA_GENERATION', parallel: false },
    ],

    // CTA
    ctaTitle: 'Advanced Research Support',
    ctaDescription: 'Categories H & I support specialized paradigms and automated systematic reviews.',
    ctaButton: 'Explore All Agents',
  },
  ko: {
    back: '에이전트로 돌아가기',
    title: '카테고리 H & I: 전문 에이전트',
    subtitle: '고급 질적 방법론 및 체계적 문헌고찰 자동화',
    description: '전문 에이전트는 고급 연구 패러다임과 비용 최적화된 워크플로를 통한 PRISMA 2020 체계적 문헌고찰 자동화를 지원합니다.',

    categoryHTitle: '카테고리 H: 전문 연구 패러다임',
    categoryHDescription: '고급 질적 및 참여적 연구 방법론',
    categoryHColor: '#e91e63',

    categoryHAgents: [
      {
        id: 'H1',
        name: '민족지학 연구 조언자',
        icon: 'compass',
        color: '#e91e63',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_METHODOLOGY_APPROVAL',
        checkpointLevel: 'REQUIRED',
        purpose: '현장연구 계획, 문화적 몰입 전략, 두꺼운 기술 개발 안내',
        triggers: {
          en: ['ethnography', 'fieldwork', 'participant observation', 'thick description', 'cultural immersion'],
          ko: ['민족지학', '현장연구', '참여관찰', '두꺼운 기술', '문화적 몰입'],
        },
        capabilities: [
          '현장연구 프로토콜 개발',
          '참여관찰 전략',
          '두꺼운 기술 지침 (Geertz 접근법)',
          '문화적 민감성 및 성찰성',
          '현장 노트 구성 및 코딩',
          '민족지학적 글쓰기 기법',
        ],
        example: {
          input: '"민족지학을 통해 K-12 교실의 AI 채택 연구"',
          output: '현장연구 계획: 6개월 교실 관찰 | 참여자 역할: 관찰자-참여자 | 데이터: 현장 노트, 인터뷰, 인공물 | 두꺼운 기술: 맥락 포착 (교사 신념, 학교 문화, 기술 정책) | 성찰성: 연구자 위치성 문서화',
        },
      },
      {
        id: 'H2',
        name: '실행연구 촉진자',
        icon: 'users',
        color: '#c2185b',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_METHODOLOGY_APPROVAL',
        checkpointLevel: 'REQUIRED',
        purpose: '참여적 실행연구(PAR), 지역사회 기반 참여 연구(CBPR), 실행연구 순환 지원',
        triggers: {
          en: ['action research', 'PAR', 'CBPR', 'participatory research', 'practitioner research', 'action cycles'],
          ko: ['실행연구', '참여적 연구', '현장 연구', '실천가 연구'],
        },
        capabilities: [
          '실행연구 순환 설계 (계획 → 실행 → 관찰 → 성찰)',
          '이해관계자 참여 및 협력',
          '참여적 데이터 수집 방법',
          '변화 문서화 및 영향 평가',
          '실천가-연구자 파트너십',
          '민주적 타당도 및 촉매적 타당도 평가',
        ],
        example: {
          input: '"교사와 연구자가 AI 리터러시 커리큘럼 공동 설계"',
          output: '순환 1: 계획 (커리큘럼 공동 설계) → 실행 (3개 학급 시범) → 관찰 (학생 참여) → 성찰 (교사 피드백) | 순환 2: 커리큘럼 수정 → 10개 학급으로 확대 → 결과 측정 → 변화 문서화 | 이해관계자 역할: 공동 연구자로서의 교사',
        },
      },
    ],

    categoryITitle: '카테고리 I: 체계적 문헌고찰 자동화 (ScholaRAG)',
    categoryIDescription: '비용 최적화된 워크플로를 통한 PRISMA 2020 준수 자동화 체계적 문헌고찰',
    categoryIColor: '#00bcd4',

    categoryIAgents: [
      {
        id: 'I0',
        name: 'ScholaRAG 파이프라인 오케스트레이터',
        icon: 'workflow',
        color: '#00bcd4',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: '모든 SCH_* 체크포인트',
        checkpointLevel: 'REQUIRED',
        purpose: '연구 질문에서 RAG 시스템까지 7단계 PRISMA 2020 파이프라인 조정',
        triggers: {
          en: ['systematic review', 'PRISMA', 'ScholaRAG', 'literature review automation', 'evidence synthesis'],
          ko: ['체계적 문헌고찰', '프리즈마', '스콜라랙', '문헌고찰 자동화', '증거 종합'],
        },
        capabilities: [
          '1-7단계 파이프라인 조정',
          '체크포인트 강제 (4개 필수 체크포인트)',
          '두 가지 프로젝트 유형: knowledge_repository (50% 임계값), systematic_review (90% 임계값)',
          'Groq LLM을 통한 비용 최적화 (Claude보다 100배 저렴)',
          'PRISMA 2020 흐름도 생성',
          'I1 (검색), I2 (스크리닝), I3 (RAG)에 위임',
        ],
        pipelineStages: [
          { stage: 1, name: '식별', description: 'Semantic Scholar, OpenAlex, arXiv에서 논문 가져오기' },
          { stage: 2, name: '중복 제거', description: 'DOI, arXiv ID, 제목 유사성으로 중복 제거' },
          { stage: 3, name: '스크리닝', description: 'AI-PRISMA 6차원 관련성 스크리닝' },
          { stage: 4, name: 'PDF 다운로드', description: '재시도 로직을 통한 자동 PDF 검색' },
          { stage: 5, name: 'RAG 구축', description: '벡터 데이터베이스 구성 (ChromaDB)' },
          { stage: 6, name: '쿼리', description: '대화형/일괄 문헌고찰 쿼리' },
          { stage: 7, name: 'PRISMA 다이어그램', description: 'PRISMA 2020 흐름도 생성' },
        ],
        example: {
          input: '"언어 학습을 위한 AI 챗봇에 대한 체계적 문헌고찰 수행"',
          output: '감지: 체계적 문헌고찰 → I0 오케스트레이터 초기화 | 1단계: I1이 500편 논문 가져옴 | 2단계: 중복 제거 → 350편 고유 | 3단계: I2 스크리닝 → 120편 포함 (90% 임계값) | 4-5단계: I3가 PDF 다운로드, RAG 구축 | 6단계: 쿼리 준비',
        },
      },
      {
        id: 'I1',
        name: '논문 검색 에이전트',
        icon: 'search',
        color: '#0097a7',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'SCH_DATABASE_SELECTION',
        checkpointLevel: 'REQUIRED',
        purpose: '속도 제한 및 중복 제거를 통한 다중 데이터베이스 논문 가져오기',
        triggers: {
          en: ['fetch papers', 'retrieve papers', 'database search', 'Semantic Scholar', 'OpenAlex', 'arXiv'],
          ko: ['논문 수집', '논문 검색', '데이터베이스 검색', '시맨틱 스칼라', '오픈알렉스'],
        },
        capabilities: [
          'Semantic Scholar API (~40% 오픈 액세스 PDF URL)',
          'OpenAlex API (~50% 오픈 액세스, polite pool)',
          'arXiv API (100% PDF 액세스)',
          'Scopus, Web of Science (기관 액세스)',
          '속도 제한 및 재시도 로직',
          'DOI, arXiv ID, 제목 유사성으로 중복 제거',
        ],
        databases: [
          { name: 'Semantic Scholar', coverage: '~40% OA PDF', api: '무료, 키 불필요' },
          { name: 'OpenAlex', coverage: '~50% OA', api: '무료, polite pool용 이메일' },
          { name: 'arXiv', coverage: '100% PDF', api: '무료, 3초 지연' },
          { name: 'Scopus/WoS', coverage: '기관', api: '구독 필요' },
        ],
        example: {
          input: '"AI 챗봇 언어 학습 2015-2024"',
          output: '쿼리: (chatbot OR agent) AND language learning | Semantic Scholar: 250편 | OpenAlex: 180편 | arXiv: 70편 | 중복 제거: 500 → 350편 고유 | PDF URL: 175편 (50% 검색 성공)',
        },
      },
      {
        id: 'I2',
        name: '스크리닝 도우미',
        icon: 'fileCheck',
        color: '#00838f',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'SCH_SCREENING_CRITERIA',
        checkpointLevel: 'REQUIRED',
        purpose: 'Groq LLM을 통한 AI-PRISMA 6차원 스크리닝 (Claude보다 100배 저렴)',
        triggers: {
          en: ['screen papers', 'PRISMA screening', 'inclusion criteria', 'relevance assessment'],
          ko: ['논문 스크리닝', '선별', '포함 기준', '관련성 평가'],
        },
        capabilities: [
          'AI-PRISMA 6차원 점수화 (관련성, 방법론, 품질, 범위, 결과, 접근성)',
          'Groq LLM 통합 (llama-3.3-70b-versatile)',
          '두 가지 모드: knowledge_repository (50% 임계값), systematic_review (90% 임계값)',
          '비용: 100편당 $0.01 (Claude는 $1.00)',
          '정당화가 포함된 JSON 출력',
        ],
        costComparison: [
          { provider: 'Groq (llama-3.3-70b)', cost: '$0.01 / 100편', speed: '빠름' },
          { provider: 'Claude (haiku-4-5)', cost: '$0.15 / 100편', speed: '보통' },
          { provider: 'Ollama (로컬)', cost: '$0 (로컬)', speed: '느림' },
        ],
        example: {
          input: '"350편 논문 스크리닝, systematic_review 모드 (90% 임계값)"',
          output: '스크리닝: 350편 → 6차원 점수화 | 임계값 통과: 120편 (34%) | Groq 비용: 총 $0.035 | 시간: ~8분 | 출력: 점수 + 정당화가 포함된 JSON',
        },
      },
      {
        id: 'I3',
        name: 'RAG 빌더',
        icon: 'database',
        color: '#006064',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'SCH_RAG_READINESS',
        checkpointLevel: 'RECOMMENDED',
        purpose: '로컬 임베딩을 통한 벡터 데이터베이스 구성 (비용 없음)',
        triggers: {
          en: ['build RAG', 'vector database', 'embed documents', 'ChromaDB', 'FAISS'],
          ko: ['RAG 구축', '벡터 DB', '문서 임베딩', '크로마DB'],
        },
        capabilities: [
          '재시도 로직을 통한 PDF 다운로드',
          '토큰 기반 청킹 (tiktoken, 청크당 500 토큰)',
          '로컬 임베딩: sentence-transformers/all-MiniLM-L6-v2 ($0 비용)',
          'ChromaDB 벡터 저장',
          '메타데이터 보존 (제목, 저자, 연도, DOI)',
          '문헌고찰을 위한 쿼리 인터페이스',
        ],
        ragCostBreakdown: [
          { component: '임베딩', provider: '로컬 (MiniLM)', cost: '$0' },
          { component: '벡터 DB', provider: 'ChromaDB (로컬)', cost: '$0' },
          { component: '쿼리', provider: 'Groq LLM', cost: '100개 쿼리당 $0.02' },
        ],
        example: {
          input: '"스크리닝된 120편 논문에서 RAG 구축"',
          output: 'PDF 다운로드: 120편, 85편 성공 (71%) | 청킹: 1,200개 청크 (평균 10개/논문) | 임베딩: 로컬 MiniLM, $0 비용 | ChromaDB: 벡터 저장 완료 | 체계적 문헌고찰을 위한 쿼리 준비',
        },
      },
    ],

    checkpointTitle: '체크포인트 통합',
    checkpointDescription: '전문 에이전트는 중요한 결정 지점을 강제합니다:',
    categoryHCheckpoints: [
      { id: 'CP_METHODOLOGY_APPROVAL', level: 'REQUIRED', agents: 'H1, H2', description: '전문 패러다임에 대한 윤리 검토 완료' },
    ],
    categoryICheckpoints: [
      { id: 'SCH_DATABASE_SELECTION', level: 'REQUIRED', agent: 'I1', description: '검색 전 데이터베이스 선택 승인됨' },
      { id: 'SCH_SCREENING_CRITERIA', level: 'REQUIRED', agent: 'I2', description: 'PRISMA 포함/제외 기준 승인됨' },
      { id: 'SCH_RAG_READINESS', level: 'RECOMMENDED', agent: 'I3', description: '쿼리 전 RAG 시스템 검증됨' },
      { id: 'SCH_PRISMA_GENERATION', level: 'OPTIONAL', agent: 'I0', description: 'PRISMA 흐름도 생성' },
    ],

    pipelineTitle: 'ScholaRAG 7단계 파이프라인',
    pipelineDescription: '연구 질문에서 RAG 시스템까지 자동화된 PRISMA 2020 워크플로:',

    costTitle: '비용 최적화',
    costDescription: 'ScholaRAG는 Claude 전용 접근법 대비 100배 비용 절감 달성:',
    costBreakdown: [
      { task: '스크리닝 (500편)', provider: 'Groq (llama-3.3-70b)', cost: '$0.05' },
      { task: 'RAG 쿼리 (100개)', provider: 'Groq', cost: '$0.02' },
      { task: '임베딩', provider: '로컬 (MiniLM)', cost: '$0.00' },
      { task: '벡터 DB', provider: 'ChromaDB (로컬)', cost: '$0.00' },
    ],
    totalCost: '총 500편 체계적 문헌고찰: ~$0.07',

    workflowTitle: '일반적인 워크플로',
    categoryHWorkflow: [
      { agent: 'H1', action: '민족지학 현장연구 계획', checkpoint: 'CP_METHODOLOGY_APPROVAL', parallel: false },
      { agent: 'H2', action: '실행연구 순환 설계', checkpoint: 'CP_METHODOLOGY_APPROVAL', parallel: false },
    ],
    categoryIWorkflow: [
      { agent: 'I0', action: '체계적 문헌고찰 초기화', checkpoint: '없음', parallel: false },
      { agent: 'I1', action: '데이터베이스에서 논문 가져오기', checkpoint: 'SCH_DATABASE_SELECTION', parallel: false },
      { agent: 'I2', action: '논문 스크리닝 (AI-PRISMA)', checkpoint: 'SCH_SCREENING_CRITERIA', parallel: false },
      { agent: 'I3', action: 'RAG 시스템 구축', checkpoint: 'SCH_RAG_READINESS', parallel: false },
      { agent: 'I0', action: 'PRISMA 다이어그램 생성', checkpoint: 'SCH_PRISMA_GENERATION', parallel: false },
    ],

    ctaTitle: '고급 연구 지원',
    ctaDescription: '카테고리 H & I는 전문 패러다임과 자동화된 체계적 문헌고찰을 지원합니다.',
    ctaButton: '모든 에이전트 탐색',
  },
};

// Icon mapping
const agentIcons: Record<string, React.ReactNode> = {
  compass: <Compass className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  workflow: <Workflow className="h-6 w-6" />,
  search: <Search className="h-6 w-6" />,
  fileCheck: <FileCheck className="h-6 w-6" />,
  database: <Database className="h-6 w-6" />,
};

const checkpointIcons: Record<string, React.ReactNode> = {
  REQUIRED: <AlertCircle className="h-4 w-4" />,
  RECOMMENDED: <CheckCircle2 className="h-4 w-4" />,
  OPTIONAL: <CheckCircle2 className="h-4 w-4" />,
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } as any },
};

export default function SpecializedAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/agents`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(233, 30, 99, 0.15) 0%, rgba(0, 188, 212, 0.15) 100%)',
            }}
          />

          <div className="flex items-center justify-center gap-4 mb-6 relative z-10">
            <div
              className="inline-flex h-16 w-16 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(233, 30, 99, 0.15)',
                borderColor: 'rgba(233, 30, 99, 0.3)',
                color: '#e91e63',
              }}
            >
              <Compass className="h-8 w-8" />
            </div>
            <div
              className="inline-flex h-16 w-16 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(0, 188, 212, 0.15)',
                borderColor: 'rgba(0, 188, 212, 0.3)',
                color: '#00bcd4',
              }}
            >
              <FolderTree className="h-8 w-8" />
            </div>
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4 bg-gradient-to-r from-[#e91e63] to-[#00bcd4] bg-clip-text text-transparent">
            {t.subtitle}
          </p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>
        </motion.div>

        <div className="void-divider-glow mb-16" />

        {/* Category H */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div
              className="flex h-12 w-12 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(233, 30, 99, 0.15)',
                borderColor: 'rgba(233, 30, 99, 0.3)',
                color: '#e91e63',
              }}
            >
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <h2 className="void-heading-2 text-stellar-core">{t.categoryHTitle}</h2>
              <p className="text-body text-stellar-dim">{t.categoryHDescription}</p>
            </div>
          </div>

          <div className="space-y-8">
            {t.categoryHAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                variants={itemVariants}
                className="p-8 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden group"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${agent.color}15 0%, transparent 50%)`,
                  }}
                />

                {/* Agent header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center border"
                      style={{
                        backgroundColor: `${agent.color}15`,
                        borderColor: `${agent.color}30`,
                        color: agent.color,
                      }}
                    >
                      {agentIcons[agent.icon]}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="void-heading-3 text-stellar-core">{agent.name}</h3>
                        <div
                          className="px-3 py-1 font-mono text-xs font-bold border"
                          style={{
                            color: agent.color,
                            borderColor: `${agent.color}30`,
                            backgroundColor: `${agent.color}10`,
                          }}
                        >
                          {agent.id}
                        </div>
                      </div>
                      <p className="text-body text-stellar-dim">{agent.purpose}</p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-col items-end gap-2">
                    <div
                      className="px-3 py-1 font-mono text-xs uppercase tracking-wider border"
                      style={{
                        color: '#9b59b6',
                        borderColor: 'rgba(155, 89, 182, 0.3)',
                        backgroundColor: 'rgba(155, 89, 182, 0.1)',
                      }}
                    >
                      {agent.tier} • {agent.model}
                    </div>
                    <div
                      className="flex items-center gap-2 px-3 py-1 font-mono text-xs border"
                      style={{
                        color: '#ff6b6b',
                        borderColor: 'rgba(255, 107, 107, 0.3)',
                        backgroundColor: 'rgba(255, 107, 107, 0.1)',
                      }}
                    >
                      {checkpointIcons[agent.checkpointLevel]}
                      <span>{agent.checkpoint}</span>
                    </div>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="mb-6 relative z-10">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                    {locale === 'ko' ? '역량' : 'Capabilities'}
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {agent.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                        <span className="text-stellar-core mt-1">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Example */}
                <div className="relative z-10">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                    {locale === 'ko' ? '예시' : 'Example'}
                  </h4>
                  <div className="void-terminal overflow-hidden">
                    <div className="void-terminal-header">
                      <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                      <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                      <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                      <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                        {locale === 'ko' ? '입력' : 'Input'}
                      </span>
                    </div>
                    <div className="p-4 text-sm text-stellar-bright font-mono">
                      {agent.example.input}
                    </div>
                  </div>
                  <div className="void-terminal overflow-hidden mt-3">
                    <div className="void-terminal-header">
                      <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                      <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                      <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                      <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                        {locale === 'ko' ? '출력' : 'Output'}
                      </span>
                    </div>
                    <div className="p-4 text-sm text-stellar-bright font-mono whitespace-pre-wrap">
                      {agent.example.output}
                    </div>
                  </div>
                </div>

                {/* Triggers */}
                <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                  <span className="text-xs text-stellar-faint uppercase tracking-wider">
                    {locale === 'ko' ? '트리거:' : 'Triggers:'}
                  </span>
                  {agent.triggers.en.map((trigger, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-mono border"
                      style={{
                        color: agent.color,
                        borderColor: `${agent.color}30`,
                        backgroundColor: `${agent.color}08`,
                      }}
                    >
                      {trigger}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* Category I */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div
              className="flex h-12 w-12 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(0, 188, 212, 0.15)',
                borderColor: 'rgba(0, 188, 212, 0.3)',
                color: '#00bcd4',
              }}
            >
              <FolderTree className="h-6 w-6" />
            </div>
            <div>
              <h2 className="void-heading-2 text-stellar-core">{t.categoryITitle}</h2>
              <p className="text-body text-stellar-dim">{t.categoryIDescription}</p>
            </div>
          </div>

          <div className="space-y-8">
            {t.categoryIAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                variants={itemVariants}
                className="p-8 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden group"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${agent.color}15 0%, transparent 50%)`,
                  }}
                />

                {/* Agent header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center border"
                      style={{
                        backgroundColor: `${agent.color}15`,
                        borderColor: `${agent.color}30`,
                        color: agent.color,
                      }}
                    >
                      {agentIcons[agent.icon]}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="void-heading-3 text-stellar-core">{agent.name}</h3>
                        <div
                          className="px-3 py-1 font-mono text-xs font-bold border"
                          style={{
                            color: agent.color,
                            borderColor: `${agent.color}30`,
                            backgroundColor: `${agent.color}10`,
                          }}
                        >
                          {agent.id}
                        </div>
                      </div>
                      <p className="text-body text-stellar-dim">{agent.purpose}</p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-col items-end gap-2">
                    <div
                      className="px-3 py-1 font-mono text-xs uppercase tracking-wider border"
                      style={{
                        color: agent.tier === 'HIGH' ? '#9b59b6' : agent.tier === 'MEDIUM' ? '#45b7d1' : '#44ffaa',
                        borderColor: agent.tier === 'HIGH' ? 'rgba(155, 89, 182, 0.3)' : agent.tier === 'MEDIUM' ? 'rgba(69, 183, 209, 0.3)' : 'rgba(68, 255, 170, 0.3)',
                        backgroundColor: agent.tier === 'HIGH' ? 'rgba(155, 89, 182, 0.1)' : agent.tier === 'MEDIUM' ? 'rgba(69, 183, 209, 0.1)' : 'rgba(68, 255, 170, 0.1)',
                      }}
                    >
                      {agent.tier} • {agent.model}
                    </div>
                    <div
                      className="flex items-center gap-2 px-3 py-1 font-mono text-xs border"
                      style={{
                        color: agent.checkpointLevel === 'REQUIRED' ? '#ff6b6b' : '#f39c12',
                        borderColor: agent.checkpointLevel === 'REQUIRED' ? 'rgba(255, 107, 107, 0.3)' : 'rgba(243, 156, 18, 0.3)',
                        backgroundColor: agent.checkpointLevel === 'REQUIRED' ? 'rgba(255, 107, 107, 0.1)' : 'rgba(243, 156, 18, 0.1)',
                      }}
                    >
                      {checkpointIcons[agent.checkpointLevel]}
                      <span className="text-xs">{agent.checkpoint}</span>
                    </div>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="mb-6 relative z-10">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                    {locale === 'ko' ? '역량' : 'Capabilities'}
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {agent.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                        <span className="text-stellar-core mt-1">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pipeline stages for I0 */}
                {agent.id === 'I0' && agent.pipelineStages && (
                  <div className="mb-6 relative z-10">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-4">
                      {locale === 'ko' ? '7단계 파이프라인' : '7-Stage Pipeline'}
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-7">
                      {agent.pipelineStages.map((stage) => (
                        <div
                          key={stage.stage}
                          className="p-3 bg-void-deep/50 border border-stellar-faint/10 text-center"
                        >
                          <div
                            className="inline-flex h-8 w-8 items-center justify-center border mb-2 font-mono font-bold text-xs"
                            style={{
                              color: agent.color,
                              borderColor: `${agent.color}30`,
                              backgroundColor: `${agent.color}10`,
                            }}
                          >
                            {stage.stage}
                          </div>
                          <p className="text-xs font-bold text-stellar-core mb-1">{stage.name}</p>
                          <p className="text-xs text-stellar-dim">{stage.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Database comparison for I1 */}
                {agent.id === 'I1' && agent.databases && (
                  <div className="mb-6 relative z-10">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                      {locale === 'ko' ? '데이터베이스' : 'Databases'}
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {agent.databases.map((db, i) => (
                        <div key={i} className="p-3 bg-void-deep/50 border border-stellar-faint/10">
                          <p className="font-mono font-bold text-sm text-stellar-core mb-1">{db.name}</p>
                          <p className="text-xs text-stellar-dim mb-1">Coverage: {db.coverage}</p>
                          <p className="text-xs text-stellar-dim">API: {db.api}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cost comparison for I2 */}
                {agent.id === 'I2' && agent.costComparison && (
                  <div className="mb-6 relative z-10">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3 flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      {locale === 'ko' ? '비용 비교' : 'Cost Comparison'}
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {agent.costComparison.map((item, i) => (
                        <div key={i} className="p-3 bg-void-deep/50 border border-stellar-faint/10">
                          <p className="font-mono font-bold text-sm text-stellar-core mb-1">{item.provider}</p>
                          <p className="text-xs text-stellar-dim mb-1">{item.cost}</p>
                          <p className="text-xs text-stellar-faint">{item.speed}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* RAG cost breakdown for I3 */}
                {agent.id === 'I3' && agent.ragCostBreakdown && (
                  <div className="mb-6 relative z-10">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3 flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      {locale === 'ko' ? 'RAG 비용 분석' : 'RAG Cost Breakdown'}
                    </h4>
                    <div className="space-y-2">
                      {agent.ragCostBreakdown.map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-void-deep/50 border border-stellar-faint/10">
                          <div>
                            <p className="font-mono text-sm text-stellar-core">{item.component}</p>
                            <p className="text-xs text-stellar-dim">{item.provider}</p>
                          </div>
                          <p className="font-mono font-bold text-sm" style={{ color: item.cost === '$0' ? '#44ffaa' : '#f39c12' }}>
                            {item.cost}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Example */}
                <div className="relative z-10">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                    {locale === 'ko' ? '예시' : 'Example'}
                  </h4>
                  <div className="void-terminal overflow-hidden">
                    <div className="void-terminal-header">
                      <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                      <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                      <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                      <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                        {locale === 'ko' ? '입력' : 'Input'}
                      </span>
                    </div>
                    <div className="p-4 text-sm text-stellar-bright font-mono">
                      {agent.example.input}
                    </div>
                  </div>
                  <div className="void-terminal overflow-hidden mt-3">
                    <div className="void-terminal-header">
                      <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                      <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                      <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                      <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                        {locale === 'ko' ? '출력' : 'Output'}
                      </span>
                    </div>
                    <div className="p-4 text-sm text-stellar-bright font-mono whitespace-pre-wrap">
                      {agent.example.output}
                    </div>
                  </div>
                </div>

                {/* Triggers */}
                <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                  <span className="text-xs text-stellar-faint uppercase tracking-wider">
                    {locale === 'ko' ? '트리거:' : 'Triggers:'}
                  </span>
                  {agent.triggers.en.map((trigger, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-mono border"
                      style={{
                        color: agent.color,
                        borderColor: `${agent.color}30`,
                        backgroundColor: `${agent.color}08`,
                      }}
                    >
                      {trigger}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* Cost Optimization Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(68, 255, 170, 0.15)',
                borderColor: 'rgba(68, 255, 170, 0.3)',
              }}
            >
              <DollarSign className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.costTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.costDescription}</p>

          <div className="space-y-3 mb-6">
            {t.costBreakdown.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div>
                  <p className="font-mono font-bold text-stellar-core">{item.task}</p>
                  <p className="text-sm text-stellar-dim">{item.provider}</p>
                </div>
                <p className="font-mono font-bold text-lg" style={{ color: item.cost === '$0.00' ? '#44ffaa' : '#00bcd4' }}>
                  {item.cost}
                </p>
              </motion.div>
            ))}
          </div>

          <div
            className="p-6 border text-center"
            style={{
              backgroundColor: 'rgba(68, 255, 170, 0.1)',
              borderColor: 'rgba(68, 255, 170, 0.3)',
            }}
          >
            <p className="font-mono font-bold text-xl text-stellar-core">{t.totalCost}</p>
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Checkpoints */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(255, 107, 107, 0.15)' }}
            >
              <AlertCircle className="h-5 w-5" style={{ color: '#ff6b6b' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.checkpointTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.checkpointDescription}</p>

          {/* Category H Checkpoints */}
          <h3 className="void-heading-3 text-stellar-core mb-4" style={{ color: '#e91e63' }}>
            {t.categoryHTitle}
          </h3>
          <div className="space-y-3 mb-8">
            {t.categoryHCheckpoints.map((cp, index) => (
              <motion.div
                key={cp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border"
                  style={{
                    color: '#ff6b6b',
                    borderColor: 'rgba(255, 107, 107, 0.3)',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                  }}
                >
                  {checkpointIcons[cp.level]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-mono font-bold text-stellar-core">{cp.id}</h3>
                    <span
                      className="px-2 py-0.5 text-xs font-mono border"
                      style={{
                        color: '#e91e63',
                        borderColor: 'rgba(233, 30, 99, 0.3)',
                        backgroundColor: 'rgba(233, 30, 99, 0.1)',
                      }}
                    >
                      {cp.agents}
                    </span>
                  </div>
                  <p className="text-sm text-stellar-dim">{cp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category I Checkpoints */}
          <h3 className="void-heading-3 text-stellar-core mb-4" style={{ color: '#00bcd4' }}>
            {t.categoryITitle}
          </h3>
          <div className="space-y-3">
            {t.categoryICheckpoints.map((cp, index) => (
              <motion.div
                key={cp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border"
                  style={{
                    color: cp.level === 'REQUIRED' ? '#ff6b6b' : '#f39c12',
                    borderColor: cp.level === 'REQUIRED' ? 'rgba(255, 107, 107, 0.3)' : 'rgba(243, 156, 18, 0.3)',
                    backgroundColor: cp.level === 'REQUIRED' ? 'rgba(255, 107, 107, 0.1)' : 'rgba(243, 156, 18, 0.1)',
                  }}
                >
                  {checkpointIcons[cp.level]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-mono font-bold text-stellar-core">{cp.id}</h3>
                    <span
                      className="px-2 py-0.5 text-xs font-mono border"
                      style={{
                        color: '#00bcd4',
                        borderColor: 'rgba(0, 188, 212, 0.3)',
                        backgroundColor: 'rgba(0, 188, 212, 0.1)',
                      }}
                    >
                      {cp.agent}
                    </span>
                  </div>
                  <p className="text-sm text-stellar-dim">{cp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

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
              background: 'linear-gradient(135deg, rgba(233, 30, 99, 0.15) 0%, rgba(0, 188, 212, 0.15) 100%)',
              borderColor: 'rgba(233, 30, 99, 0.3)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <Link
              href={`/${locale}/docs/agents`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.ctaButton}
              <FolderTree className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
