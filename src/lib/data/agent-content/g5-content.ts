import type { ExtendedAgentContent } from '../types';

export const g5Content: ExtendedAgentContent = {
  agentId: 'G5',
  quickSummary: {
    oneLiner: {
      en: 'The AI Pattern Spotter: Detects AI writing patterns across 24 categories and assesses detection risk',
      ko: 'AI 패턴 스파터: 24개 카테고리에서 AI 글쓰기 패턴을 탐지하고 탐지 위험 평가'
    },
    bestFor: [
      { en: 'Scanning manuscripts for telltale AI writing patterns', ko: '전형적인 AI 글쓰기 패턴에 대한 원고 스캔' },
      { en: 'Assessing AI detection risk before submission', ko: '제출 전 AI 탐지 위험 평가' },
      { en: 'Identifying specific phrases that need humanization', ko: '휴먼화가 필요한 특정 구문 식별' },
      { en: 'Preparing for journals with AI detection policies', ko: 'AI 탐지 정책이 있는 저널 준비' },
      { en: 'Quality control for AI-assisted writing', ko: 'AI 지원 글쓰기 품질 관리' }
    ],
    notFor: [
      { en: 'Actually humanizing text (use G6-NaturalVoice for that)', ko: '실제로 텍스트 휴먼화 (이를 위해 G6-자연스러운목소리 사용)' },
      { en: 'Plagiarism detection', ko: '표절 탐지' },
      { en: 'Statistical analysis consultation', ko: '통계 분석 상담' }
    ],
    timeToResult: '10-20 minutes (for pattern analysis of full manuscript)'
  },
  decisionHelper: {
    useWhen: [
      { en: 'You used AI tools to assist with writing', ko: 'AI 도구를 사용하여 글쓰기를 지원했을 때' },
      { en: 'Target journal has AI detection or disclosure policies', ko: '목표 저널에 AI 탐지 또는 공개 정책이 있을 때' },
      { en: 'You want to reduce AI pattern risk before submission', ko: '제출 전 AI 패턴 위험을 줄이고 싶을 때' },
      { en: 'You are unsure if your text sounds "too AI"', ko: '텍스트가 "너무 AI스러운지" 확실하지 않을 때' }
    ],
    dontUseWhen: [
      { en: 'You did not use AI tools at all', ko: 'AI 도구를 전혀 사용하지 않았을 때' },
      { en: 'You need the text to be humanized (not just detected)', ko: '텍스트가 (단순히 탐지되는 것이 아니라) 휴먼화되어야 할 때' },
      { en: 'You want plagiarism detection', ko: '표절 탐지를 원할 때' }
    ],
    alternativeAgents: [
      { agentId: 'G6', condition: { en: 'For actually humanizing flagged AI patterns', ko: '플래그된 AI 패턴을 실제로 휴먼화하기 위해' } },
      { agentId: 'F5', condition: { en: 'For verifying accuracy after humanization', ko: '휴먼화 후 정확성 확인을 위해' } },
      { agentId: 'G2', condition: { en: 'For improving writing clarity', ko: '글쓰기 명확성 향상을 위해' } }
    ]
  },
  badges: [{ type: 'essential' }],
  successStories: [
    {
      researcher: {
        name: 'Jessica Park',
        field: { en: 'Sociology', ko: '사회학' },
        institution: 'PhD Candidate'
      },
      challenge: {
        en: 'Used ChatGPT to summarize papers but worried about journal AI detection policy',
        ko: 'ChatGPT를 사용하여 논문을 요약했지만 저널 AI 탐지 정책에 대해 걱정'
      },
      solution: {
        en: 'G5-AIPatternSpotter flagged 18 high-risk phrases across 6 pattern categories; student then used G6-NaturalVoice',
        ko: 'G5-AI패턴스파터가 6개 패턴 카테고리에서 18개의 고위험 구문을 표시; 학생이 그 후 G6-자연스러운목소리 사용'
      },
      outcome: {
        en: 'After humanization, risk score dropped from "high" to "low"; manuscript accepted without AI detection issues',
        ko: '휴먼화 후 위험 점수가 "고위험"에서 "저위험"으로 하락; AI 탐지 문제 없이 원고 승인'
      },
      metrics: [
        { label: { en: 'Results', ko: '결과' }, value: '18 AI patterns flagged, risk reduced from HIGH→LOW, submission successful' }
      ]
    }
  ],
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Pattern Detection', ko: '패턴 탐지' },
        purpose: { en: 'Identify AI writing patterns across 24 categories', ko: '24개 카테고리에서 AI 글쓰기 패턴 식별' }
      },
      {
        number: 2,
        title: { en: 'Probability Scoring', ko: '확률 점수화' },
        purpose: { en: 'Calculate AI-generation likelihood', ko: 'AI 생성 가능성 계산' }
      },
      {
        number: 3,
        title: { en: 'Risk Classification', ko: '위험 분류' },
        purpose: { en: 'Classify as low/medium/high risk', ko: '저/중/고위험으로 분류' }
      },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'text', description: { en: 'Text to analyze for AI patterns', ko: 'AI 패턴 분석할 텍스트' } },
    ],
  },
  outputFormat: {
    sections: [
      { title: 'Pattern Report', content: { en: 'Identified AI patterns by category', ko: '카테고리별 식별된 AI 패턴' } },
      { title: 'Risk Score', content: { en: 'Overall AI detection risk', ko: '전체 AI 탐지 위험' } },
      { title: 'Recommendations', content: { en: 'Specific phrases to humanize', ko: '휴먼화할 특정 구문' } },
    ],
  },
};
