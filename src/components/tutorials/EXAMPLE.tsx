/**
 * Tutorial Component Library - Usage Examples
 *
 * This file demonstrates how to use the tutorial components
 * in your Diverga documentation pages.
 */

'use client';

import { TutorialLayout, TutorialCard, StepIndicator, CodeBlock, GifPlayer } from '@/components/tutorials';
import type { Tutorial } from '@/components/tutorials';

// ============================================================
// Example 1: Complete Tutorial with TutorialLayout
// ============================================================

export function CompleteTutorialExample() {
  const tutorial: Tutorial = {
    id: 'getting-started',
    title: {
      en: 'Getting Started with Diverga',
      ko: 'Diverga 시작하기'
    },
    description: {
      en: 'Learn how to set up and use Diverga Research Coordinator',
      ko: 'Diverga 연구 코디네이터 설정 및 사용법 학습'
    },
    difficulty: 'beginner',
    duration: '15 min',
    steps: [
      {
        id: 1,
        title: {
          en: 'Install Diverga',
          ko: 'Diverga 설치'
        },
        description: {
          en: 'Install the Diverga package using npm or your preferred package manager.',
          ko: 'npm 또는 선호하는 패키지 관리자를 사용하여 Diverga 패키지를 설치합니다.'
        },
        code: 'npm install diverga-research-coordinator',
        duration: '2 min'
      },
      {
        id: 2,
        title: {
          en: 'Configure Your Project',
          ko: '프로젝트 구성'
        },
        description: {
          en: 'Create a configuration file to customize Diverga for your research needs.',
          ko: '연구 요구사항에 맞게 Diverga를 사용자 정의하는 구성 파일을 생성합니다.'
        },
        code: `// diverga.config.js
export default {
  agents: ['A1-TheoryMapper', 'B1-LiteratureScout'],
  checkpoints: {
    required: true,
    level: 'MEDIUM'
  },
  locale: 'en'
};`,
        duration: '5 min'
      },
      {
        id: 3,
        title: {
          en: 'Run Your First Query',
          ko: '첫 번째 쿼리 실행'
        },
        description: {
          en: 'Try out Diverga with a simple research question.',
          ko: '간단한 연구 질문으로 Diverga를 시험해봅니다.'
        },
        gif: '/tutorials/first-query.gif',
        duration: '8 min'
      }
    ]
  };

  return (
    <TutorialLayout
      tutorial={tutorial}
      locale="en"
      onComplete={() => console.log('Tutorial completed!')}
    />
  );
}

// ============================================================
// Example 2: Tutorial Grid with Cards
// ============================================================

export function TutorialGridExample() {
  const tutorials: Tutorial[] = [
    {
      id: 'setup',
      title: { en: 'Initial Setup', ko: '초기 설정' },
      description: { en: 'Set up your environment', ko: '환경 설정하기' },
      difficulty: 'beginner',
      duration: '10 min',
      steps: []
    },
    {
      id: 'advanced-queries',
      title: { en: 'Advanced Queries', ko: '고급 쿼리' },
      description: { en: 'Master complex research queries', ko: '복잡한 연구 쿼리 마스터하기' },
      difficulty: 'advanced',
      duration: '30 min',
      steps: []
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tutorials.map(tutorial => (
        <TutorialCard key={tutorial.id} tutorial={tutorial} locale="en" />
      ))}
    </div>
  );
}

// ============================================================
// Example 3: Custom Step Navigation
// ============================================================

export function CustomStepNavigationExample() {
  const steps = [
    {
      id: 1,
      title: { en: 'Step 1', ko: '단계 1' },
      description: { en: 'First step', ko: '첫 번째 단계' },
      duration: '5 min'
    },
    {
      id: 2,
      title: { en: 'Step 2', ko: '단계 2' },
      description: { en: 'Second step', ko: '두 번째 단계' },
      duration: '3 min'
    },
    {
      id: 3,
      title: { en: 'Step 3', ko: '단계 3' },
      description: { en: 'Final step', ko: '마지막 단계' },
      duration: '2 min'
    }
  ];

  return (
    <StepIndicator
      currentStep={2}
      totalSteps={3}
      steps={steps}
      onStepClick={(step) => console.log(`Navigate to step ${step}`)}
      locale="en"
    />
  );
}

// ============================================================
// Example 4: Code Block Showcase
// ============================================================

export function CodeBlockExample() {
  const code = `import { DivergaCoordinator } from 'diverga-research-coordinator';

// Initialize the coordinator
const coordinator = new DivergaCoordinator({
  locale: 'en',
  checkpoints: true
});

// Run a research query
const result = await coordinator.query({
  question: "How does AI improve learning outcomes?",
  agents: ['A1-TheoryMapper', 'B1-LiteratureScout']
});

console.log(result);`;

  return (
    <div className="space-y-6">
      <CodeBlock
        code={code}
        language="typescript"
        filename="example.ts"
        showLineNumbers={true}
      />

      <CodeBlock
        code="npm install diverga-research-coordinator"
        language="bash"
        showLineNumbers={false}
      />
    </div>
  );
}

// ============================================================
// Example 5: Media Gallery
// ============================================================

export function MediaGalleryExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <GifPlayer
        src="/tutorials/demo1.gif"
        alt="Demo 1"
        caption={{
          en: "Setting up your first project",
          ko: "첫 번째 프로젝트 설정"
        }}
        locale="en"
      />

      <GifPlayer
        src="/tutorials/screenshot1.png"
        alt="Screenshot 1"
        caption={{
          en: "Main dashboard interface",
          ko: "메인 대시보드 인터페이스"
        }}
        locale="en"
      />
    </div>
  );
}

// ============================================================
// Example 6: Mixed Content Tutorial Step
// ============================================================

export function MixedContentStepExample() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Text Description */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Configure Your Environment</h2>
        <p className="text-void-600 dark:text-void-400">
          Before starting, make sure you have Node.js 18+ installed on your system.
        </p>
      </div>

      {/* Code Block */}
      <CodeBlock
        code="node --version  # Should be v18.0.0 or higher"
        language="bash"
      />

      {/* Visual Demo */}
      <GifPlayer
        src="/tutorials/version-check.gif"
        alt="Checking Node.js version"
        caption={{
          en: "Verifying your Node.js installation",
          ko: "Node.js 설치 확인"
        }}
        locale="en"
      />

      {/* Next Code Example */}
      <CodeBlock
        code={`// package.json
{
  "name": "my-research-project",
  "version": "1.0.0",
  "dependencies": {
    "diverga-research-coordinator": "^1.0.0"
  }
}`}
        language="json"
        filename="package.json"
      />
    </div>
  );
}
