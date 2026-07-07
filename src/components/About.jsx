import { useLanguage } from '../context/LanguageContext.jsx'
import FadeIn from './FadeIn.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="px-6 py-16 sm:px-12 lg:px-24 lg:py-24">
      <FadeIn>
        <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-500">
          {t.about.heading}
        </h2>
      </FadeIn>

      <div className="mt-6 max-w-2xl space-y-5">
        {t.about.paragraphs.map((paragraph, index) => (
          <FadeIn key={index} delay={index * 75}>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">{paragraph}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
