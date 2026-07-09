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
        "I started out coordinating logistics, not writing code. At DHL and later Wärtsilä, my job was to keep freight moving: bookings, documentation, dispatch. What kept happening was that I'd find the slow, repetitive part of the job and build something to remove it.",
        "At DHL I built an Excel-based tool that cut down the manual work in transport planning. At Wärtsilä I've built UiPath RPA robots that now handle parts of our export documentation process. Neither started as a grand plan — they were just the fastest way to stop doing something by hand.",
        "That pattern is what pulled me into information systems and, from there, into AI. I'm finishing my MSc in Information Systems at the University of Vaasa, with a thesis on AI-based demand forecasting in supply chain management. In my spare time I build AI agents using Claude Code.",
        "I also co-founded Boost Your Trade, a small web business building AI-assisted websites for trade businesses in New Zealand. We shipped three client sites before winding it down in 2025. Now I'm looking for a junior AI/GenAI developer or AI consulting role where I can keep doing what I've been doing anyway: finding the manual part and building something better.",
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
        'Aloitin logistiikan parissa, en koodaamalla. DHL:llä ja myöhemmin Wärtsilällä työni oli pitää rahtiliikenne käynnissä: varaukset, dokumentaatio, kuljetusten suunnittelu. Huomasin toistuvasti saman asian: löysin työstä hitaan, toistuvan osan ja rakensin jotain, joka poisti sen.',
        'DHL:llä rakensin Excel-pohjaisen työkalun, joka vähensi kuljetussuunnittelun manuaalista työtä. Wärtsilällä olen rakentanut UiPath RPA -robotteja, jotka hoitavat nyt osan vientidokumentaation käsittelystä. Kumpikaan ei alkanut suurena suunnitelmana — ne olivat vain nopein tapa lopettaa jonkin asian tekeminen käsin.',
        'Tämä toistuva kaava vei minut tietojärjestelmätieteen pariin ja siitä edelleen tekoälyyn. Viimeistelen tietojärjestelmätieteen maisterin tutkintoani Vaasan yliopistossa, ja diplomityöni käsittelee tekoälypohjaista kysynnän ennustamista toimitusketjun hallinnassa. Vapaa-ajallani rakennan tekoälyagentteja Claude Codella.',
        'Olen myös perustanut Boost Your Trade -nimisen pienen verkkoliiketoiminnan, joka rakensi tekoälyavusteisia verkkosivuja uusiseelantilaisille rakennusalan yrityksille. Toimitimme kolme asiakassivustoa ennen toiminnan lopettamista vuonna 2025. Nyt etsin junior AI/GenAI-kehittäjän tai AI-konsultoinnin roolia, jossa voin jatkaa samaa: löytää työn manuaalisen osan ja rakentaa siihen paremman ratkaisun.',
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
