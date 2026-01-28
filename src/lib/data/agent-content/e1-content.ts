import type { ExtendedAgentContent } from '../types';

export const e1Content: ExtendedAgentContent = {
  agentId: 'E1',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      { number: 1, title: { en: 'Default Method Avoidance', ko: '기본 방법 회피' }, purpose: { en: 'Avoid defaulting to simple t-tests and ANOVAs', ko: '단순 t-검정과 ANOVA를 기본으로 하는 것 회피' } },
      { number: 2, title: { en: 'Method Matching', ko: '방법 매칭' }, purpose: { en: 'Match analysis to research design and data structure', ko: '분석을 연구 설계와 데이터 구조에 매칭' } },
      { number: 3, title: { en: 'Assumption Testing', ko: '가정 검정' }, purpose: { en: 'Plan assumption verification protocols', ko: '가정 검증 프로토콜 계획' } },
      { number: 4, title: { en: 'Advanced Options', ko: '고급 옵션' }, purpose: { en: 'Explore SEM, multilevel, Bayesian approaches', ko: 'SEM, 다층, 베이지안 접근법 탐색' } },
      { number: 5, title: { en: 'Interpretation Plan', ko: '해석 계획' }, purpose: { en: 'Plan effect size reporting and confidence intervals', ko: '효과크기 보고 및 신뢰구간 계획' } },
    ],
  },
  checkpoints: [{ id: 'CP_ANALYSIS_PLAN', description: { en: 'Analysis plan should be preregistered', ko: '분석 계획은 사전등록되어야 함' } }],
  inputRequirements: {
    required: [
      { name: 'research_design', description: { en: 'Approved quantitative design', ko: '승인된 양적 설계' } },
      { name: 'hypotheses', description: { en: 'Specific testable hypotheses', ko: '구체적인 검증 가능한 가설' } },
    ],
  },
  codeTemplates: [{
    language: 'R',
    title: { en: 'Multilevel Model Example', ko: '다층 모델 예시' },
    code: `library(lme4)

# Random intercept model
model <- lmer(outcome ~ predictor + (1|group), data = dat)
summary(model)

# ICC calculation
VarCorr(model)`,
  }],
  references: ['Field, A. (2018). Discovering Statistics Using IBM SPSS Statistics.'],
};
