'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Users,
  MessageSquare,
  Eye,
  ClipboardList,
  AlertCircle,
  CheckCircle2,
  Clock,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Agents',
    title: 'Category D: Data Collection Agents',
    subtitle: 'Comprehensive data collection strategy and instrument development',
    description: 'Data Collection agents provide structured guidance for sampling, interviews, observations, and measurement. They adapt protocols to your research paradigm while maintaining methodological rigor.',

    // Core principle
    principleTitle: 'Core Principle',
    principleText: 'Structured but adaptive protocols across quantitative, qualitative, and mixed paradigms',

    // Agents
    agents: [
      {
        id: 'D1',
        name: 'Sampling Strategy Advisor',
        icon: 'users',
        color: '#9b59b6',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'Light VS (Modal awareness)',
        purpose: 'Design probability and non-probability sampling strategies with sample size justification',
        triggers: {
          en: ['sampling', 'sample size', 'participant recruitment', 'G*Power', 'power analysis'],
          ko: ['표집', '표본 크기', '샘플링', '참가자 모집', '검정력'],
        },
        capabilities: [
          'Probability sampling (simple random, stratified, cluster, systematic)',
          'Non-probability sampling (convenience, purposive, snowball, quota)',
          'Theoretical sampling for grounded theory',
          'Sample size calculation (G*Power, saturation assessment)',
          'Recruitment strategy design',
        ],
        vsProcess: 'Identifies modal sampling approaches, presents alternatives with rationale',
        example: {
          input: '"Need 200 participants for survey study"',
          output: 'Direction A (T≈0.6): Stratified random sampling by institution type | Direction B (T≈0.4): Two-stage cluster sampling (schools → students) | Direction C (T<0.3): Adaptive sampling with network referrals',
        },
      },
      {
        id: 'D2',
        name: 'Interview & Focus Group Specialist',
        icon: 'messageSquare',
        color: '#8e44ad',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'Light VS (Modal awareness)',
        purpose: 'Develop interview protocols, probing strategies, and transcription guidance',
        triggers: {
          en: ['interview', 'focus group', 'interview protocol', 'semi-structured', 'probing'],
          ko: ['인터뷰', '면담', '포커스 그룹', '반구조화', '심층면담'],
        },
        capabilities: [
          'Interview protocol development (structured, semi-structured, unstructured)',
          'Focus group moderation guides',
          'Probing and follow-up question strategies',
          'Transcription protocols (verbatim, intelligent verbatim)',
          'Member checking procedures',
        ],
        vsProcess: 'Suggests protocol variations based on paradigm (phenomenology, grounded theory, etc.)',
        example: {
          input: '"Interview protocol for teacher AI experiences"',
          output: 'Opening: "Tell me about your first encounter with AI tools" | Main: "Describe a moment when AI changed your teaching practice" | Probing: "What did that feel like?" "What happened next?" | Closing: "What haven\'t I asked that you think is important?"',
        },
      },
      {
        id: 'D3',
        name: 'Observation Protocol Designer',
        icon: 'eye',
        color: '#7d3c98',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'None',
        purpose: 'Design structured observation protocols, field notes, and video analysis coding schemes',
        triggers: {
          en: ['observation', 'field notes', 'participant observation', 'video analysis', 'ethnography'],
          ko: ['관찰', '현장노트', '참여관찰', '비디오 분석', '민족지'],
        },
        capabilities: [
          'Structured observation protocols with coding schemes',
          'Field note templates (descriptive, reflective, analytic)',
          'Video analysis frameworks (interaction analysis, conversation analysis)',
          'Observer training procedures',
          'Inter-rater reliability protocols',
        ],
        vsProcess: 'Direct protocol generation based on research context',
        example: {
          input: '"Observe classroom AI tool usage"',
          output: 'Time sampling: 5-min intervals | Categories: Tool type, Task type, Student engagement, Teacher support | Field notes: Descriptive (what happened), Reflective (observer thoughts), Analytic (patterns, themes)',
        },
      },
      {
        id: 'D4',
        name: 'Measurement Instrument Developer',
        icon: 'clipboardList',
        color: '#6c3483',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_METHODOLOGY_APPROVAL',
        checkpointLevel: 'REQUIRED',
        vsLevel: 'Enhanced VS 3-Phase',
        purpose: 'Construct scales, validate instruments, and provide reliability/validity evidence',
        triggers: {
          en: ['instrument', 'scale development', 'measurement', 'validity', 'reliability', 'Likert scale'],
          ko: ['측정도구', '척도 개발', '도구 타당화', '신뢰도', '타당도', '리커트'],
        },
        capabilities: [
          'Scale construction (item generation, response formats)',
          'Content validity (expert review, CVI calculation)',
          'Construct validity (EFA, CFA, known-groups)',
          'Reliability testing (Cronbach\'s α, test-retest, inter-rater)',
          'Measurement invariance testing',
        ],
        vsProcess: 'Stage 1: Identify modal scales | Stage 2: Present adaptation vs. new scale options | Stage 3: Human decision',
        example: {
          input: '"Measure AI self-efficacy in teachers"',
          output: '🔴 CHECKPOINT: CP_METHODOLOGY_APPROVAL | Option A: Adapt Computer Self-Efficacy Scale | Option B: New AI-Teaching Self-Efficacy Scale (5 dimensions: Technical, Pedagogical, Ethical, Assessment, Professional) | Validation: Content (10 experts), Construct (EFA→CFA), Reliability (α, test-retest)',
        },
      },
    ],

    // Additional sections
    paradigmCoverage: 'Paradigm Coverage',
    paradigmText: 'Quantitative (D1, D4), Qualitative (D2, D3), Mixed (all agents adapt)',

    integrationTitle: 'Integration with Other Categories',
    integrationPoints: [
      'Category C (Design): D1 informed by C1/C2/C3 research design',
      'Category E (Analysis): D4 validity evidence feeds E1 statistical analysis',
      'Category F (Quality): D2/D3 protocols reviewed by F4 for trustworthiness',
      'Category A (Foundation): D4 instrument alignment with A2 theoretical framework',
    ],

    checkpointInfo: 'Checkpoint Information',
    checkpointText: 'D4 (Measurement Instrument Developer) requires CP_METHODOLOGY_APPROVAL (🔴 REQUIRED) before scale construction to ensure alignment with research design and theoretical framework.',

    bestPractices: 'Best Practices',
    practices: [
      'Sample size justification: Always provide power analysis (quant) or saturation rationale (qual)',
      'Protocol pilot testing: Test interview/observation protocols with 2-3 participants before full data collection',
      'Instrument validation: Minimum evidence = content validity + internal consistency',
      'Ethical considerations: All protocols reviewed by D1-D4 must address informed consent, privacy, and data security',
    ],

    autoTrigger: 'Auto-Trigger Examples',
    autoTriggerExamples: [
      {
        userInput: '"I need to interview 20 teachers about AI adoption"',
        detected: 'Keywords: "interview", "20 teachers" → Triggers D2 (Interview Specialist) + D1 (Sampling)',
        execution: 'D2 develops semi-structured protocol → D1 suggests purposive sampling strategy',
      },
      {
        userInput: '"Create a scale to measure student motivation in AI-assisted learning"',
        detected: 'Keywords: "scale", "measure" → Triggers D4 (Instrument Developer)',
        execution: '🔴 CP_METHODOLOGY_APPROVAL → D4 presents: Adapt existing (AMS) vs. New scale → Human decision',
      },
    ],
  },
  ko: {
    back: '에이전트로 돌아가기',
    title: '카테고리 D: 자료 수집 에이전트',
    subtitle: '포괄적 자료 수집 전략 및 측정도구 개발',
    description: '자료 수집 에이전트는 표집, 면담, 관찰, 측정에 대한 구조화된 가이드를 제공합니다. 방법론적 엄격성을 유지하면서 연구 패러다임에 맞게 프로토콜을 조정합니다.',

    principleTitle: '핵심 원칙',
    principleText: '양적, 질적, 혼합 패러다임 전반에 걸친 구조화되고 적응적인 프로토콜',

    agents: [
      {
        id: 'D1',
        name: '표집 전략 자문',
        icon: 'users',
        color: '#9b59b6',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'Light VS (모달 인식)',
        purpose: '표본 크기 정당화와 함께 확률 및 비확률 표집 전략 설계',
        triggers: {
          en: ['sampling', 'sample size', 'participant recruitment', 'G*Power', 'power analysis'],
          ko: ['표집', '표본 크기', '샘플링', '참가자 모집', '검정력'],
        },
        capabilities: [
          '확률 표집 (단순무선, 층화, 군집, 체계적)',
          '비확률 표집 (편의, 목적적, 눈덩이, 할당)',
          '근거이론을 위한 이론적 표집',
          '표본 크기 계산 (G*Power, 포화도 평가)',
          '모집 전략 설계',
        ],
        vsProcess: '모달 표집 접근법을 식별하고 근거와 함께 대안 제시',
        example: {
          input: '"설문 연구를 위해 200명의 참가자가 필요해요"',
          output: '방향 A (T≈0.6): 기관 유형별 층화 무선 표집 | 방향 B (T≈0.4): 2단계 군집 표집 (학교 → 학생) | 방향 C (T<0.3): 네트워크 추천을 활용한 적응적 표집',
        },
      },
      {
        id: 'D2',
        name: '면담 및 포커스 그룹 전문가',
        icon: 'messageSquare',
        color: '#8e44ad',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'Light VS (모달 인식)',
        purpose: '면담 프로토콜, 심화 질문 전략, 전사 가이드 개발',
        triggers: {
          en: ['interview', 'focus group', 'interview protocol', 'semi-structured', 'probing'],
          ko: ['인터뷰', '면담', '포커스 그룹', '반구조화', '심층면담'],
        },
        capabilities: [
          '면담 프로토콜 개발 (구조화, 반구조화, 비구조화)',
          '포커스 그룹 진행 가이드',
          '심화 질문 및 후속 질문 전략',
          '전사 프로토콜 (축어적, 지능형 축어적)',
          '멤버 체킹 절차',
        ],
        vsProcess: '패러다임(현상학, 근거이론 등)에 따라 프로토콜 변형 제안',
        example: {
          input: '"교사의 AI 경험에 대한 면담 프로토콜"',
          output: '도입: "AI 도구를 처음 접했을 때를 이야기해 주세요" | 본론: "AI가 수업 실천을 바꾼 순간을 설명해 주세요" | 심화: "그때 어떤 느낌이었나요?" "그 다음엔 무슨 일이?" | 마무리: "제가 묻지 않았지만 중요하다고 생각하는 것이 있나요?"',
        },
      },
      {
        id: 'D3',
        name: '관찰 프로토콜 설계자',
        icon: 'eye',
        color: '#7d3c98',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'None',
        purpose: '구조화된 관찰 프로토콜, 현장노트, 비디오 분석 코딩 체계 설계',
        triggers: {
          en: ['observation', 'field notes', 'participant observation', 'video analysis', 'ethnography'],
          ko: ['관찰', '현장노트', '참여관찰', '비디오 분석', '민족지'],
        },
        capabilities: [
          '코딩 체계를 갖춘 구조화된 관찰 프로토콜',
          '현장노트 템플릿 (기술적, 성찰적, 분석적)',
          '비디오 분석 프레임워크 (상호작용 분석, 대화 분석)',
          '관찰자 훈련 절차',
          '평가자 간 신뢰도 프로토콜',
        ],
        vsProcess: '연구 맥락에 기반한 직접 프로토콜 생성',
        example: {
          input: '"교실에서 AI 도구 사용 관찰"',
          output: '시간 표집: 5분 간격 | 범주: 도구 유형, 과제 유형, 학생 참여, 교사 지원 | 현장노트: 기술적(무슨 일이 일어났는지), 성찰적(관찰자 생각), 분석적(패턴, 주제)',
        },
      },
      {
        id: 'D4',
        name: '측정도구 개발자',
        icon: 'clipboardList',
        color: '#6c3483',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_METHODOLOGY_APPROVAL',
        checkpointLevel: 'REQUIRED',
        vsLevel: 'Enhanced VS 3-Phase',
        purpose: '척도 구성, 도구 타당화, 신뢰도/타당도 증거 제공',
        triggers: {
          en: ['instrument', 'scale development', 'measurement', 'validity', 'reliability', 'Likert scale'],
          ko: ['측정도구', '척도 개발', '도구 타당화', '신뢰도', '타당도', '리커트'],
        },
        capabilities: [
          '척도 구성 (문항 생성, 응답 형식)',
          '내용 타당도 (전문가 검토, CVI 계산)',
          '구성 타당도 (EFA, CFA, 알려진 집단)',
          '신뢰도 검사 (Cronbach α, 검사-재검사, 평가자 간)',
          '측정 불변성 검사',
        ],
        vsProcess: '1단계: 모달 척도 식별 | 2단계: 적응 vs. 신규 척도 옵션 제시 | 3단계: 인간 결정',
        example: {
          input: '"교사의 AI 자기효능감 측정"',
          output: '🔴 체크포인트: CP_METHODOLOGY_APPROVAL | 옵션 A: 컴퓨터 자기효능감 척도 적응 | 옵션 B: 신규 AI-교수 자기효능감 척도 (5개 차원: 기술적, 교육학적, 윤리적, 평가, 전문성) | 타당화: 내용(전문가 10명), 구성(EFA→CFA), 신뢰도(α, 검사-재검사)',
        },
      },
    ],

    paradigmCoverage: '패러다임 적용 범위',
    paradigmText: '양적 (D1, D4), 질적 (D2, D3), 혼합 (모든 에이전트 적응)',

    integrationTitle: '다른 카테고리와의 통합',
    integrationPoints: [
      '카테고리 C (설계): D1은 C1/C2/C3 연구설계에 의해 정보 제공',
      '카테고리 E (분석): D4 타당도 증거가 E1 통계 분석에 피드',
      '카테고리 F (품질): D2/D3 프로토콜은 F4에 의해 신뢰성 검토',
      '카테고리 A (기초): D4 도구가 A2 이론적 프레임워크와 정렬',
    ],

    checkpointInfo: '체크포인트 정보',
    checkpointText: 'D4 (측정도구 개발자)는 연구 설계 및 이론적 프레임워크와의 정렬을 보장하기 위해 척도 구성 전에 CP_METHODOLOGY_APPROVAL (🔴 필수)이 필요합니다.',

    bestPractices: '모범 사례',
    practices: [
      '표본 크기 정당화: 항상 검정력 분석(양적) 또는 포화 근거(질적) 제공',
      '프로토콜 파일럿 테스트: 전체 자료 수집 전 2-3명 참가자와 면담/관찰 프로토콜 테스트',
      '도구 타당화: 최소 증거 = 내용 타당도 + 내적 일관성',
      '윤리적 고려사항: D1-D4가 검토한 모든 프로토콜은 동의, 개인정보, 데이터 보안을 다뤄야 함',
    ],

    autoTrigger: '자동 트리거 예시',
    autoTriggerExamples: [
      {
        userInput: '"AI 채택에 대해 20명의 교사를 면담해야 해요"',
        detected: '키워드: "면담", "20명의 교사" → D2 (면담 전문가) + D1 (표집) 트리거',
        execution: 'D2가 반구조화 프로토콜 개발 → D1이 목적적 표집 전략 제안',
      },
      {
        userInput: '"AI 보조 학습에서 학생 동기를 측정하는 척도 만들기"',
        detected: '키워드: "척도", "측정" → D4 (도구 개발자) 트리거',
        execution: '🔴 CP_METHODOLOGY_APPROVAL → D4가 제시: 기존 척도 적응(AMS) vs. 신규 척도 → 인간 결정',
      },
    ],
  },
};

const iconMap = {
  users: Users,
  messageSquare: MessageSquare,
  eye: Eye,
  clipboardList: ClipboardList,
  alertCircle: AlertCircle,
  checkCircle2: CheckCircle2,
  clock: Clock,
};

export default function CollectionAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-black text-void-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back button */}
        <Link
          href={`/${locale}/docs/agents`}
          className="inline-flex items-center gap-2 text-void-gray-400 hover:text-void-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-block px-3 py-1 bg-[#9b59b6]/20 text-[#9b59b6] rounded-full text-sm mb-4">
            Category D
          </div>
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-void-gray-400 mb-6">{t.subtitle}</p>
          <p className="text-void-gray-300 leading-relaxed">{t.description}</p>
        </motion.div>

        {/* Core Principle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-void-gray-900 border border-void-gray-800 rounded-lg p-6 mb-12"
        >
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#9b59b6]" />
            {t.principleTitle}
          </h2>
          <p className="text-void-gray-300">{t.principleText}</p>
        </motion.div>

        {/* Agents */}
        <div className="space-y-8 mb-12">
          {t.agents.map((agent, index) => {
            const Icon = iconMap[agent.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-void-gray-900 border border-void-gray-800 rounded-lg overflow-hidden hover:border-[#9b59b6]/50 transition-colors"
              >
                {/* Agent header */}
                <div className="p-6 border-b border-void-gray-800">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${agent.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: agent.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-semibold">{agent.name}</h3>
                        <span className="px-2 py-1 bg-void-gray-800 text-void-gray-400 rounded text-xs">
                          {agent.id}
                        </span>
                      </div>
                      <p className="text-void-gray-300 mb-4">{agent.purpose}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                          {agent.model}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                          {agent.tier}
                        </span>
                        {agent.checkpoint !== 'None' && (
                          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                            🔴 {agent.checkpoint}
                          </span>
                        )}
                        <span className="px-3 py-1 bg-void-gray-800 text-void-gray-400 rounded-full text-sm">
                          {agent.vsLevel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Agent details */}
                <div className="p-6 space-y-4">
                  {/* Triggers */}
                  <div>
                    <h4 className="text-sm font-semibold text-void-gray-400 mb-2">
                      {locale === 'en' ? 'Trigger Keywords' : '트리거 키워드'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.triggers.en.map((trigger, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-void-gray-800 text-void-gray-300 rounded text-sm"
                        >
                          {trigger}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <h4 className="text-sm font-semibold text-void-gray-400 mb-2">
                      {locale === 'en' ? 'Capabilities' : '기능'}
                    </h4>
                    <ul className="space-y-1">
                      {agent.capabilities.map((cap, i) => (
                        <li key={i} className="text-void-gray-300 text-sm flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#9b59b6] mt-0.5 flex-shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* VS Process */}
                  <div>
                    <h4 className="text-sm font-semibold text-void-gray-400 mb-2">
                      {locale === 'en' ? 'VS Process' : 'VS 프로세스'}
                    </h4>
                    <p className="text-void-gray-300 text-sm">{agent.vsProcess}</p>
                  </div>

                  {/* Example */}
                  <div className="bg-void-gray-950 rounded p-4">
                    <h4 className="text-sm font-semibold text-void-gray-400 mb-2">
                      {locale === 'en' ? 'Example' : '예시'}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-void-gray-500">Input:</span>{' '}
                        <span className="text-void-gray-300">{agent.example.input}</span>
                      </div>
                      <div>
                        <span className="text-void-gray-500">Output:</span>{' '}
                        <span className="text-void-gray-300">{agent.example.output}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Paradigm Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-void-gray-900 border border-void-gray-800 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-3">{t.paradigmCoverage}</h2>
          <p className="text-void-gray-300">{t.paradigmText}</p>
        </motion.div>

        {/* Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-void-gray-900 border border-void-gray-800 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">{t.integrationTitle}</h2>
          <ul className="space-y-2">
            {t.integrationPoints.map((point, i) => (
              <li key={i} className="text-void-gray-300 text-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9b59b6] mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Checkpoint Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-400" />
            {t.checkpointInfo}
          </h2>
          <p className="text-void-gray-300">{t.checkpointText}</p>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-void-gray-900 border border-void-gray-800 rounded-lg p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">{t.bestPractices}</h2>
          <ul className="space-y-2">
            {t.practices.map((practice, i) => (
              <li key={i} className="text-void-gray-300 text-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#9b59b6] mt-0.5 flex-shrink-0" />
                <span>{practice}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Auto-Trigger Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-void-gray-900 border border-void-gray-800 rounded-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-4">{t.autoTrigger}</h2>
          <div className="space-y-4">
            {t.autoTriggerExamples.map((example, i) => (
              <div key={i} className="bg-void-gray-950 rounded p-4">
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-void-gray-500">
                      {locale === 'en' ? 'User Input:' : '사용자 입력:'}
                    </span>{' '}
                    <span className="text-void-gray-300">{example.userInput}</span>
                  </div>
                  <div>
                    <span className="text-void-gray-500">
                      {locale === 'en' ? 'Detected:' : '감지됨:'}
                    </span>{' '}
                    <span className="text-yellow-400">{example.detected}</span>
                  </div>
                  <div>
                    <span className="text-void-gray-500">
                      {locale === 'en' ? 'Execution:' : '실행:'}
                    </span>{' '}
                    <span className="text-void-gray-300">{example.execution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
