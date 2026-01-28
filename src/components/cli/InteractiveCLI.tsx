'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';

interface HistoryItem {
  type: 'input' | 'output' | 'error' | 'checkpoint' | 'loading' | 'agent';
  content: string;
  agentId?: string;
  tScore?: number;
}

// Agent ID to name mapping
const AGENT_NAMES: Record<string, { en: string; ko: string }> = {
  a1: { en: 'Research Question Refiner', ko: '연구 질문 정제자' },
  a2: { en: 'Theoretical Framework Architect', ko: '이론적 프레임워크 설계자' },
  a3: { en: "Devil's Advocate", ko: '반대 의견 제시자' },
  a4: { en: 'Research Ethics Advisor', ko: '연구 윤리 자문자' },
  a5: { en: 'Paradigm & Worldview Advisor', ko: '패러다임 및 세계관 자문자' },
  a6: { en: 'Conceptual Framework Visualizer', ko: '개념적 프레임워크 시각화자' },
  b1: { en: 'Systematic Literature Scout', ko: '체계적 문헌 탐색자' },
  b2: { en: 'Evidence Quality Appraiser', ko: '근거 품질 평가자' },
  b3: { en: 'Effect Size Extractor', ko: '효과크기 추출자' },
  b4: { en: 'Research Radar', ko: '연구 레이더' },
  b5: { en: 'Parallel Document Processor', ko: '병렬 문서 처리자' },
  c1: { en: 'Quantitative Design Consultant', ko: '양적 연구 설계 컨설턴트' },
  c2: { en: 'Qualitative Design Consultant', ko: '질적 연구 설계 컨설턴트' },
  c3: { en: 'Mixed Methods Design Consultant', ko: '혼합방법 설계 컨설턴트' },
  c4: { en: 'Experimental Materials Developer', ko: '실험 자료 개발자' },
  c5: { en: 'Meta-Analysis Master', ko: '메타분석 마스터' },
  c6: { en: 'Data Integrity Guard', ko: '데이터 무결성 수호자' },
  c7: { en: 'Error Prevention Engine', ko: '오류 방지 엔진' },
  d1: { en: 'Sampling Strategy Advisor', ko: '표집 전략 자문자' },
  d2: { en: 'Interview & Focus Group Specialist', ko: '인터뷰 및 포커스 그룹 전문가' },
  d3: { en: 'Observation Protocol Designer', ko: '관찰 프로토콜 설계자' },
  d4: { en: 'Measurement Instrument Developer', ko: '측정 도구 개발자' },
  e1: { en: 'Quantitative Analysis Guide', ko: '양적 분석 가이드' },
  e2: { en: 'Qualitative Coding Specialist', ko: '질적 코딩 전문가' },
  e3: { en: 'Mixed Methods Integration Specialist', ko: '혼합방법 통합 전문가' },
  e4: { en: 'Analysis Code Generator', ko: '분석 코드 생성자' },
  e5: { en: 'Sensitivity Analysis Designer', ko: '민감도 분석 설계자' },
  f1: { en: 'Internal Consistency Checker', ko: '내적 일관성 검토자' },
  f2: { en: 'Checklist Manager', ko: '체크리스트 관리자' },
  f3: { en: 'Reproducibility Auditor', ko: '재현성 감사자' },
  f4: { en: 'Bias & Trustworthiness Detector', ko: '편향 및 신뢰성 탐지자' },
  f5: { en: 'Humanization Verifier', ko: '휴먼화 검증자' },
  g1: { en: 'Journal Matcher', ko: '저널 매칭자' },
  g2: { en: 'Academic Communicator', ko: '학술 커뮤니케이터' },
  g3: { en: 'Peer Review Strategist', ko: '동료 심사 전략가' },
  g4: { en: 'Preregistration Composer', ko: '사전등록 작성자' },
  g5: { en: 'Academic Style Auditor', ko: '학술 스타일 감사자' },
  g6: { en: 'Academic Style Humanizer', ko: '학술 스타일 휴먼화자' },
  h1: { en: 'Ethnographic Research Advisor', ko: '민족지학 연구 자문자' },
  h2: { en: 'Action Research Facilitator', ko: '실행연구 촉진자' },
};

const DEMO_COMMANDS: Record<string, { en: string; ko: string }> = {
  'help': {
    en: `
DIVERGA CLI v6.0 - Available Commands

  help                    Show this help message
  agents                  List all 40 available agents
  run <agent_id>          Execute specific agent with AI (e.g., run a2)
  ask <question>          Ask a research question to Diverga AI
  clear                   Clear terminal

Examples:
  $ run a2                (Run Theoretical Framework Architect)
  $ ask What is T-Score?  (Ask a question)

For more info: https://diverga.dev/docs
`,
    ko: `
DIVERGA CLI v6.0 - 사용 가능한 명령어

  help                    도움말 표시
  agents                  40개 에이전트 목록 표시
  run <agent_id>          AI로 특정 에이전트 실행 (예: run a2)
  ask <질문>              Diverga AI에게 연구 질문하기
  clear                   터미널 지우기

예시:
  $ run a2                (이론적 프레임워크 설계자 실행)
  $ ask T-Score란 무엇인가요?  (질문하기)

자세한 정보: https://diverga.dev/docs
`,
  },
  'agents': {
    en: `
┌────────────────────────────────────────────────────────────────────┐
│                     DIVERGA AGENT REGISTRY (40)                     │
├──────────┬───────────────────────────────────┬─────────┬───────────┤
│ Category │ Agents                            │ Count   │ Focus     │
├──────────┼───────────────────────────────────┼─────────┼───────────┤
│ A        │ A1-A6 Foundation                  │ 6       │ Design    │
│ B        │ B1-B5 Evidence                    │ 5       │ Literature│
│ C        │ C1-C7 Design & Meta               │ 7       │ Methods   │
│ D        │ D1-D4 Data Collection             │ 4       │ Data      │
│ E        │ E1-E5 Analysis                    │ 5       │ Stats     │
│ F        │ F1-F5 Quality                     │ 5       │ Validation│
│ G        │ G1-G6 Communication               │ 6       │ Writing   │
│ H        │ H1-H2 Specialized                 │ 2       │ Advanced  │
└──────────┴───────────────────────────────────┴─────────┴───────────┘

Use 'run <agent_id>' to interact with an agent (e.g., run a2)
Powered by Groq LLM (llama-3.3-70b-versatile)
`,
    ko: `
┌────────────────────────────────────────────────────────────────────┐
│                   DIVERGA 에이전트 레지스트리 (40)                   │
├──────────┬───────────────────────────────────┬─────────┬───────────┤
│ 카테고리  │ 에이전트                           │ 개수    │ 초점       │
├──────────┼───────────────────────────────────┼─────────┼───────────┤
│ A        │ A1-A6 기초 설계                    │ 6       │ 설계       │
│ B        │ B1-B5 문헌·근거                    │ 5       │ 문헌       │
│ C        │ C1-C7 설계 및 메타                  │ 7       │ 방법론     │
│ D        │ D1-D4 자료 수집                    │ 4       │ 데이터     │
│ E        │ E1-E5 분석                        │ 5       │ 통계       │
│ F        │ F1-F5 품질 관리                    │ 5       │ 검증       │
│ G        │ G1-G6 커뮤니케이션                  │ 6       │ 글쓰기     │
│ H        │ H1-H2 특수                        │ 2       │ 고급       │
└──────────┴───────────────────────────────────┴─────────┴───────────┘

'run <agent_id>'로 에이전트와 상호작용 (예: run a2)
Groq LLM 기반 (llama-3.3-70b-versatile)
`,
  },
};

interface InteractiveCLIProps {
  height?: number;
  initialCommands?: string[];
}

export function InteractiveCLI({ height = 400, initialCommands = [] }: InteractiveCLIProps) {
  const locale = useLocale();
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: 'output',
      content: locale === 'ko'
        ? `DIVERGA CLI v6.0 - 연구 방법론 AI 어시스턴트
연결됨: Groq LLM (llama-3.3-70b)

무엇이든 물어보세요! 예시:
  "T-Score란 무엇인가요?"
  "연구 질문을 정제하고 싶어요"
  "메타분석 설계를 도와주세요"

명령어: help (도움말) | agents (에이전트 목록) | run <id> (에이전트 실행)
`
        : `DIVERGA CLI v6.0 - Research Methodology AI Assistant
Connected: Groq LLM (llama-3.3-70b)

Ask anything! Examples:
  "What is T-Score?"
  "Help me refine my research question"
  "How do I design a meta-analysis?"

Commands: help | agents | run <agent_id>
`
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentAgent, setCurrentAgent] = useState<string | null>(null);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Run initial commands
  useEffect(() => {
    if (initialCommands.length > 0) {
      initialCommands.forEach((cmd, i) => {
        setTimeout(() => handleCommand(cmd), i * 2000);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const typeOutput = useCallback(async (output: string, type: HistoryItem['type'] = 'output') => {
    setIsTyping(true);
    const lines = output.split('\n');

    for (let i = 0; i < lines.length; i++) {
      await new Promise((r) => setTimeout(r, 15 + Math.random() * 10));
      setHistory((prev) => {
        const newHistory = [...prev];
        const lastItem = newHistory[newHistory.length - 1];
        if (lastItem?.type === type) {
          newHistory[newHistory.length - 1] = {
            ...lastItem,
            content: lines.slice(0, i + 1).join('\n'),
          };
        }
        return newHistory;
      });
    }
    setIsTyping(false);
  }, []);

  const callDivergaAPI = async (command: string, agentId?: string, userInput?: string) => {
    try {
      const response = await fetch('/api/diverga', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command, agentId, input: userInput }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API error:', error);
      return { error: true, response: 'Failed to connect to AI service.' };
    }
  };

  const handleCommand = useCallback(async (cmd: string) => {
    const command = cmd.trim();
    const commandLower = command.toLowerCase();

    // Add to history
    setHistory((prev) => [...prev, { type: 'input', content: `$ ${command}` }]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    // Clear command
    if (commandLower === 'clear') {
      setHistory([{
        type: 'output',
        content: 'DIVERGA CLI v6.0\n'
      }]);
      setCurrentAgent(null);
      return;
    }

    // Static commands
    if (DEMO_COMMANDS[commandLower]) {
      setHistory((prev) => [...prev, { type: 'output', content: '' }]);
      await typeOutput(DEMO_COMMANDS[commandLower][locale as 'en' | 'ko']);
      return;
    }

    // Run agent command
    if (commandLower.startsWith('run ')) {
      const agentId = commandLower.replace('run ', '').trim();
      const agentName = AGENT_NAMES[agentId];

      if (!agentName) {
        setHistory((prev) => [
          ...prev,
          {
            type: 'error',
            content: locale === 'ko'
              ? `에이전트를 찾을 수 없습니다: ${agentId}\n유효한 에이전트 ID: a1-a6, b1-b5, c1-c7, d1-d4, e1-e5, f1-f5, g1-g6, h1-h2`
              : `Agent not found: ${agentId}\nValid agent IDs: a1-a6, b1-b5, c1-c7, d1-d4, e1-e5, f1-f5, g1-g6, h1-h2`
          },
        ]);
        return;
      }

      setCurrentAgent(agentId);
      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          content: locale === 'ko'
            ? `\n[${agentId.toUpperCase()}-${agentName.ko}] 초기화 중...`
            : `\n[${agentId.toUpperCase()}-${agentName.en}] Initializing...`
        },
      ]);

      setIsLoading(true);
      const result = await callDivergaAPI('run', agentId);
      setIsLoading(false);

      if (result.error) {
        setHistory((prev) => [
          ...prev,
          { type: 'error', content: `Error: ${result.response}` },
        ]);
      } else {
        setHistory((prev) => [
          ...prev,
          {
            type: 'agent',
            content: `\n[${result.agentId}] T-Score: ${result.tScore?.toFixed(2) || 'N/A'}\n\n${result.response}`,
            agentId: result.agentId,
            tScore: result.tScore,
          },
        ]);
      }
      return;
    }

    // Ask command or direct question to current agent
    if (commandLower.startsWith('ask ') || currentAgent) {
      const question = commandLower.startsWith('ask ')
        ? command.slice(4).trim()
        : command;

      if (!question) {
        setHistory((prev) => [
          ...prev,
          {
            type: 'error',
            content: locale === 'ko'
              ? '질문을 입력하세요. 예: ask T-Score란 무엇인가요?'
              : 'Please enter a question. Example: ask What is T-Score?'
          },
        ]);
        return;
      }

      setHistory((prev) => [
        ...prev,
        {
          type: 'output',
          content: locale === 'ko' ? '\n처리 중...' : '\nProcessing...'
        },
      ]);

      setIsLoading(true);
      const result = await callDivergaAPI('ask', currentAgent || undefined, question);
      setIsLoading(false);

      if (result.error) {
        setHistory((prev) => {
          const newHistory = [...prev];
          newHistory.pop(); // Remove "Processing..."
          return [
            ...newHistory,
            { type: 'error', content: `Error: ${result.response}` },
          ];
        });
      } else {
        setHistory((prev) => {
          const newHistory = [...prev];
          newHistory.pop(); // Remove "Processing..."
          return [
            ...newHistory,
            {
              type: 'agent',
              content: currentAgent
                ? `\n[${result.agentId || currentAgent.toUpperCase()}]\n${result.response}`
                : `\n[DIVERGA]\n${result.response}`,
              agentId: result.agentId,
              tScore: result.tScore,
            },
          ];
        });
      }
      return;
    }

    // Treat unknown commands as natural language queries
    setHistory((prev) => [
      ...prev,
      {
        type: 'output',
        content: locale === 'ko' ? '\n처리 중...' : '\nProcessing...'
      },
    ]);

    setIsLoading(true);
    const result = await callDivergaAPI('chat', undefined, command);
    setIsLoading(false);

    if (result.error) {
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory.pop(); // Remove "Processing..."
        return [
          ...newHistory,
          { type: 'error', content: `Error: ${result.response}` },
        ];
      });
    } else {
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory.pop(); // Remove "Processing..."
        return [
          ...newHistory,
          {
            type: 'agent',
            content: `\n[DIVERGA]\n${result.response}`,
            tScore: result.tScore,
          },
        ];
      });
    }
  }, [locale, typeOutput, currentAgent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping || isLoading) return;

    handleCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const getItemColor = (type: HistoryItem['type']) => {
    switch (type) {
      case 'input': return 'text-tscore-divergent';
      case 'error': return 'text-tscore-modal';
      case 'checkpoint': return 'text-tscore-balanced';
      case 'agent': return 'text-tscore-creative';
      case 'loading': return 'text-stellar-faint animate-pulse';
      default: return 'text-stellar-dim';
    }
  };

  return (
    <div
      className="void-terminal overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal header */}
      <div className="void-terminal-header">
        <div className="void-terminal-dot void-terminal-dot-red" />
        <div className="void-terminal-dot void-terminal-dot-yellow" />
        <div className="void-terminal-dot void-terminal-dot-green" />
        <span className="ml-4 font-mono text-micro text-stellar-faint">
          diverga-cli — {currentAgent
            ? `${currentAgent.toUpperCase()} ${AGENT_NAMES[currentAgent]?.[locale as 'en' | 'ko'] || ''}`
            : (locale === 'ko' ? '터미널' : 'terminal')}
        </span>
        {isLoading && (
          <span className="ml-2 animate-pulse text-tscore-creative">●</span>
        )}
      </div>

      {/* Terminal content */}
      <div
        ref={terminalRef}
        className="void-terminal-content void-scrollbar"
        style={{ height }}
      >
        <AnimatePresence initial={false}>
          {history.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              className={`whitespace-pre-wrap font-mono text-sm ${getItemColor(item.type)}`}
            >
              {item.content}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading indicator */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 flex items-center gap-2 text-stellar-faint"
          >
            <span className="animate-spin">⟳</span>
            <span className="animate-pulse font-mono text-sm">
              {locale === 'ko' ? 'AI 응답 대기 중...' : 'Waiting for AI response...'}
            </span>
          </motion.div>
        )}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="mt-2 flex items-center">
          <span className="void-terminal-prompt">
            {currentAgent ? `[${currentAgent.toUpperCase()}]$` : '$'}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping || isLoading}
            className="ml-2 flex-1 bg-transparent font-mono text-sm text-stellar-core outline-none"
            placeholder={
              isTyping || isLoading
                ? ''
                : currentAgent
                  ? (locale === 'ko' ? '질문하기...' : 'Ask a question...')
                  : (locale === 'ko' ? '연구에 대해 무엇이든 물어보세요...' : 'Ask anything about research...')
            }
            autoFocus
          />
          {!isLoading && <span className="void-terminal-cursor" />}
        </form>
      </div>
    </div>
  );
}
