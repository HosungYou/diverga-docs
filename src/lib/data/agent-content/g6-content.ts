import type { ExtendedAgentContent } from '../types';

export const g6Content: ExtendedAgentContent = {
  agentId: 'G6',
  quickSummary: {
    oneLiner: {
      en: 'The Natural Voice: Transforms AI-generated academic writing into natural, human-sounding prose while preserving accuracy',
      ko: '자연스러운 목소리: AI 생성 학술 글쓰기를 정확성을 보존하면서 자연스럽고 인간다운 문체로 변환'
    },
    bestFor: [
      { en: 'Humanizing AI-assisted academic writing', ko: 'AI 지원 학술 글쓰기 휴먼화' },
      { en: 'Removing telltale AI patterns after G5-AIPatternSpotter flags them', ko: 'G5-AI패턴스파터가 표시한 후 전형적인 AI 패턴 제거' },
      { en: "Adapting to author's natural writing style", ko: '저자의 자연스러운 글쓰기 스타일에 적응' },
      { en: 'Preserving citations and statistical accuracy during transformation', ko: '변환 중 인용과 통계적 정확성 보존' },
      { en: 'Preparing AI-assisted text for journal submission', ko: '저널 제출을 위한 AI 지원 텍스트 준비' }
    ],
    notFor: [
      { en: 'Detecting AI patterns (use G5-AIPatternSpotter first)', ko: 'AI 패턴 탐지 (먼저 G5-AI패턴스파터 사용)' },
      { en: 'Improving statistical analysis', ko: '통계 분석 개선' },
      { en: 'Plagiarism detection or removal', ko: '표절 탐지 또는 제거' }
    ],
    timeToResult: '25-45 minutes (for full manuscript section humanization)'
  },
  decisionHelper: {
    useWhen: [
      { en: 'G5-AIPatternSpotter flagged AI patterns in your text', ko: 'G5-AI패턴스파터가 텍스트에서 AI 패턴을 표시했을 때' },
      { en: 'You used AI to draft sections and need them to sound natural', ko: 'AI를 사용하여 섹션을 작성했고 자연스럽게 들리도록 해야 할 때' },
      { en: 'Journal has AI detection concerns', ko: '저널에 AI 탐지 우려가 있을 때' },
      { en: 'You want to match your personal writing style', ko: '개인 글쓰기 스타일과 일치시키고 싶을 때' }
    ],
    dontUseWhen: [
      { en: 'You have not yet detected AI patterns (use G5 first)', ko: '아직 AI 패턴을 탐지하지 않았을 때 (먼저 G5 사용)' },
      { en: 'Text was written entirely by human without AI assistance', ko: '텍스트가 AI 지원 없이 완전히 인간에 의해 작성되었을 때' },
      { en: 'You need statistical or methodological help', ko: '통계적 또는 방법론적 도움이 필요할 때' }
    ],
    alternativeAgents: [
      { agentId: 'G5', condition: { en: 'For detecting AI patterns before humanization', ko: '휴먼화 전 AI 패턴 탐지를 위해' } },
      { agentId: 'F5', condition: { en: 'For verifying accuracy after humanization', ko: '휴먼화 후 정확성 확인을 위해' } },
      { agentId: 'G2', condition: { en: 'For general writing clarity improvement', ko: '일반적인 글쓰기 명확성 향상을 위해' } }
    ]
  },
  badges: [{ type: 'essential' }],
  successStories: [
    {
      researcher: {
        name: 'Dr. David Chen',
        field: { en: 'Neuroscience', ko: '신경과학' },
        institution: 'Postdoctoral Fellow'
      },
      challenge: {
        en: 'Claude helped draft introduction but used phrases like "comprehensive study," "multifaceted," and "delve into"',
        ko: 'Claude가 서론 작성을 도왔지만 "포괄적 연구", "다면적", "깊이 탐구"와 같은 구문 사용'
      },
      solution: {
        en: 'G6-NaturalVoice transformed AI patterns using researcher\'s previous paper style; preserved all 42 citations',
        ko: 'G6-자연스러운목소리가 연구자의 이전 논문 스타일을 사용하여 AI 패턴을 변환; 모든 42개 인용 보존'
      },
      outcome: {
        en: 'Introduction sounded natural and matched author voice; peer reviewers did not raise AI concerns',
        ko: '서론이 자연스럽게 들리고 저자의 목소리와 일치; 동료 리뷰어가 AI 우려를 제기하지 않음'
      },
      metrics: [
        { label: { en: 'Results', ko: '결과' }, value: '18 AI phrases humanized, 42 citations preserved, no reviewer AI concerns' }
      ]
    }
  ],
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Pattern Identification', ko: '패턴 식별' },
        purpose: { en: 'Identify specific AI patterns to transform', ko: '변환할 특정 AI 패턴 식별' }
      },
      {
        number: 2,
        title: { en: 'Style Analysis', ko: '스타일 분석' },
        purpose: { en: 'Analyze target human writing style', ko: '목표 인간 글쓰기 스타일 분석' }
      },
      {
        number: 3,
        title: { en: 'Transformation', ko: '변환' },
        purpose: { en: 'Transform AI patterns to natural prose', ko: 'AI 패턴을 자연스러운 문체로 변환' }
      },
      {
        number: 4,
        title: { en: 'Citation Preservation', ko: '인용 보존' },
        purpose: { en: 'Ensure all citations remain accurate', ko: '모든 인용이 정확하게 유지되도록 보장' }
      },
      {
        number: 5,
        title: { en: 'Integrity Check', ko: '무결성 검사' },
        purpose: { en: 'Verify meaning and facts preserved', ko: '의미와 사실 보존 확인' }
      },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'ai_text', description: { en: 'AI-generated or AI-assisted text', ko: 'AI 생성 또는 AI 지원 텍스트' } },
    ],
    optional: [
      { name: 'style_sample', description: { en: "Sample of author's natural writing", ko: '저자의 자연스러운 글쓰기 샘플' } },
    ],
  },
  exampleWorkflow: {
    before: {
      en: 'This comprehensive study thoroughly examines the multifaceted implications of...',
      ko: '이 포괄적인 연구는 다면적 함의를 철저히 검토합니다...'
    },
    after: {
      en: 'We investigated how tutoring systems shape student metacognition through...',
      ko: '우리는 튜터링 시스템이 메타인지를 어떻게 형성하는지 조사했습니다...'
    },
  },
};
