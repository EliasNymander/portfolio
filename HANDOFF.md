# Handoff: Elias Nymander Portfolio Site

## What this is

A personal portfolio site for Elias Nymander — an Information Systems MSc
student at the University of Vaasa (graduating **autumn 2026**) — targeting
junior AI/GenAI developer and AI consulting roles in Finland. Single-page,
fully bilingual (English/Finnish), styled after Brittany Chiang's v4
portfolio (dark, calm, two-column layout with a sticky sidebar).

**Repo**: `C:\6. Claude\Projects\Portfolio`
**GitHub**: `https://github.com/EliasNymander/portfolio` (remote `origin`,
branch `main`). Working tree is clean and pushed as of this handoff.
**Deploy**: Vercel, auto-deploys on push to `main`. Vercel Web Analytics and
Speed Insights are wired in (`src/main.jsx`).

## Tech stack

- Vite + React 19 (functional components, hooks) — no backend, fully static
- Tailwind CSS v4 (via `@tailwindcss/vite`, config lives in `src/index.css`
  under `@theme`, not a `tailwind.config.js`)
- No component libraries, no icon libraries (hand-rolled inline SVGs in
  `src/components/icons.jsx`)
- `npm.cmd` must be used instead of `npm` in this PowerShell environment

## Architecture — the rule that matters most

**UI copy lives in `src/i18n.js`** (one `en` object, one `fi` object, same
shape). **Structured/repeatable content lives in `src/data/*.js`**
(experience, education, projects, skills), with bilingual fields inline as
`{ en: '...', fi: '...' }`. Component files should basically never need
editing just to change text — if you're asked to change wording, look in
`i18n.js` or the relevant `src/data/` file first.

```
src/
  i18n.js                     — all UI strings (nav, headings, buttons, About paragraphs, thesis boxes)
  context/LanguageContext.jsx — EN/FI toggle, in-memory only (no persistence across reload, by design)
  hooks/useActiveSection.js   — IntersectionObserver-based scroll-spy (no library)
  data/
    experience.js             — 4 jobs, most recent first; some have `periods` (sub-range breakdown) and `description`
    education.js              — 2 degrees (MSc, BSc), each with link/officialTitle/description/courseGroups
    projects.js               — currently EMPTY ARRAY (see "Known gaps" below)
    skills.js                 — grouped skill pills, no skill bars
  components/
    Sidebar.jsx    — desktop sticky sidebar (name/tagline/nav/socials/lang toggle) + mobile sticky header + mobile intro block, all in one file
    CollapsibleRow.jsx — shared click-to-expand row used by Experience AND Education (chevron, grid-rows collapse animation)
    Experience.jsx, Education.jsx, Projects.jsx, Skills.jsx, About.jsx, Contact.jsx
    FadeIn.jsx     — scroll fade-in wrapper (IntersectionObserver), respects prefers-reduced-motion
    icons.jsx      — GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon, ChevronDownIcon
  App.jsx          — assembles Sidebar + <main> with sections in order: About, Experience, Projects, Education, Skills, Contact
```

## Design system

- Dark theme is primary (deep navy: `--color-navy-950/900/800/700` in
  `index.css`), light theme still works via Tailwind's `dark:` media
  variant (no manual toggle — follows OS `prefers-color-scheme`)
- Accent color: teal (`--color-accent-50..900`)
- Shared `.focus-ring` utility class for consistent keyboard focus states
- `.collapse-transition` + `.fade-in-up` utilities in `index.css`, both
  disabled under `prefers-reduced-motion: reduce`

## Interaction patterns established

- **Scroll-spy nav**: `useActiveSection` watches a horizontal band near
  viewport center; whichever section intersects it lights up the sidebar
  nav item (teal indicator line + bold text)
- **Expandable rows**: `CollapsibleRow` (Experience/Education) and a local
  `ThesisBox` component (inside `Education.jsx`) both follow the same
  pattern — bullets/highlights always visible, click a chevron to reveal
  `description` / abstract / course groups / links. Rows with no expandable
  content render as plain static rows with no chevron.
- Both thesis boxes (MSc, BSc) in Education are expandable; only the BSc one
  has a "Download thesis (PDF)" link (`public/thesis-bsc.pdf`, verified
  serving correctly). The MSc thesis has a full abstract but no PDF yet.

## Content status (as of this handoff)

- **About**: final EN copy + FI translation, emphasizing ERP/SAP experience,
  enterprise automation (UiPath/Excel), technical skills, and customer-facing
  work. Graduation date confirmed as **autumn 2026** everywhere (this was
  fixed after a spring/autumn inconsistency was caught).
- **Hero/sidebar tagline**: "Bachelor of Economics — Delivery Coordinator"
  (EN) / "Kauppatieteiden kandidaatti — Delivery Coordinator Trainee" (FI)
- **Experience**: Wärtsilä Delivery Coordinator (with corrected alternating
  full-time/part-time period breakdown, June 2024–present), DHL Transport
  Coordinator, DHL Customer Service Specialist, Boost Your Trade (Co-Founder
  — now has a full description). All four have real EN+FI descriptions
  except bullets-only where no description was given.
- **Education**: MSc Information Systems (Vaasa, graduating autumn 2026,
  degree title/period/link recently corrected) and BSc Economics and
  Business Administration (2025) — both expandable with real program
  links, official descriptions, and grouped course lists. MSc and BSc
  thesis boxes both have real abstracts (BSc also has the actual PDF
  attached).
- **Projects**: **empty** — `src/data/projects.js` exports `[]` and
  `Projects.jsx` shows a translated "Projects are being lined up — check
  back soon." message. This was intentional (user asked to clear
  placeholders) but is the most visible gap on the live site right now.
- **Skills**: Enterprise Systems, Automation, Data, AI Tooling, Web
  (JavaScript listed as "basics" per a recent direct edit), Languages.

## Known gaps / likely next steps

1. **Projects section is empty.** This is the biggest visible gap — no
   projects to show a hiring manager yet.
2. **Finnish is machine-drafted**, not native-reviewed. `i18n.js` has a
   `TODO(fi-review)` comment at the top. Content added since (thesis
   abstracts, Boost Your Trade description, About rewrite) was supplied
   directly by the user in both languages, so those specific strings don't
   need translation review — only the earlier machine-drafted bits do.
3. **GitHub/social links** in `Sidebar.jsx` and `Contact.jsx` point to
   `github.com/eliasnymander` — marked with a `TODO: confirm final GitHub
   URL` comment. Worth double-checking this is the real handle.
4. **MSc thesis has no PDF attachment** yet (BSc does).

## Working notes for whoever picks this up

- **Verifying changes**: there's no project-specific test suite. The
  established pattern for this repo is: `npm.cmd run build` to catch
  errors, then a temporary Playwright check — `npm.cmd install playwright
  --no-save`, launch `npm.cmd run dev` in the background, screenshot key
  states (light/dark, EN/FI, mobile/desktop, expanded/collapsed rows) with
  a throwaway `verify.mjs` script in the repo root, then delete the script
  and `npm.cmd uninstall playwright` afterward so it never lands in a
  commit. Vite auto-shifts ports (5173 → 5174 → 5175...) if something else
  is already listening — always confirm the actual port from the dev
  server's stdout before pointing Playwright at it.
- **Git**: commits are made locally per change, but **pushed only when the
  user explicitly asks** ("push and commit all the changes"). Don't push
  proactively.
- **CLAUDE.md conventions** (both user-global and project-level, same
  content): use `npm.cmd` not `npm`; confirm `pwd` before scaffolding;
  default stack for new prototypes is Next.js+TS+Tailwind (not relevant
  here since this project already exists as Vite+React).
- Don't invent CV facts, metrics, or content — every content change so far
  has come from the user pasting exact text (job descriptions, thesis
  abstracts, About copy). When asked to translate, mark FI drafts clearly;
  when given both languages directly, use them verbatim.
