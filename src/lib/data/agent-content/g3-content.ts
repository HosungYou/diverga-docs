import type { ExtendedAgentContent } from '../types';

export const g3Content: ExtendedAgentContent = {
  agentId: 'G3',
  quickSummary: {
    oneLiner: {
      en: 'The Response Architect: Crafts professional, non-defensive responses to peer review comments',
      ko: '응답 설계자: 동료 리뷰 코멘트에 대한 전문적이고 방어적이지 않은 응답을 작성'
    },
    bestFor: [
      { en: 'Responding to peer review in revise-and-resubmit decisions', ko: '수정 후 재제출 결정에서 동료 리뷰에 응답' },
      { en: 'Avoiding defensive or dismissive tones', ko: '방어적이거나 무시하는 어조 회피' },
      { en: 'Categorizing and prioritizing reviewer concerns', ko: '리뷰어 우려 분류 및 우선순위화' },
      { en: 'Planning strategic agree/disagree responses', ko: '전략적 동의/비동의 응답 계획' },
      { en: 'Drafting point-by-point response letters', ko: '포인트별 응답 서신 작성' }
    ],
    notFor: [
      { en: 'Initial manuscript submission', ko: '초기 원고 제출' },
      { en: 'Desk rejections (no peer review occurred)', ko: '데스크 거부 (동료 리뷰 발생하지 않음)' },
      { en: 'Statistical analysis help', ko: '통계 분석 도움' }
    ],
    timeToResult: '45-90 minutes (depending on number of reviewer comments)'
  },
  decisionHelper: {
    useWhen: [
      { en: 'You received revise-and-resubmit decision with reviewer comments', ko: '리뷰어 코멘트와 함께 수정 후 재제출 결정을 받았을 때' },
      { en: 'You want to avoid defensive language in your response', ko: '응답에서 방어적 언어를 피하고 싶을 때' },
      { en: 'You need help categorizing major vs. minor concerns', ko: '주요 대 경미한 우려 분류에 도움이 필요할 때' },
      { en: 'You are unsure how to respectfully disagree with a reviewer', ko: '리뷰어와 존중하며 의견이 다를 때 어떻게 할지 모를 때' }
    ],
    dontUseWhen: [
      { en: 'You have not yet received peer review', ko: '아직 동료 리뷰를 받지 않았을 때' },
      { en: 'Paper was desk rejected without review', ko: '리뷰 없이 데스크 거부되었을 때' },
      { en: 'You need help writing the initial manuscript', ko: '초기 원고 작성에 도움이 필요할 때' }
    ],
    alternativeAgents: [
      { agentId: 'G1', condition: { en: 'For choosing journals before submission', ko: '제출 전 저널 선택을 위해' } },
      { agentId: 'G2', condition: { en: 'For improving manuscript clarity', ko: '원고 명확성 향상을 위해' } },
      { agentId: 'F1', condition: { en: 'For addressing consistency concerns', ko: '일관성 우려 해결을 위해' } }
    ]
  },
  badges: [{ type: 'essential' }],
  successStories: [
    {
      researcher: {
        name: 'Dr. Alex Kim',
        field: { en: 'Psychology', ko: '심리학' }
      },
      challenge: {
        en: 'Reviewer 2 criticized inclusion criteria as "arbitrary"; researcher felt defensive and unsure how to respond',
        ko: '리뷰어 2가 포함 기준을 "자의적"이라고 비판; 연구자는 방어적으로 느끼고 어떻게 응답할지 불확실'
      },
      solution: {
        en: 'G3-ResponseArchitect reframed response to acknowledge concern, explain rationale, and add sensitivity analysis',
        ko: 'G3-응답설계자가 우려를 인정하고, 근거를 설명하며, 민감도 분석을 추가하도록 응답을 재구성'
      },
      outcome: {
        en: 'Reviewer 2 became advocate in 2nd round; paper accepted with compliments on thoroughness',
        ko: '리뷰어 2가 2차 라운드에서 옹호자가 됨; 철저함에 대한 칭찬과 함께 논문 승인'
      },
      metrics: [
        { label: { en: 'Results', ko: '결과' }, value: '12 reviewer comments addressed, Reviewer 2 turned advocate, accepted in 2nd round' }
      ]
    }
  ],
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Defensive Response Avoidance', ko: '방어적 응답 회피' },
        purpose: { en: 'Avoid defensive or dismissive responses', ko: '방어적이거나 무시하는 응답 회피' }
      },
      {
        number: 2,
        title: { en: 'Comment Analysis', ko: '코멘트 분석' },
        purpose: { en: 'Categorize and prioritize reviewer concerns', ko: '리뷰어 우려 분류 및 우선순위화' }
      },
      {
        number: 3,
        title: { en: 'Response Strategy', ko: '응답 전략' },
        purpose: { en: 'Plan agree/disagree/partial responses', ko: '동의/비동의/부분 응답 계획' }
      },
      {
        number: 4,
        title: { en: 'Letter Drafting', ko: '서신 작성' },
        purpose: { en: 'Draft professional response letter', ko: '전문적 응답 서신 작성' }
      },
      {
        number: 5,
        title: { en: 'Revision Planning', ko: '수정 계획' },
        purpose: { en: 'Plan specific manuscript changes', ko: '구체적 원고 변경 계획' }
      },
    ],
  },
  checkpoints: [
    {
      id: 'CP_RESPONSE_APPROVAL',
      description: { en: 'Response letter should be reviewed before submission', ko: '제출 전 응답 서신 검토 필요' }
    }
  ],
  inputRequirements: {
    required: [
      { name: 'reviewer_comments', description: { en: 'All reviewer and editor comments', ko: '모든 리뷰어 및 편집자 코멘트' } },
      { name: 'original_manuscript', description: { en: 'Submitted version', ko: '제출된 버전' } },
    ],
  },
  references: ['Noble, W. S. (2017). Ten simple rules for writing a response to reviewers.'],
};
