import { useLanguage } from '../context/LanguageContext.jsx'
import { experience } from '../data/experience.js'
import FadeIn from './FadeIn.jsx'

export default function Experience() {
  const { t, language } = useLanguage()

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <FadeIn>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {t.experience.heading}
        </h2>
      </FadeIn>

      <ol className="mt-8 max-w-2xl border-l border-slate-200 dark:border-slate-800">
        {experience.map((item, index) => (
          <FadeIn key={item.id} delay={index * 75}>
            <li className="relative pb-10 pl-6 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-500" />

              <p className="text-xs font-medium tracking-wide text-slate-500 uppercase dark:text-slate-500">
                {item.period[language]}
              </p>
              <h3 className="mt-1 font-medium text-slate-900 dark:text-white">
                {item.role[language]} · {item.company}
              </h3>

              <ul className="mt-2 space-y-1.5">
                {item.bullets[language].map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm text-slate-600 dark:text-slate-400"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          </FadeIn>
        ))}
      </ol>
    </section>
  )
}
