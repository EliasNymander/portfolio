import { useLanguage } from '../context/LanguageContext.jsx'
import { skills } from '../data/skills.js'
import FadeIn from './FadeIn.jsx'

export default function Skills() {
  const { t, language } = useLanguage()

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <FadeIn>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {t.skills.heading}
        </h2>
      </FadeIn>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skills.map((group, index) => {
          const items = Array.isArray(group.items) ? group.items : group.items[language]

          return (
            <FadeIn key={group.id} delay={index * 60}>
              <div>
                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-500">
                  {group.category[language]}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
