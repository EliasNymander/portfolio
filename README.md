# Elias Nymander — Portfolio

Personal portfolio site. Single page, bilingual (English/Finnish), built with
Vite + React + Tailwind CSS. No backend — fully static.

## Tech stack

- [Vite](https://vite.dev/) + React (functional components, hooks)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Deployed as a static site on [Vercel](https://vercel.com/)

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

The dev server prints a local URL (default `http://localhost:5173`).

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm run lint     # run Oxlint
```

## Project structure

```
src/
  i18n.js               # all UI copy (nav, headings, buttons, about text) — en/fi
  context/
    LanguageContext.jsx # React context providing the EN/FI toggle + t() strings
  data/
    projects.js         # project cards
    experience.js        # work experience timeline
    education.js         # education entries
    skills.js             # skill groups/tags
  components/            # one component per section (Hero, About, Projects, ...)
```

The rule of thumb: **UI copy lives in `src/i18n.js`**, **content you'd actually
edit (jobs, projects, skills) lives in `src/data/*.js`**. You should never need
to touch a component file just to update text.

## Editing content

- **Projects**: edit `src/data/projects.js`. Each entry has `name`, `problem`
  (en/fi), `description` (en/fi), `tech` (array of tags), `github` (repo URL),
  `featured` (bool — spans two columns on desktop), and `isPlaceholder` (bool —
  shows a "Placeholder" badge on the card, remove once the entry is real).
  To add a project, copy an existing object and give it a unique `id`.
- **Experience / Education / Skills**: same pattern — edit the corresponding
  file in `src/data/`. Translatable fields are `{ en: '...', fi: '...' }`
  objects; fields like company names or tech tags that don't need translation
  are plain strings/arrays.
- **UI text** (nav labels, section headings, hero tagline, buttons, footer):
  edit `src/i18n.js`. It has one `en` object and one `fi` object with the same
  shape — keep them in sync when you add a new string.

### Finnish content

The `fi` strings in `src/i18n.js` and the data files are draft translations
(marked with `TODO(fi-review)` / `TODO:` comments). They're good enough to
ship but a native-speaker pass is recommended before final launch.

## Deploying to Vercel

The repo includes `vercel.json` telling Vercel this is a Vite app (build
command `npm run build`, output directory `dist`). No backend, no environment
variables needed.

### One-time setup: connect GitHub → Vercel

1. Push this repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
3. Vercel auto-detects the Vite framework preset from `vercel.json`. Leave the
   defaults and click **Deploy**.

That's it — from now on, **every `git push` to the default branch
auto-deploys to production**, and every other branch/PR gets its own preview
deployment URL.

### Pushing this repo to GitHub for the first time

```bash
git init                      # skip if already a git repo
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### Connecting a custom domain (eliasnymander.fi)

1. In the Vercel dashboard, open the project → **Settings → Domains**.
2. Add `eliasnymander.fi` (and optionally `www.eliasnymander.fi`).
3. Vercel shows the DNS records to add. At your domain registrar:
   - For an apex domain (`eliasnymander.fi`), add the **A record** Vercel
     gives you (usually pointing at `76.76.21.21`), or use **ALIAS/ANAME** if
     your registrar supports it.
   - For `www`, add the **CNAME record** Vercel gives you
     (`cname.vercel-dns.com`).
4. Wait for DNS to propagate (usually minutes, can take up to 24h). Vercel
   auto-provisions an SSL certificate once the domain verifies.
5. Optional: in **Settings → Domains**, set `eliasnymander.fi` as the primary
   domain and redirect `www` → apex (or vice versa).

## Performance notes

No component libraries, no web fonts loaded from external hosts, no images in
the current placeholder content — this keeps the bundle small and Lighthouse
scores high by default. If you add images, prefer modern formats (WebP/AVIF)
and set explicit `width`/`height` to avoid layout shift.
