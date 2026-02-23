'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Workflow,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Target,
  Zap,
  FileText,
  Users,
  Clock,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Journal Intelligence',
    title: 'Matching Pipeline',
    subtitle: 'Checkpoint-Based Journal Selection',
    description:
      'G1 Journal Matcher operates as a checkpoint-based pipeline with real-time MCP integration. Two human checkpoints ensure your priorities drive the final journal selection.',

    // Pipeline Flow
    pipelineTitle: 'Pipeline Flow',
    pipelineDescription:
      'Six sequential stages with two human checkpoints for precision journal selection:',
    stages: [
      {
        number: 1,
        title: 'User Request',
        titleKo: '사용자 요청',
        description: 'Analyze abstract and methodology',
        descriptionKo: '초록 및 방법론 분석',
        tools: 'journal_search_by_field + journal_metrics [parallel]',
        color: '#22ccff',
        time: '~30s',
        isCheckpoint: false,
      },
      {
        number: 2,
        title: 'CP_JOURNAL_PRIORITIES',
        titleKo: 'CP_JOURNAL_PRIORITIES',
        description: 'User selects: Impact Factor / Speed / OA / Scope Fit / Balanced',
        descriptionKo: '사용자 선택: 임팩트 팩터 / 속도 / OA / 범위 적합성 / 균형',
        tools: 'Human Checkpoint',
        color: '#f59e0b',
        time: 'User input',
        isCheckpoint: true,
      },
      {
        number: 3,
        title: 'Re-rank & Compare',
        titleKo: '재순위 및 비교',
        description: 'Re-rank and compare journals based on selected priorities',
        descriptionKo: '선택된 우선순위에 따라 저널 재순위 및 비교',
        tools: 'journal_compare + journal_publication_trends [parallel]',
        color: '#44ffaa',
        time: '~45s',
        isCheckpoint: false,
      },
      {
        number: 4,
        title: 'CP_JOURNAL_SELECTION',
        titleKo: 'CP_JOURNAL_SELECTION',
        description: 'User selects journal or strategy',
        descriptionKo: '사용자가 저널 또는 전략 선택',
        tools: 'Human Checkpoint',
        color: '#f59e0b',
        time: 'User input',
        isCheckpoint: true,
      },
      {
        number: 5,
        title: 'Deep Analysis',
        titleKo: '심층 분석',
        description: 'Fetch editor info and special issues for selected journal',
        descriptionKo: '선택된 저널의 편집자 정보 및 특별호 수집',
        tools: 'journal_editor_info + journal_special_issues [parallel]',
        color: '#9b59b6',
        time: '~60s',
        isCheckpoint: false,
      },
      {
        number: 6,
        title: 'Report Generation',
        titleKo: '보고서 생성',
        description: 'Detailed report + Cover letter template + Sequential submission plan',
        descriptionKo: '상세 보고서 + 커버레터 템플릿 + 순차 제출 계획',
        tools: 'Full report assembly',
        color: '#4ecdc4',
        time: '~30s',
        isCheckpoint: false,
      },
    ],

    // Checkpoint Details
    checkpointsTitle: 'Checkpoint Details',
    checkpointsDescription:
      'Two RECOMMENDED human checkpoints give you full control over the matching process:',
    checkpoints: [
      {
        id: 'CP_JOURNAL_PRIORITIES',
        level: 'RECOMMENDED',
        color: '#f59e0b',
        when: 'After initial API data collection, before ranking',
        whenKo: '초기 API 데이터 수집 후, 순위 산정 전',
        options: [
          { en: 'Impact Factor Priority', ko: '임팩트 팩터 우선' },
          { en: 'Publication Speed Priority', ko: '출판 속도 우선' },
          { en: 'Open Access Priority', ko: '오픈 액세스 우선' },
          { en: 'Scope Fit Priority', ko: '범위 적합성 우선' },
          { en: 'Balanced Recommendation', ko: '균형 추천' },
        ],
      },
      {
        id: 'CP_JOURNAL_SELECTION',
        level: 'RECOMMENDED',
        color: '#f59e0b',
        when: 'After comparison table presented',
        whenKo: '비교 표 제시 후',
        options: [
          { en: 'Select top journal', ko: '상위 저널 선택' },
          { en: 'Multi-journal strategy', ko: '다중 저널 전략' },
          { en: 'Search more journals', ko: '더 많은 저널 검색' },
          { en: 'Re-search different field', ko: '다른 분야로 재검색' },
        ],
      },
    ],

    // Natural Language Triggers
    triggersTitle: 'Natural Language Triggers',
    triggersDescription:
      'How user messages are routed to specific MCP tools:',
    triggers: [
      {
        phrase: '"Where should I submit this paper?"',
        tool: 'journal_search_by_field + journal_metrics',
        color: '#22ccff',
      },
      {
        phrase: '"Compare C&E and BJET"',
        tool: 'journal_compare',
        color: '#44ffaa',
      },
      {
        phrase: '"Show EdTech journal trends"',
        tool: 'journal_publication_trends',
        color: '#9b59b6',
      },
      {
        phrase: '"Who\'s the editor?"',
        tool: 'journal_editor_info',
        color: '#4ecdc4',
      },
      {
        phrase: '"Any special issue CFPs?"',
        tool: 'journal_special_issues',
        color: '#f59e0b',
      },
    ],

    // CTA
    ctaTitle: 'Ready to Find Your Journal?',
    ctaDescription:
      'The G1 Journal Matcher pipeline handles search, ranking, and deep analysis automatically with your priorities at the helm.',
    ctaButtons: {
      mcp: 'MCP Server Docs',
      agents: 'Journal Intelligence Agents',
    },
  },
  ko: {
    back: '저널 인텔리전스로 돌아가기',
    title: '매칭 파이프라인',
    subtitle: '체크포인트 기반 저널 선택',
    description:
      'G1 저널 매칭은 실시간 MCP 통합과 체크포인트 기반 파이프라인으로 작동합니다. 두 개의 휴먼 체크포인트가 사용자의 우선순위에 따른 최종 저널 선택을 보장합니다.',

    // Pipeline Flow
    pipelineTitle: '파이프라인 흐름',
    pipelineDescription:
      '두 개의 휴먼 체크포인트와 함께 정밀한 저널 선택을 위한 6단계 순차 파이프라인:',
    stages: [
      {
        number: 1,
        title: '사용자 요청',
        titleKo: '사용자 요청',
        description: '초록 및 방법론 분석',
        descriptionKo: '초록 및 방법론 분석',
        tools: 'journal_search_by_field + journal_metrics [병렬]',
        color: '#22ccff',
        time: '~30초',
        isCheckpoint: false,
      },
      {
        number: 2,
        title: 'CP_JOURNAL_PRIORITIES',
        titleKo: 'CP_JOURNAL_PRIORITIES',
        description: '사용자 선택: 임팩트 팩터 / 속도 / OA / 범위 적합성 / 균형',
        descriptionKo: '사용자 선택: 임팩트 팩터 / 속도 / OA / 범위 적합성 / 균형',
        tools: '휴먼 체크포인트',
        color: '#f59e0b',
        time: '사용자 입력',
        isCheckpoint: true,
      },
      {
        number: 3,
        title: '재순위 및 비교',
        titleKo: '재순위 및 비교',
        description: '선택된 우선순위에 따라 저널 재순위 및 비교',
        descriptionKo: '선택된 우선순위에 따라 저널 재순위 및 비교',
        tools: 'journal_compare + journal_publication_trends [병렬]',
        color: '#44ffaa',
        time: '~45초',
        isCheckpoint: false,
      },
      {
        number: 4,
        title: 'CP_JOURNAL_SELECTION',
        titleKo: 'CP_JOURNAL_SELECTION',
        description: '사용자가 저널 또는 전략 선택',
        descriptionKo: '사용자가 저널 또는 전략 선택',
        tools: '휴먼 체크포인트',
        color: '#f59e0b',
        time: '사용자 입력',
        isCheckpoint: true,
      },
      {
        number: 5,
        title: '심층 분석',
        titleKo: '심층 분석',
        description: '선택된 저널의 편집자 정보 및 특별호 수집',
        descriptionKo: '선택된 저널의 편집자 정보 및 특별호 수집',
        tools: 'journal_editor_info + journal_special_issues [병렬]',
        color: '#9b59b6',
        time: '~60초',
        isCheckpoint: false,
      },
      {
        number: 6,
        title: '보고서 생성',
        titleKo: '보고서 생성',
        description: '상세 보고서 + 커버레터 템플릿 + 순차 제출 계획',
        descriptionKo: '상세 보고서 + 커버레터 템플릿 + 순차 제출 계획',
        tools: '전체 보고서 조립',
        color: '#4ecdc4',
        time: '~30초',
        isCheckpoint: false,
      },
    ],

    // Checkpoint Details
    checkpointsTitle: '체크포인트 상세',
    checkpointsDescription:
      '두 개의 RECOMMENDED 휴먼 체크포인트가 매칭 과정에 대한 완전한 제어권을 제공합니다:',
    checkpoints: [
      {
        id: 'CP_JOURNAL_PRIORITIES',
        level: 'RECOMMENDED',
        color: '#f59e0b',
        when: 'After initial API data collection, before ranking',
        whenKo: '초기 API 데이터 수집 후, 순위 산정 전',
        options: [
          { en: 'Impact Factor Priority', ko: '임팩트 팩터 우선' },
          { en: 'Publication Speed Priority', ko: '출판 속도 우선' },
          { en: 'Open Access Priority', ko: '오픈 액세스 우선' },
          { en: 'Scope Fit Priority', ko: '범위 적합성 우선' },
          { en: 'Balanced Recommendation', ko: '균형 추천' },
        ],
      },
      {
        id: 'CP_JOURNAL_SELECTION',
        level: 'RECOMMENDED',
        color: '#f59e0b',
        when: 'After comparison table presented',
        whenKo: '비교 표 제시 후',
        options: [
          { en: 'Select top journal', ko: '상위 저널 선택' },
          { en: 'Multi-journal strategy', ko: '다중 저널 전략' },
          { en: 'Search more journals', ko: '더 많은 저널 검색' },
          { en: 'Re-search different field', ko: '다른 분야로 재검색' },
        ],
      },
    ],

    // Natural Language Triggers
    triggersTitle: '자연어 트리거',
    triggersDescription:
      '사용자 메시지가 특정 MCP 도구로 라우팅되는 방법:',
    triggers: [
      {
        phrase: '"이 논문 어디에 제출해야 하나요?"',
        tool: 'journal_search_by_field + journal_metrics',
        color: '#22ccff',
      },
      {
        phrase: '"C&E와 BJET 비교해줘"',
        tool: 'journal_compare',
        color: '#44ffaa',
      },
      {
        phrase: '"에듀테크 저널 트렌드 보여줘"',
        tool: 'journal_publication_trends',
        color: '#9b59b6',
      },
      {
        phrase: '"편집장이 누구야?"',
        tool: 'journal_editor_info',
        color: '#4ecdc4',
      },
      {
        phrase: '"특별호 CFP 있어?"',
        tool: 'journal_special_issues',
        color: '#f59e0b',
      },
    ],

    // CTA
    ctaTitle: '저널 찾을 준비가 되셨나요?',
    ctaDescription:
      'G1 저널 매처 파이프라인은 사용자의 우선순위를 중심으로 검색, 순위 산정, 심층 분석을 자동으로 처리합니다.',
    ctaButtons: {
      mcp: 'MCP 서버 문서',
      agents: '저널 인텔리전스 에이전트',
    },
  },
};

export default function PipelinePage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/journal-intelligence`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
        >
          {/* Glow background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center top, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
            }}
          />

          <div className="flex justify-center mb-6 relative z-10">
            <div
              className="flex h-16 w-16 items-center justify-center border border-[#f59e0b]/30"
              style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}
            >
              <Workflow className="h-8 w-8" />
            </div>
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#f59e0b' }}>
            {t.subtitle}
          </p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Pipeline Flow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.pipelineTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-10">{t.pipelineDescription}</p>

          <div className="space-y-3">
            {t.stages.map((stage, index) => (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`p-5 border ${
                    stage.isCheckpoint
                      ? 'bg-void-elevated'
                      : 'bg-void-elevated'
                  }`}
                  style={{
                    borderColor: stage.isCheckpoint
                      ? `${stage.color}40`
                      : 'rgba(255,255,255,0.07)',
                    boxShadow: stage.isCheckpoint
                      ? `0 0 0 1px ${stage.color}20`
                      : undefined,
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Stage number / checkpoint badge */}
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center border font-mono font-bold text-sm"
                      style={{
                        backgroundColor: `${stage.color}15`,
                        borderColor: `${stage.color}40`,
                        color: stage.color,
                      }}
                    >
                      {stage.isCheckpoint ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        stage.number
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3
                          className={`font-semibold ${
                            stage.isCheckpoint ? 'font-mono text-sm' : 'void-heading-3'
                          } text-stellar-core`}
                        >
                          {stage.title}
                        </h3>
                        {stage.isCheckpoint && (
                          <span
                            className="text-xs px-2 py-0.5 border font-mono font-bold"
                            style={{
                              color: stage.color,
                              borderColor: `${stage.color}40`,
                              backgroundColor: `${stage.color}15`,
                            }}
                          >
                            RECOMMENDED
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-stellar-dim mb-2">{stage.description}</p>
                      <code
                        className="text-xs px-2 py-1 border"
                        style={{
                          color: stage.isCheckpoint ? stage.color : '#22ccff',
                          borderColor: stage.isCheckpoint
                            ? `${stage.color}30`
                            : 'rgba(34,204,255,0.2)',
                          backgroundColor: stage.isCheckpoint
                            ? `${stage.color}10`
                            : 'rgba(34,204,255,0.08)',
                        }}
                      >
                        {stage.tools}
                      </code>
                    </div>

                    <div
                      className="flex shrink-0 items-center gap-1.5 text-xs px-2 py-1 border"
                      style={{
                        color: stage.color,
                        borderColor: `${stage.color}30`,
                        backgroundColor: `${stage.color}10`,
                      }}
                    >
                      <Clock className="h-3 w-3" />
                      <span>{stage.time}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Connection arrow between stages */}
                {index < t.stages.length - 1 && (
                  <div className="flex justify-start pl-8 py-1">
                    <div className="h-4 w-px bg-stellar-faint/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Checkpoint Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.checkpointsTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.checkpointsDescription}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.checkpoints.map((cp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="p-6 bg-void-elevated border"
                style={{ borderColor: `${cp.color}30` }}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-5">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center border"
                    style={{
                      backgroundColor: `${cp.color}15`,
                      borderColor: `${cp.color}40`,
                      color: cp.color,
                    }}
                  >
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <code
                      className="block text-sm font-mono font-bold mb-1"
                      style={{ color: cp.color }}
                    >
                      {cp.id}
                    </code>
                    <span
                      className="text-xs px-2 py-0.5 border font-mono font-bold"
                      style={{
                        color: cp.color,
                        borderColor: `${cp.color}40`,
                        backgroundColor: `${cp.color}15`,
                      }}
                    >
                      {cp.level}
                    </span>
                  </div>
                </div>

                {/* When */}
                <div className="mb-5">
                  <h4 className="text-xs font-mono text-stellar-faint mb-2">WHEN</h4>
                  <p className="text-sm text-stellar-dim">{locale === 'en' ? cp.when : cp.whenKo}</p>
                </div>

                {/* Options */}
                <div>
                  <h4 className="text-xs font-mono text-stellar-faint mb-3">OPTIONS</h4>
                  <div className="space-y-2">
                    {cp.options.map((opt, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2 border border-stellar-faint/10"
                      >
                        <CheckCircle2
                          className="h-3.5 w-3.5 shrink-0"
                          style={{ color: cp.color }}
                        />
                        <span className="text-sm text-stellar-bright">
                          {locale === 'en' ? opt.en : opt.ko}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Natural Language Triggers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.triggersTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.triggersDescription}</p>

          <div className="overflow-x-auto">
            <table className="w-full border border-stellar-faint/10">
              <thead>
                <tr className="bg-void-elevated border-b border-stellar-faint/10">
                  <th className="px-4 py-3 text-left text-xs font-mono text-stellar-faint">
                    USER MESSAGE
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-mono text-stellar-faint">
                    MCP TOOL(S)
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.triggers.map((trigger, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="border-b border-stellar-faint/10 hover:bg-void-elevated/50 transition-colors"
                  >
                    <td className="px-4 py-3 text-sm text-stellar-bright italic">
                      {trigger.phrase}
                    </td>
                    <td className="px-4 py-3">
                      <code
                        className="text-xs px-2 py-1 border"
                        style={{
                          color: trigger.color,
                          borderColor: `${trigger.color}30`,
                          backgroundColor: `${trigger.color}10`,
                        }}
                      >
                        {trigger.tool}
                      </code>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section Divider */}
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
              background:
                'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
              borderColor: 'rgba(245, 158, 11, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/cli/mcp-server`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                <Zap className="h-5 w-5" />
                {t.ctaButtons.mcp}
              </Link>
              <Link
                href={`/${locale}/docs/agents/journal-intelligence`}
                className="void-btn void-btn-primary inline-flex items-center gap-2"
              >
                {t.ctaButtons.agents}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
