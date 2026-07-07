import { useLanguage } from '../context/LanguageContext.jsx'
import FadeIn from './FadeIn.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <FadeIn>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {t.about.heading}
        </h2>
      </FadeIn>

      <div className="mt-8 max-w-2xl space-y-5">
        {t.about.paragraphs.map((paragraph, index) => (
          <FadeIn key={index} delay={index * 75}>
            <p className="text-slate-600 dark:text-slate-400">{paragraph}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
