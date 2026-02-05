'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { DocsBreadcrumb } from '@/components/docs';
import {
  CheckCircle,
  AlertCircle,
  FileSearch,
  Filter,
  Target,
  BarChart3,
  Download,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export default function PRISMAPipelinePage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'PRISMA 2020 Compliance',
      subtitle: 'Transparent systematic review reporting with AI-assisted screening',
      overview: {
        title: 'What is PRISMA 2020?',
        description: 'The Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) 2020 statement provides an evidence-based minimum set of items for reporting in systematic reviews.',
        items: [
          '27-item checklist for transparent reporting',
          'Flow diagram for study selection process',
          'Evidence-based reporting guidelines',
          'International standard for systematic reviews'
        ]
      },
      compliance: {
        title: 'ScholaRAG PRISMA Compliance',
        description: 'ScholaRAG implements PRISMA 2020 guidelines throughout the entire systematic review pipeline, ensuring methodological rigor and transparent reporting.',
      },
      stages: [
        {
          stage: '1. Identification',
          color: '#3498db',
          icon: FileSearch,
          description: 'Records identified from databases and registers',
          items: [
            'Records from databases (Semantic Scholar, OpenAlex, arXiv): n = X',
            'Records from other sources (manual search, citations): n = X',
            'Total records before deduplication: n = X'
          ],
          automation: 'Automatic API-based retrieval with metadata logging'
        },
        {
          stage: '2. Screening',
          color: '#f39c12',
          icon: Filter,
          description: 'Duplicates removed, records screened for relevance',
          items: [
            'Duplicates removed (by DOI, arXiv ID, title similarity): n = X',
            'Records screened using AI-assisted criteria: n = X',
            'Records excluded with documented reasons: n = X'
          ],
          automation: 'AI-PRISMA 6-Dimension screening with human verification'
        },
        {
          stage: '3. Eligibility',
          color: '#e67e22',
          icon: Target,
          description: 'Full-text articles assessed for eligibility',
          items: [
            'Reports sought for retrieval: n = X',
            'Reports not retrieved (no PDF available): n = X',
            'Reports assessed for eligibility: n = X',
            'Reports excluded with reasons: n = X'
          ],
          automation: 'Automated PDF download with retry logic and error tracking'
        },
        {
          stage: '4. Inclusion',
          color: '#27ae60',
          icon: CheckCircle,
          description: 'Studies included in final synthesis',
          items: [
            'Studies included in systematic review: n = X',
            'Reports of included studies: n = X',
            'Studies available for RAG query system: n = X'
          ],
          automation: 'Vector database construction with full-text indexing'
        }
      ],
      aiPrisma: {
        title: 'AI-PRISMA 6-Dimension Screening',
        description: 'ScholaRAG uses a 6-dimensional relevance scoring system for systematic screening, combining AI efficiency with human oversight.',
        dimensions: [
          {
            name: 'Population Relevance',
            description: 'Does the study focus on the target population?',
            scoring: 'Binary (Yes/No) or Likert scale (1-5)'
          },
          {
            name: 'Intervention/Exposure Match',
            description: 'Does the intervention or exposure align with inclusion criteria?',
            scoring: 'Binary or Likert with keyword matching'
          },
          {
            name: 'Outcome Alignment',
            description: 'Are the measured outcomes relevant to research question?',
            scoring: 'Binary or Likert with outcome validation'
          },
          {
            name: 'Study Design Fit',
            description: 'Does the study design meet methodological requirements?',
            scoring: 'Categorical (RCT, quasi-experimental, observational, etc.)'
          },
          {
            name: 'Time Period Compliance',
            description: 'Is the publication date within the specified range?',
            scoring: 'Binary (within/outside date range)'
          },
          {
            name: 'Language/Access Criteria',
            description: 'Is the study in acceptable language with available full text?',
            scoring: 'Binary (accessible/not accessible)'
          }
        ],
        threshold: {
          knowledge_repository: '50% relevance threshold (inclusive for broad coverage)',
          systematic_review: '90% relevance threshold (strict for evidence synthesis)'
        }
      },
      flowDiagram: {
        title: 'PRISMA Flow Diagram Generation',
        description: 'ScholaRAG automatically generates PRISMA 2020-compliant flow diagrams from your screening data.',
        features: [
          'Automatic generation from `screening_results.csv`',
          'Exportable formats: PNG, SVG, PDF',
          'Customizable labels and colors',
          'Includes exclusion reasons with counts',
          'Version control with timestamps'
        ],
        command: 'python scripts/07_generate_prisma.py --project projects/2025-01-15_MyProject'
      },
      checklist: {
        title: 'PRISMA 2020 Checklist Coverage',
        description: 'ScholaRAG addresses key PRISMA checklist items through automated workflows:',
        items: [
          { item: '#5', description: 'Eligibility criteria', coverage: 'Defined in config.yaml, enforced in screening' },
          { item: '#6', description: 'Information sources', coverage: 'Documented in database_strategy.md' },
          { item: '#7', description: 'Search strategy', coverage: 'Boolean queries logged in query_log.json' },
          { item: '#8', description: 'Selection process', coverage: 'AI-PRISMA 6-D screening with audit trail' },
          { item: '#10', description: 'Risk of bias', coverage: 'Optional integration with Agent B2 (Evidence Quality Appraiser)' },
          { item: '#16', description: 'Results of syntheses', coverage: 'RAG query system with citation tracking' },
          { item: '#17', description: 'Flow diagram', coverage: 'Auto-generated PRISMA 2020 diagram' }
        ]
      },
      resources: {
        title: 'Additional Resources',
        links: [
          {
            title: 'PRISMA 2020 Official Statement',
            url: 'http://www.prisma-statement.org/',
            description: 'Official PRISMA guidelines and checklist'
          },
          {
            title: 'PRISMA Flow Diagram Template',
            url: 'http://www.prisma-statement.org/PRISMAStatement/FlowDiagram',
            description: 'Downloadable flow diagram templates'
          },
          {
            title: 'ScholaRAG Documentation',
            url: '/docs/systematic-review/scholarag',
            description: 'Complete ScholaRAG integration guide',
            isInternal: true
          }
        ]
      }
    },
    ko: {
      title: 'PRISMA 2020 준수',
      subtitle: 'AI 보조 스크리닝을 통한 투명한 체계적 문헌고찰 보고',
      overview: {
        title: 'PRISMA 2020이란?',
        description: 'PRISMA 2020(Preferred Reporting Items for Systematic Reviews and Meta-Analyses) 성명서는 체계적 문헌고찰 보고를 위한 근거 기반 최소 항목 세트를 제공합니다.',
        items: [
          '투명한 보고를 위한 27개 항목 체크리스트',
          '연구 선택 과정을 위한 흐름도',
          '근거 기반 보고 지침',
          '체계적 문헌고찰의 국제 표준'
        ]
      },
      compliance: {
        title: 'ScholaRAG PRISMA 준수',
        description: 'ScholaRAG는 전체 체계적 문헌고찰 파이프라인에서 PRISMA 2020 지침을 구현하여 방법론적 엄격성과 투명한 보고를 보장합니다.',
      },
      stages: [
        {
          stage: '1. 식별 (Identification)',
          color: '#3498db',
          icon: FileSearch,
          description: '데이터베이스 및 등록부에서 식별된 레코드',
          items: [
            '데이터베이스에서 가져온 레코드 (Semantic Scholar, OpenAlex, arXiv): n = X',
            '기타 출처의 레코드 (수동 검색, 인용): n = X',
            '중복 제거 전 총 레코드: n = X'
          ],
          automation: '메타데이터 로깅을 통한 자동 API 기반 검색'
        },
        {
          stage: '2. 스크리닝 (Screening)',
          color: '#f39c12',
          icon: Filter,
          description: '중복 제거, 관련성 스크리닝',
          items: [
            '중복 제거 (DOI, arXiv ID, 제목 유사도 기준): n = X',
            'AI 보조 기준을 사용한 스크리닝 레코드: n = X',
            '사유 문서화와 함께 제외된 레코드: n = X'
          ],
          automation: '인간 검증을 통한 AI-PRISMA 6차원 스크리닝'
        },
        {
          stage: '3. 적격성 (Eligibility)',
          color: '#e67e22',
          icon: Target,
          description: '전문 논문의 적격성 평가',
          items: [
            '검색 대상 보고서: n = X',
            '검색되지 않은 보고서 (PDF 없음): n = X',
            '적격성 평가 보고서: n = X',
            '사유와 함께 제외된 보고서: n = X'
          ],
          automation: '재시도 로직 및 오류 추적을 통한 자동 PDF 다운로드'
        },
        {
          stage: '4. 포함 (Inclusion)',
          color: '#27ae60',
          icon: CheckCircle,
          description: '최종 종합에 포함된 연구',
          items: [
            '체계적 문헌고찰에 포함된 연구: n = X',
            '포함된 연구의 보고서: n = X',
            'RAG 쿼리 시스템에서 사용 가능한 연구: n = X'
          ],
          automation: '전문 색인을 통한 벡터 데이터베이스 구축'
        }
      ],
      aiPrisma: {
        title: 'AI-PRISMA 6차원 스크리닝',
        description: 'ScholaRAG는 체계적 스크리닝을 위해 6차원 관련성 점수 시스템을 사용하며, AI 효율성과 인간 감독을 결합합니다.',
        dimensions: [
          {
            name: '인구 관련성 (Population Relevance)',
            description: '연구가 대상 인구에 초점을 맞추고 있는가?',
            scoring: '이진 (예/아니오) 또는 리커트 척도 (1-5)'
          },
          {
            name: '개입/노출 일치 (Intervention/Exposure Match)',
            description: '개입 또는 노출이 포함 기준과 일치하는가?',
            scoring: '키워드 매칭을 통한 이진 또는 리커트'
          },
          {
            name: '결과 정렬 (Outcome Alignment)',
            description: '측정된 결과가 연구 질문과 관련이 있는가?',
            scoring: '결과 검증을 통한 이진 또는 리커트'
          },
          {
            name: '연구 설계 적합성 (Study Design Fit)',
            description: '연구 설계가 방법론적 요구 사항을 충족하는가?',
            scoring: '범주형 (RCT, 준실험, 관찰 등)'
          },
          {
            name: '기간 준수 (Time Period Compliance)',
            description: '출판 날짜가 지정된 범위 내에 있는가?',
            scoring: '이진 (범위 내/범위 외)'
          },
          {
            name: '언어/접근 기준 (Language/Access Criteria)',
            description: '연구가 허용 가능한 언어이며 전문이 제공되는가?',
            scoring: '이진 (접근 가능/접근 불가능)'
          }
        ],
        threshold: {
          knowledge_repository: '50% 관련성 임계값 (광범위한 커버리지를 위한 포괄적)',
          systematic_review: '90% 관련성 임계값 (근거 종합을 위한 엄격)'
        }
      },
      flowDiagram: {
        title: 'PRISMA 흐름도 생성',
        description: 'ScholaRAG는 스크리닝 데이터에서 PRISMA 2020 준수 흐름도를 자동으로 생성합니다.',
        features: [
          '`screening_results.csv`에서 자동 생성',
          '내보내기 형식: PNG, SVG, PDF',
          '사용자 정의 가능한 레이블 및 색상',
          '개수와 함께 제외 사유 포함',
          '타임스탬프가 있는 버전 제어'
        ],
        command: 'python scripts/07_generate_prisma.py --project projects/2025-01-15_MyProject'
      },
      checklist: {
        title: 'PRISMA 2020 체크리스트 범위',
        description: 'ScholaRAG는 자동화된 워크플로우를 통해 주요 PRISMA 체크리스트 항목을 다룹니다:',
        items: [
          { item: '#5', description: '적격성 기준', coverage: 'config.yaml에 정의, 스크리닝에서 시행' },
          { item: '#6', description: '정보 출처', coverage: 'database_strategy.md에 문서화' },
          { item: '#7', description: '검색 전략', coverage: 'query_log.json에 부울 쿼리 로깅' },
          { item: '#8', description: '선택 프로세스', coverage: '감사 추적을 통한 AI-PRISMA 6-D 스크리닝' },
          { item: '#10', description: '비뚤림 위험', coverage: 'Agent B2 (근거 품질 평가자)와의 선택적 통합' },
          { item: '#16', description: '종합 결과', coverage: '인용 추적을 통한 RAG 쿼리 시스템' },
          { item: '#17', description: '흐름도', coverage: '자동 생성된 PRISMA 2020 다이어그램' }
        ]
      },
      resources: {
        title: '추가 자료',
        links: [
          {
            title: 'PRISMA 2020 공식 성명서',
            url: 'http://www.prisma-statement.org/',
            description: '공식 PRISMA 지침 및 체크리스트'
          },
          {
            title: 'PRISMA 흐름도 템플릿',
            url: 'http://www.prisma-statement.org/PRISMAStatement/FlowDiagram',
            description: '다운로드 가능한 흐름도 템플릿'
          },
          {
            title: 'ScholaRAG 문서',
            url: '/docs/systematic-review/scholarag',
            description: '완전한 ScholaRAG 통합 가이드',
            isInternal: true
          }
        ]
      }
    }
  };

  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-dark text-stellar-bright">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <DocsBreadcrumb locale={locale} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-stellar-core">
            {t.title}
          </h1>
          <p className="text-xl text-stellar-dim">{t.subtitle}</p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 p-6 bg-void-elevated border border-stellar-faint/10"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#3498db]">
            {t.overview.title}
          </h2>
          <p className="text-stellar-dim mb-4">{t.overview.description}</p>
          <ul className="space-y-2">
            {t.overview.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-stellar-dim">
                <CheckCircle className="h-5 w-5 text-[#27ae60] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ScholaRAG Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 p-6 bg-[#44ffaa]/5 border border-[#44ffaa]/20"
        >
          <div className="flex items-start gap-3 mb-3">
            <Sparkles className="h-6 w-6 text-[#44ffaa] shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-[#44ffaa]">
                {t.compliance.title}
              </h2>
              <p className="text-stellar-dim">{t.compliance.description}</p>
            </div>
          </div>
        </motion.div>

        {/* PRISMA Stages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="space-y-6">
            {t.stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div
                  key={index}
                  className="bg-void-elevated border border-stellar-faint/10 p-6 hover:border-stellar-faint/20 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center border shrink-0"
                      style={{
                        backgroundColor: `${stage.color}15`,
                        borderColor: `${stage.color}30`,
                      }}
                    >
                      <Icon className="h-6 w-6" style={{ color: stage.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-stellar-core">
                        {stage.stage}
                      </h3>
                      <p className="text-stellar-dim mb-3">{stage.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {stage.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                        <span style={{ color: stage.color }}>▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-stellar-faint/10">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-[#44ffaa] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-stellar-faint uppercase">
                          {locale === 'en' ? 'Automation' : '자동화'}
                        </span>
                        <p className="text-sm text-[#44ffaa]">{stage.automation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* AI-PRISMA 6-Dimension Screening */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 p-6 bg-void-elevated border border-stellar-faint/10"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#f39c12]">
            {t.aiPrisma.title}
          </h2>
          <p className="text-stellar-dim mb-6">{t.aiPrisma.description}</p>

          <div className="grid gap-4 mb-6">
            {t.aiPrisma.dimensions.map((dimension, index) => (
              <div
                key={index}
                className="p-4 bg-void-surface border border-stellar-faint/10"
              >
                <h4 className="font-semibold text-stellar-bright mb-2">
                  {index + 1}. {dimension.name}
                </h4>
                <p className="text-sm text-stellar-dim mb-2">{dimension.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stellar-faint uppercase">
                    {locale === 'en' ? 'Scoring' : '점수화'}:
                  </span>
                  <code className="text-xs bg-void-dark px-2 py-1 text-[#44ffaa] font-mono">
                    {dimension.scoring}
                  </code>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#6bcf7f]/10 border border-[#6bcf7f]/30">
              <h4 className="font-semibold text-[#6bcf7f] mb-2">
                {locale === 'en' ? 'Knowledge Repository Mode' : '지식 저장소 모드'}
              </h4>
              <p className="text-sm text-stellar-dim">{t.aiPrisma.threshold.knowledge_repository}</p>
            </div>
            <div className="p-4 bg-[#ff6b6b]/10 border border-[#ff6b6b]/30">
              <h4 className="font-semibold text-[#ff6b6b] mb-2">
                {locale === 'en' ? 'Systematic Review Mode' : '체계적 문헌고찰 모드'}
              </h4>
              <p className="text-sm text-stellar-dim">{t.aiPrisma.threshold.systematic_review}</p>
            </div>
          </div>
        </motion.div>

        {/* Flow Diagram Generation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 p-6 bg-void-elevated border border-stellar-faint/10"
        >
          <div className="flex items-start gap-3 mb-4">
            <BarChart3 className="h-6 w-6 text-[#3498db] shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-[#3498db]">
                {t.flowDiagram.title}
              </h2>
              <p className="text-stellar-dim mb-4">{t.flowDiagram.description}</p>
            </div>
          </div>

          <ul className="space-y-2 mb-4">
            {t.flowDiagram.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-stellar-dim">
                <CheckCircle className="h-5 w-5 text-[#27ae60] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="p-4 bg-void-surface border border-stellar-faint/10 font-mono text-sm">
            <div className="flex items-center gap-2 mb-2">
              <Download className="h-4 w-4 text-[#44ffaa]" />
              <span className="text-stellar-faint uppercase text-xs">
                {locale === 'en' ? 'Command' : '명령'}
              </span>
            </div>
            <code className="text-[#44ffaa]">{t.flowDiagram.command}</code>
          </div>
        </motion.div>

        {/* PRISMA Checklist Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 p-6 bg-void-elevated border border-stellar-faint/10"
        >
          <h2 className="text-2xl font-semibold mb-4 text-stellar-core">
            {t.checklist.title}
          </h2>
          <p className="text-stellar-dim mb-6">{t.checklist.description}</p>

          <div className="space-y-3">
            {t.checklist.items.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-void-surface border border-stellar-faint/10 hover:border-stellar-faint/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="px-2 py-1 text-xs font-mono bg-[#44ffaa]/20 text-[#44ffaa] border border-[#44ffaa]/30 shrink-0">
                    {item.item}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-stellar-bright mb-1">
                      {item.description}
                    </h4>
                    <p className="text-sm text-stellar-dim">{item.coverage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-6 bg-void-elevated border border-stellar-faint/10"
        >
          <h2 className="text-2xl font-semibold mb-4 text-stellar-core">
            {t.resources.title}
          </h2>
          <div className="space-y-3">
            {t.resources.links.map((link, index) => (
              <a
                key={index}
                href={link.isInternal ? `/${locale}${link.url}` : link.url}
                target={link.isInternal ? undefined : '_blank'}
                rel={link.isInternal ? undefined : 'noopener noreferrer'}
                className="flex items-start gap-3 p-4 bg-void-surface border border-stellar-faint/10 hover:border-stellar-faint/30 transition-colors group"
              >
                <ExternalLink className="h-5 w-5 text-[#44ffaa] shrink-0 mt-0.5 group-hover:text-[#44ffaa]/80 transition-colors" />
                <div>
                  <h4 className="font-semibold text-stellar-bright group-hover:text-stellar-core transition-colors">
                    {link.title}
                  </h4>
                  <p className="text-sm text-stellar-dim">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
