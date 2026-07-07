import { useLanguage } from '../context/LanguageContext.jsx'
import { skills } from '../data/skills.js'
import FadeIn from './FadeIn.jsx'

export default function Skills() {
  const { t, language } = useLanguage()

  return (
    <section id="skills" className="px-6 py-16 sm:px-12 lg:px-24 lg:py-24">
      <FadeIn>
        <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-500">
          {t.skills.heading}
        </h2>
      </FadeIn>

      <div className="mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {skills.map((group, index) => {
          const items = Array.isArray(group.items) ? group.items : group.items[language]

          return (
            <FadeIn key={group.id} delay={index * 60}>
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-500">
                  {group.category[language]}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="cursor-default rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 transition-colors hover:border-accent-500/60 hover:text-accent-600 dark:border-navy-700 dark:text-slate-300 dark:hover:border-accent-400/60 dark:hover:text-accent-400"
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
