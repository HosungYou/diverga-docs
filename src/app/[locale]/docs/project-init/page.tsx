'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Wand2,
  FileText,
  Globe,
  CheckCircle2,
  Sparkles,
  FolderTree,
  ArrowRight,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'Natural Language Project Init',
    subtitle: 'Start Research Projects with Plain Language',
    description: 'Diverga auto-detects your research intent from natural language input and generates a complete project structure with documentation. No commands to memorize. Introduced in v8.0.',

    detectionTitle: 'Auto-Detection',
    detectionDescription: 'Just describe what you want to research. Diverga identifies the research type:',
    researchTypes: [
      { type: 'systematic_review', label: 'Systematic Review', trigger: '"I want to conduct a systematic review on..."', color: '#00bcd4' },
      { type: 'meta_analysis', label: 'Meta-Analysis', trigger: '"Analyze effect sizes across studies about..."', color: '#9b59b6' },
      { type: 'literature_review', label: 'Literature Review', trigger: '"What does the literature say about..."', color: '#4ecdc4' },
      { type: 'experimental', label: 'Experimental', trigger: '"I want to test whether X causes Y..."', color: '#ff6b6b' },
      { type: 'qualitative', label: 'Qualitative', trigger: '"Explore lived experiences of..."', color: '#45b7d1' },
      { type: 'mixed_methods', label: 'Mixed Methods', trigger: '"Both quantify and understand why..."', color: '#f0e68c' },
    ],

    bilingualTitle: 'Bilingual Support',
    bilingualDescription: 'Works equally well in English and Korean:',
    bilingualExamples: [
      { lang: 'EN', input: '"I want to study how AI chatbots help students learn languages"', detected: 'experimental / quasi-experimental' },
      { lang: 'KO', input: '"AI 챗봇이 학생들의 언어 학습에 어떻게 도움이 되는지 연구하고 싶어요"', detected: 'experimental / quasi-experimental' },
    ],

    docsTitle: 'Auto-Generated Documentation',
    docsDescription: 'Every project starts with 7 documentation files:',
    docs: [
      { name: 'PROJECT_STATUS.md', description: 'Current progress and stage tracking', icon: 'fileText', color: '#44ffaa' },
      { name: 'DECISION_LOG.md', description: 'All checkpoint decisions with timestamps', icon: 'fileText', color: '#22ccff' },
      { name: 'RESEARCH_AUDIT.md', description: 'Methodology audit trail for transparency', icon: 'fileText', color: '#ffcc22' },
      { name: 'METHODOLOGY.md', description: 'Research design and approach documentation', icon: 'fileText', color: '#9b59b6' },
      { name: 'TIMELINE.md', description: 'Project milestones and deadlines', icon: 'fileText', color: '#ff8844' },
      { name: 'REFERENCES.md', description: 'Bibliography and citation tracking', icon: 'fileText', color: '#4ecdc4' },
      { name: 'README.md', description: 'Project overview and quick reference', icon: 'fileText', color: '#ff6b6b' },
    ],

    structureTitle: 'Generated Project Structure',
    structureExample: `.diverga/
├── project.yaml          # Research configuration
├── memory/
│   ├── decision-log.yaml # Checkpoint decisions
│   └── context.json      # Session context
├── docs/
│   ├── PROJECT_STATUS.md
│   ├── DECISION_LOG.md
│   ├── RESEARCH_AUDIT.md
│   ├── METHODOLOGY.md
│   ├── TIMELINE.md
│   ├── REFERENCES.md
│   └── README.md
└── data/                  # Research data directory`,

    ctaTitle: 'Start Your Research Project',
    ctaDescription: 'Just tell Diverga what you want to research. Everything else is automatic.',
    ctaButtons: {
      quickStart: 'Quick Start Guide',
      agents: 'Browse Agents',
    },
  },
  ko: {
    back: '문서로 돌아가기',
    title: '자연어 프로젝트 초기화',
    subtitle: '일상 언어로 연구 프로젝트 시작',
    description: 'Diverga는 자연어 입력에서 연구 의도를 자동으로 감지하고 문서가 포함된 완전한 프로젝트 구조를 생성합니다. 명령어를 외울 필요가 없습니다. v8.0에서 도입되었습니다.',

    detectionTitle: '자동 감지',
    detectionDescription: '연구하고 싶은 것을 설명하기만 하면 됩니다. Diverga가 연구 유형을 식별합니다:',
    researchTypes: [
      { type: 'systematic_review', label: '체계적 문헌고찰', trigger: '"...에 대한 체계적 문헌고찰을 하고 싶어요"', color: '#00bcd4' },
      { type: 'meta_analysis', label: '메타분석', trigger: '"...에 대한 연구들의 효과크기를 분석하고 싶어요"', color: '#9b59b6' },
      { type: 'literature_review', label: '문헌 검토', trigger: '"...에 대해 문헌은 뭐라고 하나요?"', color: '#4ecdc4' },
      { type: 'experimental', label: '실험 연구', trigger: '"X가 Y를 유발하는지 검증하고 싶어요"', color: '#ff6b6b' },
      { type: 'qualitative', label: '질적 연구', trigger: '"...의 경험을 탐구하고 싶어요"', color: '#45b7d1' },
      { type: 'mixed_methods', label: '혼합 방법', trigger: '"정량화하고 이유도 이해하고 싶어요"', color: '#f0e68c' },
    ],

    bilingualTitle: '이중 언어 지원',
    bilingualDescription: '영어와 한국어 모두 동일하게 작동합니다:',
    bilingualExamples: [
      { lang: 'EN', input: '"I want to study how AI chatbots help students learn languages"', detected: 'experimental / quasi-experimental' },
      { lang: 'KO', input: '"AI 챗봇이 학생들의 언어 학습에 어떻게 도움이 되는지 연구하고 싶어요"', detected: 'experimental / quasi-experimental' },
    ],

    docsTitle: '자동 생성 문서',
    docsDescription: '모든 프로젝트는 7개의 문서 파일로 시작합니다:',
    docs: [
      { name: 'PROJECT_STATUS.md', description: '현재 진행 상황 및 단계 추적', icon: 'fileText', color: '#44ffaa' },
      { name: 'DECISION_LOG.md', description: '타임스탬프와 함께 모든 체크포인트 결정', icon: 'fileText', color: '#22ccff' },
      { name: 'RESEARCH_AUDIT.md', description: '투명성을 위한 방법론 감사 추적', icon: 'fileText', color: '#ffcc22' },
      { name: 'METHODOLOGY.md', description: '연구 설계 및 접근 방식 문서', icon: 'fileText', color: '#9b59b6' },
      { name: 'TIMELINE.md', description: '프로젝트 마일스톤 및 기한', icon: 'fileText', color: '#ff8844' },
      { name: 'REFERENCES.md', description: '참고문헌 및 인용 추적', icon: 'fileText', color: '#4ecdc4' },
      { name: 'README.md', description: '프로젝트 개요 및 빠른 참조', icon: 'fileText', color: '#ff6b6b' },
    ],

    structureTitle: '생성된 프로젝트 구조',
    structureExample: `.diverga/
├── project.yaml          # 연구 설정
├── memory/
│   ├── decision-log.yaml # 체크포인트 결정
│   └── context.json      # 세션 맥락
├── docs/
│   ├── PROJECT_STATUS.md
│   ├── DECISION_LOG.md
│   ├── RESEARCH_AUDIT.md
│   ├── METHODOLOGY.md
│   ├── TIMELINE.md
│   ├── REFERENCES.md
│   └── README.md
└── data/                  # 연구 데이터 디렉토리`,

    ctaTitle: '연구 프로젝트 시작하기',
    ctaDescription: 'Diverga에 무엇을 연구하고 싶은지 말하기만 하면 됩니다. 나머지는 자동입니다.',
    ctaButtons: {
      quickStart: '빠른 시작 가이드',
      agents: '에이전트 둘러보기',
    },
  },
};

export default function ProjectInitPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link href={`/${locale}/docs`} className="void-nav-link inline-flex items-center gap-2 mb-8">
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center top, rgba(155, 89, 182, 0.12) 0%, transparent 50%)' }} />
          <div className="flex justify-center mb-6 relative z-10">
            <div className="flex h-16 w-16 items-center justify-center border border-[#9b59b6]/30" style={{ backgroundColor: 'rgba(155, 89, 182, 0.15)', color: '#9b59b6' }}>
              <Wand2 className="h-8 w-8" />
            </div>
          </div>
          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#9b59b6' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>
        </motion.div>

        <div className="void-divider-glow mb-16" />

        {/* Auto-Detection */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20" style={{ backgroundColor: 'rgba(155, 89, 182, 0.15)' }}>
              <Sparkles className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.detectionTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.detectionDescription}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.researchTypes.map((rt, index) => (
              <motion.div key={rt.type} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="p-4 bg-void-elevated border border-stellar-faint/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: rt.color }} />
                  <span className="font-mono text-xs" style={{ color: rt.color }}>{rt.type}</span>
                </div>
                <h3 className="void-heading-3 text-stellar-core mb-2">{rt.label}</h3>
                <p className="text-xs text-stellar-faint italic">{rt.trigger}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Bilingual */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20" style={{ backgroundColor: 'rgba(69, 183, 209, 0.15)' }}>
              <Globe className="h-5 w-5" style={{ color: '#45b7d1' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.bilingualTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.bilingualDescription}</p>
          <div className="space-y-4">
            {t.bilingualExamples.map((ex, index) => (
              <div key={index} className="p-4 bg-void-elevated border border-stellar-faint/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#45b7d1]/20 text-[#45b7d1] font-mono text-xs">{ex.lang}</span>
                </div>
                <p className="text-stellar-bright mb-2 italic">{ex.input}</p>
                <p className="text-xs text-stellar-faint">Detected: <span className="text-[#44ffaa]">{ex.detected}</span></p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Auto-Generated Docs */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20" style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)' }}>
              <FileText className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.docsTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.docsDescription}</p>
          <div className="space-y-3">
            {t.docs.map((doc, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-center gap-4 p-3 bg-void-elevated border border-stellar-faint/10">
                <div className="flex h-8 w-8 items-center justify-center shrink-0" style={{ color: doc.color }}>
                  <FileText className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <code className="font-mono text-sm" style={{ color: doc.color }}>{doc.name}</code>
                  <p className="text-xs text-stellar-faint">{doc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Structure */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20" style={{ backgroundColor: 'rgba(155, 89, 182, 0.15)' }}>
              <FolderTree className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.structureTitle}</h2>
          </div>
          <div className="bg-void-elevated border border-stellar-faint/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-stellar-faint/10">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f56' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#27c93f' }} />
            </div>
            <pre className="p-6 text-sm font-mono text-stellar-bright overflow-x-auto whitespace-pre">{t.structureExample}</pre>
          </div>
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <div className="p-8 border" style={{ background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.1) 0%, rgba(68, 255, 170, 0.1) 100%)', borderColor: 'rgba(155, 89, 182, 0.2)' }}>
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/${locale}/docs/quick-start`} className="void-btn void-btn-accent inline-flex items-center gap-2">
                {t.ctaButtons.quickStart}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href={`/${locale}/docs/agents`} className="void-btn void-btn-primary inline-flex items-center gap-2">
                {t.ctaButtons.agents}
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
