import type { ExtendedAgentContent } from '../types';

export const i1Content: ExtendedAgentContent = {
  agentId: 'I1',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Single-Source Avoidance', ko: '단일 소스 회피' },
        purpose: {
          en: 'Avoid relying on single database or manual search',
          ko: '단일 데이터베이스 또는 수동 검색에 의존하는 것 회피'
        },
        example: 'Only searching PubMed or Google Scholar without API automation'
      },
      {
        number: 2,
        title: { en: 'Multi-API Parallel Retrieval', ko: '다중 API 병렬 검색' },
        purpose: {
          en: 'Query Semantic Scholar, OpenAlex, and arXiv simultaneously',
          ko: 'Semantic Scholar, OpenAlex, arXiv 동시 쿼리'
        }
      },
      {
        number: 3,
        title: { en: 'Result Unification & Deduplication', ko: '결과 통합 및 중복 제거' },
        purpose: {
          en: 'Merge results with DOI/title matching and confidence scoring',
          ko: 'DOI/제목 매칭 및 신뢰도 점수로 결과 병합'
        }
      },
    ],
  },
  tScoreReference: {
    ranges: [
      {
        range: '0.80-1.00',
        label: { en: 'Manual Search (Avoid)', ko: '수동 검색 (피하세요)' },
        examples: ['Google Scholar copy-paste', 'Single database export']
      },
      {
        range: '0.60-0.79',
        label: { en: 'Single API', ko: '단일 API' },
        examples: ['Semantic Scholar only', 'PubMed API only']
      },
      {
        range: '0.40-0.59',
        label: { en: 'Dual Source', ko: '이중 소스' },
        examples: ['Semantic Scholar + OpenAlex']
      },
      {
        range: '0.20-0.39',
        label: { en: 'Triple Source', ko: '삼중 소스' },
        examples: ['Semantic Scholar + OpenAlex + arXiv']
      },
      {
        range: '0.00-0.19',
        label: { en: 'Full Coverage (Optimal)', ko: '전체 커버리지 (최적)' },
        examples: ['All 3 APIs + PDF URL extraction + citation network']
      },
    ],
  },
  inputRequirements: {
    required: [
      {
        name: 'search_query',
        description: { en: 'Boolean search query (e.g., "(AI OR chatbot) AND education")', ko: 'Boolean 검색 쿼리 (예: "(AI OR chatbot) AND education")' }
      },
      {
        name: 'year_range',
        description: { en: 'Publication year range (e.g., 2015-2024)', ko: '출판 연도 범위 (예: 2015-2024)' }
      },
    ],
    optional: [
      {
        name: 'databases',
        description: { en: 'Which databases to query (default: all three)', ko: '쿼리할 데이터베이스 (기본값: 세 개 모두)' }
      },
      {
        name: 'max_results_per_db',
        description: { en: 'Maximum papers per database (default: 2000)', ko: '데이터베이스당 최대 논문 수 (기본값: 2000)' }
      },
      {
        name: 'fields_of_study',
        description: { en: 'Filter by discipline (Semantic Scholar specific)', ko: '분야별 필터 (Semantic Scholar 전용)' }
      },
    ],
  },
  outputFormat: {
    sections: [
      {
        title: 'Retrieved Papers',
        content: { en: 'Unified list with source tracking per paper', ko: '논문당 소스 추적이 포함된 통합 목록' }
      },
      {
        title: 'Deduplication Report',
        content: { en: 'Duplicate counts, DOI match rate, title similarity stats', ko: '중복 수, DOI 매치율, 제목 유사성 통계' }
      },
      {
        title: 'PDF Availability',
        content: { en: 'Open access PDF URL extraction success rate', ko: '오픈 액세스 PDF URL 추출 성공률' }
      },
    ],
    example: `{
  "total_retrieved": 4521,
  "after_deduplication": 2834,
  "sources": {
    "semantic_scholar": 2145,
    "openalex": 1892,
    "arxiv": 484
  },
  "pdf_urls_found": 1702,
  "pdf_success_rate": "60.1%"
}`
  },
  creativityMechanisms: [
    {
      name: 'Query Expansion',
      applicationTiming: { en: 'Phase 2: Automatically expand query with synonyms', ko: '2단계: 동의어로 쿼리 자동 확장' },
      usageExample: { en: '"AI tutor" expands to "(AI OR artificial intelligence) AND (tutor OR tutoring system)"', ko: '"AI tutor"가 "(AI OR artificial intelligence) AND (tutor OR tutoring system)"으로 확장' }
    },
    {
      name: 'Adaptive Rate Limiting',
      applicationTiming: { en: 'Phase 2: Adjust request timing per API limits', ko: '2단계: API 제한에 따라 요청 타이밍 조정' },
      usageExample: { en: 'arXiv: 3s delay, Semantic Scholar: burst then pause, OpenAlex: polite pool', ko: 'arXiv: 3초 지연, Semantic Scholar: 버스트 후 일시 중지, OpenAlex: polite pool' }
    },
    {
      name: 'Fuzzy Deduplication',
      applicationTiming: { en: 'Phase 3: Handle title variations across databases', ko: '3단계: 데이터베이스 간 제목 변형 처리' },
      usageExample: { en: 'Match "AI in Education" with "Artificial Intelligence in Education" using 85% similarity threshold', ko: '85% 유사성 임계값을 사용하여 "AI in Education"과 "Artificial Intelligence in Education" 매칭' }
    },
  ],
  checkpoints: [
    {
      id: 'SCH_DATABASE_SELECTION',
      description: { en: 'Databases selected and API availability verified', ko: '데이터베이스 선택 및 API 가용성 확인' }
    },
  ],
  codeTemplates: [
    {
      language: 'bash',
      title: { en: 'Fetch Papers from All Databases', ko: '모든 데이터베이스에서 논문 가져오기' },
      code: `# Run paper retrieval stage
python scholarag_cli.py fetch \\
  --project projects/2025-01-31_AI-Learning \\
  --databases semantic_scholar openalex arxiv \\
  --max-per-db 2000 \\
  --parallel

# Check retrieval status
python scholarag_cli.py status projects/2025-01-31_AI-Learning --stage fetch`
    },
    {
      language: 'bash',
      title: { en: 'Run Deduplication', ko: '중복 제거 실행' },
      code: `# Deduplicate retrieved papers
python scholarag_cli.py deduplicate \\
  --project projects/2025-01-31_AI-Learning \\
  --similarity-threshold 0.85

# View deduplication report
cat projects/2025-01-31_AI-Learning/reports/deduplication_report.json`
    },
    {
      language: 'python',
      title: { en: 'Programmatic API Access', ko: '프로그래밍 방식 API 액세스' },
      code: `from scholarag.retrieval import MultiDatabaseRetriever

retriever = MultiDatabaseRetriever(
    databases=["semantic_scholar", "openalex", "arxiv"],
    max_results_per_db=2000
)

# Parallel retrieval
results = await retriever.search_async(
    query="(AI OR chatbot) AND language learning",
    year_range=(2015, 2024),
    fields_of_study=["Education", "Computer Science"]
)

print(f"Total: {results.total_retrieved}")
print(f"After dedup: {results.deduplicated_count}")
print(f"PDF URLs: {results.pdf_url_count}")`
    },
  ],
  references: [
    'Semantic Scholar API Documentation (2024). https://api.semanticscholar.org/',
    'OpenAlex API Documentation (2024). https://docs.openalex.org/',
    'arXiv API Documentation. https://info.arxiv.org/help/api/',
    'Gusenbauer, M. (2019). Google Scholar to overshadow them all? Scientometrics.',
  ],
  exampleWorkflow: {
    before: {
      en: 'Manual export from 3 databases: 4 hours, inconsistent fields, 45% duplicate rate (T-0.92)',
      ko: '3개 데이터베이스에서 수동 내보내기: 4시간, 일관성 없는 필드, 45% 중복률 (T-0.92)'
    },
    after: {
      en: 'Parallel API retrieval: 15 minutes, unified schema, automatic deduplication to 8% residual (T-0.18)',
      ko: '병렬 API 검색: 15분, 통합 스키마, 8% 잔여로 자동 중복 제거 (T-0.18)'
    },
  },

  // NEW FIELDS: User-friendly content
  quickSummary: {
    oneLiner: {
      en: 'Fetches papers from 3 databases in parallel and unifies results',
      ko: '3개 데이터베이스에서 병렬로 논문을 가져와 결과를 통합'
    },
    bestFor: [
      { en: 'Comprehensive literature searches across multiple sources', ko: '여러 소스에 걸친 포괄적인 문헌 검색' },
      { en: 'Maximizing open-access PDF availability', ko: '오픈 액세스 PDF 가용성 극대화' },
      { en: 'Reproducible search methodology', ko: '재현 가능한 검색 방법론' },
    ],
    notFor: [
      { en: 'Searching databases requiring institutional access (Scopus, WoS)', ko: '기관 액세스가 필요한 데이터베이스 검색 (Scopus, WoS)' },
      { en: 'Grey literature or non-indexed sources', ko: '회색 문헌 또는 색인되지 않은 소스' },
    ],
    timeToResult: '10-30 minutes for 2000+ papers'
  },

  useCases: [
    {
      title: { en: 'Education Research Retrieval', ko: '교육 연구 검색' },
      scenario: {
        en: 'Doctoral student needs all papers on "AI tutoring systems" from 2018-2024',
        ko: '박사과정 학생이 2018-2024년의 "AI 튜터링 시스템"에 관한 모든 논문 필요'
      },
      outcome: {
        en: 'Retrieved 2,145 from Semantic Scholar, 1,892 from OpenAlex, 484 from arXiv. After dedup: 2,834 unique papers with 60% PDF URLs',
        ko: 'Semantic Scholar에서 2,145편, OpenAlex에서 1,892편, arXiv에서 484편 검색. 중복 제거 후: 60% PDF URL을 가진 2,834편의 고유 논문'
      },
      discipline: 'Education',
      complexity: 'beginner'
    },
    {
      title: { en: 'Cross-disciplinary Search', ko: '학제간 검색' },
      scenario: {
        en: 'Grant team needs papers spanning education, psychology, and HCI on learning analytics',
        ko: '연구비 팀이 학습 분석에 대해 교육, 심리학, HCI에 걸친 논문 필요'
      },
      outcome: {
        en: 'Field-of-study filters applied per database, 4,200 papers retrieved, cross-domain deduplication identified 890 papers appearing in multiple disciplines',
        ko: '데이터베이스별 연구 분야 필터 적용, 4,200편 논문 검색, 도메인 간 중복 제거로 여러 분야에 나타나는 890편 논문 식별'
      },
      discipline: 'Interdisciplinary',
      complexity: 'intermediate'
    },
    {
      title: { en: 'Pre-print Priority Search', ko: '프리프린트 우선 검색' },
      scenario: {
        en: 'Researcher needs latest AI papers including pre-prints not yet in traditional databases',
        ko: '연구자가 전통적인 데이터베이스에 아직 없는 프리프린트를 포함한 최신 AI 논문 필요'
      },
      outcome: {
        en: 'arXiv weighted higher, retrieved 1,200 pre-prints from last 6 months, cross-matched with Semantic Scholar for citation context',
        ko: 'arXiv 가중치 높임, 최근 6개월간 1,200편 프리프린트 검색, 인용 컨텍스트를 위해 Semantic Scholar와 교차 매칭'
      },
      discipline: 'Computer Science',
      complexity: 'intermediate'
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'Fetch all papers on [topic] from the last [N] years using ScholaRAG',
        ko: 'ScholaRAG를 사용하여 최근 [N]년간 [주제]에 대한 모든 논문을 가져와주세요'
      },
      context: {
        en: 'Use when starting the retrieval stage of a systematic review',
        ko: '체계적 리뷰의 검색 단계를 시작할 때 사용'
      },
      expectedResponse: {
        en: 'I1 queries all 3 databases in parallel, reports progress, and generates unified paper list',
        ko: 'I1이 3개 데이터베이스를 병렬로 쿼리하고, 진행 상황을 보고하고, 통합 논문 목록을 생성'
      }
    },
    {
      prompt: {
        en: 'How many papers have open-access PDFs available?',
        ko: '오픈 액세스 PDF가 있는 논문은 몇 편인가요?'
      },
      context: {
        en: 'Use after retrieval to assess PDF availability before download stage',
        ko: '다운로드 단계 전 PDF 가용성 평가를 위해 검색 후 사용'
      },
      expectedResponse: {
        en: 'I1 reports PDF URL extraction rate per database and total expected success rate',
        ko: 'I1이 데이터베이스별 PDF URL 추출률과 총 예상 성공률을 보고'
      }
    },
    {
      prompt: {
        en: 'Run deduplication on my retrieved papers',
        ko: '검색된 논문에 대해 중복 제거를 실행해주세요'
      },
      context: {
        en: 'Use after multi-database retrieval to remove duplicates',
        ko: '다중 데이터베이스 검색 후 중복 제거를 위해 사용'
      },
      expectedResponse: {
        en: 'I1 runs DOI matching, arXiv ID matching, and fuzzy title matching with 85% threshold',
        ko: 'I1이 DOI 매칭, arXiv ID 매칭, 85% 임계값의 퍼지 제목 매칭 실행'
      }
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'You need comprehensive coverage across multiple academic databases', ko: '여러 학술 데이터베이스에 걸친 포괄적인 커버리지가 필요할 때' },
      { en: 'You want automated, reproducible search execution', ko: '자동화되고 재현 가능한 검색 실행을 원할 때' },
      { en: 'You need to maximize open-access PDF availability', ko: '오픈 액세스 PDF 가용성을 극대화해야 할 때' },
    ],
    dontUseWhen: [
      { en: 'Your field relies on databases without APIs (use B1 for manual strategy)', ko: '분야가 API 없는 데이터베이스에 의존할 때 (수동 전략은 B1 사용)' },
      { en: 'You need grey literature not indexed in academic databases', ko: '학술 데이터베이스에 색인되지 않은 회색 문헌이 필요할 때' },
    ],
    alternativeAgents: [
      { agentId: 'B1', condition: { en: 'For manual search strategy design with non-API databases', ko: '비 API 데이터베이스를 사용한 수동 검색 전략 설계 시' } },
      { agentId: 'B3', condition: { en: 'For citation-based searching and snowballing', ko: '인용 기반 검색 및 스노볼링 시' } },
    ]
  },

  persona: {
    archetype: 'The API Whisperer',
    personality: {
      en: 'Efficient, reliable, and technically savvy. Speaks the language of APIs fluently and translates complex database queries into simple unified results. Never drops a paper.',
      ko: '효율적이고 신뢰할 수 있으며 기술적으로 능숙함. API 언어를 유창하게 구사하고 복잡한 데이터베이스 쿼리를 간단한 통합 결과로 번역. 절대 논문을 놓치지 않음.'
    },
    voiceSample: {
      en: '"I talk to Semantic Scholar, OpenAlex, and arXiv so you dont have to. Give me your query, and Ill bring back every relevant paper with PDF links where available."',
      ko: '"제가 Semantic Scholar, OpenAlex, arXiv와 대화하니 당신은 할 필요 없습니다. 쿼리를 주시면 가능한 PDF 링크와 함께 관련된 모든 논문을 가져오겠습니다."'
    },
    motto: {
      en: 'Three databases, one unified result',
      ko: '세 개의 데이터베이스, 하나의 통합 결과'
    },
    catchphrase: {
      en: 'Query once, retrieve everywhere.',
      ko: '한 번 쿼리, 어디서나 검색.'
    }
  },

  journey: {
    startState: {
      en: 'Researcher with a search query and no idea how to access multiple databases programmatically',
      ko: '검색 쿼리는 있지만 여러 데이터베이스에 프로그래밍 방식으로 액세스하는 방법을 모르는 연구자'
    },
    transformation: [
      { en: 'Query translated into database-specific API calls', ko: '쿼리가 데이터베이스별 API 호출로 변환됨' },
      { en: 'Parallel requests sent to Semantic Scholar, OpenAlex, arXiv', ko: 'Semantic Scholar, OpenAlex, arXiv에 병렬 요청 전송' },
      { en: 'Results streamed back with progress updates', ko: '진행 상황 업데이트와 함께 결과 스트리밍' },
      { en: 'Deduplication removes 40-60% overlapping papers', ko: '중복 제거로 40-60% 중복 논문 제거' },
    ],
    endState: {
      en: 'Unified paper list with source tracking, PDF URLs extracted, ready for screening',
      ko: '소스 추적이 포함된 통합 논문 목록, PDF URL 추출, 스크리닝 준비 완료'
    },
    timeEstimate: '15-30 minutes for 5000+ papers'
  },

  analogies: [
    {
      metaphor: {
        en: 'Universal Translator for Databases',
        ko: '데이터베이스를 위한 유니버설 번역기'
      },
      explanation: {
        en: 'Just as a universal translator lets you speak to anyone regardless of language, I1 lets you query any database regardless of its API quirks. You speak "research query", I speak "Semantic Scholar JSON", "OpenAlex filters", and "arXiv OAI-PMH".',
        ko: '유니버설 번역기가 언어에 관계없이 누구와도 대화할 수 있게 해주듯이, I1은 API 특성에 관계없이 모든 데이터베이스를 쿼리할 수 있게 합니다. 당신은 "연구 쿼리"를 말하고, 저는 "Semantic Scholar JSON", "OpenAlex 필터", "arXiv OAI-PMH"를 말합니다.'
      }
    },
    {
      metaphor: {
        en: 'Fishing with Three Nets',
        ko: '세 개의 그물로 낚시'
      },
      explanation: {
        en: 'Instead of fishing one spot at a time, I cast three nets simultaneously across different waters. Each net (database) catches different fish (papers), and I sort out the duplicates before presenting your unified catch.',
        ko: '한 번에 한 곳에서 낚시하는 대신, 저는 동시에 세 개의 그물을 다른 바다에 던집니다. 각 그물(데이터베이스)은 다른 물고기(논문)를 잡고, 통합된 어획량을 제시하기 전에 중복을 정리합니다.'
      }
    },
  ],

  proTips: [
    {
      tip: {
        en: 'Add your email to OpenAlex requests for access to the "polite pool" with higher rate limits',
        ko: '더 높은 속도 제한의 "polite pool"에 액세스하려면 OpenAlex 요청에 이메일을 추가'
      },
      source: { en: 'OpenAlex API Best Practices', ko: 'OpenAlex API 모범 사례' },
      difficulty: 'beginner'
    },
    {
      tip: {
        en: 'Use Semantic Scholar field-of-study filters to reduce noise before deduplication',
        ko: '중복 제거 전 노이즈를 줄이기 위해 Semantic Scholar 연구 분야 필터 사용'
      },
      source: { en: 'Search Optimization Guide', ko: '검색 최적화 가이드' },
      difficulty: 'intermediate'
    },
    {
      tip: {
        en: 'For pre-print heavy fields (CS, Physics), weight arXiv results higher and cross-check with Semantic Scholar for citation counts',
        ko: '프리프린트가 많은 분야(CS, 물리학)의 경우 arXiv 결과에 더 높은 가중치를 주고 인용 수를 위해 Semantic Scholar와 교차 확인'
      },
      source: { en: 'Field-Specific Strategies', ko: '분야별 전략' },
      difficulty: 'advanced'
    },
  ],

  badges: [
    { type: 'essential', label: { en: 'Core Retrieval', ko: '핵심 검색' } },
    { type: 'quick', label: { en: 'Fast Parallel Execution', ko: '빠른 병렬 실행' } },
  ],

  faq: [
    {
      question: {
        en: 'Which databases does I1 support?',
        ko: 'I1은 어떤 데이터베이스를 지원하나요?'
      },
      answer: {
        en: 'Currently: Semantic Scholar (200M+ papers, ~40% OA PDFs), OpenAlex (250M+ works, ~50% OA), and arXiv (2M+ pre-prints, 100% PDFs). These were chosen for their API access and open-access availability.',
        ko: '현재: Semantic Scholar (2억+ 논문, ~40% OA PDF), OpenAlex (2억 5천만+ 작품, ~50% OA), arXiv (200만+ 프리프린트, 100% PDF). API 액세스와 오픈 액세스 가용성을 위해 선택됨.'
      }
    },
    {
      question: {
        en: 'Why not include PubMed, Scopus, or Web of Science?',
        ko: 'PubMed, Scopus, Web of Science는 왜 포함하지 않나요?'
      },
      answer: {
        en: 'PubMed has API but no PDF URLs. Scopus and WoS require institutional subscriptions and dont provide programmatic PDF access. For these, use B1 for manual search strategy design.',
        ko: 'PubMed는 API가 있지만 PDF URL이 없습니다. Scopus와 WoS는 기관 구독이 필요하고 프로그래밍 방식 PDF 액세스를 제공하지 않습니다. 이들의 경우 수동 검색 전략 설계에 B1을 사용하세요.'
      }
    },
    {
      question: {
        en: 'How does deduplication handle title variations?',
        ko: '중복 제거는 제목 변형을 어떻게 처리하나요?'
      },
      answer: {
        en: 'Three-stage matching: 1) Exact DOI match, 2) arXiv ID match, 3) Fuzzy title matching with 85% Levenshtein similarity threshold. This catches variations like "AI in Ed" vs "Artificial Intelligence in Education".',
        ko: '3단계 매칭: 1) 정확한 DOI 매치, 2) arXiv ID 매치, 3) 85% Levenshtein 유사성 임계값의 퍼지 제목 매칭. "AI in Ed" vs "Artificial Intelligence in Education" 같은 변형을 잡아냅니다.'
      }
    },
  ],
};
