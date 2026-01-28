import type { ExtendedAgentContent } from '../types';

export const f2Content: ExtendedAgentContent = {
  agentId: 'F2',
  vsProcess: {
    type: 'LIGHT',
    phases: [
      { number: 1, title: { en: 'Guideline Selection', ko: '지침 선택' }, purpose: { en: 'Select PRISMA, CONSORT, STROBE, or COREQ', ko: 'PRISMA, CONSORT, STROBE 또는 COREQ 선택' } },
      { number: 2, title: { en: 'Item-by-Item Check', ko: '항목별 확인' }, purpose: { en: 'Verify each checklist item', ko: '각 체크리스트 항목 확인' } },
      { number: 3, title: { en: 'Gap Identification', ko: '갭 식별' }, purpose: { en: 'Identify missing reporting elements', ko: '누락된 보고 요소 식별' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'manuscript', description: { en: 'Draft manuscript', ko: '초안 원고' } },
      { name: 'study_design', description: { en: 'Type of study for guideline matching', ko: '지침 매칭을 위한 연구 유형' } },
    ],
  },
  references: ['EQUATOR Network (2023). Reporting Guidelines for Health Research.'],
};
