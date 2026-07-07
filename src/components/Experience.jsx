import { useLanguage } from '../context/LanguageContext.jsx'
import { experience } from '../data/experience.js'
import FadeIn from './FadeIn.jsx'

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
            <li className="group grid grid-cols-1 gap-1 rounded-lg p-4 -mx-4 transition-colors sm:grid-cols-[7rem_1fr] sm:gap-4 hover:bg-slate-100 dark:hover:bg-navy-900">
              <p className="text-xs font-medium tracking-wide text-slate-500 uppercase sm:pt-1 dark:text-slate-500">
                {item.period[language]}
              </p>

              <div>
                <h3 className="font-medium text-slate-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
                  {item.role[language]} · {item.company}
                </h3>

                <ul className="mt-2 space-y-1.5">
                  {item.bullets[language].map((bullet) => (
                    <li key={bullet} className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
    </section>
  )
}
