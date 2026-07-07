import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

const SECTIONS = ['home', 'about', 'projects', 'experience', 'education', 'skills', 'contact']

export default function Header() {
  const { t, language, toggleLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = () => setIsMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 backdrop-blur-sm dark:border-slate-800 ${
        isMenuOpen ? 'bg-white dark:bg-slate-950' : 'bg-white/80 dark:bg-slate-950/80'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-semibold text-slate-900 dark:text-white"
          onClick={handleNavClick}
        >
          Elias Nymander
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-sm text-slate-600 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              {t.nav[section]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-600 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
          >
            <span className={language === 'en' ? 'text-accent-600 dark:text-accent-400' : ''}>
              EN
            </span>
            <span className="mx-1 text-slate-400 dark:text-slate-600">/</span>
            <span className={language === 'fi' ? 'text-accent-600 dark:text-accent-400' : ''}>
              FI
            </span>
          </button>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-600 md:hidden dark:text-slate-300"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {isMenuOpen ? (
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5H17M3 10H17M3 15H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-slate-200 px-6 py-4 md:hidden dark:border-slate-800">
          {SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={handleNavClick}
              className="rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-accent-600 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-accent-400"
            >
              {t.nav[section]}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
