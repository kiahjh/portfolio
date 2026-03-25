# Portfolio Website Spec — kiahjh.com

## Overview

A personal portfolio site for **Miciah "Kiah" Henderson** — a 20-year-old design engineer, systems programmer, and builder who works across the full stack (React, SwiftUI, Rust) and cares deeply about craft, people, and elegant code.

The site is targeted at companies like **Supabase, Zed, Resend, Raycast** — small, craft-obsessed teams building developer tools. The site itself should demonstrate the taste and skill that a resume can't.

**The site IS the resume.** No PDF download, no formal CV. The work speaks.

---

## Design Philosophy

**Light theme. Warm. Minimal. Crafted.**

This isn't a dark-mode dev portfolio. It's bright, warm, and confident — like talking to Kiah in person. The design is restrained, but every detail is intentional. It rewards curiosity (hover to explore) and feels personal, not corporate.

### Color Palette

- **Background:** Warm off-white / cream (not pure white)
- **Text:** Deep warm gray or warm black (not pure #000)
- **Accent:** Terracotta / burnt orange / rust tones — earthy, grounded, distinctive
- **Secondary accents:** Muted clay, sand, sienna for tags and UI elements
- **Links:** Terracotta accent, with hover states

### Typography

- **Body / headings:** Humanist sans-serif — **Satoshi** or **General Sans** (warm, modern, not cold)
- **Monospace accent (optional):** For tech tags or small labels — something like JetBrains Mono or Berkeley Mono
- **Type scale:** Generous, readable. Big headings, comfortable body text.

### Motion

- **Subtle only.** Fade-ins on scroll, smooth hover transitions, buttery tooltip appearances.
- No scroll-jacking, no flashy entrance animations, no parallax.
- The hover tooltips should feel *delightful* — fast appearance with a gentle ease, maybe a slight scale-up.

---

## Layout

### Structure: Narrow Left Column + Breakout Right

The entire page content lives in a **narrow column aligned to the left side of the page** (not centered). This creates a strong editorial feel — like a well-typeset document or a letter.

On desktop, **hover tooltips break out to the right** of the column, filling the otherwise empty space. This creates a beautiful tension: disciplined content on the left, rich visual previews on the right.

- Column width: roughly 500–600px
- Column left margin: ~15–20% of viewport (not pinned to the edge)
- Tooltips appear to the right of the hovered link, floating in the open space
- No fixed navigation bar — just scroll

### Mobile

Must be excellent. The narrow column naturally adapts well to mobile (it's already narrow). Tooltips become **tap-to-expand cards** that open inline or as a modal/sheet. Every piece of content must be accessible on mobile.

---

## Page Flow

**Single page, no hard section boundaries.** The content flows as one continuous narrative — part about, part work, part personality. It blends together naturally like a conversation.

### 1. Hero (top of page)

**Minimal but crafted.**

- **Name:** "Miciah Henderson" — large, beautiful typography
- **Handle:** @kiahjh — smaller, secondary
- **Photo:** Placeholder for now (will add later). Positioned naturally within or near the column.
- **One subtle, crafted detail** — the "unexpected thing" that shows taste. Options to explore during implementation:
  - A subtle generative/organic shape that slowly evolves (ties to math background)
  - A cursor-reactive element — something small that responds to mouse position
  - Beautiful letter-spacing or weight animation on the name
  - A small, perfectly executed micro-interaction
  - *Pick the one that feels right during implementation — it should feel effortless, not showy.*
- **No tagline or job title.** The content below will make clear who Kiah is.

### 2. The Narrative (main content)

Flowing prose — warm, humble, friendly, humorous, approachable. **Kiah writes this himself.** The implementation should provide placeholder text with structural guidance and examples for tone/length, but the final copy is his.

The narrative weaves together:

#### Who Kiah Is
- 20 years old, based in Holland, MI
- B.S. in Applied Mathematics (minor in Physics) from University of Akron — graduated at 18
- Been programming since discovering it on Khan Academy at 13
- Christian, values integrity, relationships, people
- Musician: piano, banjo, composition, improvisation — into bluegrass, Scandinavian/Nordic traditional, Celtic, jazz, choral, renaissance polyphony
- Outdoors: trail marathons, 84-mile backpacking trip in 4 nights, multi-day canoe/camp trips, led trips at summer canoe camp, group rappelling trips down 120ft cliffs

#### What Kiah Builds (inline project links with hover tooltips)

Projects appear as **colored terracotta links within the prose**. Hovering a link triggers a **tooltip/card** that breaks out to the right with:

- Screenshot or image
- Short description (1–2 sentences)
- Tech stack tags (e.g. `Rust` `SwiftUI` `React` `Supabase`)
- Link to project (if applicable)

On mobile: tapping a link opens an inline expanded card or bottom sheet with the same content.

**Featured projects** (more prominent in the narrative):

| Project | What | Tech | Link |
|---------|------|------|------|
| **Gertrude** | Parental controls for Apple platforms. Lead design engineer for 3 years on a team of 2–3. Owned all frontends (web, macOS, iOS). | React, SwiftUI, some backend | [gertrude.app](https://gertrude.app) |
| **Resolve** | Published native iOS app. SwiftUI + Rust on client, pure Rust backend. | SwiftUI, Rust | App Store link |
| **Replist** | Native iOS app, nearly published. SwiftUI frontend, Supabase backend. | SwiftUI, Supabase | — |
| **Rejoice** | Custom Rust web framework. File-based routing, type-safe templates, islands. Hobby/personal-use project. | Rust | [rejoice.kiahjh.com](https://rejoice.kiahjh.com) |

**Smaller mentions** (briefer in the narrative, still get hover tooltips):

| Project | What | Tech |
|---------|------|------|
| **Lovely** | Statically-typed systems programming language compiled to x64 NASM. Built from scratch on YouTube livestreams. | Rust |
| **OS streams** | Experimented with building an operating system, streamed on YouTube. | Rust |
| **next-bg-image** | Open source Next.js utility for optimized background images. Used in production at Gertrude. No longer maintained. | Next.js |
| **3D Terrain Generation** | Learning project — procedural terrain generation in OCaml with RayLib. | OCaml, RayLib |
| **Type definition language** | Custom language that generated types in both Swift and Rust for sharing types between frontends and backends. | Rust, Swift |
| **Tree-sitter grammars** | Wrote grammars for toy languages. | Tree-sitter |
| **Side projects** | Always hacking — custom agent, modal text editor with LSP + agent integration, web freelance work, etc. | Various |

The YouTube streams / Lovely language should link to the YouTube VODs where relevant — these are good "see how I think and work" artifacts.

#### What Kiah Values
Woven throughout, not a separate section:
- Cares about craft — clean, elegant code
- Admires mathematical beauty, strong static typing, performance
- Wants to build things that are genuinely helpful for people
- Drawn to small, high-output teams building tools for developers

### 3. Contact (bottom)

Simple. Not a separate "section" with a big header — just the natural end of the page.

- Email address (linked)
- GitHub: [@kiahjh](https://github.com/kiahjh)
- X/Twitter: [@kiahjh](https://twitter.com/kiahjh)
- Subtle, warm sign-off

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | **Next.js** (App Router) |
| Styling | **Tailwind CSS v4** |
| Language | **TypeScript** |
| Fonts | Satoshi or General Sans (via Fontsource or self-hosted) + monospace accent |
| Animation | **Framer Motion** (for tooltips, fade-ins, any micro-interactions) |
| Deployment | **Vercel** |

### Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # The single page
│   └── globals.css         # Tailwind + custom styles
├── components/
│   ├── Hero.tsx            # Name, photo, crafted detail
│   ├── Narrative.tsx       # Main prose content
│   ├── ProjectTooltip.tsx  # The hover/tap tooltip component
│   ├── ProjectLink.tsx     # Inline colored link that triggers tooltip
│   ├── Contact.tsx         # Bottom contact section
│   └── CraftedDetail.tsx   # The hero's special visual element
├── data/
│   └── projects.ts         # Project data (titles, descriptions, tech, images, links)
├── public/
│   ├── images/             # Project screenshots, photo placeholder
│   └── fonts/              # Self-hosted fonts if needed
├── SPEC.md
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Implementation Notes

### Hover Tooltips — Key UX Details
- Appear on hover (desktop) / tap (mobile) on project links
- Positioned to the right of the link, floating in the empty space beside the column
- Fast appearance (~150ms) with subtle scale + opacity animation
- Should stay visible while the user mouses over the tooltip itself (not just the link)
- Dismiss on mouse leave (desktop) or tap elsewhere (mobile)
- On mobile: either an inline expansion or a bottom sheet — whichever feels better
- Only one tooltip visible at a time
- Should not cause layout shift in the main column

### Placeholder Content
- Provide well-structured placeholder text that guides Kiah on what to write
- Include tone examples: warm, humble, funny, approachable — not corporate, not tryhard
- Mark all placeholder text clearly (e.g. `{/* TODO: Kiah writes this */}`)
- Project data in `data/projects.ts` should be filled in with real info from this spec

### Photo Placeholder
- Use a simple, tasteful placeholder (warm gray rounded shape, maybe with a subtle icon)
- Make it trivial to swap in a real photo later

### Performance
- Static generation (no dynamic data)
- Self-host fonts (no layout shift from Google Fonts)
- Optimize images with Next.js Image component
- Keep JS bundle minimal — Framer Motion is the main dependency

### Accessibility
- Semantic HTML throughout
- Tooltips accessible via keyboard (focus triggers tooltip)
- Sufficient color contrast with the warm palette
- Proper alt text on images
- Reduced motion support (respect `prefers-reduced-motion`)

---

## What Success Looks Like

A hiring manager at Zed or Raycast opens kiahjh.com. They see a clean, warm, beautifully typeset page. They notice one small, perfect detail in the hero that makes them think "this person has taste." They start reading — it's natural, personable, a little funny. They hover over "Gertrude" and a rich card slides into view showing the app. They hover "Resolve" — another card. They realize this 20-year-old has shipped real software across Rust, Swift, and React. They see the math degree at 18, the 84-mile backpacking trip, the banjo. They think: "this person is interesting and builds real things." They click through to his GitHub or email him.

That's the goal.
