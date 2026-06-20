# Phoenixx Edu Factory — Website

Modern, interactive marketing site for **Phoenixx Edu Factory**, a corporate training
institute (soft skills, life skills, NLP workshops, hospitality, BPO, institution programs).

Built with **React + Vite + TypeScript + Tailwind CSS + shadcn-style components**, an embedded
**Spline 3D** hero, **Sora** typography, an **ember/phoenix** accent, and a **dark/light theme** toggle.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Project structure

```
src/
  App.tsx                  # page composition (section order)
  main.tsx                 # ThemeProvider + root render
  index.css                # design tokens (light + dark) + utilities
  lib/utils.ts             # cn() class helper
  components/
    theme-provider.tsx     # dark/light context, persists to localStorage
    ThemeToggle.tsx        # sun/moon toggle button
    Navbar.tsx             # floating nav, scroll-aware bg, mobile menu
    Logo.tsx               # phoenix mark + wordmark
    HeroSection.tsx        # full-screen hero, content bottom-left
    SplineBackground.tsx   # 3D scene + branded fallback (see below)
    AnimatedBackground.tsx # animated ember gradient (Spline fallback)
    Reveal.tsx             # scroll-reveal wrapper (IntersectionObserver)
    Services.tsx           # 6 program cards
    NLPLevels.tsx          # interactive Basic/Practitioner/Master explorer
    About.tsx              # vision/mission/values + stats
    Audience.tsx           # students / professionals / institutions / communities
    Testimonials.tsx
    Contact.tsx            # validated contact form (simulated submit)
    Footer.tsx
    ui/button.tsx          # CVA button w/ navCta, hero, heroOutline variants
```

## Customizing

### Swap the 3D hero scene
The hero uses the scene from the original spec as a **placeholder**. To use your own:
1. Build/export a scene at https://spline.design and copy its `scene.splinecode` URL.
2. Edit `SCENE_URL` in `src/components/SplineBackground.tsx` — that's the only change needed.

If Spline fails to load or is blocked, the branded animated background (`AnimatedBackground.tsx`)
shows automatically.

### Colors / theme
All colors are HSL CSS variables in `src/index.css` under `:root` (light) and `.dark` (dark).
Change `--primary` / `--accent` to re-theme the whole site. Tailwind maps them via
`hsl(var(--token))` in `tailwind.config.js`.

### Wire up the contact form
`src/components/Contact.tsx` currently simulates submission. Replace the `setTimeout` block in
`handleSubmit` with a real call — e.g. POST to [Formspree](https://formspree.io) or your own API,
or `mailto:` to `hr@phoenixxedu.com`.

## Content source
Programs and contact details are based on https://phoenixxedu.com. Testimonials are realistic
placeholders — replace with real ones before going live.
