import type { ExtendedAgentContent } from '../types';

export const g2Content: ExtendedAgentContent = {
  agentId: 'G2',
  quickSummary: {
    oneLiner: {
      en: 'The Clarity Crafter: Transforms formulaic academic writing into clear, compelling communication',
      ko: '명확성 장인: 공식적인 학술 글쓰기를 명확하고 설득력 있는 커뮤니케이션으로 변환'
    },
    bestFor: [
      { en: 'Creating engaging abstracts beyond "This study examines..."', ko: '"이 연구는 조사한다..." 이상의 매력적인 초록 작성' },
      { en: 'Adapting writing for different audiences (academic, policy, public)', ko: '다양한 청중(학술, 정책, 대중)을 위한 글쓰기 조정' },
      { en: 'Writing plain language summaries', ko: '쉬운 언어 요약 작성' },
      { en: 'Improving manuscript readability and impact', ko: '원고 가독성과 영향력 향상' },
      { en: 'Preparing compelling cover letters', ko: '설득력 있는 커버 레터 준비' }
    ],
    notFor: [
      { en: 'Statistical analysis or methods consultation', ko: '통계 분석 또는 방법 상담' },
      { en: 'Citation formatting', ko: '인용 형식 지정' },
      { en: 'Detecting AI writing patterns', ko: 'AI 글쓰기 패턴 탐지' }
    ],
    timeToResult: '20-35 minutes (for abstract + plain language summary)'
  },
  decisionHelper: {
    useWhen: [
      { en: 'Your abstract feels generic or formulaic', ko: '초록이 일반적이거나 공식적으로 느껴질 때' },
      { en: 'You need to communicate research to non-specialists', ko: '비전문가에게 연구를 전달해야 할 때' },
      { en: 'Journal requires plain language summary', ko: '저널이 쉬운 언어 요약을 요구할 때' },
      { en: 'You want to increase manuscript impact and engagement', ko: '원고 영향력과 참여도를 높이고 싶을 때' }
    ],
    dontUseWhen: [
      { en: 'You need help with research design or analysis', ko: '연구 설계나 분석에 대한 도움이 필요할 때' },
      { en: 'You want statistical consultation', ko: '통계 상담을 원할 때' },
      { en: 'You are looking for citation management', ko: '인용 관리를 찾을 때' }
    ],
    alternativeAgents: [
      { agentId: 'G6', condition: { en: 'For humanizing AI-generated text', ko: 'AI 생성 텍스트 휴먼화를 위해' } },
      { agentId: 'G5', condition: { en: 'For detecting AI writing patterns', ko: 'AI 글쓰기 패턴 탐지를 위해' } },
      { agentId: 'F1', condition: { en: 'For ensuring internal consistency', ko: '내적 일관성 보장을 위해' } }
    ]
  },
  badges: [{ type: 'essential' }],
  successStories: [
    {
      researcher: {
        name: 'Dr. Michael Thompson',
        field: { en: 'Health Sciences', ko: '보건학' }
      },
      challenge: {
        en: 'Original abstract was dense with jargon; journal required plain language summary for broader audience',
        ko: '원래 초록은 전문 용어로 빽빽함; 저널은 더 넓은 청중을 위한 쉬운 언어 요약을 요구'
      },
      solution: {
        en: 'G2-ClarityCrafter rewrote abstract with active voice and created engaging 150-word plain language summary',
        ko: 'G2-명확성장인이 능동태로 초록을 다시 작성하고 매력적인 150단어 쉬운 언어 요약 생성'
      },
      outcome: {
        en: 'Editor praised clarity; paper featured in journal highlights and shared on social media 280+ times',
        ko: '편집자가 명확성을 칭찬; 논문이 저널 하이라이트에 소개되고 소셜 미디어에서 280회 이상 공유됨'
      },
      metrics: [
        { label: { en: 'Results', ko: '결과' }, value: 'Abstract readability improved (Flesch 45→65), 280+ social media shares' }
      ]
    }
  ],
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Generic Abstract Avoidance', ko: '일반 초록 회피' },
        purpose: { en: 'Avoid formulaic "This study examines..." abstracts', ko: '공식적인 "이 연구는 조사한다..." 초록 회피' }
      },
      {
        number: 2,
        title: { en: 'Audience Adaptation', ko: '청중 적응' },
        purpose: { en: 'Adapt writing style to target audience', ko: '대상 청중에 글쓰기 스타일 적응' }
      },
      {
        number: 3,
        title: { en: 'Impact Statement', ko: '영향 진술' },
        purpose: { en: 'Create compelling plain language summary', ko: '설득력 있는 쉬운 언어 요약 생성' }
      },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'manuscript', description: { en: 'Complete research manuscript', ko: '완성된 연구 원고' } },
      { name: 'target_audience', description: { en: 'Academic, policy, public, etc.', ko: '학술, 정책, 대중 등' } },
    ],
  },
};
