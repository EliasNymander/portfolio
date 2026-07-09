// Education, most recent first.
//
// `highlights` stay visible at all times as the quick-scan summary.
// `link`, `officialTitle`, `description`, and `courseGroups` are shown when
// the row is expanded. Course names are official course titles and are kept
// as-is (not translated) in both languages, same as tech tags elsewhere.

export const education = [
  {
    id: 'uva-msc',
    institution: 'University of Vaasa',
    degree: {
      en: 'MSc Information Systems (Computing Sciences)',
      fi: 'Filosofian maisteri, tietojärjestelmätiede (tietotekniikka)',
    },
    period: { en: 'Graduating autumn 2026', fi: 'Valmistuu syksyllä 2026' },
    highlights: {
      en: ['System Integrations', 'Systems Engineering', 'Machine Learning', 'Project Portfolio Management', 'Agile'],
      fi: ['Järjestelmäintegraatiot', 'Systeemitekniikka', 'Koneoppiminen', 'Projektisalkun hallinta', 'Ketterät menetelmät'],
    },
    link: {
      en: 'https://www.uwasa.fi/en/education/masters-programmes/computing-sciences',
      fi: 'https://www.uwasa.fi/fi/koulutus/maisteriohjelmat/tietojenkasittelytieteet/tietojarjestelmatiede-ktm',
    },
    officialTitle: {
      en: 'Computing Sciences, Information Systems, Master of Science in Economics and Business Administration',
      fi: 'Tietojenkäsittelytieteet, Tietojärjestelmätiede, kauppatieteiden maisteri',
    },
    description: {
      en: 'In Information Systems Science (ISS) studies, students acquire the skills to utilize information technology to support business operations. Key areas of study include management in the IT sector, such as IT project management and leadership skills, as well as corporate IT governance. Additionally, students can delve into service business and the design and development of IT services, while also considering their usability. Overall, studies in ISS help students develop a vision of their professional role as an information systems designer, developer, and manager (e.g., as a project manager or Chief Information Officer) in an increasingly digitalized society and business landscape. Students also have the opportunity to include energy sector courses in their studies and develop their understanding of digitalization within the energy industry (energy informatics).',
      fi: 'Tietojärjestelmätieteen (tjt) opinnoissa opiskelija saa valmiudet tietotekniikan hyödyntämiseen yrityksen liiketoiminnan tueksi. Opintojen keskeisiä osa-alueita ovat johtaminen IT-alalla kuten IT-projektien hallinta- ja johtamistaidot kuten myös yrityksen tietohallinnon johtaminen. Lisäksi opiskelija voi perehtyä palveluliiketoimintaan ja IT-palvelujen suunnitteluun ja kehittämiseen unohtamatta niiden käytettävyyttä. Kaiken kaikkiaan tjt:ssä opiskelija kehittää itselleen näkemystä siitä mikä on hänen ammatillinen roolinsa alati digitalisoituvassa yhteiskunnassa ja liiketoiminnassa tietojärjestelmien suunnittelijana, kehittäjänä ja erilaisissa johtamistehtävissä (esim. projektipäällikkönä tai tietohallintojohtajana). Opiskelijalla on myös mahdollisuus sisällyttää opintoihinsa energiatoimialaan liittyviä kursseja ja kehittää ymmärrystään energiatoimialan digitalisaatiosta (energy informatics).',
    },
    courseGroups: [
      {
        heading: 'Information Systems — Major Studies',
        courses: [
          'Project Management: Methods, Tools and Applications',
          'Information Systems Project',
          'Project Portfolio Management',
          'Systems Engineering',
          'System Integrations',
          'Management of ICT-function',
        ],
      },
      {
        heading: 'Method Studies',
        courses: ['Decision Analysis', 'Statistical Data Processing (SPSS)'],
      },
      {
        heading: 'Other Studies',
        courses: ['Machine Learning', 'Agile Project Management and Product Development', 'Basic Course in Logistics'],
      },
    ],
  },
  {
    id: 'uva-bsc',
    institution: 'University of Vaasa',
    degree: {
      en: 'BSc Economics and Business Administration, Information Systems major',
      fi: 'Kauppatieteiden kandidaatti, tietojärjestelmätieteen pääaine',
    },
    period: { en: '2025', fi: '2025' },
    highlights: {
      en: ['ERP', 'BI & Data Analytics', 'RPA', 'Databases', 'Erasmus exchange in Madrid (AI, cybersecurity)'],
      fi: ['ERP', 'BI ja data-analytiikka', 'RPA', 'Tietokannat', 'Erasmus-vaihto Madridissa (tekoäly, kyberturvallisuus)'],
    },
    link: {
      en: 'https://www.uwasa.fi/fi/koulutus/kandidaattiohjelmat/tekniikan-kandidaattiohjelma',
      fi: 'https://www.uwasa.fi/fi/koulutus/kandidaattiohjelmat/tekniikan-kandidaattiohjelma',
    },
    officialTitle: {
      en: 'Information Systems, Bachelor of Science (Economics and Business Administration)',
      fi: 'Information Systems, Bachelor of Science (Economics and Business Administration)',
    },
    description: {
      en: "The bachelor's programme in Industrial Management and Information Systems combines economic, operations, and information technology expertise. Most of the bachelor's degree studies are common to all students in the programme, and towards the end of the degree, students specialize in either Information Systems or Industrial Management. This comprehensive educational package provides the skills to work in positions requiring high economic and technological expertise, for example, in energy companies and organizations. Education is designed to provide not only scientific and theoretical skills but also the ability to make decisions and manage tasks, as well as practical expert work. Graduates from the School of Technology and Innovations are highly employable and often find positions in various industrial sectors in planning, expert, research, development, teaching, product development, production, and marketing roles. The role of an Information Systems expert has shifted from a technical implementer to producing comprehensive solutions that make sense for business operations. Thus, the importance of business knowledge alongside good technical skills has grown. Studies in Information Systems combined with business studies provide excellent skills to work as a developer of both information systems and business in various fields. In Information Systems studies, students can specialize in information systems management and design, as well as user experience. The degree provides excellent skills to work in positions requiring both information systems and business expertise. After completing the bachelor's degree, students can continue to a Master's degree in Economics and Business Administration in the Information Systems major.",
      fi: 'Tuotantotalouden ja tietojärjestelmätieteen kandidaattiohjelmassa yhdistyvät taloudellinen, tuotannon ja tietotekninen osaaminen. Suurin osa kandidaatin tutkinnon opinnoista on kaikille ohjelman opiskelijoille yhteisiä, ja tutkinnon loppuvaiheessa opintosuunnan aineopinnoissa opiskelija erikoistuu tietojärjestelmätieteeseen tai tuotantotalouteen. Monipuolinen koulutuskokonaisuus antaa valmiudet toimia korkeaa taloudellista ja teknologista asiantuntemusta soveltavissa tehtävissä, esimerkiksi energia-alan yrityksissä ja organisaatioissa. Koulutus on suunniteltu siten, että se antaa tieteellisten ja teoreettisten valmiuksien lisäksi valmiudet päätöksentekoon ja johtamiseen liittyviin tehtäviin sekä käytännön asiantuntijatyöhön. Tekniikan ja innovaatiojohtamisen akateemisesta yksiköstä valmistuneet työllistyvät erinomaisesti ja he sijoittuvat useimmiten teollisuuden eri aloille suunnittelu-, asiantuntija-, tutkimus-, kehitys-, opetus-, tuotekehitys-, tuotanto- ja markkinointitehtäviin. Tietojärjestelmätieteen asiantuntijan rooli on muuttunut teknisestä toteuttajasta yhä enemmän yritysten liiketoiminnan kannalta järkevien kokonaisratkaisujen tuottamiseen. Tällöin myös liiketoiminnan osaamisen merkitys hyvän teknisen osaamisen rinnalla on kasvanut. Tietojärjestelmätieteen opinnot yhdistettynä kauppatieteiden opintoihin antavat hyvät valmiudet toimia sekä tietojärjestelmätieteen että liiketoiminnan kehittäjänä eri aloilla. Tietojärjestelmätieteen opinnoissa voi suuntautua tietojärjestelmien hallintaan ja suunnitteluun, sekä käyttäjäkokemukseen. Tutkinto antaa hyvät valmiudet toimia monipuolisesti sekä tietojärjestelmätieteen että liiketoiminnan osaamista vaativissa tehtävissä. Kandidaatin tutkinnon jälkeen opiskelija voi jatkaa kauppatieteiden maisteriksi tietojärjestelmätieteen opintosuunnassa.',
    },
    courseGroups: [
      {
        heading: 'Information Systems',
        courses: [
          'Development of Information System',
          'Databases',
          'Object Modelling',
          'Object-Oriented Programming',
          'Operating Systems',
          'Introduction to E-business',
          'Programming',
          "Bachelor's Thesis",
        ],
      },
      {
        heading: 'Enterprise Digitalization module (all graded 4–5)',
        courses: ['Enterprise Resource Planning (ERP)', 'Business Intelligence and Data Analytics', 'Robotic Process Automation (RPA)'],
      },
      {
        heading: 'Industrial Management / Business foundations',
        courses: [
          'The Real Processes of a Company',
          'Basics of Management and Organizations',
          'Project Management',
          'Basic Course in Quality',
          'Introduction to Economics',
          'Principles of Finance',
          'Principles of Marketing',
          'Introduction to Financial Accounting',
          'Business Law and Ethics',
          'Sustainability and Ethics in Business',
        ],
      },
      {
        heading: 'Methods / analytical',
        courses: [
          'Introduction to Statistics',
          'Introduction to Mathematical Economics',
          'Propositional Logic',
          'Discrete Mathematics',
          'Advanced Spreadsheet Systems',
        ],
      },
      {
        heading: 'Exchange semester (Universidad Carlos III de Madrid, Erasmus+)',
        courses: [
          'Artificial Intelligence',
          'Data Protection & Cybersecurity',
          'Critical Thinking and Problem Analysis ("Outside the Box")',
          'Advanced Knowledge of Spreadsheets',
        ],
      },
    ],
  },
]
