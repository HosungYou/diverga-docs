import type { ExtendedAgentContent } from '../types';

export const c1Content: ExtendedAgentContent = {
  agentId: 'C1',
  quickSummary: {
    oneLiner: {
      en: 'Quantitative research design architect avoiding simple pre-post defaults',
      ko: '단순한 사전-사후 설계를 피하는 양적 연구 설계 설계자'
    },
    bestFor: [
      { en: 'Experimental and quasi-experimental design selection', ko: '실험 및 준실험 설계 선택' },
      { en: 'RDD, SMART, and adaptive design implementation', ko: 'RDD, SMART, 적응형 설계 구현' },
      { en: 'Power analysis and sample size calculation', ko: '검정력 분석 및 표본 크기 계산' },
      { en: 'Internal and external validity threat assessment', ko: '내적 및 외적 타당도 위협 평가' },
      { en: 'Causal inference methodology', ko: '인과 추론 방법론' }
    ],
    notFor: [
      { en: 'Qualitative research design (use C2)', ko: '질적 연구 설계 (C2 사용)' },
      { en: 'Mixed methods integration (use C3)', ko: '혼합방법 통합 (C3 사용)' },
      { en: 'Meta-analysis planning (use C5)', ko: '메타분석 계획 (C5 사용)' }
    ],
    timeToResult: '2-4 hours'
  },
  persona: {
    archetype: 'The Blueprint Architect',
    personality: {
      en: 'Methodical, creative, and validity-obsessed. Challenges conventional designs while maintaining rigor.',
      ko: '체계적이고 창의적이며 타당도에 집착하는 성격. 엄격성을 유지하면서 기존 설계에 도전.'
    },
    voiceSample: {
      en: "Before we default to a simple RCT, let's explore whether a regression discontinuity design might better fit your natural selection mechanism.",
      ko: "단순 RCT를 기본으로 하기 전에, 회귀 불연속 설계가 귀하의 자연적 선택 메커니즘에 더 적합할지 탐색해봅시다."
    },
    motto: {
      en: 'Question the obvious, design for causality',
      ko: '당연한 것에 의문을 제기하고, 인과관계를 위한 설계를'
    }
  },
  decisionHelper: {
    useWhen: [
      { en: 'You need to establish causal relationships', ko: '인과 관계를 확립해야 할 때' },
      { en: 'Random assignment is possible or infeasible', ko: '무작위 배정이 가능하거나 불가능할 때' },
      { en: 'You want to avoid simple pre-post designs', ko: '단순한 사전-사후 설계를 피하고 싶을 때' },
      { en: 'Power analysis is needed for funding', ko: '연구비를 위해 검정력 분석이 필요할 때' }
    ],
    dontUseWhen: [
      { en: 'Your research question is exploratory/qualitative', ko: '연구 질문이 탐색적/질적일 때' },
      { en: 'You are conducting a meta-analysis', ko: '메타분석을 수행할 때' },
      { en: 'Mixed methods integration is the primary goal', ko: '혼합방법 통합이 주요 목표일 때' }
    ],
    alternativeAgents: [
      { agentId: 'C2', condition: { en: 'When qualitative research is needed', ko: '질적 연구가 필요할 때' } },
      { agentId: 'C3', condition: { en: 'When mixed methods integration is needed', ko: '혼합방법 통합이 필요할 때' } },
      { agentId: 'C5', condition: { en: 'When conducting meta-analysis', ko: '메타분석 수행 시' } }
    ]
  },
  badges: [{ type: 'essential' }],
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Obvious Design Avoidance', ko: '명백한 설계 회피' },
        purpose: { en: 'Avoid defaulting to simple pre-post designs', ko: '단순 사전-사후 설계를 기본으로 하는 것 회피' }
      },
      {
        number: 2,
        title: { en: 'Creative Design Exploration', ko: '창의적 설계 탐색' },
        purpose: { en: 'Explore RDD, SMART, adaptive designs', ko: 'RDD, SMART, 적응형 설계 탐색' }
      },
      {
        number: 3,
        title: { en: 'Power Analysis Integration', ko: '검정력 분석 통합' },
        purpose: { en: 'Calculate sample sizes for chosen design', ko: '선택된 설계에 대한 표본 크기 계산' }
      },
      {
        number: 4,
        title: { en: 'Validity Assessment', ko: '타당도 평가' },
        purpose: { en: 'Evaluate internal and external validity threats', ko: '내적 및 외적 타당도 위협 평가' }
      },
      {
        number: 5,
        title: { en: 'Design Recommendation', ko: '설계 권장' },
        purpose: { en: 'Present T-Score ranked design options', ko: 'T-Score 순위 설계 옵션 제시' }
      },
    ],
  },
  checkpoints: [
    {
      id: 'CP_METHODOLOGY_APPROVAL',
      description: { en: 'Design must be approved before data collection', ko: '데이터 수집 전 설계 승인 필요' }
    }
  ],
  inputRequirements: {
    required: [
      {
        name: 'research_question',
        description: { en: 'Approved RQ from A1', ko: 'A1에서 승인된 RQ' }
      },
      {
        name: 'paradigm',
        description: { en: 'Confirmed from A5', ko: 'A5에서 확인됨' }
      },
    ],
  },
  references: ['Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). Experimental and Quasi-Experimental Designs.'],
};
