import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons.jsx'

const SECTIONS = ['about', 'experience', 'projects', 'education', 'skills', 'contact']

function LanguageToggle({ language, toggleLanguage, className = '' }) {
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className={`focus-ring rounded-full border border-slate-300 px-3 py-1 text-sm font-medium text-slate-600 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-navy-700 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400 ${className}`}
    >
      <span className={language === 'en' ? 'text-accent-600 dark:text-accent-400' : ''}>EN</span>
      <span className="mx-1 text-slate-400 dark:text-slate-600">/</span>
      <span className={language === 'fi' ? 'text-accent-600 dark:text-accent-400' : ''}>FI</span>
    </button>
  )
}

function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {/* TODO: confirm final GitHub URL */}
      <a
        href="https://github.com/eliasnymander"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="focus-ring rounded text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
      >
        <GithubIcon />
      </a>
      <a
        href="https://linkedin.com/in/eliasnymander"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="focus-ring rounded text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
      >
        <LinkedinIcon />
      </a>
      <a
        href="mailto:elias.nymander@gmail.com"
        aria-label="Email"
        className="focus-ring rounded text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
      >
        <MailIcon />
      </a>
    </div>
  )
}

export default function Sidebar() {
  const { t, language, toggleLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection(SECTIONS)

  const handleNavClick = () => setIsMenuOpen(false)

  return (
    <>
      {/* Mobile sticky top bar */}
      <header
        className={`sticky top-0 z-50 border-b border-slate-200 backdrop-blur-sm lg:hidden dark:border-navy-800 ${
          isMenuOpen ? 'bg-white dark:bg-navy-950' : 'bg-white/80 dark:bg-navy-950/80'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#about" className="font-semibold text-slate-900 dark:text-white">
            {t.hero.name}
          </a>

          <div className="flex items-center gap-3">
            <LanguageToggle language={language} toggleLanguage={toggleLanguage} />

            <button
              type="button"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-600 dark:text-slate-300"
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
          <nav className="flex flex-col gap-1 border-t border-slate-200 px-6 py-4 dark:border-navy-800">
            {SECTIONS.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={handleNavClick}
                className="focus-ring rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-accent-600 dark:text-slate-400 dark:hover:bg-navy-900 dark:hover:text-accent-400"
              >
                {t.nav[section]}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Mobile intro block (part of normal scroll flow, no sidebar on small screens) */}
      <div className="px-6 pt-12 pb-4 lg:hidden">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {t.hero.name}
        </h1>
        <p className="mt-3 max-w-sm text-slate-600 dark:text-slate-400">{t.hero.tagline}</p>
        <SocialLinks className="mt-6" />
      </div>

      {/* Desktop sticky sidebar */}
      <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[380px] lg:shrink-0 lg:flex-col lg:justify-between lg:px-12 lg:py-16">
        <div>
          <a
            href="#about"
            className="focus-ring inline-block rounded text-3xl font-semibold tracking-tight text-slate-900 dark:text-white"
          >
            {t.hero.name}
          </a>
          <p className="mt-3 max-w-xs text-lg font-medium text-slate-600 dark:text-slate-300">
            {t.hero.tagline}
          </p>

          <nav className="mt-16" aria-label="Section navigation">
            <ul className="space-y-4">
              {SECTIONS.map((section) => {
                const isActive = activeSection === section
                return (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="focus-ring group flex items-center gap-3 rounded py-1"
                    >
                      <span
                        className={`h-px transition-all duration-300 ${
                          isActive
                            ? 'w-8 bg-accent-600 dark:bg-accent-400'
                            : 'w-4 bg-slate-400 group-hover:w-8 group-hover:bg-accent-500 dark:bg-slate-600'
                        }`}
                      />
                      <span
                        className={`text-xs font-semibold tracking-widest uppercase transition-colors ${
                          isActive
                            ? 'text-slate-900 dark:text-white'
                            : 'text-slate-500 group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-300'
                        }`}
                      >
                        {t.nav[section]}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center justify-between">
          <SocialLinks />
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        </div>
      </aside>
    </>
  )
}
