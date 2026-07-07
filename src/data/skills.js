// Skills grouped by category. Deliberately just tags, no proficiency bars.

export const skills = [
  {
    id: 'enterprise-systems',
    category: { en: 'Enterprise Systems', fi: 'Yritysjärjestelmät' },
    items: ['SAP', 'Power BI', 'TMS'],
  },
  {
    id: 'automation',
    category: { en: 'Automation', fi: 'Automaatio' },
    items: ['UiPath / RPA', 'Excel automation', 'Python'],
  },
  {
    id: 'data',
    category: { en: 'Data', fi: 'Data' },
    items: ['SQL', 'SPSS'],
  },
  {
    id: 'ai-tooling',
    category: { en: 'AI Tooling', fi: 'Tekoälytyökalut' },
    items: ['Claude Code', 'Agent development', 'GenAI APIs'],
  },
  {
    id: 'web',
    category: { en: 'Web', fi: 'Web' },
    items: ['JavaScript', 'React (basics)', 'SEO'],
  },
  {
    id: 'languages',
    category: { en: 'Languages', fi: 'Kielet' },
    items: {
      en: ['Finnish (native)', 'English (fluent)', 'Swedish (basic)'],
      fi: ['Suomi (äidinkieli)', 'Englanti (sujuva)', 'Ruotsi (perusteet)'],
    },
  },
]
