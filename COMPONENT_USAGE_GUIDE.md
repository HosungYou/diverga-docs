# Component Integration Usage Guide

## Quick Reference: New Components in Agent Detail Page

### 📊 Component Rendering Flow

```typescript
// AgentDetail.tsx component hierarchy:

<AgentDetail agent={...} category={...} relatedAgents={...} extendedContent={...}>
  
  // 1. HERO SECTION (existing)
  <HeroSection />
  
  // 2. QUICK SUMMARY CARD ⭐ NEW - First thing users see
  {extendedContent?.quickSummary && (
    <QuickSummaryCard quickSummary={...} locale={locale} />
  )}
  
  // 3. PURPOSE & PARADIGMS (existing)
  <VoidCards>
    <PurposeCard />
    <ParadigmsCard />
    
    // 4. PERSONA CARD ⭐ NEW - Spans 2 columns
    {extendedContent?.persona && (
      <PersonaCard persona={...} locale={locale} themeColor={categoryColor} />
    )}
  </VoidCards>
  
  // 5. TRIGGERS (existing)
  <TriggersSection />
  
  // 6. JOURNEY NARRATIVE ⭐ NEW - Storytelling timeline
  {extendedContent?.journey && (
    <JourneyNarrativeSection journey={...} locale={locale} />
  )}
  
  // 7. USE CASE GALLERY ⭐ NEW - Real-world examples
  {extendedContent?.useCases?.length > 0 && (
    <UseCaseGallery useCases={...} locale={locale} />
  )}
  
  // 8. CHECKPOINT (existing)
  <CheckpointSection />
  
  // 9. PROMPT STARTERS ⭐ NEW - Copy-paste ready
  {extendedContent?.promptStarters?.length > 0 && (
    <PromptStarters promptStarters={...} locale={locale} />
  )}
  
  // 10. EXTENDED CONTENT SECTIONS (existing + NEW)
  <AgentDetailSections content={extendedContent} locale={locale}>
    // Existing: VS Process, T-Score, Input/Output, etc.
    // NEW: FAQ, Success Stories, Pro Tips, Analogies
  </AgentDetailSections>
  
  // 11. DECISION HELPER ⭐ NEW - Agent selection guidance
  {extendedContent?.decisionHelper && (
    <DecisionHelperComponent 
      decisionHelper={...} 
      locale={locale}
      agents={relatedAgents}
    />
  )}
  
  // 12. RELATED AGENTS (existing)
  <RelatedAgents />
  
</AgentDetail>
```

## 🎨 Styling & Theme Integration

All new components follow the Void Design System:

### Color Palette
- **Background**: `bg-void-elevated`, `bg-void-surface`, `bg-void-deep`
- **Text**: `text-stellar-core`, `text-stellar-bright`, `text-stellar-dim`, `text-stellar-faint`
- **Accents**: 
  - Creative: `text-tscore-creative` (#44ffaa)
  - Modal: `text-tscore-modal` (#ff3366)
  - Balanced: `text-tscore-balanced` (#ffcc22)
  - Divergent: `text-tscore-divergent` (#22ccff)

### Animation Pattern
All components use Framer Motion with staggered delays:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.05 }} // Incremental delays
/>
```

## 📝 Content Population Example

### Example: Adding content to an agent

```typescript
// In /lib/data/agent-content/example-content.ts

import type { ExtendedAgentContent } from '@/lib/data/types';

export const exampleAgentContent: ExtendedAgentContent = {
  agentId: "A1-TheoryMapper",
  
  // NEW: Quick Summary (5-second understanding)
  quickSummary: {
    oneLiner: {
      en: "Map your theoretical framework in 10 minutes",
      ko: "10분 안에 이론적 프레임워크를 매핑하세요"
    },
    bestFor: [
      { en: "Conceptual model design", ko: "개념적 모델 설계" },
      { en: "Theory integration", ko: "이론 통합" }
    ],
    notFor: [
      { en: "Data analysis", ko: "데이터 분석" },
      { en: "Statistical modeling", ko: "통계 모델링" }
    ],
    timeToResult: "10-15 min"
  },
  
  // NEW: Persona (emotional connection)
  persona: {
    archetype: "The Philosopher",
    personality: {
      en: "Thoughtful, systematic, loves connecting abstract concepts",
      ko: "사려깊고 체계적이며, 추상적 개념 연결을 즐깁니다"
    },
    voiceSample: {
      en: "Let's explore the theoretical foundations of your research question...",
      ko: "연구 질문의 이론적 기반을 함께 탐구해봅시다..."
    },
    motto: {
      en: "Theory is the map; data is the territory.",
      ko: "이론은 지도이고, 데이터는 영토입니다."
    }
  },
  
  // NEW: Journey (transformation narrative)
  journey: {
    startState: {
      en: "Confused about which theories apply to your research",
      ko: "어떤 이론이 연구에 적용되는지 혼란스러운 상태"
    },
    transformation: [
      { en: "Identify relevant theoretical frameworks", ko: "관련 이론적 프레임워크 식별" },
      { en: "Map relationships between theories", ko: "이론 간 관계 매핑" },
      { en: "Integrate theories into research model", ko: "연구 모델에 이론 통합" }
    ],
    endState: {
      en: "Clear theoretical foundation with visual framework diagram",
      ko: "시각적 프레임워크 다이어그램을 갖춘 명확한 이론적 기반"
    },
    timeEstimate: "10-15 min"
  },
  
  // NEW: Use Cases (real-world examples)
  useCases: [
    {
      title: { en: "Education Research", ko: "교육 연구" },
      scenario: {
        en: "PhD student needs to integrate constructivism and technology adoption theories",
        ko: "박사과정 학생이 구성주의와 기술 수용 이론을 통합해야 함"
      },
      outcome: {
        en: "Created integrated framework diagram in 12 minutes",
        ko: "12분 만에 통합 프레임워크 다이어그램 생성"
      },
      discipline: "education",
      complexity: "intermediate"
    }
  ],
  
  // NEW: Prompt Starters (copy-paste ready)
  promptStarters: [
    {
      prompt: {
        en: "I'm researching [topic]. Help me identify relevant theoretical frameworks.",
        ko: "[주제]를 연구하고 있습니다. 관련 이론적 프레임워크를 식별하도록 도와주세요."
      },
      context: {
        en: "For initial theory exploration",
        ko: "초기 이론 탐색용"
      },
      expectedResponse: {
        en: "Agent will suggest 3-5 relevant theories with brief explanations",
        ko: "에이전트가 간단한 설명과 함께 3-5개의 관련 이론을 제안합니다"
      }
    }
  ],
  
  // NEW: Decision Helper (when to use this agent)
  decisionHelper: {
    useWhen: [
      { en: "You need to identify theoretical frameworks", ko: "이론적 프레임워크를 식별해야 할 때" },
      { en: "You want to integrate multiple theories", ko: "여러 이론을 통합하고 싶을 때" }
    ],
    dontUseWhen: [
      { en: "You need statistical analysis", ko: "통계 분석이 필요할 때" },
      { en: "You're ready for data collection", ko: "데이터 수집 준비가 되었을 때" }
    ],
    alternativeAgents: [
      {
        agentId: "C2-StatisticalAdvisor",
        condition: { 
          en: "If you need statistical guidance",
          ko: "통계적 지침이 필요한 경우"
        }
      }
    ]
  },
  
  // NEW: FAQ
  faq: [
    {
      question: {
        en: "Can this agent help with grounded theory?",
        ko: "이 에이전트가 근거 이론을 도울 수 있나요?"
      },
      answer: {
        en: "Yes, but A2-HypothesisArchitect might be better for qualitative approaches.",
        ko: "네, 하지만 질적 접근에는 A2-HypothesisArchitect가 더 적합할 수 있습니다."
      }
    }
  ],
  
  // NEW: Success Stories
  successStories: [
    {
      researcher: {
        name: "Dr. Sarah Kim",
        field: { en: "Educational Technology", ko: "교육공학" },
        institution: "Seoul National University"
      },
      challenge: {
        en: "Struggled to connect 3 different learning theories",
        ko: "3가지 학습 이론을 연결하는 데 어려움을 겪음"
      },
      solution: {
        en: "Used A1-TheoryMapper to create integrated framework",
        ko: "A1-TheoryMapper를 사용하여 통합 프레임워크 생성"
      },
      outcome: {
        en: "Published in top-tier journal, framework cited 47 times",
        ko: "최상위 저널에 게재, 프레임워크가 47회 인용됨"
      },
      metrics: [
        { label: { en: "Time Saved", ko: "절감 시간" }, value: "3 weeks" },
        { label: { en: "Citations", ko: "인용 수" }, value: "47" }
      ]
    }
  ],
  
  // NEW: Pro Tips
  proTips: [
    {
      tip: {
        en: "Start with broad theories, then narrow down to specific constructs",
        ko: "넓은 이론으로 시작한 후 구체적인 구성 개념으로 좁혀가세요"
      },
      source: {
        en: "Based on 200+ successful theory mappings",
        ko: "200개 이상의 성공적인 이론 매핑 기반"
      },
      difficulty: "beginner"
    }
  ],
  
  // NEW: Analogies
  analogies: [
    {
      metaphor: {
        en: "Theory mapping is like GPS navigation",
        ko: "이론 매핑은 GPS 내비게이션과 같습니다"
      },
      explanation: {
        en: "Just as GPS shows multiple routes to a destination, theory mapping reveals different theoretical paths to answer your research question.",
        ko: "GPS가 목적지까지의 여러 경로를 보여주듯, 이론 매핑은 연구 질문에 답하기 위한 다양한 이론적 경로를 드러냅니다."
      }
    }
  ],
  
  // Existing fields...
  vsProcess: { /* ... */ },
  tScoreReference: { /* ... */ },
  // etc.
};
```

## 🔧 Component Props Reference

### QuickSummaryCard
```typescript
interface QuickSummaryCardProps {
  quickSummary: QuickSummary;
  locale: 'en' | 'ko';
}
```

### PersonaCard
```typescript
interface PersonaCardProps {
  persona: AgentPersona;
  locale: 'en' | 'ko';
  themeColor: string; // Category color
}
```

### JourneyNarrativeSection
```typescript
interface JourneyNarrativeSectionProps {
  journey: Journey;
  locale: 'en' | 'ko';
}
```

### UseCaseGallery
```typescript
interface UseCaseGalleryProps {
  useCases: UseCase[];
  locale: 'en' | 'ko';
}
```

### PromptStarters
```typescript
interface PromptStartersProps {
  promptStarters: PromptStarter[];
  locale: 'en' | 'ko';
}
```

### DecisionHelperComponent
```typescript
interface DecisionHelperProps {
  decisionHelper: DecisionHelper;
  locale: 'en' | 'ko';
  agents?: Agent[]; // Optional, for showing alternative agents
}
```

## ✅ Verification Checklist

Before deploying:

- [ ] All new components have data in extendedContent
- [ ] Locale prop is passed correctly (en/ko)
- [ ] ThemeColor matches category in PersonaCard
- [ ] Alternative agents in DecisionHelper exist in relatedAgents array
- [ ] UseCases have valid discipline values
- [ ] PromptStarters are tested and working
- [ ] FAQ answers are accurate and helpful
- [ ] Success stories have real metrics (if available)
- [ ] Pro tips have appropriate difficulty levels
- [ ] Analogies make sense to non-experts

## 🎯 Best Practices

1. **Content Quality**
   - QuickSummary one-liners should be under 60 characters
   - Use cases should tell complete stories (scenario → outcome)
   - Prompt starters should be copy-paste ready
   - FAQ should address actual user questions

2. **Conditional Rendering**
   - Always check for data existence before rendering
   - Use optional chaining: `extendedContent?.quickSummary`
   - Check array lengths: `useCases.length > 0`

3. **Bilingual Content**
   - Always provide both en and ko translations
   - Keep translations culturally appropriate
   - Use BilingualText type for consistency

4. **Performance**
   - Components are lazy-loaded via conditional rendering
   - Animation delays prevent layout shift
   - Images/icons are optimized

## 📚 Type Definitions

All types are defined in `/src/lib/data/types.ts`:

- `QuickSummary`
- `AgentPersona`
- `Journey`
- `UseCase`
- `PromptStarter`
- `DecisionHelper`
- `SuccessStory`
- `ProTip`
- `Analogy`
- `FAQ`
- `BilingualText`
- `ExtendedAgentContent`

Refer to this file for exact type structures and required fields.
