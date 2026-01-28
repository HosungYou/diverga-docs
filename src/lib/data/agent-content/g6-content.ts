import type { ExtendedAgentContent } from '../types';

export const g6Content: ExtendedAgentContent = {
  agentId: 'G6',
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
