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
   Use headless Edge CDP script in `scratch/take_immersive_screenshots.js` or `scratch/take_screenshot.js` to capture high-resolution screenshots across all key sections.

---

## 8. Core Solutions Architecture (`app/solutions/`)

The website's primary offerings are organized into 4 flagship solutions, streamlined in the global Navbar dropdown:
1. **Interactive Projection** (`/solutions/interactive-projection`, alias: `/solutions/interactive-spaces`)
2. **Immersive Environments** (`/solutions/immersive-environment`, alias: `/solutions/immersive-environments`)
3. **AI Experiences** (`/solutions/ai-experience`)
4. **Interactive Engagement** (`/solutions/solution-engagement`)

### Immutable Design Template: `components/MasterSolutionContent.tsx`
Every solution subpage uses the unified luxury design template:
- **Hero Section**: Full-height atmospheric background photography with dark gradient overlays, dual rounded pill CTAs (`Start Your Project`, `Book a Demo`), and H1 balanced into 2 clean lines.
- **Experience Possibilities (`#what-is-it`)**: Side-by-side layout with 4:3 high-definition video/preview player on one side and numbered architectural feature matrix on the other.
- **Surface Formats (`#surface-formats`)**: Sticky viewport carousel (`StickySurfaceFormats`) with alternating text and visual columns that smoothly transition as the user scrolls.
- **Capabilities (`#capabilities`)**: Architectural Orbital Interaction System diagram with tilted ellipse ring, central ripples, monospace badge (`INTERACTION` / `IMMERSION`), and 4-6 balanced quadrant nodes with leader lines.
- **How It Works (`#how-it-works`)**: Connected 4-step calibrated workflow with circular icon badges, dashed connection lines, directional arrow badges, and prominent bottom CTA.
- **Where It Fits (`#industries`)**: Full-bleed photographic background that dynamically crossfades when hovering or clicking any of the 6 industry cards on the right. Left column features strictly 2-line heading and direct exploration CTA.
- **The Experience (`#the-experience`)**: Light/black typography contrast (`Make the Room` / `Part of the Experience`), right-side decorative architectural arc and tag, and vertical organic Wavy S-Curve Spine with indicator dots and circular icon badges.
- **Related Projects (`#projects`)**: Live showcase with interactive sector selection tabs and large 16:10 project display with technical specifications badges.
- **Related Solutions (`#related-solutions`)**: 4 slanted-top ascending cards with hover elevation and clean footer navigation links.
- **FAQs (`#faqs`)**: Clean numbered accordion items (01 to 07) with +/- circular toggle badges.
- **Huge CTA**: Atmospheric background image, glow backdrop blur card, dual pill action buttons.

### Content Specification for Immersive Environments (`home.txt.txt`)
- **Route**: `/solutions/immersive-environment` & `/solutions/immersive-environments`
- **Hero H1**: `Rooms and Surfaces That Surround People With Visual Content` (broken into 2 balanced lines)
- **The Formats**: 6 formats (Immersive Rooms, 180 and 360 Degree Projection, Projection Mapping, Dome and Fulldome Projection, LED Tunnels, Large Format and 3D LED Displays).
- **Where It Fits**: 6 sectors (Museums & Exhibitions, Entertainment, Retail, Hospitality, Corporate & Events, Education).
- **Experience Possibilities**: 3 core abilities (Walk Into a Visual Story, See a Building Differently, Spend Longer in a Space).
- **How It Works**: 4 steps (Review the Room or Structure, Plan the Visual Layout, Build the Content, Install and Calibrate).
- **Capabilities**: 4 items (Multi Surface Projection, Projection Mapping, Dome and Curved Surface Projection, Large Format Display Integration).
- **Why It Matters / The Experience**: 3 items (Content Surrounds People, A Space Can Change Its Feel, Attention Moves Through the Space).
- **Related Solutions**: Interactive Projection, AI Experiences, Interactive Engagement, LED & 3D Displays.
- **FAQs**: 7 verbatim Q&As from `home.txt.txt`.
- **Final CTA**: `Build a Room People Want to Walk Into` / `Discuss Your Project`.

### Content Specification for AI Experiences (`home.txt.txt`)
- **Route**: `/solutions/ai-experiences` & `/solutions/ai-experience`
- **Hero H1**: `AI Avatars and AI Photo Experiences for Physical Spaces` (broken into 2 balanced lines)
- **Hero Subtitle**: `An AI avatar can greet, answer questions or host at a booth. An AI photo experience can turn a guest photo into something shareable in seconds.`
- **The Formats**: 2 formats (`AI Avatars`, `AI Photo Experiences`).
- **Where It Fits**: 5 sectors (`Corporate & Events`, `Retail`, `Museums & Exhibitions`, `Entertainment`, `Hospitality`).
- **Experience Possibilities**: 3 core abilities (`Ask a Question and Get an Answer`, `Get a Personalized Result`, `Interact Without Waiting in Line`).
- **How It Works**: 4 steps (`01. Define the Role`, `02. Set Up the Content and Responses`, `03. Install the Display or Booth`, `04. Test the Interaction`).
- **Capabilities**: 4 items (`AI Avatar Interaction`, `AI Generated Photo Content`, `Branded Visual Styling`, `Real-Time Response Engine`) with `INTELLIGENCE` badge.
- **Why It Matters / The Experience**: 3 items (`People Remember a Conversation`, `Guests Leave With Something to Share`, `One Setup Can Handle Many Visitors`).
- **Related Solutions**: Interactive Projection, Immersive Environments, Interactive Engagement, LED & 3D Displays.
- **FAQs**: 7 verbatim Q&As from `home.txt.txt`.
- **Final CTA**: `Give Your Event an AI Experience Worth Talking About` / `Discuss Your Project`.

### Content Specification for Interactive Engagement (`home.txt.txt`)
- **Route**: `/solutions/interactive-engagement` & `/solutions/solution-engagement`
- **Hero H1**: `Games and Activities That Get People Moving and Playing` (broken into 2 balanced lines)
- **Hero Subtitle**: `A floor or wall can host more than visuals. It can host a game people play together, a challenge they compete in, or a brand activity they take part in.`
- **The Formats**: 4 formats (`Motion Games`, `Brand Gamification`, `Group Challenges`, `Movement Based Activities`).
- **Where It Fits**: 5 sectors (`Retail`, `Education`, `Entertainment`, `Corporate & Events`, `Healthcare`).
- **Experience Possibilities**: 3 core abilities (`Play Instead of Watch`, `Compete or Collaborate`, `Take Part in a Brand Moment`).
- **How It Works**: 4 steps (`01. Define the Activity`, `02. Design the Game Content`, `03. Set Up Tracking`, `04. Test the Gameplay`).
- **Capabilities**: 4 items (`Motion Tracking for Gameplay`, `Multiplayer Setup`, `Custom Game Content`, `Real-Time Game Engine`) with `PARTICIPATION` badge.
- **Why It Matters / The Experience**: 3 items (`Participation Creates Memory`, `Games Bring Groups Together`, `A Brand Becomes an Activity`).
- **Related Solutions**: Interactive Projection, Immersive Environments, AI Experiences, LED & 3D Displays.
- **FAQs**: 7 verbatim Q&As from `home.txt.txt`.
- **Final CTA**: `Give People Something to Play, Not Just Watch` / `Discuss Your Project`.

### Strict Operational Rules
- **NEVER RUN `git push`** without explicit user permission.
- **NEVER ALTER THE DESIGN** or component layouts when populating new content.
- **ZERO EM DASHES (`-`) AND ZERO EN DASHES (`-`)**.
- **ZERO BULLET POINTS / POINTOUTS**.

