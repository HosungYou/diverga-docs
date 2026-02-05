'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Brain,
  Lightbulb,
  ShieldAlert,
  Scale,
  Compass,
  Network,
  AlertCircle,
  CheckCircle2,
  Clock,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Agents',
    title: 'Category A: Foundation Agents',
    subtitle: 'Theoretical and ethical foundations for research excellence',
    description: 'Foundation agents establish the theoretical, methodological, and ethical groundwork for your research. Using Verbalized Sampling (VS) methodology, they prevent mode collapse by presenting creative alternatives across the typicality spectrum.',

    // Core principle
    principleTitle: 'Core Principle',
    principleText: 'Prevent mode collapse through creative theory selection and rigorous ethical review',

    // Agents
    agents: [
      {
        id: 'A1',
        name: 'Research Question Refiner',
        icon: 'lightbulb',
        color: '#ff6b6b',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_RESEARCH_DIRECTION',
        checkpointLevel: 'REQUIRED',
        vsLevel: 'Full VS 5-Phase',
        purpose: 'Transform vague research ideas into precise, answerable research questions using FINER/PICO/SPIDER frameworks',
        triggers: {
          en: ['research question', 'RQ', 'refine question', 'research problem'],
          ko: ['연구 질문', '연구문제', 'RQ', '연구 주제'],
        },
        capabilities: [
          'FINER criteria validation (Feasible, Interesting, Novel, Ethical, Relevant)',
          'PICO framework for quantitative questions',
          'SPIDER framework for qualitative questions',
          'Scope refinement to prevent overly broad/narrow questions',
          'VS-driven alternative question generation',
        ],
        vsProcess: 'Identifies modal question patterns, generates 3 alternatives with T-Scores (0.6, 0.4, <0.3), presents for human selection',
        example: {
          input: '"How does AI affect education?"',
          output: 'Direction A (T≈0.6): "How do AI chatbots improve speaking proficiency in EFL classrooms?" | Direction B (T≈0.4): "What metacognitive strategies emerge when learners interact with AI feedback systems?" | Direction C (T<0.3): "How does neuroplasticity theory explain learning differences in AI-augmented vs. traditional environments?"',
        },
      },
      {
        id: 'A2',
        name: 'Theoretical Framework Architect',
        icon: 'network',
        color: '#e74c3c',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_THEORY_SELECTION',
        checkpointLevel: 'REQUIRED',
        vsLevel: 'Full VS 5-Phase',
        purpose: 'Design theoretical frameworks that avoid modal theories and explore long-tail alternatives',
        triggers: {
          en: ['theoretical framework', 'theory', 'conceptual model', 'theoretical foundation'],
          ko: ['이론적 프레임워크', '이론적 틀', '이론', '개념적 모형'],
        },
        capabilities: [
          'Modal theory identification (T > 0.8)',
          'Long-tail theory exploration (T < 0.4)',
          'Theory integration and hybrid frameworks',
          'Cross-domain theory adaptation',
          'Hypothesis derivation from theory',
        ],
        vsProcess: 'Stage 1: Identify modal theories (TAM, UTAUT, etc.) | Stage 2: Generate differentiated alternatives | Stage 3: Present 3 options with T-Scores | Stage 4: Human selection | Stage 5: Framework elaboration',
        example: {
          input: '"AI adoption in education"',
          output: 'Modal (T=0.92): TAM | Direction A (T≈0.6): Self-Determination Theory × TAM integration | Direction B (T≈0.4): Cognitive Load Theory + Adaptive Ecosystem | Direction C (T<0.3): Neuroplasticity-based technology learning framework',
        },
      },
      {
        id: 'A3',
        name: 'Devil\'s Advocate',
        icon: 'shieldAlert',
        color: '#c0392b',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'Full VS 5-Phase',
        purpose: 'Generate original critiques and alternative explanations to stress-test research designs',
        triggers: {
          en: ['criticism', 'weakness', 'reviewer 2', 'critique', 'alternative explanation', 'rebuttal'],
          ko: ['비판', '약점', '반론', '대안 설명', '리뷰어', '반박'],
        },
        capabilities: [
          'Anticipate "Reviewer 2" criticisms',
          'Generate creative alternative explanations',
          'Identify logical fallacies and assumptions',
          'Propose competing hypotheses',
          'Simulate peer review scenarios',
        ],
        vsProcess: 'Avoid predictable criticisms, generate creative challenges across typicality spectrum, prioritize novel counterarguments',
        example: {
          input: '"AI chatbots improve learning outcomes"',
          output: 'Critique A: Novelty effect (T≈0.7) | Critique B: Measurement artifact - chatbots enforce structured practice, not AI quality (T≈0.4) | Critique C: Self-selection bias - tech-savvy learners use chatbots more (T≈0.2)',
        },
      },
      {
        id: 'A4',
        name: 'Research Ethics Advisor',
        icon: 'scale',
        color: '#d35400',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_METHODOLOGY_APPROVAL',
        checkpointLevel: 'REQUIRED',
        vsLevel: 'Enhanced VS 3-Phase',
        purpose: 'Context-adaptive ethical analysis avoiding generic checklists',
        triggers: {
          en: ['ethics', 'IRB', 'consent', 'informed consent', 'privacy', 'vulnerable populations'],
          ko: ['연구 윤리', 'IRB', '동의서', '개인정보', '취약 집단'],
        },
        capabilities: [
          'IRB protocol development',
          'Informed consent design',
          'Privacy and confidentiality protection',
          'Vulnerable population safeguards',
          'Data security and anonymization',
          'Ethical risk assessment',
        ],
        vsProcess: 'Phase 1: Context analysis | Phase 2: Research-specific ethical considerations | Phase 3: Tailored recommendations (not generic checklists)',
        example: {
          input: '"Interview K-12 students about AI use"',
          output: 'Parental consent + child assent required | Privacy: Anonymize school/location | Risk: Minimize peer identification | Data security: Encrypted storage, limited access | Withdrawal: Emphasize right to stop anytime',
        },
      },
      {
        id: 'A5',
        name: 'Paradigm & Worldview Advisor',
        icon: 'compass',
        color: '#f39c12',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_PARADIGM_SELECTION',
        checkpointLevel: 'REQUIRED',
        vsLevel: 'Standard',
        purpose: 'Guide researchers through ontological, epistemological, and axiological foundations',
        triggers: {
          en: ['paradigm', 'ontology', 'epistemology', 'worldview', 'philosophical foundations', 'methodology alignment'],
          ko: ['패러다임', '존재론', '인식론', '세계관', '철학적 기초'],
        },
        capabilities: [
          'Paradigm identification (Positivist, Interpretivist, Pragmatic, Transformative)',
          'Ontological positioning (Realism vs. Relativism)',
          'Epistemological stance (Objectivism vs. Constructivism)',
          'Axiological considerations (Value-free vs. Value-laden)',
          'Methodology-paradigm alignment check',
        ],
        vsProcess: 'Ask foundational questions | Present paradigm options | Explain implications for methods | Guide paradigm selection | Ensure consistency',
        example: {
          input: '"Should I use qual or quant methods?"',
          output: 'First clarify: What is the nature of reality you\'re studying? (Ontology) | How can knowledge about it be acquired? (Epistemology) | Then recommend: Positivist → Quant, Interpretivist → Qual, Pragmatic → Mixed',
        },
      },
      {
        id: 'A6',
        name: 'Conceptual Framework Visualizer',
        icon: 'network',
        color: '#e67e22',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_VISUALIZATION_PREFERENCE',
        checkpointLevel: 'OPTIONAL',
        vsLevel: 'Enhanced VS 3-Phase',
        purpose: 'Generate differentiated academic visualizations avoiding generic diagrams',
        triggers: {
          en: ['conceptual framework', 'visualize framework', 'framework diagram', 'visual model'],
          ko: ['개념적 프레임워크', '프레임워크 시각화', '모형 다이어그램'],
        },
        capabilities: [
          'Mermaid diagram generation',
          'Variable relationship mapping',
          'Mediation/moderation models',
          'Process flow diagrams',
          'Theory-to-hypothesis visual translation',
        ],
        vsProcess: 'Phase 1: Understand framework complexity | Phase 2: Generate layout alternatives | Phase 3: Present differentiated visual options',
        example: {
          input: '"AI chatbots → metacognition → learning outcomes"',
          output: 'Mermaid flowchart with: AI Chatbot Features → Metacognitive Strategies (mediator) → Learning Outcomes | Include moderators: Prior Knowledge, Self-Efficacy',
        },
      },
    ],

    // Checkpoint integration
    checkpointTitle: 'Checkpoint Integration',
    checkpointDescription: 'Foundation agents enforce critical decision points:',
    checkpoints: [
      { id: 'CP_RESEARCH_DIRECTION', level: 'REQUIRED', agent: 'A1', description: 'Research question finalized, VS alternatives presented' },
      { id: 'CP_THEORY_SELECTION', level: 'REQUIRED', agent: 'A2', description: 'Theoretical framework chosen from VS options' },
      { id: 'CP_PARADIGM_SELECTION', level: 'REQUIRED', agent: 'A5', description: 'Paradigm confirmed (Quant/Qual/Mixed)' },
      { id: 'CP_METHODOLOGY_APPROVAL', level: 'REQUIRED', agent: 'A4', description: 'Ethical review complete, IRB-ready' },
      { id: 'CP_VISUALIZATION_PREFERENCE', level: 'OPTIONAL', agent: 'A6', description: 'Visual format selected' },
    ],

    // VS methodology
    vsTitle: 'Verbalized Sampling (VS) in Action',
    vsDescription: 'Foundation agents use VS to prevent mode collapse:',
    vsStages: [
      { stage: 1, name: 'Modal Awareness', description: 'Identify predictable recommendations (T > 0.8)' },
      { stage: 2, name: 'Divergent Exploration', description: 'Generate alternatives across T-Score spectrum' },
      { stage: 3, name: 'Human Selection', description: 'Present options, WAIT for decision' },
      { stage: 4, name: 'Elaboration', description: 'Develop selected direction' },
      { stage: 5, name: 'Validation', description: 'Ensure defensibility and rigor' },
    ],

    // Typical workflow
    workflowTitle: 'Typical Research Foundation Workflow',
    workflowSteps: [
      { agent: 'A1', action: 'Refine research question', checkpoint: 'CP_RESEARCH_DIRECTION', parallel: false },
      { agent: 'A5', action: 'Select paradigm', checkpoint: 'CP_PARADIGM_SELECTION', parallel: false },
      { agent: 'A2 + A3', action: 'Develop theory + critique', checkpoint: 'CP_THEORY_SELECTION', parallel: true },
      { agent: 'A6', action: 'Visualize framework', checkpoint: 'CP_VISUALIZATION_PREFERENCE', parallel: false },
      { agent: 'A4', action: 'Ethical review', checkpoint: 'CP_METHODOLOGY_APPROVAL', parallel: false },
    ],

    // CTA
    ctaTitle: 'Build Strong Research Foundations',
    ctaDescription: 'Start with Category A agents to establish theoretical and ethical rigor.',
    ctaButton: 'Explore Category B: Evidence',
  },
  ko: {
    back: '에이전트로 돌아가기',
    title: '카테고리 A: 기초 에이전트',
    subtitle: '연구 우수성을 위한 이론적 및 윤리적 기초',
    description: '기초 에이전트는 연구의 이론적, 방법론적, 윤리적 토대를 확립합니다. Verbalized Sampling (VS) 방법론을 사용하여 전형성 스펙트럼에 걸쳐 창의적 대안을 제시함으로써 모드 붕괴를 방지합니다.',

    principleTitle: '핵심 원칙',
    principleText: '창의적 이론 선택과 엄격한 윤리 검토를 통한 모드 붕괴 방지',

    agents: [
      {
        id: 'A1',
        name: '연구질문 정제사',
        icon: 'lightbulb',
        color: '#ff6b6b',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_RESEARCH_DIRECTION',
        checkpointLevel: 'REQUIRED',
        vsLevel: '전체 VS 5단계',
        purpose: '모호한 연구 아이디어를 FINER/PICO/SPIDER 프레임워크를 사용하여 정확하고 답변 가능한 연구 질문으로 변환',
        triggers: {
          en: ['research question', 'RQ', 'refine question', 'research problem'],
          ko: ['연구 질문', '연구문제', 'RQ', '연구 주제'],
        },
        capabilities: [
          'FINER 기준 검증 (실행가능성, 흥미, 새로움, 윤리성, 관련성)',
          '양적 질문을 위한 PICO 프레임워크',
          '질적 질문을 위한 SPIDER 프레임워크',
          '지나치게 광범위하거나 좁은 질문 방지를 위한 범위 정제',
          'VS 기반 대안 질문 생성',
        ],
        vsProcess: '모달 질문 패턴 식별, T-점수(0.6, 0.4, <0.3)를 가진 3가지 대안 생성, 인간 선택을 위해 제시',
        example: {
          input: '"AI가 교육에 어떤 영향을 미치나요?"',
          output: '방향 A (T≈0.6): "AI 챗봇이 EFL 교실에서 말하기 능숙도를 어떻게 향상시키나요?" | 방향 B (T≈0.4): "학습자가 AI 피드백 시스템과 상호작용할 때 어떤 메타인지 전략이 나타나나요?" | 방향 C (T<0.3): "신경가소성 이론이 AI 지원 환경과 전통적 환경의 학습 차이를 어떻게 설명하나요?"',
        },
      },
      {
        id: 'A2',
        name: '이론적 프레임워크 설계자',
        icon: 'network',
        color: '#e74c3c',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_THEORY_SELECTION',
        checkpointLevel: 'REQUIRED',
        vsLevel: '전체 VS 5단계',
        purpose: '모달 이론을 피하고 롱테일 대안을 탐색하는 이론적 프레임워크 설계',
        triggers: {
          en: ['theoretical framework', 'theory', 'conceptual model', 'theoretical foundation'],
          ko: ['이론적 프레임워크', '이론적 틀', '이론', '개념적 모형'],
        },
        capabilities: [
          '모달 이론 식별 (T > 0.8)',
          '롱테일 이론 탐색 (T < 0.4)',
          '이론 통합 및 하이브리드 프레임워크',
          '도메인 간 이론 적응',
          '이론으로부터 가설 도출',
        ],
        vsProcess: '1단계: 모달 이론 식별(TAM, UTAUT 등) | 2단계: 차별화된 대안 생성 | 3단계: T-점수와 함께 3가지 옵션 제시 | 4단계: 인간 선택 | 5단계: 프레임워크 정교화',
        example: {
          input: '"교육에서 AI 채택"',
          output: '모달 (T=0.92): TAM | 방향 A (T≈0.6): 자기결정이론 × TAM 통합 | 방향 B (T≈0.4): 인지부하이론 + 적응형 생태계 | 방향 C (T<0.3): 신경가소성 기반 기술 학습 프레임워크',
        },
      },
      {
        id: 'A3',
        name: '반대논변자',
        icon: 'shieldAlert',
        color: '#c0392b',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: '없음',
        checkpointLevel: '자문',
        vsLevel: '전체 VS 5단계',
        purpose: '연구 설계를 스트레스 테스트하기 위한 독창적 비판과 대안 설명 생성',
        triggers: {
          en: ['criticism', 'weakness', 'reviewer 2', 'critique', 'alternative explanation', 'rebuttal'],
          ko: ['비판', '약점', '반론', '대안 설명', '리뷰어', '반박'],
        },
        capabilities: [
          '"리뷰어 2" 비판 예측',
          '창의적 대안 설명 생성',
          '논리적 오류 및 가정 식별',
          '경쟁 가설 제안',
          '동료 심사 시나리오 시뮬레이션',
        ],
        vsProcess: '예측 가능한 비판 회피, 전형성 스펙트럼에 걸쳐 창의적 도전 생성, 새로운 반론 우선순위 지정',
        example: {
          input: '"AI 챗봇이 학습 성과를 향상시킨다"',
          output: '비판 A: 신기함 효과 (T≈0.7) | 비판 B: 측정 인공물 - 챗봇이 구조화된 연습을 강제함, AI 품질이 아님 (T≈0.4) | 비판 C: 자기선택 편향 - 기술에 능숙한 학습자가 챗봇을 더 많이 사용 (T≈0.2)',
        },
      },
      {
        id: 'A4',
        name: '연구윤리 조언자',
        icon: 'scale',
        color: '#d35400',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_METHODOLOGY_APPROVAL',
        checkpointLevel: 'REQUIRED',
        vsLevel: '향상된 VS 3단계',
        purpose: '일반적인 체크리스트를 피하는 맥락 적응형 윤리 분석',
        triggers: {
          en: ['ethics', 'IRB', 'consent', 'informed consent', 'privacy', 'vulnerable populations'],
          ko: ['연구 윤리', 'IRB', '동의서', '개인정보', '취약 집단'],
        },
        capabilities: [
          'IRB 프로토콜 개발',
          '사전 동의서 설계',
          '개인정보 및 기밀성 보호',
          '취약 집단 보호 장치',
          '데이터 보안 및 익명화',
          '윤리적 위험 평가',
        ],
        vsProcess: '1단계: 맥락 분석 | 2단계: 연구별 윤리적 고려사항 | 3단계: 맞춤형 권장사항 (일반 체크리스트 아님)',
        example: {
          input: '"AI 사용에 대해 K-12 학생 인터뷰"',
          output: '부모 동의 + 아동 동의 필요 | 개인정보: 학교/위치 익명화 | 위험: 또래 식별 최소화 | 데이터 보안: 암호화된 저장, 제한된 접근 | 철회: 언제든지 중단할 권리 강조',
        },
      },
      {
        id: 'A5',
        name: '패러다임 및 세계관 조언자',
        icon: 'compass',
        color: '#f39c12',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_PARADIGM_SELECTION',
        checkpointLevel: 'REQUIRED',
        vsLevel: '표준',
        purpose: '존재론적, 인식론적, 가치론적 기초를 통해 연구자 안내',
        triggers: {
          en: ['paradigm', 'ontology', 'epistemology', 'worldview', 'philosophical foundations', 'methodology alignment'],
          ko: ['패러다임', '존재론', '인식론', '세계관', '철학적 기초'],
        },
        capabilities: [
          '패러다임 식별 (실증주의, 해석주의, 실용주의, 변혁주의)',
          '존재론적 위치 설정 (실재론 vs. 상대주의)',
          '인식론적 입장 (객관주의 vs. 구성주의)',
          '가치론적 고려사항 (가치 중립 vs. 가치 함축)',
          '방법론-패러다임 정렬 확인',
        ],
        vsProcess: '기초 질문 제기 | 패러다임 옵션 제시 | 방법에 대한 함의 설명 | 패러다임 선택 안내 | 일관성 보장',
        example: {
          input: '"질적 방법 또는 양적 방법을 사용해야 하나요?"',
          output: '먼저 명확히: 연구하는 현실의 본질은 무엇인가요? (존재론) | 그것에 대한 지식은 어떻게 획득될 수 있나요? (인식론) | 그런 다음 권장: 실증주의 → 양적, 해석주의 → 질적, 실용주의 → 혼합',
        },
      },
      {
        id: 'A6',
        name: '개념적 프레임워크 시각화자',
        icon: 'network',
        color: '#e67e22',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_VISUALIZATION_PREFERENCE',
        checkpointLevel: 'OPTIONAL',
        vsLevel: '향상된 VS 3단계',
        purpose: '일반적인 다이어그램을 피하는 차별화된 학술 시각화 생성',
        triggers: {
          en: ['conceptual framework', 'visualize framework', 'framework diagram', 'visual model'],
          ko: ['개념적 프레임워크', '프레임워크 시각화', '모형 다이어그램'],
        },
        capabilities: [
          'Mermaid 다이어그램 생성',
          '변수 관계 매핑',
          '매개/조절 모델',
          '프로세스 흐름도',
          '이론-가설 시각적 변환',
        ],
        vsProcess: '1단계: 프레임워크 복잡성 이해 | 2단계: 레이아웃 대안 생성 | 3단계: 차별화된 시각적 옵션 제시',
        example: {
          input: '"AI 챗봇 → 메타인지 → 학습 성과"',
          output: 'Mermaid 순서도: AI 챗봇 기능 → 메타인지 전략(매개자) → 학습 성과 | 조절 변수 포함: 사전 지식, 자기효능감',
        },
      },
    ],

    checkpointTitle: '체크포인트 통합',
    checkpointDescription: '기초 에이전트는 중요한 결정 지점을 강제합니다:',
    checkpoints: [
      { id: 'CP_RESEARCH_DIRECTION', level: 'REQUIRED', agent: 'A1', description: '연구 질문 확정, VS 대안 제시됨' },
      { id: 'CP_THEORY_SELECTION', level: 'REQUIRED', agent: 'A2', description: 'VS 옵션에서 이론적 프레임워크 선택됨' },
      { id: 'CP_PARADIGM_SELECTION', level: 'REQUIRED', agent: 'A5', description: '패러다임 확인됨 (양적/질적/혼합)' },
      { id: 'CP_METHODOLOGY_APPROVAL', level: 'REQUIRED', agent: 'A4', description: '윤리 검토 완료, IRB 준비됨' },
      { id: 'CP_VISUALIZATION_PREFERENCE', level: 'OPTIONAL', agent: 'A6', description: '시각적 형식 선택됨' },
    ],

    vsTitle: '작동 중인 Verbalized Sampling (VS)',
    vsDescription: '기초 에이전트는 모드 붕괴를 방지하기 위해 VS를 사용합니다:',
    vsStages: [
      { stage: 1, name: '모달 인식', description: '예측 가능한 권장사항 식별 (T > 0.8)' },
      { stage: 2, name: '발산적 탐색', description: 'T-점수 스펙트럼에 걸쳐 대안 생성' },
      { stage: 3, name: '인간 선택', description: '옵션 제시, 결정 대기' },
      { stage: 4, name: '정교화', description: '선택된 방향 개발' },
      { stage: 5, name: '검증', description: '방어 가능성 및 엄격성 보장' },
    ],

    workflowTitle: '일반적인 연구 기초 워크플로',
    workflowSteps: [
      { agent: 'A1', action: '연구 질문 정제', checkpoint: 'CP_RESEARCH_DIRECTION', parallel: false },
      { agent: 'A5', action: '패러다임 선택', checkpoint: 'CP_PARADIGM_SELECTION', parallel: false },
      { agent: 'A2 + A3', action: '이론 개발 + 비판', checkpoint: 'CP_THEORY_SELECTION', parallel: true },
      { agent: 'A6', action: '프레임워크 시각화', checkpoint: 'CP_VISUALIZATION_PREFERENCE', parallel: false },
      { agent: 'A4', action: '윤리 검토', checkpoint: 'CP_METHODOLOGY_APPROVAL', parallel: false },
    ],

    ctaTitle: '강력한 연구 기초 구축',
    ctaDescription: '이론적 및 윤리적 엄격성을 확립하기 위해 카테고리 A 에이전트로 시작하세요.',
    ctaButton: '카테고리 B 탐색: 증거',
  },
};

// Icon mapping
const agentIcons: Record<string, React.ReactNode> = {
  lightbulb: <Lightbulb className="h-6 w-6" />,
  network: <Network className="h-6 w-6" />,
  shieldAlert: <ShieldAlert className="h-6 w-6" />,
  scale: <Scale className="h-6 w-6" />,
  compass: <Compass className="h-6 w-6" />,
};

const checkpointIcons: Record<string, React.ReactNode> = {
  REQUIRED: <AlertCircle className="h-4 w-4" />,
  OPTIONAL: <CheckCircle2 className="h-4 w-4" />,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } as any },
};

export default function FoundationAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/agents`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(255, 107, 107, 0.15) 0%, transparent 50%)',
            }}
          />

          <div
            className="inline-flex h-16 w-16 items-center justify-center border mb-6 relative z-10"
            style={{
              backgroundColor: 'rgba(255, 107, 107, 0.15)',
              borderColor: 'rgba(255, 107, 107, 0.3)',
              color: '#ff6b6b',
            }}
          >
            <Brain className="h-8 w-8" />
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#ff6b6b' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>

          {/* Core Principle */}
          <div
            className="mt-8 p-6 border inline-block relative z-10"
            style={{
              backgroundColor: 'rgba(255, 107, 107, 0.1)',
              borderColor: 'rgba(255, 107, 107, 0.2)',
            }}
          >
            <p className="text-sm uppercase tracking-wider text-stellar-faint mb-2">{t.principleTitle}</p>
            <p className="text-body font-medium text-stellar-core">{t.principleText}</p>
          </div>
        </motion.div>

        <div className="void-divider-glow mb-16" />

        {/* Agents */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 mb-16"
        >
          {t.agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              variants={itemVariants}
              className="p-8 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden group"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${agent.color}15 0%, transparent 50%)`,
                }}
              />

              {/* Agent header */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center border"
                    style={{
                      backgroundColor: `${agent.color}15`,
                      borderColor: `${agent.color}30`,
                      color: agent.color,
                    }}
                  >
                    {agentIcons[agent.icon]}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="void-heading-3 text-stellar-core">{agent.name}</h3>
                      <div
                        className="px-3 py-1 font-mono text-xs font-bold border"
                        style={{
                          color: agent.color,
                          borderColor: `${agent.color}30`,
                          backgroundColor: `${agent.color}10`,
                        }}
                      >
                        {agent.id}
                      </div>
                    </div>
                    <p className="text-body text-stellar-dim">{agent.purpose}</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-col items-end gap-2">
                  <div
                    className="px-3 py-1 font-mono text-xs uppercase tracking-wider border"
                    style={{
                      color: agent.tier === 'HIGH' ? '#9b59b6' : '#45b7d1',
                      borderColor: agent.tier === 'HIGH' ? 'rgba(155, 89, 182, 0.3)' : 'rgba(69, 183, 209, 0.3)',
                      backgroundColor: agent.tier === 'HIGH' ? 'rgba(155, 89, 182, 0.1)' : 'rgba(69, 183, 209, 0.1)',
                    }}
                  >
                    {agent.tier} • {agent.model}
                  </div>
                  <div
                    className="px-3 py-1 font-mono text-xs border"
                    style={{
                      color: '#44ffaa',
                      borderColor: 'rgba(68, 255, 170, 0.3)',
                      backgroundColor: 'rgba(68, 255, 170, 0.1)',
                    }}
                  >
                    {agent.vsLevel}
                  </div>
                  {agent.checkpoint !== 'None' && agent.checkpoint !== '없음' && (
                    <div
                      className="flex items-center gap-2 px-3 py-1 font-mono text-xs border"
                      style={{
                        color: agent.checkpointLevel === 'REQUIRED' ? '#ff6b6b' : '#f39c12',
                        borderColor: agent.checkpointLevel === 'REQUIRED' ? 'rgba(255, 107, 107, 0.3)' : 'rgba(243, 156, 18, 0.3)',
                        backgroundColor: agent.checkpointLevel === 'REQUIRED' ? 'rgba(255, 107, 107, 0.1)' : 'rgba(243, 156, 18, 0.1)',
                      }}
                    >
                      {checkpointIcons[agent.checkpointLevel]}
                      <span>{agent.checkpoint}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Capabilities */}
              <div className="mb-6 relative z-10">
                <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                  {locale === 'ko' ? '역량' : 'Capabilities'}
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {agent.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                      <span className="text-stellar-core mt-1">•</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* VS Process */}
              <div className="mb-6 p-4 bg-void-deep/50 border border-stellar-faint/10 relative z-10">
                <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-2">
                  {locale === 'ko' ? 'VS 프로세스' : 'VS Process'}
                </h4>
                <p className="text-sm text-stellar-bright">{agent.vsProcess}</p>
              </div>

              {/* Example */}
              <div className="relative z-10">
                <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                  {locale === 'ko' ? '예시' : 'Example'}
                </h4>
                <div className="void-terminal overflow-hidden">
                  <div className="void-terminal-header">
                    <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                    <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                    <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                    <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                      {locale === 'ko' ? '입력' : 'Input'}
                    </span>
                  </div>
                  <div className="p-4 text-sm text-stellar-bright font-mono">
                    {agent.example.input}
                  </div>
                </div>
                <div className="void-terminal overflow-hidden mt-3">
                  <div className="void-terminal-header">
                    <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                    <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                    <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                    <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                      {locale === 'ko' ? '출력' : 'Output'}
                    </span>
                  </div>
                  <div className="p-4 text-sm text-stellar-bright font-mono whitespace-pre-wrap">
                    {agent.example.output}
                  </div>
                </div>
              </div>

              {/* Triggers */}
              <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                <span className="text-xs text-stellar-faint uppercase tracking-wider">
                  {locale === 'ko' ? '트리거:' : 'Triggers:'}
                </span>
                {agent.triggers.en.map((trigger, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-mono border"
                    style={{
                      color: agent.color,
                      borderColor: `${agent.color}30`,
                      backgroundColor: `${agent.color}08`,
                    }}
                  >
                    {trigger}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* Checkpoint Integration */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(255, 107, 107, 0.15)' }}
            >
              <AlertCircle className="h-5 w-5" style={{ color: '#ff6b6b' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.checkpointTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.checkpointDescription}</p>

          <div className="space-y-3">
            {t.checkpoints.map((cp, index) => (
              <motion.div
                key={cp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border"
                  style={{
                    color: cp.level === 'REQUIRED' ? '#ff6b6b' : '#f39c12',
                    borderColor: cp.level === 'REQUIRED' ? 'rgba(255, 107, 107, 0.3)' : 'rgba(243, 156, 18, 0.3)',
                    backgroundColor: cp.level === 'REQUIRED' ? 'rgba(255, 107, 107, 0.1)' : 'rgba(243, 156, 18, 0.1)',
                  }}
                >
                  {checkpointIcons[cp.level]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-mono font-bold text-stellar-core">{cp.id}</h3>
                    <span
                      className="px-2 py-0.5 text-xs font-mono border"
                      style={{
                        color: '#44ffaa',
                        borderColor: 'rgba(68, 255, 170, 0.3)',
                        backgroundColor: 'rgba(68, 255, 170, 0.1)',
                      }}
                    >
                      {cp.agent}
                    </span>
                  </div>
                  <p className="text-sm text-stellar-dim">{cp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* VS Stages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.vsTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.vsDescription}</p>

          <div className="grid gap-4 sm:grid-cols-5">
            {t.vsStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-void-elevated border border-stellar-faint/10 text-center"
              >
                <div
                  className="inline-flex h-10 w-10 items-center justify-center border mb-3 font-mono font-bold"
                  style={{
                    color: '#44ffaa',
                    borderColor: 'rgba(68, 255, 170, 0.3)',
                    backgroundColor: 'rgba(68, 255, 170, 0.1)',
                  }}
                >
                  {stage.stage}
                </div>
                <h3 className="text-sm font-bold text-stellar-core mb-2">{stage.name}</h3>
                <p className="text-xs text-stellar-dim">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Workflow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)' }}
            >
              <Clock className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.workflowTitle}</h2>
          </div>

          <div className="space-y-3">
            {t.workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center border font-mono font-bold text-sm"
                  style={{
                    color: '#44ffaa',
                    borderColor: 'rgba(68, 255, 170, 0.3)',
                    backgroundColor: 'rgba(68, 255, 170, 0.1)',
                  }}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono font-bold text-stellar-core">{step.agent}</span>
                    {step.parallel && (
                      <span
                        className="px-2 py-0.5 text-xs font-mono border"
                        style={{
                          color: '#22ccff',
                          borderColor: 'rgba(34, 204, 255, 0.3)',
                          backgroundColor: 'rgba(34, 204, 255, 0.1)',
                        }}
                      >
                        {locale === 'ko' ? '병렬' : 'Parallel'}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-stellar-dim">{step.action}</p>
                </div>
                <div
                  className="px-3 py-1 text-xs font-mono border"
                  style={{
                    color: '#ff6b6b',
                    borderColor: 'rgba(255, 107, 107, 0.3)',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                  }}
                >
                  {step.checkpoint}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(68, 255, 170, 0.15) 100%)',
              borderColor: 'rgba(255, 107, 107, 0.3)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <Link
              href={`/${locale}/docs/agents/evidence`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.ctaButton}
              <Brain className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
