import type { ExtendedAgentContent } from '../types';

export const b4Content: ExtendedAgentContent = {
  agentId: 'B4',

  // === NEW USER-FRIENDLY FIELDS ===
  persona: {
    archetype: 'The Trend Scout',
    personality: {
      en: 'Vigilant, curious, and forward-looking. Constantly scanning the horizon for emerging research, methodological innovations, and paradigm shifts. Never content with yesterday\'s knowledge.',
      ko: '경계심 있고, 호기심 많으며, 미래지향적입니다. 신흥 연구, 방법론적 혁신, 패러다임 전환을 찾아 끊임없이 지평선을 스캔합니다. 어제의 지식에 절대 만족하지 않습니다.',
    },
    voiceSample: {
      en: '"I\'ve detected a surge in preprints about transformer-based learning analytics. Three labs published simultaneously—this might be the next big thing. Let me map the citation network before it crystallizes."',
      ko: '"트랜스포머 기반 학습 분석에 관한 사전인쇄물 급증을 감지했습니다. 세 개의 연구소가 동시에 출판했어요—이것이 다음 큰 것일 수 있습니다. 굳어지기 전에 인용 네트워크를 매핑해 볼게요."',
    },
    motto: {
      en: 'The future of your field is already being published—you just need to find it.',
      ko: '당신 분야의 미래는 이미 출판되고 있습니다—찾기만 하면 됩니다.',
    },
    catchphrase: {
      en: 'Trends don\'t announce themselves. I track the whispers before they become headlines.',
      ko: '트렌드는 스스로를 알리지 않습니다. 헤드라인이 되기 전 속삭임을 추적합니다.',
    },
  },

  quickSummary: {
    oneLiner: {
      en: 'Monitors research landscape for emerging trends, new methods, and influential papers',
      ko: '신흥 트렌드, 새로운 방법, 영향력 있는 논문을 위해 연구 환경 모니터링',
    },
    bestFor: [
      { en: 'Staying current in fast-moving fields', ko: '빠르게 변화하는 분야에서 최신 유지' },
      { en: 'Identifying methodological innovations', ko: '방법론적 혁신 식별' },
      { en: 'Tracking preprints and working papers', ko: '사전인쇄물 및 워킹페이퍼 추적' },
      { en: 'Spotting paradigm shifts early', ko: '패러다임 전환 조기 발견' },
    ],
    notFor: [
      { en: 'One-time systematic searches (use B1)', ko: '일회성 체계적 검색 (B1 사용)' },
      { en: 'Quality assessment (use B2)', ko: '품질 평가 (B2 사용)' },
    ],
    timeToResult: 'Ongoing monitoring with weekly/monthly summaries',
  },

  useCases: [
    {
      title: { en: 'Emerging Topic Detection', ko: '신흥 주제 탐지' },
      scenario: {
        en: 'An HRD researcher wants to identify emerging topics in workplace AI before they become mainstream so they can position their research at the cutting edge.',
        ko: 'HRD 연구자가 직장 AI의 신흥 주제가 주류가 되기 전에 식별하여 최첨단에 연구를 위치시키고자 합니다.',
      },
      outcome: {
        en: 'Monthly report identifying preprint clusters, rising authors, and terminology shifts in GenAI workplace research.',
        ko: 'GenAI 직장 연구에서 사전인쇄물 클러스터, 떠오르는 저자, 용어 변화를 식별하는 월간 보고서.',
      },
      discipline: 'Human Resource Development',
      complexity: 'intermediate',
    },
    {
      title: { en: 'Methodological Innovation Tracking', ko: '방법론적 혁신 추적' },
      scenario: {
        en: 'A quantitative methods researcher wants to track new statistical techniques (e.g., network meta-analysis, Bayesian approaches) being adopted in educational research.',
        ko: '양적 방법론 연구자가 교육 연구에서 채택되는 새로운 통계 기법(예: 네트워크 메타분석, 베이지안 접근)을 추적하고자 합니다.',
      },
      outcome: {
        en: 'Trend report showing adoption curves of new methods, key papers introducing them, and tutorials available.',
        ko: '새로운 방법의 채택 곡선, 이를 소개하는 핵심 논문, 사용 가능한 튜토리얼을 보여주는 트렌드 보고서.',
      },
      discipline: 'Educational Research Methods',
      complexity: 'advanced',
    },
    {
      title: { en: 'Living Systematic Review Updates', ko: '리빙 체계적 문헌고찰 업데이트' },
      scenario: {
        en: 'A Cochrane review team needs continuous monitoring for new RCTs to update their living review on telemedicine interventions.',
        ko: 'Cochrane 리뷰팀이 원격의료 중재에 관한 리빙 리뷰를 업데이트하기 위해 새로운 RCT를 지속적으로 모니터링해야 합니다.',
      },
      outcome: {
        en: 'Automated alerts when new eligible studies are published, with preliminary screening notes.',
        ko: '새로운 적격 연구가 출판될 때 자동 알림과 예비 스크리닝 노트.',
      },
      discipline: 'Evidence-Based Medicine',
      complexity: 'intermediate',
    },
    {
      title: { en: 'Competitor Lab Monitoring', ko: '경쟁 연구소 모니터링' },
      scenario: {
        en: 'A PI wants to track publications from key labs working on similar problems to identify collaboration opportunities or avoid duplication.',
        ko: 'PI가 유사한 문제를 연구하는 주요 연구소의 출판물을 추적하여 협력 기회를 식별하거나 중복을 피하고자 합니다.',
      },
      outcome: {
        en: 'Author-centered monitoring with alerts for new papers, conference presentations, and grant awards from tracked researchers.',
        ko: '추적 연구자들의 새 논문, 학회 발표, 연구비 수주에 대한 알림과 함께 저자 중심 모니터링.',
      },
      discipline: 'Any research field',
      complexity: 'beginner',
    },
    {
      title: { en: 'Funding Landscape Analysis', ko: '연구비 환경 분석' },
      scenario: {
        en: 'A department chair wants to understand which research directions are receiving increased funding from major agencies.',
        ko: '학과장이 어떤 연구 방향이 주요 기관에서 증가된 연구비를 받고 있는지 이해하고자 합니다.',
      },
      outcome: {
        en: 'Analysis of funded project abstracts showing trending topics, methodological preferences, and emerging priority areas.',
        ko: '트렌딩 주제, 방법론적 선호, 신흥 우선순위 영역을 보여주는 지원 프로젝트 초록 분석.',
      },
      discipline: 'Research Administration',
      complexity: 'intermediate',
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'Set up research monitoring for "[topic]" in [field]. Track preprints, key authors, and methodological innovations.',
        ko: '"[주제]"에 대한 연구 모니터링을 [분야]에서 설정해 주세요. 사전인쇄물, 주요 저자, 방법론적 혁신을 추적합니다.',
      },
      context: {
        en: 'Use when starting ongoing surveillance of a research area.',
        ko: '연구 영역의 지속적인 감시를 시작할 때 사용.',
      },
      expectedResponse: {
        en: 'Monitoring strategy with data sources, keyword alerts, author tracking list, and reporting schedule.',
        ko: '데이터 소스, 키워드 알림, 저자 추적 목록, 보고 일정이 포함된 모니터링 전략.',
      },
    },
    {
      prompt: {
        en: 'What are the emerging trends in [field] over the past 6 months? Analyze preprints and recent publications.',
        ko: '지난 6개월간 [분야]의 신흥 트렌드는 무엇인가요? 사전인쇄물과 최근 출판물을 분석해 주세요.',
      },
      context: {
        en: 'Use for a point-in-time trend analysis.',
        ko: '특정 시점의 트렌드 분석에 사용.',
      },
      expectedResponse: {
        en: 'Trend report with topic clusters, rising terms, influential new papers, and methodological shifts.',
        ko: '주제 클러스터, 떠오르는 용어, 영향력 있는 새 논문, 방법론적 전환이 포함된 트렌드 보고서.',
      },
    },
    {
      prompt: {
        en: 'Track these 5 researchers and their labs: [names]. Alert me to new publications and conference presentations.',
        ko: '이 5명의 연구자와 연구소를 추적해 주세요: [이름]. 새 출판물과 학회 발표를 알려주세요.',
      },
      context: {
        en: 'Use for author-centered monitoring.',
        ko: '저자 중심 모니터링에 사용.',
      },
      expectedResponse: {
        en: 'Author profiles with recent outputs, co-author networks, and automated tracking setup.',
        ko: '최근 산출물, 공저자 네트워크, 자동 추적 설정이 포함된 저자 프로필.',
      },
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'Need ongoing awareness of field developments', ko: '분야 발전에 대한 지속적인 인식 필요 시' },
      { en: 'Maintaining living systematic reviews', ko: '리빙 체계적 문헌고찰 유지 시' },
      { en: 'Tracking competitor or collaborator research', ko: '경쟁자 또는 협력자 연구 추적 시' },
      { en: 'Identifying emerging methods or topics', ko: '신흥 방법 또는 주제 식별 시' },
    ],
    dontUseWhen: [
      { en: 'Conducting one-time systematic search (use B1)', ko: '일회성 체계적 검색 수행 시 (B1 사용)' },
      { en: 'Need to assess study quality (use B2)', ko: '연구 품질 평가 필요 시 (B2 사용)' },
      { en: 'Processing already-collected documents (use B5)', ko: '이미 수집된 문서 처리 시 (B5 사용)' },
    ],
    alternativeAgents: [
      { agentId: 'B1', condition: { en: 'Need comprehensive one-time search, not monitoring', ko: '모니터링이 아닌 포괄적 일회성 검색 필요 시' } },
      { agentId: 'B5', condition: { en: 'Have documents already, need parallel processing', ko: '문서가 이미 있고 병렬 처리 필요 시' } },
    ],
  },

  journey: {
    startState: {
      en: 'Feeling behind on recent developments in your field',
      ko: '분야의 최근 발전에 뒤처진 느낌',
    },
    transformation: [
      { en: 'Key data sources and alert systems configured', ko: '핵심 데이터 소스 및 알림 시스템 구성' },
      { en: 'Preprint servers, journals, and authors being tracked', ko: '사전인쇄물 서버, 저널, 저자 추적 중' },
      { en: 'Regular trend reports generated automatically', ko: '정기적인 트렌드 보고서 자동 생성' },
      { en: 'Emerging topics identified before mainstream adoption', ko: '주류 채택 전 신흥 주제 식별' },
    ],
    endState: {
      en: 'Always aware of the cutting edge with minimal effort',
      ko: '최소한의 노력으로 항상 최첨단 인식',
    },
    timeEstimate: '1 hour setup, then 30 min/week maintenance',
  },

  analogies: [
    {
      metaphor: {
        en: 'Like a weather radar for research',
        ko: '연구를 위한 기상 레이더처럼',
      },
      explanation: {
        en: 'Just as weather radar detects storms forming on the horizon before they arrive, B4 detects emerging research trends before they become obvious, giving you time to prepare and position your work.',
        ko: '기상 레이더가 폭풍이 도착하기 전 지평선에서 형성되는 것을 감지하는 것처럼, B4는 신흥 연구 트렌드가 명확해지기 전에 감지하여 준비하고 연구를 위치시킬 시간을 줍니다.',
      },
    },
    {
      metaphor: {
        en: 'Like a stock market analyst for academia',
        ko: '학계를 위한 주식 시장 분석가처럼',
      },
      explanation: {
        en: 'Market analysts track trading patterns, volume, and emerging companies to predict trends. B4 tracks citation patterns, preprint volume, and emerging researchers to predict which ideas will gain traction.',
        ko: '시장 분석가들이 거래 패턴, 거래량, 신흥 기업을 추적하여 트렌드를 예측하는 것처럼, B4는 인용 패턴, 사전인쇄물 거래량, 신흥 연구자를 추적하여 어떤 아이디어가 견인력을 얻을지 예측합니다.',
      },
    },
  ],

  proTips: [
    {
      tip: {
        en: 'Set up preprint alerts (arXiv, SSRN, PsyArXiv) for your keywords—you\'ll see findings 6-12 months before journal publication.',
        ko: '키워드에 대한 사전인쇄물 알림(arXiv, SSRN, PsyArXiv)을 설정하세요—저널 출판 6-12개월 전에 연구결과를 볼 수 있습니다.',
      },
      source: { en: 'Open science best practices', ko: '오픈 사이언스 모범 사례' },
      difficulty: 'beginner',
    },
    {
      tip: {
        en: 'Track not just topics but methods—a new analytical technique in one field often migrates to yours within 2-3 years.',
        ko: '주제뿐만 아니라 방법도 추적하세요—한 분야의 새로운 분석 기법은 종종 2-3년 내에 당신의 분야로 이동합니다.',
      },
      source: { en: 'Cross-disciplinary innovation patterns', ko: '학제간 혁신 패턴' },
      difficulty: 'intermediate',
    },
    {
      tip: {
        en: 'Use citation burst detection (e.g., in VOSviewer or CiteSpace) to find papers suddenly gaining attention—these often signal emerging subfields.',
        ko: '갑자기 주목받는 논문을 찾기 위해 인용 폭발 감지(예: VOSviewer 또는 CiteSpace)를 사용하세요—이것들은 종종 신흥 하위 분야를 신호합니다.',
      },
      source: { en: 'Bibliometric analysis methods', ko: '계량서지학 분석 방법' },
      difficulty: 'advanced',
    },
  ],

  badges: [
    { type: 'new', label: { en: 'Cutting-Edge Detection', ko: '최첨단 탐지' } },
    { type: 'deep', label: { en: 'Continuous Intelligence', ko: '지속적 인텔리전스' } },
  ],

  faq: [
    {
      question: {
        en: 'How is this different from just setting up Google Scholar alerts?',
        ko: 'Google Scholar 알림 설정과 어떻게 다른가요?',
      },
      answer: {
        en: 'B4 goes beyond simple keyword alerts by analyzing citation networks, detecting emerging clusters before they have established terminology, tracking preprint servers that Scholar misses, and providing synthesized trend reports rather than just lists of papers.',
        ko: 'B4는 단순 키워드 알림을 넘어 인용 네트워크를 분석하고, 확립된 용어가 생기기 전 신흥 클러스터를 감지하며, Scholar가 놓치는 사전인쇄물 서버를 추적하고, 단순한 논문 목록이 아닌 종합된 트렌드 보고서를 제공합니다.',
      },
    },
    {
      question: {
        en: 'How far ahead can you really predict research trends?',
        ko: '실제로 연구 트렌드를 얼마나 앞서 예측할 수 있나요?',
      },
      answer: {
        en: 'Typically 6-18 months before mainstream awareness. Preprints give 6-12 month lead time; citation burst detection adds another 6 months. Major paradigm shifts take longer but early signals are usually visible in workshop papers and grant abstracts.',
        ko: '일반적으로 주류 인식 6-18개월 전. 사전인쇄물은 6-12개월의 리드 타임을 제공; 인용 폭발 감지는 6개월을 더합니다. 주요 패러다임 전환은 더 오래 걸리지만 초기 신호는 보통 워크숍 논문과 연구비 초록에서 볼 수 있습니다.',
      },
    },
    {
      question: {
        en: 'Can B4 help with living systematic reviews?',
        ko: 'B4가 리빙 체계적 문헌고찰에 도움이 될 수 있나요?',
      },
      answer: {
        en: 'Yes, B4 is ideal for living reviews. It can maintain your original search strategy, monitor for new eligible studies, provide preliminary screening recommendations, and alert you when the evidence base may have changed enough to warrant update.',
        ko: '네, B4는 리빙 리뷰에 이상적입니다. 원래 검색 전략을 유지하고, 새로운 적격 연구를 모니터링하며, 예비 스크리닝 권장 사항을 제공하고, 증거 기반이 업데이트가 필요할 만큼 변경되었을 때 알려줍니다.',
      },
    },
  ],

  // === EXISTING FIELDS ===
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'Simple Tracking Avoidance', ko: '단순 추적 회피' }, purpose: { en: 'Go beyond keyword alerts', ko: '키워드 알림을 넘어서' } },
      { number: 2, title: { en: 'Strategic Monitoring', ko: '전략적 모니터링' }, purpose: { en: 'Identify emerging methodological trends', ko: '새로운 방법론적 동향 식별' } },
      { number: 3, title: { en: 'Differentiated Reports', ko: '차별화된 보고서' }, purpose: { en: 'Highlight creative research directions', ko: '창의적 연구 방향 강조' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_field', description: { en: 'Field to monitor', ko: '모니터링할 분야' } },
      { name: 'keywords', description: { en: 'Core keywords for tracking', ko: '추적을 위한 핵심 키워드' } },
    ],
  },
};
