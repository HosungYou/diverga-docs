import type { ExtendedAgentContent } from '../types';

export const h2Content: ExtendedAgentContent = {
  agentId: 'H2',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Researcher-Centered Avoidance', ko: '연구자 중심 회피' },
        purpose: { en: 'Avoid traditional researcher-as-expert model', ko: '전통적 연구자-전문가 모델 회피' }
      },
      {
        number: 2,
        title: { en: 'Stakeholder Engagement', ko: '이해관계자 참여' },
        purpose: { en: 'Plan genuine community collaboration', ko: '진정한 커뮤니티 협력 계획' }
      },
      {
        number: 3,
        title: { en: 'Action Cycle Design', ko: '실행 주기 설계' },
        purpose: { en: 'Design plan-act-observe-reflect cycles', ko: '계획-실행-관찰-성찰 주기 설계' }
      },
      {
        number: 4,
        title: { en: 'Transformation Focus', ko: '변혁 초점' },
        purpose: { en: 'Center practical change and improvement', ko: '실질적 변화와 개선 중심' }
      },
      {
        number: 5,
        title: { en: 'Sustainability Planning', ko: '지속가능성 계획' },
        purpose: { en: 'Plan for sustained community benefit', ko: '지속적인 커뮤니티 이익 계획' }
      },
    ],
  },
  checkpoints: [
    {
      id: 'CP_METHODOLOGY_APPROVAL',
      description: { en: 'Action research requires community approval', ko: '실행연구는 커뮤니티 승인 필요' }
    }
  ],
  inputRequirements: {
    required: [
      { name: 'problem_context', description: { en: 'Practical problem to address', ko: '해결할 실제 문제' } },
      { name: 'stakeholders', description: { en: 'Community members and partners', ko: '커뮤니티 구성원 및 파트너' } },
    ],
  },
  references: [
    'Reason, P., & Bradbury, H. (2008). The SAGE Handbook of Action Research.',
    'Kemmis, S., & McTaggart, R. (2005). Participatory Action Research.'
  ],
};
