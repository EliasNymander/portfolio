// Project cards. Each entry is deliberately self-contained so new projects
// can be added without touching any component code.
//
// isPlaceholder: true marks entries that still need real content/links.
// featured: true makes the card span two columns on wider screens.

export const projects = [
  {
    id: 'ai-investing-agent',
    name: 'AI Investing Agent',
    problem: {
      en: 'Manually tracking a portfolio and the news that moves it does not scale.',
      fi: 'Salkun ja siihen vaikuttavien uutisten manuaalinen seuranta ei skaalaudu.',
    },
    description: {
      en: 'An agent that monitors positions and market news, then summarizes what actually matters. Built with Claude Code and Python.',
      fi: 'Agentti, joka seuraa sijoitussalkkua ja markkinauutisia ja tiivistää olennaisen. Rakennettu Claude Codella ja Pythonilla.',
    },
    tech: ['Python', 'Claude Code', 'Agents', 'APIs'],
    github: '#', // TODO: add real repo URL
    featured: true,
    isPlaceholder: true, // TODO: replace with final write-up once the project is ready to show
  },
  {
    id: 'project-placeholder-2',
    name: 'Project Two (placeholder)',
    problem: {
      en: 'TODO: replace with a one-line problem statement.',
      fi: 'TODO: korvaa yhden lauseen ongelmankuvauksella.',
    },
    description: {
      en: 'TODO: replace with a short description of what this project does and why it exists.',
      fi: 'TODO: korvaa lyhyellä kuvauksella siitä, mitä projekti tekee ja miksi se on olemassa.',
    },
    tech: ['TODO'],
    github: '#', // TODO: add real repo URL
    featured: false,
    isPlaceholder: true,
  },
  {
    id: 'project-placeholder-3',
    name: 'Project Three (placeholder)',
    problem: {
      en: 'TODO: replace with a one-line problem statement.',
      fi: 'TODO: korvaa yhden lauseen ongelmankuvauksella.',
    },
    description: {
      en: 'TODO: replace with a short description of what this project does and why it exists.',
      fi: 'TODO: korvaa lyhyellä kuvauksella siitä, mitä projekti tekee ja miksi se on olemassa.',
    },
    tech: ['TODO'],
    github: '#', // TODO: add real repo URL
    featured: false,
    isPlaceholder: true,
  },
]
