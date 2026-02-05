'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { DocsBreadcrumb } from '@/components/docs';
import { Zap, Layers, Feather, Code2, ChevronRight } from 'lucide-react';

export default function VSImplementationPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'VS Implementation Levels',
      subtitle: 'Three tiers of mode collapse prevention for different research contexts',

      levels: [
        {
          name: 'Full VS 5-Phase',
          badge: 'Maximum Protection',
          color: '#44ffaa',
          icon: Zap,
          description: 'Complete mode collapse prevention with all five phases executed. Use for critical research decisions requiring maximum creativity and differentiation.',
          agents: ['A1', 'A2', 'A3'],
          agentNames: ['Research Question Refiner', 'Theoretical Framework Architect', 'Devil\'s Advocate'],
          phases: [
            'Phase 1: Context Understanding & Modal Identification',
            'Phase 2: Divergent Exploration (3+ directions)',
            'Phase 3: Creative Synthesis',
            'Phase 4: Differentiated Presentation',
            'Phase 5: Human Selection & Execution'
          ],
          useCases: [
            'Research question formulation for novel topics',
            'Theoretical framework selection for dissertations',
            'Critical review of research designs',
            'High-stakes publication decisions'
          ]
        },
        {
          name: 'Enhanced VS 3-Phase',
          badge: 'Balanced Approach',
          color: '#22ccff',
          icon: Layers,
          description: 'Condensed but thorough implementation. Phases 1-2 combined, 4-5 combined. Good balance of quality and efficiency for most research tasks.',
          agents: ['B2', 'B3', 'C1', 'C2'],
          agentNames: ['Evidence Quality Appraiser', 'Effect Size Extractor', 'Quantitative Design', 'Qualitative Design'],
          phases: [
            'Phase 1-2: Context + Divergent Exploration',
            'Phase 3: Creative Synthesis',
            'Phase 4-5: Differentiated Options + Selection'
          ],
          useCases: [
            'Evidence quality appraisal with diverse criteria',
            'Methodology selection for standard designs',
            'Effect size interpretation strategies',
            'Design consultation for established paradigms'
          ]
        },
        {
          name: 'Light VS',
          badge: 'Routine Tasks',
          color: '#8888aa',
          icon: Feather,
          description: 'Modal awareness with quick divergence check. Efficient for routine tasks where established best practices exist.',
          agents: ['E4', 'F2', 'F3', 'G1'],
          agentNames: ['Analysis Code Generator', 'Checklist Manager', 'Reproducibility Auditor', 'Journal Matcher'],
          phases: [
            'Quick modal awareness check',
            'Present 2-3 alternatives if applicable',
            'Proceed with best practice if no strong alternatives'
          ],
          useCases: [
            'Analysis code generation (common patterns)',
            'Checklist application (PRISMA, CONSORT)',
            'Journal matching (field-specific)',
            'Reproducibility checks (standard protocols)'
          ]
        }
      ],

      matrix: {
        title: 'Agent-VS Implementation Matrix',
        subtitle: 'Which agents use which VS level',
        categories: [
          {
            name: 'Category A: Foundation',
            color: '#ff6b6b',
            agents: [
              { id: 'A1', name: 'Research Question Refiner', vs: 'FULL', model: 'Opus' },
              { id: 'A2', name: 'Theoretical Framework Architect', vs: 'FULL', model: 'Opus' },
              { id: 'A3', name: 'Devil\'s Advocate', vs: 'FULL', model: 'Opus' },
              { id: 'A4', name: 'Research Ethics Advisor', vs: 'ENHANCED', model: 'Sonnet' },
              { id: 'A5', name: 'Paradigm Worldview Advisor', vs: 'FULL', model: 'Opus' },
              { id: 'A6', name: 'Conceptual Framework Visualizer', vs: 'LIGHT', model: 'Sonnet' }
            ]
          },
          {
            name: 'Category B: Evidence',
            color: '#ffd93d',
            agents: [
              { id: 'B1', name: 'Systematic Literature Scout', vs: 'ENHANCED', model: 'Sonnet' },
              { id: 'B2', name: 'Evidence Quality Appraiser', vs: 'ENHANCED', model: 'Sonnet' },
              { id: 'B3', name: 'Effect Size Extractor', vs: 'ENHANCED', model: 'Haiku' },
              { id: 'B4', name: 'Research Radar', vs: 'LIGHT', model: 'Haiku' },
              { id: 'B5', name: 'Parallel Document Processor', vs: 'LIGHT', model: 'Opus' }
            ]
          },
          {
            name: 'Category C: Design',
            color: '#6bcb77',
            agents: [
              { id: 'C1', name: 'Quantitative Design', vs: 'ENHANCED', model: 'Opus' },
              { id: 'C2', name: 'Qualitative Design', vs: 'ENHANCED', model: 'Opus' },
              { id: 'C3', name: 'Mixed Methods Design', vs: 'ENHANCED', model: 'Opus' },
              { id: 'C4', name: 'Experimental Materials', vs: 'LIGHT', model: 'Sonnet' }
            ]
          },
          {
            name: 'Category E: Analysis',
            color: '#9b59b6',
            agents: [
              { id: 'E4', name: 'Analysis Code Generator', vs: 'LIGHT', model: 'Haiku' },
              { id: 'E5', name: 'Sensitivity Analysis Designer', vs: 'ENHANCED', model: 'Sonnet' }
            ]
          },
          {
            name: 'Category F: Quality',
            color: '#e17055',
            agents: [
              { id: 'F2', name: 'Checklist Manager', vs: 'LIGHT', model: 'Haiku' },
              { id: 'F3', name: 'Reproducibility Auditor', vs: 'ENHANCED', model: 'Sonnet' },
              { id: 'F4', name: 'Bias & Trustworthiness', vs: 'FULL', model: 'Sonnet' }
            ]
          },
          {
            name: 'Category G: Communication',
            color: '#00cec9',
            agents: [
              { id: 'G1', name: 'Journal Matcher', vs: 'LIGHT', model: 'Sonnet' },
              { id: 'G3', name: 'Peer Review Strategist', vs: 'ENHANCED', model: 'Opus' }
            ]
          }
        ]
      },

      examples: {
        title: 'Implementation Examples',
        subtitle: 'How VS prevents mode collapse in real research scenarios',
        cases: [
          {
            title: 'Research Question Refinement (A1)',
            problem: 'Without VS: Always suggests PICO for quantitative, SPIDER for qualitative',
            solution: 'With Full VS: Explores unconventional frameworks, interdisciplinary angles, problem-oriented vs. solution-oriented questions',
            outcome: 'Unique, non-obvious research questions that avoid cliché topics'
          },
          {
            title: 'Theoretical Framework (A2)',
            problem: 'Without VS: Defaults to most-cited theories in the field',
            solution: 'With Full VS: Considers emerging theories (T<0.3), interdisciplinary connections, theory adaptation strategies',
            outcome: 'Framework selection justified by research context, not just popularity'
          },
          {
            title: 'Effect Size Interpretation (B3)',
            problem: 'Without VS: Applies Cohen\'s benchmarks universally (d=0.2/0.5/0.8)',
            solution: 'With Enhanced VS: Context-specific benchmarks, field norms, practical significance thresholds',
            outcome: 'Meaningful effect size interpretation for the specific research domain'
          }
        ]
      },

      codeExample: {
        title: 'VS Prompt Structure',
        subtitle: 'How agents implement VS methodology in practice',
        code: `// Full VS 5-Phase Example (A2: Theoretical Framework Architect)

Task(
  subagent_type="diverga:a2",
  model="opus",
  prompt=\`
    [VS Mode: FULL 5-PHASE]

    Research Context:
    - Domain: Educational Technology
    - Question: How do AI chatbots improve language learning?
    - Paradigm: Quantitative experimental

    VS Execution:

    Phase 1: Modal Identification
    - Identify "obvious" theory: Technology Acceptance Model (TAM)
    - T-Score: 0.85 (highly typical for EdTech research)

    Phase 2: Divergent Exploration
    - Direction A (T~0.6): Self-Determination Theory (SDT)
      * Autonomy support from AI personalization
      * Novel angle: motivation vs. acceptance
    - Direction B (T~0.4): Cognitive Load Theory (CLT)
      * AI as cognitive offloading mechanism
      * Less common but highly relevant
    - Direction C (T<0.3): Actor-Network Theory (ANT)
      * AI as non-human actor in learning network
      * Highly innovative, requires strong justification

    Phase 3: Creative Synthesis
    - Hybrid option: SDT + CLT integration
    - Explains both motivation AND cognitive processes

    Phase 4: Differentiated Presentation
    Present ALL options with:
    - T-Scores (typicality indicators)
    - Theoretical justification
    - Implementation challenges
    - Expected contribution to literature

    Phase 5: Human Selection & Execution
    - WAIT for researcher's decision
    - Execute ONLY selected framework
    - Generate hypothesis derivation for chosen theory
  \`
)`
      }
    },
    ko: {
      title: 'VS 구현 수준',
      subtitle: '다양한 연구 맥락을 위한 3단계 모드 붕괴 방지',

      levels: [
        {
          name: 'Full VS 5단계',
          badge: '최대 보호',
          color: '#44ffaa',
          icon: Zap,
          description: '5개 단계가 모두 실행되는 완전한 모드 붕괴 방지. 최대한의 창의성과 차별화가 필요한 중요한 연구 결정에 사용합니다.',
          agents: ['A1', 'A2', 'A3'],
          agentNames: ['연구 질문 정제', '이론적 프레임워크 설계', '악마의 대변인'],
          phases: [
            '1단계: 맥락 이해 및 전형적 패턴 식별',
            '2단계: 발산적 탐색 (3개 이상의 방향)',
            '3단계: 창의적 종합',
            '4단계: 차별화된 제시',
            '5단계: 인간 선택 및 실행'
          ],
          useCases: [
            '새로운 주제의 연구 질문 형성',
            '학위논문을 위한 이론적 프레임워크 선택',
            '연구 설계의 비판적 검토',
            '고위험 출판 결정'
          ]
        },
        {
          name: 'Enhanced VS 3단계',
          badge: '균형 접근',
          color: '#22ccff',
          icon: Layers,
          description: '축약되었지만 철저한 구현. 1-2단계 통합, 4-5단계 통합. 대부분의 연구 작업에 적합한 품질과 효율의 균형.',
          agents: ['B2', 'B3', 'C1', 'C2'],
          agentNames: ['증거 품질 평가', '효과크기 추출', '양적 설계', '질적 설계'],
          phases: [
            '1-2단계: 맥락 + 발산적 탐색',
            '3단계: 창의적 종합',
            '4-5단계: 차별화된 옵션 + 선택'
          ],
          useCases: [
            '다양한 기준의 증거 품질 평가',
            '표준 설계를 위한 방법론 선택',
            '효과크기 해석 전략',
            '확립된 패러다임을 위한 설계 컨설팅'
          ]
        },
        {
          name: 'Light VS',
          badge: '일상 작업',
          color: '#8888aa',
          icon: Feather,
          description: '빠른 분기 확인이 포함된 전형적 패턴 인식. 확립된 모범 사례가 존재하는 일상 작업에 효율적입니다.',
          agents: ['E4', 'F2', 'F3', 'G1'],
          agentNames: ['분석 코드 생성', '체크리스트 관리', '재현성 감사', '저널 매칭'],
          phases: [
            '빠른 전형적 패턴 인식 확인',
            '해당되는 경우 2-3개 대안 제시',
            '강력한 대안이 없으면 모범 사례로 진행'
          ],
          useCases: [
            '분석 코드 생성 (일반 패턴)',
            '체크리스트 적용 (PRISMA, CONSORT)',
            '저널 매칭 (분야별)',
            '재현성 확인 (표준 프로토콜)'
          ]
        }
      ],

      matrix: {
        title: '에이전트-VS 구현 매트릭스',
        subtitle: '각 에이전트가 사용하는 VS 수준',
        categories: [
          {
            name: 'Category A: Foundation',
            color: '#ff6b6b',
            agents: [
              { id: 'A1', name: '연구 질문 정제', vs: 'FULL', model: 'Opus' },
              { id: 'A2', name: '이론적 프레임워크 설계', vs: 'FULL', model: 'Opus' },
              { id: 'A3', name: '악마의 대변인', vs: 'FULL', model: 'Opus' },
              { id: 'A4', name: '연구 윤리 자문', vs: 'ENHANCED', model: 'Sonnet' },
              { id: 'A5', name: '패러다임 세계관 자문', vs: 'FULL', model: 'Opus' },
              { id: 'A6', name: '개념적 프레임워크 시각화', vs: 'LIGHT', model: 'Sonnet' }
            ]
          },
          {
            name: 'Category B: Evidence',
            color: '#ffd93d',
            agents: [
              { id: 'B1', name: '체계적 문헌 탐색', vs: 'ENHANCED', model: 'Sonnet' },
              { id: 'B2', name: '증거 품질 평가', vs: 'ENHANCED', model: 'Sonnet' },
              { id: 'B3', name: '효과크기 추출', vs: 'ENHANCED', model: 'Haiku' },
              { id: 'B4', name: '연구 레이더', vs: 'LIGHT', model: 'Haiku' },
              { id: 'B5', name: '병렬 문서 처리', vs: 'LIGHT', model: 'Opus' }
            ]
          },
          {
            name: 'Category C: Design',
            color: '#6bcb77',
            agents: [
              { id: 'C1', name: '양적 설계', vs: 'ENHANCED', model: 'Opus' },
              { id: 'C2', name: '질적 설계', vs: 'ENHANCED', model: 'Opus' },
              { id: 'C3', name: '혼합방법 설계', vs: 'ENHANCED', model: 'Opus' },
              { id: 'C4', name: '실험 자료', vs: 'LIGHT', model: 'Sonnet' }
            ]
          },
          {
            name: 'Category E: Analysis',
            color: '#9b59b6',
            agents: [
              { id: 'E4', name: '분석 코드 생성', vs: 'LIGHT', model: 'Haiku' },
              { id: 'E5', name: '민감도 분석 설계', vs: 'ENHANCED', model: 'Sonnet' }
            ]
          },
          {
            name: 'Category F: Quality',
            color: '#e17055',
            agents: [
              { id: 'F2', name: '체크리스트 관리', vs: 'LIGHT', model: 'Haiku' },
              { id: 'F3', name: '재현성 감사', vs: 'ENHANCED', model: 'Sonnet' },
              { id: 'F4', name: '편향 및 신뢰성', vs: 'FULL', model: 'Sonnet' }
            ]
          },
          {
            name: 'Category G: Communication',
            color: '#00cec9',
            agents: [
              { id: 'G1', name: '저널 매칭', vs: 'LIGHT', model: 'Sonnet' },
              { id: 'G3', name: '동료평가 전략', vs: 'ENHANCED', model: 'Opus' }
            ]
          }
        ]
      },

      examples: {
        title: '구현 예시',
        subtitle: '실제 연구 시나리오에서 VS가 모드 붕괴를 방지하는 방법',
        cases: [
          {
            title: '연구 질문 정제 (A1)',
            problem: 'VS 없이: 양적 연구는 항상 PICO, 질적 연구는 항상 SPIDER 제안',
            solution: 'Full VS 사용: 비전통적 프레임워크, 학제간 각도, 문제 지향 vs. 해결책 지향 질문 탐색',
            outcome: '진부한 주제를 피하는 독특하고 비자명한 연구 질문'
          },
          {
            title: '이론적 프레임워크 (A2)',
            problem: 'VS 없이: 해당 분야에서 가장 많이 인용된 이론으로 기본 설정',
            solution: 'Full VS 사용: 신흥 이론 (T<0.3), 학제간 연결, 이론 적응 전략 고려',
            outcome: '인기도가 아닌 연구 맥락에 의해 정당화된 프레임워크 선택'
          },
          {
            title: '효과크기 해석 (B3)',
            problem: 'VS 없이: Cohen의 기준을 보편적으로 적용 (d=0.2/0.5/0.8)',
            solution: 'Enhanced VS 사용: 맥락별 기준, 분야 규범, 실용적 유의성 임계값',
            outcome: '특정 연구 영역에 대한 의미 있는 효과크기 해석'
          }
        ]
      },

      codeExample: {
        title: 'VS 프롬프트 구조',
        subtitle: '에이전트가 실제로 VS 방법론을 구현하는 방법',
        code: `// Full VS 5단계 예시 (A2: 이론적 프레임워크 설계)

Task(
  subagent_type="diverga:a2",
  model="opus",
  prompt=\`
    [VS Mode: FULL 5-PHASE]

    연구 맥락:
    - 영역: 교육 공학
    - 질문: AI 챗봇이 언어 학습을 어떻게 개선하는가?
    - 패러다임: 양적 실험

    VS 실행:

    1단계: 전형적 패턴 식별
    - "자명한" 이론 식별: 기술수용모델 (TAM)
    - T-Score: 0.85 (교육공학 연구에서 매우 전형적)

    2단계: 발산적 탐색
    - 방향 A (T~0.6): 자기결정이론 (SDT)
      * AI 개인화의 자율성 지원
      * 새로운 각도: 동기 vs. 수용
    - 방향 B (T~0.4): 인지부하이론 (CLT)
      * AI를 인지 오프로딩 메커니즘으로
      * 덜 일반적이지만 매우 관련성 높음
    - 방향 C (T<0.3): 행위자-네트워크 이론 (ANT)
      * 학습 네트워크의 비인간 행위자로서 AI
      * 매우 혁신적, 강력한 정당화 필요

    3단계: 창의적 종합
    - 하이브리드 옵션: SDT + CLT 통합
    - 동기와 인지 과정 모두 설명

    4단계: 차별화된 제시
    다음을 포함한 모든 옵션 제시:
    - T-Score (전형성 지표)
    - 이론적 정당화
    - 구현 과제
    - 문헌에 대한 기대 기여

    5단계: 인간 선택 및 실행
    - 연구자의 결정을 기다림
    - 선택된 프레임워크만 실행
    - 선택된 이론에 대한 가설 도출 생성
  \`
)`
      }
    }
  };

  const t = content[locale];

  const vsColors = {
    FULL: '#44ffaa',
    ENHANCED: '#22ccff',
    LIGHT: '#8888aa'
  };

  return (
    <div>
      <DocsBreadcrumb locale={locale} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-display font-display font-bold text-stellar-core mb-4">
          {t.title}
        </h1>
        <p className="text-body-large text-stellar-dim max-w-3xl">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Implementation Levels */}
      <div className="space-y-6 mb-16">
        {t.levels.map((level, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="border border-stellar-faint/20 bg-void-elevated p-8 hover:border-stellar-faint/40 transition-all"
          >
            {/* Level Header */}
            <div className="flex items-start gap-4 mb-6">
              <div
                className="flex-shrink-0 flex items-center justify-center h-12 w-12"
                style={{
                  backgroundColor: `${level.color}15`,
                  border: `1px solid ${level.color}30`
                }}
              >
                <level.icon className="h-6 w-6" style={{ color: level.color }} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-heading-2 font-display font-semibold text-stellar-core">
                    {level.name}
                  </h3>
                  <span
                    className="px-2 py-1 text-micro font-mono uppercase tracking-widest"
                    style={{
                      backgroundColor: `${level.color}15`,
                      color: level.color,
                      border: `1px solid ${level.color}30`
                    }}
                  >
                    {level.badge}
                  </span>
                </div>
                <p className="text-body text-stellar-dim">{level.description}</p>
              </div>
            </div>

            {/* Agents */}
            <div className="mb-6">
              <h4 className="text-caption font-mono uppercase tracking-widest text-stellar-faint mb-3">
                {locale === 'ko' ? '사용 에이전트' : 'Agents'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {level.agents.map((agent, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 font-mono text-caption text-stellar-dim bg-void-base border border-stellar-faint/20"
                  >
                    {agent}: {level.agentNames[i]}
                  </span>
                ))}
              </div>
            </div>

            {/* Phases */}
            <div className="mb-6">
              <h4 className="text-caption font-mono uppercase tracking-widest text-stellar-faint mb-3">
                {locale === 'ko' ? '프로세스 단계' : 'Process Phases'}
              </h4>
              <div className="space-y-2">
                {level.phases.map((phase, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ChevronRight className="h-4 w-4 text-stellar-faint flex-shrink-0 mt-1" />
                    <span className="text-body text-stellar-dim">{phase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="text-caption font-mono uppercase tracking-widest text-stellar-faint mb-3">
                {locale === 'ko' ? '사용 사례' : 'Use Cases'}
              </h4>
              <ul className="space-y-2">
                {level.useCases.map((useCase, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="h-1.5 w-1.5 rounded-full flex-shrink-0 mt-2"
                      style={{ backgroundColor: level.color }}
                    />
                    <span className="text-body text-stellar-dim">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Agent-VS Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-heading-1 font-display font-bold text-stellar-core mb-2">
          {t.matrix.title}
        </h2>
        <p className="text-body text-stellar-dim mb-8">{t.matrix.subtitle}</p>

        <div className="space-y-8">
          {t.matrix.categories.map((category, catIdx) => (
            <div key={catIdx}>
              <h3
                className="text-heading-3 font-display font-semibold mb-4"
                style={{ color: category.color }}
              >
                {category.name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.agents.map((agent, agentIdx) => (
                  <div
                    key={agentIdx}
                    className="border border-stellar-faint/20 bg-void-elevated p-4 hover:border-stellar-faint/40 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className="px-2 py-1 font-mono text-micro"
                        style={{
                          backgroundColor: `${category.color}15`,
                          color: category.color,
                          border: `1px solid ${category.color}30`
                        }}
                      >
                        {agent.id}
                      </span>
                      <span
                        className="px-2 py-1 font-mono text-micro"
                        style={{
                          backgroundColor: `${vsColors[agent.vs as keyof typeof vsColors]}15`,
                          color: vsColors[agent.vs as keyof typeof vsColors],
                          border: `1px solid ${vsColors[agent.vs as keyof typeof vsColors]}30`
                        }}
                      >
                        {agent.vs}
                      </span>
                    </div>
                    <p className="text-body text-stellar-core mb-2">{agent.name}</p>
                    <p className="text-caption text-stellar-faint font-mono">{agent.model}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Implementation Examples */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-heading-1 font-display font-bold text-stellar-core mb-2">
          {t.examples.title}
        </h2>
        <p className="text-body text-stellar-dim mb-8">{t.examples.subtitle}</p>

        <div className="space-y-6">
          {t.examples.cases.map((example, idx) => (
            <div
              key={idx}
              className="border border-stellar-faint/20 bg-void-elevated p-6"
            >
              <h3 className="text-heading-3 font-display font-semibold text-stellar-core mb-4">
                {example.title}
              </h3>

              <div className="space-y-4">
                <div>
                  <span className="text-caption font-mono uppercase tracking-widest text-[#ff6b6b] mb-2 block">
                    {locale === 'ko' ? '문제점' : 'Problem'}
                  </span>
                  <p className="text-body text-stellar-dim">{example.problem}</p>
                </div>

                <div>
                  <span className="text-caption font-mono uppercase tracking-widest text-[#44ffaa] mb-2 block">
                    {locale === 'ko' ? '해결책' : 'Solution'}
                  </span>
                  <p className="text-body text-stellar-dim">{example.solution}</p>
                </div>

                <div>
                  <span className="text-caption font-mono uppercase tracking-widest text-[#22ccff] mb-2 block">
                    {locale === 'ko' ? '결과' : 'Outcome'}
                  </span>
                  <p className="text-body text-stellar-dim">{example.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Code Example */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-heading-1 font-display font-bold text-stellar-core mb-2">
          {t.codeExample.title}
        </h2>
        <p className="text-body text-stellar-dim mb-8">{t.codeExample.subtitle}</p>

        <div className="border border-[#44ffaa]/30 bg-void-elevated">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-stellar-faint/20">
            <Code2 className="h-4 w-4 text-[#44ffaa]" />
            <span className="text-caption font-mono text-stellar-dim">
              vs-implementation-example.ts
            </span>
          </div>
          <pre className="p-6 overflow-x-auto text-caption font-mono text-stellar-dim">
            <code>{t.codeExample.code}</code>
          </pre>
        </div>
      </motion.div>
    </div>
  );
}
