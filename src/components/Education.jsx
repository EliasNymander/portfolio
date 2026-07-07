import { useLanguage } from '../context/LanguageContext.jsx'
import { education } from '../data/education.js'
import FadeIn from './FadeIn.jsx'

export default function Education() {
  const { t, language } = useLanguage()

  return (
    <section id="education" className="px-6 py-16 sm:px-12 lg:px-24 lg:py-24">
      <FadeIn>
        <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-500">
          {t.education.heading}
        </h2>
      </FadeIn>

      <div className="mt-6 max-w-2xl space-y-2">
        {education.map((item, index) => (
          <FadeIn key={item.id} delay={index * 75}>
            <div className="grid grid-cols-1 gap-1 rounded-lg p-4 -mx-4 transition-colors sm:grid-cols-[7rem_1fr] sm:gap-4 hover:bg-slate-100 dark:hover:bg-navy-900">
              <p className="text-xs font-medium tracking-wide text-slate-500 uppercase sm:pt-1 dark:text-slate-500">
                {item.period[language]}
              </p>

              <div>
                <h3 className="font-medium text-slate-900 dark:text-white">
                  {item.degree[language]}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-500">{item.institution}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {item.highlights[language].map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-navy-800 dark:text-slate-400"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={education.length * 75}>
          <div className="rounded-lg border border-accent-500/30 bg-accent-50 p-6 dark:border-accent-400/20 dark:bg-accent-900/10">
            <p className="text-xs font-medium tracking-wide text-accent-700 uppercase dark:text-accent-400">
              {t.education.thesisLabel}
            </p>
            <h3 className="mt-1 font-medium text-slate-900 dark:text-white">
              {t.education.thesisTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t.education.thesisSummary}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
