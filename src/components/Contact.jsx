import { useLanguage } from '../context/LanguageContext.jsx'
import FadeIn from './FadeIn.jsx'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="border-t border-slate-200 px-6 py-16 sm:px-12 lg:px-24 lg:py-24 dark:border-navy-800">
      <FadeIn>
        <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-500">
          {t.contact.heading}
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-slate-600 dark:text-slate-400">
          {t.contact.availability}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <a
            href="mailto:elias.nymander@gmail.com"
            className="focus-ring rounded font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
          >
            {t.contact.email}: elias.nymander@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/eliasnymander"
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
          >
            {t.contact.linkedin}
          </a>
          {/* TODO: replace with final GitHub profile URL */}
          <a
            href="https://github.com/eliasnymander"
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
          >
            {t.contact.github}
          </a>
        </div>

        <p className="mt-16 text-xs text-slate-400 dark:text-slate-600">
          © {new Date().getFullYear()} Elias Nymander
        </p>
      </FadeIn>
    </footer>
  )
}
