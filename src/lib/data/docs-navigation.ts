// Documentation navigation structure for Diverga
// Updated for v12.0.1 — 4 sections, 24 agents, 9 categories

export interface DocsNavItem {
  id: string;
  title: { en: string; ko: string };
  href?: string;
  icon?: string;
  badge?: { text: string; color: string };
  children?: DocsNavItem[];
  isNew?: boolean;
  isExternal?: boolean;
}

export interface DocsSection {
  id: string;
  title: { en: string; ko: string };
  items: DocsNavItem[];
}

// Main documentation navigation structure (4 sections)
export const docsNavigation: DocsSection[] = [
  {
    id: 'get-started',
    title: { en: 'Get Started', ko: '시작하기' },
    items: [
      {
        id: 'overview',
        title: { en: 'Overview', ko: '개요' },
        href: '/docs',
        icon: 'home',
      },
      {
        id: 'installation',
        title: { en: 'Installation', ko: '설치' },
        href: '/docs/installation',
        icon: 'download',
      },
      {
        id: 'quick-start',
        title: { en: 'Quick Start', ko: '빠른 시작' },
        href: '/docs/quick-start',
        icon: 'zap',
      },
      {
        id: 'configuration',
        title: { en: 'Configuration', ko: '설정' },
        href: '/docs/configuration',
        icon: 'settings',
      },
    ],
  },
  {
    id: 'core-features',
    title: { en: 'Core Features', ko: '핵심 기능' },
    items: [
      {
        id: 'vs-methodology',
        title: { en: 'VS Methodology', ko: 'VS 방법론' },
        href: '/docs/vs-methodology',
        icon: 'sparkles',
        children: [
          {
            id: 'tscore',
            title: { en: 'T-Score System', ko: 'T-Score 시스템' },
            href: '/docs/vs-methodology/tscore',
          },
          {
            id: 'vs-process',
            title: { en: 'VS Process', ko: 'VS 프로세스' },
            href: '/docs/vs-methodology/process',
          },
          {
            id: 'vs-implementation',
            title: { en: 'Implementation Levels', ko: '구현 수준' },
            href: '/docs/vs-methodology/implementation',
          },
        ],
      },
      {
        id: 'checkpoints',
        title: { en: 'Human Checkpoints', ko: '휴먼 체크포인트' },
        href: '/docs/checkpoints',
        icon: 'shield-check',
        children: [
          {
            id: 'checkpoint-types',
            title: { en: 'Checkpoint Types', ko: '체크포인트 유형' },
            href: '/docs/checkpoints/types',
          },
          {
            id: 'checkpoint-workflow',
            title: { en: 'Workflow Integration', ko: '워크플로우 통합' },
            href: '/docs/checkpoints/workflow',
          },
        ],
      },
      {
        id: 'humanization',
        title: { en: 'Humanization Pipeline', ko: '휴먼화 파이프라인' },
        href: '/docs/humanization',
        icon: 'pen-tool',
        badge: { text: 'v12', color: '#ff8844' },
        children: [
          {
            id: 'ai-patterns',
            title: { en: 'AI Pattern Detection', ko: 'AI 패턴 감지' },
            href: '/docs/humanization/patterns',
          },
          {
            id: 'transformation-modes',
            title: { en: 'Transformation Modes', ko: '변환 모드' },
            href: '/docs/humanization/modes',
          },
          {
            id: 'pipeline',
            title: { en: 'Multi-Pass Pipeline', ko: '다중 패스 파이프라인' },
            href: '/docs/humanization/pipeline',
          },
        ],
      },
      {
        id: 'vs-arena',
        title: { en: 'VS Arena', ko: 'VS 아레나' },
        href: '/docs/vs-arena',
        icon: 'swords',
        isNew: true,
        badge: { text: 'v12', color: '#44ffaa' },
      },
      {
        id: 'systematic-review',
        title: { en: 'Systematic Review', ko: '체계적 문헌고찰' },
        href: '/docs/systematic-review',
        icon: 'book-open',
        children: [
          {
            id: 'prisma-pipeline',
            title: { en: 'PRISMA Pipeline', ko: 'PRISMA 파이프라인' },
            href: '/docs/systematic-review/prisma',
          },
          {
            id: 'databases',
            title: { en: 'Supported Databases', ko: '지원 데이터베이스' },
            href: '/docs/systematic-review/databases',
          },
        ],
      },
    ],
  },
  {
    id: 'agents',
    title: { en: 'Agents', ko: '에이전트' },
    items: [
      {
        id: 'agents-overview',
        title: { en: 'Agent Overview', ko: '에이전트 개요' },
        href: '/docs/agents',
        icon: 'users',
      },
      {
        id: 'category-a',
        title: { en: 'A: Foundation (3)', ko: 'A: 기초 (3)' },
        href: '/docs/agents/foundation',
        icon: 'layout',
        badge: { text: '3', color: '#ff6b6b' },
      },
      {
        id: 'category-b',
        title: { en: 'B: Evidence (2)', ko: 'B: 근거 (2)' },
        href: '/docs/agents/evidence',
        icon: 'search',
        badge: { text: '2', color: '#4ecdc4' },
      },
      {
        id: 'category-c',
        title: { en: 'C: Design (4)', ko: 'C: 설계 (4)' },
        href: '/docs/agents/design',
        icon: 'compass',
        badge: { text: '4', color: '#45b7d1' },
      },
      {
        id: 'category-d',
        title: { en: 'D: Collection (2)', ko: 'D: 수집 (2)' },
        href: '/docs/agents/collection',
        icon: 'database',
        badge: { text: '2', color: '#96ceb4' },
      },
      {
        id: 'category-e',
        title: { en: 'E: Analysis (3)', ko: 'E: 분석 (3)' },
        href: '/docs/agents/analysis',
        icon: 'bar-chart',
        badge: { text: '3', color: '#dda0dd' },
      },
      {
        id: 'category-f',
        title: { en: 'F: Quality (1)', ko: 'F: 품질 (1)' },
        href: '/docs/agents/quality',
        icon: 'check-circle',
        badge: { text: '1', color: '#f0e68c' },
      },
      {
        id: 'category-g',
        title: { en: 'G: Communication (4)', ko: 'G: 커뮤니케이션 (4)' },
        href: '/docs/agents/communication',
        icon: 'message-circle',
        badge: { text: '4', color: '#87ceeb' },
      },
      {
        id: 'category-i',
        title: { en: 'I: Systematic Review (4)', ko: 'I: 체계적 문헌고찰 (4)' },
        href: '/docs/agents/systematic-review',
        icon: 'book-open',
        badge: { text: '4', color: '#00bcd4' },
      },
      {
        id: 'category-x',
        title: { en: 'X: Cross-Cutting (1)', ko: 'X: 범분야 (1)' },
        href: '/docs/agents/cross-cutting',
        icon: 'star',
        badge: { text: '1', color: '#ffa07a' },
      },
    ],
  },
  {
    id: 'reference',
    title: { en: 'Reference', ko: '레퍼런스' },
    items: [
      {
        id: 'cli-commands',
        title: { en: 'CLI Commands', ko: 'CLI 명령어' },
        href: '/docs/cli',
        icon: 'terminal',
      },
      {
        id: 'mcp-server',
        title: { en: 'MCP Server (7 tools)', ko: 'MCP 서버 (7 도구)' },
        href: '/docs/reference/mcp-server',
        icon: 'server',
        isNew: true,
        badge: { text: 'v12', color: '#44ffaa' },
      },
      {
        id: 'model-tiers',
        title: { en: 'Model Tiers', ko: '모델 티어' },
        href: '/docs/reference/model-tiers',
        icon: 'layers',
      },
      {
        id: 'agent-teams',
        title: { en: 'Agent Teams', ko: '에이전트 팀' },
        href: '/docs/advanced/agent-teams',
        icon: 'users',
        isNew: true,
        badge: { text: 'v12', color: '#44ffaa' },
      },
      {
        id: 'changelog',
        title: { en: 'Changelog', ko: '변경 로그' },
        href: '/docs/changelog',
        icon: 'git-commit',
      },
      {
        id: 'github',
        title: { en: 'GitHub', ko: 'GitHub' },
        href: 'https://github.com/HosungYou/Diverga',
        icon: 'github',
        isExternal: true,
      },
    ],
  },
];

// Documentation landing page categories
export interface DocsCategory {
  id: string;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  icon: string;
  color: string;
  items: {
    title: { en: string; ko: string };
    description: { en: string; ko: string };
    href: string;
    icon: string;
    isNew?: boolean;
  }[];
}

export const docsCategories: DocsCategory[] = [
  {
    id: 'getting-started',
    title: { en: 'Get Started', ko: '시작하기' },
    description: {
      en: 'Install Diverga and run your first research agent',
      ko: 'Diverga를 설치하고 첫 번째 연구 에이전트 실행하기',
    },
    icon: 'rocket',
    color: '#44ffaa',
    items: [
      {
        title: { en: 'Installation', ko: '설치' },
        description: { en: 'Claude Code plugin setup', ko: 'Claude Code 플러그인 설치' },
        href: '/docs/installation',
        icon: 'download',
      },
      {
        title: { en: 'Quick Start', ko: '빠른 시작' },
        description: { en: '3 commands to first agent', ko: '3개 명령어로 첫 에이전트' },
        href: '/docs/quick-start',
        icon: 'zap',
      },
      {
        title: { en: 'Configuration', ko: '설정' },
        description: { en: 'Researcher profile & settings', ko: '연구자 프로필 및 설정' },
        href: '/docs/configuration',
        icon: 'settings',
      },
    ],
  },
  {
    id: 'core-features',
    title: { en: 'Core Features', ko: '핵심 기능' },
    description: {
      en: 'The ideas that make Diverga different from other AI tools',
      ko: 'Diverga를 다른 AI 도구와 차별화하는 핵심 개념들',
    },
    icon: 'sparkles',
    color: '#22ccff',
    items: [
      {
        title: { en: 'VS Methodology', ko: 'VS 방법론' },
        description: { en: 'Break free from mode collapse', ko: '모드 붕괴에서 벗어나기' },
        href: '/docs/vs-methodology',
        icon: 'sparkles',
      },
      {
        title: { en: 'Human Checkpoints', ko: '휴먼 체크포인트' },
        description: { en: 'Critical decisions stay with you', ko: '중요한 결정은 당신의 손에' },
        href: '/docs/checkpoints',
        icon: 'shield-check',
      },
      {
        title: { en: 'Humanization Pipeline', ko: '휴먼화 파이프라인' },
        description: { en: 'G5 → G6 → F5 natural writing', ko: 'G5 → G6 → F5 자연스러운 문체' },
        href: '/docs/humanization',
        icon: 'pen-tool',
      },
      {
        title: { en: 'VS Arena', ko: 'VS 아레나' },
        description: { en: '5-persona methodology debate', ko: '5개 페르소나 방법론 토론' },
        href: '/docs/vs-arena',
        icon: 'swords',
        isNew: true,
      },
    ],
  },
  {
    id: 'agents',
    title: { en: 'Research Agents', ko: '연구 에이전트' },
    description: {
      en: '24 specialized agents across 9 categories for the complete research lifecycle',
      ko: '연구 전 과정을 위한 9개 카테고리 24개 전문 에이전트',
    },
    icon: 'users',
    color: '#ff8844',
    items: [
      {
        title: { en: 'Agent Catalog', ko: '에이전트 카탈로그' },
        description: { en: 'Browse all 24 agents', ko: '24개 에이전트 모두 보기' },
        href: '/agents',
        icon: 'grid',
      },
      {
        title: { en: 'Agent Reference', ko: '에이전트 레퍼런스' },
        description: { en: 'Detailed docs by category', ko: '카테고리별 상세 문서' },
        href: '/docs/agents',
        icon: 'book',
      },
      {
        title: { en: 'Model Tiers', ko: '모델 티어' },
        description: { en: 'Haiku · Sonnet · Opus routing', ko: 'Haiku · Sonnet · Opus 라우팅' },
        href: '/docs/reference/model-tiers',
        icon: 'layers',
      },
    ],
  },
  {
    id: 'advanced',
    title: { en: 'Advanced', ko: '고급' },
    description: {
      en: 'Systematic reviews, Agent Teams, MCP server, and plugin architecture',
      ko: '체계적 문헌고찰, 에이전트 팀, MCP 서버, 플러그인 아키텍처',
    },
    icon: 'graduation-cap',
    color: '#9b59b6',
    items: [
      {
        title: { en: 'Systematic Review', ko: '체계적 문헌고찰' },
        description: { en: 'PRISMA 2020 automation', ko: 'PRISMA 2020 자동화' },
        href: '/docs/systematic-review',
        icon: 'book-open',
      },
      {
        title: { en: 'MCP Server', ko: 'MCP 서버' },
        description: { en: '7 runtime checkpoint tools', ko: '7개 런타임 체크포인트 도구' },
        href: '/docs/reference/mcp-server',
        icon: 'server',
        isNew: true,
      },
      {
        title: { en: 'Agent Teams', ko: '에이전트 팀' },
        description: { en: 'Parallel agent coordination', ko: '병렬 에이전트 조율' },
        href: '/docs/advanced/agent-teams',
        icon: 'users',
        isNew: true,
      },
    ],
  },
];

// Flatten navigation for search
export function flattenNavigation(sections: DocsSection[]): DocsNavItem[] {
  const items: DocsNavItem[] = [];

  for (const section of sections) {
    for (const item of section.items) {
      items.push(item);
      if (item.children) {
        items.push(...item.children);
      }
    }
  }

  return items;
}

// Get breadcrumb path for a given href
export function getBreadcrumbPath(href: string, locale: string): { title: string; href: string }[] {
  const path: { title: string; href: string }[] = [
    { title: locale === 'ko' ? '문서' : 'Docs', href: '/docs' }
  ];

  for (const section of docsNavigation) {
    for (const item of section.items) {
      if (item.href === href) {
        path.push({
          title: item.title[locale as 'en' | 'ko'],
          href: item.href || '/docs'
        });
        return path;
      }

      if (item.children) {
        for (const child of item.children) {
          if (child.href === href) {
            path.push({
              title: item.title[locale as 'en' | 'ko'],
              href: item.href || '/docs'
            });
            path.push({
              title: child.title[locale as 'en' | 'ko'],
              href: child.href || '/docs'
            });
            return path;
          }
        }
      }
    }
  }

  return path;
}
