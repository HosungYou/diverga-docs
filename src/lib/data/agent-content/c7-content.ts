import type { ExtendedAgentContent } from '../types';

export const c7Content: ExtendedAgentContent = {
  agentId: 'C7',
  quickSummary: {
    oneLiner: {
      en: 'Error prevention engine detecting patterns and anomalies in meta-analysis data',
      ko: '메타분석 데이터에서 패턴과 이상을 탐지하는 오류 방지 엔진'
    },
    bestFor: [
      { en: 'Detecting common meta-analysis calculation errors', ko: '일반적인 메타분석 계산 오류 탐지' },
      { en: 'Flagging statistical anomalies (impossible values, outliers)', ko: '통계적 이상 플래그 (불가능한 값, 이상치)' },
      { en: 'Identifying unit-of-analysis errors', ko: '분석 단위 오류 식별' },
      { en: 'Checking for double-counting of samples', ko: '표본의 이중 계산 확인' },
      { en: 'Applying error prevention protocols before synthesis', ko: '합성 전 오류 방지 프로토콜 적용' }
    ],
    notFor: [
      { en: 'Data completeness verification (use C6)', ko: '데이터 완전성 검증 (C6 사용)' },
      { en: 'Effect size extraction (use B3)', ko: '효과크기 추출 (B3 사용)' },
      { en: 'Meta-analytic modeling (use C5)', ko: '메타분석 모델링 (C5 사용)' }
    ],
    timeToResult: '20-60 minutes'
  },
  persona: {
    archetype: 'The Error Detective',
    personality: {
      en: 'Vigilant, pattern-obsessed, and anomaly-sensitive. Hunts for errors before they spread.',
      ko: '경계심이 강하고 패턴에 집착하며 이상에 민감한 성격. 오류가 확산되기 전에 찾아냄.'
    },
    voiceSample: {
      en: "Study 8 reports n=30 but the SE suggests n=300—likely a transcription error. Let's verify before including it.",
      ko: "연구 8은 n=30을 보고하지만 SE는 n=300을 시사합니다. 아마도 전사 오류일 것입니다. 포함하기 전에 확인해봅시다."
    },
    motto: {
      en: 'Detect errors before they propagate',
      ko: '오류가 전파되기 전에 탐지하라'
    }
  },
  decisionHelper: {
    useWhen: [
      { en: 'You need final quality check before meta-analysis', ko: '메타분석 전 최종 품질 검사가 필요할 때' },
      { en: 'You want to detect statistical anomalies', ko: '통계적 이상을 탐지하고 싶을 때' },
      { en: 'You need to verify unit-of-analysis consistency', ko: '분석 단위 일관성을 검증해야 할 때' },
      { en: 'Data has been extracted and verified (C6 done)', ko: '데이터가 추출되고 검증되었을 때 (C6 완료)' }
    ],
    dontUseWhen: [
      { en: 'Data extraction is incomplete (use B3 first)', ko: '데이터 추출이 불완전할 때 (먼저 B3 사용)' },
      { en: 'You need completeness verification (use C6 first)', ko: '완전성 검증이 필요할 때 (먼저 C6 사용)' },
      { en: 'You are ready to run meta-analysis (use C5)', ko: '메타분석을 실행할 준비가 되었을 때 (C5 사용)' }
    ],
    alternativeAgents: [
      { agentId: 'C6', condition: { en: 'When data completeness verification is needed', ko: '데이터 완전성 검증이 필요할 때' } },
      { agentId: 'B3', condition: { en: 'When effect size extraction is needed', ko: '효과크기 추출이 필요할 때' } },
      { agentId: 'C5', condition: { en: 'When meta-analysis is ready to run', ko: '메타분석 실행 준비가 되었을 때' } }
    ]
  },
  badges: [{ type: 'quick' }],
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Pattern Detection', ko: '패턴 탐지' },
        purpose: { en: 'Detect common meta-analysis errors', ko: '일반적인 메타분석 오류 탐지' }
      },
      {
        number: 2,
        title: { en: 'Anomaly Flagging', ko: '이상 플래깅' },
        purpose: { en: 'Flag statistical anomalies', ko: '통계적 이상 플래그' }
      },
      {
        number: 3,
        title: { en: 'Prevention Protocols', ko: '방지 프로토콜' },
        purpose: { en: 'Apply error prevention checks', ko: '오류 방지 검사 적용' }
      },
    ],
  },
  inputRequirements: {
    required: [
      {
        name: 'meta_analysis_data',
        description: { en: 'Complete meta-analysis dataset', ko: '완전한 메타분석 데이터셋' }
      },
    ],
  },
};
