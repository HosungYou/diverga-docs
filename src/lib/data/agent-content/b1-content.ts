import type { ExtendedAgentContent } from '../types';

export const b1Content: ExtendedAgentContent = {
  agentId: 'B1',

  // === NEW USER-FRIENDLY FIELDS ===
  persona: {
    archetype: 'The Evidence Hunter',
    personality: {
      en: 'Relentless, systematic, and thorough. Like a detective who follows every citation trail until the full picture emerges. Never satisfied with surface-level searches.',
      ko: '끈질기고, 체계적이며, 철저합니다. 전체 그림이 드러날 때까지 모든 인용 추적을 따라가는 탐정처럼. 표면적인 검색에 절대 만족하지 않습니다.',
    },
    voiceSample: {
      en: '"Let me trace this citation network. That one paper from 2018? It references a seminal work we missed. This changes our entire search strategy."',
      ko: '"이 인용 네트워크를 추적해 보겠습니다. 2018년 논문요? 우리가 놓친 중요한 연구를 인용하고 있네요. 이것이 전체 검색 전략을 바꿉니다."',
    },
    motto: {
      en: 'Every citation tells a story. Follow the trail.',
      ko: '모든 인용에는 이야기가 있습니다. 그 흔적을 따라가세요.',
    },
    catchphrase: {
      en: 'The best evidence hides in plain sight—buried in reference lists.',
      ko: '최고의 증거는 눈에 띄는 곳에 숨어 있습니다—참고문헌 목록 속에.',
    },
  },

  quickSummary: {
    oneLiner: {
      en: 'Designs comprehensive, reproducible search strategies for systematic reviews',
      ko: '체계적 문헌고찰을 위한 포괄적이고 재현 가능한 검색 전략 설계',
    },
    bestFor: [
      { en: 'Systematic literature reviews', ko: '체계적 문헌고찰' },
      { en: 'PRISMA-compliant searches', ko: 'PRISMA 준수 검색' },
      { en: 'Multi-database search protocols', ko: '다중 데이터베이스 검색 프로토콜' },
      { en: 'Citation snowballing', ko: '인용 스노볼링' },
    ],
    notFor: [
      { en: 'Quick ad-hoc literature browsing', ko: '빠른 임시 문헌 탐색' },
      { en: 'Single database simple searches', ko: '단일 데이터베이스 단순 검색' },
    ],
    timeToResult: '2-4 hours for complete strategy',
  },

  useCases: [
    {
      title: { en: 'PRISMA Systematic Review Setup', ko: 'PRISMA 체계적 문헌고찰 설정' },
      scenario: {
        en: 'A PhD student needs to conduct a systematic review on AI-assisted language learning for their dissertation. They need a reproducible search strategy across PubMed, ERIC, and Scopus.',
        ko: '박사과정 학생이 학위논문을 위해 AI 보조 언어 학습에 대한 체계적 문헌고찰을 수행해야 합니다. PubMed, ERIC, Scopus에서 재현 가능한 검색 전략이 필요합니다.',
      },
      outcome: {
        en: 'Complete Boolean search strings for each database, PICO-based inclusion criteria, and a documented PRISMA flow diagram template.',
        ko: '각 데이터베이스용 Boolean 검색 문자열, PICO 기반 포함 기준, 문서화된 PRISMA 흐름도 템플릿 완성.',
      },
      discipline: 'Education / Applied Linguistics',
      complexity: 'intermediate',
    },
    {
      title: { en: 'Meta-Analysis Literature Identification', ko: '메타분석 문헌 식별' },
      scenario: {
        en: 'A research team needs to find all randomized controlled trials on mindfulness interventions for workplace stress published in the last 10 years.',
        ko: '연구팀이 지난 10년간 출판된 직장 스트레스 관련 마음챙김 중재 무작위 대조 시험을 모두 찾아야 합니다.',
      },
      outcome: {
        en: 'Comprehensive search covering 8 databases with forward/backward citation tracking, yielding 2,400 initial records reduced to 47 eligible RCTs.',
        ko: '전진/후진 인용 추적을 포함한 8개 데이터베이스 포괄 검색, 2,400개 초기 기록에서 47개 적격 RCT로 축소.',
      },
      discipline: 'Psychology / Organizational Behavior',
      complexity: 'advanced',
    },
    {
      title: { en: 'Scoping Review for Emerging Topic', ko: '신흥 주제 범위 문헌고찰' },
      scenario: {
        en: 'An HRD researcher wants to map the landscape of generative AI use in corporate training—a rapidly evolving field with inconsistent terminology.',
        ko: 'HRD 연구자가 기업 교육에서의 생성 AI 사용 현황을 파악하고자 합니다—용어가 불일치하는 빠르게 진화하는 분야입니다.',
      },
      outcome: {
        en: 'Pearl-growing strategy starting from 5 seed papers, expanded Boolean queries capturing variant terms (ChatGPT, LLM, generative AI), and grey literature inclusion protocol.',
        ko: '5개 시드 논문에서 시작하는 진주 성장 전략, 변형 용어(ChatGPT, LLM, 생성 AI)를 포착하는 확장 Boolean 쿼리, 회색 문헌 포함 프로토콜.',
      },
      discipline: 'Human Resource Development',
      complexity: 'intermediate',
    },
    {
      title: { en: 'Qualitative Meta-Synthesis Search', ko: '질적 메타합성 검색' },
      scenario: {
        en: 'A nursing researcher needs to find qualitative studies on patient experiences with telemedicine during COVID-19.',
        ko: '간호학 연구자가 COVID-19 기간 원격의료에 대한 환자 경험 질적 연구를 찾아야 합니다.',
      },
      outcome: {
        en: 'SPIDER-framework search strategy with qualitative filters, hand-searching of key journals, and contact with authors for unpublished studies.',
        ko: '질적 필터가 포함된 SPIDER 프레임워크 검색 전략, 주요 저널 수기 검색, 미출판 연구를 위한 저자 연락.',
      },
      discipline: 'Health Sciences / Nursing',
      complexity: 'advanced',
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'Design a PRISMA-compliant search strategy for: "[Your research question]". Include Boolean queries for PubMed, ERIC, and PsycINFO.',
        ko: '"[연구 질문]"에 대한 PRISMA 준수 검색 전략을 설계해 주세요. PubMed, ERIC, PsycINFO용 Boolean 쿼리를 포함해 주세요.',
      },
      context: {
        en: 'Use when starting a systematic review and need database-specific search strings.',
        ko: '체계적 문헌고찰을 시작하고 데이터베이스별 검색 문자열이 필요할 때 사용.',
      },
      expectedResponse: {
        en: 'Receives tailored Boolean queries, MeSH/thesaurus terms for each database, and inclusion/exclusion criteria framework.',
        ko: '맞춤형 Boolean 쿼리, 각 데이터베이스용 MeSH/시소러스 용어, 포함/배제 기준 프레임워크를 받습니다.',
      },
    },
    {
      prompt: {
        en: 'I have these 5 highly relevant papers. Use pearl-growing and citation snowballing to expand my search.',
        ko: '매우 관련성 높은 5개 논문이 있습니다. 진주 성장과 인용 스노볼링으로 검색을 확장해 주세요.',
      },
      context: {
        en: 'Use when you have seed papers and want to find related literature through citation networks.',
        ko: '시드 논문이 있고 인용 네트워크를 통해 관련 문헌을 찾고자 할 때 사용.',
      },
      expectedResponse: {
        en: 'Forward citation analysis, backward reference mining, author tracking, and keyword expansion from successful papers.',
        ko: '전진 인용 분석, 후진 참고문헌 마이닝, 저자 추적, 성공적인 논문에서의 키워드 확장.',
      },
    },
    {
      prompt: {
        en: 'Convert my simple search "[basic query]" into a comprehensive multi-method search strategy.',
        ko: '단순 검색 "[기본 쿼리]"를 포괄적인 다중 방법 검색 전략으로 변환해 주세요.',
      },
      context: {
        en: 'Use when you have a basic search but need to make it systematic and reproducible.',
        ko: '기본 검색이 있지만 체계적이고 재현 가능하게 만들어야 할 때 사용.',
      },
      expectedResponse: {
        en: 'Expanded Boolean with synonyms, truncation, adjacency operators, plus supplementary search methods (hand-search, grey literature, expert consultation).',
        ko: '동의어, 절단, 인접 연산자가 포함된 확장 Boolean, 보충 검색 방법(수기 검색, 회색 문헌, 전문가 자문).',
      },
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'Starting a systematic review or meta-analysis', ko: '체계적 문헌고찰 또는 메타분석 시작 시' },
      { en: 'Need to document search for PRISMA compliance', ko: 'PRISMA 준수를 위해 검색 문서화 필요 시' },
      { en: 'Want reproducible search across multiple databases', ko: '여러 데이터베이스에서 재현 가능한 검색 원할 시' },
      { en: 'Conducting scoping or umbrella reviews', ko: '범위 또는 우산 리뷰 수행 시' },
    ],
    dontUseWhen: [
      { en: 'Just browsing for background reading', ko: '배경 독서를 위한 단순 탐색 시' },
      { en: 'Need a quick answer, not comprehensive search', ko: '포괄적 검색이 아닌 빠른 답변 필요 시' },
      { en: 'Working on narrative (non-systematic) review', ko: '서술적(비체계적) 리뷰 작업 시' },
    ],
    alternativeAgents: [
      { agentId: 'B4', condition: { en: 'Need ongoing monitoring, not one-time search', ko: '일회성 검색이 아닌 지속적 모니터링 필요 시' } },
      { agentId: 'B5', condition: { en: 'Have documents, need parallel processing', ko: '문서가 있고 병렬 처리 필요 시' } },
    ],
  },

  journey: {
    startState: {
      en: 'Vague research topic with no clear search strategy',
      ko: '명확한 검색 전략 없는 막연한 연구 주제',
    },
    transformation: [
      { en: 'Research question refined using PICO/SPIDER framework', ko: 'PICO/SPIDER 프레임워크로 연구 질문 정제' },
      { en: 'Boolean queries built with synonyms, MeSH terms, truncation', ko: '동의어, MeSH 용어, 절단으로 Boolean 쿼리 구축' },
      { en: 'Databases selected based on topic coverage analysis', ko: '주제 범위 분석 기반 데이터베이스 선택' },
      { en: 'Supplementary methods (snowballing, grey literature) planned', ko: '보충 방법(스노볼링, 회색 문헌) 계획' },
      { en: 'Search protocol documented for PRISMA compliance', ko: 'PRISMA 준수를 위한 검색 프로토콜 문서화' },
    ],
    endState: {
      en: 'Complete, reproducible search strategy ready for execution',
      ko: '실행 준비된 완전하고 재현 가능한 검색 전략',
    },
    timeEstimate: '2-4 hours',
  },

  analogies: [
    {
      metaphor: {
        en: 'Like a detective building a case file',
        ko: '사건 파일을 구축하는 탐정처럼',
      },
      explanation: {
        en: 'Just as a detective follows every lead, interviews witnesses, and cross-references evidence, the Literature Review Strategist traces citation networks, checks multiple databases, and ensures no critical evidence is missed.',
        ko: '탐정이 모든 단서를 따라가고, 증인을 인터뷰하고, 증거를 교차 참조하는 것처럼, 문헌고찰 전략가는 인용 네트워크를 추적하고, 여러 데이터베이스를 확인하며, 중요한 증거가 누락되지 않도록 합니다.',
      },
    },
    {
      metaphor: {
        en: 'Like casting multiple fishing nets in different waters',
        ko: '다른 물에 여러 그물을 던지는 것처럼',
      },
      explanation: {
        en: 'Each database is a different fishing ground with its own species. PubMed catches medical literature, ERIC catches education research, PsycINFO catches psychology. You need multiple nets to catch everything relevant.',
        ko: '각 데이터베이스는 고유한 어종이 있는 다른 어장입니다. PubMed는 의학 문헌을, ERIC은 교육 연구를, PsycINFO는 심리학을 잡습니다. 관련된 모든 것을 잡으려면 여러 그물이 필요합니다.',
      },
    },
  ],

  proTips: [
    {
      tip: {
        en: 'Always test your Boolean query with a known relevant paper—if it does not appear in results, your query has gaps.',
        ko: '항상 알려진 관련 논문으로 Boolean 쿼리를 테스트하세요—결과에 나타나지 않으면 쿼리에 빈틈이 있습니다.',
      },
      source: { en: 'Cochrane Handbook methodology', ko: 'Cochrane Handbook 방법론' },
      difficulty: 'beginner',
    },
    {
      tip: {
        en: 'Use database-specific thesaurus terms (MeSH for PubMed, ERIC descriptors) alongside free-text keywords for maximum recall.',
        ko: '최대 재현율을 위해 자유 텍스트 키워드와 함께 데이터베이스별 시소러스 용어(PubMed용 MeSH, ERIC 기술어)를 사용하세요.',
      },
      source: { en: 'Information specialist best practice', ko: '정보 전문가 모범 사례' },
      difficulty: 'intermediate',
    },
    {
      tip: {
        en: 'For emerging topics with inconsistent terminology, start with pearl-growing from 3-5 highly relevant seed papers rather than keyword-first approaches.',
        ko: '용어가 불일치하는 신흥 주제의 경우, 키워드 우선 접근 대신 3-5개의 관련성 높은 시드 논문에서 진주 성장으로 시작하세요.',
      },
      source: { en: 'Booth (2016) qualitative search methods', ko: 'Booth (2016) 질적 검색 방법' },
      difficulty: 'advanced',
    },
  ],

  badges: [
    { type: 'essential', label: { en: 'Core for Systematic Reviews', ko: '체계적 문헌고찰 핵심' } },
    { type: 'deep', label: { en: 'Comprehensive Analysis', ko: '포괄적 분석' } },
  ],

  faq: [
    {
      question: {
        en: 'How is this different from just searching Google Scholar?',
        ko: 'Google Scholar 검색과 어떻게 다른가요?',
      },
      answer: {
        en: 'Google Scholar is a black box—you cannot document or reproduce your search. B1 creates transparent, reproducible protocols required for systematic reviews and meta-analyses. It also searches specialized databases that Google Scholar misses.',
        ko: 'Google Scholar는 블랙박스입니다—검색을 문서화하거나 재현할 수 없습니다. B1은 체계적 문헌고찰과 메타분석에 필요한 투명하고 재현 가능한 프로토콜을 만듭니다. 또한 Google Scholar가 놓치는 전문 데이터베이스를 검색합니다.',
      },
    },
    {
      question: {
        en: 'How many databases should I search?',
        ko: '몇 개의 데이터베이스를 검색해야 하나요?',
      },
      answer: {
        en: 'For comprehensive systematic reviews, typically 3-8 databases depending on your topic. B1 recommends databases based on your research domain (e.g., ERIC + PsycINFO + MEDLINE for educational psychology).',
        ko: '포괄적인 체계적 문헌고찰의 경우 주제에 따라 일반적으로 3-8개 데이터베이스. B1은 연구 영역에 따라 데이터베이스를 추천합니다(예: 교육심리학의 경우 ERIC + PsycINFO + MEDLINE).',
      },
    },
    {
      question: {
        en: 'Can I use B1 for non-English literature?',
        ko: 'B1을 비영어 문헌에 사용할 수 있나요?',
      },
      answer: {
        en: 'Yes. B1 can design multilingual search strategies including non-English databases (e.g., CNKI for Chinese, KCI for Korean). It will translate key terms and adjust Boolean syntax for each database.',
        ko: '네. B1은 비영어 데이터베이스(예: 중국어 CNKI, 한국어 KCI)를 포함한 다국어 검색 전략을 설계할 수 있습니다. 핵심 용어를 번역하고 각 데이터베이스에 맞게 Boolean 구문을 조정합니다.',
      },
    },
  ],

  // === EXISTING FIELDS ===
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      { number: 1, title: { en: 'Default Strategy Avoidance', ko: '기본 전략 회피' }, purpose: { en: 'Avoid basic keyword-only search strategies', ko: '기본 키워드 전용 검색 전략 회피' } },
      { number: 2, title: { en: 'Multi-method Search Design', ko: '다중 방법 검색 설계' }, purpose: { en: 'Combine Boolean, citation, snowball, pearl-growing', ko: 'Boolean, 인용, 스노볼, 진주 성장 결합' } },
      { number: 3, title: { en: 'Database Selection', ko: '데이터베이스 선택' }, purpose: { en: 'Select optimal databases for topic', ko: '주제에 최적인 데이터베이스 선택' } },
      { number: 4, title: { en: 'Search Execution Plan', ko: '검색 실행 계획' }, purpose: { en: 'Create reproducible search protocol', ko: '재현 가능한 검색 프로토콜 생성' } },
      { number: 5, title: { en: 'PRISMA Documentation', ko: 'PRISMA 문서화' }, purpose: { en: 'Document search in PRISMA 2020 format', ko: 'PRISMA 2020 형식으로 검색 문서화' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_question', description: { en: 'Refined research question', ko: '정제된 연구 질문' } },
      { name: 'review_type', description: { en: 'Systematic, scoping, meta-synthesis, etc.', ko: '체계적, 범위, 메타 합성 등' } },
    ],
  },
  outputFormat: {
    sections: [
      { title: 'Search Strategy', content: { en: 'Boolean queries per database', ko: '데이터베이스별 Boolean 쿼리' } },
      { title: 'Inclusion/Exclusion', content: { en: 'PICO/SPIDER-based criteria', ko: 'PICO/SPIDER 기반 기준' } },
      { title: 'PRISMA Flow', content: { en: 'Identification → Screening → Eligibility → Included', ko: '식별 → 스크리닝 → 적격성 → 포함' } },
    ],
  },
  references: [
    'Page, M. J., et al. (2021). PRISMA 2020 statement. BMJ.',
    'Booth, A. (2016). Searching for qualitative research. Qualitative Health Research.',
  ],
};
