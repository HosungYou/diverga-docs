import type { ExtendedAgentContent } from '../types';

export const f5Content: ExtendedAgentContent = {
  agentId: 'F5',
  quickSummary: {
    oneLiner: {
      en: 'The Verification Guard: Ensures citations, statistics, and meaning are preserved after AI humanization',
      ko: '검증 보호자: AI 휴먼화 후 인용, 통계 및 의미가 보존되도록 보장'
    },
    bestFor: [
      { en: 'Verifying accuracy after G6-NaturalVoice humanization', ko: 'G6-자연스러운목소리 휴먼화 후 정확성 확인' },
      { en: 'Ensuring citations remain intact', ko: '인용이 그대로 유지되는지 보장' },
      { en: 'Checking statistical values were not altered', ko: '통계 값이 변경되지 않았는지 확인' },
      { en: 'Confirming meaning was not distorted', ko: '의미가 왜곡되지 않았는지 확인' },
      { en: 'Quality control for AI-assisted writing', ko: 'AI 지원 글쓰기 품질 관리' }
    ],
    notFor: [
      { en: 'Initial humanization (use G6-NaturalVoice for that)', ko: '초기 휴먼화 (이를 위해 G6-자연스러운목소리 사용)' },
      { en: 'Detecting AI writing patterns', ko: 'AI 글쓰기 패턴 탐지' },
      { en: 'Improving writing style', ko: '글쓰기 스타일 개선' }
    ],
    timeToResult: '10-20 minutes (for typical section comparison)'
  },
  decisionHelper: {
    useWhen: [
      { en: 'You used G6-NaturalVoice to humanize text', ko: 'G6-자연스러운목소리를 사용하여 텍스트를 휴먼화했을 때' },
      { en: 'You want to ensure accuracy before submission', ko: '제출 전 정확성을 보장하고 싶을 때' },
      { en: 'You need verification for AI-assisted sections', ko: 'AI 지원 섹션에 대한 검증이 필요할 때' },
      { en: 'Journal requires declaration of AI tool use', ko: '저널이 AI 도구 사용 선언을 요구할 때' }
    ],
    dontUseWhen: [
      { en: 'You have not yet humanized your text', ko: '아직 텍스트를 휴먼화하지 않았을 때' },
      { en: 'You want to detect AI patterns (use G5-AIPatternSpotter)', ko: 'AI 패턴을 탐지하고 싶을 때 (G5-AI패턴스파터 사용)' },
      { en: 'You need statistical analysis help', ko: '통계 분석 도움이 필요할 때' }
    ],
    alternativeAgents: [
      { agentId: 'G6', condition: { en: 'For performing the humanization', ko: '휴먼화 수행을 위해' } },
      { agentId: 'G5', condition: { en: 'For detecting AI patterns before humanization', ko: '휴먼화 전 AI 패턴 탐지를 위해' } },
      { agentId: 'F1', condition: { en: 'For overall manuscript consistency', ko: '전체 원고 일관성을 위해' } }
    ]
  },
  badges: [{ type: 'essential' }],
  vsProcess: {
    type: 'LIGHT',
    phases: [
      { number: 1, title: { en: 'Citation Integrity', ko: '인용 무결성' }, purpose: { en: 'Verify citations preserved after humanization', ko: '휴먼화 후 인용 보존 확인' } },
      { number: 2, title: { en: 'Statistical Accuracy', ko: '통계적 정확성' }, purpose: { en: 'Verify numbers unchanged', ko: '숫자 변경 없음 확인' } },
      { number: 3, title: { en: 'Meaning Preservation', ko: '의미 보존' }, purpose: { en: 'Ensure meaning not distorted', ko: '의미가 왜곡되지 않았는지 확인' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'original_text', description: { en: 'Pre-humanization text', ko: '휴먼화 전 텍스트' } },
      { name: 'humanized_text', description: { en: 'Post-humanization text', ko: '휴먼화 후 텍스트' } },
    ],
  },
};
