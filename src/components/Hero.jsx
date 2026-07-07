import { useLanguage } from '../context/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
        {t.hero.name}
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
        {t.hero.tagline}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="rounded-md bg-accent-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-700"
        >
          {t.hero.viewProjects}
        </a>
        <a
          href="mailto:elias.nymander@gmail.com"
          className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
        >
          {t.hero.getInTouch}
        </a>
      </div>

      <div className="mt-10 flex items-center gap-5 text-sm text-slate-500 dark:text-slate-500">
        {/* TODO: confirm final GitHub URL */}
        <a
          href="https://github.com/eliasnymander"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-accent-600 dark:hover:text-accent-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/eliasnymander"
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-accent-600 dark:hover:text-accent-400"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
