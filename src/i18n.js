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
      bscThesisTitle: 'Data Sharing Through Blockchain Technology in Supply Chain Management',
      bscThesisSummary:
        'This thesis examines the use of blockchain technology in logistics supply chain management, focusing specifically on how blockchain can be leveraged for data sharing between stakeholders.',
      bscThesisAbstract: [
        'This thesis examines the use of blockchain technology in logistics supply chain management, focusing specifically on how blockchain can be leveraged for data sharing between stakeholders. It reviews the functional fundamentals of this relatively new technology and how they are applied in supply chain management. Within this scope, the thesis is further narrowed to explore how blockchain technology can increase security and transparency in data sharing within a logistics environment. The aim of the research is to identify the shared challenges of blockchain technology, supply chain management, and data sharing, and to present possible solutions to them based on the latest scientific research.',
        'The research was conducted through a comprehensive literature review on the topic of blockchain technology in supply chain management. The review identified the main challenges of data sharing, along with frameworks proposing blockchain-based solutions to those challenges. The work was carried out by comparing the problems and solutions found across the reviewed studies. This comparison led to an understanding of the current challenges and of what kind of further research or development their resolution requires. Comparing the frameworks revealed the strengths and weaknesses of the different solutions, as well as their suitability across varying situations and conditions.',
        'The literature review surfaced blockchain-based solutions to the most critical data-sharing challenges. Four key elements emerged from the source material: smart contracts, cryptographic key generation and selection technologies, blockchain platforms, and data valuation mechanisms. These solutions are examined and compared against five distinct data-sharing challenges: data-sharing security, trust between sharing parties, defining the value and price of data, data transparency and traceability, and improving the efficiency of data sharing. The solutions differed based on which data-sharing problems they addressed and the type of supply chain in which they were implemented. Data and the challenges surrounding its sharing represent, from several perspectives, some of the greatest challenges of blockchain technology — challenges this thesis seeks to address.',
        'Blockchain remains a relatively new technology in supply chains, which means its implementation is complicated by various obstacles. A lack of trust between stakeholders, the absence of legislation governing data sharing, and the lack of technological standards in the blockchain field are among the most significant limitations that must be resolved.',
      ],
      readAbstract: 'Read full abstract',
      showLess: 'Show less',
      downloadPdf: 'Download thesis (PDF)',
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
      bscThesisTitle: 'Datan jakaminen lohkoketjuteknologian avulla toimitusketjun hallinnassa: Datan jakamisen haasteet ja ratkaisut',
      bscThesisSummary:
        'Tässä tutkielmassa käydään läpi lohkoketjuteknologian hyödyntämistä logistiikan toimitusketjun hallinnassa sekä tarkemmin sitä, miten lohkoketjuteknologiaa voidaan hyödyntää datan jakamisessa sidosryhmien välillä.',
      bscThesisAbstract: [
        'Tässä tutkielmassa käydään läpi lohkoketjuteknologian hyödyntämistä logistiikan toimitusketjun hallinnassa sekä tarkemmin sitä, miten lohkoketjuteknologiaa voidaan hyödyntää datan jakamisessa sidosryhmien välillä. Tutkielmassa käydään läpi melko uuden teknologian toiminnalliset perusteet, sekä miten niitä hyödynnetään toimitusketjun hallinnassa. Tästä kokonaisuudesta tutkielmaa rajataan vielä tarkastelemalla sitä, kuinka lohkoketjuteknologia voi lisätä turvallisuutta ja läpinäkyvyyttä datan jakamisessa logistiikan ympäristössä. Tutkimuksen tavoitteena on löytää lohkoketjuteknologian, toimitusketjun hallinnan ja datan jakamisen yhteiset ongelmat sekä esittää niihin mahdolliset ratkaisut viimeisimpien tieteellisten tutkimusten avulla.',
        'Tutkimus toteutettiin suorittamalla kattava kirjallisuuskatsaus aiheesta: lohkoketjuteknologia toimitusketjun hallinnassa. Tutkimuksen avulla löydettiin datan jakamisen suurimmat haasteet, sekä viitekehyksiä, joissa esitettiin ratkaisuja haasteisiin hyödyntämällä lohkoketjuteknologiaa. Työ suoritettiin vertailemalla läpi käytyjen tutkimuksen löytämiä ongelmia ja ratkaisuja. Vertailun avulla päästiin ymmärrykseen tämänhetkisistä ongelmista, sekä siitä minkälaista jatkotutkimusta tai muuta kehitystä ongelmien ratkaisu vaatii. Viitekehyksiä vertailemalla saatiin selville eri ratkaisujen vahvuudet ja heikkoudet, sekä niiden sopivuus erilaisissa tilanteissa ja olosuhteissa.',
        'Kirjallisuuskatsauksen avulla saatiin selville lohkoketjuperusteisia ratkaisuja datan jakamisen kriittisimpiin ongelmiin. Neljä keskeistä esiin raportin aineistoista, älysopimus, kryptografisten avainten luonti ja valinta teknologiat, lohkoketjualustat sekä datan arvon määrittely mekanismi. Ratkaisuja käydään läpi ja verrataan toisiinsa viiden eri datan jakamisen haasteen kannalta, datan jakamisen turvallisuus, jakajien välinen luottamus, datan arvon ja hinnan määrittely, datan läpinäkyvyys ja jäljitettävyys, sekä datan jakamisen tehostaminen. Ratkaisut erosivat toisistaan sen perusteella, mihin datan jakamisen ongelmiin niissä keskityttiin, sekä minkälaiseen toimitusketjuun ratkaisua implementoitiin. Dataan, sekä sen jakamiseen liittyvät ongelmat ovat eri näkökulmista katsottuna lohkoketju teknologian suurimpia haasteita, joihin tämä raportti pyrkii etsimään ratkaisuja.',
        'Lohkoketjuteknologia on vielä melko uusi teknologia toimitusketjuissa, mikä tarkoittaa sitä, että sen implementointia vaikeuttaa erilaiset ongelmat. Sidosryhmien välisen luottamuksen puute, sekä lainsäädännön puute datan jakamisessa sekä puutteellinen teknologinen standardi lohkoketjuteknologian saralla ovat merkittävimpiä rajoituksia, jotka täytyy ratkaista.',
      ],
      readAbstract: 'Lue koko tiivistelmä',
      showLess: 'Näytä vähemmän',
      downloadPdf: 'Lataa tutkielma (PDF)',
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
