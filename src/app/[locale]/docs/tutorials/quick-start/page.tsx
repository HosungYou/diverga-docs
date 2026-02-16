'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import {
  Terminal,
  Download,
  HelpCircle,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Brain,
  Sparkles,
  Copy,
  Check,
  ChevronRight,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import { DocsBreadcrumb } from '@/components/docs';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 hover:bg-void-surface transition-colors rounded"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check className="h-4 w-4 text-[#44ffaa]" />
      ) : (
        <Copy className="h-4 w-4 text-stellar-faint" />
      )}
    </button>
  );
}

export default function QuickStartTutorialPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'Quick Start Tutorial',
      description: 'Get your first Diverga agent running in 5 minutes.',
      duration: '~5 minutes',
      steps: [
        {
          number: 1,
          title: 'Prerequisites',
          icon: CheckCircle2,
          color: '#44ffaa',
          items: [
            'Claude Code installed',
            'Terminal access',
            '~5 minutes of your time',
          ],
          code: 'claude --version',
          codeDesc: 'Verify Claude Code is installed:',
        },
        {
          number: 2,
          title: 'Installation',
          icon: Download,
          color: '#22ccff',
          items: [
            'Clone Diverga or install via marketplace',
            'Choose your preferred installation method',
          ],
          code: `# Option 1: Clone from GitHub
git clone https://github.com/yourusername/Diverga.git ~/.claude/plugins/diverga

# Option 2: Marketplace (coming soon)
claude marketplace install diverga`,
          codeDesc: 'Install Diverga:',
        },
        {
          number: 3,
          title: 'First Skill - /diverga-help',
          icon: HelpCircle,
          color: '#ffcc22',
          items: [
            'Run the help command to see all available skills',
            'Understand the command output structure',
            'Familiarize yourself with skill categories',
          ],
          code: '/diverga-help',
          codeDesc: 'Run your first command:',
          output: `Diverga v9.0 - Research Coordinator

Available Skills:
• /diverga-setup - Initial configuration
• /diverga-a1 - Research Question Refiner
• /diverga-a2 - Theoretical Framework Designer
...

Agent Categories:
A: Theory & Design (5 agents)
B: Literature & Evidence (4 agents)
C: Methodology & Analysis (7 agents)
...`,
        },
        {
          number: 4,
          title: 'First Agent - A1 Research Question Refiner',
          icon: MessageSquare,
          color: '#ff6b6b',
          items: [
            'Trigger the agent with a research question',
            'Observe how VS methodology presents alternatives',
            'See the agent\'s structured response',
          ],
          code: 'I want to study how AI impacts learning outcomes in higher education.',
          codeDesc: 'Start a conversation:',
          output: `[A1-ResearchQuestionRefiner activated]

🔴 CP_RQ_REFINEMENT (REQUIRED)

I've analyzed your research interest. Here are three refined
research questions across the typicality spectrum:

[0] T=0.85 - Modal (Most Common)
"How do AI-powered tutoring systems affect student academic
performance in higher education?"

[1] T=0.55 - Emerging
"What is the relationship between AI-mediated personalized
learning and metacognitive skill development in
undergraduate students?"

[2] T=0.25 - Novel
"How do human-AI collaborative learning environments
influence creativity and critical thinking among graduate
students?"

Which direction aligns with your research goals?`,
        },
        {
          number: 5,
          title: 'Understanding Checkpoints',
          icon: CheckCircle2,
          color: '#9b59b6',
          items: [
            'Checkpoints pause for human decision-making',
            'Three types: REQUIRED, RECOMMENDED, OPTIONAL',
            'You control critical research decisions',
          ],
          code: 'approve option 1',
          codeDesc: 'Respond to the checkpoint:',
          explanation: `Checkpoint Types:
🔴 REQUIRED - Must respond before continuing
🟠 RECOMMENDED - Should respond for best results
🔵 OPTIONAL - Can skip or respond

Your responses:
• "approve option X" - Select option X
• "skip" - Skip optional checkpoints
• "explain" - Get more details about options`,
        },
        {
          number: 6,
          title: 'Next Steps',
          icon: Sparkles,
          color: '#44ffaa',
          items: [
            'Explore the Memory System for context persistence',
            'Learn about VS Methodology and T-Scores',
            'Browse all 44 agent categories',
          ],
          links: [
            { href: '/docs/memory-system', label: 'Memory System' },
            { href: '/docs/vs-methodology', label: 'VS Methodology' },
            { href: '/docs/agents', label: 'Agent Categories' },
          ],
        },
      ],
    },
    ko: {
      title: '빠른 시작 튜토리얼',
      description: '5분 안에 첫 번째 Diverga 에이전트를 실행하세요.',
      duration: '약 5분',
      steps: [
        {
          number: 1,
          title: '사전 요구사항',
          icon: CheckCircle2,
          color: '#44ffaa',
          items: [
            'Claude Code 설치됨',
            '터미널 접근 가능',
            '약 5분의 시간',
          ],
          code: 'claude --version',
          codeDesc: 'Claude Code가 설치되었는지 확인:',
        },
        {
          number: 2,
          title: '설치',
          icon: Download,
          color: '#22ccff',
          items: [
            'Diverga를 클론하거나 마켓플레이스에서 설치',
            '선호하는 설치 방법을 선택하세요',
          ],
          code: `# 옵션 1: GitHub에서 클론
git clone https://github.com/yourusername/Diverga.git ~/.claude/plugins/diverga

# 옵션 2: 마켓플레이스 (곧 출시)
claude marketplace install diverga`,
          codeDesc: 'Diverga 설치:',
        },
        {
          number: 3,
          title: '첫 번째 스킬 - /diverga-help',
          icon: HelpCircle,
          color: '#ffcc22',
          items: [
            '도움말 명령을 실행하여 사용 가능한 모든 스킬 보기',
            '명령 출력 구조 이해하기',
            '스킬 카테고리 익히기',
          ],
          code: '/diverga-help',
          codeDesc: '첫 번째 명령 실행:',
          output: `Diverga v9.0 - 연구 코디네이터

사용 가능한 스킬:
• /diverga-setup - 초기 구성
• /diverga-a1 - 연구 질문 정제
• /diverga-a2 - 이론적 프레임워크 설계
...

에이전트 카테고리:
A: 이론 및 설계 (5개 에이전트)
B: 문헌 및 증거 (4개 에이전트)
C: 방법론 및 분석 (7개 에이전트)
...`,
        },
        {
          number: 4,
          title: '첫 번째 에이전트 - A1 연구 질문 정제',
          icon: MessageSquare,
          color: '#ff6b6b',
          items: [
            '연구 질문으로 에이전트 트리거',
            'VS 방법론이 대안을 제시하는 방식 관찰',
            '에이전트의 구조화된 응답 확인',
          ],
          code: '고등교육에서 AI가 학습 결과에 미치는 영향을 연구하고 싶습니다.',
          codeDesc: '대화 시작:',
          output: `[A1-연구질문정제 활성화됨]

🔴 CP_RQ_REFINEMENT (필수)

연구 관심사를 분석했습니다. 전형성 스펙트럼에 걸친
세 가지 정제된 연구 질문입니다:

[0] T=0.85 - Modal (가장 일반적)
"AI 기반 튜터링 시스템이 고등교육에서 학생의 학업
성취도에 어떤 영향을 미치는가?"

[1] T=0.55 - Emerging
"AI 매개 개인화 학습과 학부생의 메타인지 기술 발달
간의 관계는 무엇인가?"

[2] T=0.25 - Novel
"인간-AI 협력 학습 환경이 대학원생의 창의성과
비판적 사고에 어떻게 영향을 미치는가?"

어떤 방향이 연구 목표와 일치하나요?`,
        },
        {
          number: 5,
          title: '체크포인트 이해하기',
          icon: CheckCircle2,
          color: '#9b59b6',
          items: [
            '체크포인트는 인간의 의사결정을 위해 일시 정지',
            '세 가지 유형: REQUIRED, RECOMMENDED, OPTIONAL',
            '중요한 연구 결정을 직접 제어',
          ],
          code: '옵션 1 승인',
          codeDesc: '체크포인트에 응답:',
          explanation: `체크포인트 유형:
🔴 REQUIRED - 계속하기 전에 반드시 응답
🟠 RECOMMENDED - 최상의 결과를 위해 응답 권장
🔵 OPTIONAL - 건너뛰거나 응답 가능

응답 방법:
• "옵션 X 승인" - 옵션 X 선택
• "건너뛰기" - 선택적 체크포인트 건너뛰기
• "설명" - 옵션에 대한 자세한 정보 얻기`,
        },
        {
          number: 6,
          title: '다음 단계',
          icon: Sparkles,
          color: '#44ffaa',
          items: [
            '맥락 지속성을 위한 메모리 시스템 탐색',
            'VS 방법론과 T-Score에 대해 학습',
            '44개 에이전트 카테고리 전체 탐색',
          ],
          links: [
            { href: '/docs/memory-system', label: '메모리 시스템' },
            { href: '/docs/vs-methodology', label: 'VS 방법론' },
            { href: '/docs/agents', label: '에이전트 카테고리' },
          ],
        },
      ],
    },
  };

  const t = content[locale];

  return (
    <div>
      <DocsBreadcrumb locale={locale} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center bg-[#44ffaa]/10 border border-[#44ffaa]/30">
              <Terminal className="h-6 w-6 text-[#44ffaa]" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-display text-stellar-core mb-2">{t.title}</h1>
              <p className="text-stellar-dim">{t.description}</p>
            </div>
          </div>

          {/* Duration Badge */}
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-stellar-faint" />
            <span className="text-stellar-dim">{t.duration}</span>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-2">
            {t.steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <a
                  href={`#step-${step.number}`}
                  className="group flex h-8 w-8 items-center justify-center font-mono text-sm border transition-all hover:scale-110"
                  style={{
                    backgroundColor: `${step.color}15`,
                    borderColor: `${step.color}50`,
                    color: step.color,
                  }}
                  title={step.title}
                >
                  {step.number}
                </a>
                {index < t.steps.length - 1 && (
                  <div className="w-8 md:w-16 h-px bg-stellar-faint/20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {t.steps.map((step, index) => (
            <section key={index} id={`step-${step.number}`}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {/* Step Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center border font-mono font-bold text-lg"
                    style={{
                      backgroundColor: `${step.color}15`,
                      borderColor: `${step.color}50`,
                      color: step.color,
                    }}
                  >
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="h-5 w-5" style={{ color: step.color }} />
                      <h2 className="text-2xl font-display text-stellar-bright">{step.title}</h2>
                    </div>

                    {/* Checklist Items */}
                    <ul className="space-y-2">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-stellar-dim">
                          <ChevronRight className="h-4 w-4 mt-0.5 text-stellar-faint shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Code Block */}
                {step.code && (
                  <div className="mb-4">
                    <p className="text-sm text-stellar-dim mb-2">{step.codeDesc}</p>
                    <div className="bg-void-absolute border border-stellar-faint/10 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-void-surface border-b border-stellar-faint/10">
                        <span className="font-mono text-xs text-stellar-faint">Terminal</span>
                        <CopyButton text={step.code} />
                      </div>
                      <pre className="p-4 font-mono text-sm text-stellar-bright overflow-x-auto">
                        <code>{step.code}</code>
                      </pre>
                    </div>
                  </div>
                )}

                {/* Output Example */}
                {step.output && (
                  <div className="mb-4">
                    <p className="text-sm text-stellar-dim mb-2">
                      {locale === 'ko' ? '출력 예시:' : 'Expected output:'}
                    </p>
                    <div className="bg-void-elevated border border-stellar-faint/10 p-4">
                      <pre className="font-mono text-sm text-stellar-dim whitespace-pre-wrap">
                        {step.output}
                      </pre>
                    </div>
                  </div>
                )}

                {/* Explanation */}
                {step.explanation && (
                  <div className="p-4 bg-void-elevated border-l-2" style={{ borderLeftColor: step.color }}>
                    <pre className="font-mono text-sm text-stellar-dim whitespace-pre-wrap">
                      {step.explanation}
                    </pre>
                  </div>
                )}

                {/* Links Grid */}
                {step.links && (
                  <div className="grid gap-4 sm:grid-cols-3 mt-6">
                    {step.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={`/${locale}${link.href}`}
                        className="group flex items-center gap-3 p-4 bg-void-elevated border border-stellar-faint/10 hover:border-[#44ffaa]/30 transition-all"
                      >
                        <span className="flex-1 text-sm font-medium text-stellar-bright">
                          {link.label}
                        </span>
                        <ArrowRight className="h-4 w-4 text-stellar-faint group-hover:text-[#44ffaa] transition-colors" />
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            </section>
          ))}
        </div>

        {/* Completion Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-gradient-to-r from-[#44ffaa]/10 via-[#22ccff]/10 to-[#9b59b6]/10 border border-[#44ffaa]/30"
        >
          <div className="flex items-start gap-4">
            <Sparkles className="h-6 w-6 text-[#44ffaa] shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-display text-stellar-bright mb-2">
                {locale === 'ko' ? '축하합니다! 🎉' : 'Congratulations! 🎉'}
              </h3>
              <p className="text-stellar-dim mb-4">
                {locale === 'ko'
                  ? 'Diverga의 첫 번째 에이전트를 성공적으로 실행했습니다. 이제 44개의 전문 연구 에이전트와 VS 방법론의 모든 기능을 활용할 준비가 되었습니다.'
                  : "You've successfully run your first Diverga agent. You're now ready to leverage all 44 specialized research agents and the full power of the VS methodology."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/${locale}/docs/agents`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#44ffaa] text-void-deep font-medium hover:bg-[#44ffaa]/90 transition-colors"
                >
                  {locale === 'ko' ? '모든 에이전트 탐색' : 'Explore All Agents'}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={`/${locale}/docs/vs-methodology`}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-stellar-faint/30 text-stellar-bright hover:border-[#22ccff]/30 hover:text-[#22ccff] transition-all"
                >
                  {locale === 'ko' ? 'VS 방법론 학습' : 'Learn VS Methodology'}
                  <Brain className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
