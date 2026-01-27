# Diverga Design System

## 1. Design Philosophy

VS Diverge Editorial System을 기반으로 **Diverga 브랜드 아이덴티티**를 적용:

| 원칙 | 설명 |
|------|------|
| **Editorial Minimalism** | 콘텐츠 중심, 불필요한 장식 배제 |
| **Typographic Hierarchy** | 명확한 제목/본문 구분 |
| **Diverga Brand Colors** | VS 방법론의 "발산(Diverge)" 개념을 시각화 |
| **Researcher-First** | 학술적 신뢰감 + 접근성 균형 |

---

## 2. Brand Identity

### Concept
**"Diverge from the Obvious"** - 뻔한 답을 넘어서

### Visual Elements
- **로고**: "D" 글자에서 여러 갈래로 퍼지는 화살표 (VS 발산 표현)
- **태그라인**: "Beyond Modal Answers" / "뻔한 답을 넘어서"

### Color Meaning
| Color | Name | Meaning |
|-------|------|---------|
| Indigo | Intellectual Indigo | 지적 권위 |
| Teal | Exploration Teal | 혁신적 탐구 |
| Gold | Insight Gold | 핵심 인사이트 |

---

## 3. Color System (OKLCH)

### Primary: Diverga Indigo

```css
--diverga-50:  oklch(0.97 0.02 270);   /* Background tint */
--diverga-100: oklch(0.93 0.04 270);
--diverga-200: oklch(0.85 0.06 270);
--diverga-300: oklch(0.75 0.08 270);
--diverga-400: oklch(0.55 0.12 270);   /* Light variant */
--diverga-500: oklch(0.45 0.14 270);   /* Main brand */
--diverga-600: oklch(0.35 0.16 270);   /* Hover/active */
--diverga-700: oklch(0.28 0.14 270);
--diverga-800: oklch(0.22 0.12 270);
--diverga-900: oklch(0.18 0.10 270);
--diverga-950: oklch(0.12 0.08 270);
```

### Secondary: Exploration Teal

```css
--teal-400: oklch(0.65 0.10 175);   /* Lighter */
--teal-500: oklch(0.55 0.12 175);   /* VS methodology accent */
--teal-600: oklch(0.45 0.14 175);
```

### Accent: Insight Gold

```css
--gold-400: oklch(0.82 0.10 85);    /* Softer accent */
--gold-500: oklch(0.75 0.12 85);    /* Highlights, CTAs */
--gold-600: oklch(0.58 0.14 85);
```

### Category Colors (8 Hues)

| Category | Name | OKLCH | Hue |
|----------|------|-------|-----|
| A | Foundation | `oklch(0.55 0.15 270)` | Indigo |
| B | Evidence | `oklch(0.55 0.15 295)` | Violet |
| C | Design & Meta-Analysis | `oklch(0.55 0.15 175)` | Teal |
| D | Data Collection | `oklch(0.55 0.15 55)` | Amber |
| E | Analysis | `oklch(0.55 0.15 25)` | Red |
| F | Quality | `oklch(0.55 0.15 200)` | Cyan |
| G | Communication | `oklch(0.55 0.15 330)` | Magenta |
| H | Specialized | `oklch(0.55 0.15 125)` | Green |

### T-Score Visual Encoding

| Range | Name | Color | Meaning |
|-------|------|-------|---------|
| T > 0.7 | Modal | Red `oklch(0.55 0.18 25)` | 경고 - 뻔한 선택 |
| T 0.4-0.7 | Established | Blue `oklch(0.55 0.12 240)` | 검증된 선택 |
| T 0.2-0.4 | Emerging | Green `oklch(0.55 0.15 145)` | 혁신적 선택 |
| T < 0.2 | Experimental | Purple `oklch(0.55 0.15 295)` | 실험적 선택 |

### VS Level Badges

| Level | Color | Description |
|-------|-------|-------------|
| FULL | Green `oklch(0.55 0.15 145)` | 완전한 VS 5단계 프로세스 |
| ENHANCED | Cyan `oklch(0.55 0.12 200)` | 향상된 VS 3단계 프로세스 |
| LIGHT | Neutral `oklch(0.65 0.03 75)` | 기본 지원 |

---

## 4. Typography

### Font Stack

```css
/* Headings & Body */
font-family: 'Pretendard Variable', 'Inter', system-ui, sans-serif;

/* Code */
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale (Mobile-first)

| Class | Size | Usage |
|-------|------|-------|
| `.text-hero` | `clamp(2.5rem, 6vw, 4.5rem)` | Hero headlines |
| `.text-h1` | `clamp(2rem, 4vw, 3rem)` | Page titles |
| `.text-h2` | `clamp(1.5rem, 3vw, 2rem)` | Section headers |
| `.text-h3` | `clamp(1.25rem, 2vw, 1.5rem)` | Subsection headers |
| `text-base` | `1rem` | Body text |
| `text-sm` | `0.875rem` | Small text |

---

## 5. Component Patterns

### Cards

```css
/* Base card style */
.card {
  border: 1px solid var(--border);
  border-radius: 1rem;              /* rounded-xl */
  background: var(--card);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  transition: all 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  border-color: var(--diverga-300);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
```

### Buttons

| Variant | Style |
|---------|-------|
| Primary | Indigo background, white text |
| Secondary | Transparent, Indigo border |
| Ghost | Text only, hover shows background |

### Badges

| Type | Style |
|------|-------|
| Category | Colored background with category hue |
| Tier | Outlined with tier-specific color |
| VS Level | Filled with green/cyan/neutral |

### Code Blocks

```css
.code-block {
  background: oklch(0.20 0.01 270);  /* gray-900 */
  border-radius: 0.75rem;
  padding: 1rem;
  font-family: 'JetBrains Mono', monospace;
  position: relative;
}

.copy-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
```

---

## 6. Responsive Breakpoints

| Breakpoint | Width | Columns (Agent Grid) |
|------------|-------|----------------------|
| Mobile | < 640px | 1 column |
| Tablet | 640px - 1024px | 2 columns |
| Desktop | > 1024px | 3 columns |

---

## 7. Animation Guidelines

### Transitions

```css
/* Default transition */
transition: all 0.2s ease-out;

/* Page elements */
transition: opacity 0.3s, transform 0.3s;
```

### Framer Motion Presets

```typescript
// Fade in
{ initial: { opacity: 0 }, animate: { opacity: 1 } }

// Slide up
{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

// Stagger children
{ transition: { staggerChildren: 0.1 } }
```

---

## 8. Accessibility

| Requirement | Implementation |
|-------------|----------------|
| Color Contrast | OKLCH ensures WCAG AA compliance |
| Focus States | Visible focus rings on all interactive elements |
| Screen Readers | Semantic HTML, ARIA labels where needed |
| Keyboard Nav | All features accessible via keyboard |
| Motion | Respects `prefers-reduced-motion` |
