// Single source of truth for all UI copy.
// Structured, repeatable content (projects/experience/education/skills) lives in src/data/ instead.
//
// TODO(fi-review): Finnish (fi) strings below are machine-assisted draft translations.
// Please have a native speaker review before publishing.

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      name: 'Elias Nymander',
      tagline: 'Bachelor of Economics — Delivery Coordinator',
      viewProjects: 'View projects',
      getInTouch: 'Get in touch',
    },
    about: {
      heading: 'About',
      paragraphs: [
        "I'm an Information Systems MSc student at the University of Vaasa, finishing my degree with a thesis on AI-based demand forecasting in supply chain management.",
        "I started out in logistics, coordinating freight and deliveries at DHL and Wärtsilä, and in every role I kept spotting the slow, manual parts of the work and building something to fix them — an Excel tool that cut down dispatch planning at DHL, and RPA robots in UiPath at Wärtsilä.",
        "That instinct pulled me toward information systems, and today I work daily with enterprise tools like SAP and Power BI. I'm looking for a role where I can turn real business problems into working automation and solutions.",
      ],
    },
    projects: {
      heading: 'Projects',
      viewOnGithub: 'View on GitHub',
      placeholderBadge: 'Placeholder',
      emptyMessage: 'Projects are being lined up — check back soon.',
    },
    experience: {
      heading: 'Experience',
      present: 'Present',
    },
    education: {
      heading: 'Education',
      viewProgram: 'View program page',
      mscThesisLabel: 'MSc thesis',
      mscThesisTitle: 'AI demand forecasting in supply chain management',
      mscThesisSummary:
        'TODO: add a 2-3 sentence summary of the thesis scope, method, and key findings once available.',
      bscThesisLabel: 'BSc thesis',
      bscThesisTitle: 'TODO: add bachelor’s thesis title',
      bscThesisSummary: 'TODO: add thesis summary once the thesis and its attachment are ready.',
      courseworkLabel: 'Coursework highlights',
    },
    skills: {
      heading: 'Skills',
    },
    contact: {
      heading: 'Contact',
      availability: 'Available for full-time roles from October 2026.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
  fi: {
    nav: {
      home: 'Etusivu',
      about: 'Tietoa minusta',
      projects: 'Projektit',
      experience: 'Kokemus',
      education: 'Koulutus',
      skills: 'Taidot',
      contact: 'Yhteystiedot',
    },
    hero: {
      name: 'Elias Nymander',
      tagline: 'Kauppatieteiden kandidaatti — Delivery Coordinator Trainee',
      viewProjects: 'Katso projektit',
      getInTouch: 'Ota yhteyttä',
    },
    about: {
      heading: 'Tietoa minusta',
      paragraphs: [
        'Olen tietojärjestelmätieteen maisteriopiskelija Vaasan yliopistossa, ja viimeistelen tutkintoani diplomityöllä tekoälypohjaisesta kysynnän ennustamisesta toimitusketjun hallinnassa.',
        'Aloitin logistiikan parissa koordinoimalla rahteja ja toimituksia DHL:llä ja Wärtsilällä, ja jokaisessa roolissa huomasin työn hitaat, manuaaliset osat ja rakensin niihin ratkaisun — Excel-työkalun, joka vähensi ajojärjestelyn manuaalista työtä DHL:llä, sekä UiPath RPA -robotteja Wärtsilällä.',
        'Tämä vaisto vei minut kohti tietojärjestelmätiedettä, ja nykyään työskentelen päivittäin yritysjärjestelmien, kuten SAP:n ja Power BI:n, parissa. Etsin roolia, jossa voin muuttaa todelliset liiketoimintaongelmat toimiviksi automaatioratkaisuiksi.',
      ],
    },
    projects: {
      heading: 'Projektit',
      viewOnGithub: 'Katso GitHubissa',
      placeholderBadge: 'Paikanpitäjä',
      emptyMessage: 'Projekteja kootaan parhaillaan — käy pian uudelleen.',
    },
    experience: {
      heading: 'Kokemus',
      present: 'Nyt',
    },
    education: {
      heading: 'Koulutus',
      viewProgram: 'Katso koulutusohjelma',
      mscThesisLabel: 'Pro gradu -tutkielma',
      mscThesisTitle: 'Tekoälypohjainen kysynnän ennustaminen toimitusketjun hallinnassa',
      mscThesisSummary:
        'TODO: lisää 2-3 lauseen yhteenveto tutkielman laajuudesta, menetelmästä ja keskeisistä tuloksista, kun ne ovat valmiit.',
      bscThesisLabel: 'Kandidaatintutkielma',
      bscThesisTitle: 'TODO: lisää kandidaatintutkielman otsikko',
      bscThesisSummary: 'TODO: lisää tutkielman kuvaus, kun tutkielma ja sen liite ovat valmiit.',
      courseworkLabel: 'Opintojen painopisteet',
    },
    skills: {
      heading: 'Taidot',
    },
    contact: {
      heading: 'Yhteystiedot',
      availability: 'Käytettävissä kokoaikaiseen työhön lokakuusta 2026 alkaen.',
      email: 'Sähköposti',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
}
