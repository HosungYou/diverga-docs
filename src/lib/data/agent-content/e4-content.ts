import type { ExtendedAgentContent } from '../types';

export const e4Content: ExtendedAgentContent = {
  agentId: 'E4',
  vsProcess: {
    type: 'LIGHT',
    phases: [
      { number: 1, title: { en: 'Platform Selection', ko: '플랫폼 선택' }, purpose: { en: 'Choose R, Python, SPSS, Stata, or Mplus', ko: 'R, Python, SPSS, Stata 또는 Mplus 선택' } },
      { number: 2, title: { en: 'Code Generation', ko: '코드 생성' }, purpose: { en: 'Generate reproducible analysis scripts', ko: '재현 가능한 분석 스크립트 생성' } },
      { number: 3, title: { en: 'Documentation', ko: '문서화' }, purpose: { en: 'Add comments for reproducibility', ko: '재현성을 위한 주석 추가' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'analysis_plan', description: { en: 'Approved analysis from E1/E2', ko: 'E1/E2에서 승인된 분석' } },
      { name: 'platform', description: { en: 'Statistical software preference', ko: '통계 소프트웨어 선호도' } },
    ],
  },
  codeTemplates: [
    {
      language: 'R',
      title: { en: 'Mediation Analysis', ko: '매개 분석' },
      code: `library(mediation)
med.fit <- lm(mediator ~ treatment, data = dat)
out.fit <- lm(outcome ~ treatment + mediator, data = dat)
med.out <- mediate(med.fit, out.fit, treat = "treatment", mediator = "mediator")
summary(med.out)`,
    },
    {
      language: 'Python',
      title: { en: 'Regression Analysis', ko: '회귀 분석' },
      code: `import statsmodels.api as sm
X = sm.add_constant(df[['predictor1', 'predictor2']])
model = sm.OLS(df['outcome'], X).fit()
print(model.summary())`,
    },
  ],
};
