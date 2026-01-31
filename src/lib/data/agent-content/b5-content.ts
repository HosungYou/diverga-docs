import type { ExtendedAgentContent } from '../types';

export const b5Content: ExtendedAgentContent = {
  agentId: 'B5',

  // === NEW USER-FRIENDLY FIELDS ===
  persona: {
    archetype: 'The Speed Reader',
    personality: {
      en: 'Efficient, tireless, and precise. Processes hundreds of documents in parallel without losing context or making careless errors. The kind of reader who can skim 50 papers and tell you exactly what each one contributes.',
      ko: '효율적이고, 지칠 줄 모르며, 정확합니다. 맥락을 잃거나 부주의한 오류 없이 수백 개의 문서를 병렬로 처리합니다. 50개의 논문을 훑어보고 각각이 무엇을 기여하는지 정확히 말해줄 수 있는 독자입니다.',
    },
    voiceSample: {
      en: '"I\'ve distributed your 200 PDFs across parallel workers. While we talk, I\'m extracting sample sizes, effect sizes, and intervention details from all of them. ETA: 8 minutes for the complete dataset."',
      ko: '"200개 PDF를 병렬 작업자들에게 분배했습니다. 우리가 대화하는 동안 모든 것에서 표본 크기, 효과크기, 중재 세부사항을 추출하고 있습니다. 완전한 데이터셋 예상 시간: 8분."',
    },
    motto: {
      en: 'Scale is not a problem. It\'s a parameter.',
      ko: '규모는 문제가 아닙니다. 매개변수입니다.',
    },
    catchphrase: {
      en: 'Why read one paper when you can read one hundred—at the same time?',
      ko: '동시에 백 편을 읽을 수 있는데 왜 한 편을 읽나요?',
    },
  },

  quickSummary: {
    oneLiner: {
      en: 'Processes large document collections in parallel for rapid data extraction',
      ko: '빠른 데이터 추출을 위해 대규모 문서 컬렉션을 병렬 처리',
    },
    bestFor: [
      { en: 'Large-scale systematic review extraction', ko: '대규모 체계적 문헌고찰 추출' },
      { en: 'Batch PDF data extraction', ko: '배치 PDF 데이터 추출' },
      { en: 'Parallel screening of many papers', ko: '많은 논문의 병렬 스크리닝' },
      { en: 'Consistent data coding across documents', ko: '문서 간 일관된 데이터 코딩' },
    ],
    notFor: [
      { en: 'Deep qualitative analysis of individual papers', ko: '개별 논문의 깊은 질적 분석' },
      { en: 'Searching for new literature (use B1 or B4)', ko: '새 문헌 검색 (B1 또는 B4 사용)' },
    ],
    timeToResult: '5-20 min for 50-200 documents',
  },

  useCases: [
    {
      title: { en: 'Meta-Analysis Data Extraction at Scale', ko: '대규모 메타분석 데이터 추출' },
      scenario: {
        en: 'A meta-analyst has 150 eligible studies and needs to extract sample sizes, means, SDs, effect sizes, moderator variables, and quality indicators from each.',
        ko: '메타분석가가 150개의 적격 연구를 가지고 있고 각각에서 표본 크기, 평균, 표준편차, 효과크기, 조절 변수, 품질 지표를 추출해야 합니다.',
      },
      outcome: {
        en: 'Structured extraction spreadsheet with all requested variables, flagged items needing human review, and cross-validation checks.',
        ko: '모든 요청된 변수, 인간 검토가 필요한 플래그된 항목, 교차 검증 확인이 포함된 구조화된 추출 스프레드시트.',
      },
      discipline: 'Any quantitative synthesis',
      complexity: 'intermediate',
    },
    {
      title: { en: 'Rapid Abstract Screening', ko: '빠른 초록 스크리닝' },
      scenario: {
        en: 'A systematic review team has 3,000 abstracts from database searches and needs preliminary relevance screening before full-text review.',
        ko: '체계적 문헌고찰팀이 데이터베이스 검색에서 3,000개의 초록을 가지고 있고 전문 검토 전 예비 관련성 스크리닝이 필요합니다.',
      },
      outcome: {
        en: 'All abstracts screened against inclusion criteria with include/exclude/uncertain flags and reasoning notes.',
        ko: '포함 기준에 대해 모든 초록이 스크리닝되어 포함/배제/불확실 플래그와 추론 노트 제공.',
      },
      discipline: 'Systematic Reviews',
      complexity: 'beginner',
    },
    {
      title: { en: 'Qualitative Coding Framework Application', ko: '질적 코딩 프레임워크 적용' },
      scenario: {
        en: 'A qualitative meta-synthesis has 45 studies. The team needs to apply a thematic coding framework consistently across all papers.',
        ko: '질적 메타합성에 45개 연구가 있습니다. 팀이 모든 논문에 주제 코딩 프레임워크를 일관되게 적용해야 합니다.',
      },
      outcome: {
        en: 'Coded extracts organized by theme with source tracking, enabling rapid synthesis of qualitative findings.',
        ko: '출처 추적과 함께 주제별로 정리된 코딩된 발췌문, 질적 연구결과의 빠른 종합 가능.',
      },
      discipline: 'Qualitative Research',
      complexity: 'intermediate',
    },
    {
      title: { en: 'Grant Abstract Analysis', ko: '연구비 초록 분석' },
      scenario: {
        en: 'A research office needs to analyze 500 funded grant abstracts to identify trending topics and methodological approaches in their field.',
        ko: '연구사무실이 분야의 트렌딩 주제와 방법론적 접근을 식별하기 위해 500개의 지원 연구비 초록을 분석해야 합니다.',
      },
      outcome: {
        en: 'Categorized abstracts with topic codes, method tags, and summary statistics on funding patterns.',
        ko: '주제 코드, 방법 태그, 연구비 패턴에 대한 요약 통계가 포함된 분류된 초록.',
      },
      discipline: 'Research Administration',
      complexity: 'intermediate',
    },
    {
      title: { en: 'Multi-Study Intervention Comparison', ko: '다중 연구 중재 비교' },
      scenario: {
        en: 'A scoping review needs to compare intervention characteristics across 80 studies—duration, intensity, delivery mode, target population.',
        ko: '범위 문헌고찰에서 80개 연구의 중재 특성—기간, 강도, 전달 방식, 대상 집단—을 비교해야 합니다.',
      },
      outcome: {
        en: 'Intervention comparison matrix with standardized categories enabling systematic comparison.',
        ko: '체계적 비교를 가능하게 하는 표준화된 카테고리의 중재 비교 매트릭스.',
      },
      discipline: 'Implementation Science',
      complexity: 'intermediate',
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'Extract from these [N] PDFs: sample size, effect size (d or r), intervention type, outcome measure, and quality rating.',
        ko: '이 [N]개 PDF에서 추출: 표본 크기, 효과크기(d 또는 r), 중재 유형, 결과 측정, 품질 등급.',
      },
      context: {
        en: 'Use when you have a batch of PDFs and a clear extraction schema.',
        ko: '배치 PDF가 있고 명확한 추출 스키마가 있을 때 사용.',
      },
      expectedResponse: {
        en: 'Structured dataset with one row per study, columns for each variable, plus notes on missing/unclear data.',
        ko: '연구당 한 행, 각 변수에 대한 열, 누락/불명확한 데이터에 대한 노트가 포함된 구조화된 데이터셋.',
      },
    },
    {
      prompt: {
        en: 'Screen these abstracts against these inclusion criteria: [list criteria]. Flag as include, exclude, or uncertain.',
        ko: '이 포함 기준에 대해 이 초록들을 스크리닝해 주세요: [기준 나열]. 포함, 배제, 불확실로 플래그.',
      },
      context: {
        en: 'Use for systematic review screening of many abstracts.',
        ko: '많은 초록의 체계적 문헌고찰 스크리닝에 사용.',
      },
      expectedResponse: {
        en: 'Screened abstract list with decisions and brief rationale for each.',
        ko: '각각에 대한 결정과 간단한 근거가 포함된 스크리닝된 초록 목록.',
      },
    },
    {
      prompt: {
        en: 'Apply this coding framework to all documents: [framework description]. Extract relevant quotes and assign codes.',
        ko: '이 코딩 프레임워크를 모든 문서에 적용해 주세요: [프레임워크 설명]. 관련 인용구를 추출하고 코드를 할당.',
      },
      context: {
        en: 'Use for qualitative synthesis with established coding scheme.',
        ko: '확립된 코딩 체계가 있는 질적 종합에 사용.',
      },
      expectedResponse: {
        en: 'Coded extracts organized by theme/code with source document and page references.',
        ko: '출처 문서와 페이지 참조와 함께 주제/코드별로 정리된 코딩된 발췌문.',
      },
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'Have many documents needing same extraction', ko: '동일한 추출이 필요한 많은 문서가 있을 때' },
      { en: 'Need rapid screening of large abstract sets', ko: '대규모 초록 세트의 빠른 스크리닝 필요 시' },
      { en: 'Applying consistent coding across documents', ko: '문서 간 일관된 코딩 적용 시' },
      { en: 'Time pressure for systematic review data extraction', ko: '체계적 문헌고찰 데이터 추출에 시간 압박 시' },
    ],
    dontUseWhen: [
      { en: 'Need deep analysis of individual papers', ko: '개별 논문의 깊은 분석 필요 시' },
      { en: 'Searching for literature (use B1)', ko: '문헌 검색 시 (B1 사용)' },
      { en: 'Assessing study quality in depth (use B2)', ko: '깊이 있는 연구 품질 평가 시 (B2 사용)' },
    ],
    alternativeAgents: [
      { agentId: 'B1', condition: { en: 'Need to find/search for documents first', ko: '먼저 문서를 찾아/검색해야 할 때' } },
      { agentId: 'B2', condition: { en: 'Need detailed quality assessment per study', ko: '연구당 상세한 품질 평가 필요 시' } },
      { agentId: 'B3', condition: { en: 'Need complex effect size calculations', ko: '복잡한 효과크기 계산 필요 시' } },
    ],
  },

  journey: {
    startState: {
      en: 'Hundreds of PDFs waiting to be processed manually',
      ko: '수동으로 처리되기를 기다리는 수백 개의 PDF',
    },
    transformation: [
      { en: 'Extraction schema defined and validated', ko: '추출 스키마 정의 및 검증' },
      { en: 'Documents distributed across parallel workers', ko: '병렬 작업자들에게 문서 분배' },
      { en: 'Data extracted consistently using same logic', ko: '동일한 로직으로 일관되게 데이터 추출' },
      { en: 'Results aggregated with conflict resolution', ko: '충돌 해결과 함께 결과 집계' },
    ],
    endState: {
      en: 'Complete, structured dataset ready for analysis',
      ko: '분석 준비된 완전하고 구조화된 데이터셋',
    },
    timeEstimate: '10-30 minutes for 50-200 documents',
  },

  analogies: [
    {
      metaphor: {
        en: 'Like an assembly line for document processing',
        ko: '문서 처리를 위한 조립 라인처럼',
      },
      explanation: {
        en: 'Just as assembly lines process many units simultaneously with consistent quality, B5 processes many documents in parallel—each gets the same careful treatment, but the overall job finishes much faster.',
        ko: '조립 라인이 일관된 품질로 많은 단위를 동시에 처리하는 것처럼, B5는 많은 문서를 병렬로 처리합니다—각각 동일한 세심한 처리를 받지만 전체 작업은 훨씬 빨리 끝납니다.',
      },
    },
    {
      metaphor: {
        en: 'Like a team of trained research assistants',
        ko: '훈련된 연구 조교 팀처럼',
      },
      explanation: {
        en: 'Imagine having 10 research assistants all trained on the same extraction protocol, working simultaneously. B5 provides that parallel capacity with even greater consistency—no inter-rater reliability concerns.',
        ko: '동일한 추출 프로토콜에 훈련된 10명의 연구 조교가 동시에 작업한다고 상상해 보세요. B5는 더 큰 일관성으로 그 병렬 용량을 제공합니다—평가자 간 신뢰도 우려 없이.',
      },
    },
  ],

  proTips: [
    {
      tip: {
        en: 'Define your extraction schema precisely before starting—B5 works best with clear, unambiguous variable definitions.',
        ko: '시작하기 전에 추출 스키마를 정확하게 정의하세요—B5는 명확하고 모호하지 않은 변수 정의로 가장 잘 작동합니다.',
      },
      source: { en: 'Systematic review best practices', ko: '체계적 문헌고찰 모범 사례' },
      difficulty: 'beginner',
    },
    {
      tip: {
        en: 'Use a small pilot batch (5-10 documents) first to validate your extraction schema and catch edge cases before scaling.',
        ko: '스케일업 전에 추출 스키마를 검증하고 예외 사례를 잡기 위해 먼저 작은 파일럿 배치(5-10개 문서)를 사용하세요.',
      },
      source: { en: 'Data extraction quality control', ko: '데이터 추출 품질 관리' },
      difficulty: 'intermediate',
    },
    {
      tip: {
        en: 'For complex extractions, layer the processing: first pass for basic data, second pass for nuanced variables that benefit from context from the first pass.',
        ko: '복잡한 추출의 경우 처리를 계층화하세요: 기본 데이터를 위한 첫 번째 패스, 첫 번째 패스의 맥락에서 이점을 얻는 미묘한 변수를 위한 두 번째 패스.',
      },
      source: { en: 'Large-scale extraction strategies', ko: '대규모 추출 전략' },
      difficulty: 'advanced',
    },
  ],

  badges: [
    { type: 'quick', label: { en: 'High-Speed Processing', ko: '고속 처리' } },
    { type: 'essential', label: { en: 'Systematic Review Core', ko: '체계적 문헌고찰 핵심' } },
  ],

  faq: [
    {
      question: {
        en: 'How does B5 maintain consistency across parallel processing?',
        ko: 'B5는 병렬 처리 전반에서 어떻게 일관성을 유지하나요?',
      },
      answer: {
        en: 'B5 uses identical extraction logic across all parallel workers, like having clones of the same trained extractor. Post-processing includes cross-validation checks to catch any anomalies. This actually provides better consistency than human teams with inter-rater variability.',
        ko: 'B5는 동일한 훈련된 추출기의 복제본을 갖는 것처럼 모든 병렬 작업자에게 동일한 추출 로직을 사용합니다. 후처리에는 이상을 잡기 위한 교차 검증 확인이 포함됩니다. 이것은 실제로 평가자 간 변동성이 있는 인간 팀보다 더 나은 일관성을 제공합니다.',
      },
    },
    {
      question: {
        en: 'What happens when data is missing or unclear in a document?',
        ko: '문서에서 데이터가 누락되거나 불명확할 때 어떻게 되나요?',
      },
      answer: {
        en: 'B5 flags these items for human review rather than guessing. You get a clear list of "needs manual review" items with the reason (e.g., "effect size not reported, only p-value given"). This prevents silent errors from propagating into your dataset.',
        ko: 'B5는 추측하지 않고 인간 검토를 위해 이러한 항목에 플래그를 표시합니다. 이유(예: "효과크기 보고되지 않음, p값만 제공됨")와 함께 "수동 검토 필요" 항목의 명확한 목록을 받습니다. 이것은 무음 오류가 데이터셋에 전파되는 것을 방지합니다.',
      },
    },
    {
      question: {
        en: 'Can B5 handle documents in different formats (PDF, Word, HTML)?',
        ko: 'B5가 다른 형식(PDF, Word, HTML)의 문서를 처리할 수 있나요?',
      },
      answer: {
        en: 'Yes. B5 normalizes different document formats before processing. PDF quality matters most—scanned PDFs may need OCR preprocessing. For best results with older or scanned documents, run OCR enhancement first.',
        ko: '네. B5는 처리 전에 다른 문서 형식을 정규화합니다. PDF 품질이 가장 중요합니다—스캔된 PDF는 OCR 전처리가 필요할 수 있습니다. 오래되거나 스캔된 문서에서 최상의 결과를 위해 먼저 OCR 향상을 실행하세요.',
      },
    },
  ],

  // === EXISTING FIELDS ===
  vsProcess: {
    type: 'LIGHT',
    phases: [
      { number: 1, title: { en: 'Workload Distribution', ko: '작업 부하 분배' }, purpose: { en: 'Split large document sets across parallel workers', ko: '대규모 문서 세트를 병렬 작업자에 분배' } },
      { number: 2, title: { en: 'Parallel Extraction', ko: '병렬 추출' }, purpose: { en: 'Extract data from multiple PDFs simultaneously', ko: '여러 PDF에서 동시에 데이터 추출' } },
      { number: 3, title: { en: 'Result Aggregation', ko: '결과 집계' }, purpose: { en: 'Merge extracted data with conflict resolution', ko: '충돌 해결과 함께 추출된 데이터 병합' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'document_collection', description: { en: 'PDF files or URLs to process', ko: '처리할 PDF 파일 또는 URL' } },
      { name: 'extraction_schema', description: { en: 'What data to extract from each document', ko: '각 문서에서 추출할 데이터' } },
    ],
  },
};
