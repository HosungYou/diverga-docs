import type { ExtendedAgentContent } from '../types';

export const c6Content: ExtendedAgentContent = {
  agentId: 'C6',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Data Completeness Check', ko: '데이터 완전성 검토' },
        purpose: { en: 'Verify all required fields extracted', ko: '모든 필수 필드 추출 확인' }
      },
      {
        number: 2,
        title: { en: 'Calculation Verification', ko: '계산 검증' },
        purpose: { en: 'Double-check Hedges g calculations', ko: 'Hedges g 계산 이중 확인' }
      },
      {
        number: 3,
        title: { en: 'SD Recovery', ko: 'SD 복구' },
        purpose: { en: 'Recover missing SDs from CIs, SEs, p-values', ko: 'CI, SE, p-값에서 누락된 SD 복구' }
      },
    ],
  },
  inputRequirements: {
    required: [
      {
        name: 'extracted_data',
        description: { en: 'Raw data extraction spreadsheet', ko: '원시 데이터 추출 스프레드시트' }
      },
    ],
  },
};
