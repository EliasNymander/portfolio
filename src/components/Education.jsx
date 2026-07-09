import { useLanguage } from '../context/LanguageContext.jsx'
import { education } from '../data/education.js'
import FadeIn from './FadeIn.jsx'
import CollapsibleRow from './CollapsibleRow.jsx'
import { ExternalLinkIcon } from './icons.jsx'

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
            <CollapsibleRow
              meta={item.period[language]}
              title={
                <div>
                  <h3 className="font-medium text-slate-900 dark:text-white">
                    {item.degree[language]}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-500">{item.institution}</p>
                </div>
              }
              alwaysVisible={
                <div className="flex flex-wrap gap-2">
                  {item.highlights[language].map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-navy-800 dark:text-slate-400"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              }
            >
              <p className="font-medium text-slate-700 dark:text-slate-300">
                {item.officialTitle[language]}
              </p>
              <p>{item.description[language]}</p>
              <a
                href={item.link[language]}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-1.5 rounded font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
              >
                {t.education.viewProgram}
                <ExternalLinkIcon className="h-3.5 w-3.5" />
              </a>

              {item.courseGroups.map((group) => (
                <div key={group.heading}>
                  <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-500">
                    {group.heading}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.courses.map((course) => (
                      <li
                        key={course}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-navy-800 dark:text-slate-400"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CollapsibleRow>
          </FadeIn>
        ))}

        <FadeIn delay={education.length * 75}>
          <div className="rounded-lg border border-accent-500/30 bg-accent-50 p-6 dark:border-accent-400/20 dark:bg-accent-900/10">
            <p className="text-xs font-medium tracking-wide text-accent-700 uppercase dark:text-accent-400">
              {t.education.mscThesisLabel}
            </p>
            <h3 className="mt-1 font-medium text-slate-900 dark:text-white">
              {t.education.mscThesisTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t.education.mscThesisSummary}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={(education.length + 1) * 75}>
          <div className="rounded-lg border border-accent-500/30 bg-accent-50 p-6 dark:border-accent-400/20 dark:bg-accent-900/10">
            <p className="text-xs font-medium tracking-wide text-accent-700 uppercase dark:text-accent-400">
              {t.education.bscThesisLabel}
            </p>
            <h3 className="mt-1 font-medium text-slate-900 dark:text-white">
              {t.education.bscThesisTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t.education.bscThesisSummary}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
