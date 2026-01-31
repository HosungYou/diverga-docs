import type { ExtendedAgentContent } from '../types';

export const c3Content: ExtendedAgentContent = {
  agentId: 'C3',
  quickSummary: {
    oneLiner: {
      en: 'Mixed methods integration specialist avoiding sequential-explanatory defaults',
      ko: '순차적 설명적 기본을 피하는 혼합방법 통합 전문가'
    },
    bestFor: [
      { en: 'Designing convergent, embedded, and multiphase mixed methods', ko: '수렴적, 내재적, 다단계 혼합방법 설계' },
      { en: 'Planning integration points between qual and quant strands', ko: '질적 및 양적 가닥 간 통합 지점 계획' },
      { en: 'Applying Morse notation (QUAN→qual, QUAL+quan)', ko: 'Morse 표기법 적용 (QUAN→qual, QUAL+quan)' },
      { en: 'Ensuring paradigmatic coherence in mixed designs', ko: '혼합 설계에서 패러다임적 일관성 보장' },
      { en: 'Avoiding default to sequential explanatory', ko: '순차적 설명적 기본 회피' }
    ],
    notFor: [
      { en: 'Pure quantitative designs (use C1)', ko: '순수 양적 설계 (C1 사용)' },
      { en: 'Pure qualitative designs (use C2)', ko: '순수 질적 설계 (C2 사용)' },
      { en: 'Meta-analysis (use C5)', ko: '메타분석 (C5 사용)' }
    ],
    timeToResult: '2-4 hours'
  },
  persona: {
    archetype: 'The Bridge Builder',
    personality: {
      en: 'Integrative, flexible, and paradigm-conscious. Builds coherent connections between worldviews.',
      ko: '통합적이고 유연하며 패러다임을 인식하는 성격. 세계관 간에 일관된 연결을 구축.'
    },
    voiceSample: {
      en: "Instead of sequential explanatory, let's explore a convergent design where qual and quant strands run in parallel and merge at interpretation.",
      ko: "순차적 설명적 설계 대신, 질적 및 양적 가닥이 병렬로 진행되고 해석 단계에서 통합되는 수렴적 설계를 탐색해봅시다."
    },
    motto: {
      en: 'Integrate with intention, not convenience',
      ko: '편의가 아닌 의도로 통합하라'
    }
  },
  decisionHelper: {
    useWhen: [
      { en: 'Your research question requires both numbers and narratives', ko: '연구 질문이 숫자와 내러티브를 모두 필요로 할 때' },
      { en: 'You want to triangulate findings from different methods', ko: '다양한 방법의 발견을 삼각측량하고 싶을 때' },
      { en: 'One method alone cannot fully address the problem', ko: '한 가지 방법만으로는 문제를 완전히 해결할 수 없을 때' },
      { en: 'You need to explain quantitative results qualitatively or vice versa', ko: '양적 결과를 질적으로 설명하거나 그 반대가 필요할 때' }
    ],
    dontUseWhen: [
      { en: 'Your question is purely causal/experimental', ko: '질문이 순수하게 인과적/실험적일 때' },
      { en: 'Your question seeks only deep qualitative understanding', ko: '질문이 깊은 질적 이해만을 추구할 때' },
      { en: 'Resource/time constraints prevent proper integration', ko: '자원/시간 제약으로 적절한 통합이 불가능할 때' }
    ],
    alternativeAgents: [
      { agentId: 'C1', condition: { en: 'When pure quantitative design is needed', ko: '순수 양적 설계가 필요할 때' } },
      { agentId: 'C2', condition: { en: 'When pure qualitative design is needed', ko: '순수 질적 설계가 필요할 때' } },
      { agentId: 'A5', condition: { en: 'When paradigm navigation is needed', ko: '패러다임 탐색이 필요할 때' } }
    ]
  },
  badges: [{ type: 'advanced' }],
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Sequential Default Avoidance', ko: '순차적 기본 회피' },
        purpose: { en: 'Avoid always suggesting sequential explanatory', ko: '항상 순차적 설명적 설계를 제안하는 것 회피' }
      },
      {
        number: 2,
        title: { en: 'Design Type Exploration', ko: '설계 유형 탐색' },
        purpose: { en: 'Explore convergent, embedded, multiphase designs', ko: '수렴적, 내재적, 다단계 설계 탐색' }
      },
      {
        number: 3,
        title: { en: 'Morse Notation', ko: 'Morse 표기법' },
        purpose: { en: 'Apply Morse notation (QUAN→qual, QUAL+quan)', ko: 'Morse 표기법 적용' }
      },
      {
        number: 4,
        title: { en: 'Integration Strategy', ko: '통합 전략' },
        purpose: { en: 'Plan integration points and methods', ko: '통합 지점 및 방법 계획' }
      },
      {
        number: 5,
        title: { en: 'Coherence Check', ko: '일관성 검토' },
        purpose: { en: 'Verify paradigmatic coherence', ko: '패러다임적 일관성 확인' }
      },
    ],
  },
  checkpoints: [
    {
      id: 'CP_METHODOLOGY_APPROVAL',
      description: { en: 'Mixed methods design requires approval', ko: '혼합방법 설계 승인 필요' }
    }
  ],
  inputRequirements: {
    required: [
      {
        name: 'research_question',
        description: { en: 'Question requiring both qual+quant', ko: '질적+양적 접근이 필요한 질문' }
      },
    ],
  },
  references: ['Creswell, J. W., & Plano Clark, V. L. (2018). Designing and Conducting Mixed Methods Research.'],
};
