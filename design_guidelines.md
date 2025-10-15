# ROFIC Marketing Site - Design Guidelines

## Design Approach

**Selected Approach:** Professional Design System (Government-Grade)
- Drawing from **Fluent Design** principles for enterprise credibility with **Stripe-inspired** restraint
- Rationale: Government and institutional audience requires trust signals through clarity, not creative flair
- Key Principle: *"Professional Authority Through Simplicity"*

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Navy Primary: `15 56% 12%` (deep navy #0F1C2E) - headers, primary buttons, key text
- Slate: `215 25% 27%` (slate gray #334155) - body text, secondary elements
- White: `0 0% 100%` - backgrounds, contrast text

**Accent Colors:**
- Gold Accent: `43 59% 53%` (subtle gold #D4AF37) - sparingly for credibility indicators, badges, key highlights
- Light variants: `215 25% 95%` for cards/section backgrounds
- Borders: `215 20% 85%` for subtle dividers

**Dark Mode:** Not required for government-focused B2B site

### B. Typography

**Font Stack:** Inter (primary) with system fallback
- Headlines (H1): 3.5rem (56px), font-weight 700, tight leading (1.1), navy
- H2 Sections: 2.5rem (40px), font-weight 600, leading 1.2
- H3 Cards: 1.5rem (24px), font-weight 600
- Body: 1rem (16px), font-weight 400, slate, leading 1.6
- Small/Meta: 0.875rem (14px), font-weight 500

### C. Layout System

**Spacing Primitives:** Tailwind units of **4, 6, 8, 12, 16, 20, 24**
- Section padding: `py-20 md:py-24` for desktop, `py-12` for mobile
- Card spacing: `p-6` to `p-8`
- Container: `max-w-7xl mx-auto px-6`
- Grid gaps: `gap-6` to `gap-8`

**Grid Strategy:**
- Services/Features: 3-column grid on desktop (`lg:grid-cols-3`), 2-col tablet, 1-col mobile
- Partner categories: 4-column grid (`lg:grid-cols-4`)
- Content sections: Single column with `max-w-4xl` for readability

### D. Component Library

**Navigation:**
- Sticky header with white background, subtle shadow on scroll
- Logo left (navy), nav center, "Partner With Us" button right (navy bg, white text)
- Mobile: hamburger menu with slide-in drawer

**Cards (shadcn/ui):**
- White background with `border border-slate-200`
- Rounded corners `rounded-lg`
- Hover: subtle lift `hover:shadow-lg transition-shadow`
- Icon + Title + Description pattern for service cards
- Padding: `p-6`

**Buttons:**
- Primary: Navy background, white text, `px-6 py-3`, medium font-weight
- Secondary: Outline navy, white/transparent bg, `px-6 py-3`
- When on images: backdrop-blur-sm with semi-transparent white bg

**Forms:**
- Clean inputs with `border border-slate-300`, `rounded-md`, `px-4 py-2`
- Focus: navy ring `focus:ring-2 focus:ring-navy`
- Labels: slate, font-medium, `mb-2`

**Badges/Indicators:**
- Gold background `bg-gold/10`, gold text, `px-3 py-1`, `rounded-full`, small text

**FAQ Accordion:**
- Border-bottom dividers, navy headings, chevron indicators
- Smooth expand/collapse animations

### E. Visual Strategy

**Hero Section (Home):**
- 80vh height with Northern Ontario landscape background (forest/roadway scene)
- Dark gradient overlay (navy to transparent) for text readability
- Centered content with max-width constraint
- Primary + Secondary button stack
- Text: white with strong contrast

**Section Patterns:**
- Alternating backgrounds: white → light slate → white
- Consistent section headers: centered, H2, with optional subtitle
- Credibility elements: gold accent badges, trust indicators

**Imagery Requirements:**
- Hero: Professional landscape - northern Ontario roads/infrastructure (1920x1080 minimum)
- Services page: Meeting room collaboration shots as section backgrounds
- Partner Network: Placeholder partner logos in organized grid
- No heavy construction machinery - keep professional/consultative

**Icons:**
- Font Awesome (CDN) for service icons - using `fa-solid` variants
- Color: slate initially, navy on hover
- Size: `text-2xl` to `text-3xl` for feature cards

### F. Page-Specific Guidelines

**Home:** Hero (landscape bg) → Role Cards (3-col grid) → Credibility strip (gold badges) → CTA section

**Services:** Icon grid cards (3-col) → Clear disclaimer banner → Secondary CTA

**Partner Network:** Category grid (4-col) → Vetting process timeline → Contact prompt

**Why ROFIC:** Proof points list (2-col) → FAQ accordion → Trust signals

**Insights:** Blog grid (3-col cards with thumbnails) → Pagination

**Contact:** 2-column split (form left, contact info + map placeholder right)

**Footer:** 
- 4-column grid: About, Quick Links, Contact, Disclaimer
- Slate background, white text
- Small disclaimer text about coordination vs. construction

**Animations:** Minimal - subtle hover states, smooth scrolls, fade-ins only

---

**Key Differentiators:**
- Professional restraint over creative experimentation
- Gold accents used sparingly for credibility, not decoration  
- Landscape imagery establishes regional connection without construction imagery
- Clear visual hierarchy emphasizes coordination/advisory role
- Government-friendly aesthetic: trustworthy, accessible, non-corporate