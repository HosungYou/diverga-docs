'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Terminal, FolderTree, Settings, Database, CheckCircle2, ArrowRight } from 'lucide-react';
import { DocsBreadcrumb } from '@/components/docs';

export default function ScholaRAGPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'ScholaRAG CLI',
      subtitle: 'Command-line interface for systematic literature review automation',
      description: 'Manage ScholaRAG projects with standardized commands for PRISMA 2020 workflows.',

      // Quick Start
      quickStart: 'Quick Start',
      quickStartDesc: 'Initialize and manage ScholaRAG projects from the terminal.',

      // Commands Section
      commands: 'CLI Commands',
      commandsDesc: 'Complete reference for all ScholaRAG CLI commands.',

      init: 'Initialize Project',
      initDesc: 'Create a new ScholaRAG project with standardized folder structure.',

      status: 'Check Status',
      statusDesc: 'Show current project status and validate folder structure.',

      list: 'List Projects',
      listDesc: 'List all ScholaRAG projects in the projects/ directory.',

      stageStatus: 'Stage Status',
      stageStatusDesc: 'Show current stage and progress in the 7-stage workflow.',

      next: 'Next Stage',
      nextDesc: 'Display the next stage prompt and expected actions.',

      runStage: 'Run Stage',
      runStageDesc: 'Execute a specific pipeline stage with prerequisite validation.',

      // Project Structure
      structure: 'Project Structure',
      structureDesc: 'Standard folder organization for all ScholaRAG projects.',

      // Configuration
      config: 'Configuration',
      configDesc: 'Project configuration file format and options.',

      // Stage Commands
      stages: 'Pipeline Stages',
      stagesDesc: 'Execute the 7-stage systematic review workflow.',

      stage1: 'Stage 1: Identification',
      stage1Desc: 'Fetch papers from academic databases.',

      stage2: 'Stage 2: Deduplication',
      stage2Desc: 'Remove duplicate papers by DOI and title.',

      stage3: 'Stage 3: Screening',
      stage3Desc: 'AI-assisted PRISMA screening with Claude.',

      stage4: 'Stage 4: PDF Download',
      stage4Desc: 'Download PDFs with retry logic.',

      stage5: 'Stage 5: RAG Building',
      stage5Desc: 'Build vector database with ChromaDB.',

      stage6: 'Stage 6: Query RAG',
      stage6Desc: 'Interactive literature review queries.',

      stage7: 'Stage 7: PRISMA Diagram',
      stage7Desc: 'Generate PRISMA 2020 flow diagram.',

      // Examples
      examples: 'Examples',
      examplesDesc: 'Common usage patterns and workflows.',
    },
    ko: {
      title: 'ScholaRAG CLI',
      subtitle: '체계적 문헌고찰 자동화를 위한 커맨드라인 인터페이스',
      description: 'PRISMA 2020 워크플로우를 위한 표준화된 명령어로 ScholaRAG 프로젝트를 관리합니다.',

      quickStart: '빠른 시작',
      quickStartDesc: '터미널에서 ScholaRAG 프로젝트를 초기화하고 관리합니다.',

      commands: 'CLI 명령어',
      commandsDesc: '모든 ScholaRAG CLI 명령어에 대한 완전한 레퍼런스.',

      init: '프로젝트 초기화',
      initDesc: '표준화된 폴더 구조로 새 ScholaRAG 프로젝트를 생성합니다.',

      status: '상태 확인',
      statusDesc: '현재 프로젝트 상태를 표시하고 폴더 구조를 검증합니다.',

      list: '프로젝트 목록',
      listDesc: 'projects/ 디렉토리의 모든 ScholaRAG 프로젝트를 나열합니다.',

      stageStatus: '단계 상태',
      stageStatusDesc: '7단계 워크플로우에서 현재 단계와 진행 상황을 표시합니다.',

      next: '다음 단계',
      nextDesc: '다음 단계 프롬프트와 예상 작업을 표시합니다.',

      runStage: '단계 실행',
      runStageDesc: '전제 조건 검증과 함께 특정 파이프라인 단계를 실행합니다.',

      structure: '프로젝트 구조',
      structureDesc: '모든 ScholaRAG 프로젝트의 표준 폴더 구조.',

      config: '설정',
      configDesc: '프로젝트 설정 파일 형식과 옵션.',

      stages: '파이프라인 단계',
      stagesDesc: '7단계 체계적 문헌고찰 워크플로우를 실행합니다.',

      stage1: '단계 1: 식별',
      stage1Desc: '학술 데이터베이스에서 논문을 가져옵니다.',

      stage2: '단계 2: 중복 제거',
      stage2Desc: 'DOI와 제목으로 중복 논문을 제거합니다.',

      stage3: '단계 3: 스크리닝',
      stage3Desc: 'Claude를 사용한 AI 지원 PRISMA 스크리닝.',

      stage4: '단계 4: PDF 다운로드',
      stage4Desc: '재시도 로직으로 PDF를 다운로드합니다.',

      stage5: '단계 5: RAG 구축',
      stage5Desc: 'ChromaDB로 벡터 데이터베이스를 구축합니다.',

      stage6: '단계 6: RAG 쿼리',
      stage6Desc: '대화형 문헌 검토 쿼리.',

      stage7: '단계 7: PRISMA 다이어그램',
      stage7Desc: 'PRISMA 2020 흐름도를 생성합니다.',

      examples: '예제',
      examplesDesc: '일반적인 사용 패턴과 워크플로우.',
    },
  };

  const t = content[locale];

  return (
    <div className="pb-16">
      <DocsBreadcrumb locale={locale} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#00bcd4]/10 border border-[#00bcd4]/30">
            <Terminal className="w-6 h-6 text-[#00bcd4]" />
          </div>
          <h1 className="text-4xl font-display text-stellar-core">{t.title}</h1>
        </div>
        <p className="text-xl text-stellar-dim mb-2">{t.subtitle}</p>
        <p className="text-stellar-muted">{t.description}</p>
      </motion.div>

      {/* Quick Start */}
      <Section title={t.quickStart} description={t.quickStartDesc} icon={<Terminal />}>
        <CodeBlock
          title="Initialize New Project"
          code={`# Interactive mode
python scholarag_cli.py init

# With arguments (recommended)
python scholarag_cli.py init \\
  --name "AI-Healthcare-Adoption" \\
  --question "What factors influence AI adoption in hospitals?" \\
  --project-type systematic_review \\
  --databases semantic_scholar openalex arxiv`}
        />
      </Section>

      {/* CLI Commands */}
      <Section title={t.commands} description={t.commandsDesc} icon={<Terminal />}>

        {/* Init Command */}
        <CommandCard
          title="scholarag init"
          description={t.initDesc}
          options={[
            { name: '--name', type: 'TEXT', desc: 'Project name (e.g., "AI-Healthcare-Adoption")' },
            { name: '--question', type: 'TEXT', desc: 'Main research question' },
            { name: '--project-type', type: 'CHOICE', desc: 'systematic_review or knowledge_repository' },
            { name: '--databases', type: 'MULTIPLE', desc: 'semantic_scholar, openalex, arxiv, scopus, wos' },
          ]}
          example={`python scholarag_cli.py init \\
  --name "AI-Chatbots-Learning" \\
  --question "How do AI chatbots improve language learning?" \\
  --project-type systematic_review`}
        />

        {/* Status Command */}
        <CommandCard
          title="scholarag status"
          description={t.statusDesc}
          options={[
            { name: 'PROJECT_PATH', type: 'PATH', desc: 'Path to project directory' },
          ]}
          example={`python scholarag_cli.py status projects/2025-01-12_AI-Healthcare`}
        />

        {/* List Command */}
        <CommandCard
          title="scholarag list"
          description={t.listDesc}
          options={[]}
          example={`python scholarag_cli.py list`}
        />

        {/* Stage Status Command */}
        <CommandCard
          title="scholarag stage-status"
          description={t.stageStatusDesc}
          options={[]}
          example={`python scholarag_cli.py stage-status`}
        />

        {/* Next Command */}
        <CommandCard
          title="scholarag next"
          description={t.nextDesc}
          options={[]}
          example={`python scholarag_cli.py next`}
        />

        {/* Run Stage Command */}
        <CommandCard
          title="scholarag run-stage"
          description={t.runStageDesc}
          options={[
            { name: 'STAGE', type: 'INTEGER', desc: 'Stage number (1-7)' },
            { name: '--force', type: 'FLAG', desc: 'Skip prerequisite validation' },
          ]}
          example={`python scholarag_cli.py run-stage 2
python scholarag_cli.py run-stage 3 --force`}
        />
      </Section>

      {/* Project Structure */}
      <Section title={t.structure} description={t.structureDesc} icon={<FolderTree />}>
        <div className="bg-void-elevated border border-stellar-faint/20 p-6 font-mono text-sm">
          <pre className="text-stellar-dim overflow-x-auto">
{`projects/2025-01-12_ProjectName/
├── .scholarag              # Metadata for dashboard tracking
├── config.yaml             # Project configuration
├── README.md               # Project documentation
├── data/
│   ├── 01_identification/  # Stage 1: Database search results
│   │   ├── semantic_scholar_results.csv
│   │   ├── openalex_results.csv
│   │   ├── arxiv_results.csv
│   │   └── deduplicated.csv
│   ├── 02_screening/       # Stage 2: Screening decisions
│   │   ├── title_abstract.csv
│   │   ├── excluded.csv
│   │   └── decisions.json
│   ├── 03_full_text/       # Stage 3: Final included papers
│   │   ├── assessment.csv
│   │   ├── final_dataset.csv
│   │   └── exclusion_reasons.csv
│   └── pdfs/               # Downloaded PDF files
├── rag/
│   ├── chroma_db/          # Vector database
│   ├── rag_config.yaml     # RAG configuration
│   └── ingestion_log.txt   # Ingestion log
├── outputs/
│   ├── prisma_flowchart.png
│   ├── prisma_flowchart.mmd
│   └── search_strategy.md
└── conversations/          # RAG session logs`}
          </pre>
        </div>
      </Section>

      {/* Configuration */}
      <Section title={t.config} description={t.configDesc} icon={<Settings />}>
        <CodeBlock
          title="config.yaml"
          language="yaml"
          code={`project:
  name: "AI-Healthcare-Adoption"
  created: "2025-01-12"
  research_question: "What factors influence AI adoption in hospitals?"
  project_type: systematic_review  # or knowledge_repository
  version: "2.0.0"

# AI-PRISMA Configuration
ai_prisma_rubric:
  enabled: true
  llm: claude-haiku-4-5
  temperature: 0.1
  score_threshold:
    auto_include: 40    # 80% of max score (50 points)
    auto_exclude: 0
  human_validation:
    required: true
    sample_size: 50
    kappa_threshold: 0.61

# Database Configuration
databases:
  open_access:
    semantic_scholar: { enabled: true }
    openalex: { enabled: true }
    arxiv: { enabled: true }
  institutional:
    scopus:
      enabled: false
      note: "Requires SCOPUS_API_KEY in .env"
    web_of_science:
      enabled: false
      note: "Requires WOS_API_KEY in .env"

# Search Parameters
search:
  year_range: { start: 2015, end: 2025 }
  languages: [english]
  max_results_per_db: 10000

# RAG Settings
rag:
  vector_db: chromadb
  embedding_model: text-embedding-3-large
  llm: claude-haiku-4-5
  chunk_size: 1000
  chunk_overlap: 200
  retrieval_k: 10`}
        />
      </Section>

      {/* Pipeline Stages */}
      <Section title={t.stages} description={t.stagesDesc} icon={<Database />}>
        <div className="space-y-4">
          <StageCard
            number={1}
            title={t.stage1}
            description={t.stage1Desc}
            command="python scripts/01_fetch_papers.py"
            output="data/01_identification/*.csv"
          />
          <StageCard
            number={2}
            title={t.stage2}
            description={t.stage2Desc}
            command="python scripts/02_deduplicate.py"
            output="data/01_identification/deduplicated.csv"
          />
          <StageCard
            number={3}
            title={t.stage3}
            description={t.stage3Desc}
            command="python scripts/03_screen_papers.py"
            output="data/02_screening/*.csv"
          />
          <StageCard
            number={4}
            title={t.stage4}
            description={t.stage4Desc}
            command="python scripts/04_download_pdfs.py"
            output="data/pdfs/*.pdf"
          />
          <StageCard
            number={5}
            title={t.stage5}
            description={t.stage5Desc}
            command="python scripts/05_build_rag.py"
            output="rag/chroma_db/"
          />
          <StageCard
            number={6}
            title={t.stage6}
            description={t.stage6Desc}
            command="python scripts/06_query_rag.py"
            output="conversations/*.json"
          />
          <StageCard
            number={7}
            title={t.stage7}
            description={t.stage7Desc}
            command="python scripts/07_generate_prisma.py"
            output="outputs/prisma_flowchart.png"
          />
        </div>
      </Section>

      {/* Examples */}
      <Section title={t.examples} description={t.examplesDesc} icon={<CheckCircle2 />}>
        <div className="space-y-6">
          <ExampleCard
            title="Create New Project"
            steps={[
              'Initialize project structure',
              'Configure databases',
              'Set PRISMA criteria',
              'Begin Stage 1',
            ]}
            code={`# Auto-execute with echo pipe
echo -e "Test-Project\\nHow does AI improve learning?\\nsystematic_review" | python scholarag_cli.py init

# Or with CLI arguments (recommended)
python scholarag_cli.py init \\
  --name "AI-Learning-Research" \\
  --question "How does AI improve student learning outcomes?" \\
  --project-type systematic_review \\
  --databases semantic_scholar openalex arxiv`}
          />

          <ExampleCard
            title="Check Project Progress"
            steps={[
              'List all projects',
              'Check specific project status',
              'View current stage',
              'Show next action',
            ]}
            code={`# List all projects
python scholarag_cli.py list

# Check status
python scholarag_cli.py status projects/2025-01-12_AI-Learning

# Current stage
python scholarag_cli.py stage-status

# Next action
python scholarag_cli.py next`}
          />

          <ExampleCard
            title="Run Full Pipeline"
            steps={[
              'Fetch papers from databases',
              'Deduplicate by DOI/title',
              'AI screening with PRISMA',
              'Download PDFs',
              'Build RAG system',
              'Query literature',
              'Generate PRISMA diagram',
            ]}
            code={`# Execute stages sequentially
python scholarag_cli.py run-stage 1
python scholarag_cli.py run-stage 2
python scholarag_cli.py run-stage 3
python scholarag_cli.py run-stage 4
python scholarag_cli.py run-stage 5
python scholarag_cli.py run-stage 6
python scholarag_cli.py run-stage 7`}
          />
        </div>
      </Section>
    </div>
  );
}

// Helper Components

function Section({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-3">
        {icon && (
          <div className="p-2 bg-[#00bcd4]/10 border border-[#00bcd4]/30">
            {React.cloneElement(icon as React.ReactElement<any>, {
              className: 'w-5 h-5 text-[#00bcd4]',
            })}
          </div>
        )}
        <h2 className="text-2xl font-display text-stellar-core">{title}</h2>
      </div>
      {description && <p className="text-stellar-muted mb-6">{description}</p>}
      <div className="space-y-6">{children}</div>
    </motion.section>
  );
}

function CodeBlock({
  title,
  code,
  language = 'bash',
}: {
  title?: string;
  code: string;
  language?: string;
}) {
  return (
    <div className="bg-void-elevated border border-stellar-faint/20">
      {title && (
        <div className="px-4 py-2 border-b border-stellar-faint/20">
          <span className="text-sm font-mono text-[#00bcd4]">{title}</span>
        </div>
      )}
      <div className="p-4">
        <pre className="text-sm text-stellar-dim overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function CommandCard({
  title,
  description,
  options,
  example,
}: {
  title: string;
  description: string;
  options: Array<{ name: string; type: string; desc: string }>;
  example: string;
}) {
  return (
    <div className="bg-void-elevated border border-stellar-faint/20 p-6 mb-6">
      <div className="mb-4">
        <h3 className="text-xl font-mono text-[#00bcd4] mb-2">{title}</h3>
        <p className="text-stellar-muted">{description}</p>
      </div>

      {options.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-mono text-stellar-dim mb-2">OPTIONS</h4>
          <div className="space-y-2">
            {options.map((opt, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm">
                <span className="font-mono text-[#00bcd4] min-w-[140px]">{opt.name}</span>
                <span className="font-mono text-[#ffcc22] min-w-[80px]">{opt.type}</span>
                <span className="text-stellar-muted">{opt.desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h4 className="text-sm font-mono text-stellar-dim mb-2">EXAMPLE</h4>
        <pre className="text-sm text-stellar-dim bg-void-base border border-stellar-faint/10 p-3 overflow-x-auto">
          <code>{example}</code>
        </pre>
      </div>
    </div>
  );
}

function StageCard({
  number,
  title,
  description,
  command,
  output,
}: {
  number: number;
  title: string;
  description: string;
  command: string;
  output: string;
}) {
  return (
    <div className="bg-void-elevated border border-stellar-faint/20 p-6 hover:border-[#00bcd4]/30 transition-colors">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-[#00bcd4]/10 border border-[#00bcd4]/30 flex items-center justify-center">
          <span className="text-lg font-display text-[#00bcd4]">{number}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-display text-stellar-core mb-2">{title}</h3>
          <p className="text-stellar-muted mb-4">{description}</p>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Terminal className="w-4 h-4 text-[#00bcd4]" />
              <code className="text-stellar-dim">{command}</code>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ArrowRight className="w-4 h-4 text-[#44ffaa]" />
              <code className="text-stellar-dim">{output}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExampleCard({
  title,
  steps,
  code,
}: {
  title: string;
  steps: string[];
  code: string;
}) {
  return (
    <div className="bg-void-elevated border border-stellar-faint/20 p-6">
      <h3 className="text-lg font-display text-stellar-core mb-3">{title}</h3>

      <div className="mb-4">
        <h4 className="text-sm font-mono text-stellar-dim mb-2">STEPS</h4>
        <ol className="space-y-1">
          {steps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-stellar-muted">
              <span className="text-[#00bcd4] font-mono">{idx + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h4 className="text-sm font-mono text-stellar-dim mb-2">CODE</h4>
        <pre className="text-sm text-stellar-dim bg-void-base border border-stellar-faint/10 p-3 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
