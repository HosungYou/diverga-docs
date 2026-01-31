import type { ExtendedAgentContent } from '../types';

export const i3Content: ExtendedAgentContent = {
  agentId: 'I3',
  vsProcess: {
    type: 'LIGHT',
    phases: [
      {
        number: 1,
        title: { en: 'Manual Reading Avoidance', ko: '수동 읽기 회피' },
        purpose: {
          en: 'Avoid reading 200+ PDFs manually for synthesis',
          ko: '종합을 위해 200편 이상의 PDF를 수동으로 읽는 것 회피'
        },
        example: 'Reading each paper cover-to-cover for thematic analysis'
      },
      {
        number: 2,
        title: { en: 'Automated RAG Construction', ko: '자동화된 RAG 구축' },
        purpose: {
          en: 'Build searchable vector database from included papers',
          ko: '포함된 논문에서 검색 가능한 벡터 데이터베이스 구축'
        }
      },
    ],
  },
  inputRequirements: {
    required: [
      {
        name: 'pdf_folder',
        description: { en: 'Folder containing downloaded PDFs from included papers', ko: '포함된 논문에서 다운로드한 PDF가 포함된 폴더' }
      },
      {
        name: 'papers_metadata',
        description: { en: 'Metadata file with paper info (from I1/I2)', ko: '논문 정보가 있는 메타데이터 파일 (I1/I2에서)' }
      },
    ],
    optional: [
      {
        name: 'chunk_size',
        description: { en: 'Text chunk size for embedding (default: 1000 chars)', ko: '임베딩을 위한 텍스트 청크 크기 (기본값: 1000자)' }
      },
      {
        name: 'chunk_overlap',
        description: { en: 'Overlap between chunks (default: 200 chars)', ko: '청크 간 중복 (기본값: 200자)' }
      },
      {
        name: 'embedding_model',
        description: { en: 'Model for embeddings (default: text-embedding-3-small)', ko: '임베딩 모델 (기본값: text-embedding-3-small)' }
      },
    ],
  },
  outputFormat: {
    sections: [
      {
        title: 'RAG Database',
        content: { en: 'ChromaDB collection with embedded paper chunks', ko: '임베딩된 논문 청크가 있는 ChromaDB 컬렉션' }
      },
      {
        title: 'Processing Report',
        content: { en: 'Papers processed, chunks created, embedding stats', ko: '처리된 논문, 생성된 청크, 임베딩 통계' }
      },
      {
        title: 'Query Interface',
        content: { en: 'Ready-to-use semantic search over literature', ko: '문헌에 대한 사용 가능한 시맨틱 검색' }
      },
    ],
    example: `{
  "database_path": "projects/AI-Learning/rag_db",
  "collection_name": "ai_learning_papers",
  "papers_processed": 217,
  "total_chunks": 8942,
  "avg_chunks_per_paper": 41.2,
  "embedding_model": "text-embedding-3-small",
  "embedding_dimensions": 1536,
  "index_size_mb": 142.3,
  "ready_for_queries": true
}`
  },
  creativityMechanisms: [
    {
      name: 'Progressive Indexing',
      applicationTiming: { en: 'During PDF download: Index as papers arrive', ko: 'PDF 다운로드 중: 논문이 도착하면 색인' },
      usageExample: { en: 'Start querying with 50% of papers while remaining 50% still processing', ko: '나머지 50% 처리 중 50%의 논문으로 쿼리 시작' }
    },
    {
      name: 'Metadata Enrichment',
      applicationTiming: { en: 'During chunking: Add paper metadata to each chunk', ko: '청킹 중: 각 청크에 논문 메타데이터 추가' },
      usageExample: { en: 'Each chunk tagged with paper title, year, authors, DOI for citation tracking', ko: '각 청크에 인용 추적을 위한 논문 제목, 연도, 저자, DOI 태그' }
    },
    {
      name: 'Section-Aware Chunking',
      applicationTiming: { en: 'During PDF parsing: Respect paper structure', ko: 'PDF 파싱 중: 논문 구조 존중' },
      usageExample: { en: 'Keep Methods, Results, Discussion sections as logical units when possible', ko: '가능한 경우 방법, 결과, 논의 섹션을 논리적 단위로 유지' }
    },
  ],
  checkpoints: [
    {
      id: 'SCH_RAG_READINESS',
      description: { en: 'RAG database built and validated before query stage', ko: '쿼리 단계 전 RAG 데이터베이스 구축 및 검증' }
    },
  ],
  codeTemplates: [
    {
      language: 'bash',
      title: { en: 'Build RAG from Downloaded PDFs', ko: '다운로드한 PDF에서 RAG 구축' },
      code: `# Build RAG database from included papers
python scholarag_cli.py build-rag \\
  --project projects/2025-01-31_AI-Learning \\
  --chunk-size 1000 \\
  --chunk-overlap 200 \\
  --embedding-model text-embedding-3-small

# Verify RAG is ready
python scholarag_cli.py rag-status \\
  --project projects/2025-01-31_AI-Learning`
    },
    {
      language: 'bash',
      title: { en: 'Query the Literature', ko: '문헌 쿼리' },
      code: `# Interactive query mode
python scholarag_cli.py query \\
  --project projects/2025-01-31_AI-Learning \\
  --interactive

# Batch query mode
python scholarag_cli.py query \\
  --project projects/2025-01-31_AI-Learning \\
  --questions "questions.txt" \\
  --output "synthesis_results.json"`
    },
    {
      language: 'python',
      title: { en: 'Programmatic RAG Access', ko: '프로그래밍 방식 RAG 액세스' },
      code: `from scholarag.rag import LiteratureRAG

# Initialize RAG
rag = LiteratureRAG(
    project_path="projects/2025-01-31_AI-Learning",
    embedding_model="text-embedding-3-small"
)

# Semantic search
results = rag.search(
    query="What effect sizes are reported for AI tutoring on learning outcomes?",
    top_k=10,
    include_metadata=True
)

for result in results:
    print(f"[{result.paper_title}] ({result.year})")
    print(f"  Score: {result.similarity:.3f}")
    print(f"  Excerpt: {result.text[:200]}...")
    print()

# Synthesis query with LLM
synthesis = rag.synthesize(
    question="What are the main findings across studies on AI tutoring effectiveness?",
    max_sources=20,
    llm_provider="claude"
)
print(synthesis.answer)
print(f"Based on {len(synthesis.sources)} sources")`
    },
  ],
  references: [
    'Lewis, P., et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. NeurIPS.',
    'ChromaDB Documentation (2024). https://docs.trychroma.com/',
    'OpenAI Embeddings Guide (2024). https://platform.openai.com/docs/guides/embeddings',
    'LangChain RAG Tutorial (2024). https://python.langchain.com/docs/tutorials/rag/',
  ],
  exampleWorkflow: {
    before: {
      en: 'Manual reading of 217 papers: 80+ hours, inconsistent notes, no searchability (T-0.95)',
      ko: '217편 논문 수동 읽기: 80시간 이상, 일관성 없는 노트, 검색 불가능 (T-0.95)'
    },
    after: {
      en: 'RAG-indexed papers: 25 minutes to build, instant semantic search, citation-tracked synthesis (T-0.12)',
      ko: 'RAG 색인 논문: 25분 만에 구축, 즉각적인 시맨틱 검색, 인용 추적 종합 (T-0.12)'
    },
  },

  // NEW FIELDS: User-friendly content
  quickSummary: {
    oneLiner: {
      en: 'Transforms your PDFs into a searchable knowledge base',
      ko: 'PDF를 검색 가능한 지식 기반으로 변환'
    },
    bestFor: [
      { en: 'Creating searchable literature databases from PDFs', ko: 'PDF에서 검색 가능한 문헌 데이터베이스 생성' },
      { en: 'Thematic analysis across 50-500 papers', ko: '50-500편 논문에 걸친 주제 분석' },
      { en: 'Evidence synthesis with source tracking', ko: '소스 추적이 있는 증거 종합' },
    ],
    notFor: [
      { en: 'Papers without PDFs (abstract-only analysis)', ko: 'PDF가 없는 논문 (초록만 분석)' },
      { en: 'Non-text documents (images, data files)', ko: '비텍스트 문서 (이미지, 데이터 파일)' },
    ],
    timeToResult: '15-30 minutes for 200 papers'
  },

  useCases: [
    {
      title: { en: 'Dissertation Literature Synthesis', ko: '학위논문 문헌 종합' },
      scenario: {
        en: 'PhD student needs to synthesize findings across 180 papers for literature review chapter',
        ko: '박사과정 학생이 문헌 검토 장을 위해 180편 논문에 걸친 발견 종합 필요'
      },
      outcome: {
        en: 'RAG built in 20 minutes, 7,380 searchable chunks, instant answers to synthesis questions with citations',
        ko: '20분 만에 RAG 구축, 7,380개 검색 가능 청크, 인용과 함께 종합 질문에 즉각적인 답변'
      },
      discipline: 'Education',
      complexity: 'beginner'
    },
    {
      title: { en: 'Meta-Analysis Data Extraction', ko: '메타분석 데이터 추출' },
      scenario: {
        en: 'Research team needs to extract effect sizes and sample sizes from 95 empirical studies',
        ko: '연구팀이 95개 실증 연구에서 효과 크기와 표본 크기 추출 필요'
      },
      outcome: {
        en: 'Targeted queries like "What effect sizes are reported?" return relevant passages with exact paper citations',
        ko: '"어떤 효과 크기가 보고되었나요?" 같은 타겟 쿼리가 정확한 논문 인용과 함께 관련 구절 반환'
      },
      discipline: 'Psychology',
      complexity: 'intermediate'
    },
    {
      title: { en: 'Grant Proposal Evidence Base', ko: '연구비 제안서 증거 기반' },
      scenario: {
        en: 'PI needs to build evidence base for R01 proposal significance section',
        ko: 'PI가 R01 제안서 중요성 섹션을 위한 증거 기반 구축 필요'
      },
      outcome: {
        en: 'Query-driven synthesis: "What gaps exist in current AI tutoring research?" returns 15 sources with specific gap statements',
        ko: '쿼리 기반 종합: "현재 AI 튜터링 연구에 어떤 갭이 있나요?"가 특정 갭 진술과 함께 15개 소스 반환'
      },
      discipline: 'Interdisciplinary',
      complexity: 'beginner'
    },
    {
      title: { en: 'Rapid Scoping with RAG', ko: 'RAG를 통한 신속 범위 검토' },
      scenario: {
        en: 'Conference paper deadline, need to quickly understand landscape of 340 papers on emerging topic',
        ko: '학회 논문 마감, 새로운 주제에 대한 340편 논문의 현황을 빠르게 이해 필요'
      },
      outcome: {
        en: 'Progressive RAG: Start querying after 100 papers indexed, full database ready in 35 minutes',
        ko: '점진적 RAG: 100편 논문 색인 후 쿼리 시작, 35분 만에 전체 데이터베이스 준비'
      },
      discipline: 'Computer Science',
      complexity: 'intermediate'
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'Build a RAG database from my downloaded papers',
        ko: '다운로드한 논문에서 RAG 데이터베이스를 구축해주세요'
      },
      context: {
        en: 'Use after PDF download stage is complete',
        ko: 'PDF 다운로드 단계가 완료된 후 사용'
      },
      expectedResponse: {
        en: 'I3 processes PDFs, chunks text, generates embeddings, and creates ChromaDB collection',
        ko: 'I3이 PDF를 처리하고, 텍스트를 청킹하고, 임베딩을 생성하고, ChromaDB 컬렉션 생성'
      }
    },
    {
      prompt: {
        en: 'Search my literature for [specific topic or question]',
        ko: '내 문헌에서 [특정 주제 또는 질문]을 검색해주세요'
      },
      context: {
        en: 'Use after RAG is built for semantic search queries',
        ko: 'RAG 구축 후 시맨틱 검색 쿼리에 사용'
      },
      expectedResponse: {
        en: 'I3 returns top-k relevant passages with paper citations and similarity scores',
        ko: 'I3이 논문 인용 및 유사성 점수와 함께 상위 k개 관련 구절 반환'
      }
    },
    {
      prompt: {
        en: 'Synthesize what the literature says about [research question]',
        ko: '[연구 질문]에 대해 문헌이 말하는 것을 종합해주세요'
      },
      context: {
        en: 'Use for LLM-powered synthesis across multiple sources',
        ko: '여러 소스에 걸친 LLM 기반 종합에 사용'
      },
      expectedResponse: {
        en: 'I3 retrieves relevant chunks, sends to LLM for synthesis, returns answer with numbered source citations',
        ko: 'I3이 관련 청크를 검색하고, 종합을 위해 LLM에 전송하고, 번호가 매겨진 소스 인용과 함께 답변 반환'
      }
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'You have 50+ PDFs to analyze and need searchable access', ko: '분석할 50편 이상의 PDF가 있고 검색 가능한 액세스가 필요할 때' },
      { en: 'You want to query your literature with natural language', ko: '자연어로 문헌을 쿼리하고 싶을 때' },
      { en: 'You need synthesis with source tracking for citations', ko: '인용을 위한 소스 추적과 함께 종합이 필요할 때' },
    ],
    dontUseWhen: [
      { en: 'You only have abstracts (no PDFs available)', ko: '초록만 있을 때 (PDF 없음)' },
      { en: 'You need structured data extraction (use manual coding)', ko: '구조화된 데이터 추출이 필요할 때 (수동 코딩 사용)' },
      { en: 'Your papers are in non-extractable format (scanned images)', ko: '논문이 추출 불가능한 형식일 때 (스캔 이미지)' },
    ],
    alternativeAgents: [
      { agentId: 'B4', condition: { en: 'For qualitative thematic analysis without RAG', ko: 'RAG 없이 질적 주제 분석 시' } },
      { agentId: 'C4', condition: { en: 'For quantitative meta-analysis after data extraction', ko: '데이터 추출 후 양적 메타분석 시' } },
    ]
  },

  persona: {
    archetype: 'The Knowledge Architect',
    personality: {
      en: 'Methodical, organized, and service-oriented. Transforms chaotic PDF collections into structured, searchable knowledge. Loves making information accessible.',
      ko: '체계적이고 조직적이며 서비스 지향적. 혼란스러운 PDF 컬렉션을 구조화되고 검색 가능한 지식으로 변환. 정보를 접근 가능하게 만드는 것을 좋아함.'
    },
    voiceSample: {
      en: '"Give me your 200 PDFs and Ill give you back a knowledge base you can query in plain English. Every answer comes with citations - no more hunting through papers."',
      ko: '"200편의 PDF를 주시면 일반 영어로 쿼리할 수 있는 지식 기반을 돌려드리겠습니다. 모든 답변에는 인용이 포함됩니다 - 더 이상 논문을 찾아다닐 필요 없습니다."'
    },
    motto: {
      en: 'From PDF chaos to searchable knowledge',
      ko: 'PDF 혼란에서 검색 가능한 지식으로'
    },
    catchphrase: {
      en: 'Ask your literature anything.',
      ko: '문헌에 무엇이든 물어보세요.'
    }
  },

  journey: {
    startState: {
      en: 'Researcher with 217 downloaded PDFs and no way to efficiently search or synthesize them',
      ko: '217편의 다운로드된 PDF가 있지만 효율적으로 검색하거나 종합할 방법이 없는 연구자'
    },
    transformation: [
      { en: 'PDFs parsed and text extracted with structure preservation', ko: 'PDF 파싱 및 구조 보존으로 텍스트 추출' },
      { en: 'Text chunked with metadata (title, year, DOI) attached', ko: '메타데이터 (제목, 연도, DOI)가 첨부된 텍스트 청킹' },
      { en: 'Chunks embedded into 1536-dimensional vector space', ko: '청크가 1536차원 벡터 공간에 임베딩' },
      { en: 'ChromaDB collection ready for semantic search', ko: '시맨틱 검색을 위한 ChromaDB 컬렉션 준비' },
    ],
    endState: {
      en: 'Queryable literature database: ask any question, get relevant passages with citations in seconds',
      ko: '쿼리 가능한 문헌 데이터베이스: 어떤 질문이든 하면 몇 초 만에 인용과 함께 관련 구절 제공'
    },
    timeEstimate: '15-30 minutes for 200 papers'
  },

  analogies: [
    {
      metaphor: {
        en: 'Building a Library with a Brilliant Librarian',
        ko: '훌륭한 사서와 함께 도서관 건설'
      },
      explanation: {
        en: 'Imagine taking 200 books, organizing them by topic, indexing every important passage, and hiring a librarian who has memorized it all. When you ask a question, they instantly find the relevant pages across all 200 books and tell you exactly where to look.',
        ko: '200권의 책을 가져와 주제별로 정리하고, 모든 중요한 구절을 색인하고, 모든 것을 암기한 사서를 고용한다고 상상해보세요. 질문을 하면 200권 모두에서 관련 페이지를 즉시 찾아 정확히 어디를 봐야 하는지 알려줍니다.'
      }
    },
    {
      metaphor: {
        en: 'Google for Your Personal Research',
        ko: '개인 연구를 위한 Google'
      },
      explanation: {
        en: 'Like how Google indexes the web so you can search it, I3 indexes your PDFs so you can search your literature. But unlike Google, every result comes with the exact paper citation for your reference list.',
        ko: 'Google이 웹을 색인하여 검색할 수 있게 하듯이, I3은 PDF를 색인하여 문헌을 검색할 수 있게 합니다. 하지만 Google과 달리 모든 결과에는 참고문헌 목록을 위한 정확한 논문 인용이 포함됩니다.'
      }
    },
  ],

  proTips: [
    {
      tip: {
        en: 'Use chunk_size=1500 with overlap=300 for academic papers - this preserves paragraph coherence better than default settings',
        ko: '학술 논문에는 chunk_size=1500, overlap=300 사용 - 기본 설정보다 단락 일관성을 더 잘 보존'
      },
      source: { en: 'RAG Optimization Guide', ko: 'RAG 최적화 가이드' },
      difficulty: 'intermediate'
    },
    {
      tip: {
        en: 'Enable section-aware chunking for empirical papers to keep Methods and Results as logical units',
        ko: '실증 논문에 대해 섹션 인식 청킹을 활성화하여 방법과 결과를 논리적 단위로 유지'
      },
      source: { en: 'Academic RAG Best Practices', ko: '학술 RAG 모범 사례' },
      difficulty: 'advanced'
    },
    {
      tip: {
        en: 'Start querying immediately after 30% of papers are indexed - progressive RAG lets you work while building continues',
        ko: '논문의 30%가 색인된 후 즉시 쿼리 시작 - 점진적 RAG로 빌드가 계속되는 동안 작업 가능'
      },
      source: { en: 'Efficiency Tips', ko: '효율성 팁' },
      difficulty: 'beginner'
    },
  ],

  badges: [
    { type: 'quick', label: { en: 'Fast Processing', ko: '빠른 처리' } },
    { type: 'essential', label: { en: 'Core RAG Builder', ko: '핵심 RAG 빌더' } },
  ],

  faq: [
    {
      question: {
        en: 'What embedding model should I use?',
        ko: '어떤 임베딩 모델을 사용해야 하나요?'
      },
      answer: {
        en: 'text-embedding-3-small (default): Best cost/performance ratio for academic text. text-embedding-3-large: Higher accuracy, 3x cost. For local processing, use sentence-transformers/all-MiniLM-L6-v2.',
        ko: 'text-embedding-3-small (기본값): 학술 텍스트에 가장 좋은 비용/성능 비율. text-embedding-3-large: 더 높은 정확도, 3배 비용. 로컬 처리에는 sentence-transformers/all-MiniLM-L6-v2 사용.'
      }
    },
    {
      question: {
        en: 'How does citation tracking work?',
        ko: '인용 추적은 어떻게 작동하나요?'
      },
      answer: {
        en: 'Every chunk is tagged with paper metadata (title, authors, year, DOI). When you query, results include this metadata. Synthesis responses include numbered citations like [1], [2] that map to source papers.',
        ko: '모든 청크에 논문 메타데이터 (제목, 저자, 연도, DOI)가 태그됩니다. 쿼리 시 결과에 이 메타데이터가 포함됩니다. 종합 응답에는 소스 논문에 매핑되는 [1], [2] 같은 번호가 매겨진 인용이 포함됩니다.'
      }
    },
    {
      question: {
        en: 'What if some PDFs fail to process?',
        ko: '일부 PDF 처리에 실패하면 어떻게 하나요?'
      },
      answer: {
        en: 'I3 logs failed PDFs (usually scanned images or corrupted files) and continues processing others. Run `scholarag_cli.py rag-status` to see success rate. Failed papers can be manually added later or processed with OCR.',
        ko: 'I3은 실패한 PDF (보통 스캔 이미지나 손상된 파일)를 기록하고 다른 것들을 계속 처리합니다. `scholarag_cli.py rag-status`를 실행하여 성공률을 확인하세요. 실패한 논문은 나중에 수동으로 추가하거나 OCR로 처리할 수 있습니다.'
      }
    },
  ],
};
