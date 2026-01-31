import type { ExtendedAgentContent } from '../types';

export const a5Content: ExtendedAgentContent = {
  agentId: 'A5',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'Default Paradigm Detection', ko: '기본 패러다임 탐지' }, purpose: { en: 'Identify if researcher is defaulting to positivism without reflection', ko: '연구자가 반성 없이 실증주의를 기본으로 하는지 식별' } },
      { number: 2, title: { en: 'Paradigmatic Alternatives', ko: '패러다임적 대안' }, purpose: { en: 'Present full range of philosophical positions', ko: '철학적 입장의 전체 범위 제시' } },
      { number: 3, title: { en: 'Alignment Verification', ko: '정렬 확인' }, purpose: { en: 'Ensure ontology, epistemology, methodology coherence', ko: '존재론, 인식론, 방법론 일관성 확인' } },
    ],
  },
  tScoreReference: {
    ranges: [
      { range: '0.80-1.00', label: { en: 'Modal', ko: '모달' }, examples: ['Post-positivism (default for most quantitative)'] },
      { range: '0.60-0.79', label: { en: 'Established', ko: '확립됨' }, examples: ['Constructivism', 'Pragmatism'] },
      { range: '0.40-0.59', label: { en: 'Balanced', ko: '균형' }, examples: ['Critical Realism', 'Transformative'] },
      { range: '0.20-0.39', label: { en: 'Creative', ko: '창의적' }, examples: ['Post-structuralism', 'Indigenous Research'] },
      { range: '0.00-0.19', label: { en: 'Innovative', ko: '혁신적' }, examples: ['New Materialism', 'Posthumanism'] },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_question', description: { en: 'Approved research question', ko: '승인된 연구 질문' } },
      { name: 'methodology_type', description: { en: 'Quantitative, qualitative, or mixed', ko: '양적, 질적 또는 혼합' } },
    ],
  },
  checkpoints: [
    { id: 'CP_PARADIGM_SELECTION', description: { en: 'Paradigm choice determines downstream agent pathway', ko: '패러다임 선택이 하위 에이전트 경로를 결정' } },
  ],
  references: [
    'Creswell, J. W., & Poth, C. N. (2018). Qualitative Inquiry and Research Design.',
    'Lincoln, Y. S., & Guba, E. G. (1985). Naturalistic Inquiry.',
  ],

  // NEW USER-FRIENDLY FIELDS
  persona: {
    archetype: 'The Philosopher Guide',
    personality: {
      en: 'Most researchers adopt a paradigm without knowing they chose one. Positivism is like water to fish - invisible because it\'s everywhere. I help you surface these hidden assumptions, not to judge them, but so you can make a conscious choice about how you see knowledge, reality, and your role as researcher.',
      ko: '대부분의 연구자들은 패러다임을 선택했다는 것을 모르고 채택합니다. 실증주의는 물고기에게 물과 같습니다 - 어디에나 있기 때문에 보이지 않습니다. 저는 이러한 숨겨진 가정을 드러내도록 도와줍니다, 판단하기 위해서가 아니라 지식, 현실, 그리고 연구자로서의 역할을 어떻게 보는지에 대해 의식적인 선택을 할 수 있도록.',
    },
    voiceSample: {
      en: '"You\'re using surveys because that\'s what your field does. But have you considered what assumptions about reality that implies? Let\'s explore whether those assumptions match YOUR beliefs about knowledge."',
      ko: '"당신은 분야에서 그렇게 하기 때문에 설문조사를 사용하고 있습니다. 하지만 그것이 현실에 대해 어떤 가정을 의미하는지 생각해 보셨나요? 그 가정이 지식에 대한 당신의 믿음과 일치하는지 탐구해 봅시다."',
    },
    motto: {
      en: 'The methodology you choose reveals the philosopher you already are.',
      ko: '당신이 선택하는 방법론은 당신이 이미 가진 철학자를 드러냅니다.',
    },
    catchphrase: {
      en: 'Everyone has a paradigm. Most people just don\'t know which one they\'re swimming in.',
      ko: '모든 사람에게 패러다임이 있습니다. 대부분의 사람들은 자신이 어느 것에서 헤엄치고 있는지 모를 뿐입니다.',
    },
  },

  quickSummary: {
    oneLiner: {
      en: 'Helps you discover and articulate your philosophical assumptions about knowledge, reality, and research.',
      ko: '지식, 현실, 연구에 대한 철학적 가정을 발견하고 명확히 하도록 도와줍니다.',
    },
    bestFor: [
      { en: 'Doctoral students writing methodology chapters', ko: '방법론 장을 쓰는 박사과정 학생' },
      { en: 'Researchers transitioning between paradigms', ko: '패러다임 간 전환하는 연구자' },
      { en: 'Mixed methods researchers aligning approaches', ko: '접근 방식을 정렬하는 혼합 방법 연구자' },
      { en: 'Anyone who\'s never consciously chosen a paradigm', ko: '의식적으로 패러다임을 선택한 적이 없는 모든 분' },
      { en: 'Researchers receiving conflicting committee feedback', ko: '상충되는 위원회 피드백을 받는 연구자' },
    ],
    notFor: [
      { en: 'Already have clear, justified paradigmatic stance', ko: '이미 명확하고 정당화된 패러다임적 입장이 있을 때' },
      { en: 'Replication studies following original paradigm', ko: '원래 패러다임을 따르는 재현 연구' },
      { en: 'Your committee mandates a specific approach', ko: '위원회가 특정 접근 방식을 지정했을 때' },
    ],
    timeToResult: '30-50 minutes',
  },

  useCases: [
    {
      title: { en: 'The Accidental Positivist', ko: '우연한 실증주의자' },
      scenario: {
        en: 'Dr. Kim had always used surveys and experiments because that\'s what her PhD program taught. When she wanted to study "lived experiences of burnout," she still reached for a survey. A colleague suggested qualitative methods but she didn\'t know where to start.',
        ko: 'Kim 박사는 박사 프로그램에서 가르친 대로 항상 설문조사와 실험을 사용했습니다. "번아웃의 생활 경험"을 연구하고 싶을 때도 여전히 설문조사를 선택했습니다. 동료가 질적 방법을 제안했지만 어디서 시작해야 할지 몰랐습니다.',
      },
      outcome: {
        en: 'A5 helped Dr. Kim realize her question about "lived experience" implied phenomenological assumptions that conflicted with her positivist methods. By understanding the paradigm spectrum, she consciously chose interpretivism and IPA methodology - which her committee praised as "philosophically coherent."',
        ko: 'A5는 Kim 박사가 "생활 경험"에 대한 질문이 실증주의 방법과 충돌하는 현상학적 가정을 의미한다는 것을 깨닫도록 도왔습니다. 패러다임 스펙트럼을 이해함으로써 그녀는 의식적으로 해석주의와 IPA 방법론을 선택했고 - 위원회는 "철학적으로 일관성 있다"고 칭찬했습니다.',
      },
      discipline: 'Nursing/Healthcare',
      complexity: 'intermediate',
    },
    {
      title: { en: 'The Mixed Methods Confusion', ko: '혼합 방법 혼란' },
      scenario: {
        en: 'Carlos was doing a convergent mixed methods study but reviewers kept saying his paradigmatic stance was "unclear." He had both quantitative and qualitative components but didn\'t know how to justify mixing them philosophically.',
        ko: 'Carlos는 수렴적 혼합 방법 연구를 하고 있었지만 리뷰어들은 계속 그의 패러다임적 입장이 "불명확하다"고 했습니다. 양적 및 질적 구성요소가 모두 있었지만 철학적으로 혼합을 정당화하는 방법을 몰랐습니다.',
      },
      outcome: {
        en: 'A5 introduced Carlos to pragmatism as a philosophical foundation for mixed methods - focusing on "what works" rather than ontological debates. It also showed him how to articulate this stance in his methodology chapter using Creswell\'s framework.',
        ko: 'A5는 Carlos에게 혼합 방법의 철학적 기초로서 실용주의를 소개했습니다 - 존재론적 논쟁보다 "무엇이 효과적인가"에 초점을 맞추었습니다. 또한 Creswell의 프레임워크를 사용하여 방법론 장에서 이 입장을 어떻게 명확히 하는지 보여주었습니다.',
      },
      discipline: 'Education',
      complexity: 'advanced',
    },
    {
      title: { en: 'The Committee Paradigm War', ko: '위원회 패러다임 전쟁' },
      scenario: {
        en: 'Aisha\'s dissertation committee had a quantitative chair and a qualitative methodologist who kept giving conflicting advice. She felt caught in the middle of a philosophical battle she didn\'t understand.',
        ko: 'Aisha의 논문 위원회에는 양적 위원장과 질적 방법론자가 있었고 계속 상충되는 조언을 했습니다. 그녀는 이해하지 못하는 철학적 전투의 한가운데에 갇힌 느낌이었습니다.',
      },
      outcome: {
        en: 'A5 helped Aisha understand BOTH committee members\' paradigmatic positions, translate their feedback into paradigmatic language, and find a critical realist stance that honored both perspectives. She could now respond to feedback with informed justification instead of defensive confusion.',
        ko: 'A5는 Aisha가 두 위원회 위원의 패러다임적 입장을 모두 이해하고, 피드백을 패러다임적 언어로 번역하고, 두 관점 모두를 존중하는 비판적 실재론 입장을 찾도록 도왔습니다. 이제 그녀는 방어적인 혼란 대신 정보에 입각한 정당화로 피드백에 응답할 수 있었습니다.',
      },
      discipline: 'Social Work',
      complexity: 'advanced',
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'I\'ve always used [quantitative/qualitative] methods but never consciously chose a paradigm. Help me understand what assumptions I\'ve been making about knowledge and reality.',
        ko: '항상 [양적/질적] 방법을 사용했지만 의식적으로 패러다임을 선택한 적이 없습니다. 지식과 현실에 대해 어떤 가정을 해왔는지 이해하도록 도와주세요.',
      },
      context: {
        en: 'For researchers who want to surface their implicit paradigm.',
        ko: '암묵적 패러다임을 드러내고 싶은 연구자용.',
      },
      expectedResponse: {
        en: 'A5 will analyze your methodological history to reveal implicit assumptions, then present alternative paradigms you might consider, with pros/cons for your research goals.',
        ko: 'A5는 방법론적 이력을 분석하여 암묵적 가정을 드러낸 다음, 연구 목표에 대한 장단점과 함께 고려할 수 있는 대안 패러다임을 제시합니다.',
      },
    },
    {
      prompt: {
        en: 'My research question is: [RQ]. My planned methodology is [method]. Does my paradigm align with my question? What paradigm should I adopt?',
        ko: '제 연구 질문은: [RQ]입니다. 계획된 방법론은 [방법]입니다. 제 패러다임이 질문과 일치하나요? 어떤 패러다임을 채택해야 하나요?',
      },
      context: {
        en: 'When checking for paradigm-methodology-question alignment.',
        ko: '패러다임-방법론-질문 정렬을 확인할 때.',
      },
      expectedResponse: {
        en: 'A5 will assess coherence between your RQ\'s implicit assumptions and your methodology\'s paradigmatic requirements, recommending alignment adjustments if needed.',
        ko: 'A5는 RQ의 암묵적 가정과 방법론의 패러다임적 요구사항 간의 일관성을 평가하고, 필요한 경우 정렬 조정을 권장합니다.',
      },
    },
    {
      prompt: {
        en: 'Help me write my paradigmatic stance for my methodology chapter. I\'m doing [method type] research on [topic]. What should I say about ontology, epistemology, and axiology?',
        ko: '방법론 장에 패러다임적 입장을 쓰는 것을 도와주세요. [주제]에 대해 [방법 유형] 연구를 하고 있습니다. 존재론, 인식론, 가치론에 대해 무엇을 말해야 하나요?',
      },
      context: {
        en: 'When drafting the philosophical foundations section of your methodology.',
        ko: '방법론의 철학적 기초 섹션을 초안할 때.',
      },
      expectedResponse: {
        en: 'A5 will draft paradigm statement language appropriate for your study, covering ontology, epistemology, methodology alignment, and researcher positionality.',
        ko: 'A5는 연구에 적합한 패러다임 진술 언어를 초안하여 존재론, 인식론, 방법론 정렬, 연구자 위치성을 다룹니다.',
      },
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'Writing methodology chapter and need to articulate paradigm', ko: '방법론 장을 쓰고 패러다임을 명확히 해야 할 때' },
      { en: 'Feel confused about philosophical foundations of research', ko: '연구의 철학적 기초에 대해 혼란스러울 때' },
      { en: 'Transitioning from quantitative to qualitative (or vice versa)', ko: '양적에서 질적으로 (또는 그 반대로) 전환할 때' },
      { en: 'Designing mixed methods and need to justify paradigm', ko: '혼합 방법을 설계하고 패러다임을 정당화해야 할 때' },
      { en: 'Committee members have conflicting paradigmatic views', ko: '위원회 위원들이 상충되는 패러다임적 견해를 가질 때' },
    ],
    dontUseWhen: [
      { en: 'Your paradigm is firmly established and justified', ko: '패러다임이 확고히 확립되고 정당화되었을 때' },
      { en: 'Following a replication protocol with fixed paradigm', ko: '고정된 패러다임으로 재현 프로토콜을 따를 때' },
      { en: 'Committee explicitly mandates paradigmatic approach', ko: '위원회가 명시적으로 패러다임적 접근 방식을 지정했을 때' },
    ],
    alternativeAgents: [
      { agentId: 'A2', condition: { en: 'You need a theory, not paradigm guidance', ko: '패러다임 가이드가 아니라 이론이 필요할 때' } },
      { agentId: 'C1', condition: { en: 'You need methodology selection, not philosophy', ko: '철학이 아니라 방법론 선택이 필요할 때' } },
    ],
  },

  journey: {
    startState: {
      en: 'You do research without knowing what paradigm you\'re operating from, or feel philosophically confused.',
      ko: '어떤 패러다임에서 작동하는지 모르고 연구를 하거나, 철학적으로 혼란스럽습니다.',
    },
    transformation: [
      { en: 'Phase 1: Detect if you\'re defaulting to positivism without reflection', ko: '1단계: 반성 없이 실증주의를 기본으로 하는지 감지' },
      { en: 'Phase 2: Present the full spectrum of paradigmatic alternatives', ko: '2단계: 패러다임적 대안의 전체 스펙트럼 제시' },
      { en: 'Phase 3: Verify ontology-epistemology-methodology coherence', ko: '3단계: 존재론-인식론-방법론 일관성 확인' },
    ],
    endState: {
      en: 'A clearly articulated, coherent paradigmatic stance that you can defend and that aligns with your research question.',
      ko: '방어할 수 있고 연구 질문과 일치하는 명확하게 명시된 일관성 있는 패러다임적 입장.',
    },
    timeEstimate: '30-50 minutes',
  },

  analogies: [
    {
      metaphor: {
        en: 'Like Water to Fish',
        ko: '물고기에게 물처럼',
      },
      explanation: {
        en: 'A fish doesn\'t know it\'s swimming in water - it\'s just "the world." Similarly, most researchers swim in positivism without knowing it\'s a paradigm choice. A5 helps you see the water you\'re swimming in, so you can consciously decide if it\'s the right ocean for your research.',
        ko: '물고기는 물에서 헤엄치고 있다는 것을 모릅니다 - 그냥 "세상"입니다. 마찬가지로, 대부분의 연구자들은 패러다임 선택인지 모르고 실증주의에서 헤엄칩니다. A5는 당신이 헤엄치고 있는 물을 보도록 도와주어, 연구에 맞는 바다인지 의식적으로 결정할 수 있게 합니다.',
      },
    },
    {
      metaphor: {
        en: 'Like Choosing Glasses, Not Just Prescriptions',
        ko: '처방만이 아닌 안경 선택처럼',
      },
      explanation: {
        en: 'When getting glasses, you don\'t just accept the first pair - you try different frames to see which fits your face and style. Paradigms are like frames for seeing research reality. A5 shows you different frames so you can choose one that fits YOUR worldview and research goals.',
        ko: '안경을 맞출 때 첫 번째 것을 그냥 받아들이지 않습니다 - 얼굴과 스타일에 맞는 것을 보기 위해 다른 프레임을 시도합니다. 패러다임은 연구 현실을 보는 프레임과 같습니다. A5는 당신의 세계관과 연구 목표에 맞는 것을 선택할 수 있도록 다른 프레임을 보여줍니다.',
      },
    },
  ],

  proTips: [
    {
      tip: {
        en: 'The "paradigm wars" are largely over in most fields. Today\'s best practice is paradigm-appropriate research, not paradigm superiority. Use A5 to find YOUR appropriate paradigm.',
        ko: '"패러다임 전쟁"은 대부분의 분야에서 대체로 끝났습니다. 오늘날의 모범 사례는 패러다임 우월성이 아닌 패러다임에 적합한 연구입니다. A5를 사용하여 당신에게 적합한 패러다임을 찾으세요.',
      },
      source: { en: 'Contemporary research methodology scholarship', ko: '현대 연구 방법론 학문' },
      difficulty: 'intermediate',
    },
    {
      tip: {
        en: 'For mixed methods, pragmatism and critical realism are the most defensible paradigmatic homes. A5 can help you articulate either stance.',
        ko: '혼합 방법의 경우 실용주의와 비판적 실재론이 가장 방어 가능한 패러다임적 기반입니다. A5는 두 입장 중 하나를 명확히 하는 데 도움을 줄 수 있습니다.',
      },
      source: { en: 'Creswell & Plano Clark mixed methods guidance', ko: 'Creswell & Plano Clark 혼합 방법 지침' },
      difficulty: 'advanced',
    },
    {
      tip: {
        en: 'If your committee includes members from different traditions, run A5 to understand THEIR paradigms too - it helps you anticipate their feedback.',
        ko: '위원회에 다른 전통의 위원이 포함되어 있으면 A5를 실행하여 그들의 패러다임도 이해하세요 - 피드백을 예측하는 데 도움이 됩니다.',
      },
      source: { en: 'Dissertation committee navigation strategies', ko: '논문 위원회 탐색 전략' },
      difficulty: 'advanced',
    },
  ],

  badges: [
    { type: 'essential' },
    { type: 'deep' },
  ],

  faq: [
    {
      question: {
        en: 'Do I really need to know my paradigm? Can\'t I just do the research?',
        ko: '정말 패러다임을 알아야 하나요? 그냥 연구를 하면 안 되나요?',
      },
      answer: {
        en: 'You can do research without knowing your paradigm - most people do! But articulating it helps you: 1) defend your methods to committees, 2) avoid contradictory choices, 3) write stronger methodology chapters, and 4) understand why different approaches exist. A5 helps if you decide it\'s worth exploring.',
        ko: '패러다임을 모르고도 연구를 할 수 있습니다 - 대부분의 사람들이 그렇게 합니다! 하지만 명확히 하는 것은 도움이 됩니다: 1) 위원회에 방법을 방어하고, 2) 모순된 선택을 피하고, 3) 더 강력한 방법론 장을 쓰고, 4) 왜 다른 접근 방식이 존재하는지 이해합니다. A5는 탐구할 가치가 있다고 결정하면 도움을 줍니다.',
      },
    },
    {
      question: {
        en: 'What if my natural paradigm doesn\'t match my field\'s expectations?',
        ko: '자연스러운 패러다임이 분야의 기대와 맞지 않으면 어떻게 하나요?',
      },
      answer: {
        en: 'This is common! You have options: 1) Adapt your paradigm to field norms (easier publication), 2) Find journals/conferences that welcome your paradigm, 3) Articulate a strong justification for paradigm choice, or 4) Use mixed methods to bridge. A5 helps you explore each option.',
        ko: '이것은 흔합니다! 옵션이 있습니다: 1) 패러다임을 분야 규범에 맞게 조정 (출판이 쉬움), 2) 패러다임을 환영하는 저널/학회 찾기, 3) 패러다임 선택에 대한 강력한 정당화 명확히 하기, 또는 4) 혼합 방법을 사용하여 연결. A5는 각 옵션을 탐구하는 데 도움을 줍니다.',
      },
    },
    {
      question: {
        en: 'Can I use multiple paradigms in one study?',
        ko: '한 연구에서 여러 패러다임을 사용할 수 있나요?',
      },
      answer: {
        en: 'This is debated! Purists say paradigms are incompatible; pragmatists say mix what works. The safest approach for dissertations is to adopt a single paradigm (like pragmatism or critical realism) that can accommodate multiple methods. A5 can help you find that umbrella paradigm.',
        ko: '이것은 논쟁 중입니다! 순수주의자들은 패러다임이 양립할 수 없다고 말하고; 실용주의자들은 효과적인 것을 혼합하라고 합니다. 논문에 가장 안전한 접근 방식은 여러 방법을 수용할 수 있는 단일 패러다임(실용주의나 비판적 실재론 같은)을 채택하는 것입니다. A5는 그 우산 패러다임을 찾는 데 도움을 줄 수 있습니다.',
      },
    },
  ],

  outputFormat: {
    sections: [
      { title: 'Current Paradigm Analysis', content: { en: 'Your implicit philosophical assumptions', ko: '당신의 암묵적 철학적 가정' } },
      { title: 'Paradigm Options', content: { en: 'Alternative stances with T-Scores', ko: 'T-Score와 함께 대안적 입장' } },
      { title: 'Alignment Assessment', content: { en: 'Coherence between ontology, epistemology, methodology', ko: '존재론, 인식론, 방법론 간의 일관성' } },
      { title: 'Paradigm Statement Draft', content: { en: 'Language for your methodology chapter', ko: '방법론 장을 위한 언어' } },
    ],
  },
};
