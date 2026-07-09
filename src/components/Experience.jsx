import { useLanguage } from '../context/LanguageContext.jsx'
import { experience } from '../data/experience.js'
import FadeIn from './FadeIn.jsx'
import CollapsibleRow from './CollapsibleRow.jsx'

export default function Experience() {
  const { t, language } = useLanguage()

  return (
    <section id="experience" className="px-6 py-16 sm:px-12 lg:px-24 lg:py-24">
      <FadeIn>
        <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-500">
          {t.experience.heading}
        </h2>
      </FadeIn>

      <ol className="mt-6 max-w-2xl">
        {experience.map((item, index) => (
          <FadeIn key={item.id} delay={index * 75}>
            <li>
              <CollapsibleRow
                meta={item.period[language]}
                title={
                  <h3 className="font-medium text-slate-900 dark:text-white">
                    {item.role[language]} · {item.company}
                  </h3>
                }
                alwaysVisible={
                  <ul className="space-y-1.5">
                    {item.bullets[language].map((bullet) => (
                      <li key={bullet} className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                }
              >
                {(item.periods || item.description) && (
                  <>
                    {item.periods && (
                      <ul className="flex flex-wrap gap-2">
                        {item.periods.map((p) => (
                          <li
                            key={p.range[language]}
                            className="flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-navy-800 dark:text-slate-400"
                          >
                            <span>{p.range[language]}</span>
                            <span className="text-slate-400 dark:text-slate-500">·</span>
                            <span>{p.type[language]}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.description && <p>{item.description[language]}</p>}
                  </>
                )}
              </CollapsibleRow>
            </li>
          </FadeIn>
        ))}
      </ol>
    </section>
  )
}
