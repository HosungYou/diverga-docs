import type { ExtendedAgentContent } from '../types';

export const f5Content: ExtendedAgentContent = {
  agentId: 'F5',
  vsProcess: {
    type: 'LIGHT',
    phases: [
      { number: 1, title: { en: 'Citation Integrity', ko: '인용 무결성' }, purpose: { en: 'Verify citations preserved after humanization', ko: '휴먼화 후 인용 보존 확인' } },
      { number: 2, title: { en: 'Statistical Accuracy', ko: '통계적 정확성' }, purpose: { en: 'Verify numbers unchanged', ko: '숫자 변경 없음 확인' } },
      { number: 3, title: { en: 'Meaning Preservation', ko: '의미 보존' }, purpose: { en: 'Ensure meaning not distorted', ko: '의미가 왜곡되지 않았는지 확인' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'original_text', description: { en: 'Pre-humanization text', ko: '휴먼화 전 텍스트' } },
      { name: 'humanized_text', description: { en: 'Post-humanization text', ko: '휴먼화 후 텍스트' } },
    ],
  },
};
