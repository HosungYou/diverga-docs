import type { ExtendedAgentContent } from '../types';

export const a2Content: ExtendedAgentContent = {
  agentId: 'A2',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      { number: 1, title: { en: 'Modal Theory Detection', ko: '모달 이론 탐지' }, purpose: { en: 'Identify overused theories in the field', ko: '분야에서 과다 사용된 이론 식별' }, example: 'TAM (T-0.92), UTAUT (T-0.85)' },
      { number: 2, title: { en: 'Long-tail Theory Mining', ko: '롱테일 이론 마이닝' }, purpose: { en: 'Discover underutilized theoretical frameworks', ko: '과소 활용된 이론적 프레임워크 발굴' } },
      { number: 3, title: { en: 'Cross-domain Synthesis', ko: '교차 영역 종합' }, purpose: { en: 'Combine theories from different disciplines', ko: '다른 분야의 이론 결합' } },
      { number: 4, title: { en: 'Framework Alignment', ko: '프레임워크 정렬' }, purpose: { en: 'Ensure theory fits research question and paradigm', ko: '이론이 연구 질문 및 패러다임에 맞는지 확인' } },
      { number: 5, title: { en: 'Differentiated Presentation', ko: '차별화된 프레젠테이션' }, purpose: { en: 'Present options across T-Score spectrum', ko: 'T-Score 스펙트럼에 걸친 옵션 제시' } },
    ],
  },
  tScoreReference: {
    ranges: [
      { range: '0.80-1.00', label: { en: 'Modal (Overused)', ko: '모달 (과다 사용)' }, examples: ['TAM', 'UTAUT', 'TPB'] },
      { range: '0.60-0.79', label: { en: 'Established', ko: '확립됨' }, examples: ['Social Cognitive Theory', 'Self-Determination Theory'] },
      { range: '0.40-0.59', label: { en: 'Balanced', ko: '균형' }, examples: ['Hybrid TAM+SDT', 'Activity Theory'] },
      { range: '0.20-0.39', label: { en: 'Creative', ko: '창의적' }, examples: ['Actor-Network Theory', 'Threshold Concepts'] },
      { range: '0.00-0.19', label: { en: 'Innovative', ko: '혁신적' }, examples: ['New Materialism', 'Quantum Cognition'] },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_question', description: { en: 'Approved research question from A1', ko: 'A1에서 승인된 연구 질문' } },
      { name: 'research_field', description: { en: 'Academic discipline', ko: '학문 분야' } },
    ],
    optional: [
      { name: 'existing_theory', description: { en: 'Currently considered theory', ko: '현재 고려 중인 이론' } },
      { name: 'differentiation_goal', description: { en: 'Level of novelty desired', ko: '원하는 참신성 수준' } },
    ],
  },
  checkpoints: [
    { id: 'CP_THEORY_SELECTION', description: { en: 'Human must select theoretical framework from presented options', ko: '인간이 제시된 옵션에서 이론적 프레임워크를 선택해야 함' } },
  ],
  creativityMechanisms: [
    { name: 'Theory Transplanting', applicationTiming: { en: 'Phase 2: Apply theories from distant fields', ko: '2단계: 먼 분야의 이론 적용' }, usageExample: { en: 'Ecological systems theory in digital learning', ko: '디지털 학습에서의 생태 체계 이론' } },
    { name: 'Inversion', applicationTiming: { en: 'Phase 3: What if the opposite theory applies?', ko: '3단계: 반대 이론이 적용되면?' }, usageExample: { en: 'Instead of adoption → resistance theory', ko: '채택 대신 → 저항 이론' } },
  ],
  references: [
    'Davis, F. D. (1989). Perceived usefulness. MIS Quarterly.',
    'Deci, E. L., & Ryan, R. M. (2000). Self-determination theory. American Psychologist.',
    'Latour, B. (2005). Reassembling the Social. Oxford University Press.',
  ],
  exampleWorkflow: {
    before: { en: 'Using TAM to study chatbot adoption (T-0.92)', ko: 'TAM을 사용하여 챗봇 채택 연구 (T-0.92)' },
    after: { en: 'Integrating Self-Regulated Learning + Cognitive Load Theory for AI tutoring (T-0.42)', ko: '자기조절학습 + 인지부하이론을 AI 튜터링에 통합 (T-0.42)' },
  },

  // NEW USER-FRIENDLY FIELDS
  persona: {
    archetype: 'The Theory Librarian',
    personality: {
      en: 'Imagine a librarian who has read every theory ever published and remembers exactly which one would illuminate your specific puzzle. I\'m the matchmaker between your research question and the perfect theoretical lens - especially the ones gathering dust on forgotten shelves.',
      ko: '출판된 모든 이론을 읽고 당신의 특정 퍼즐을 밝혀줄 이론이 정확히 어떤 것인지 기억하는 사서를 상상해 보세요. 저는 당신의 연구 질문과 완벽한 이론적 렌즈 사이의 중매인입니다 - 특히 잊혀진 선반에서 먼지를 뒤집어쓴 것들도요.',
    },
    voiceSample: {
      en: '"TAM again? Let me show you something from sociology from 1972 that will make your reviewers say \'finally, something fresh.\'"',
      ko: '"또 TAM이요? 1972년 사회학에서 나온 것을 보여드릴게요 - 리뷰어들이 \'드디어 신선한 것\'이라고 말할 거예요."',
    },
    motto: {
      en: 'The best theory for your question already exists. You just haven\'t met it yet.',
      ko: '당신의 질문에 가장 좋은 이론은 이미 존재합니다. 아직 만나지 못했을 뿐이에요.',
    },
    catchphrase: {
      en: 'Everyone uses TAM. Let\'s find out what TAM\'s rivals knew that got forgotten.',
      ko: '모두가 TAM을 사용해요. TAM의 경쟁자들이 알고 있었지만 잊혀진 것을 찾아봅시다.',
    },
  },

  quickSummary: {
    oneLiner: {
      en: 'Finds the perfect theoretical framework by exploring beyond overused theories like TAM and UTAUT.',
      ko: 'TAM과 UTAUT 같은 과다 사용된 이론을 넘어 완벽한 이론적 프레임워크를 찾습니다.',
    },
    bestFor: [
      { en: 'Researchers defaulting to the same 5 theories everyone uses', ko: '모두가 사용하는 같은 5개 이론을 기본으로 하는 연구자' },
      { en: 'Quantitative studies needing theoretical grounding', ko: '이론적 근거가 필요한 양적 연구' },
      { en: 'Reviewers who said "strengthen your theoretical foundation"', ko: '"이론적 기반을 강화하라"고 말한 리뷰어 피드백' },
      { en: 'Cross-disciplinary research seeking fresh lenses', ko: '신선한 렌즈를 찾는 학제간 연구' },
    ],
    notFor: [
      { en: 'Grounded theory (no a priori framework needed)', ko: '근거이론 (사전 프레임워크 불필요)' },
      { en: 'When your committee mandates a specific theory', ko: '위원회가 특정 이론을 지정했을 때' },
      { en: 'Replication studies using original theory', ko: '원래 이론을 사용하는 재현 연구' },
    ],
    timeToResult: '20-40 minutes',
  },

  useCases: [
    {
      title: { en: 'Breaking the TAM Addiction', ko: 'TAM 중독에서 벗어나기' },
      scenario: {
        en: 'Dr. Chen\'s department has published 15 TAM papers in 3 years. The new journal editor sent a desk rejection saying "TAM saturation - find alternative lens."',
        ko: 'Chen 박사의 학과는 3년 동안 15편의 TAM 논문을 출판했습니다. 새 저널 편집자가 "TAM 포화 - 대안적 렌즈를 찾으라"며 데스크 리젝을 보냈습니다.',
      },
      outcome: {
        en: 'A2 identified Activity Theory (T-0.45) as fitting Dr. Chen\'s AI tool adoption study perfectly - it captured the sociotechnical aspects TAM missed. The revision was accepted.',
        ko: 'A2는 활동이론(T-0.45)이 Chen 박사의 AI 도구 채택 연구에 완벽하게 맞는다고 식별했습니다 - TAM이 놓친 사회기술적 측면을 포착했죠. 수정본이 수락되었습니다.',
      },
      discipline: 'Information Systems',
      complexity: 'intermediate',
    },
    {
      title: { en: 'The Psychology-Education Bridge', ko: '심리학-교육학 연결' },
      scenario: {
        en: 'Maria was studying student motivation but kept getting "limited theoretical contribution" feedback. Her question was strong but the theory felt disconnected.',
        ko: 'Maria는 학생 동기를 연구하고 있었지만 계속 "제한된 이론적 기여" 피드백을 받았습니다. 질문은 강했지만 이론이 분리된 느낌이었습니다.',
      },
      outcome: {
        en: 'A2\'s cross-domain synthesis phase combined Self-Determination Theory with Threshold Concepts from higher education. The hybrid framework (T-0.38) created a novel lens that explained why some students cross motivational thresholds while others don\'t.',
        ko: 'A2의 교차 영역 종합 단계는 자기결정이론을 고등교육의 임계 개념과 결합했습니다. 하이브리드 프레임워크(T-0.38)는 왜 일부 학생들은 동기적 임계점을 넘고 다른 학생들은 그렇지 않은지 설명하는 새로운 렌즈를 만들었습니다.',
      },
      discipline: 'Educational Psychology',
      complexity: 'advanced',
    },
    {
      title: { en: 'The First-Time Theorist', ko: '첫 이론 사용자' },
      scenario: {
        en: 'James had never used theory before - his Master\'s was purely empirical. Now doing a PhD, he felt overwhelmed by the theoretical landscape.',
        ko: 'James는 이전에 이론을 사용한 적이 없었습니다 - 석사는 순전히 경험적이었죠. 이제 박사과정을 하면서 이론적 지형에 압도당했습니다.',
      },
      outcome: {
        en: 'A2 provided a "theory primer" showing how his research question about workplace learning naturally aligned with Social Cognitive Theory. It explained not just WHICH theory, but WHY it fits and HOW to use it.',
        ko: 'A2는 직장 학습에 대한 그의 연구 질문이 사회인지이론과 자연스럽게 어떻게 일치하는지 보여주는 "이론 입문서"를 제공했습니다. 어떤 이론인지뿐만 아니라 왜 맞는지, 어떻게 사용하는지도 설명했습니다.',
      },
      discipline: 'Human Resource Development',
      complexity: 'beginner',
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'My approved research question is: "[Your RQ from A1]". My field is [field]. I\'m currently considering [theory name] but worried it\'s overused. What alternatives exist?',
        ko: '승인된 연구 질문은: "[A1에서의 RQ]"입니다. 제 분야는 [분야]입니다. 현재 [이론 이름]을 고려하고 있지만 과다 사용이 걱정됩니다. 어떤 대안이 있나요?',
      },
      context: {
        en: 'When you have a theory in mind but want to check for better options.',
        ko: '이론은 있지만 더 나은 옵션을 확인하고 싶을 때.',
      },
      expectedResponse: {
        en: 'A2 will assess your current theory\'s T-Score, then mine alternatives from adjacent and distant fields, presenting a spectrum from established to creative.',
        ko: 'A2는 현재 이론의 T-Score를 평가한 다음, 인접 및 먼 분야에서 대안을 채굴하여 확립된 것부터 창의적인 것까지 스펙트럼을 제시합니다.',
      },
    },
    {
      prompt: {
        en: 'I\'m studying [phenomenon] in [context]. I have no idea what theory to use. Can you recommend theoretical frameworks across the T-Score spectrum?',
        ko: '[맥락]에서 [현상]을 연구하고 있습니다. 어떤 이론을 사용해야 할지 모르겠습니다. T-Score 스펙트럼에 걸친 이론적 프레임워크를 추천해 주시겠어요?',
      },
      context: {
        en: 'Starting from scratch without any theoretical direction.',
        ko: '이론적 방향 없이 처음부터 시작할 때.',
      },
      expectedResponse: {
        en: 'A2 will analyze your phenomenon and context, then present 5-7 theoretical options ranging from modal (safe but undifferentiated) to innovative (novel but needs justification).',
        ko: 'A2는 현상과 맥락을 분석한 다음, 모달(안전하지만 차별화되지 않음)에서 혁신적(새롭지만 정당화 필요)까지 5-7개의 이론적 옵션을 제시합니다.',
      },
    },
    {
      prompt: {
        en: 'My reviewers said to "strengthen theoretical foundation." Current theory: [name]. Research question: [RQ]. What\'s missing and how do I fix it?',
        ko: '리뷰어가 "이론적 기반을 강화하라"고 했습니다. 현재 이론: [이름]. 연구 질문: [RQ]. 무엇이 부족하고 어떻게 고치나요?',
      },
      context: {
        en: 'Responding to reviewer feedback about weak theory.',
        ko: '약한 이론에 대한 리뷰어 피드백에 응답할 때.',
      },
      expectedResponse: {
        en: 'A2 will diagnose why your current framework is insufficient (scope, fit, novelty) and recommend either deepening the current theory or integrating complementary frameworks.',
        ko: 'A2는 현재 프레임워크가 왜 불충분한지(범위, 적합성, 참신성) 진단하고 현재 이론을 심화하거나 보완적 프레임워크를 통합하도록 권장합니다.',
      },
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'You have a research question but no theoretical home', ko: '연구 질문은 있지만 이론적 기반이 없을 때' },
      { en: 'Your default theory (TAM, UTAUT, etc.) feels stale', ko: '기본 이론(TAM, UTAUT 등)이 진부하게 느껴질 때' },
      { en: 'Reviewer feedback mentions weak theoretical grounding', ko: '리뷰어 피드백이 약한 이론적 근거를 언급할 때' },
      { en: 'You want to differentiate through theoretical novelty', ko: '이론적 참신성으로 차별화하고 싶을 때' },
      { en: 'Building a hybrid/integrated framework', ko: '하이브리드/통합 프레임워크를 구축할 때' },
    ],
    dontUseWhen: [
      { en: 'Using grounded theory approach (theory emerges from data)', ko: '근거이론 접근법 사용 시 (이론이 데이터에서 나옴)' },
      { en: 'Theory is mandated by funding agency or committee', ko: '이론이 펀딩 기관이나 위원회에 의해 지정됨' },
      { en: 'Conducting a theory replication study', ko: '이론 재현 연구 수행 시' },
    ],
    alternativeAgents: [
      { agentId: 'A1', condition: { en: 'Your research question itself needs refinement first', ko: '연구 질문 자체가 먼저 정제가 필요할 때' } },
      { agentId: 'A5', condition: { en: 'You need paradigm guidance before theory selection', ko: '이론 선택 전에 패러다임 가이드가 필요할 때' } },
      { agentId: 'A6', condition: { en: 'You have theory but need to visualize the framework', ko: '이론은 있지만 프레임워크를 시각화해야 할 때' } },
    ],
  },

  journey: {
    startState: {
      en: 'You\'re stuck using the same overused theory everyone else uses, or have no theoretical direction at all.',
      ko: '다른 모든 사람이 사용하는 동일한 과다 사용된 이론을 사용하거나, 이론적 방향이 전혀 없습니다.',
    },
    transformation: [
      { en: 'Phase 1: Detect if your current/default theory is modal (overused)', ko: '1단계: 현재/기본 이론이 모달(과다 사용)인지 감지' },
      { en: 'Phase 2: Mine underutilized theories from your field and adjacent disciplines', ko: '2단계: 당신의 분야와 인접 학문에서 과소 활용된 이론 채굴' },
      { en: 'Phase 3: Synthesize cross-domain possibilities (hybrid frameworks)', ko: '3단계: 교차 영역 가능성 종합 (하이브리드 프레임워크)' },
      { en: 'Phase 4: Verify alignment with your RQ, paradigm, and methodology', ko: '4단계: RQ, 패러다임, 방법론과의 정렬 확인' },
      { en: 'Phase 5: Present options with T-Scores and justifications', ko: '5단계: T-Score와 정당화와 함께 옵션 제시' },
    ],
    endState: {
      en: 'A well-justified theoretical framework that differentiates your study and aligns perfectly with your research question.',
      ko: '당신의 연구를 차별화하고 연구 질문과 완벽하게 일치하는 잘 정당화된 이론적 프레임워크.',
    },
    timeEstimate: '20-40 minutes',
  },

  analogies: [
    {
      metaphor: {
        en: 'Like a Wine Sommelier',
        ko: '와인 소믈리에처럼',
      },
      explanation: {
        en: 'A sommelier doesn\'t just recommend "red wine" - they understand your meal, preferences, and budget to suggest the perfect pairing you\'d never find yourself. A2 does this with theories: understanding your research question to find the perfect theoretical pairing from bottles you didn\'t know existed.',
        ko: '소믈리에는 그냥 "레드 와인"을 추천하지 않습니다 - 당신의 식사, 선호도, 예산을 이해하고 스스로는 절대 찾지 못할 완벽한 페어링을 제안합니다. A2는 이론에 이것을 합니다: 당신의 연구 질문을 이해하고 존재하는지 몰랐던 병에서 완벽한 이론적 페어링을 찾습니다.',
      },
    },
    {
      metaphor: {
        en: 'Like a Dating App for Ideas',
        ko: '아이디어를 위한 데이팅 앱처럼',
      },
      explanation: {
        en: 'Your research question is looking for its perfect match. Without A2, you swipe right on the same popular theories everyone dates. A2 looks at compatibility factors you didn\'t consider and introduces you to theories that are actually a great fit - not just popular.',
        ko: '당신의 연구 질문은 완벽한 매치를 찾고 있습니다. A2 없이는 모두가 데이트하는 같은 인기 이론에 오른쪽으로 스와이프합니다. A2는 당신이 고려하지 않은 호환성 요소를 보고 인기 있는 것이 아니라 실제로 잘 맞는 이론을 소개합니다.',
      },
    },
  ],

  proTips: [
    {
      tip: {
        en: 'When using hybrid frameworks, ensure both theories share compatible ontological assumptions. A2 checks this in Phase 4, but you should ask explicitly if unsure.',
        ko: '하이브리드 프레임워크 사용 시, 두 이론이 호환 가능한 존재론적 가정을 공유하는지 확인하세요. A2는 4단계에서 이를 확인하지만, 확실하지 않으면 명시적으로 물어보세요.',
      },
      source: { en: 'Theory integration methodologists', ko: '이론 통합 방법론자' },
      difficulty: 'advanced',
    },
    {
      tip: {
        en: 'A "creative" T-Score theory (0.20-0.39) requires more literature review space to justify. Budget an extra section in your manuscript.',
        ko: '"창의적" T-Score 이론(0.20-0.39)은 정당화를 위해 더 많은 문헌 검토 공간이 필요합니다. 원고에 추가 섹션을 예산하세요.',
      },
      source: { en: 'Manuscript structure best practices', ko: '원고 구조 모범 사례' },
      difficulty: 'intermediate',
    },
    {
      tip: {
        en: 'Run A2 AFTER A1. A differentiated research question (T<0.50) often naturally suggests differentiated theories. If you use A2 with a modal question, you might get generic recommendations.',
        ko: 'A2를 A1 다음에 실행하세요. 차별화된 연구 질문(T<0.50)은 종종 자연스럽게 차별화된 이론을 제안합니다. 모달 질문으로 A2를 사용하면 일반적인 권장 사항을 받을 수 있습니다.',
      },
      source: { en: 'Diverga workflow optimization', ko: 'Diverga 워크플로우 최적화' },
      difficulty: 'beginner',
    },
  ],

  badges: [
    { type: 'essential' },
    { type: 'popular' },
  ],

  faq: [
    {
      question: {
        en: 'Can A2 help if I\'m required to use a specific theory by my committee?',
        ko: '위원회에서 특정 이론 사용을 요구하면 A2가 도움이 될 수 있나요?',
      },
      answer: {
        en: 'Yes! Even with a mandated theory, A2 can help you find complementary theories to integrate, identify which aspects of the mandated theory to emphasize, or find novel applications of that theory in your specific context.',
        ko: '네! 지정된 이론이 있더라도 A2는 통합할 보완적 이론을 찾고, 지정된 이론의 어떤 측면을 강조할지 식별하거나, 특정 맥락에서 그 이론의 새로운 적용을 찾는 데 도움을 줄 수 있습니다.',
      },
    },
    {
      question: {
        en: 'What if I don\'t understand the theories A2 suggests?',
        ko: 'A2가 제안하는 이론을 이해하지 못하면 어떻게 하나요?',
      },
      answer: {
        en: 'A2 provides a "theory primer" for each suggestion - explaining core constructs, key citations, and why it fits your question. If you need deeper understanding, A2 can connect you to foundational readings and show how others have applied the theory.',
        ko: 'A2는 각 제안에 대해 "이론 입문서"를 제공합니다 - 핵심 구성, 주요 인용, 그리고 왜 당신의 질문에 맞는지 설명합니다. 더 깊은 이해가 필요하면 A2가 기초 문헌에 연결하고 다른 사람들이 이론을 어떻게 적용했는지 보여줄 수 있습니다.',
      },
    },
    {
      question: {
        en: 'Is it risky to use a "Creative" or "Innovative" T-Score theory?',
        ko: '"창의적" 또는 "혁신적" T-Score 이론을 사용하는 것이 위험한가요?',
      },
      answer: {
        en: 'Some risk, but often worth it. Creative theories (0.20-0.39) need more justification but signal theoretical contribution. Innovative (0.00-0.19) requires you to essentially introduce the theory to your field. A2 helps you decide if the novelty payoff is worth the justification effort.',
        ko: '약간의 위험이 있지만 종종 가치가 있습니다. 창의적 이론(0.20-0.39)은 더 많은 정당화가 필요하지만 이론적 기여를 신호합니다. 혁신적(0.00-0.19)은 본질적으로 당신의 분야에 이론을 소개해야 합니다. A2는 참신성 보상이 정당화 노력의 가치가 있는지 결정하는 데 도움을 줍니다.',
      },
    },
  ],
};
