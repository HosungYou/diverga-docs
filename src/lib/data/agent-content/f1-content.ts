import type { ExtendedAgentContent } from '../types';

export const f1Content: ExtendedAgentContent = {
  agentId: 'F1',
  vsProcess: {
    type: 'LIGHT',
    phases: [
      { number: 1, title: { en: 'Cross-Reference Check', ko: '상호 참조 확인' }, purpose: { en: 'Verify RQ-method-results alignment', ko: 'RQ-방법-결과 정렬 확인' } },
      { number: 2, title: { en: 'Terminology Consistency', ko: '용어 일관성' }, purpose: { en: 'Check consistent use of terms', ko: '용어의 일관된 사용 확인' } },
      { number: 3, title: { en: 'Logic Flow', ko: '논리 흐름' }, purpose: { en: 'Verify argument coherence', ko: '논증 일관성 확인' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'manuscript', description: { en: 'Complete draft document', ko: '완성된 초안 문서' } },
    ],
  },
};
