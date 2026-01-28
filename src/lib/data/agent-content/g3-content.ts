import type { ExtendedAgentContent } from '../types';

export const g3Content: ExtendedAgentContent = {
  agentId: 'G3',
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
