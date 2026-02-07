// Documentation navigation structure for Diverga
// Follows Claude docs pattern with hierarchical sidebar navigation

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

// Main documentation navigation structure
export const docsNavigation: DocsSection[] = [
  {
    id: 'getting-started',
    title: { en: 'Getting Started', ko: '시작하기' },
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
    id: 'tutorials',
    title: { en: 'Tutorials', ko: '튜토리얼' },
    items: [
      {
        id: 'tutorials-overview',
        title: { en: 'All Tutorials', ko: '모든 튜토리얼' },
        href: '/docs/tutorials',
        icon: 'graduation-cap',
      },
      {
        id: 'quick-start-tutorial',
        title: { en: 'Quick Start', ko: '빠른 시작' },
        href: '/docs/tutorials/quick-start',
        icon: 'rocket',
        badge: { text: 'Beginner', color: '#44ffaa' },
      },
      {
        id: 'meta-analysis-tutorial',
        title: { en: 'Meta-Analysis Pipeline', ko: '메타분석 파이프라인' },
        href: '/docs/tutorials/meta-analysis',
        icon: 'database',
        badge: { text: 'Advanced', color: '#f39c12' },
      },
    ],
  },
  {
    id: 'core-features',
    title: { en: 'Core Features', ko: '핵심 기능' },
    items: [
      {
        id: 'memory-system',
        title: { en: 'Memory System', ko: '메모리 시스템' },
        href: '/docs/memory-system',
        icon: 'brain',
        isNew: true,
        badge: { text: 'v8.0', color: '#44ffaa' },
        children: [
          {
            id: 'memory-types',
            title: { en: 'Memory Types', ko: '메모리 타입' },
            href: '/docs/memory-system/types',
          },
          {
            id: 'memory-commands',
            title: { en: 'CLI Commands', ko: 'CLI 명령어' },
            href: '/docs/memory-system/commands',
          },
          {
            id: 'memory-api',
            title: { en: 'API Reference', ko: 'API 레퍼런스' },
            href: '/docs/memory-system/api',
          },
        ],
      },
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
            id: 'scholarag',
            title: { en: 'Pipeline CLI', ko: '파이프라인 CLI' },
            href: '/docs/systematic-review/scholarag',
          },
          {
            id: 'databases',
            title: { en: 'Supported Databases', ko: '지원 데이터베이스' },
            href: '/docs/systematic-review/databases',
          },
        ],
      },
      {
        id: 'humanization',
        title: { en: 'Humanization', ko: '휴먼화' },
        href: '/docs/humanization',
        icon: 'pen-tool',
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
        ],
      },
      {
        id: 'hud',
        title: { en: 'HUD Statusline', ko: 'HUD 상태표시줄' },
        href: '/docs/hud',
        icon: 'monitor',
        isNew: true,
        badge: { text: 'v8.0', color: '#44ffaa' },
      },
      {
        id: 'doctor',
        title: { en: 'Diagnostics', ko: '진단' },
        href: '/docs/doctor',
        icon: 'stethoscope',
        isNew: true,
        badge: { text: 'v8.0', color: '#44ffaa' },
      },
      {
        id: 'project-init',
        title: { en: 'Project Init', ko: '프로젝트 초기화' },
        href: '/docs/project-init',
        icon: 'wand',
        isNew: true,
        badge: { text: 'v8.0', color: '#44ffaa' },
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
        title: { en: 'A: Foundation', ko: 'A: 기초' },
        href: '/docs/agents/foundation',
        icon: 'layout',
        badge: { text: '6', color: '#ff6b6b' },
      },
      {
        id: 'category-b',
        title: { en: 'B: Evidence', ko: 'B: 근거' },
        href: '/docs/agents/evidence',
        icon: 'search',
        badge: { text: '5', color: '#4ecdc4' },
      },
      {
        id: 'category-c',
        title: { en: 'C: Design', ko: 'C: 설계' },
        href: '/docs/agents/design',
        icon: 'compass',
        badge: { text: '7', color: '#45b7d1' },
      },
      {
        id: 'category-d',
        title: { en: 'D: Collection', ko: 'D: 수집' },
        href: '/docs/agents/collection',
        icon: 'database',
        badge: { text: '4', color: '#96ceb4' },
      },
      {
        id: 'category-e',
        title: { en: 'E: Analysis', ko: 'E: 분석' },
        href: '/docs/agents/analysis',
        icon: 'bar-chart',
        badge: { text: '5', color: '#dda0dd' },
      },
      {
        id: 'category-f',
        title: { en: 'F: Quality', ko: 'F: 품질' },
        href: '/docs/agents/quality',
        icon: 'check-circle',
        badge: { text: '5', color: '#f0e68c' },
      },
      {
        id: 'category-g',
        title: { en: 'G: Communication', ko: 'G: 커뮤니케이션' },
        href: '/docs/agents/communication',
        icon: 'message-circle',
        badge: { text: '6', color: '#87ceeb' },
      },
      {
        id: 'category-h',
        title: { en: 'H: Specialized', ko: 'H: 전문' },
        href: '/docs/agents/specialized',
        icon: 'star',
        badge: { text: '2', color: '#ffa07a' },
      },
      {
        id: 'category-i',
        title: { en: 'I: Systematic Review', ko: 'I: 체계적 문헌고찰' },
        href: '/docs/agents/systematic-review',
        icon: 'book-open',
        badge: { text: '4', color: '#00bcd4' },
        isNew: true,
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
        id: 'configuration-ref',
        title: { en: 'Configuration', ko: '설정 레퍼런스' },
        href: '/docs/reference/configuration',
        icon: 'sliders',
      },
      {
        id: 'model-tiers',
        title: { en: 'Model Tiers', ko: '모델 티어' },
        href: '/docs/reference/model-tiers',
        icon: 'layers',
      },
    ],
  },
  {
    id: 'resources',
    title: { en: 'Resources', ko: '리소스' },
    items: [
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
      {
        id: 'community',
        title: { en: 'Community', ko: '커뮤니티' },
        href: 'https://github.com/HosungYou/Diverga/discussions',
        icon: 'users',
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
    title: { en: 'Getting Started', ko: '시작하기' },
    description: {
      en: 'Install Diverga and start your first research project',
      ko: 'Diverga를 설치하고 첫 번째 연구 프로젝트 시작하기'
    },
    icon: 'rocket',
    color: '#44ffaa',
    items: [
      {
        title: { en: 'Installation', ko: '설치' },
        description: { en: 'Set up Diverga on your platform', ko: '플랫폼에 Diverga 설치하기' },
        href: '/docs/installation',
        icon: 'download',
      },
      {
        title: { en: 'Quick Start', ko: '빠른 시작' },
        description: { en: 'Your first agent in 5 minutes', ko: '5분 안에 첫 번째 에이전트 실행' },
        href: '/docs/quick-start',
        icon: 'zap',
      },
      {
        title: { en: 'Configuration', ko: '설정' },
        description: { en: 'Customize your research environment', ko: '연구 환경 맞춤 설정' },
        href: '/docs/configuration',
        icon: 'settings',
      },
    ],
  },
  {
    id: 'core-features',
    title: { en: 'Core Features', ko: '핵심 기능' },
    description: {
      en: 'Explore the powerful features that make Diverga unique',
      ko: 'Diverga를 특별하게 만드는 강력한 기능 탐색'
    },
    icon: 'sparkles',
    color: '#22ccff',
    items: [
      {
        title: { en: 'Memory System', ko: '메모리 시스템' },
        description: { en: 'Context persistence across sessions', ko: '세션 간 맥락 지속성' },
        href: '/docs/memory-system',
        icon: 'brain',
        isNew: true,
      },
      {
        title: { en: 'VS Methodology', ko: 'VS 방법론' },
        description: { en: 'Break free from mode collapse', ko: '모드 붕괴에서 벗어나기' },
        href: '/docs/vs-methodology',
        icon: 'sparkles',
      },
      {
        title: { en: 'Human Checkpoints', ko: '휴먼 체크포인트' },
        description: { en: 'Critical decisions stay in your hands', ko: '중요한 결정은 당신의 손에' },
        href: '/docs/checkpoints',
        icon: 'shield-check',
      },
    ],
  },
  {
    id: 'agents',
    title: { en: 'Research Agents', ko: '연구 에이전트' },
    description: {
      en: '44 specialized agents for the complete research lifecycle',
      ko: '연구 전 과정을 위한 44개 전문 에이전트'
    },
    icon: 'users',
    color: '#ff8844',
    items: [
      {
        title: { en: 'Agent Catalog', ko: '에이전트 카탈로그' },
        description: { en: 'Browse all 44 agents', ko: '44개 에이전트 모두 보기' },
        href: '/agents',
        icon: 'grid',
      },
      {
        title: { en: 'Agent Reference', ko: '에이전트 레퍼런스' },
        description: { en: 'Detailed documentation', ko: '상세 문서' },
        href: '/docs/agents',
        icon: 'book',
      },
      {
        title: { en: 'Model Tiers', ko: '모델 티어' },
        description: { en: 'Haiku, Sonnet, Opus routing', ko: 'Haiku, Sonnet, Opus 라우팅' },
        href: '/docs/reference/model-tiers',
        icon: 'layers',
      },
    ],
  },
  {
    id: 'advanced',
    title: { en: 'Advanced Topics', ko: '고급 주제' },
    description: {
      en: 'Deep dives into systematic reviews and humanization',
      ko: '체계적 문헌고찰과 휴먼화 심층 분석'
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
        title: { en: 'Humanization', ko: '휴먼화' },
        description: { en: 'Natural academic writing', ko: '자연스러운 학술 문체' },
        href: '/docs/humanization',
        icon: 'pen-tool',
      },
      {
        title: { en: 'CLI Reference', ko: 'CLI 레퍼런스' },
        description: { en: 'Command line interface', ko: '명령줄 인터페이스' },
        href: '/docs/cli',
        icon: 'terminal',
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
