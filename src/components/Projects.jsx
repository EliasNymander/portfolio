import { useLanguage } from '../context/LanguageContext.jsx'
import { projects } from '../data/projects.js'
import FadeIn from './FadeIn.jsx'
import { ExternalLinkIcon } from './icons.jsx'

export default function Projects() {
  const { t, language } = useLanguage()

  return (
    <section id="projects" className="px-6 py-16 sm:px-12 lg:px-24 lg:py-24">
      <FadeIn>
        <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-500">
          {t.projects.heading}
        </h2>
      </FadeIn>

      <div className="mt-6 max-w-2xl">
        {projects.length === 0 && (
          <FadeIn>
            <p className="text-sm text-slate-500 dark:text-slate-500">{t.projects.emptyMessage}</p>
          </FadeIn>
        )}

        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 75}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`focus-ring group -mx-4 block rounded-lg p-4 transition-colors hover:bg-slate-100 dark:hover:bg-navy-900 ${
                project.featured ? 'border-l-2 border-accent-500/30 pl-6 dark:border-accent-400/30' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="flex items-center gap-1.5 font-medium text-slate-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
                  {project.name}
                  <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                {project.isPlaceholder && (
                  <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-navy-800 dark:text-slate-400">
                    {t.projects.placeholderBadge}
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm font-medium text-accent-700 dark:text-accent-400">
                {project.problem[language]}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description[language]}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-navy-800 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
