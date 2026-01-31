import type { ExtendedAgentContent } from '../types';

export const c2Content: ExtendedAgentContent = {
  agentId: 'C2',
  quickSummary: {
    oneLiner: {
      en: 'Qualitative research design expert matching methodology to question type',
      ko: '방법론을 질문 유형에 맞추는 질적 연구 설계 전문가'
    },
    bestFor: [
      { en: 'Selecting appropriate qualitative traditions (phenomenology, grounded theory, ethnography, case study, narrative)', ko: '적절한 질적 전통 선택 (현상학, 근거이론, 민족지학, 사례연구, 내러티브)' },
      { en: 'Planning trustworthiness and rigor criteria', ko: '신뢰성 및 엄격성 기준 계획' },
      { en: 'Designing interview/observation protocols', ko: '인터뷰/관찰 프로토콜 설계' },
      { en: 'Ensuring paradigmatic coherence', ko: '패러다임적 일관성 보장' },
      { en: 'Avoiding phenomenology-as-default bias', ko: '현상학을 기본으로 하는 편향 회피' }
    ],
    notFor: [
      { en: 'Quantitative experimental designs (use C1)', ko: '양적 실험 설계 (C1 사용)' },
      { en: 'Mixed methods integration (use C3)', ko: '혼합방법 통합 (C3 사용)' },
      { en: 'Statistical power analysis (use C1)', ko: '통계적 검정력 분석 (C1 사용)' }
    ],
    timeToResult: '1.5-3 hours'
  },
  persona: {
    archetype: 'The Depth Diver',
    personality: {
      en: 'Reflective, contextual, and tradition-aware. Matches methodology to lived experience.',
      ko: '성찰적이고 맥락적이며 전통을 인식하는 성격. 방법론을 삶의 경험에 맞춤.'
    },
    voiceSample: {
      en: "Your question about transformation suggests narrative inquiry rather than phenomenology—let's explore how participants storied their change over time.",
      ko: "변화에 대한 귀하의 질문은 현상학보다는 내러티브 탐구를 시사합니다. 참여자들이 시간에 따라 어떻게 변화를 이야기했는지 탐색해봅시다."
    },
    motto: {
      en: 'Match methodology to meaning, not habit',
      ko: '습관이 아닌 의미에 방법론을 맞추라'
    }
  },
  decisionHelper: {
    useWhen: [
      { en: 'Your research question seeks deep understanding or lived experience', ko: '연구 질문이 깊은 이해나 삶의 경험을 추구할 때' },
      { en: 'Context and meaning are more important than generalization', ko: '맥락과 의미가 일반화보다 중요할 때' },
      { en: 'You need to select among qualitative traditions', ko: '질적 전통 중에서 선택해야 할 때' },
      { en: 'Trustworthiness criteria planning is needed', ko: '신뢰성 기준 계획이 필요할 때' }
    ],
    dontUseWhen: [
      { en: 'You need causal inference or experimental control', ko: '인과 추론이나 실험 통제가 필요할 때' },
      { en: 'You are combining qual and quant equally', ko: '질적과 양적을 동등하게 결합할 때' },
      { en: 'Your goal is statistical generalization', ko: '목표가 통계적 일반화일 때' }
    ],
    alternativeAgents: [
      { agentId: 'C1', condition: { en: 'When quantitative design is needed', ko: '양적 설계가 필요할 때' } },
      { agentId: 'C3', condition: { en: 'When mixed methods integration is needed', ko: '혼합방법 통합이 필요할 때' } },
      { agentId: 'A5', condition: { en: 'When paradigm navigation is needed', ko: '패러다임 탐색이 필요할 때' } }
    ]
  },
  badges: [{ type: 'essential' }],
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Phenomenology Default Avoidance', ko: '현상학 기본 회피' },
        purpose: { en: 'Avoid always recommending phenomenology', ko: '항상 현상학을 추천하는 것 회피' }
      },
      {
        number: 2,
        title: { en: 'Methodology Matching', ko: '방법론 매칭' },
        purpose: { en: 'Match design to research question type', ko: '연구 질문 유형에 설계 매칭' }
      },
      {
        number: 3,
        title: { en: 'Tradition Exploration', ko: '전통 탐색' },
        purpose: { en: 'Explore narrative, case study, ethnography, grounded theory', ko: '내러티브, 사례연구, 민족지학, 근거이론 탐색' }
      },
      {
        number: 4,
        title: { en: 'Rigor Planning', ko: '엄격성 계획' },
        purpose: { en: 'Plan trustworthiness criteria', ko: '신뢰성 기준 계획' }
      },
      {
        number: 5,
        title: { en: 'Design Articulation', ko: '설계 명시' },
        purpose: { en: 'Articulate complete qualitative design', ko: '완전한 질적 설계 명시' }
      },
    ],
  },
  checkpoints: [
    {
      id: 'CP_METHODOLOGY_APPROVAL',
      description: { en: 'Qualitative design approval required', ko: '질적 설계 승인 필요' }
    }
  ],
  inputRequirements: {
    required: [
      {
        name: 'research_question',
        description: { en: 'Qualitative research question', ko: '질적 연구 질문' }
      },
      {
        name: 'paradigm',
        description: { en: 'Philosophical stance from A5', ko: 'A5에서의 철학적 입장' }
      },
    ],
  },
  references: ['Creswell, J. W., & Poth, C. N. (2018). Qualitative Inquiry and Research Design.'],
};
