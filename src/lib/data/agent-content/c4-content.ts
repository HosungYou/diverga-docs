import type { ExtendedAgentContent } from '../types';

export const c4Content: ExtendedAgentContent = {
  agentId: 'C4',
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
