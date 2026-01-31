import type { ExtendedAgentContent } from '../types';

export const a3Content: ExtendedAgentContent = {
  agentId: 'A3',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      { number: 1, title: { en: 'Predictable Criticism Avoidance', ko: '예측 가능한 비판 회피' }, purpose: { en: 'Identify obvious criticisms any reviewer would raise', ko: '모든 리뷰어가 제기할 명백한 비판 식별' } },
      { number: 2, title: { en: 'Deep Vulnerability Mining', ko: '심층 취약점 마이닝' }, purpose: { en: 'Find non-obvious design weaknesses', ko: '비명백한 설계 약점 발견' } },
      { number: 3, title: { en: 'Alternative Explanation Generation', ko: '대안적 설명 생성' }, purpose: { en: 'Generate creative counter-explanations', ko: '창의적 반론 생성' } },
      { number: 4, title: { en: 'Strength Assessment', ko: '강점 평가' }, purpose: { en: 'Identify what makes the design robust', ko: '설계를 견고하게 만드는 요소 식별' } },
      { number: 5, title: { en: 'Prioritized Recommendations', ko: '우선순위 권장사항' }, purpose: { en: 'Rank improvements by impact', ko: '영향력별 개선사항 순위' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_design', description: { en: 'Current research design document', ko: '현재 연구 설계 문서' } },
    ],
    optional: [
      { name: 'target_journal', description: { en: 'Target journal for calibrating critique level', ko: '비판 수준 보정을 위한 대상 저널' } },
    ],
  },
  creativityMechanisms: [
    { name: 'Reviewer 2 Simulation', applicationTiming: { en: 'Phase 1: Simulate the harshest reviewer', ko: '1단계: 가장 엄격한 리뷰어 시뮬레이션' }, usageExample: { en: '"What would a hostile methodologist say?"', ko: '"적대적 방법론자가 뭐라고 할까?"' } },
    { name: 'Paradigm Flip', applicationTiming: { en: 'Phase 3: View from opposing paradigm', ko: '3단계: 반대 패러다임에서 관찰' }, usageExample: { en: 'Critique quantitative from qualitative lens', ko: '질적 렌즈에서 양적 비판' } },
  ],
  references: [
    'Schwab, A. (2005). The dark side of reviewing. Academy of Management Learning & Education.',
  ],

  // NEW USER-FRIENDLY FIELDS
  persona: {
    archetype: 'The Friendly Nemesis',
    personality: {
      en: 'I\'m Reviewer 2 who actually wants you to succeed. Every researcher has had that harsh reviewer who tore their paper apart. I simulate that experience BEFORE submission - finding every weakness, every alternative explanation, every methodological crack - but I do it with kindness and solutions.',
      ko: '저는 당신이 성공하길 바라는 심사위원 2입니다. 모든 연구자는 자신의 논문을 찢어버린 가혹한 리뷰어를 경험했습니다. 저는 제출 전에 그 경험을 시뮬레이션합니다 - 모든 약점, 모든 대안적 설명, 모든 방법론적 틈새를 찾지만, 친절함과 해결책을 가지고 합니다.',
    },
    voiceSample: {
      en: '"This design has three vulnerabilities a hostile reviewer will exploit. Let me show you exactly what they\'ll say - and how to preemptively address each one."',
      ko: '"이 설계에는 적대적 리뷰어가 악용할 세 가지 취약점이 있습니다. 그들이 정확히 무엇을 말할지 보여드리고 - 각각을 선제적으로 해결하는 방법도 알려드릴게요."',
    },
    motto: {
      en: 'Better I break your design now than a reviewer breaks your spirit later.',
      ko: '나중에 리뷰어가 당신의 정신을 부수는 것보다 지금 제가 당신의 설계를 부수는 게 낫습니다.',
    },
    catchphrase: {
      en: 'If I can\'t find the flaw, your reviewers probably can\'t either.',
      ko: '제가 결함을 찾지 못하면, 리뷰어들도 아마 못 찾을 거예요.',
    },
  },

  quickSummary: {
    oneLiner: {
      en: 'Stress-tests your research design by simulating the harshest peer review before you submit.',
      ko: '제출 전에 가장 가혹한 동료 심사를 시뮬레이션하여 연구 설계를 스트레스 테스트합니다.',
    },
    bestFor: [
      { en: 'Researchers preparing for journal submission', ko: '저널 제출을 준비하는 연구자' },
      { en: 'Dissertation students before committee defense', ko: '위원회 심사 전 논문 작성 학생' },
      { en: 'Anyone who\'s been burned by Reviewer 2', ko: '심사위원 2에게 당한 적 있는 모든 분' },
      { en: 'Validating research design before data collection', ko: '데이터 수집 전 연구 설계 검증' },
      { en: 'Preparing rebuttal strategies', ko: '반박 전략 준비' },
    ],
    notFor: [
      { en: 'Very early ideation stage (use A1 first)', ko: '아주 초기 아이디어 단계 (A1을 먼저 사용)' },
      { en: 'When you need encouragement, not critique', ko: '비판이 아닌 격려가 필요할 때' },
      { en: 'Exploratory qualitative studies in early phases', ko: '초기 단계의 탐색적 질적 연구' },
    ],
    timeToResult: '30-45 minutes',
  },

  useCases: [
    {
      title: { en: 'The Pre-Submission Stress Test', ko: '제출 전 스트레스 테스트' },
      scenario: {
        en: 'Dr. Park had a strong quantitative study but her last three submissions got harsh methodological critiques. She wanted to anticipate problems before submitting to her target journal.',
        ko: 'Park 박사는 강력한 양적 연구가 있었지만 지난 세 번의 제출에서 가혹한 방법론적 비판을 받았습니다. 목표 저널에 제출하기 전에 문제를 예측하고 싶었습니다.',
      },
      outcome: {
        en: 'A3 identified 7 vulnerabilities: selection bias in sampling, untested assumptions in the mediator, and a confound in the instrument. Dr. Park addressed all 7 in her methods section. The paper was accepted with minor revisions.',
        ko: 'A3는 7개의 취약점을 식별했습니다: 표본 추출의 선택 편향, 매개 변수의 미검증 가정, 도구의 혼란 변수. Park 박사는 방법 섹션에서 7개 모두를 다루었습니다. 논문은 사소한 수정으로 수락되었습니다.',
      },
      discipline: 'Management',
      complexity: 'advanced',
    },
    {
      title: { en: 'The Dissertation Defense Prep', ko: '논문 심사 준비' },
      scenario: {
        en: 'Ahmed was nervous about his dissertation defense. His external committee member was known for tough methodological questions.',
        ko: 'Ahmed는 논문 심사가 걱정되었습니다. 외부 위원회 위원은 까다로운 방법론적 질문으로 유명했습니다.',
      },
      outcome: {
        en: 'A3 generated 15 likely questions with specific criticisms about his mixed-methods design. Ahmed prepared responses for each. During the actual defense, 12 of the 15 questions came up - he was ready for every one.',
        ko: 'A3는 그의 혼합 방법 설계에 대한 구체적인 비판과 함께 15개의 예상 질문을 생성했습니다. Ahmed는 각각에 대한 응답을 준비했습니다. 실제 심사에서 15개 중 12개 질문이 나왔고 - 그는 모든 것에 준비되어 있었습니다.',
      },
      discipline: 'Education',
      complexity: 'intermediate',
    },
    {
      title: { en: 'The Paradigm Blindspot Check', ko: '패러다임 맹점 확인' },
      scenario: {
        en: 'Lisa was a quantitative researcher reviewing her own experimental design. She felt confident but wanted a second opinion from a different perspective.',
        ko: 'Lisa는 자신의 실험 설계를 검토하는 양적 연구자였습니다. 자신감이 있었지만 다른 관점에서의 의견을 원했습니다.',
      },
      outcome: {
        en: 'A3\'s "Paradigm Flip" mechanism critiqued her design from a qualitative lens - revealing that her "engagement" construct was operationalized without understanding participant meaning-making. She added a qualitative pilot study that strengthened her construct validity.',
        ko: 'A3의 "패러다임 전환" 메커니즘은 질적 렌즈에서 그녀의 설계를 비판했습니다 - "참여" 구성이 참가자의 의미 형성에 대한 이해 없이 조작화되었음을 밝혔습니다. 그녀는 구성 타당도를 강화하는 질적 파일럿 연구를 추가했습니다.',
      },
      discipline: 'Psychology',
      complexity: 'advanced',
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'Here is my research design: [paste your design document or describe your study]. Please critique it as if you were a hostile Reviewer 2 - but also tell me how to fix each issue.',
        ko: '제 연구 설계입니다: [설계 문서를 붙여넣거나 연구를 설명하세요]. 적대적인 심사위원 2처럼 비판해 주세요 - 하지만 각 문제를 어떻게 고치는지도 알려주세요.',
      },
      context: {
        en: 'When you want a comprehensive critique of your full design.',
        ko: '전체 설계에 대한 포괄적인 비판을 원할 때.',
      },
      expectedResponse: {
        en: 'A3 will systematically identify weaknesses across methods, constructs, sampling, analysis plan, and theoretical alignment - each with specific remediation suggestions.',
        ko: 'A3는 방법, 구성, 표본 추출, 분석 계획, 이론적 정렬 전반에 걸쳐 체계적으로 약점을 식별합니다 - 각각 구체적인 해결 제안과 함께.',
      },
    },
    {
      prompt: {
        en: 'I\'m submitting to [Journal Name]. What specific critiques would reviewers at this venue likely raise about this design? [describe design]',
        ko: '[저널 이름]에 제출합니다. 이 장소의 리뷰어들이 이 설계에 대해 어떤 구체적인 비판을 제기할 것 같나요? [설계 설명]',
      },
      context: {
        en: 'When tailoring your defense to a specific journal\'s standards.',
        ko: '특정 저널의 기준에 맞게 방어를 조정할 때.',
      },
      expectedResponse: {
        en: 'A3 will calibrate its critique to that journal\'s known methodological preferences and reviewer expectations, providing venue-specific anticipation.',
        ko: 'A3는 해당 저널의 알려진 방법론적 선호도와 리뷰어 기대에 맞게 비판을 보정하여 장소별 예측을 제공합니다.',
      },
    },
    {
      prompt: {
        en: 'What alternative explanations could critics offer for my expected findings? Research question: [RQ], Hypothesis: [H], Design: [method]',
        ko: '비평가들이 내 예상 결과에 대해 어떤 대안적 설명을 제시할 수 있나요? 연구 질문: [RQ], 가설: [H], 설계: [방법]',
      },
      context: {
        en: 'When you want to preemptively address "couldn\'t this also be explained by..." critiques.',
        ko: '"이것도 ~로 설명될 수 있지 않나요..." 비판을 선제적으로 다루고 싶을 때.',
      },
      expectedResponse: {
        en: 'A3 will generate plausible rival hypotheses and confounding explanations, then suggest design modifications or analysis strategies to rule them out.',
        ko: 'A3는 그럴듯한 경쟁 가설과 혼란 설명을 생성한 다음, 이를 배제하기 위한 설계 수정 또는 분석 전략을 제안합니다.',
      },
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'Research design is finalized but not yet executed', ko: '연구 설계가 확정되었지만 아직 실행되지 않았을 때' },
      { en: 'Preparing a manuscript for journal submission', ko: '저널 제출을 위한 원고를 준비할 때' },
      { en: 'Before dissertation/thesis committee review', ko: '논문 위원회 검토 전' },
      { en: 'After receiving "revise and resubmit" decision', ko: '"수정 후 재제출" 결정을 받은 후' },
      { en: 'Want to strengthen your limitations section', ko: '제한점 섹션을 강화하고 싶을 때' },
    ],
    dontUseWhen: [
      { en: 'Still in early brainstorming phase', ko: '아직 초기 브레인스토밍 단계일 때' },
      { en: 'Design is already mandated with no flexibility', ko: '설계가 이미 유연성 없이 지정되었을 때' },
      { en: 'Looking for encouragement rather than critique', ko: '비판보다 격려를 원할 때' },
    ],
    alternativeAgents: [
      { agentId: 'A1', condition: { en: 'Your research question is the problem, not the design', ko: '설계가 아니라 연구 질문이 문제일 때' } },
      { agentId: 'D1', condition: { en: 'You need specific bias detection, not general critique', ko: '일반적인 비판이 아니라 특정 편향 감지가 필요할 때' } },
      { agentId: 'D2', condition: { en: 'Focused on validity threats specifically', ko: '특히 타당도 위협에 초점을 맞출 때' } },
    ],
  },

  journey: {
    startState: {
      en: 'You have a research design you think is solid, but worry about what reviewers might find.',
      ko: '견고하다고 생각하는 연구 설계가 있지만, 리뷰어가 무엇을 발견할지 걱정됩니다.',
    },
    transformation: [
      { en: 'Phase 1: Identify obvious criticisms any reviewer would raise', ko: '1단계: 모든 리뷰어가 제기할 명백한 비판 식별' },
      { en: 'Phase 2: Mine for non-obvious vulnerabilities others miss', ko: '2단계: 다른 사람들이 놓치는 비명백한 취약점 채굴' },
      { en: 'Phase 3: Generate alternative explanations for your findings', ko: '3단계: 결과에 대한 대안적 설명 생성' },
      { en: 'Phase 4: Identify what makes your design robust (not just weaknesses)', ko: '4단계: 설계를 견고하게 만드는 것 식별 (약점만이 아님)' },
      { en: 'Phase 5: Prioritize fixes by impact and feasibility', ko: '5단계: 영향과 실현 가능성으로 수정 우선순위 지정' },
    ],
    endState: {
      en: 'A battle-tested design with preemptive responses to likely critiques and a stronger limitations section.',
      ko: '예상 비판에 대한 선제적 응답과 더 강력한 제한점 섹션을 갖춘 실전 검증된 설계.',
    },
    timeEstimate: '30-45 minutes',
  },

  analogies: [
    {
      metaphor: {
        en: 'Like a Sparring Partner in Boxing',
        ko: '복싱의 스파링 파트너처럼',
      },
      explanation: {
        en: 'A boxer doesn\'t enter the ring without sparring first. The sparring partner throws real punches - hard enough to prepare you for the actual fight, but they\'re on your side. A3 is your research sparring partner: throwing reviewer punches so you\'re not surprised when the real ones come.',
        ko: '복서는 스파링 없이 링에 들어가지 않습니다. 스파링 파트너는 진짜 펀치를 날립니다 - 실제 싸움에 대비할 만큼 세게, 하지만 그들은 당신 편입니다. A3는 당신의 연구 스파링 파트너입니다: 진짜 펀치가 올 때 놀라지 않도록 리뷰어 펀치를 날립니다.',
      },
    },
    {
      metaphor: {
        en: 'Like a Building Inspector Before Selling',
        ko: '판매 전 건물 검사관처럼',
      },
      explanation: {
        en: 'Smart sellers hire their own inspector before listing. They\'d rather find and fix problems than have buyers discover them and kill the deal. A3 is your pre-submission inspector - finding the cracks before reviewers do.',
        ko: '현명한 판매자는 등록 전에 자체 검사관을 고용합니다. 구매자가 문제를 발견하고 거래를 취소하는 것보다 문제를 찾아 고치는 것이 낫습니다. A3는 제출 전 검사관입니다 - 리뷰어가 발견하기 전에 균열을 찾습니다.',
      },
    },
  ],

  proTips: [
    {
      tip: {
        en: 'Use A3 at multiple stages: once after design finalization, once after pilot study, and once before final submission. Different vulnerabilities emerge at each stage.',
        ko: 'A3를 여러 단계에서 사용하세요: 설계 확정 후 한 번, 파일럿 연구 후 한 번, 최종 제출 전 한 번. 각 단계에서 다른 취약점이 나타납니다.',
      },
      source: { en: 'Iterative research design best practices', ko: '반복적 연구 설계 모범 사례' },
      difficulty: 'advanced',
    },
    {
      tip: {
        en: 'Save A3\'s critique output - you can use the language directly in your "Limitations" section to show methodological awareness.',
        ko: 'A3의 비판 출력을 저장하세요 - "제한점" 섹션에서 방법론적 인식을 보여주기 위해 그 언어를 직접 사용할 수 있습니다.',
      },
      source: { en: 'Manuscript strategy from experienced authors', ko: '경험 많은 저자의 원고 전략' },
      difficulty: 'intermediate',
    },
    {
      tip: {
        en: 'Request the "Paradigm Flip" specifically when your committee has members from different methodological traditions.',
        ko: '위원회에 다른 방법론적 전통의 구성원이 있을 때 "패러다임 전환"을 구체적으로 요청하세요.',
      },
      source: { en: 'Interdisciplinary committee navigation', ko: '학제간 위원회 탐색' },
      difficulty: 'intermediate',
    },
  ],

  badges: [
    { type: 'essential' },
    { type: 'popular' },
  ],

  faq: [
    {
      question: {
        en: 'Will A3 be too harsh and discourage me?',
        ko: 'A3가 너무 가혹해서 낙담하게 만들지 않나요?',
      },
      answer: {
        en: 'A3 is designed as a "Friendly Nemesis" - it gives real critique but with solutions attached. Every weakness identified comes with a suggested fix. And A3 also identifies your design\'s strengths in Phase 4, so you leave knowing what to defend as well as what to fix.',
        ko: 'A3는 "친근한 적"으로 설계되었습니다 - 해결책과 함께 진짜 비판을 합니다. 식별된 모든 약점에는 제안된 수정 사항이 함께 옵니다. 그리고 A3는 4단계에서 설계의 강점도 식별하므로, 무엇을 고칠지뿐만 아니라 무엇을 방어할지도 알고 떠납니다.',
      },
    },
    {
      question: {
        en: 'Should I use A3 before or after data collection?',
        ko: '데이터 수집 전에 A3를 사용해야 하나요, 후에 해야 하나요?',
      },
      answer: {
        en: 'BEFORE is ideal - you can actually fix design issues before they become unfixable. After collection, A3 helps with damage control: strengthening limitations, preparing counterarguments, and identifying supplementary analyses to address critiques.',
        ko: '전이 이상적입니다 - 고칠 수 없게 되기 전에 실제로 설계 문제를 고칠 수 있습니다. 수집 후에 A3는 손상 관리에 도움이 됩니다: 제한점 강화, 반론 준비, 비판을 다루기 위한 보충 분석 식별.',
      },
    },
    {
      question: {
        en: 'Can A3 critique qualitative designs too?',
        ko: 'A3가 질적 설계도 비판할 수 있나요?',
      },
      answer: {
        en: 'Yes! A3 adapts its critique framework. For qualitative studies, it examines trustworthiness criteria (credibility, transferability, dependability, confirmability) rather than quantitative validity. It can also critique from a positivist lens if your committee includes skeptics.',
        ko: '네! A3는 비판 프레임워크를 조정합니다. 질적 연구에서는 양적 타당도 대신 신뢰성 기준(신빙성, 전이가능성, 의존가능성, 확인가능성)을 검토합니다. 위원회에 회의론자가 포함되어 있으면 실증주의 렌즈에서도 비판할 수 있습니다.',
      },
    },
  ],

  // Additional fields to add to inputRequirements and outputFormat
  outputFormat: {
    sections: [
      { title: 'Obvious Vulnerabilities', content: { en: 'Critiques any reviewer would raise', ko: '모든 리뷰어가 제기할 비판' } },
      { title: 'Hidden Vulnerabilities', content: { en: 'Non-obvious weaknesses discovered through deep analysis', ko: '심층 분석을 통해 발견된 비명백한 약점' } },
      { title: 'Alternative Explanations', content: { en: 'Rival hypotheses that could explain your findings', ko: '결과를 설명할 수 있는 경쟁 가설' } },
      { title: 'Design Strengths', content: { en: 'What makes your design robust', ko: '설계를 견고하게 만드는 것' } },
      { title: 'Prioritized Fixes', content: { en: 'Recommendations ranked by impact', ko: '영향별로 순위가 매겨진 권장사항' } },
    ],
  },

  tScoreReference: {
    ranges: [
      { range: 'Critical', label: { en: 'Must Fix', ko: '반드시 수정' }, examples: ['Fatal flaws that will cause rejection'] },
      { range: 'Major', label: { en: 'Should Fix', ko: '수정 권장' }, examples: ['Significant issues reviewers will raise'] },
      { range: 'Minor', label: { en: 'Consider Fixing', ko: '수정 고려' }, examples: ['Issues some reviewers might notice'] },
      { range: 'Enhancement', label: { en: 'Nice to Have', ko: '있으면 좋음' }, examples: ['Improvements beyond minimum standards'] },
    ],
  },
};
