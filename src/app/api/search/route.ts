import { NextRequest, NextResponse } from 'next/server';
import Fuse from 'fuse.js';
import { agents } from '@/lib/data/agents';

// Define searchable documents
const documents = [
  // Agents
  ...agents.map((agent) => ({
    type: 'agent' as const,
    id: agent.id,
    slug: agent.slug,
    title: { en: agent.name.en, ko: agent.name.ko },
    description: { en: agent.description.en, ko: agent.description.ko },
    category: agent.category,
    keywords: {
      en: [agent.id, ...agent.triggers.en],
      ko: [agent.id, ...agent.triggers.ko],
    },
    href: `/agents/${agent.slug}`,
  })),
  // Documentation pages
  {
    type: 'doc' as const,
    id: 'getting-started',
    slug: 'getting-started',
    title: { en: 'Getting Started', ko: '시작하기' },
    description: {
      en: 'Installation guide for Claude Code and Diverga plugin',
      ko: 'Claude Code와 Diverga 플러그인 설치 가이드',
    },
    category: 'docs',
    keywords: {
      en: ['install', 'setup', 'installation', 'npm', 'claude code', 'getting started'],
      ko: ['설치', '설정', 'npm', '클로드 코드', '시작하기'],
    },
    href: '/getting-started',
  },
  {
    type: 'doc' as const,
    id: 'vs-methodology',
    slug: 'vs-methodology',
    title: { en: 'VS Methodology', ko: 'VS 방법론' },
    description: {
      en: 'Understanding T-Scores and creative alternatives with Variance Sampling',
      ko: 'Variance Sampling으로 T-Score와 창의적 대안 이해하기',
    },
    category: 'docs',
    keywords: {
      en: ['vs', 'variance sampling', 't-score', 'mode collapse', 'typicality', 'methodology'],
      ko: ['vs', '분산 샘플링', 't-score', '모드 붕괴', '전형성', '방법론'],
    },
    href: '/docs/vs-methodology',
  },
  {
    type: 'doc' as const,
    id: 'playground',
    slug: 'playground',
    title: { en: 'Playground', ko: '체험하기' },
    description: {
      en: 'Try Diverga agents with pre-built examples',
      ko: '미리 준비된 예시로 Diverga 에이전트 체험하기',
    },
    category: 'docs',
    keywords: {
      en: ['demo', 'try', 'example', 'playground', 'test'],
      ko: ['데모', '체험', '예시', '플레이그라운드', '테스트'],
    },
    href: '/playground',
  },
  // Workflow pages
  {
    type: 'workflow' as const,
    id: 'quantitative',
    slug: 'quantitative',
    title: { en: 'Quantitative Research', ko: '양적 연구' },
    description: {
      en: 'RCTs, surveys, and statistical analysis workflows',
      ko: 'RCT, 설문조사 및 통계 분석 워크플로우',
    },
    category: 'workflow',
    keywords: {
      en: ['quantitative', 'rct', 'survey', 'statistics', 'experimental'],
      ko: ['양적', 'rct', '설문', '통계', '실험'],
    },
    href: '/workflows/quantitative',
  },
  {
    type: 'workflow' as const,
    id: 'qualitative',
    slug: 'qualitative',
    title: { en: 'Qualitative Research', ko: '질적 연구' },
    description: {
      en: 'Phenomenology, grounded theory, and case study workflows',
      ko: '현상학, 근거이론 및 사례연구 워크플로우',
    },
    category: 'workflow',
    keywords: {
      en: ['qualitative', 'phenomenology', 'grounded theory', 'case study', 'interview'],
      ko: ['질적', '현상학', '근거이론', '사례연구', '인터뷰'],
    },
    href: '/workflows/qualitative',
  },
  {
    type: 'workflow' as const,
    id: 'mixed-methods',
    slug: 'mixed-methods',
    title: { en: 'Mixed Methods', ko: '혼합 방법' },
    description: {
      en: 'Sequential and convergent mixed methods designs',
      ko: '순차적 및 수렴적 혼합방법 설계',
    },
    category: 'workflow',
    keywords: {
      en: ['mixed methods', 'sequential', 'convergent', 'integration'],
      ko: ['혼합방법', '순차적', '수렴적', '통합'],
    },
    href: '/workflows/mixed-methods',
  },
  {
    type: 'workflow' as const,
    id: 'meta-analysis',
    slug: 'meta-analysis',
    title: { en: 'Meta-Analysis', ko: '메타분석' },
    description: {
      en: 'Systematic review and meta-analysis pipelines',
      ko: '체계적 문헌고찰 및 메타분석 파이프라인',
    },
    category: 'workflow',
    keywords: {
      en: ['meta-analysis', 'systematic review', 'prisma', 'effect size'],
      ko: ['메타분석', '체계적 문헌고찰', 'prisma', '효과크기'],
    },
    href: '/workflows/meta-analysis',
  },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q') || '';
  const locale = (searchParams.get('locale') || 'en') as 'en' | 'ko';
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [], query });
  }

  // Flatten documents for the current locale
  const searchableDocuments = documents.map((doc) => ({
    ...doc,
    title: doc.title[locale],
    description: doc.description[locale],
    keywords: doc.keywords[locale].join(' '),
  }));

  // Configure Fuse.js
  const fuse = new Fuse(searchableDocuments, {
    keys: [
      { name: 'title', weight: 3 },
      { name: 'id', weight: 2 },
      { name: 'keywords', weight: 2 },
      { name: 'description', weight: 1 },
    ],
    threshold: 0.4,
    includeScore: true,
  });

  // Perform search
  const searchResults = fuse.search(query, { limit });

  // Format results
  const results = searchResults.map((result) => ({
    type: result.item.type,
    id: result.item.id,
    title: result.item.title,
    description: result.item.description,
    href: result.item.href,
    category: result.item.category,
    score: result.score,
  }));

  return NextResponse.json({
    results,
    query,
    total: results.length,
  });
}
