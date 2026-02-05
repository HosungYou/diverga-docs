# MemoryCommandPlayground - Component Architecture

## Component Tree

```
MemoryCommandPlayground
├── Controls Section
│   ├── Header (Terminal + "CLI Command Demo")
│   └── Buttons
│       ├── Play Button (disabled when playing)
│       └── Reset Button
│
├── Terminal Window
│   ├── Window Header
│   │   ├── Red Dot (#ff5f56)
│   │   ├── Yellow Dot (#ffbd2e)
│   │   ├── Green Dot (#27c93f)
│   │   └── Title ("terminal")
│   │
│   └── Terminal Content
│       ├── Command Prompt ("$")
│       ├── Typed Text (with cursor animation)
│       └── Output Lines (conditional render)
│           ├── Success lines (✓)
│           ├── Info lines (→)
│           ├── Headers (===)
│           └── Regular text
│
└── Key Commands Reference
    └── Grid of Commands
        ├── notepad_read
        ├── notepad_write_priority
        ├── notepad_write_working
        └── notepad_write_manual
```

## Data Flow

```
User Interaction
    ↓
Button Click (Play/Reset)
    ↓
State Update
    ↓
useEffect Hook Triggered
    ↓
Animation Loop
    ↓
Character-by-Character Typing
    ↓
Typing Complete
    ↓
Output Display (fade-in)
    ↓
Next Command (or Stop)
```

## State Machine

```
[IDLE]
  ↓ (Play clicked)
[TYPING]
  ↓ (Command complete)
[SHOWING_OUTPUT]
  ↓ (Delay complete)
[TRANSITIONING]
  ↓ (More commands?)
  ├─ Yes → [TYPING] (next command)
  └─ No  → [IDLE]

(Reset clicked) → [IDLE] (from any state)
```

## Animation Timing

```
User clicks Play
    ↓
    0ms: Start typing first character
   30ms: Type next character
   60ms: Type next character
    ...
  Nms: Command complete (N = length * 30ms)
    ↓
  +500ms: Show output (fade-in)
    ↓
+2000ms: Clear for next command
    ↓
  Repeat or Stop
```

## Props Interface

```typescript
interface MemoryCommandPlaygroundProps {
  locale: string;  // "en" | "ko"
}

interface Command {
  input: string;      // Command to type
  output: string[];   // Output lines to display
  delay?: number;     // Optional custom delay
}
```

## Styling System

### Color Palette
```
Terminal Background: #0a0a0a
Command Prompt:      #9b59b6 (purple)
Typed Text:          stellar-core (white)
Cursor:              stellar-core (white, animated)

Output Colors:
  Success (✓):       #27c93f (green)
  Info (→):          #9b59b6 (purple)
  Headers (===):     #ffbd2e (yellow)
  Timestamps ([]):   stellar-dim (gray)
  Regular:           stellar-faint (light gray)

Buttons:
  Border:            stellar-faint/20
  Background:        void-elevated
  Hover:             void-surface
  Text:              stellar-core
```

### Layout Structure
```
Container (space-y-4)
├── Controls Row (flex, justify-between)
│   ├── Left: Icon + Label
│   └── Right: Button Group
│
├── Terminal Box (border, bg-dark, p-6)
│   ├── Header Row (border-b, pb-4)
│   └── Content Area (space-y-4)
│
└── Reference Panel (border, p-4)
    └── Grid (sm:grid-cols-2)
```

## Animation Implementation

### Typing Effect
```typescript
useEffect(() => {
  if (!isPlaying) return;
  
  const interval = setInterval(() => {
    // Type one character
    setTypedText(prev => prev + nextChar);
    charIndex++;
    
    if (charIndex >= command.length) {
      clearInterval(interval);
      // Proceed to output
    }
  }, 30); // 30ms per character
  
  return () => clearInterval(interval);
}, [isPlaying, currentCommand]);
```

### Cursor Blink
```typescript
<motion.span
  animate={{ opacity: [1, 0] }}
  transition={{ 
    duration: 0.5, 
    repeat: Infinity 
  }}
  className="inline-block h-4 w-2 bg-stellar-core"
/>
```

### Output Fade-In
```typescript
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  className="ml-4 space-y-1"
>
  {/* Output lines */}
</motion.div>
```

## Integration Points

### In Page Context
```typescript
// commands/page.tsx
import { MemoryCommandPlayground } from '@/components/features/memory/MemoryCommandPlayground';

<motion.section>
  <h2>{t.interactiveDemo}</h2>
  <p>{t.interactiveDemoDescription}</p>
  
  <MemoryCommandPlayground locale={locale} />
</motion.section>
```

### Export Path
```typescript
// components/features/memory/index.ts
export { MemoryCommandPlayground } from './MemoryCommandPlayground';
```

## Performance Considerations

### Optimizations Applied
- Single `useEffect` for animation loop
- Cleanup function for intervals
- Conditional rendering for output
- Minimal re-renders with focused state updates

### Memory Management
- Interval cleanup on unmount
- No memory leaks from animation loops
- Efficient state updates (only necessary fields)

## Accessibility Features

### Current Implementation
- Semantic HTML (`<button>` elements)
- Disabled state for buttons
- Clear visual feedback
- Readable text colors with sufficient contrast

### Recommended Additions
```typescript
// ARIA labels for screen readers
<button 
  aria-label={locale === 'ko' ? '데모 재생' : 'Play demo'}
  disabled={isPlaying}
>
  <Play />
  {t.play}
</button>

// Live region for output
<div 
  role="log" 
  aria-live="polite"
  aria-atomic="true"
>
  {output}
</div>
```

## Testing Strategy

### Unit Tests
- State transitions (Play → Playing → Idle)
- Command cycling logic
- Reset functionality
- Locale string rendering

### Integration Tests
- Component renders without errors
- Animation completes successfully
- Buttons respond to clicks
- Output displays correctly

### Visual Tests
- Terminal appearance across browsers
- Animation smoothness
- Responsive layout
- Color contrast compliance

## Browser Compatibility

### Supported Features
- CSS Grid (for command reference)
- Flexbox (for layout)
- CSS Animations (Framer Motion)
- Modern JavaScript (ES2017+)

### Fallbacks
- Graceful degradation without animations
- Static display if JS disabled
- CSS-only terminal appearance

## File Locations

```
diverga-docs/
└── src/
    ├── components/
    │   └── features/
    │       └── memory/
    │           ├── MemoryCommandPlayground.tsx ← Component
    │           ├── index.ts ← Export
    │           ├── INTEGRATION.md ← Integration docs
    │           └── COMPONENT_ARCHITECTURE.md ← This file
    └── app/
        └── [locale]/
            └── docs/
                └── memory-system/
                    └── commands/
                        └── page.tsx ← Integration point
```

## Version History

### v1.0.0 (2025-02-05)
- Initial implementation
- 3 demo commands
- Play/Reset controls
- Bilingual support (en/ko)
- Terminal aesthetics
- Framer Motion animations
