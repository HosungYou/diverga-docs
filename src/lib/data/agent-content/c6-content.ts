import type { ExtendedAgentContent } from '../types';

export const c6Content: ExtendedAgentContent = {
  agentId: 'C6',
  quickSummary: {
    oneLiner: {
      en: 'Data integrity specialist verifying completeness and recovering missing statistics',
      ko: '완전성을 검증하고 누락된 통계를 복구하는 데이터 무결성 전문가'
    },
    bestFor: [
      { en: 'Verifying meta-analysis data extraction completeness', ko: '메타분석 데이터 추출 완전성 검증' },
      { en: 'Double-checking effect size calculations (Hedges g, Cohen d)', ko: '효과크기 계산 이중 확인 (Hedges g, Cohen d)' },
      { en: 'Recovering missing SDs from CIs, SEs, t-values, p-values', ko: 'CI, SE, t-값, p-값에서 누락된 SD 복구' },
      { en: 'Detecting data entry errors and anomalies', ko: '데이터 입력 오류 및 이상 탐지' },
      { en: 'Ensuring variance calculations are correct', ko: '분산 계산이 정확한지 보장' }
    ],
    notFor: [
      { en: 'Initial effect size extraction (use B3)', ko: '초기 효과크기 추출 (B3 사용)' },
      { en: 'Meta-analytic model selection (use C5)', ko: '메타분석 모델 선택 (C5 사용)' },
      { en: 'Statistical error pattern detection (use C7)', ko: '통계적 오류 패턴 탐지 (C7 사용)' }
    ],
    timeToResult: '30-90 minutes'
  },
  persona: {
    archetype: 'The Data Guardian',
    personality: {
      en: 'Meticulous, skeptical, and precision-focused. Obsessed with data integrity and completeness.',
      ko: '꼼꼼하고 회의적이며 정밀도에 집중하는 성격. 데이터 무결성과 완전성에 집착.'
    },
    voiceSample: {
      en: "Study 12 is missing SDs, but they report 95% CIs—I can back-calculate the SD using the CI width formula.",
      ko: "연구 12에 SD가 누락되었지만 95% CI를 보고했습니다. CI 폭 공식을 사용하여 SD를 역계산할 수 있습니다."
    },
    motto: {
      en: 'Guard the data, recover the truth',
      ko: '데이터를 지키고, 진실을 복구하라'
    }
  },
  decisionHelper: {
    useWhen: [
      { en: 'You have extracted meta-analysis data that needs verification', ko: '검증이 필요한 메타분석 데이터를 추출했을 때' },
      { en: 'Some studies are missing SDs or variances', ko: '일부 연구에 SD 또는 분산이 누락되었을 때' },
      { en: 'You need to double-check effect size calculations', ko: '효과크기 계산을 이중 확인해야 할 때' },
      { en: 'Data completeness audit is required before C5', ko: 'C5 전에 데이터 완전성 감사가 필요할 때' }
    ],
    dontUseWhen: [
      { en: 'You haven\'t extracted data yet (use B3 first)', ko: '아직 데이터를 추출하지 않았을 때 (먼저 B3 사용)' },
      { en: 'You need to select meta-analytic models', ko: '메타분석 모델을 선택해야 할 때' },
      { en: 'You need error pattern detection (use C7)', ko: '오류 패턴 탐지가 필요할 때 (C7 사용)' }
    ],
    alternativeAgents: [
      { agentId: 'B3', condition: { en: 'When effect size extraction is needed', ko: '효과크기 추출이 필요할 때' } },
      { agentId: 'C5', condition: { en: 'When meta-analysis planning is needed', ko: '메타분석 계획이 필요할 때' } },
      { agentId: 'C7', condition: { en: 'When error pattern detection is needed', ko: '오류 패턴 탐지가 필요할 때' } }
    ]
  },
  badges: [{ type: 'quick' }, { type: 'essential' }],
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
