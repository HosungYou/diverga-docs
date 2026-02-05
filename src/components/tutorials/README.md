# Tutorial Component Library

Reusable components for building interactive, bilingual tutorials with the Void design system.

## Components

### 1. **types.ts** - Shared TypeScript Types
- `TutorialStep`: Individual step data structure
- `Tutorial`: Complete tutorial structure
- `Locale`: Language type ('en' | 'ko')

### 2. **StepIndicator.tsx** - Progress Indicator
Displays tutorial progress with interactive navigation.

**Features:**
- Animated progress bar with gradient
- Clickable step dots with hover effects
- Pulse animation on current step
- Step number and duration display
- Bilingual step titles

**Props:**
```typescript
interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: TutorialStep[];
  onStepClick?: (step: number) => void;
  locale: Locale;
}
```

**Usage:**
```tsx
<StepIndicator
  currentStep={2}
  totalSteps={5}
  steps={tutorialSteps}
  onStepClick={(step) => setCurrentStep(step)}
  locale="en"
/>
```

### 3. **CodeBlock.tsx** - Syntax Highlighted Code
Code display with copy functionality and syntax highlighting.

**Features:**
- One-click copy with visual feedback
- Line numbers (optional)
- Syntax highlighting (keywords, strings, comments, numbers)
- Language indicator badge
- Filename display
- Dark theme optimized

**Props:**
```typescript
interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}
```

**Usage:**
```tsx
<CodeBlock
  code={`const result = await fetch('/api/data');`}
  language="typescript"
  filename="app.ts"
  showLineNumbers={true}
/>
```

**Syntax Colors:**
- Keywords: `#c678dd` (purple)
- Strings: `#98c379` (green)
- Comments: `#5c6370` (gray, italic)
- Numbers: `#d19a66` (orange)

### 4. **GifPlayer.tsx** - Interactive Media Viewer
Display GIFs and images with play/pause controls and zoom.

**Features:**
- Play/pause for GIFs (static fallback support)
- Click to zoom with modal overlay
- Loading state animation
- Bilingual captions
- Hover overlay with zoom icon
- Next.js Image optimization (with unoptimized flag for GIFs)

**Props:**
```typescript
interface GifPlayerProps {
  src: string;
  alt: string;
  caption?: { en: string; ko: string };
  locale: Locale;
}
```

**Usage:**
```tsx
<GifPlayer
  src="/tutorials/demo.gif"
  alt="Tutorial demonstration"
  caption={{
    en: "Click the button to start",
    ko: "시작하려면 버튼을 클릭하세요"
  }}
  locale="en"
/>
```

**GIF Control Implementation:**
To support play/pause, create a static PNG version of your GIF:
```bash
# Create static version
ffmpeg -i animation.gif -vframes 1 animation-static.png
```

### 5. **TutorialCard.tsx** - Tutorial Preview Card
Card component for tutorial listings with metadata.

**Features:**
- Difficulty badge (beginner/intermediate/advanced)
- Duration indicator with clock icon
- Step count
- Hover animations (lift and glow effects)
- Gradient background pattern
- Link to tutorial detail page
- Bilingual titles and descriptions

**Props:**
```typescript
interface TutorialCardProps {
  tutorial: Tutorial;
  locale: Locale;
}
```

**Usage:**
```tsx
<TutorialCard
  tutorial={{
    id: 'getting-started',
    title: { en: 'Getting Started', ko: '시작하기' },
    description: { en: 'Learn the basics', ko: '기본 사항 학습' },
    difficulty: 'beginner',
    duration: '15 min',
    steps: [...]
  }}
  locale="en"
/>
```

**Difficulty Levels:**
- `beginner`: Green badge (초급)
- `intermediate`: Blue badge (중급)
- `advanced`: Purple badge (고급)

## Design System Integration

All components use the Void design system:

### Colors
- Background: `void-50`, `void-950`
- Borders: `void-200`, `void-800`
- Text: `void-900`, `void-50`, `void-400`
- Accents: `accent-purple`, `accent-blue`, `accent-green`

### Spacing
- Consistent padding: `p-4`, `p-6`
- Gap spacing: `gap-2`, `gap-4`
- Margin utilities: `mb-4`, `mb-8`, `mb-12`

### Typography
- Font families: Default sans + `font-mono` for code
- Sizes: `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-4xl`
- Weights: `font-semibold`, `font-bold`

### Animations
All components use Framer Motion:
- Initial/animate states for fade-in effects
- Hover interactions (scale, translate)
- Stagger delays for sequential reveals
- Spring physics for natural movement

## Example: Complete Tutorial Page

```tsx
import { StepIndicator, CodeBlock, GifPlayer } from '@/components/tutorials';

export default function TutorialPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const locale = useLocale();

  const tutorial = {
    id: 'setup-tutorial',
    title: { en: 'Setup Tutorial', ko: '설정 튜토리얼' },
    steps: [
      {
        id: 1,
        title: { en: 'Install Dependencies', ko: '의존성 설치' },
        description: { en: 'Install required packages', ko: '필요한 패키지 설치' },
        code: 'npm install diverga-research-coordinator',
        duration: '2 min'
      },
      {
        id: 2,
        title: { en: 'Configure Settings', ko: '설정 구성' },
        description: { en: 'Set up your config file', ko: '구성 파일 설정' },
        gif: '/tutorials/config.gif',
        duration: '5 min'
      }
    ]
  };

  const currentStepData = tutorial.steps[currentStep - 1];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <StepIndicator
        currentStep={currentStep}
        totalSteps={tutorial.steps.length}
        steps={tutorial.steps}
        onStepClick={setCurrentStep}
        locale={locale}
      />

      <div className="mt-8 space-y-6">
        <h2>{currentStepData.title[locale]}</h2>
        <p>{currentStepData.description[locale]}</p>

        {currentStepData.code && (
          <CodeBlock code={currentStepData.code} language="bash" />
        )}

        {currentStepData.gif && (
          <GifPlayer src={currentStepData.gif} alt={currentStepData.title[locale]} locale={locale} />
        )}
      </div>
    </div>
  );
}
```

## File Structure

```
src/components/tutorials/
├── types.ts              # Shared TypeScript types
├── StepIndicator.tsx     # Progress indicator
├── CodeBlock.tsx         # Code display
├── GifPlayer.tsx         # Media viewer
├── TutorialCard.tsx      # Tutorial card
├── index.ts              # Exports
└── README.md             # This file
```

## Next Steps

1. **Create Tutorial Content**: Add tutorial data to `/public/tutorials/`
2. **Build Tutorial Pages**: Create dynamic routes in `/app/[locale]/tutorials/[id]/`
3. **Add Tutorial Listings**: Create an index page with TutorialCard grid
4. **Screenshot Assets**: Generate tutorial screenshots and GIFs
5. **Localization**: Add tutorial content to translation files

## Best Practices

### Accessibility
- All images have `alt` text
- Interactive elements have hover/focus states
- Keyboard navigation supported (click handlers)
- Color contrast meets WCAG standards

### Performance
- Images use Next.js Image optimization
- Framer Motion animations use GPU-accelerated properties
- Code highlighting uses CSS (no external libraries)
- Lazy loading for heavy content

### Responsiveness
- All components are mobile-friendly
- Flexible layouts with `max-w-*` constraints
- Touch-friendly tap targets (min 44x44px)
- Responsive text sizes

### Bilingual Support
- All user-facing text accepts `{ en, ko }` objects
- Locale-aware formatting and content
- Consistent translation structure across components
