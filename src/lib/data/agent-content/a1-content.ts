import type { ExtendedAgentContent } from '../types';

export const a1Content: ExtendedAgentContent = {
  agentId: 'A1',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      { number: 1, title: { en: 'Modal Question Identification', ko: '모달 질문 식별' }, purpose: { en: 'Identify the most predictable research questions AI would suggest', ko: 'AI가 제안할 가장 예측 가능한 연구 질문 식별' }, example: '"How does technology affect learning outcomes?"' },
      { number: 2, title: { en: 'Long-tail Exploration', ko: '롱테일 탐색' }, purpose: { en: 'Generate unconventional alternatives from the typicality spectrum', ko: '전형성 스펙트럼에서 비관습적 대안 생성' } },
      { number: 3, title: { en: 'Feasibility Assessment', ko: '실현 가능성 평가' }, purpose: { en: 'Evaluate whether creative alternatives are researchable', ko: '창의적 대안이 연구 가능한지 평가' } },
      { number: 4, title: { en: 'T-Score Calibration', ko: 'T-Score 보정' }, purpose: { en: 'Assign typicality scores and present spectrum of options', ko: '전형성 점수 할당 및 옵션 스펙트럼 제시' } },
      { number: 5, title: { en: 'Differentiated Recommendation', ko: '차별화된 추천' }, purpose: { en: 'Present final recommendation with justification', ko: '정당화와 함께 최종 추천 제시' } },
    ],
  },
  tScoreReference: {
    ranges: [
      { range: '0.80-1.00', label: { en: 'Modal (Avoid)', ko: '모달 (피하세요)' }, examples: ['Does X improve Y?', 'What is the impact of Z?'] },
      { range: '0.60-0.79', label: { en: 'Established', ko: '확립됨' }, examples: ['How does X mediate the relationship between Y and Z?'] },
      { range: '0.40-0.59', label: { en: 'Emerging', ko: '새로운' }, examples: ['What mechanisms underlie X in context Y?'] },
      { range: '0.20-0.39', label: { en: 'Creative', ko: '창의적' }, examples: ['How does X reconstitute Y through Z?'] },
      { range: '0.00-0.19', label: { en: 'Innovative (Caution)', ko: '혁신적 (주의)' }, examples: ['Paradigm-challenging questions'] },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_topic', description: { en: 'General area of interest', ko: '관심 분야' } },
      { name: 'research_field', description: { en: 'Academic discipline', ko: '학문 분야' } },
    ],
    optional: [
      { name: 'existing_question', description: { en: 'Draft research question to refine', ko: '정제할 초안 연구 질문' } },
      { name: 'framework_preference', description: { en: 'FINER, PICO, or SPIDER', ko: 'FINER, PICO 또는 SPIDER' } },
    ],
  },
  outputFormat: {
    sections: [
      { title: 'Modal Analysis', content: { en: 'Identifies top 3 most predictable questions', ko: '가장 예측 가능한 상위 3개 질문 식별' } },
      { title: 'Alternative Spectrum', content: { en: '5-7 questions across T-Score range', ko: 'T-Score 범위에 걸친 5-7개 질문' } },
      { title: 'Recommendation', content: { en: 'Top pick with T-Score and justification', ko: 'T-Score 및 정당화와 함께 최고 추천' } },
    ],
  },
  checkpoints: [
    { id: 'CP_RESEARCH_DIRECTION', description: { en: 'Human must approve final research question', ko: '인간이 최종 연구 질문을 승인해야 함' } },
  ],
  creativityMechanisms: [
    { name: 'Reverse Brainstorming', applicationTiming: { en: 'Phase 1: List questions to avoid', ko: '1단계: 피해야 할 질문 목록' }, usageExample: { en: '"What would GPT-4 suggest as #1?" → avoid that', ko: '"GPT-4가 1위로 제안할 것은?" → 그것을 피하세요' } },
    { name: 'Domain Transplant', applicationTiming: { en: 'Phase 2: Borrow from adjacent fields', ko: '2단계: 인접 분야에서 차용' }, usageExample: { en: 'Apply network theory from physics to education', ko: '물리학의 네트워크 이론을 교육에 적용' } },
  ],
  references: [
    'Hulley, S. B., et al. (2013). Designing Clinical Research. FINER criteria.',
    'Richardson, W. S., et al. (1995). The well-built clinical question. ACP Journal Club.',
    'Cooke, A., Smith, D., & Booth, A. (2012). Beyond PICO: The SPIDER tool.',
  ],
  exampleWorkflow: {
    before: { en: 'How does AI affect student learning outcomes? (T-0.92)', ko: 'AI는 학생 학습 결과에 어떤 영향을 미치는가? (T-0.92)' },
    after: { en: 'How do AI-mediated epistemic negotiations reshape collaborative knowledge construction in asynchronous learning? (T-0.35)', ko: 'AI 매개 인식론적 협상은 비동기 학습에서 협력적 지식 구성을 어떻게 재구성하는가? (T-0.35)' },
  },

  // NEW USER-FRIENDLY FIELDS
  persona: {
    archetype: 'The Socratic Sculptor',
    personality: {
      en: 'Like Michelangelo who saw David within the marble, I see the unique research question hidden within your vague ideas. Through careful questioning, I chip away the generic until your original contribution emerges.',
      ko: '미켈란젤로가 대리석 안에서 다비드상을 본 것처럼, 저는 당신의 모호한 아이디어 속에 숨겨진 독특한 연구 질문을 봅니다. 신중한 질문을 통해 일반적인 것을 깎아내어 당신의 독창적인 기여가 드러나게 합니다.',
    },
    voiceSample: {
      en: '"That question would get you desk-rejected. Let me show you why... and what would make editors excited instead."',
      ko: '"그 질문으로는 데스크 리젝을 받을 거예요. 왜 그런지 보여드릴게요... 그리고 편집자들을 흥분시킬 질문은 무엇인지도요."',
    },
    motto: {
      en: 'Your best question is hiding behind the obvious one.',
      ko: '당신의 최고의 질문은 뻔한 질문 뒤에 숨어 있습니다.',
    },
    catchphrase: {
      en: 'What would ChatGPT suggest? Great - now let\'s find what it would never think of.',
      ko: 'ChatGPT가 뭘 제안할까요? 좋아요 - 이제 그것이 절대 생각하지 못할 것을 찾아봅시다.',
    },
  },

  quickSummary: {
    oneLiner: {
      en: 'Transforms generic research questions into publication-worthy originals using the T-Score system.',
      ko: 'T-Score 시스템을 사용하여 일반적인 연구 질문을 출판 가치 있는 독창적 질문으로 변환합니다.',
    },
    bestFor: [
      { en: 'Researchers stuck with "How does X affect Y?" questions', ko: '"X가 Y에 어떤 영향을 미치는가?" 질문에 막힌 연구자' },
      { en: 'Dissertation students seeking differentiation', ko: '차별화를 원하는 논문 작성 학생' },
      { en: 'Anyone tired of desk rejections', ko: '데스크 리젝에 지친 모든 분' },
      { en: 'Early-stage research design', ko: '초기 단계 연구 설계' },
      { en: 'Pivoting from a crowded topic', ko: '과밀 주제에서 피벗하기' },
    ],
    notFor: [
      { en: 'Already have a unique, refined question', ko: '이미 독특하고 정제된 질문이 있는 경우' },
      { en: 'Replication studies (intentionally modal)', ko: '재현 연구 (의도적으로 모달)' },
      { en: 'Commissioned research with fixed questions', ko: '고정된 질문이 있는 위탁 연구' },
    ],
    timeToResult: '15-30 minutes',
  },

  useCases: [
    {
      title: { en: 'The Overworked PhD Student', ko: '과로한 박사과정생' },
      scenario: {
        en: 'Sarah spent 6 months on "How does online learning affect student engagement?" - a question with 10,000+ existing papers. Her advisor said to "find an angle."',
        ko: 'Sarah는 "온라인 학습이 학생 참여에 어떤 영향을 미치는가?"라는 질문에 6개월을 보냈습니다 - 이미 10,000편 이상의 논문이 있는 질문이었죠. 지도교수는 "각도를 찾으라"고 했습니다.',
      },
      outcome: {
        en: 'A1 identified her question as T-0.94 (modal). Through domain transplant, she discovered: "How do asynchronous peer-facilitated epistemic negotiations influence self-regulated learning trajectories?" (T-0.32). She published in a top-tier journal.',
        ko: 'A1은 그녀의 질문을 T-0.94 (모달)로 식별했습니다. 영역 이식을 통해 발견: "비동기식 동료 촉진 인식론적 협상이 자기조절 학습 궤적에 어떤 영향을 미치는가?" (T-0.32). 그녀는 최상위 저널에 게재했습니다.',
      },
      discipline: 'Education',
      complexity: 'intermediate',
    },
    {
      title: { en: 'The Industry Researcher Pivot', ko: '산업 연구자의 피벗' },
      scenario: {
        en: 'Marcus in HR analytics had "What factors predict employee turnover?" - useful for business but unpublishable. He needed academic credibility.',
        ko: 'HR 분석가 Marcus는 "어떤 요인이 직원 이직을 예측하는가?"라는 질문이 있었습니다 - 비즈니스에는 유용하지만 출판은 불가능했죠. 그는 학술적 신뢰가 필요했습니다.',
      },
      outcome: {
        en: 'Using the long-tail exploration phase, A1 surfaced: "How do psychological contract violations cascade through team identity networks to amplify turnover contagion?" (T-0.28). His paper won best conference paper.',
        ko: '롱테일 탐색 단계를 통해 A1이 발견: "심리적 계약 위반이 팀 정체성 네트워크를 통해 이직 전염을 어떻게 증폭시키는가?" (T-0.28). 그의 논문은 최우수 학회 논문상을 받았습니다.',
      },
      discipline: 'Organizational Psychology',
      complexity: 'advanced',
    },
    {
      title: { en: 'The Undergraduate Thesis', ko: '학부 논문' },
      scenario: {
        en: 'Jin wanted to study "social media and mental health" for his honors thesis but his committee said it was too broad.',
        ko: 'Jin은 우등생 논문으로 "소셜 미디어와 정신 건강"을 연구하고 싶었지만 위원회는 너무 광범위하다고 했습니다.',
      },
      outcome: {
        en: 'A1\'s feasibility assessment phase helped narrow to an achievable scope: "How do temporal patterns of social comparison on Instagram stories correlate with evening rumination in college freshmen?" (T-0.45). Completed in one semester.',
        ko: 'A1의 실현 가능성 평가 단계는 달성 가능한 범위로 좁히는 데 도움: "인스타그램 스토리에서의 사회적 비교의 시간적 패턴이 대학 신입생의 저녁 반추와 어떻게 상관관계가 있는가?" (T-0.45). 한 학기 만에 완료.',
      },
      discipline: 'Psychology',
      complexity: 'beginner',
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'My research topic is [AI in education]. My field is [Educational Technology]. I have a draft question: "How does AI affect learning?" Help me find a more original angle.',
        ko: '제 연구 주제는 [교육에서의 AI]입니다. 제 분야는 [교육 공학]입니다. 초안 질문이 있습니다: "AI는 학습에 어떤 영향을 미치는가?" 더 독창적인 각도를 찾도록 도와주세요.',
      },
      context: {
        en: 'Best for when you have a vague topic but no clear question yet.',
        ko: '모호한 주제는 있지만 명확한 질문이 없을 때 가장 좋습니다.',
      },
      expectedResponse: {
        en: 'A1 will first identify why your question is modal (T-0.90+), then generate 5-7 alternatives across the T-Score spectrum with feasibility notes.',
        ko: 'A1은 먼저 당신의 질문이 왜 모달인지(T-0.90+) 식별한 다음, 실현 가능성 메모와 함께 T-Score 스펙트럼에 걸쳐 5-7개의 대안을 생성합니다.',
      },
    },
    {
      prompt: {
        en: 'I keep getting desk rejected. My question is: "[Your exact question]". What\'s wrong with it and how can I make it more publishable?',
        ko: '계속 데스크 리젝을 받고 있습니다. 제 질문은: "[정확한 질문]"입니다. 무엇이 문제이고 어떻게 더 출판 가능하게 만들 수 있나요?',
      },
      context: {
        en: 'For researchers frustrated by rejections and wanting specific diagnosis.',
        ko: '리젝에 좌절하고 구체적인 진단을 원하는 연구자용.',
      },
      expectedResponse: {
        en: 'A1 will diagnose exactly why your question fails (modal saturation, vague constructs, methodological mismatch) and provide targeted refinements.',
        ko: 'A1은 당신의 질문이 실패하는 이유를 정확히 진단하고(모달 포화, 모호한 구성, 방법론적 불일치) 맞춤형 개선을 제공합니다.',
      },
    },
    {
      prompt: {
        en: 'Generate research questions about [topic] in [field]. I want something that would surprise reviewers - target T-Score around 0.30-0.40.',
        ko: '[분야]에서 [주제]에 대한 연구 질문을 생성해주세요. 리뷰어들을 놀라게 할 것을 원합니다 - 목표 T-Score는 0.30-0.40 정도.',
      },
      context: {
        en: 'For experienced researchers who understand T-Scores and want creative options.',
        ko: 'T-Score를 이해하고 창의적인 옵션을 원하는 경험 많은 연구자용.',
      },
      expectedResponse: {
        en: 'A1 will skip the modal analysis and jump directly to creative generation, using domain transplant and constraint reversal techniques.',
        ko: 'A1은 모달 분석을 건너뛰고 영역 이식 및 제약 반전 기법을 사용하여 창의적 생성으로 바로 이동합니다.',
      },
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'Starting a new research project from scratch', ko: '새 연구 프로젝트를 처음부터 시작할 때' },
      { en: 'Your current question feels "too obvious"', ko: '현재 질문이 "너무 뻔하다"고 느껴질 때' },
      { en: 'Advisor feedback says "find your angle"', ko: '지도교수 피드백이 "각도를 찾으라"고 할 때' },
      { en: 'Desk rejected without review', ko: '심사 없이 데스크 리젝 당했을 때' },
      { en: 'Want to differentiate from existing literature', ko: '기존 문헌과 차별화하고 싶을 때' },
    ],
    dontUseWhen: [
      { en: 'You already have a refined, unique question approved by your committee', ko: '위원회에서 승인된 정제되고 독특한 질문이 이미 있을 때' },
      { en: 'Conducting a strict replication study', ko: '엄격한 재현 연구를 수행할 때' },
      { en: 'The research question is predetermined by funding requirements', ko: '연구 질문이 펀딩 요구사항에 의해 미리 결정되어 있을 때' },
    ],
    alternativeAgents: [
      { agentId: 'A2', condition: { en: 'You have a question but need a theoretical framework', ko: '질문은 있지만 이론적 프레임워크가 필요할 때' } },
      { agentId: 'A3', condition: { en: 'You want to stress-test your question before committing', ko: '확정 전에 질문을 스트레스 테스트하고 싶을 때' } },
      { agentId: 'B1', condition: { en: 'You need to explore literature first before forming questions', ko: '질문을 형성하기 전에 먼저 문헌을 탐색해야 할 때' } },
    ],
  },

  journey: {
    startState: {
      en: 'You have a vague topic and a generic question that sounds like every other paper.',
      ko: '모호한 주제와 다른 모든 논문처럼 들리는 일반적인 질문이 있습니다.',
    },
    transformation: [
      { en: 'Phase 1: Discover why your question is predictable (modal detection)', ko: '1단계: 왜 당신의 질문이 예측 가능한지 발견 (모달 탐지)' },
      { en: 'Phase 2: Explore creative alternatives from distant domains', ko: '2단계: 먼 영역에서 창의적 대안 탐색' },
      { en: 'Phase 3: Filter for feasibility - can you actually research this?', ko: '3단계: 실현 가능성 필터링 - 실제로 연구할 수 있나요?' },
      { en: 'Phase 4: Calibrate novelty with T-Score system', ko: '4단계: T-Score 시스템으로 참신성 보정' },
      { en: 'Phase 5: Receive justified recommendation with confidence level', ko: '5단계: 신뢰 수준과 함께 정당화된 추천 받기' },
    ],
    endState: {
      en: 'A differentiated research question with known T-Score, clear contribution, and high publishability.',
      ko: '알려진 T-Score, 명확한 기여, 높은 출판 가능성을 가진 차별화된 연구 질문.',
    },
    timeEstimate: '15-30 minutes',
  },

  analogies: [
    {
      metaphor: {
        en: 'Like a Diamond Cutter',
        ko: '다이아몬드 커터처럼',
      },
      explanation: {
        en: 'A rough diamond looks like any other rock. The cutter studies it, finds the unique inclusions and crystal structure, then makes precise cuts to reveal brilliance invisible to others. A1 does this with your research ideas - finding the unique angle hidden in what seems ordinary.',
        ko: '원석 다이아몬드는 다른 돌처럼 보입니다. 커터는 그것을 연구하고, 독특한 내포물과 결정 구조를 찾아낸 다음, 정밀한 컷을 통해 다른 사람들에게 보이지 않는 광채를 드러냅니다. A1은 당신의 연구 아이디어에 이것을 합니다 - 평범해 보이는 것에서 숨겨진 독특한 각도를 찾습니다.',
      },
    },
    {
      metaphor: {
        en: 'Like a GPS Avoiding Traffic',
        ko: '교통을 피하는 GPS처럼',
      },
      explanation: {
        en: 'Everyone\'s GPS suggests the same "fastest route" and creates traffic jams. A1 is like Waze finding the back roads no one else knows about - getting you to publication faster by avoiding the crowded modal questions everyone else is asking.',
        ko: '모든 사람의 GPS는 같은 "가장 빠른 경로"를 제안하고 교통 체증을 만듭니다. A1은 아무도 모르는 뒷길을 찾는 Waze와 같습니다 - 다른 모든 사람이 묻는 붐비는 모달 질문을 피해 더 빨리 출판으로 데려다 줍니다.',
      },
    },
  ],

  proTips: [
    {
      tip: {
        en: 'Always check your T-Score before writing your literature review. A modal question (T>0.80) means your lit review will be 50+ pages of "me too" studies.',
        ko: '문헌 검토를 작성하기 전에 항상 T-Score를 확인하세요. 모달 질문(T>0.80)은 문헌 검토가 50페이지 이상의 "나도" 연구가 될 것임을 의미합니다.',
      },
      source: { en: 'Experienced dissertation chairs', ko: '경험 많은 논문 지도 위원장' },
      difficulty: 'intermediate',
    },
    {
      tip: {
        en: 'The "sweet spot" is T-Score 0.30-0.50: creative enough to stand out, established enough to have methodological precedent.',
        ko: '"스위트 스팟"은 T-Score 0.30-0.50입니다: 눈에 띌 만큼 창의적이고, 방법론적 선례가 있을 만큼 확립되어 있습니다.',
      },
      source: { en: 'Journal editor feedback patterns', ko: '저널 편집자 피드백 패턴' },
      difficulty: 'advanced',
    },
    {
      tip: {
        en: 'When A1 suggests domain transplant, check if that distant field has a methodology you can borrow too.',
        ko: 'A1이 영역 이식을 제안할 때, 그 먼 분야에 빌릴 수 있는 방법론도 있는지 확인하세요.',
      },
      source: { en: 'Interdisciplinary research best practices', ko: '학제간 연구 모범 사례' },
      difficulty: 'advanced',
    },
  ],

  badges: [
    { type: 'essential' },
    { type: 'popular' },
  ],

  faq: [
    {
      question: {
        en: 'What if my advisor insists on a modal question?',
        ko: '지도교수가 모달 질문을 고집하면 어떻게 하나요?',
      },
      answer: {
        en: 'Use A1 to find a "sub-question" within the modal topic. Your main question can be what your advisor wants, but your unique contribution comes from a differentiated sub-question that A1 helps you discover.',
        ko: 'A1을 사용하여 모달 주제 내에서 "하위 질문"을 찾으세요. 주요 질문은 지도교수가 원하는 것이 될 수 있지만, 당신의 독특한 기여는 A1이 발견하도록 도와주는 차별화된 하위 질문에서 나옵니다.',
      },
    },
    {
      question: {
        en: 'Is a lower T-Score always better?',
        ko: '낮은 T-Score가 항상 더 좋은가요?',
      },
      answer: {
        en: 'No! T-Score below 0.20 means your question might be too novel - lacking methodological precedent, existing measures, or theoretical grounding. The sweet spot is 0.30-0.50. A1\'s feasibility assessment phase specifically checks for "too innovative" risks.',
        ko: '아니요! T-Score 0.20 미만은 질문이 너무 새로울 수 있음을 의미합니다 - 방법론적 선례, 기존 측정, 또는 이론적 근거가 부족합니다. 스위트 스팟은 0.30-0.50입니다. A1의 실현 가능성 평가 단계는 특히 "너무 혁신적인" 위험을 확인합니다.',
      },
    },
    {
      question: {
        en: 'How is this different from just brainstorming with regular ChatGPT?',
        ko: '일반 ChatGPT로 브레인스토밍하는 것과 어떻게 다른가요?',
      },
      answer: {
        en: 'Regular ChatGPT gives you modal answers by design - it predicts the most likely response. A1 is specifically engineered to identify and AVOID modal outputs, using the T-Score calibration system. It also includes feasibility checks that ChatGPT lacks.',
        ko: '일반 ChatGPT는 설계상 모달 답변을 제공합니다 - 가장 가능성 있는 응답을 예측합니다. A1은 T-Score 보정 시스템을 사용하여 모달 출력을 식별하고 피하도록 특별히 설계되었습니다. 또한 ChatGPT에 없는 실현 가능성 검사도 포함됩니다.',
      },
    },
  ],
};
