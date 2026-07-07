import { useLanguage } from '../context/LanguageContext.jsx'
import { projects } from '../data/projects.js'
import FadeIn from './FadeIn.jsx'

export default function Projects() {
  const { t, language } = useLanguage()

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <FadeIn>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {t.projects.heading}
        </h2>
      </FadeIn>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn
            key={project.id}
            delay={index * 75}
            className={project.featured ? 'sm:col-span-2' : ''}
          >
            <article className="flex h-full flex-col rounded-lg border border-slate-200 p-6 transition-colors hover:border-accent-500/60 dark:border-slate-800 dark:hover:border-accent-400/60">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-medium text-slate-900 dark:text-white">{project.name}</h3>
                {project.isPlaceholder && (
                  <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    {t.projects.placeholderBadge}
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm font-medium text-accent-700 dark:text-accent-400">
                {project.problem[language]}
              </p>

              <p className="mt-3 flex-1 text-sm text-slate-600 dark:text-slate-400">
                {project.description[language]}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-5 text-sm font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
              >
                {t.projects.viewOnGithub} →
              </a>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
