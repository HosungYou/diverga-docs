'use client';

import { useLocale } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface VersionRelease {
  version: string;
  date: string;
  title: { en: string; ko: string };
  type: 'major' | 'minor' | 'patch';
  highlights: { en: string[]; ko: string[] };
  features?: { en: string[]; ko: string[] };
  bugFixes?: { en: string[]; ko: string[] };
  breaking?: { en: string[]; ko: string[] };
}

const releases: VersionRelease[] = [
  {
    version: '8.0.1',
    date: '2026-02-05',
    title: {
      en: 'Installation Bug Fixes',
      ko: '설치 버그 수정',
    },
    type: 'patch',
    highlights: {
      en: [
        'Fixed install script path corruption',
        'Replaced symlinks with file copies for skills',
      ],
      ko: [
        '설치 스크립트 경로 손상 수정',
        '스킬 심볼릭 링크를 파일 복사로 대체',
      ],
    },
    bugFixes: {
      en: [
        'Fixed ensure_repo() stdout capture bug where log messages were mixed with path output',
        'Changed skill installation from symlinks to file copies - symlinks broke after temporary directory cleanup',
      ],
      ko: [
        'ensure_repo() stdout 캡처 버그 수정 (로그 메시지가 경로 출력과 혼합)',
        '스킬 설치를 심볼릭 링크에서 파일 복사로 변경 (임시 디렉토리 정리 후 심볼릭 링크 손상)',
      ],
    },
  },
  {
    version: '8.0.0',
    date: '2026-02-04',
    title: {
      en: 'Project Visibility & HUD Enhancement',
      ko: '프로젝트 가시성 및 HUD 개선',
    },
    type: 'major',
    highlights: {
      en: [
        'Independent HUD statusline display',
        'Simplified 3-step setup wizard',
        'Natural language project initialization',
        'Auto-generated research documentation',
      ],
      ko: [
        '독립 HUD 상태 표시줄',
        '간소화된 3단계 설정 마법사',
        '자연어 프로젝트 초기화',
        '자동 생성 연구 문서',
      ],
    },
    features: {
      en: [
        'File structure redesign: .research/ (hidden system) + docs/ (visible documentation)',
        'HUD presets: research, checkpoint, memory, minimal',
        'Auto-detection: "systematic review on AI" → auto-initialize',
        'Session start auto-load with project banner',
        '7 auto-generated docs: PROJECT_STATUS, DECISION_LOG, RESEARCH_AUDIT, METHODOLOGY, TIMELINE, REFERENCES, README',
      ],
      ko: [
        '파일 구조 재설계: .research/ (숨김 시스템) + docs/ (표시 문서)',
        'HUD 프리셋: research, checkpoint, memory, minimal',
        '자동 감지: "체계적 문헌고찰" → 자동 초기화',
        '세션 시작 시 프로젝트 배너와 함께 자동 로드',
        '7개 자동 생성 문서: PROJECT_STATUS, DECISION_LOG, RESEARCH_AUDIT, METHODOLOGY, TIMELINE, REFERENCES, README',
      ],
    },
    breaking: {
      en: [
        'Setup wizard simplified from 9 steps to 3',
        'LLM selection removed (uses Claude Code model)',
        'API key configuration removed',
      ],
      ko: [
        '설정 마법사 9단계에서 3단계로 간소화',
        'LLM 선택 제거 (Claude Code 모델 사용)',
        'API 키 구성 제거',
      ],
    },
  },
  {
    version: '7.0.0',
    date: '2026-02-03',
    title: {
      en: 'Memory System Global Deployment',
      ko: '메모리 시스템 전역 배포',
    },
    type: 'major',
    highlights: {
      en: [
        '3-layer context loading system',
        'Checkpoint auto-trigger enforcement',
        'Cross-session persistence',
        'Dual-tree filesystem structure',
      ],
      ko: [
        '3계층 컨텍스트 로딩 시스템',
        '체크포인트 자동 트리거 적용',
        '세션 간 지속성',
        '이중 트리 파일 시스템 구조',
      ],
    },
    features: {
      en: [
        'Layer 1: Keyword-triggered context (15 EN + 15 KR keywords)',
        'Layer 2: Task interceptor for agent context injection',
        'Layer 3: CLI-based explicit context access',
        '17 standard checkpoints with 🔴🟠🟡 levels',
        'Decision audit trail with immutable versioning',
        'Stage archiving with auto-summaries',
        'Research documentation automation',
      ],
      ko: [
        'Layer 1: 키워드 트리거 컨텍스트 (15 영어 + 15 한국어 키워드)',
        'Layer 2: 에이전트 컨텍스트 주입용 Task 인터셉터',
        'Layer 3: CLI 기반 명시적 컨텍스트 접근',
        '🔴🟠🟡 레벨의 17개 표준 체크포인트',
        '불변 버전 관리가 있는 의사결정 감사 추적',
        '자동 요약이 있는 단계 아카이빙',
        '연구 문서 자동화',
      ],
    },
  },
  {
    version: '6.9.2',
    date: '2026-02-03',
    title: {
      en: 'Marketplace Cache Fix',
      ko: '마켓플레이스 캐시 수정',
    },
    type: 'patch',
    highlights: {
      en: [
        'Fixed marketplace cache synchronization',
        'Comprehensive troubleshooting guide',
        'GitHub Action for SKILL.md validation',
      ],
      ko: [
        '마켓플레이스 캐시 동기화 수정',
        '포괄적인 문제 해결 가이드',
        'SKILL.md 검증용 GitHub Action',
      ],
    },
    bugFixes: {
      en: [
        'Marketplace was pulling outdated cached version',
        'Missing version field in cached SKILL.md files',
        'Added automatic symlink installation in setup wizard',
      ],
      ko: [
        '마켓플레이스가 오래된 캐시 버전을 가져오는 문제',
        '캐시된 SKILL.md 파일에서 version 필드 누락',
        '설정 마법사에 자동 심볼릭 링크 설치 추가',
      ],
    },
  },
  {
    version: '6.9.1',
    date: '2026-02-03',
    title: {
      en: 'Plugin Discovery Fix',
      ko: '플러그인 검색 수정',
    },
    type: 'patch',
    highlights: {
      en: [
        'Added version field to all 51 SKILL.md files',
        'Cleaned up orphaned skill directories',
        'Local skills symlink installation',
      ],
      ko: [
        '모든 51개 SKILL.md 파일에 version 필드 추가',
        '고아 스킬 디렉토리 정리',
        '로컬 스킬 심볼릭 링크 설치',
      ],
    },
    bugFixes: {
      en: [
        'Fixed "Unknown skill" error by adding version field',
        'Deleted orphaned .claude/skills/ and .codex/skills/ directories (-50,430 lines)',
        'Created 51 symlinks in ~/.claude/skills/ for reliable skill discovery',
      ],
      ko: [
        'version 필드 추가로 "Unknown skill" 오류 수정',
        '고아 .claude/skills/ 및 .codex/skills/ 디렉토리 삭제 (-50,430 라인)',
        '안정적인 스킬 검색을 위해 ~/.claude/skills/에 51개 심볼릭 링크 생성',
      ],
    },
  },
  {
    version: '6.7.1',
    date: '2026-01-31',
    title: {
      en: 'Documentation Synchronization',
      ko: '문서 동기화',
    },
    type: 'patch',
    highlights: {
      en: [
        'Aligned AGENTS.md to v6.7.0 (44 agents)',
        'Updated SKILL.md files with consistent versioning',
        'Synchronized checkpoint definitions',
      ],
      ko: [
        'AGENTS.md를 v6.7.0 (44개 에이전트)으로 정렬',
        '일관된 버전 관리로 SKILL.md 파일 업데이트',
        '체크포인트 정의 동기화',
      ],
    },
  },
  {
    version: '6.7.0',
    date: '2026-01-30',
    title: {
      en: 'Systematic Review Automation',
      ko: '체계적 문헌고찰 자동화',
    },
    type: 'major',
    highlights: {
      en: [
        'Category I: 4 new agents (I0-I3)',
        'PRISMA 2020 compliant pipeline',
        'Multi-database support (Semantic Scholar, OpenAlex, arXiv)',
        'AI-assisted screening with 6-dimension criteria',
      ],
      ko: [
        'Category I: 4개의 새 에이전트 (I0-I3)',
        'PRISMA 2020 준수 파이프라인',
        '다중 데이터베이스 지원 (Semantic Scholar, OpenAlex, arXiv)',
        '6차원 기준의 AI 보조 스크리닝',
      ],
    },
    features: {
      en: [
        'I0-ScholarAgentOrchestrator: Pipeline coordination and stage management',
        'I1-PaperRetrievalAgent: Multi-database fetching',
        'I2-ScreeningAssistant: AI-PRISMA screening',
        'I3-RAGBuilder: Vector database construction',
        'New checkpoints: SCH_DATABASE_SELECTION, SCH_SCREENING_CRITERIA, SCH_RAG_READINESS',
      ],
      ko: [
        'I0-ScholarAgentOrchestrator: 파이프라인 조정 및 단계 관리',
        'I1-PaperRetrievalAgent: 다중 데이터베이스 가져오기',
        'I2-ScreeningAssistant: AI-PRISMA 스크리닝',
        'I3-RAGBuilder: 벡터 데이터베이스 구축',
        '새 체크포인트: SCH_DATABASE_SELECTION, SCH_SCREENING_CRITERIA, SCH_RAG_READINESS',
      ],
    },
  },
  {
    version: '6.6.3',
    date: '2026-01-30',
    title: {
      en: 'Codex CLI SKILL.md Implementation',
      ko: 'Codex CLI SKILL.md 구현',
    },
    type: 'patch',
    highlights: {
      en: [
        'SKILL.md files enable actual skill loading',
        'Codex CLI support with behavioral checkpoints',
        'Comprehensive skill system documentation',
      ],
      ko: [
        'SKILL.md 파일이 실제 스킬 로딩 활성화',
        '행동 체크포인트가 있는 Codex CLI 지원',
        '포괄적인 스킬 시스템 문서',
      ],
    },
  },
  {
    version: '6.5.0',
    date: '2026-01-28',
    title: {
      en: 'Meta-Analysis System',
      ko: '메타분석 시스템',
    },
    type: 'minor',
    highlights: {
      en: [
        'C5/C6/C7 meta-analysis agents',
        '4-gate validation workflow',
        'Universal codebook support',
        'Hedges\' g calculation',
      ],
      ko: [
        'C5/C6/C7 메타분석 에이전트',
        '4게이트 검증 워크플로우',
        '범용 코드북 지원',
        'Hedges\' g 계산',
      ],
    },
    features: {
      en: [
        'C5-MetaAnalysisMaster: Multi-gate validation and orchestration',
        'C6-DataIntegrityGuard: Completeness validation, Hedges\' g calculation',
        'C7-ErrorPreventionEngine: Pattern detection and anomaly alerts',
        'CP_META_GATE checkpoint with 🔴 REQUIRED level',
      ],
      ko: [
        'C5-MetaAnalysisMaster: 다중 게이트 검증 및 조정',
        'C6-DataIntegrityGuard: 완전성 검증, Hedges\' g 계산',
        'C7-ErrorPreventionEngine: 패턴 감지 및 이상 알림',
        '🔴 필수 레벨의 CP_META_GATE 체크포인트',
      ],
    },
  },
  {
    version: '6.1.0',
    date: '2026-01-25',
    title: {
      en: 'Humanization Pipeline',
      ko: '휴먼화 파이프라인',
    },
    type: 'minor',
    highlights: {
      en: [
        'G5 Academic Style Auditor',
        'G6 Academic Style Humanizer',
        'F5 Humanization Verifier',
        '24 AI pattern categories',
      ],
      ko: [
        'G5 학술 스타일 감사자',
        'G6 학술 스타일 휴먼라이저',
        'F5 휴먼화 검증자',
        '24개 AI 패턴 카테고리',
      ],
    },
    features: {
      en: [
        'Transform AI-generated text to natural academic prose',
        'Based on Wikipedia AI Cleanup initiative',
        'Three transformation modes: Conservative, Balanced, Aggressive',
        'Preserve scholarly integrity while improving naturalness',
      ],
      ko: [
        'AI 생성 텍스트를 자연스러운 학술 산문으로 변환',
        'Wikipedia AI Cleanup 이니셔티브 기반',
        '세 가지 변환 모드: 보수적, 균형, 적극적',
        '자연스러움 개선하면서 학술적 무결성 보존',
      ],
    },
  },
  {
    version: '6.0.0',
    date: '2026-01-20',
    title: {
      en: 'VS Methodology & Human Checkpoints',
      ko: 'VS 방법론 및 인간 체크포인트',
    },
    type: 'major',
    highlights: {
      en: [
        'Verbalized Sampling (VS) T-Score system',
        '5-Phase VS process for creative alternatives',
        'Mode collapse prevention',
        '44 specialized agents across 9 categories',
      ],
      ko: [
        'Verbalized Sampling (VS) T-Score 시스템',
        '창의적 대안을 위한 5단계 VS 프로세스',
        '모드 붕괴 방지',
        '9개 카테고리의 44개 전문 에이전트',
      ],
    },
    features: {
      en: [
        'T-Score (Typicality Score) for option ranking',
        'Human checkpoint system with 🔴🟠🟡 levels',
        'Removed Sisyphus/OMC autonomous modes',
        'Mandatory checkpoints at all critical decisions',
      ],
      ko: [
        '옵션 순위 매기기를 위한 T-Score (전형성 점수)',
        '🔴🟠🟡 레벨의 인간 체크포인트 시스템',
        'Sisyphus/OMC 자율 모드 제거',
        '모든 중요한 결정에 필수 체크포인트',
      ],
    },
    breaking: {
      en: [
        'Removed Sisyphus Protocol ("work never stops")',
        'Removed Iron Law of Continuation',
        'Removed ralph/ultrawork/autopilot/ecomode autonomous modes',
        'All checkpoints now MANDATORY (no bypass)',
      ],
      ko: [
        'Sisyphus 프로토콜 제거 ("작업은 멈추지 않음")',
        '계속 법칙 제거',
        'ralph/ultrawork/autopilot/ecomode 자율 모드 제거',
        '모든 체크포인트 이제 필수 (우회 불가)',
      ],
    },
  },
  {
    version: '5.0.0',
    date: '2026-01-15',
    title: {
      en: 'Foundation Release',
      ko: '기초 릴리스',
    },
    type: 'major',
    highlights: {
      en: [
        'Human checkpoint system',
        'Memory system foundation',
        'Agent orchestration',
        'Bilingual support (EN/KO)',
      ],
      ko: [
        '인간 체크포인트 시스템',
        '메모리 시스템 기초',
        '에이전트 조정',
        '이중 언어 지원 (영어/한국어)',
      ],
    },
  },
];

const upcoming = {
  en: [
    'v7.0 - Enhanced RAG capabilities',
    'Tutorial system for new users',
    'Marketplace integration',
    'Additional database connectors',
  ],
  ko: [
    'v7.0 - 향상된 RAG 기능',
    '새 사용자를 위한 튜토리얼 시스템',
    '마켓플레이스 통합',
    '추가 데이터베이스 커넥터',
  ],
};

export default function ChangelogPage() {
  const locale = useLocale() as 'en' | 'ko';

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'major':
        return 'destructive';
      case 'minor':
        return 'default';
      case 'patch':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {locale === 'en' ? 'Changelog' : '변경 로그'}
        </h1>
        <p className="text-gray-400 text-lg">
          {locale === 'en'
            ? 'Track all notable changes to Diverga Research Coordinator'
            : 'Diverga 연구 코디네이터의 모든 주목할 만한 변경 사항 추적'}
        </p>
      </div>

      {/* Upcoming Features */}
      <Card className="p-6 bg-purple-950/20 border-purple-500/20">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">
          {locale === 'en' ? '🚀 Upcoming Features' : '🚀 예정된 기능'}
        </h2>
        <ul className="space-y-2">
          {upcoming[locale].map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <span className="text-purple-400 mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[3rem] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />

        <div className="space-y-12">
          {releases.map((release, index) => (
            <div key={release.version} className="relative pl-20">
              {/* Timeline dot */}
              <div className="absolute left-[2.4rem] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-black" />

              <Card className="p-6 bg-black/40 border-purple-500/20 hover:border-purple-500/40 transition-colors">
                {/* Version Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-white">
                        v{release.version}
                      </h2>
                      <Badge variant={getBadgeVariant(release.type)}>
                        {release.type}
                      </Badge>
                    </div>
                    <p className="text-lg font-semibold text-purple-400 mb-1">
                      {release.title[locale]}
                    </p>
                    <p className="text-sm text-gray-500">{release.date}</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {locale === 'en' ? 'Highlights' : '주요 내용'}
                  </h3>
                  <ul className="space-y-2">
                    {release.highlights[locale].map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="text-purple-400 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                {release.features && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">
                      {locale === 'en' ? '✨ Features' : '✨ 기능'}
                    </h3>
                    <ul className="space-y-2">
                      {release.features[locale].map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="text-green-400 mt-1">+</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Bug Fixes */}
                {release.bugFixes && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
                      {locale === 'en' ? '🐛 Bug Fixes' : '🐛 버그 수정'}
                    </h3>
                    <ul className="space-y-2">
                      {release.bugFixes[locale].map((fix, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{fix}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Breaking Changes */}
                {release.breaking && (
                  <div>
                    <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">
                      {locale === 'en'
                        ? '⚠️ Breaking Changes'
                        : '⚠️ 주요 변경 사항'}
                    </h3>
                    <ul className="space-y-2">
                      {release.breaking[locale].map((change, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="text-red-400 mt-1">!</span>
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Archive Notice */}
      <Card className="p-6 bg-black/40 border-gray-700/20">
        <p className="text-gray-400 text-center">
          {locale === 'en' ? (
            <>
              For complete version history and technical details, see{' '}
              <a
                href="https://github.com/HosungYou/Diverga/blob/main/CHANGELOG.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                CHANGELOG.md
              </a>{' '}
              on GitHub
            </>
          ) : (
            <>
              전체 버전 기록 및 기술 세부 정보는 GitHub의{' '}
              <a
                href="https://github.com/HosungYou/Diverga/blob/main/CHANGELOG.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                CHANGELOG.md
              </a>{' '}
              참조
            </>
          )}
        </p>
      </Card>
    </div>
  );
}
