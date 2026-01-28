"use client";

import { useState, useEffect, useCallback } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, CheckCircle2, XCircle, HelpCircle, Sparkles, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

// ==================== EXISTING DEMOS DATA ====================

const demos = [
  {
    id: 'theory-selection',
    title: { en: 'Theory Selection', ko: '이론 선택' },
    input: { en: 'Help me choose a theoretical framework for AI adoption in education', ko: 'AI 교육 채택을 위한 이론적 프레임워크를 선택해주세요' },
    agent: 'A2',
    output: {
      en: `🔴 CHECKPOINT: CP_THEORY_SELECTION

Let me analyze options across the typicality spectrum:

**[Modal Awareness]**
TAM (T=0.92) and UTAUT (T=0.85) are predictable choices that most researchers default to.

**Recommended Alternatives:**

• **Direction A** (T≈0.6): Self-Determination Theory × TAM Integration
  - Adds intrinsic motivation dimensions
  - Addresses "why" not just "will they"

• **Direction B** (T≈0.4): Cognitive Load Theory + Adaptive Ecosystem ⭐
  - Novel for AI adoption context
  - Explains learning-adoption interaction

• **Direction C** (T≈0.2): Neuroplasticity-Based Technology Learning
  - Highly innovative, requires strong justification
  - Opens new research directions

Which direction would you like to proceed?`,
      ko: `🔴 체크포인트: CP_THEORY_SELECTION

전형성 스펙트럼을 가로지르는 옵션을 분석하겠습니다:

**[모달 인식]**
TAM (T=0.92)과 UTAUT (T=0.85)는 대부분의 연구자가 기본으로 선택하는 예측 가능한 선택입니다.

**권장 대안:**

• **방향 A** (T≈0.6): 자기결정이론 × TAM 통합
  - 내재적 동기 차원 추가
  - "할 것인가" 뿐만 아니라 "왜"를 다룸

• **방향 B** (T≈0.4): 인지부하이론 + 적응적 생태계 ⭐
  - AI 채택 맥락에서 새로움
  - 학습-채택 상호작용 설명

• **방향 C** (T≈0.2): 신경가소성 기반 기술 학습
  - 매우 혁신적, 강력한 정당화 필요
  - 새로운 연구 방향 개척

어떤 방향으로 진행하시겠습니까?`
    }
  },
  {
    id: 'meta-analysis',
    title: { en: 'Meta-Analysis Setup', ko: '메타분석 설정' },
    input: { en: 'I want to conduct a meta-analysis on AI-assisted learning', ko: 'AI 지원 학습에 대한 메타분석을 수행하고 싶습니다' },
    agent: 'C5',
    output: {
      en: `🎛️ META-ANALYSIS MASTER Activated

**Paradigm Detected:** Quantitative Meta-Analysis
**Pipeline Initialized:** PRISMA 2020 Compliant

**Multi-Gate Validation System Ready:**
- Gate 1: Extraction Validation ⏳
- Gate 2: ES Hierarchy Classification ⏳
- Gate 3: Hedges' g Calculation ⏳
- Gate 4: Independence Validation ⏳

**Recommended Next Steps:**
1. Define inclusion/exclusion criteria
2. Select databases (Semantic Scholar, OpenAlex, arXiv recommended)
3. Design search query strategy

🔴 CHECKPOINT: CP_META_GATE

Before proceeding, I need your approval on:
- Research question scope
- Effect size of interest (learning outcomes?)
- Timeframe for included studies

Shall we refine the research question first?`,
      ko: `🎛️ 메타분석 마스터 활성화됨

**감지된 패러다임:** 양적 메타분석
**파이프라인 초기화:** PRISMA 2020 준수

**다중 게이트 검증 시스템 준비:**
- 게이트 1: 추출 검증 ⏳
- 게이트 2: ES 계층 분류 ⏳
- 게이트 3: Hedges' g 계산 ⏳
- 게이트 4: 독립성 검증 ⏳

**권장 다음 단계:**
1. 포함/제외 기준 정의
2. 데이터베이스 선택 (Semantic Scholar, OpenAlex, arXiv 권장)
3. 검색 쿼리 전략 설계

🔴 체크포인트: CP_META_GATE

진행하기 전에 다음에 대한 승인이 필요합니다:
- 연구 질문 범위
- 관심 효과크기 (학습 성과?)
- 포함 연구의 시간 범위

먼저 연구 질문을 정제할까요?`
    }
  },
  {
    id: 'qualitative-design',
    title: { en: 'Qualitative Design', ko: '질적 연구 설계' },
    input: { en: 'I want to study the lived experiences of teachers using AI tools', ko: '교사들의 AI 도구 사용 체험을 연구하고 싶습니다' },
    agent: 'C2',
    output: {
      en: `🎭 QUALITATIVE DESIGN CONSULTANT Activated

**Paradigm Detected:** Qualitative (Phenomenological indicators)
**Key Phrase:** "lived experiences" → Phenomenology likely fit

**VS Analysis of Methodological Options:**

• **Direction A** (T≈0.7): Descriptive Phenomenology (Husserl)
  - Classic approach, well-documented
  - Focus on essence of experience

• **Direction B** (T≈0.5): Interpretive Phenomenological Analysis (IPA) ⭐
  - Balances description and interpretation
  - Growing acceptance in education research

• **Direction C** (T≈0.3): Post-Intentional Phenomenology
  - More philosophical depth
  - Requires strong methodological justification

🔴 CHECKPOINT: CP_METHODOLOGY_APPROVAL

Before we proceed, I recommend consulting A5-ParadigmWorldviewAdvisor to ensure your philosophical assumptions align with your chosen method.

Which direction interests you?`,
      ko: `🎭 질적 연구 설계 컨설턴트 활성화됨

**감지된 패러다임:** 질적 연구 (현상학적 지표)
**핵심 문구:** "체험" → 현상학적 접근 적합

**방법론적 옵션의 VS 분석:**

• **방향 A** (T≈0.7): 기술적 현상학 (후설)
  - 고전적 접근, 잘 문서화됨
  - 경험의 본질에 초점

• **방향 B** (T≈0.5): 해석적 현상학적 분석 (IPA) ⭐
  - 기술과 해석의 균형
  - 교육 연구에서 수용 증가

• **방향 C** (T≈0.3): 후기의도적 현상학
  - 더 깊은 철학적 깊이
  - 강력한 방법론적 정당화 필요

🔴 체크포인트: CP_METHODOLOGY_APPROVAL

진행하기 전에, 철학적 가정이 선택한 방법과 일치하는지 확인하기 위해 A5-패러다임세계관자문자와 상담하는 것을 권장합니다.

어떤 방향이 관심 있으신가요?`
    }
  },
];

// ==================== CHECKPOINT DEMO DATA ====================

type CheckpointState = 'intro' | 'context' | 'analysis' | 'checkpoint' | 'decision-made' | 'explanation';
type DecisionType = 'approve' | 'reject' | 'explain' | null;

const checkpointContent = {
  intro: {
    en: {
      title: 'Experience Human-AI Collaboration',
      description: 'See how Diverga keeps you in control at critical research decisions. Click "Start Simulation" to begin.',
      buttonText: 'Start Simulation',
    },
    ko: {
      title: '인간-AI 협업 체험하기',
      description: 'Diverga가 중요한 연구 결정에서 어떻게 당신을 통제권에 두는지 확인하세요. "시뮬레이션 시작"을 클릭하여 시작하세요.',
      buttonText: '시뮬레이션 시작',
    },
  },
  context: {
    en: {
      userMessage: 'I want to study how AI chatbots affect language learning outcomes in higher education.',
      systemNote: 'Research context detected. Analyzing your request...',
    },
    ko: {
      userMessage: '고등교육에서 AI 챗봇이 언어 학습 성과에 어떤 영향을 미치는지 연구하고 싶습니다.',
      systemNote: '연구 맥락이 감지되었습니다. 요청을 분석 중...',
    },
  },
  analysis: {
    en: {
      agentId: 'A2-TheoryFrameworkAdvisor',
      lines: [
        '> Analyzing research question...',
        '> Detecting paradigm: Quantitative',
        '> Scanning theory database...',
        '> Calculating typicality scores...',
        '> Generating divergent options...',
      ],
    },
    ko: {
      agentId: 'A2-이론프레임워크자문자',
      lines: [
        '> 연구 질문 분석 중...',
        '> 패러다임 감지: 양적 연구',
        '> 이론 데이터베이스 스캔 중...',
        '> 전형성 점수 계산 중...',
        '> 발산적 옵션 생성 중...',
      ],
    },
  },
  checkpoint: {
    en: {
      title: 'CHECKPOINT: CP_THEORY_SELECTION',
      subtitle: 'Critical Decision Point',
      modalWarning: '[Modal Awareness] TAM (T=0.92) and UTAUT (T=0.85) are overused in this domain.',
      options: [
        {
          id: 'A',
          name: 'Self-Determination Theory + TAM',
          tscore: 0.6,
          category: 'Established',
          description: 'Adds intrinsic motivation dimensions',
          color: 'emerald',
        },
        {
          id: 'B',
          name: 'Cognitive Load Theory + Adaptive Ecosystem',
          tscore: 0.4,
          category: 'Emerging',
          recommended: true,
          description: 'Novel for AI-learning context',
          color: 'teal',
        },
        {
          id: 'C',
          name: 'Neuroplasticity-Based Learning',
          tscore: 0.2,
          category: 'Experimental',
          description: 'Highly innovative, opens new directions',
          color: 'purple',
        },
      ],
      question: 'Which theoretical direction would you like to proceed with?',
      approveText: 'Approve Direction B',
      rejectText: 'Reject All',
      explainText: 'Explain More',
    },
    ko: {
      title: '체크포인트: CP_THEORY_SELECTION',
      subtitle: '중요 결정 지점',
      modalWarning: '[모달 인식] TAM (T=0.92)과 UTAUT (T=0.85)는 이 분야에서 과다 사용됩니다.',
      options: [
        {
          id: 'A',
          name: '자기결정이론 + TAM',
          tscore: 0.6,
          category: '확립됨',
          description: '내재적 동기 차원 추가',
          color: 'emerald',
        },
        {
          id: 'B',
          name: '인지부하이론 + 적응적 생태계',
          tscore: 0.4,
          category: '신흥',
          recommended: true,
          description: 'AI-학습 맥락에서 새로움',
          color: 'teal',
        },
        {
          id: 'C',
          name: '신경가소성 기반 학습',
          tscore: 0.2,
          category: '실험적',
          description: '매우 혁신적, 새로운 방향 개척',
          color: 'purple',
        },
      ],
      question: '어떤 이론적 방향으로 진행하시겠습니까?',
      approveText: '방향 B 승인',
      rejectText: '모두 거부',
      explainText: '더 설명',
    },
  },
  responses: {
    approve: {
      en: {
        title: 'Decision Confirmed',
        message: 'Excellent choice! Direction B: Cognitive Load Theory + Adaptive Ecosystem has been selected.',
        detail: 'This framework will help explain how AI chatbots can reduce extraneous cognitive load while adapting to learner needs. I will now proceed to operationalize the constructs and suggest measurement instruments.',
        nextStep: 'Next: Variable operationalization with Agent A3-VariableDesigner',
      },
      ko: {
        title: '결정 확인됨',
        message: '훌륭한 선택입니다! 방향 B: 인지부하이론 + 적응적 생태계가 선택되었습니다.',
        detail: '이 프레임워크는 AI 챗봇이 학습자 필요에 적응하면서 외재적 인지 부하를 줄일 수 있는 방법을 설명하는 데 도움이 됩니다. 이제 구성개념을 조작화하고 측정 도구를 제안하겠습니다.',
        nextStep: '다음: 에이전트 A3-변수설계자와 변수 조작화',
      },
    },
    reject: {
      en: {
        title: 'Options Rejected',
        message: 'Understood. You have rejected all suggested directions.',
        detail: 'Let me explore alternative theoretical frameworks. Would you like me to:\n\n1. Search for theories from adjacent disciplines (psychology, neuroscience)?\n2. Analyze recent publications for emerging frameworks?\n3. Consider a multi-theory integration approach?',
        nextStep: 'Awaiting your guidance for alternative exploration',
      },
      ko: {
        title: '옵션 거부됨',
        message: '이해했습니다. 제안된 모든 방향을 거부하셨습니다.',
        detail: '대안적 이론 프레임워크를 탐색하겠습니다. 다음 중 원하시는 것을 선택해주세요:\n\n1. 인접 학문(심리학, 신경과학)에서 이론 검색?\n2. 최근 출판물에서 신흥 프레임워크 분석?\n3. 다중 이론 통합 접근 고려?',
        nextStep: '대안 탐색을 위한 안내를 기다리고 있습니다',
      },
    },
    explain: {
      en: {
        title: 'Detailed Explanation',
        message: 'Let me provide more context on these theoretical options.',
        detail: '**Direction B: Cognitive Load Theory + Adaptive Ecosystem**\n\nCognitive Load Theory (Sweller, 1988) explains how learning is affected by the demands on working memory. Combined with Adaptive Ecosystem theory, this framework:\n\n• Explains WHY some AI chatbots fail (excessive intrinsic load)\n• Predicts WHEN adaptation helps (reducing extraneous load)\n• Measures HOW learning improves (germane load optimization)\n\nT-Score of 0.4 means this approach is novel enough to contribute new knowledge while having sufficient theoretical grounding for publication.',
        nextStep: 'Ready to proceed when you make your decision',
      },
      ko: {
        title: '상세 설명',
        message: '이론적 옵션에 대한 더 많은 맥락을 제공하겠습니다.',
        detail: '**방향 B: 인지부하이론 + 적응적 생태계**\n\n인지부하이론(Sweller, 1988)은 작업 기억에 대한 요구가 학습에 어떤 영향을 미치는지 설명합니다. 적응적 생태계 이론과 결합하면 이 프레임워크는:\n\n• 일부 AI 챗봇이 왜 실패하는지 설명 (과도한 내재적 부하)\n• 적응이 언제 도움이 되는지 예측 (외재적 부하 감소)\n• 학습이 어떻게 향상되는지 측정 (관련 부하 최적화)\n\nT-점수 0.4는 이 접근법이 출판을 위한 충분한 이론적 기반을 가지면서도 새로운 지식에 기여할 만큼 충분히 새롭다는 것을 의미합니다.',
        nextStep: '결정을 내리시면 진행할 준비가 되어 있습니다',
      },
    },
  },
  educational: {
    en: {
      checkpointExplainer: 'This checkpoint ensures YOU make the critical theoretical decisions, not the AI.',
      humanCentered: 'Human-Centered AI: You remain in control of your research direction.',
      divergentThinking: 'The T-Score helps you understand how conventional or innovative each option is.',
    },
    ko: {
      checkpointExplainer: '이 체크포인트는 AI가 아닌 당신이 중요한 이론적 결정을 내리도록 보장합니다.',
      humanCentered: '인간 중심 AI: 연구 방향에 대한 통제권은 당신에게 있습니다.',
      divergentThinking: 'T-점수는 각 옵션이 얼마나 전통적인지 또는 혁신적인지 이해하는 데 도움이 됩니다.',
    },
  },
};

// ==================== TYPEWRITER HOOK ====================

function useTypewriter(text: string, speed: number = 30, startTyping: boolean = true) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!startTyping) {
      setDisplayedText('');
      setIsComplete(false);
      return;
    }

    setDisplayedText('');
    setIsComplete(false);
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, startTyping]);

  return { displayedText, isComplete };
}

// ==================== CONFETTI COMPONENT ====================

function Confetti({ show }: { show: boolean }) {
  if (!show) return null;

  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1.5 + Math.random() * 1,
    color: ['#6366f1', '#14b8a6', '#f59e0b', '#ec4899', '#8b5cf6'][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ y: -20, x: `${piece.x}vw`, opacity: 1, rotate: 0 }}
          animate={{
            y: '100vh',
            opacity: 0,
            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeOut',
          }}
          className="absolute w-3 h-3 rounded-sm"
          style={{ backgroundColor: piece.color }}
        />
      ))}
    </div>
  );
}

// ==================== CHECKPOINT DEMO COMPONENT ====================

function CheckpointDemo({ locale }: { locale: 'en' | 'ko' }) {
  const [state, setState] = useState<CheckpointState>('intro');
  const [decision, setDecision] = useState<DecisionType>(null);
  const [analysisLine, setAnalysisLine] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const content = checkpointContent;
  const analysisLines = content.analysis[locale].lines;

  // Reset function
  const resetDemo = useCallback(() => {
    setState('intro');
    setDecision(null);
    setAnalysisLine(0);
    setShowConfetti(false);
  }, []);

  // Analysis line progression
  useEffect(() => {
    if (state === 'analysis' && analysisLine < analysisLines.length) {
      const timer = setTimeout(() => {
        setAnalysisLine((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else if (state === 'analysis' && analysisLine >= analysisLines.length) {
      const timer = setTimeout(() => setState('checkpoint'), 800);
      return () => clearTimeout(timer);
    }
  }, [state, analysisLine, analysisLines.length]);

  // Handle decision
  const handleDecision = (type: DecisionType) => {
    setDecision(type);
    if (type === 'approve') {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
    if (type === 'explain') {
      setState('explanation');
    } else {
      setState('decision-made');
    }
  };

  // Proceed from intro
  const startSimulation = () => {
    setState('context');
    setTimeout(() => setState('analysis'), 2000);
  };

  const getTScoreColor = (tscore: number) => {
    if (tscore >= 0.7) return 'text-orange-400 bg-orange-500/20 border border-orange-500/40 shadow-[0_0_12px_rgba(251,146,60,0.3)]';
    if (tscore >= 0.4) return 'text-teal-400 bg-teal-500/20 border border-teal-500/40 shadow-[0_0_12px_rgba(20,184,166,0.3)]';
    if (tscore >= 0.2) return 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]';
    return 'text-purple-400 bg-purple-500/20 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.3)]';
  };

  return (
    <div className="relative">
      <Confetti show={showConfetti} />

      {/* Main Demo Container - Glass morphism */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-[0_8px_64px_rgba(0,0,0,0.5)]"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-5 py-4 bg-black/30 border-b border-white/5 backdrop-blur-xl">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"
          />
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="h-3 w-3 rounded-full bg-yellow-500 shadow-[0_0_12px_rgba(234,179,8,0.8)]"
          />
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]"
          />
          <span className="ml-4 text-xs font-mono text-gray-400">
            diverga-research-assistant
          </span>
          {state !== 'intro' && (
            <motion.button
              onClick={resetDemo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-auto flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg"
              aria-label={locale === 'ko' ? '재시작' : 'Restart'}
            >
              <RotateCcw className="h-3 w-3" />
              {locale === 'ko' ? '재시작' : 'Restart'}
            </motion.button>
          )}
        </div>

        {/* Content Area */}
        <div className="p-8 min-h-[480px] bg-gradient-to-br from-[#0f1c3e]/80 to-[#1a1f3a]/80">
          <AnimatePresence mode="wait">
            {/* INTRO STATE */}
            {state === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center h-[420px] text-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mb-8 p-6 rounded-full bg-gradient-to-br from-diverga-500/20 to-teal-500/20 backdrop-blur-xl shadow-[0_0_48px_rgba(20,184,166,0.3)]"
                >
                  <Sparkles className="h-16 w-16 text-transparent bg-gradient-to-br from-diverga-400 to-teal-400 bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                  <Sparkles className="h-16 w-16 text-teal-400" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
                >
                  {content.intro[locale].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-400 max-w-md mb-10 leading-relaxed"
                >
                  {content.intro[locale].description}
                </motion.p>
                <motion.button
                  onClick={startSimulation}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-[16px] bg-gradient-to-r from-diverga-500 to-teal-500 px-8 py-4 font-bold text-white transition-all shadow-[0_0_32px_rgba(20,184,166,0.4)] hover:shadow-[0_0_48px_rgba(20,184,166,0.6)]"
                >
                  <Play className="h-5 w-5" />
                  {content.intro[locale].buttonText}
                </motion.button>
              </motion.div>
            )}

            {/* CONTEXT STATE */}
            {state === 'context' && (
              <motion.div
                key="context"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                {/* User Message */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  >
                    U
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/10 backdrop-blur-xl rounded-[16px] px-5 py-4 max-w-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                  >
                    <p className="text-gray-100 leading-relaxed">{content.context[locale].userMessage}</p>
                  </motion.div>
                </motion.div>

                {/* System Processing */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="h-2.5 w-2.5 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(20,184,166,0.8)]"
                  />
                  <span className="text-sm font-mono">{content.context[locale].systemNote}</span>
                </motion.div>
              </motion.div>
            )}

            {/* ANALYSIS STATE */}
            {state === 'analysis' && (
              <motion.div
                key="analysis"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                {/* Agent Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-3 bg-diverga-500/20 backdrop-blur-xl border border-diverga-400/40 text-diverga-300 px-4 py-2 rounded-[12px] shadow-[0_0_24px_rgba(20,184,166,0.3)]"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="h-2.5 w-2.5 rounded-full bg-diverga-400 shadow-[0_0_12px_rgba(20,184,166,1)]"
                  />
                  <span className="text-sm font-mono font-semibold">{content.analysis[locale].agentId}</span>
                </motion.div>

                {/* Analysis Lines */}
                <div className="font-mono text-sm space-y-3 pl-2">
                  {analysisLines.slice(0, analysisLine).map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <span className="text-teal-400">›</span>
                      {line}
                    </motion.div>
                  ))}
                  {analysisLine < analysisLines.length && (
                    <motion.span
                      animate={{
                        opacity: [1, 0.3, 1]
                      }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.8)]"
                    />
                  )}
                </div>
              </motion.div>
            )}

            {/* CHECKPOINT STATE */}
            {state === 'checkpoint' && (
              <motion.div
                key="checkpoint"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                {/* Checkpoint Header - Pulsing red glow */}
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(239, 68, 68, 0.4)',
                        '0 0 40px rgba(239, 68, 68, 0.6)',
                        '0 0 20px rgba(239, 68, 68, 0.4)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-flex items-center gap-3 bg-red-500/10 backdrop-blur-xl border-2 border-red-500/50 px-6 py-3 rounded-[16px] mb-4"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_16px_rgba(239,68,68,1)]"
                    />
                    <span className="font-mono font-bold text-red-400 text-sm">
                      {content.checkpoint[locale].title}
                    </span>
                  </motion.div>
                  <p className="text-gray-400 text-sm font-medium">{content.checkpoint[locale].subtitle}</p>
                </motion.div>

                {/* Modal Warning - Enhanced glow */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-orange-500/10 backdrop-blur-xl border border-orange-500/40 rounded-[16px] p-4 shadow-[0_0_24px_rgba(249,115,22,0.2)]"
                >
                  <p className="text-orange-300 text-sm font-mono leading-relaxed">
                    {content.checkpoint[locale].modalWarning}
                  </p>
                </motion.div>

                {/* Options - Floating glass cards */}
                <div className="space-y-4">
                  {content.checkpoint[locale].options.map((option, i) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, x: -20, y: 10 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className={cn(
                        "relative p-5 rounded-[20px] border-2 backdrop-blur-xl transition-all duration-300",
                        option.recommended
                          ? "border-teal-500/60 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 shadow-[0_0_32px_rgba(20,184,166,0.3)]"
                          : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                      )}
                    >
                      {option.recommended && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                          className="absolute -top-3 right-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_0_16px_rgba(20,184,166,0.6)]"
                        >
                          {locale === 'ko' ? '추천' : 'Recommended'}
                        </motion.span>
                      )}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg font-bold text-white">
                              {locale === 'ko' ? '방향' : 'Direction'} {option.id}:
                            </span>
                            <span className="text-gray-200 font-medium">{option.name}</span>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">{option.description}</p>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={cn(
                            "flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-mono font-bold backdrop-blur-xl",
                            getTScoreColor(option.tscore)
                          )}
                        >
                          T={option.tscore.toFixed(1)}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Question */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-gray-200 text-center font-medium text-base"
                >
                  {content.checkpoint[locale].question}
                </motion.p>

                {/* Decision Buttons - Enhanced with glow */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-wrap gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDecision('approve')}
                    className="inline-flex items-center gap-2 rounded-[16px] bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 font-bold text-white transition-all shadow-[0_0_32px_rgba(16,185,129,0.4)] hover:shadow-[0_0_48px_rgba(16,185,129,0.6)]"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    {content.checkpoint[locale].approveText}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDecision('reject')}
                    className="inline-flex items-center gap-2 rounded-[16px] bg-red-500/10 backdrop-blur-xl border-2 border-red-500/50 px-6 py-3.5 font-bold text-red-300 hover:bg-red-500/20 transition-all shadow-[0_0_24px_rgba(239,68,68,0.2)] hover:shadow-[0_0_32px_rgba(239,68,68,0.4)]"
                  >
                    <XCircle className="h-5 w-5" />
                    {content.checkpoint[locale].rejectText}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDecision('explain')}
                    className="inline-flex items-center gap-2 rounded-[16px] bg-white/5 backdrop-blur-xl border-2 border-white/20 px-6 py-3.5 font-bold text-gray-200 hover:bg-white/10 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                  >
                    <HelpCircle className="h-5 w-5" />
                    {content.checkpoint[locale].explainText}
                  </motion.button>
                </motion.div>

                {/* Educational Note - Gradient border */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="relative rounded-[16px] bg-gradient-to-br from-diverga-500/10 to-teal-500/10 backdrop-blur-xl border border-diverga-400/30 p-4 text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-diverga-500/5 via-transparent to-teal-500/5" />
                  <p className="relative text-gray-300 text-sm font-medium leading-relaxed">
                    {content.educational[locale].checkpointExplainer}
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* DECISION MADE STATE */}
            {(state === 'decision-made' || state === 'explanation') && decision && (
              <motion.div
                key="response"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Response Header */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={cn(
                    "inline-flex items-center gap-3 px-5 py-3 rounded-[16px] backdrop-blur-xl border-2",
                    decision === 'approve'
                      ? "bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_24px_rgba(16,185,129,0.4)]"
                      : decision === 'reject'
                      ? "bg-red-500/20 border-red-500/50 shadow-[0_0_24px_rgba(239,68,68,0.4)]"
                      : "bg-blue-500/20 border-blue-500/50 shadow-[0_0_24px_rgba(59,130,246,0.4)]"
                  )}
                >
                  {decision === 'approve' && <CheckCircle2 className="h-6 w-6 text-emerald-400" />}
                  {decision === 'reject' && <XCircle className="h-6 w-6 text-red-400" />}
                  {decision === 'explain' && <HelpCircle className="h-6 w-6 text-blue-400" />}
                  <span className={cn(
                    "font-bold text-base",
                    decision === 'approve' ? "text-emerald-300" :
                    decision === 'reject' ? "text-red-300" : "text-blue-300"
                  )}>
                    {content.responses[decision][locale].title}
                  </span>
                </motion.div>

                {/* Response Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-5"
                >
                  <p className="text-white text-lg leading-relaxed">
                    {content.responses[decision][locale].message}
                  </p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/5 backdrop-blur-xl rounded-[16px] p-5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                  >
                    <pre className="whitespace-pre-wrap text-gray-200 text-sm font-sans leading-relaxed">
                      {content.responses[decision][locale].detail}
                    </pre>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-2 text-teal-400 text-sm font-medium bg-teal-400/10 backdrop-blur-xl border border-teal-400/30 rounded-[12px] px-4 py-3"
                  >
                    <ArrowRight className="h-4 w-4" />
                    {content.responses[decision][locale].nextStep}
                  </motion.div>
                </motion.div>

                {/* Back to checkpoint for explanation */}
                {state === 'explanation' && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => {
                      setState('checkpoint');
                      setDecision(null);
                    }}
                    whileHover={{ scale: 1.05, x: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-2 rounded-[12px] backdrop-blur-xl border border-white/10"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    {locale === 'ko' ? '체크포인트로 돌아가기' : 'Back to checkpoint'}
                  </motion.button>
                )}

                {/* Human-centered reminder */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="relative rounded-[16px] bg-gradient-to-r from-diverga-500/10 via-transparent to-teal-500/10 backdrop-blur-xl border border-diverga-400/30 p-5 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-diverga-500/5 via-transparent to-teal-500/5" />
                  <p className="relative text-gray-200 text-sm text-center font-medium leading-relaxed">
                    {content.educational[locale].humanCentered}
                  </p>
                </motion.div>

                {/* Restart button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-center pt-4"
                >
                  <motion.button
                    onClick={resetDemo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-2 rounded-[12px] backdrop-blur-xl border border-white/10"
                  >
                    <RotateCcw className="h-4 w-4" />
                    {locale === 'ko' ? '다시 체험하기' : 'Try Again'}
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// ==================== MAIN PAGE COMPONENT ====================

export default function PlaygroundPage() {
  const locale = useLocale() as 'en' | 'ko';
  const [activeTab, setActiveTab] = useState<'demos' | 'checkpoint'>('checkpoint');
  const [selectedDemo, setSelectedDemo] = useState(demos[0]);
  const [showOutput, setShowOutput] = useState(false);

  const handleRun = () => {
    setShowOutput(false);
    setTimeout(() => setShowOutput(true), 500);
  };

  const tabs = [
    {
      id: 'checkpoint' as const,
      label: { en: 'Checkpoint Demo', ko: '체크포인트 데모' },
      description: { en: 'Interactive simulation', ko: '인터랙티브 시뮬레이션' }
    },
    {
      id: 'demos' as const,
      label: { en: 'Example Outputs', ko: '예시 출력' },
      description: { en: 'Pre-built examples', ko: '미리 준비된 예시' }
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0f1c3e] to-[#1a1f3a] py-12 sm:py-16">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-diverga-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
          >
            {locale === 'ko' ? '체험하기' : 'Playground'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-400"
          >
            {locale === 'ko'
              ? 'Diverga의 인간 중심 AI 연구 지원을 직접 체험해보세요'
              : 'Experience Diverga\'s human-centered AI research assistance firsthand'}
          </motion.p>
        </div>

        {/* Tab Navigation - Glass morphism pills */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex rounded-[20px] bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative px-8 py-4 rounded-[16px] font-medium transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-diverga-500 to-teal-500 text-white shadow-[0_0_24px_rgba(20,184,166,0.5)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <span className="block text-sm font-semibold">{tab.label[locale]}</span>
                <span className="block text-xs opacity-70 mt-0.5">{tab.description[locale]}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-[16px] bg-gradient-to-r from-diverga-500 to-teal-500 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'checkpoint' && (
            <motion.div
              key="checkpoint"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CheckpointDemo locale={locale} />
            </motion.div>
          )}

          {activeTab === 'demos' && (
            <motion.div
              key="demos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 lg:grid-cols-3"
            >
              {/* Demo selector */}
              <div className="lg:col-span-1">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-700" />
                  {locale === 'ko' ? '예시 선택' : 'Select Demo'}
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-700" />
                </h2>
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  {demos.map((demo, i) => (
                    <motion.button
                      key={demo.id}
                      onClick={() => {
                        setSelectedDemo(demo);
                        setShowOutput(false);
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "w-full text-left rounded-[20px] p-5 transition-all duration-300",
                        selectedDemo.id === demo.id
                          ? "bg-white/10 backdrop-blur-xl border-2 border-diverga-400/50 shadow-[0_0_32px_rgba(20,184,166,0.3)]"
                          : "bg-white/5 backdrop-blur-xl border border-white/10 hover:border-diverga-400/30 hover:bg-white/8"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white text-sm">
                          {demo.title[locale]}
                        </span>
                        <span className="text-xs font-mono text-teal-400 bg-teal-400/10 px-2.5 py-1 rounded-lg">
                          {demo.agent}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>

              {/* Demo display */}
              <div className="lg:col-span-2 space-y-5">
                {/* Input - Terminal style */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[20px] bg-[#0f1c3e] border border-white/10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                >
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-white/5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    <span className="ml-3 text-xs font-mono text-gray-500">
                      {locale === 'ko' ? '입력' : 'Input'}
                    </span>
                    <span className="ml-auto text-xs font-mono text-teal-400 bg-teal-400/10 px-2.5 py-1 rounded">
                      {selectedDemo.agent}
                    </span>
                  </div>
                  {/* Terminal content */}
                  <div className="p-5">
                    <p className="text-gray-200 font-mono text-sm leading-relaxed">
                      <span className="text-teal-400">$</span> {selectedDemo.input[locale]}
                    </p>
                  </div>
                </motion.div>

                {/* Run button with glow */}
                <motion.button
                  onClick={handleRun}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-[16px] bg-gradient-to-r from-diverga-500 to-teal-500 px-8 py-4 font-bold text-white transition-all duration-300 shadow-[0_0_32px_rgba(20,184,166,0.4)] hover:shadow-[0_0_48px_rgba(20,184,166,0.6)]"
                >
                  <Play className="h-5 w-5" />
                  {locale === 'ko' ? '실행' : 'Run Demo'}
                </motion.button>

                {/* Output - Terminal style */}
                {showOutput && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="rounded-[20px] bg-[#0f1c3e] border border-emerald-500/30 overflow-hidden shadow-[0_0_32px_rgba(16,185,129,0.2)]"
                  >
                    {/* Terminal header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-emerald-500/20">
                      <motion.div
                        animate={{
                          boxShadow: ['0 0 8px rgba(16,185,129,0.4)', '0 0 16px rgba(16,185,129,0.8)', '0 0 8px rgba(16,185,129,0.4)']
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-2.5 w-2.5 rounded-full bg-emerald-500"
                      />
                      <span className="text-xs font-medium text-emerald-400 font-mono">
                        {locale === 'ko' ? '응답' : 'Response'}
                      </span>
                    </div>
                    {/* Terminal content with syntax highlighting */}
                    <div className="p-5 bg-gradient-to-br from-emerald-950/20 to-transparent">
                      <pre className="whitespace-pre-wrap text-sm text-gray-200 font-mono leading-relaxed">
                        {selectedDemo.output[locale]}
                      </pre>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
