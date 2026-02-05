# Tutorial Component Library - API Reference

## Component Exports

```typescript
import {
  // Components
  StepIndicator,
  CodeBlock,
  GifPlayer,
  TutorialCard,
  TutorialLayout,

  // Types
  Tutorial,
  TutorialStep,
  Locale
} from '@/components/tutorials';
```

---

## Types

### `Locale`
```typescript
type Locale = 'en' | 'ko';
```

### `TutorialStep`
```typescript
interface TutorialStep {
  id: number;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  image?: string;      // Static image path
  gif?: string;        // Animated GIF path
  code?: string;       // Code snippet
  duration?: string;   // e.g., "5 min"
}
```

### `Tutorial`
```typescript
interface Tutorial {
  id: string;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;    // e.g., "15 min"
  steps: TutorialStep[];
}
```

---

## Components

### `<StepIndicator />`

Interactive progress indicator with step navigation.

**Props:**
```typescript
interface StepIndicatorProps {
  currentStep: number;           // 1-indexed current step
  totalSteps: number;            // Total number of steps
  steps: TutorialStep[];         // Array of step data
  onStepClick?: (step: number) => void;  // Click handler (optional)
  locale: Locale;                // Language
}
```

**Example:**
```tsx
<StepIndicator
  currentStep={2}
  totalSteps={5}
  steps={tutorialSteps}
  onStepClick={(step) => setCurrentStep(step)}
  locale="en"
/>
```

**Features:**
- Animated progress bar
- Clickable step dots
- Pulse effect on current step
- Duration display
- Bilingual step titles

---

### `<CodeBlock />`

Syntax-highlighted code display with copy functionality.

**Props:**
```typescript
interface CodeBlockProps {
  code: string;              // Code content
  language?: string;         // Language name (default: "typescript")
  filename?: string;         // Optional filename display
  showLineNumbers?: boolean; // Show line numbers (default: true)
}
```

**Example:**
```tsx
<CodeBlock
  code="const x = 42;"
  language="typescript"
  filename="example.ts"
  showLineNumbers={true}
/>
```

**Syntax Highlighting:**
- Keywords: Purple (`#c678dd`)
- Strings: Green (`#98c379`)
- Comments: Gray (`#5c6370`)
- Numbers: Orange (`#d19a66`)

---

### `<GifPlayer />`

Media viewer with play/pause and zoom controls.

**Props:**
```typescript
interface GifPlayerProps {
  src: string;                            // Image/GIF path
  alt: string;                            // Alt text
  caption?: { en: string; ko: string };   // Optional caption
  locale: Locale;                         // Language
}
```

**Example:**
```tsx
<GifPlayer
  src="/tutorials/demo.gif"
  alt="Tutorial demo"
  caption={{
    en: "Click the button to start",
    ko: "시작하려면 버튼을 클릭하세요"
  }}
  locale="en"
/>
```

**Features:**
- Play/pause for GIFs
- Click to zoom (modal)
- Loading animation
- Bilingual captions
- Next.js Image optimization

**GIF Pause Support:**
To enable play/pause, create a static PNG version:
```bash
ffmpeg -i animation.gif -vframes 1 animation-static.png
```

---

### `<TutorialCard />`

Tutorial preview card for listings.

**Props:**
```typescript
interface TutorialCardProps {
  tutorial: Tutorial;  // Tutorial data
  locale: Locale;      // Language
}
```

**Example:**
```tsx
<TutorialCard
  tutorial={{
    id: 'getting-started',
    title: { en: 'Getting Started', ko: '시작하기' },
    description: { en: 'Learn basics', ko: '기본 학습' },
    difficulty: 'beginner',
    duration: '15 min',
    steps: [...]
  }}
  locale="en"
/>
```

**Difficulty Badges:**
- `beginner`: Green badge (초급)
- `intermediate`: Blue badge (중급)
- `advanced`: Purple badge (고급)

---

### `<TutorialLayout />`

Complete tutorial page wrapper with navigation.

**Props:**
```typescript
interface TutorialLayoutProps {
  tutorial: Tutorial;              // Tutorial data
  locale: Locale;                  // Language
  onComplete?: () => void;         // Completion callback
}
```

**Example:**
```tsx
<TutorialLayout
  tutorial={myTutorial}
  locale="en"
  onComplete={() => router.push('/tutorials')}
/>
```

**Features:**
- Automatic step management
- Previous/Next navigation
- Step content rendering (code + media)
- Animated transitions
- Completion callback
- Responsive design

**Auto-renders:**
- Tutorial header with difficulty badge
- Step indicator
- Step description
- Code blocks (if `step.code` provided)
- GIFs/Images (if `step.gif`/`step.image` provided)
- Navigation buttons

---

## Layout Patterns

### Tutorial Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {tutorials.map(tutorial => (
    <TutorialCard key={tutorial.id} tutorial={tutorial} locale={locale} />
  ))}
</div>
```

### Complete Tutorial Page
```tsx
export default function TutorialPage({ params }: { params: { id: string } }) {
  const tutorial = getTutorial(params.id);
  const locale = useLocale();

  return <TutorialLayout tutorial={tutorial} locale={locale} />;
}
```

### Custom Step Layout
```tsx
export default function CustomTutorial() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto">
      <StepIndicator
        currentStep={step}
        totalSteps={3}
        steps={steps}
        onStepClick={setStep}
        locale="en"
      />

      <div className="mt-8 space-y-6">
        {steps[step - 1].code && (
          <CodeBlock code={steps[step - 1].code} />
        )}
        {steps[step - 1].gif && (
          <GifPlayer src={steps[step - 1].gif} alt="Demo" locale="en" />
        )}
      </div>
    </div>
  );
}
```

---

## Styling

All components use Tailwind CSS with the Void design system:

### Color Tokens
```css
/* Backgrounds */
bg-void-50         /* Light mode background */
bg-void-950        /* Dark mode background */

/* Borders */
border-void-200    /* Light mode border */
border-void-800    /* Dark mode border */

/* Text */
text-void-900      /* Dark text */
text-void-50       /* Light text */
text-void-400      /* Muted text */

/* Accents */
bg-accent-purple   /* Primary accent */
bg-accent-blue     /* Secondary accent */
bg-accent-green    /* Success/complete */
```

### Responsive Breakpoints
```css
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
```

---

## Animation

All components use Framer Motion. Key patterns:

### Fade In
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {children}
</motion.div>
```

### Hover Scale
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Stagger Children
```tsx
<motion.div>
  {items.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: i * 0.1 }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## Accessibility

All components follow WCAG 2.1 AA standards:

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **ARIA Labels**: Proper ARIA attributes on controls
- **Focus Visible**: Clear focus indicators
- **Alt Text**: Required on all images
- **Color Contrast**: Minimum 4.5:1 contrast ratio
- **Screen Readers**: Semantic HTML and ARIA

---

## Performance

Optimizations included:

- **Next.js Image**: Automatic optimization for GIFs/images
- **Code Splitting**: Each component can be lazily loaded
- **GPU Acceleration**: Animations use transform and opacity
- **Minimal Re-renders**: Proper React hooks usage
- **Lazy Loading**: Images load on demand

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)
- Dark mode support across all browsers

---

## Examples

See `EXAMPLE.tsx` for complete usage examples:
1. Complete tutorial with TutorialLayout
2. Tutorial grid with cards
3. Custom step navigation
4. Code block showcase
5. Media gallery
6. Mixed content tutorial step
