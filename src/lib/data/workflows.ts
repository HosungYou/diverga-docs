import { Workflow } from './types';

export const workflows: Workflow[] = [
  {
    id: 'quantitative',
    slug: 'quantitative',
    name: {
      en: 'Quantitative Research',
      ko: '양적 연구'
    },
    description: {
      en: 'RCTs, surveys, and statistical analysis workflows',
      ko: 'RCT, 설문조사 및 통계 분석 워크플로우'
    },
    paradigm: 'quantitative',
    estimatedTime: '8-12 weeks',
    stages: [
      {
        agent: 'A1',
        description: {
          en: 'Refine your research question using FINER/PICO frameworks',
          ko: 'FINER/PICO 프레임워크를 사용하여 연구 질문 정제'
        },
        checkpoint: 'CP_RESEARCH_DIRECTION'
      },
      {
        agent: 'A2',
        description: {
          en: 'Select theoretical framework with T-Score awareness',
          ko: 'T-Score 인식과 함께 이론적 프레임워크 선택'
        },
        checkpoint: 'CP_THEORY_SELECTION'
      },
      {
        agent: 'A5',
        description: {
          en: 'Align paradigm and epistemological foundations',
          ko: '패러다임 및 인식론적 기초 정렬'
        },
        checkpoint: 'CP_PARADIGM_SELECTION'
      },
      {
        agent: 'C1',
        description: {
          en: 'Design RCT or quasi-experimental study',
          ko: 'RCT 또는 준실험 연구 설계'
        },
        checkpoint: 'CP_METHODOLOGY_APPROVAL'
      },
      {
        agent: 'A4',
        description: {
          en: 'Review IRB protocols and ethical considerations',
          ko: 'IRB 프로토콜 및 윤리적 고려사항 검토'
        },
        checkpoint: 'CP_METHODOLOGY_APPROVAL'
      },
      {
        agent: 'D4',
        description: {
          en: 'Develop measurement instruments with validity testing',
          ko: '타당도 검사와 함께 측정 도구 개발'
        },
        checkpoint: 'CP_METHODOLOGY_APPROVAL'
      },
      {
        agent: 'D1',
        description: {
          en: 'Design sampling strategy and calculate sample size',
          ko: '표집 전략 설계 및 표본 크기 계산'
        }
      },
      {
        agent: 'E1',
        description: {
          en: 'Plan statistical analysis and assumption testing',
          ko: '통계 분석 계획 및 가정 검정'
        },
        checkpoint: 'CP_ANALYSIS_PLAN'
      },
      {
        agent: 'F2',
        description: {
          en: 'Apply CONSORT/STROBE reporting guidelines',
          ko: 'CONSORT/STROBE 보고 지침 적용'
        }
      },
      {
        agent: 'G1',
        description: {
          en: 'Match manuscript to target journals',
          ko: '원고를 대상 저널과 매칭'
        }
      }
    ]
  },
  {
    id: 'qualitative',
    slug: 'qualitative',
    name: {
      en: 'Qualitative Research',
      ko: '질적 연구'
    },
    description: {
      en: 'Phenomenology, grounded theory, and case study workflows',
      ko: '현상학, 근거이론 및 사례연구 워크플로우'
    },
    paradigm: 'qualitative',
    estimatedTime: '10-16 weeks',
    stages: [
      {
        agent: 'A1',
        description: {
          en: 'Refine research question using SPIDER framework',
          ko: 'SPIDER 프레임워크를 사용하여 연구 질문 정제'
        },
        checkpoint: 'CP_RESEARCH_DIRECTION'
      },
      {
        agent: 'A5',
        description: {
          en: 'Clarify ontological and epistemological stance',
          ko: '존재론적 및 인식론적 입장 명확화'
        },
        checkpoint: 'CP_PARADIGM_SELECTION'
      },
      {
        agent: 'C2',
        description: {
          en: 'Design phenomenology, grounded theory, or case study',
          ko: '현상학, 근거이론 또는 사례연구 설계'
        },
        checkpoint: 'CP_METHODOLOGY_APPROVAL'
      },
      {
        agent: 'D2',
        description: {
          en: 'Develop interview protocols and focus group guides',
          ko: '인터뷰 프로토콜 및 포커스 그룹 가이드 개발'
        }
      },
      {
        agent: 'E2',
        description: {
          en: 'Conduct thematic analysis or grounded theory coding',
          ko: '주제 분석 또는 근거이론 코딩 수행'
        }
      },
      {
        agent: 'F4',
        description: {
          en: 'Assess trustworthiness and credibility',
          ko: '신뢰성 및 타당성 평가'
        }
      },
      {
        agent: 'F2',
        description: {
          en: 'Apply COREQ reporting guidelines',
          ko: 'COREQ 보고 지침 적용'
        }
      },
      {
        agent: 'G2',
        description: {
          en: 'Write manuscript with rich narrative',
          ko: '풍부한 내러티브로 원고 작성'
        }
      }
    ]
  },
  {
    id: 'mixed-methods',
    slug: 'mixed-methods',
    name: {
      en: 'Mixed Methods',
      ko: '혼합 방법'
    },
    description: {
      en: 'Sequential and convergent mixed methods designs',
      ko: '순차적 및 수렴적 혼합방법 설계'
    },
    paradigm: 'mixed',
    estimatedTime: '12-20 weeks',
    stages: [
      {
        agent: 'A1',
        description: {
          en: 'Refine research question requiring both qual+quant',
          ko: '질적+양적 접근이 필요한 연구 질문 정제'
        },
        checkpoint: 'CP_RESEARCH_DIRECTION'
      },
      {
        agent: 'A5',
        description: {
          en: 'Articulate pragmatic or transformative paradigm',
          ko: '실용주의 또는 변혁적 패러다임 명시'
        },
        checkpoint: 'CP_PARADIGM_SELECTION'
      },
      {
        agent: 'C3',
        description: {
          en: 'Design sequential or convergent integration strategy',
          ko: '순차적 또는 수렴적 통합 전략 설계'
        },
        checkpoint: 'CP_METHODOLOGY_APPROVAL'
      },
      {
        agent: 'E3',
        description: {
          en: 'Integrate findings with joint displays',
          ko: '공동 디스플레이로 연구 결과 통합'
        },
        checkpoint: 'CP_INTEGRATION_STRATEGY'
      },
      {
        agent: 'F2',
        description: {
          en: 'Apply mixed methods reporting standards',
          ko: '혼합방법 보고 표준 적용'
        }
      },
      {
        agent: 'G2',
        description: {
          en: 'Write integrated mixed methods manuscript',
          ko: '통합 혼합방법 원고 작성'
        }
      }
    ]
  },
  {
    id: 'meta-analysis',
    slug: 'meta-analysis',
    name: {
      en: 'Meta-Analysis',
      ko: '메타분석'
    },
    description: {
      en: 'Systematic review and meta-analysis pipelines',
      ko: '체계적 문헌고찰 및 메타분석 파이프라인'
    },
    paradigm: 'quantitative',
    estimatedTime: '16-24 weeks',
    stages: [
      {
        agent: 'B1',
        description: {
          en: 'Design PRISMA-compliant search strategy',
          ko: 'PRISMA 준수 검색 전략 설계'
        }
      },
      {
        agent: 'B2',
        description: {
          en: 'Assess study quality using RoB and GRADE',
          ko: 'RoB 및 GRADE를 사용하여 연구 품질 평가'
        }
      },
      {
        agent: 'B3',
        description: {
          en: 'Extract and convert effect sizes',
          ko: '효과크기 추출 및 변환'
        }
      },
      {
        agent: 'C5',
        description: {
          en: 'Orchestrate meta-analysis with validation gates',
          ko: '검증 게이트와 함께 메타분석 조율'
        },
        checkpoint: 'CP_META_GATE'
      },
      {
        agent: 'C6',
        description: {
          en: 'Ensure data integrity and accuracy',
          ko: '데이터 무결성 및 정확성 보장'
        }
      },
      {
        agent: 'C7',
        description: {
          en: 'Detect and prevent common errors',
          ko: '일반적인 오류 탐지 및 방지'
        }
      },
      {
        agent: 'E5',
        description: {
          en: 'Design sensitivity and robustness analyses',
          ko: '민감도 및 강건성 분석 설계'
        }
      },
      {
        agent: 'F2',
        description: {
          en: 'Complete PRISMA 2020 checklist and flow diagram',
          ko: 'PRISMA 2020 체크리스트 및 흐름도 작성'
        }
      }
    ]
  }
];

// A6 Example Workflow: AI in Education Conceptual Framework
export const a6ExampleWorkflow: Workflow = {
  id: 'a6-ai-education',
  slug: 'a6-ai-education',
  name: {
    en: 'A6 Example: AI in Education',
    ko: 'A6 예시: 교육에서의 AI'
  },
  description: {
    en: 'Conceptual framework visualization for AI-enhanced learning research',
    ko: 'AI 강화 학습 연구를 위한 개념적 프레임워크 시각화'
  },
  paradigm: 'mixed',
  estimatedTime: '30 min demo',
  stages: [
    {
      agent: 'A1',
      description: {
        en: 'Define: "How does AI-powered tutoring affect student metacognition?"',
        ko: '정의: "AI 기반 튜터링이 학생 메타인지에 어떤 영향을 미치는가?"'
      },
      checkpoint: 'CP_RESEARCH_DIRECTION'
    },
    {
      agent: 'A2',
      description: {
        en: 'Select theoretical lens: Self-Regulated Learning (T-0.65) vs Actor-Network Theory (T-0.28)',
        ko: '이론적 렌즈 선택: 자기조절학습(T-0.65) vs 행위자-네트워크 이론(T-0.28)'
      },
      checkpoint: 'CP_THEORY_SELECTION'
    },
    {
      agent: 'A6',
      description: {
        en: 'Generate conceptual framework visualization using Nano Banana image synthesis',
        ko: 'Nano Banana 이미지 합성을 사용하여 개념적 프레임워크 시각화 생성'
      },
      checkpoint: 'CP_VISUALIZATION_PREFERENCE'
    }
  ],
  example: {
    researchQuestion: 'How does AI-powered adaptive tutoring influence the development of metacognitive skills in undergraduate students?',
    variables: {
      independent: ['AI tutoring intervention', 'Personalization level', 'Feedback frequency'],
      mediators: ['Metacognitive awareness', 'Self-monitoring', 'Strategy selection'],
      dependent: ['Learning outcomes', 'Transfer ability', 'Autonomous learning']
    },
    theoreticalFramework: 'Integrated Self-Regulated Learning & Cognitive Load Theory',
    tScore: 0.42
  }
};

// Add to main workflows array
workflows.push(a6ExampleWorkflow);

export function getWorkflowBySlug(slug: string): Workflow | undefined {
  return workflows.find(w => w.slug === slug);
}

export function getWorkflowsByParadigm(paradigm: string): Workflow[] {
  return workflows.filter(w => w.paradigm === paradigm);
}

// Map checkpoint IDs to human-readable info
export const checkpointInfo = {
  CP_RESEARCH_DIRECTION: {
    name: {
      en: 'Research Direction',
      ko: '연구 방향'
    },
    description: {
      en: 'Critical decision point: Is your research question clear, focused, and novel?',
      ko: '중요한 결정 지점: 연구 질문이 명확하고 집중적이며 참신합니까?'
    },
    level: 'REQUIRED' as const
  },
  CP_THEORY_SELECTION: {
    name: {
      en: 'Theory Selection',
      ko: '이론 선택'
    },
    description: {
      en: 'Verify theoretical framework alignment with research question',
      ko: '연구 질문과 이론적 프레임워크 정렬 확인'
    },
    level: 'REQUIRED' as const
  },
  CP_PARADIGM_SELECTION: {
    name: {
      en: 'Paradigm Alignment',
      ko: '패러다임 정렬'
    },
    description: {
      en: 'Ensure ontological and epistemological coherence',
      ko: '존재론적 및 인식론적 일관성 보장'
    },
    level: 'REQUIRED' as const
  },
  CP_METHODOLOGY_APPROVAL: {
    name: {
      en: 'Methodology Approval',
      ko: '방법론 승인'
    },
    description: {
      en: 'Final check before data collection: Design, ethics, and instruments ready',
      ko: '데이터 수집 전 최종 확인: 설계, 윤리 및 도구 준비'
    },
    level: 'REQUIRED' as const
  },
  CP_ANALYSIS_PLAN: {
    name: {
      en: 'Analysis Plan',
      ko: '분석 계획'
    },
    description: {
      en: 'Recommended: Preregister your analysis strategy',
      ko: '권장: 분석 전략 사전등록'
    },
    level: 'RECOMMENDED' as const
  },
  CP_INTEGRATION_STRATEGY: {
    name: {
      en: 'Integration Strategy',
      ko: '통합 전략'
    },
    description: {
      en: 'Recommended: Verify qual+quant integration coherence',
      ko: '권장: 질적+양적 통합 일관성 확인'
    },
    level: 'RECOMMENDED' as const
  },
  CP_META_GATE: {
    name: {
      en: 'Meta-Analysis Gate',
      ko: '메타분석 게이트'
    },
    description: {
      en: 'Critical validation: Data completeness, effect size accuracy, heterogeneity',
      ko: '중요한 검증: 데이터 완전성, 효과크기 정확도, 이질성'
    },
    level: 'REQUIRED' as const
  },
  CP_VISUALIZATION_PREFERENCE: {
    name: {
      en: 'Visualization Preference',
      ko: '시각화 선호도'
    },
    description: {
      en: 'Optional: Configure visual representation style',
      ko: '선택사항: 시각적 표현 스타일 구성'
    },
    level: 'OPTIONAL' as const
  },
  CP_RESPONSE_APPROVAL: {
    name: {
      en: 'Response Approval',
      ko: '응답 승인'
    },
    description: {
      en: 'Recommended: Review response letter before submission',
      ko: '권장: 제출 전 응답 서신 검토'
    },
    level: 'RECOMMENDED' as const
  },
  CP_PREREGISTRATION_APPROVAL: {
    name: {
      en: 'Preregistration Approval',
      ko: '사전등록 승인'
    },
    description: {
      en: 'Recommended: Verify preregistration completeness',
      ko: '권장: 사전등록 완전성 확인'
    },
    level: 'RECOMMENDED' as const
  }
} as const;
