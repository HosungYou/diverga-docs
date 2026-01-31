import type { ExtendedAgentContent } from '../types';

export const c4Content: ExtendedAgentContent = {
  agentId: 'C4',
  quickSummary: {
    oneLiner: {
      en: 'Experimental materials developer creating context-specific protocols',
      ko: '맥락 특정 프로토콜을 만드는 실험 자료 개발자'
    },
    bestFor: [
      { en: 'Designing custom treatment protocols (not generic ones)', ko: '맞춤형 처치 프로토콜 설계 (일반적 프로토콜 아님)' },
      { en: 'Creating manipulation check instruments', ko: '조작 점검 도구 생성' },
      { en: 'Ensuring treatment fidelity and consistency', ko: '처치 충실도 및 일관성 보장' },
      { en: 'Developing materials for RCTs and quasi-experiments', ko: 'RCT 및 준실험을 위한 자료 개발' },
      { en: 'Tailoring interventions to specific contexts', ko: '특정 맥락에 맞춘 중재 조정' }
    ],
    notFor: [
      { en: 'Qualitative interview protocol design (use C2)', ko: '질적 인터뷰 프로토콜 설계 (C2 사용)' },
      { en: 'Survey/questionnaire development (use D2)', ko: '설문조사/질문지 개발 (D2 사용)' },
      { en: 'Meta-analysis coding schemes (use C5)', ko: '메타분석 코딩 스키마 (C5 사용)' }
    ],
    timeToResult: '1-2 hours'
  },
  persona: {
    archetype: 'The Lab Curator',
    personality: {
      en: 'Detail-oriented, context-aware, and fidelity-focused. Rejects one-size-fits-all materials.',
      ko: '세부적이고 맥락을 인식하며 충실도에 집중하는 성격. 만능 자료를 거부.'
    },
    voiceSample: {
      en: "Generic CBT worksheets won't work here—let's design a protocol specifically for your adolescent population and school setting.",
      ko: "일반적인 CBT 워크시트는 여기서 작동하지 않습니다. 귀하의 청소년 집단과 학교 환경에 특화된 프로토콜을 설계해봅시다."
    },
    motto: {
      en: 'Context matters more than convenience',
      ko: '맥락이 편의보다 중요하다'
    }
  },
  decisionHelper: {
    useWhen: [
      { en: 'You need experimental treatment materials', ko: '실험적 처치 자료가 필요할 때' },
      { en: 'Generic protocols don\'t fit your context', ko: '일반적 프로토콜이 맥락에 맞지 않을 때' },
      { en: 'Treatment fidelity checks are required', ko: '처치 충실도 점검이 필요할 때' },
      { en: 'You have a C1-approved experimental design', ko: 'C1 승인된 실험 설계가 있을 때' }
    ],
    dontUseWhen: [
      { en: 'You need qualitative interview guides', ko: '질적 인터뷰 가이드가 필요할 때' },
      { en: 'You are developing measurement scales', ko: '측정 척도를 개발할 때' },
      { en: 'You need meta-analysis data extraction forms', ko: '메타분석 데이터 추출 양식이 필요할 때' }
    ],
    alternativeAgents: [
      { agentId: 'C2', condition: { en: 'When qualitative interview protocol is needed', ko: '질적 인터뷰 프로토콜이 필요할 때' } },
      { agentId: 'D2', condition: { en: 'When measurement instrument is needed', ko: '측정 도구가 필요할 때' } },
      { agentId: 'C1', condition: { en: 'When experimental design is needed', ko: '실험 설계가 필요할 때' } }
    ]
  },
  badges: [{ type: 'quick' }],
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Standard Material Avoidance', ko: '표준 자료 회피' },
        purpose: { en: 'Avoid generic treatment protocols', ko: '일반적 처치 프로토콜 회피' }
      },
      {
        number: 2,
        title: { en: 'Context-Specific Development', ko: '맥락 특정 개발' },
        purpose: { en: 'Design materials for specific research context', ko: '특정 연구 맥락을 위한 자료 설계' }
      },
      {
        number: 3,
        title: { en: 'Manipulation Check Design', ko: '조작 점검 설계' },
        purpose: { en: 'Ensure treatment fidelity verification', ko: '처치 충실도 확인 보장' }
      },
    ],
  },
  inputRequirements: {
    required: [
      {
        name: 'research_design',
        description: { en: 'Approved experimental design from C1', ko: 'C1에서 승인된 실험 설계' }
      },
      {
        name: 'treatment_description',
        description: { en: 'What the intervention involves', ko: '중재 내용' }
      },
    ],
  },
};
