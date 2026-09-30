# Project Context & Memory Ledger: PROJECTION

This document serves as the persistent, single-source-of-truth memory bank for the **PROJECTION** codebase. When context is refreshed or a new session begins, consult this file to understand the architecture, strict design constraints, recent iterations, and current state.

---

## 1. Project Overview & Tech Stack

- **Framework**: Next.js 16.3.3 (Turbopack, App Router, React Server Components + Client Components)
- **Runtime / Language**: React 19.2.8, TypeScript 5
- **Styling**: Tailwind CSS v4 (native `@theme`, `@import "tailwindcss"`, `h-dvh` support)
- **Animation & 3D**: Framer Motion 13.1.1, custom CSS 3D matrix math (`perspective`, `rotateY`, `translateZ`)
- **Icons**: Lucide React 1.34.0
- **Deployment**: Netlify connected to GitHub repository `student261/projection` on branch `main`
  - Production URL: `https://eloquent-marigold-870244.netlify.app`
  - Education Industry URL: `https://eloquent-marigold-870244.netlify.app/industries/education`
  - Local Dev Server: `http://localhost:3000`

---

## 2. Immutable Design Principles & Constraints

Every modification must strictly adhere to the following user-enforced rules:

1. **Zero Cards, Zero Frames, Zero Boxes**:
   - Never wrap content blocks in card-like containers, bordered boxes, or heavy card outlines.
   - Use open architectural spreads: content flows freely with subtle divider rules (`border-black/10` or `border-neutral-200`), clear typographic hierarchy, and generous breathing room.
2. **Zero Forbidden Dashes**:
   - Absolutely no em dashes (\u2014) or en dashes (\u2013) anywhere in text, copy, comments, or UI.
   - Use only standard hyphens (-), colons (:), or rewrite sentences to flow naturally without dashes.
3. **Data Authenticity (No Fabrications)**:
   - Always derive copy, headings, and descriptions from the canonical data models located in `data/` (e.g. `data/industries/education.ts`).
   - Do not invent artificial feature bullet points, extra numbers, or placeholder text.
4. **Number Cleanliness**:
   - Avoid double-numbering (e.g. do not display `01` above a card and `01` in the title).
   - In Section 4 (Solutions), numbers have been removed entirely in favor of category tags (`SURFACE PROJECTION`, `SPATIAL VISUALS`, etc.).
5. **Color Standards**:
   - Section 3 eyebrow badge (`SOLUTIONS FOR EDUCATION`) must be pure white (`text-white` with `bg-white` bar), not blue or cyan.
   - Dark sections use high-contrast white text over deep dark backdrops (`#000000` or `#0f0f11`).
6. **Responsive Layouts**:
   - Zero horizontal overflow (`overflow-x-hidden` or container constraints; never use `w-screen` which induces scrollbar shifts on Windows).
   - Mobile: 360px - 430px (smooth horizontal touch scrolling for tabs, single-column stacks).
   - Tablet: 768px - 1023px (2-column grids, balanced touch targets).
   - Desktop / Laptop: 1024px - 1440px+ (centered navigation tabs, 4-column architectural solutions, 3-panel work showcases).

---

## 3. Education Industry Page Architecture (`app/industries/education/page.tsx`)

The education industry page represents a flagship presentation layout for school administrators and educators. It currently consists of 11 polished sections:

### Section 1: Hero (`Hero.tsx`)
- High-impact dynamic headline and background media showcasing interactive projection in active classrooms.
- Responsive CTA buttons (`Explore Solutions`, `Book a Demo`).

### Section 2: Stats Metric Bar
- High-level quantifiable outcomes (e.g. engagement uplift, room versatility metrics) set in clean typography.

### Section 3: The Challenge / Problem (`#the-problem`)
- Dark cinematic banner featuring background photo with edge-to-edge dark gradient overlay.
- Eyebrow badge: Pure white line + `SOLUTIONS FOR EDUCATION` in white font-mono text.
- Heading: `Creating More Interactive Learning Spaces`.
- 6 core challenges displayed in open architectural 2-column rows (icons, titles, descriptions, and photographic evidence).

### Section 4: Solutions for Your Space (`#solutions`)
- Title: `Interactive Solutions Built for Learning`.
- 4 open architectural columns without card borders or enclosing boxes:
  1. `SURFACE PROJECTION`: Interactive Projection
  2. `SPATIAL VISUALS`: Immersive Experiences
  3. `MOTION ENGAGEMENT`: Interactive Engagement
  4. `LARGE FORMAT DISPLAY`: LED & 3D Display Solutions
- Structure per column:
  - Top category tag with subtle bottom divider line (`border-b border-black/15`).
  - Numbers (`01`, `02`, `03`, `04`) are removed.
  - Unframed 16:10 photograph with smooth hover zoom.
  - Icon + Title (`h3`).
  - Description paragraph from `data/industries/education.ts`.
  - Feature bullet points (`features` array).
  - Bottom CTA link with right arrow.

### Section 5: Related Use Case Banner
- Full-width dark transition banner (`SEE IT IN CONTEXT: Explore the Interactive Learning Use Case`).
- Direct link to `/use-cases/interactive-learning` with rounded white pill CTA button.

### Section 6: Active Learning Vision
- Full-bleed photographic showcase with dark gradient and inspirational typography:
  - *"Learning works better when students take part in it, not just watch it."*

### Section 7: Ways to Bring Interactive Learning Into Your School
- Dynamic 3D curved carousel component (`components/Curved3DCarousel.tsx`).
- 5 formats from `data.experiences.items`:
  1. Interactive Classroom
  2. STEM Learning Space
  3. Immersive Learning Room
  4. Interactive Library Corner
  5. Activity Zone

### Section 8: What It Enables / Capabilities Studio
- Title: `More Ways to Support Interactive Learning`.
- Top divider line removed between header and tabs.
- Interactive Capability Studio (`app/industries/education/CapabilitiesStudio.tsx`):
  - 6 topic tabs: `01 Active Participation`, `02 Group Learning`, `03 Visual Learning`, `04 Flexible Content`, `05 Multi-Space Use`, `06 Reusable Setup`.
  - Tabs are centered across desktop screens (`lg:min-w-full lg:justify-center`) and horizontally scrollable on mobile without clipping.
  - Left panel: High-precision SVG schematic architectural blueprints (motion sensors, projection cones, ripple zones, optical fields).
  - Right panel: Topic details, icon, title, body description, and Next/Prev navigation buttons.

### Section 9: Featured Work Spread
- Title: `OUR WORK: See What's Possible`.
- 3-panel cinematic exhibition layout:
  1. Surface Projection (`education_classroom_floor_projection.webp`)
  2. STEM Innovation (`education_stem_discovery_lab.webp`)
  3. Motion Zone (`education_motion_zone.webp`)

### Section 10: Frequently Asked Questions
- Accordion component (`FAQAccordion.tsx`) pulling authentic Q&A items from `data.faqs.items`.
- Touch-friendly expand/collapse controls with zero card boxes.

### Section 11: Final Call to Action
- Full-bleed immersive dark banner inviting educators to schedule consultations.
- Prominent button linking to `/contact`.

### Note on Removed Sections:
- The previous Section 9 (The Technology), Section 10 (How We Deliver), and Section 11 (Why Projection) were permanently removed per user request to maintain conciseness.

---

## 4. Key Component Technical Details

### `components/Curved3DCarousel.tsx`
- **Dynamic Slot Multiplier**: Calculates `multiplier = Math.max(3, Math.ceil(12 / itemCount))` to produce `totalSlots = itemCount * multiplier` (e.g. 5 items * 3 = 15 slots).
- **No Back-to-Back Duplicates**: Binds visible angle range to `maxAngle = 2.2 * angleStep` so at most 5 unique items are visible on screen at once, eliminating duplicate items showing on the same screen.
- **Physics**: Smooth drag and auto-scroll with 3D perspective depth, dynamic Y-axis rotation, Z-index layer ordering, and distance-based opacity fade.

### `app/industries/education/CapabilitiesStudio.tsx`
- **Centered Tabs**: Flex wrapper uses `min-w-max lg:min-w-full justify-start lg:justify-center` so buttons center cleanly on desktop viewports while scrolling smoothly from left edge on mobile devices.
- **Architectural Schematics**: Clean SVG blueprints with strict coordinate alignment, leader lines, labels, and zero messy overlapping paths.

### `components/SafeImage.tsx`
- Client wrapper around `next/image` providing automatic fallback handling and container sizing without hydration mismatches.

---

## 5. Media & Image Assets Reference

Authentic images generated and converted to high-efficiency WebP (with JPG fallbacks) located in `public/images/`:

| Filename | Dimensions | Usage |
| :--- | :--- | :--- |
| `education_classroom_floor_projection.webp` | 16:10 | Section 9 (Surface Projection) |
| `education_stem_discovery_lab.webp` | 16:10 | Section 9 (STEM Innovation) |
| `education_motion_zone.webp` | 16:10 | Section 9 (Motion Zone) |
| `education_vision_active_learning.webp` | 16:10 | Section 6 (Active Learning Vision Banner) |
| `education_interactive_floor.jpg` | 16:10 | Section 4 (Interactive Projection) |
| `education_exp_immersive_room.webp` | 16:10 | Section 4 (Immersive Experiences) |
| `education_strike_wall_activity.jpg` | 16:10 | Section 4 (Interactive Engagement) |
| `education_stem_led_display.jpg` | 16:10 | Section 4 (LED & 3D Displays) |

---

## 6. Netlify & Deployment Configuration

- **Configuration File**: `netlify.toml` in project root:
  ```toml
  [build]
    command = "npm run build"

  [[plugins]]
    package = "@netlify/plugin-nextjs"
  ```
- **Deployment Explanation**:
  - Always use the main production domain: `https://eloquent-marigold-870244.netlify.app/`
  - Avoid using hash-prefixed URLs (e.g. `6abbb40907c6...--eloquent-marigold-870244.netlify.app`), as these are temporary deploy preview IDs that expire and trigger 404 "Page not found" once a new commit is built.
  - The `@netlify/plugin-nextjs` handles Next.js App Router server components, static generation, and route rewriting automatically.

---

## 7. Quality Assurance & Verification Scripts

Always run these verification commands before delivering work:

1. **TypeScript Compilation**:
   ```powershell
   npx tsc --noEmit
   ```
   *Expected: Exit code 0 with zero errors.*

2. **Forbidden Dash Check**:
   ```powershell
   node -e "const fs = require('fs'); const files = ['app/industries/education/page.tsx', 'app/industries/education/CapabilitiesStudio.tsx']; files.forEach(f => { const content = fs.readFileSync(f, 'utf8'); const em = (content.match(/\u2014/g) || []).length; const en = (content.match(/\u2013/g) || []).length; console.log(f, 'em-dashes:', em, 'en-dashes:', en); });"
   ```
   *Expected: 0 em-dashes and 0 en-dashes.*

3. **Production Build Validation**:
   ```powershell
   npm run build
   ```
   *Expected: Prerenders all static routes without errors.*

4. **Visual Regression Verification**:
   Use Playwright script in `scratch/verify_changes.py` to capture high-resolution screenshots across 1440px desktop, 1024px laptop, 768px tablet, and 390px mobile viewports.
