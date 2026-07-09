import { useState } from 'react'
import { ChevronDownIcon } from './icons.jsx'

// A hoverable row (used by Experience/Education) that can optionally expand
// to reveal extra detail. Pass `children` to make it expandable; omit it (or
// pass a falsy value) to render a plain static row with no toggle affordance.
export default function CollapsibleRow({ meta, title, alwaysVisible, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const isExpandable = Boolean(children)

  const header = (
    <>
      <span className="text-xs font-medium tracking-wide text-slate-500 uppercase sm:pt-1 dark:text-slate-500">
        {meta}
      </span>
      <span className="flex items-start justify-between gap-3">
        <span className="min-w-0">{title}</span>
        {isExpandable && (
          <ChevronDownIcon
            className={`mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </span>
    </>
  )

  return (
    <div className="-mx-4 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-navy-900">
      {isExpandable ? (
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          className="focus-ring grid w-full grid-cols-1 items-start gap-1 rounded-lg p-4 text-left sm:grid-cols-[7rem_1fr] sm:gap-4"
        >
          {header}
        </button>
      ) : (
        <div className="grid grid-cols-1 items-start gap-1 p-4 sm:grid-cols-[7rem_1fr] sm:gap-4">{header}</div>
      )}

      <div className="px-4 pb-4 sm:pl-32">
        {alwaysVisible}

        {isExpandable && (
          <div
            className={`collapse-transition grid ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            aria-hidden={!isOpen}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="space-y-3 pt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {children}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
