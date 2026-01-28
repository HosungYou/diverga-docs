import type { ExtendedAgentContent } from '../types';

export const d4Content: ExtendedAgentContent = {
  agentId: 'D4',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Existing Scale Review', ko: '기존 척도 검토' },
        purpose: { en: 'Review validated instruments before creating new', ko: '새로 만들기 전 검증된 도구 검토' }
      },
      {
        number: 2,
        title: { en: 'Item Generation', ko: '문항 생성' },
        purpose: { en: 'Generate items based on construct definition', ko: '구성개념 정의에 기반한 문항 생성' }
      },
      {
        number: 3,
        title: { en: 'Content Validity', ko: '내용 타당도' },
        purpose: { en: 'Expert review and CVI calculation', ko: '전문가 검토 및 CVI 계산' }
      },
      {
        number: 4,
        title: { en: 'Pilot Testing', ko: '파일럿 테스트' },
        purpose: { en: 'Plan exploratory factor analysis', ko: '탐색적 요인분석 계획' }
      },
      {
        number: 5,
        title: { en: 'Reliability Assessment', ko: '신뢰도 평가' },
        purpose: { en: 'Cronbach alpha, test-retest plan', ko: 'Cronbach 알파, 검사-재검사 계획' }
      },
    ],
  },
  checkpoints: [
    {
      id: 'CP_METHODOLOGY_APPROVAL',
      description: { en: 'Instrument must be validated before use', ko: '사용 전 도구 검증 필요' }
    }
  ],
  inputRequirements: {
    required: [
      {
        name: 'construct',
        description: { en: 'What to measure', ko: '측정할 구성개념' }
      },
      {
        name: 'population',
        description: { en: 'Target respondent population', ko: '대상 응답자 모집단' }
      },
    ],
  },
  references: ['DeVellis, R. F. (2017). Scale Development: Theory and Applications.'],
};
