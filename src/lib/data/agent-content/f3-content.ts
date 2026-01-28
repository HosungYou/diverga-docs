import type { ExtendedAgentContent } from '../types';

export const f3Content: ExtendedAgentContent = {
  agentId: 'F3',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'OSF Review', ko: 'OSF 검토' }, purpose: { en: 'Review Open Science Framework best practices', ko: '오픈 사이언스 프레임워크 모범 사례 검토' } },
      { number: 2, title: { en: 'Data Sharing Plan', ko: '데이터 공유 계획' }, purpose: { en: 'Design FAIR data sharing protocols', ko: 'FAIR 데이터 공유 프로토콜 설계' } },
      { number: 3, title: { en: 'Code Availability', ko: '코드 가용성' }, purpose: { en: 'Plan code and materials sharing', ko: '코드 및 자료 공유 계획' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'project_materials', description: { en: 'Data, code, and materials inventory', ko: '데이터, 코드 및 자료 목록' } },
    ],
  },
  references: ['Nosek, B. A., et al. (2015). Promoting an open research culture. Science.'],
};
