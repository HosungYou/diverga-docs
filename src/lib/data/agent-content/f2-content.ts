import type { ExtendedAgentContent } from '../types';

export const f2Content: ExtendedAgentContent = {
  agentId: 'F2',
  quickSummary: {
    oneLiner: {
      en: 'The Checklist Champion: Ensures your paper meets PRISMA, CONSORT, STROBE, or COREQ reporting standards',
      ko: '체크리스트 챔피언: 논문이 PRISMA, CONSORT, STROBE 또는 COREQ 보고 기준을 충족하도록 보장'
    },
    bestFor: [
      { en: 'Systematic reviews needing PRISMA compliance', ko: 'PRISMA 준수가 필요한 체계적 문헌고찰' },
      { en: 'Clinical trials requiring CONSORT checklist', ko: 'CONSORT 체크리스트가 필요한 임상시험' },
      { en: 'Observational studies using STROBE guidelines', ko: 'STROBE 지침을 사용하는 관찰 연구' },
      { en: 'Qualitative research following COREQ standards', ko: 'COREQ 기준을 따르는 질적 연구' },
      { en: 'Journal submissions requiring reporting guideline compliance', ko: '보고 지침 준수가 필요한 저널 제출' }
    ],
    notFor: [
      { en: 'Theoretical papers without empirical data', ko: '실증 데이터가 없는 이론 논문' },
      { en: 'Opinion or commentary pieces', ko: '의견 또는 논평 논문' },
      { en: 'Statistical analysis help', ko: '통계 분석 도움' }
    ],
    timeToResult: '20-40 minutes (depending on guideline complexity)'
  },
  decisionHelper: {
    useWhen: [
      { en: 'Target journal requires specific reporting guidelines', ko: '목표 저널이 특정 보고 지침을 요구할 때' },
      { en: 'You are conducting a systematic review, RCT, or observational study', ko: '체계적 문헌고찰, RCT 또는 관찰 연구를 수행할 때' },
      { en: 'You want to ensure completeness before submission', ko: '제출 전 완전성을 보장하고 싶을 때' },
      { en: 'Reviewers previously noted missing reporting elements', ko: '리뷰어가 이전에 누락된 보고 요소를 지적했을 때' }
    ],
    dontUseWhen: [
      { en: 'Your study does not fit standard reporting guidelines', ko: '연구가 표준 보고 지침에 맞지 않을 때' },
      { en: 'You need help designing the study (not just reporting it)', ko: '(단순히 보고하는 것이 아니라) 연구 설계에 대한 도움이 필요할 때' },
      { en: 'You want statistical analysis advice', ko: '통계 분석 조언이 필요할 때' }
    ],
    alternativeAgents: [
      { agentId: 'F1', condition: { en: 'For overall internal consistency', ko: '전반적인 내적 일관성을 위해' } },
      { agentId: 'F3', condition: { en: 'For data sharing and reproducibility', ko: '데이터 공유 및 재현성을 위해' } },
      { agentId: 'I2', condition: { en: 'For PRISMA systematic review automation', ko: 'PRISMA 체계적 문헌고찰 자동화를 위해' } }
    ]
  },
  badges: [{ type: 'essential' }],
  successStories: [
    {
      researcher: {
        name: 'Dr. Maria Rodriguez',
        field: { en: 'Public Health', ko: '공중 보건' }
      },
      challenge: {
        en: 'Journal required full PRISMA 2020 compliance but manuscript was missing 8 checklist items',
        ko: '저널은 PRISMA 2020 완전 준수를 요구했지만 원고에 8개 체크리스트 항목이 누락됨'
      },
      solution: {
        en: 'F2-ChecklistCompanion identified all missing elements and provided specific section recommendations',
        ko: 'F2-체크리스트동반자가 모든 누락된 요소를 식별하고 구체적인 섹션 권장사항 제공'
      },
      outcome: {
        en: 'Manuscript accepted with minor revisions; editor praised thoroughness of reporting',
        ko: '경미한 수정으로 원고 승인; 편집자가 보고의 철저함을 칭찬'
      },
      metrics: [
        { label: { en: 'Results', ko: '결과' }, value: '8/27 PRISMA items added, 35-minute review, desk rejection avoided' }
      ]
    }
  ],
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
