# Design Skill Guide - Song Nguyen EDU
**Comprehensive Design Standards for AI Agent Page Creation**

Tài liệu này hướng dẫn AI agents thiết kế các trang mới với sự nhất quán, một cách tiếp cận response-first, và tuân thủ theo các hệ thống thiết kế đã được xác lập.

Phạm vi thiết kế hiện tại ưu tiên các route đang dùng như /, /tutor, /admin; không sử dụng /user trong các thiết kế mới nếu không có yêu cầu riêng.

---

## 1. Design Systems Overview

### 1.1 Active Design Philosophies

Workspace có **3 hệ thống thiết kế song song** phục vụ các mục đích khác nhau:

#### **A. Apple-Inspired Minimalism** (docs/DESIGN.md)
- **Triết lý:** Minimalism as reverence for content
- **Cách tiếp cận:** Vast whitespace, binary color rhythm, single accent color
- **Khi dùng:** Landing pages, hero sections, product showcases
- **Đặc điểm:**
  - Binary color sections: pure black (#000000) alternating with light gray (#f5f5f7)
  - Single accent: Apple Blue (#0071e3) for ALL interactive elements
  - SF Pro Display/Text with optical sizing
  - No textures, no gradients on product backgrounds
  - Extremely tight headline line-heights (1.07-1.14) for billboard effect
  - Full-width sections with centered content
  - Pill-shaped CTAs (border-radius: 980px)

#### **B. Admin-Centric Business System** (template/ADMIN_DESIGN_GUIDE.md)
- **Triết lý:** Practical efficiency balanced with modern polish
- **Cách tiếp cận:** Token-based design, reusable components, dashboard-focused
- **Khi dùng:** Admin panels, dashboards, management interfaces
- **Đặc điểm:**
  - Primary color: #3B82F6 (Blue-600)
  - Sidebar (210px fixed) + Topbar layout pattern
  - Card-based component system
  - Semantic color tokens (success/warning/error badges)
  - Minimal borders, tonal separation via shadows
  - Grid-based layouts (3-col / 2-col / 1-col responsive)

#### **C. Liquid Glass & Fluid Intelligence** (template/DESIGN.md)
- **Triết lý:** Premium, editorial, youthful aesthetic + glassmorphism
- **Cách tiếp cận:** Intentional asymmetry, organic shapes, layered transparency
- **Khi dùng:** Educational content, feature showcases, interactive moments
- **Đặc điểm:**
  - Plus Jakarta Sans (display) + Manrope (titles/body)
  - Primary: #0053cc with container #779dff
  - Glassmorphism: semi-transparent background + backdrop-blur(12-20px)
  - No 1px solid borders—use tonal shifts + organic blobs
  - Gradient CTAs (primary → primary-container diagonal)
  - Fluid, non-geometric background shapes

---

## 2. Responsive Design Principles

### 2.1 Breakpoints & Mobile-First Approach

```css
/* Current Implementation Breakpoint */
@media (max-width: 1023px) {
  /* Desktop → Mobile transition at 1024px viewport width */
}
```

**Mobile-First Strategy:**
1. Design components for mobile (< 768px) first
2. Build up to tablet (768px - 1023px)
3. Extend to desktop (1024px+)

### 2.2 Layout Adaptation Rules

#### Desktop (1024px+)
- Sidebar: 210px fixed left
- Main content: `margin-left: 210px` (offset by sidebar)
- Grid columns: 3-column default → 2-col for detail views
- Topbar: horizontal search box, full menu
- Navigation: horizontal link list

#### Tablet (768px - 1023px)
- Sidebar: Collapsible hamburger menu OR full-width below content
- Main content: Full width or stack
- Grid: 2 columns → 1 column
- Topbar: Compact, hamburger icon prominent

#### Mobile (< 768px)
- Sidebar: Hidden by default, slide-in overlay on menu click
- main-content: Full width
- Grid: 1 column only
- Cards: Stack vertically
- Padding: Reduce to 16px (from 32px desktop)
- Font sizes: Reduce by 1-2 sizes for readability
- Buttons: Full width or 80%+ width when primary CTA

### 2.3 Spacing Adaptation

**Desktop:**
- Page content padding: 32px
- Card gap: 16px
- Section margin-bottom: 24-32px

**Tablet:**
- Page content padding: 24px
- Card gap: 12px
- Section margin-bottom: 20px

**Mobile:**
- Page content padding: 16px
- Card gap: 12px
- Section margin-bottom: 16px

### 2.4 Responsive Typography

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Hero Heading | 56px (3.5rem) | 40px (2.5rem) | 28px (1.75rem) |
| Page Title | 28px (1.75rem) | 24px (1.5rem) | 20px (1.25rem) |
| Section Heading | 20px (1.25rem) | 18px (1.125rem) | 16px (1rem) |
| Body Text | 17px (1.06rem) | 16px (1rem) | 15px (0.94rem) |
| Caption | 14px (0.88rem) | 13px (0.81rem) | 12px (0.75rem) |

**Line Height:** Increase by 0.1-0.2 on mobile for readability
- Desktop headlines: 1.07-1.14
- Mobile headlines: 1.17-1.24
- Body desktop: 1.47 → Body mobile: 1.57

### 2.5 Viewport Units & Fluid Sizing

```css
/* Example: Fluid Typography */
.page-title {
  font-size: clamp(28px, 5vw, 56px); /* min, preferred, max */
  line-height: 1.07;
}

/* Example: Fluid Padding */
.page-content {
  padding: clamp(16px, 3vw, 32px);
}
```

---

## 3. Color Systems & Tokens

### 3.1 Admin System Colors (Primary Usage)

```css
:root {
  /* Brand Primary */
  --color-primary: #3B82F6;
  --color-primary-hover: #2563eb;
  --color-primary-soft: #eff6ff;
  --color-primary-gradient: linear-gradient(135deg, #3B82F6, #5870D5);

  /* Semantic Status */
  --color-success: #16a34a;
  --color-success-bg: #dcfce7;
  --color-warning: #d97706;
  --color-warning-bg: #fef3c7;
  --color-danger: #ef4444;
  --color-danger-bg: #fee2e2;

  /* Neutrals (Page-level) */
  --color-bg-page: #f9fafb;
  --color-bg-card: #ffffff;
  --color-bg-hover: #fafbfc;

  /* Borders & Dividers */
  --color-border: #e5e7eb;
  --color-border-subtle: #f3f4f6;

  /* Text */
  --color-text-primary: #1f2937;        /* H1, body text default */
  --color-text-secondary: #6b7280;      /* Nav items, secondary labels */
  --color-text-tertiary: #9ca3af;       /* Captions, disabled, helper text */
  --color-text-disabled: #d1d5db;       /* Disabled input, very faint */

  /* Interaction & Elevation */
  --shadow-card: 0 4px 20px rgba(59,130,246,0.08);
  --shadow-hover: 0 4px 20px rgba(59,130,246,0.1);
  --shadow-float: 0 8px 30px rgba(59,130,246,0.1);
  --shadow-modal: 0 10px 40px rgba(0,0,0,0.1);

  --focus-ring: 0 0 0 3px rgba(59, 130, 246, 0.1);
  --transition-fast: all 0.2s ease;
  --transition-base: all 0.3s ease;
}
```

### 3.2 Apple System Colors (Premium Moments)

```css
:root {
  --color-apple-black: #000000;         /* Hero backgrounds */
  --color-apple-gray: #f5f5f7;          /* Alternate sections */
  --color-apple-near-black: #1d1d1f;    /* Primary text on light */
  --color-apple-blue: #0071e3;          /* Interactive, focus, CTAs */
  --color-apple-link-blue: #0066cc;     /* inline links on light */
  --color-apple-bright-blue: #2997ff;   /* Links on dark */
}
```

### 3.3 Liquid Glass Colors (Educational)

```css
:root {
  --color-glass-primary: #0053cc;
  --color-glass-primary-container: #779dff;
  --color-glass-secondary: #bb0100;
  --color-glass-secondary-container: #ffc4ba;
  --color-glass-surface: #f5f7f9;
  --color-glass-surface-container: #ffffff;
  --color-glass-tertiary: #00b2eb;      /* Organic blob accents */
}
```

---

## 4. Typography System

### 4.1 Font Families

| System | Display Font | Body Font | Usage |
|--------|------------|-----------|-------|
| **Admin** | Manrope | Inter | Dashboards, business apps |
| **Apple** | SF Pro Display | SF Pro Text | Premium, minimalist |
| **Liquid Glass** | Plus Jakarta Sans | Manrope | Educational, editorial |

### 4.2 Hierarchy & Sizes

| Role | Size | Weight | Line-Height | Usage |
|------|------|--------|-------------|-------|
| Hero Display | 56px (3.5rem) | 600 | 1.07 | Page hero, major announcement |
| Page Title | 28px (1.75rem) | 800 | 1.14 | Section title, page header |
| Section Heading | 20px (1.25rem) | 700 | 1.19 | Subsection, card header |
| Sub-heading | 16px (1rem) | 600 | 1.25 | Minor section, label group |
| Body | 17px (1.06rem) | 400 | 1.47 | Standard reading text, paragraphs |
| Body Emphasis | 17px (1.06rem) | 600 | 1.24 | Bold labels, highlighted content |
| Button Large | 18px (1.125rem) | 300-400 | 1.2 | Primary CTA, big buttons |
| Button | 17px (1.06rem) | 400 | 1.0 | Standard button text |
| Link | 14px (0.88rem) | 400 | 1.43 | Inline links, "Learn more" |
| Caption | 14px (0.88rem) | 400 | 1.29 | Metadata, descriptions |
| Micro | 12px (0.75rem) | 400-600 | 1.33 | Fine print, footnotes |

### 4.3 Letter Spacing (Tracking)

| Context | Tracking | Note |
|---------|----------|------|
| Display Headlines (56px) | -0.28px | Machined feel, tight |
| Headline 1 (40px) | normal | Balanced |
| Body (17px) | -0.374px | Efficient, refined |
| Caption (14px) | -0.224px | Compact |
| Micro (12px) | -0.12px | Fine precision |
| Uppercase labels | 0.5-2px | Letterspacing adds hierarchy |

---

## 5. Component Library

### 5.1 Buttons

#### Primary CTA Button
```tsx
// Admin style
<button className="btn-primary">
  background: #3B82F6
  color: #ffffff
  padding: 14px 32px
  border-radius: 14px
  font-size: 15px
  font-weight: 700
  transition: all 0.2s
  
  &:hover { background: #2563eb; box-shadow: 0 4px 12px rgba(59,130,246,0.3) }
  &:active { transform: scale(0.98) }
  &:focus { outline: 3px solid rgba(59,130,246,0.1) }
</button>

// Apple style (Pill CTA)
<button className="btn-pill-primary">
  background: linear-gradient(135deg, #3B82F6, #5870D5)
  color: #ffffff
  padding: 12px 28px
  border-radius: 980px /* Full pill */
  font-size: 14px
  transition: all 0.3s
  
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(59,130,246,0.25) }
</button>

// Liquid Glass style (Gradient + Blur)
<button className="btn-glass-primary">
  background: linear-gradient(135deg, #0053cc, #779dff)
  backdrop-filter: blur(12px)
  color: #ffffff
  padding: 12px 24px
  border-radius: 2rem
  
  &:hover { box-shadow: 0 8px 32px rgba(0,83,204,0.3) }
</button>
```

#### Outline / Secondary Button
```tsx
<button className="btn-outline">
  background: #ffffff
  color: #3B82F6
  border: 1px solid #e5e7eb
  padding: 8px 18px
  border-radius: 10px
  font-size: 13px
  font-weight: 600
  
  &:hover { background: #eff6ff; border-color: #3B82F6 }
</button>
```

#### Text / Ghost Button
```tsx
<button className="btn-text">
  background: transparent
  border: none
  color: #6b7280
  font-size: 13px
  font-weight: 500
  cursor: pointer
  
  &:hover { color: #3B82F6 }
</button>
```

#### Status Badge
```tsx
<span className="badge badge--success">
  background: #dcfce7
  color: #16a34a
  padding: 3px 10px
  border-radius: 20px
  font-size: 11px
  font-weight: 600
  text-transform: uppercase
</span>

<span className="badge badge--warning">
  background: #fef3c7
  color: #d97706
</span>

<span className="badge badge--danger">
  background: #fee2e2
  color: #ef4444
</span>
```

### 5.2 Cards

#### Standard Card
```tsx
<div className="card">
  background: #ffffff
  border-radius: 16px
  border: 1px solid #e5e7eb
  padding: 22px
  transition: all 0.3s ease
  
  &:hover { 
    box-shadow: 0 4px 20px rgba(59,130,246,0.08)
    transform: translateY(-2px)
  }
</div>
```

#### Glass Card (Liquid Glass style)
```tsx
<div className="card-glass">
  background: rgba(245, 247, 249, 0.7) /* surface @ 70% opacity */
  backdrop-filter: blur(12px)
  border-radius: 2rem
  padding: 24px
  border: 1px solid rgba(171, 173, 175, 0.15) /* outline-variant @ 15% */
  
  &:hover {
    background: rgba(245, 247, 249, 0.85)
    box-shadow: 0 8px 24px rgba(0,83,204,0.06)
  }
</div>
```

#### Status Cards (Dashboard)
```tsx
<div className="status-card">
  background: #ffffff
  border: 1px solid #e5e7eb
  border-radius: 16px
  padding: 20px
  
  /* Dark variant with gradient */
  &.dark {
    background: linear-gradient(135deg, #3B82F6, #5870D5)
    color: #ffffff
    border: none
  }
</div>
```

### 5.3 Navigation

#### Sidebar (Desktop)
```tsx
< aside className="sidebar">
  width: 210px
  background: #ffffff
  border-right: 1px solid #e5e7eb
  padding: 24px 16px
  position: fixed
  left: 0
  top: 0
  height: 100vh
  z-index: 10
  flex-direction: column
</aside>

.sidebar-nav a {
  padding: 10px 14px
  border-radius: 10px
  color: #6b7280
  transition: all 0.2s
  
  &:hover {
    background: #eff6ff
    color: #3B82F6
  }
  
  &.active {
    background: #eff6ff
    color: #3B82F6
    font-weight: 600
  }
}
```

#### Topbar
```tsx
<nav className="topbar">
  display: flex
  align-items: center
  justify-content: space-between
  padding: 16px 32px
  background: #ffffff
  border-bottom: 1px solid #e5e7eb
  height: 64px
  position: sticky
  top: 0
  z-index: 9
</nav>

.search-box {
  background: #f9fafb
  padding: 10px 18px
  border-radius: 12px
  width: 300px
  border: 1px solid #e5e7eb
}

.topbar-icon {
  width: 36px
  height: 36px
  display: flex
  align-items: center
  justify-content: center
  border-radius: 10px
  cursor: pointer
  transition: all 0.2s
  
  &:hover {
    background: #eff6ff
    color: #3B82F6
  }
}
```

#### Mobile Sidebar (Hamburger)
```tsx
@media (max-width: 1023px) {
  .sidebar {
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 100vh
    background: rgba(0,0,0,0.5)
    z-index: 999
    display: none
    
    &.open {
      display: flex
    }
  }
  
  .sidebar-content {
    width: 70%
    background: #ffffff
    flex-direction: column
  }
}
```

### 5.4 Input Fields

#### Text Input
```tsx
<input className="input">
  background: #ffffff
  border: 1px solid #e5e7eb
  padding: 10px 14px
  border-radius: 10px
  font-size: 14px
  font-family: Inter, sans-serif
  transition: all 0.2s
  
  &:focus {
    outline: none
    border-color: #3B82F6
    box-shadow: 0 0 0 3px rgba(59,130,246,0.1)
  }
  
  &:disabled {
    background: #f9fafb
    color: #d1d5db
    cursor: not-allowed
  }
</input>
```

#### Glass Input (Liquid Glass)
```tsx
<input className="input-glass">
  background: rgba(255,255,255,0.8)
  backdrop-filter: blur(12px)
  border: 1px solid rgba(171,173,175,0.15)
  border-radius: 1.5rem
  
  &:focus {
    background: rgba(7,83,204,0.1)
    border: 1px solid rgba(171,173,175,0.3)
  }
</input>
```

### 5.5 Avatar

```tsx
<div className="avatar">
  width: 36px
  height: 36px
  border-radius: 10px
  background: linear-gradient(135deg, #3B82F6, #5870D5)
  display: flex
  align-items: center
  justify-content: center
  color: #ffffff
  font-weight: 600
  font-size: 14px
</div>
```

---

## 6. Layout Patterns

### 6.1 App Shell / Dashboard

```tsx
<div className="layout">
  /* Sidebar */
  <aside className="sidebar">
    Brand Section (24px top padding)
    Navigation Items
    Bottom Actions (Logout, Settings)
  </aside>

  /* Main Content Area */
  <main className="main-content">
    /* Topbar */
    <nav className="topbar">
      Search Box (Left)
      Actions (Right: notifications, profile, settings)
    </nav>

    /* Page Content */
    <div className="page-content">
      Page Title + Subtitle
      Grid/Cards/Content
    </div>
  </main>
</div>

/* Desktop (1024px+) */
.layout { display: flex }
.main-content { margin-left: 210px }

/* Tablet (768px - 1023px) */
@media (max-width: 1023px) {
  .layout { flex-direction: column }
  .sidebar { position: absolute; left: -210px; transition: left 0.3s }
  .sidebar.open { left: 0 }
  .main-content { margin-left: 0; width: 100% }
}

/* Mobile (< 768px) */
@media (max-width: 767px) {
  .topbar { padding: 12px 16px }
  .page-content { padding: 16px }
}
```

### 6.2 Grid Layouts

#### 3-Column Grid (Dashboard Cards)
```tsx
<div className="grid-3-col">
  display: grid
  grid-template-columns: repeat(3, 1fr)
  gap: 16px

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr)
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr
  }
}
```

#### 2-Column Detail Layout
```tsx
<div className="grid-detail">
  display: grid
  grid-template-columns: 1fr 300px
  gap: 24px

  @media (max-width: 1023px) {
    grid-template-columns: 1fr
  }
}
```

### 6.3 Section Patterns

#### Hero Section
```tsx
<section className="hero">
  background: #000000 /* Black or #f5f5f7 for Apple */
  padding: 80px 32px
  text-align: center
  
  h1 { font-size: 56px; font-weight: 600; line-height: 1.07 }
  p { font-size: 17px; color: rgba(255,255,255,0.7); line-height: 1.47 }
  
  .cta-group {
    margin-top: 40px
    display: flex
    justify-content: center
    gap: 16px
    flex-wrap: wrap
  }
  
  @media (max-width: 767px) {
    padding: 48px 16px
    h1 { font-size: clamp(28px, 7vw, 56px) }
  }
</section>
```

#### Feature Section
```tsx
<section className="feature-section">
  padding: 60px 32px
  background: #f9fafb
  
  .feature-grid {
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 32px
    max-width: 1200px
    margin: 0 auto
    
    @media (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr)
      gap: 24px
    }
    
    @media (max-width: 767px) {
      grid-template-columns: 1fr
      gap: 16px
    }
  }
</section>
```

---

## 7. Interaction States & Animations

### 7.1 Button States

| State | Description | Implementation |
|-------|-------------|-----------------|
| **Default** | Normal button appearance | Base styling |
| **Hover** | Background brightens, subtle lift | `transform: translateY(-1px)`, shadow increase |
| **Active/Pressed** | Visual feedback on click | `transform: scale(0.98)` or background shift |
| **Focus** | Keyboard focus visible | `outline: 3px solid rgba(..., 0.1)` |
| **Disabled** | Button unavailable | `opacity: 0.5`, `cursor: not-allowed` |

### 7.2 Transitions

```css
--transition-fast: all 0.2s ease;    /* Quick interactions */
--transition-base: all 0.3s ease;    /* Standard transitions */
--transition-slow: all 0.5s ease;    /* Deliberate animations */

/* Common patterns */
.btn { transition: var(--transition-fast) }
.card:hover { transition: var(--transition-base) }
.sidebar.open { transition: left 0.3s ease-out }
```

### 7.3 Focus Rings (Accessibility)

```css
/* Standard focus ring (Admin) */
box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);

/* Apple-style focus ring */
box-shadow: 2px solid var(--sk-focus-color, #0071e3);

/* Liquid Glass focus ring */
box-shadow: 0 0 0 3px rgba(0, 83, 204, 0.15);
```

---

## 8. Accessibility & Best Practices

### 8.1 Color Contrast
- Primary text (#1f2937) on white: 18:1 ✓ (WCAG AAA)
- Secondary text (#6b7280) on white: 6:1 ✓ (WCAG AA)
- Tertiary text (#9ca3af) on white: 3.8:1 (Caution on light backgrounds)
- Ensure buttons have sufficient contrast

### 8.2 Focus States
- All interactive elements must have visible focus rings
- Use `outline: 3px solid rgba(59,130,246,0.1)` at minimum
- Do NOT remove outlines without providing alternative focus indicator

### 8.3 Responsive Text
- Use `clamp()` for fluid typography scaling
- Never go below 16px for body text on mobile (accessibility best practice)
- Ensure line-height ≥ 1.5 for body text

### 8.4 Mobile Touch Targets
- Minimum touch target: 44px × 44px
- Buttons, links, icons should meet this size
- Add padding around small interactive elements

### 8.5 ARIA & Semantic HTML
- Use semantic HTML5: `<button>`, `<nav>`, `<section>`, `<article>`
- Add ARIA labels when UI intent is unclear
- Ensure form inputs have associated `<label>` elements
- Use `role` attributes only when semantic HTML is insufficient

---

## 9. Implementation Checklist

When designing/building a NEW PAGE:

### Pre-Design
- [ ] **Determine design system:** Apple / Admin / Liquid Glass / Hybrid?
- [ ] **Identify key content:** Hero, features, CTA, footer?
- [ ] **Define responsive breakpoints:** Desktop, Tablet, Mobile layouts
- [ ] **Choose color palette** from provided tokens

### Design
- [ ] **Wireframe on mobile first** (constraint-driven design)
- [ ] **Apply spacing system** (multiples of 8px)
- [ ] **Use existing components** (buttons, cards, badges)
- [ ] **Ensure text hierarchy** (clear heading/body distinction)
- [ ] **Plan animations** (hover states, transitions)
- [ ] **Test color contrast** (AA minimum for body text)

### HTML/CSS/React
- [ ] **Use CSS tokens** (--color-primary, --transition-base, etc.)
- [ ] **Implement mobile-first mobile media queries**
- [ ] **Add focus rings** to all interactive elements
- [ ] **Test keyboard navigation** (Tab through all elements)
- [ ] **Verify touch targets** (min 44px on mobile)
- [ ] **Test at multiple viewport sizes:** 375px, 768px, 1024px, 1440px

### Responsive Verification
- [ ] **Mobile (375px):** Single column, stacked elements, readable text
- [ ] **Tablet (768px):** 2-3 column layouts, optimized grid
- [ ] **Desktop (1024px+):** Full features, sidebar visible, rich grid
- [ ] **Print (if applicable):** Hide nav, adjust colors for print

### Accessibility & QA
- [ ] Lighthouse score ≥ 90
- [ ] WAVE accessibility audit (no errors)
- [ ] Keyboard navigation works throughout
- [ ] Screen reader friendly (semantic HTML)
- [ ] No console errors/warnings
- [ ] Tested on real mobile devices

---

## 10. Example: Building a Responsive Feature Page

### Step 1: Mobile-First Wireframe (375px)
```
┌─────────────────────┐
│      HEADER         │
├─────────────────────┤
│  ┌───────────────┐  │
│  │  Hero Section │  │
│  │  (Full Width) │  │
│  └───────────────┘  │
├─────────────────────┤
│  Feature 1          │
│  (Single Column)    │
├─────────────────────┤
│  Feature 2          │
│  (Single Column)    │
├─────────────────────┤
│  CTA Section        │
├─────────────────────┤
│      FOOTER         │
└─────────────────────┘
```

### Step 2: Tablet Layout (768px)
```
┌────────────────────────────────┐
│          HEADER                │
├────────────────────────────────┤
│      Hero Section              │
│      (Full Width)              │
├────────────────────────────────┤
│ ┌─────────────┐ ┌─────────────┐│
│ │ Feature 1   │ │ Feature 2   ││
│ └─────────────┘ └─────────────┘│
├────────────────────────────────┤
│ ┌─────────────┐ ┌─────────────┐│
│ │ Feature 3   │ │ CTA Section ││
│ └─────────────┘ └─────────────┘│
├────────────────────────────────┤
│      FOOTER                    │
└────────────────────────────────┘
```

### Step 3: Desktop Layout (1024px+)
```
┌──────────────────────────────────────┐
│            HEADER                    │
├──────────────────────────────────────┤
│       Hero Section (Full Width)      │
├──────────────────────────────────────┤
│ ┌──────────┐ ┌──────────┐┌──────────┐│
│ │Feature 1 │ │Feature 2 ││Feature 3 ││
│ └──────────┘ └──────────┘└──────────┘│
├──────────────────────────────────────┤
│ ┌──────────┐ ┌──────────┐┌──────────┐│
│ │Feature 4 │ │Feature 5 ││Feature 6 ││
│ └──────────┘ └──────────┘└──────────┘│
├──────────────────────────────────────┤
│  CTA Section (Centered)              │
├──────────────────────────────────────┤
│            FOOTER                    │
└──────────────────────────────────────┘
```

### Step 4: Responsive CSS Structure

```jsx
// features.tsx
export default function FeaturesPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Discover Amazing Features</h1>
        <p>Description text here</p>
        <div className="cta-group">
          <button className="btn-primary">Get Started</button>
          <button className="btn-outline">Learn More</button>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="features-section">
        <div className="features-grid">
          <article className="feature-card">
            {/* Feature 1 */}
          </article>
          <article className="feature-card">
            {/* Feature 2 */}
          </article>
          <article className="feature-card">
            {/* Feature 3 */}
          </article>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Ready to transform your learning?</h2>
        <button className="btn-primary">Start Free Trial</button>
      </section>
    </>
  );
}
```

```css
/* features.css */

/* HERO SECTION */
.hero {
  background: linear-gradient(135deg, #3B82F6, #5870D5);
  color: #ffffff;
  padding: clamp(48px, 10vw, 80px) clamp(16px, 5vw, 32px);
  text-align: center;
}

.hero h1 {
  font-family: Manrope, sans-serif;
  font-size: clamp(28px, 7vw, 56px);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 16px;
}

.hero p {
  font-size: clamp(15px, 2vw, 17px);
  line-height: 1.6;
  margin-bottom: 32px;
  opacity: 0.9;
}

.cta-group {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* FEATURES SECTION */
.features-section {
  padding: clamp(40px, 8vw, 60px) clamp(16px, 5vw, 32px);
  background: #f9fafb;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  padding: 24px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(59, 130, 246, 0.1);
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
}

.feature-card p {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
}

/* CTA SECTION */
.cta-section {
  padding: clamp(40px, 8vw, 60px) clamp(16px, 5vw, 32px);
  background: #ffffff;
  text-align: center;
}

.cta-section h2 {
  font-size: clamp(24px, 5vw, 40px);
  font-weight: 700;
  margin-bottom: 24px;
}

/* RESPONSIVE BREAKPOINTS */

/* Tablet (768px - 1023px) */
@media (max-width: 1023px) {
  .hero {
    padding: clamp(40px, 8vw, 60px) clamp(16px, 4vw, 24px);
  }

  .hero h1 {
    font-size: clamp(24px, 6vw, 40px);
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .feature-card {
    padding: 20px;
  }
}

/* Mobile (< 768px) */
@media (max-width: 767px) {
  .hero {
    padding: 32px 16px;
  }

  .hero h1 {
    font-size: clamp(20px, 5vw, 28px);
    margin-bottom: 12px;
  }

  .hero p {
    font-size: 14px;
    margin-bottom: 24px;
  }

  .cta-group {
    gap: 12px;
  }

  .cta-group button {
    flex: 1;
    min-width: 120px;
  }

  .features-section {
    padding: 24px 16px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .feature-card {
    padding: 16px;
  }

  .feature-card h3 {
    font-size: 16px;
  }

  .feature-card p {
    font-size: 13px;
  }

  .cta-section {
    padding: 24px 16px;
  }

  .cta-section h2 {
    font-size: clamp(18px, 4vw, 24px);
    margin-bottom: 16px;
  }
}
```

---

## 11. Design System Quick Reference

### Color Tokens Quick Copy
```css
--color-primary: #3B82F6;
--color-primary-hover: #2563eb;
--color-bg-page: #f9fafb;
--color-bg-card: #ffffff;
--color-text-primary: #1f2937;
--color-text-secondary: #6b7280;
--color-text-tertiary: #9ca3af;
--color-border: #e5e7eb;
--color-success: #16a34a;
--color-success-bg: #dcfce7;
--color-warning: #d97706;
--color-warning-bg: #fef3c7;
--color-danger: #ef4444;
--color-danger-bg: #fee2e2;
```

### Responsive Breakpoints Quick Copy
```css
/* Tablet start */
@media (max-width: 1023px) { }

/* Mobile start */
@media (max-width: 767px) { }
```

### Commonly Used margin/padding values
- Micro: 4px, 8px
- Small: 12px, 16px
- Medium: 20px, 24px
- Large: 32px, 40px
- XLarge: 60px, 80px

---

## 12. Resources & References

- **Admin Design Source:** `template/ADMIN_DESIGN_GUIDE.md`
- **Apple-Inspired System:** `docs/DESIGN.md`
- **Liquid Glass System:** `template/DESIGN.md`
- **Active CSS Files:** `frontend/main/public/css/*.css`
- **Component Examples:** `frontend/main/src/components/`
- **Tailwind Config:** `frontend/main/src/app/globals.css`

---

**Version:** 1.0  
**Last Updated:** May 4, 2026  
**Maintained By:** Design & Development Team

