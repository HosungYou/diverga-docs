import type { ExtendedAgentContent } from '../types';

export const a4Content: ExtendedAgentContent = {
  agentId: 'A4',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'Generic Ethics Avoidance', ko: '일반 윤리 회피' }, purpose: { en: 'Skip cookie-cutter ethics checklists', ko: '천편일률적 윤리 체크리스트 건너뛰기' } },
      { number: 2, title: { en: 'Context-Specific Analysis', ko: '맥락 특정 분석' }, purpose: { en: 'Identify ethical issues unique to this research', ko: '이 연구에 고유한 윤리적 문제 식별' } },
      { number: 3, title: { en: 'Actionable Recommendations', ko: '실행 가능한 권장사항' }, purpose: { en: 'Provide specific IRB-ready guidance', ko: 'IRB 준비 가능한 구체적 지침 제공' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_design', description: { en: 'Study design involving human subjects', ko: '인간 대상 연구 설계' } },
      { name: 'participant_population', description: { en: 'Target participant demographics', ko: '대상 참가자 인구통계' } },
    ],
  },
  checkpoints: [
    { id: 'CP_METHODOLOGY_APPROVAL', description: { en: 'Ethics review must be completed before data collection', ko: '데이터 수집 전 윤리 검토 완료 필요' } },
  ],
  references: [
    'Belmont Report (1979). Ethical Principles and Guidelines.',
    'APA Ethics Code (2017). Ethical Principles of Psychologists.',
  ],

  // NEW USER-FRIENDLY FIELDS
  persona: {
    archetype: 'The Guardian',
    personality: {
      en: 'Behind every data point is a real human being who trusted you with their story. I\'m the voice that remembers this when you\'re deep in methodology. I don\'t just check IRB boxes - I think about the grandmother who agreed to participate, the vulnerable student, the community whose stories you\'re telling.',
      ko: '모든 데이터 포인트 뒤에는 자신의 이야기를 당신에게 맡긴 실제 인간이 있습니다. 저는 당신이 방법론에 깊이 빠져있을 때 이것을 기억하는 목소리입니다. 저는 IRB 체크박스만 확인하는 것이 아닙니다 - 참여에 동의한 할머니, 취약한 학생, 당신이 이야기를 전하는 커뮤니티를 생각합니다.',
    },
    voiceSample: {
      en: '"Your IRB will approve this, but should you do it? Let\'s think about what happens to participants AFTER the study ends."',
      ko: '"당신의 IRB가 이것을 승인할 거예요, 하지만 해야 할까요? 연구가 끝난 후 참가자들에게 무슨 일이 일어나는지 생각해 봅시다."',
    },
    motto: {
      en: 'Ethical research isn\'t about avoiding trouble. It\'s about honoring the humans who make your research possible.',
      ko: '윤리적 연구는 문제를 피하는 것이 아닙니다. 당신의 연구를 가능하게 하는 인간들을 존중하는 것입니다.',
    },
    catchphrase: {
      en: 'If your participant\'s grandmother read your study, would you be proud of how you treated her grandchild?',
      ko: '참가자의 할머니가 당신의 연구를 읽는다면, 손주를 어떻게 대했는지 자랑스러울까요?',
    },
  },

  quickSummary: {
    oneLiner: {
      en: 'Ensures research ethics go beyond checkbox compliance to genuine participant protection and dignity.',
      ko: '연구 윤리가 체크박스 준수를 넘어 진정한 참가자 보호와 존엄성으로 나아가도록 보장합니다.',
    },
    bestFor: [
      { en: 'Studies involving vulnerable populations', ko: '취약 계층을 포함하는 연구' },
      { en: 'IRB/ethics board application preparation', ko: 'IRB/윤리위원회 신청 준비' },
      { en: 'Research with sensitive topics (trauma, health, identity)', ko: '민감한 주제(트라우마, 건강, 정체성) 연구' },
      { en: 'Community-based or participatory research', ko: '커뮤니티 기반 또는 참여적 연구' },
      { en: 'International/cross-cultural research', ko: '국제/다문화 연구' },
    ],
    notFor: [
      { en: 'Archival research with no human subjects', ko: '인간 대상이 없는 기록 연구' },
      { en: 'Purely computational/simulation studies', ko: '순수 계산/시뮬레이션 연구' },
      { en: 'Secondary data analysis of anonymized datasets', ko: '익명화된 데이터셋의 2차 데이터 분석' },
    ],
    timeToResult: '25-40 minutes',
  },

  useCases: [
    {
      title: { en: 'The Vulnerable Population Minefield', ko: '취약 계층 지뢰밭' },
      scenario: {
        en: 'Dr. Wong wanted to study mental health coping strategies among international students. Her IRB said "approved as exempt" but she sensed there might be issues with disclosure risks for students on visas.',
        ko: 'Wong 박사는 유학생들의 정신 건강 대처 전략을 연구하고 싶었습니다. IRB는 "면제로 승인"이라고 했지만 비자를 가진 학생들에게 공개 위험이 있을 수 있다고 느꼈습니다.',
      },
      outcome: {
        en: 'A4 identified three hidden risks: disclosure could affect visa status, cultural stigma around mental health in some home countries, and power dynamics with researcher as authority figure. A4 recommended specific consent language and data handling protocols that went beyond IRB minimum.',
        ko: 'A4는 세 가지 숨겨진 위험을 식별했습니다: 공개가 비자 상태에 영향을 줄 수 있음, 일부 본국에서의 정신 건강에 대한 문화적 낙인, 권위 인물로서의 연구자와의 권력 역학. A4는 IRB 최소 요구사항을 넘어서는 구체적인 동의 언어와 데이터 처리 프로토콜을 권장했습니다.',
      },
      discipline: 'Psychology/International Education',
      complexity: 'advanced',
    },
    {
      title: { en: 'The Community Research Dilemma', ko: '커뮤니티 연구 딜레마' },
      scenario: {
        en: 'A PhD student was conducting participatory action research with an Indigenous community. The standard university consent forms felt inappropriate and the community had concerns about data sovereignty.',
        ko: '박사과정 학생이 원주민 커뮤니티와 참여적 실천 연구를 수행하고 있었습니다. 표준 대학 동의서가 부적절하게 느껴졌고 커뮤니티는 데이터 주권에 대한 우려가 있었습니다.',
      },
      outcome: {
        en: 'A4 provided guidance on culturally appropriate consent protocols, community approval processes, data sovereignty principles, and how to navigate between university requirements and community preferences. The student developed a co-designed consent process that satisfied both.',
        ko: 'A4는 문화적으로 적절한 동의 프로토콜, 커뮤니티 승인 프로세스, 데이터 주권 원칙, 그리고 대학 요구사항과 커뮤니티 선호도 사이를 탐색하는 방법에 대한 지침을 제공했습니다. 학생은 양쪽을 만족시키는 공동 설계된 동의 프로세스를 개발했습니다.',
      },
      discipline: 'Community-Based Research',
      complexity: 'advanced',
    },
    {
      title: { en: 'The Online Research Gray Zone', ko: '온라인 연구 회색 지대' },
      scenario: {
        en: 'James wanted to analyze public social media posts about workplace stress. His IRB said public posts don\'t require consent. But James felt uneasy about quoting people without their knowledge.',
        ko: 'James는 직장 스트레스에 대한 공개 소셜 미디어 게시물을 분석하고 싶었습니다. IRB는 공개 게시물은 동의가 필요 없다고 했습니다. 하지만 James는 사람들의 동의 없이 인용하는 것이 불편했습니다.',
      },
      outcome: {
        en: 'A4 validated James\'s ethical intuition. It outlined the "public but personal" paradox, explained contextual integrity theory, and recommended paraphrasing over direct quotes, not identifying usernames, and considering a courtesy notification protocol. The resulting study was more ethically defensible.',
        ko: 'A4는 James의 윤리적 직관을 확인했습니다. "공개적이지만 개인적인" 역설을 설명하고, 맥락적 무결성 이론을 설명하고, 직접 인용보다 의역, 사용자 이름 미식별, 예의 통지 프로토콜 고려를 권장했습니다. 결과적인 연구는 윤리적으로 더 방어 가능했습니다.',
      },
      discipline: 'Organizational Studies/Digital Research',
      complexity: 'intermediate',
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'I\'m studying [sensitive topic] with [population]. Here is my research design: [describe]. What ethical issues might I be missing beyond standard IRB requirements?',
        ko: '[인구]와 함께 [민감한 주제]를 연구하고 있습니다. 제 연구 설계입니다: [설명]. 표준 IRB 요구사항 외에 어떤 윤리적 문제를 놓치고 있을 수 있나요?',
      },
      context: {
        en: 'When you want to go beyond compliance to genuine ethical consideration.',
        ko: '준수를 넘어 진정한 윤리적 고려로 나아가고 싶을 때.',
      },
      expectedResponse: {
        en: 'A4 will analyze your specific context for hidden ethical issues: power dynamics, cultural factors, long-term participant impact, and community-level concerns that standard protocols miss.',
        ko: 'A4는 숨겨진 윤리적 문제에 대해 특정 맥락을 분석합니다: 권력 역학, 문화적 요인, 장기 참가자 영향, 표준 프로토콜이 놓치는 커뮤니티 수준의 우려.',
      },
    },
    {
      prompt: {
        en: 'Help me draft informed consent language for [study type] with [population]. I want it to be genuinely understandable, not just legally compliant.',
        ko: '[인구]와 함께하는 [연구 유형]을 위한 사전 동의 언어 초안을 도와주세요. 법적으로 준수할 뿐만 아니라 진정으로 이해 가능하기를 원합니다.',
      },
      context: {
        en: 'When creating participant-centered consent documents.',
        ko: '참가자 중심의 동의 문서를 작성할 때.',
      },
      expectedResponse: {
        en: 'A4 will draft consent language at appropriate reading level, culturally adapted, with clear risk/benefit explanations, and genuine voluntary participation emphasis.',
        ko: 'A4는 적절한 읽기 수준에서, 문화적으로 적응된, 명확한 위험/혜택 설명과 진정한 자발적 참여 강조가 있는 동의 언어를 초안합니다.',
      },
    },
    {
      prompt: {
        en: 'I received IRB approval but something still feels ethically "off" about my study. Can you help me articulate what might be bothering me? [describe study]',
        ko: 'IRB 승인을 받았지만 연구에 대해 윤리적으로 "이상한" 느낌이 듭니다. 무엇이 저를 신경쓰이게 하는지 설명하도록 도와주시겠어요? [연구 설명]',
      },
      context: {
        en: 'When your ethical intuition senses something IRB missed.',
        ko: '윤리적 직관이 IRB가 놓친 것을 감지할 때.',
      },
      expectedResponse: {
        en: 'A4 will help name the ethical discomfort - whether it\'s procedural justice, dignity concerns, downstream harm, or researcher positionality - and suggest how to address it.',
        ko: 'A4는 윤리적 불편함의 이름을 붙이는 데 도움을 줍니다 - 절차적 정의, 존엄성 우려, 하류 피해, 또는 연구자 위치성 여부 - 그리고 이를 해결하는 방법을 제안합니다.',
      },
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'Your study involves human participants in any capacity', ko: '연구가 어떤 방식으로든 인간 참가자를 포함할 때' },
      { en: 'Working with vulnerable or marginalized populations', ko: '취약하거나 소외된 인구와 작업할 때' },
      { en: 'Research topic is sensitive (health, trauma, identity, illegal behavior)', ko: '연구 주제가 민감할 때 (건강, 트라우마, 정체성, 불법 행동)' },
      { en: 'IRB approved but you still have ethical concerns', ko: 'IRB가 승인했지만 여전히 윤리적 우려가 있을 때' },
      { en: 'International or cross-cultural research', ko: '국제 또는 다문화 연구' },
    ],
    dontUseWhen: [
      { en: 'Purely computational research with no human data', ko: '인간 데이터가 없는 순수 계산 연구' },
      { en: 'Historical/archival research with deceased subjects', ko: '사망한 대상의 역사/기록 연구' },
      { en: 'Public policy analysis with no individual-level data', ko: '개인 수준 데이터가 없는 공공 정책 분석' },
    ],
    alternativeAgents: [
      { agentId: 'D4', condition: { en: 'You need detailed ethics code compliance checking', ko: '상세한 윤리 강령 준수 확인이 필요할 때' } },
      { agentId: 'A3', condition: { en: 'You want general critique, not just ethics focus', ko: '윤리 초점만이 아닌 일반적인 비판을 원할 때' } },
    ],
  },

  journey: {
    startState: {
      en: 'You have IRB approval but worry whether you\'ve really thought through all ethical implications.',
      ko: 'IRB 승인이 있지만 모든 윤리적 함의를 정말로 생각했는지 걱정됩니다.',
    },
    transformation: [
      { en: 'Phase 1: Move beyond generic checklists to your specific context', ko: '1단계: 일반적인 체크리스트를 넘어 특정 맥락으로' },
      { en: 'Phase 2: Identify ethical issues unique to your population and topic', ko: '2단계: 인구와 주제에 고유한 윤리적 문제 식별' },
      { en: 'Phase 3: Receive actionable, IRB-ready guidance', ko: '3단계: 실행 가능한, IRB 준비된 지침 받기' },
    ],
    endState: {
      en: 'A ethically robust design with genuine participant protection, not just procedural compliance.',
      ko: '절차적 준수만이 아닌 진정한 참가자 보호를 갖춘 윤리적으로 견고한 설계.',
    },
    timeEstimate: '25-40 minutes',
  },

  analogies: [
    {
      metaphor: {
        en: 'Like a Thoughtful Host, Not a Bouncer',
        ko: '경비원이 아닌 사려 깊은 호스트처럼',
      },
      explanation: {
        en: 'A bouncer just checks IDs at the door. A thoughtful host thinks about whether guests will be comfortable, have what they need, and leave feeling good about the experience. A4 helps you be a thoughtful host to your participants - not just meeting minimum standards, but genuinely caring for their experience.',
        ko: '경비원은 입구에서 신분증만 확인합니다. 사려 깊은 호스트는 손님이 편안할지, 필요한 것이 있을지, 경험에 대해 좋은 느낌으로 떠날지 생각합니다. A4는 참가자들에게 사려 깊은 호스트가 되도록 도와줍니다 - 최소 기준을 충족하는 것만이 아니라 그들의 경험을 진정으로 돌보는 것.',
      },
    },
    {
      metaphor: {
        en: 'Like a Pre-Flight Safety Check',
        ko: '비행 전 안전 점검처럼',
      },
      explanation: {
        en: 'Pilots don\'t just check that the plane is "approved to fly" - they personally verify each system because lives depend on it. A4 is your ethical pre-flight check: not trusting that approval means safety, but personally verifying that participants won\'t be harmed.',
        ko: '조종사는 비행기가 "비행 승인"되었는지만 확인하지 않습니다 - 생명이 달려 있기 때문에 각 시스템을 개인적으로 확인합니다. A4는 윤리적 비행 전 점검입니다: 승인이 안전을 의미한다고 신뢰하지 않고, 참가자가 해를 입지 않을 것인지 개인적으로 확인합니다.',
      },
    },
  ],

  proTips: [
    {
      tip: {
        en: 'The Belmont Report\'s three principles (Respect, Beneficence, Justice) apply beyond IRB. Use them as a framework when A4 identifies issues your IRB didn\'t catch.',
        ko: '벨몬트 보고서의 세 가지 원칙(존중, 선행, 정의)은 IRB를 넘어 적용됩니다. A4가 IRB가 잡지 못한 문제를 식별할 때 프레임워크로 사용하세요.',
      },
      source: { en: 'Research ethics foundations', ko: '연구 윤리 기초' },
      difficulty: 'intermediate',
    },
    {
      tip: {
        en: 'For studies with vulnerable populations, run A4 twice: once with standard framing, once explicitly asking "what would a community advocate say?"',
        ko: '취약 계층 연구의 경우 A4를 두 번 실행하세요: 표준 프레이밍으로 한 번, "커뮤니티 옹호자가 뭐라고 할까?"라고 명시적으로 묻는 것으로 한 번.',
      },
      source: { en: 'Community-based research best practices', ko: '커뮤니티 기반 연구 모범 사례' },
      difficulty: 'advanced',
    },
    {
      tip: {
        en: 'Document A4\'s recommendations even if you can\'t implement all of them. This shows ethical thoughtfulness in your methods section and protects you in case of complaints.',
        ko: '모든 것을 구현할 수 없더라도 A4의 권장 사항을 문서화하세요. 이것은 방법 섹션에서 윤리적 사려 깊음을 보여주고 불만이 있을 경우 당신을 보호합니다.',
      },
      source: { en: 'Research integrity protocols', ko: '연구 무결성 프로토콜' },
      difficulty: 'beginner',
    },
  ],

  badges: [
    { type: 'essential' },
  ],

  faq: [
    {
      question: {
        en: 'Does A4 replace IRB review?',
        ko: 'A4가 IRB 심사를 대체하나요?',
      },
      answer: {
        en: 'No! A4 complements IRB, not replaces it. IRBs provide legal/institutional compliance. A4 provides ethical depth that goes beyond procedural requirements - the kind of thoughtfulness that distinguishes ethically exemplary research from merely compliant research.',
        ko: '아니요! A4는 IRB를 대체하는 것이 아니라 보완합니다. IRB는 법적/기관적 준수를 제공합니다. A4는 절차적 요구사항을 넘어서는 윤리적 깊이를 제공합니다 - 단순히 준수하는 연구와 윤리적으로 모범적인 연구를 구별하는 사려 깊음.',
      },
    },
    {
      question: {
        en: 'What if A4 recommendations conflict with my IRB\'s guidance?',
        ko: 'A4 권장 사항이 IRB 지침과 충돌하면 어떻게 하나요?',
      },
      answer: {
        en: 'IRB requirements are minimum legal standards - you can always exceed them. If A4 recommends stronger protections, you can implement them. If A4 questions something IRB approved, discuss with your IRB chair - they may appreciate the additional ethical consideration.',
        ko: 'IRB 요구사항은 최소 법적 기준입니다 - 항상 초과할 수 있습니다. A4가 더 강력한 보호를 권장하면 구현할 수 있습니다. A4가 IRB가 승인한 것에 의문을 제기하면 IRB 의장과 논의하세요 - 추가 윤리적 고려를 감사할 수 있습니다.',
      },
    },
    {
      question: {
        en: 'Is A4 appropriate for all paradigms or just quantitative research?',
        ko: 'A4가 모든 패러다임에 적합한가요, 아니면 양적 연구에만?',
      },
      answer: {
        en: 'A4 adapts to all paradigms. For qualitative research, it considers issues like researcher reflexivity, power in interviews, member checking ethics, and representation concerns. For critical paradigms, it examines participatory ethics and action research responsibilities.',
        ko: 'A4는 모든 패러다임에 적응합니다. 질적 연구에서는 연구자 성찰성, 인터뷰의 권력, 구성원 확인 윤리, 대표성 우려와 같은 문제를 고려합니다. 비판적 패러다임에서는 참여적 윤리와 실천 연구 책임을 검토합니다.',
      },
    },
  ],

  outputFormat: {
    sections: [
      { title: 'Context-Specific Risks', content: { en: 'Ethical issues unique to your population and topic', ko: '인구와 주제에 고유한 윤리적 문제' } },
      { title: 'Participant Impact Assessment', content: { en: 'Short and long-term effects on participants', ko: '참가자에 대한 단기 및 장기 영향' } },
      { title: 'Power Dynamics Analysis', content: { en: 'Researcher-participant relationship considerations', ko: '연구자-참가자 관계 고려사항' } },
      { title: 'Actionable Recommendations', content: { en: 'IRB-ready protocol suggestions', ko: 'IRB 준비 프로토콜 제안' } },
    ],
  },
};
