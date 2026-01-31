import type { ExtendedAgentContent } from '../types';

export const f3Content: ExtendedAgentContent = {
  agentId: 'F3',
  quickSummary: {
    oneLiner: {
      en: 'The Open Science Advocate: Helps you share data, code, and materials following FAIR principles',
      ko: '오픈 사이언스 옹호자: FAIR 원칙에 따라 데이터, 코드 및 자료를 공유하도록 지원'
    },
    bestFor: [
      { en: 'Planning data sharing for journal submission', ko: '저널 제출을 위한 데이터 공유 계획' },
      { en: 'Creating Open Science Framework (OSF) projects', ko: 'OSF(오픈 사이언스 프레임워크) 프로젝트 생성' },
      { en: 'Ensuring reproducibility and transparency', ko: '재현성과 투명성 보장' },
      { en: 'Meeting funder open data requirements', ko: '연구비 지원기관의 오픈 데이터 요구사항 충족' },
      { en: 'Making research materials publicly accessible', ko: '연구 자료를 공개적으로 접근 가능하게 만들기' }
    ],
    notFor: [
      { en: 'Sensitive data that cannot be shared (e.g., medical records)', ko: '공유할 수 없는 민감한 데이터 (예: 의료 기록)' },
      { en: 'Proprietary industry research', ko: '독점 산업 연구' },
      { en: 'Data analysis or statistical consultation', ko: '데이터 분석 또는 통계 상담' }
    ],
    timeToResult: '30-60 minutes (for complete sharing plan)'
  },
  decisionHelper: {
    useWhen: [
      { en: 'Journal requires data availability statement', ko: '저널이 데이터 가용성 명세를 요구할 때' },
      { en: 'You want to increase research impact through transparency', ko: '투명성을 통해 연구 영향력을 높이고 싶을 때' },
      { en: 'Funder mandates open data sharing', ko: '연구비 지원기관이 오픈 데이터 공유를 의무화할 때' },
      { en: 'You are planning a preregistered or registered report study', ko: '사전등록 또는 등록된 보고서 연구를 계획할 때' }
    ],
    dontUseWhen: [
      { en: 'Data contains protected health information (PHI)', ko: '데이터에 보호 대상 건강 정보(PHI)가 포함될 때' },
      { en: 'You have not obtained proper consent for data sharing', ko: '데이터 공유에 대한 적절한 동의를 얻지 못했을 때' },
      { en: 'Your institution prohibits public data sharing', ko: '소속 기관이 공개 데이터 공유를 금지할 때' }
    ],
    alternativeAgents: [
      { agentId: 'G4', condition: { en: 'For preregistering analysis plans', ko: '분석 계획 사전등록을 위해' } },
      { agentId: 'F4', condition: { en: 'For ensuring research transparency', ko: '연구 투명성 보장을 위해' } },
      { agentId: 'D4', condition: { en: 'For data sharing ethics guidance', ko: '데이터 공유 윤리 지침을 위해' } }
    ]
  },
  badges: [{ type: 'essential' }],
  successStories: [
    {
      researcher: {
        name: 'Dr. James Lee',
        field: { en: 'Psychology', ko: '심리학' }
      },
      challenge: {
        en: 'Journal required full open data and materials sharing but researcher unsure how to anonymize survey data',
        ko: '저널은 전체 오픈 데이터 및 자료 공유를 요구했지만 연구자는 설문조사 데이터를 익명화하는 방법을 몰랐음'
      },
      solution: {
        en: 'F3-OpenScienceAdvocate designed FAIR data sharing plan with anonymization workflow and OSF repository structure',
        ko: 'F3-오픈사이언스옹호자가 익명화 워크플로우와 OSF 저장소 구조를 갖춘 FAIR 데이터 공유 계획 설계'
      },
      outcome: {
        en: 'Paper published with Open Science badge; dataset cited 47 times in first year',
        ko: '오픈 사이언스 배지를 받아 논문 출판; 첫 해에 데이터셋이 47회 인용됨'
      },
      metrics: [
        { label: { en: 'Results', ko: '결과' }, value: 'OSF project created, 3 data files + codebook shared, 47 citations to dataset' }
      ]
    }
  ],
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
