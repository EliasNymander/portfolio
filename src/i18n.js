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
        "I'm a master's student in Information Systems Science at the University of Vaasa, completing my degree in autumn 2026, with a Bachelor of Science in Economics behind me. My studies have covered the fundamentals of IT infrastructure, data management, and systems integration, and I've paired that with hands-on experience across large corporations.",
        "Working in various roles at big companies running enterprise systems like SAP has given me a strong user-level understanding of ERP systems and a real feel for how complex enterprise IT infrastructure actually is. I've relied on these systems day to day, which I believe makes me well placed to help build and improve them rather than just operate them. In my corporate roles I also proactively built long-term automation solutions using UiPath and Excel, streamlining operations that had been slow and manual.",
        "On the technical side, I'm comfortable in the Windows environment and Microsoft Office, work regularly with analytical tools like Power BI and SPSS, and know my way around ERP systems including SAP. I'm familiar with the fundamentals of programming (Python, Java, SQL) and have an academic background in data analytics, using SPSS, SQL, Excel, and Power BI to analyze data.",
        "Alongside my studies I've worked directly with customers, both through a customer service background and by building websites for clients in my own entrepreneurial work — experience that sharpened my problem-solving and my ability to turn client needs into working solutions.",
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
        'Machine learning has become the dominant approach to demand forecasting in supply chain management, and how well a learned model performs depends on the data it is trained on.',
      mscThesisAbstract: [
        'Machine learning has become the dominant approach to demand forecasting in supply chain management, and how well a learned model performs depends on the data it is trained on. Accurate forecasts matter because the errors are costly. A forecast that runs too high leaves capital tied up in stock that does not sell, and one that runs too low empties shelves and loses sales. The data that supply chains generate are often difficult to work with. Demand is intermittent, master data is fragmented, and sources disagree. Data quality is still treated loosely in the forecasting literature. The problem is named often, but the specific conditions that constrain a model are rarely measured. This gap motivates the study.',
        'The study is a systematic literature review carried out as a best-fit framework synthesis. The method codes empirical evidence against an a priori framework and extends that framework only where the evidence requires it. The framework chosen organises fifteen dimensions of data fitness into four categories and is used here as a coding instrument rather than as a theoretical lens. The literature was searched and screened in line with recognised reporting standards, leaving a small corpus of empirical papers on machine learning demand forecasting across pharmaceutical, retail, automotive, and spare-parts settings. Each paper was coded against the framework’s dimensions to determine whether a data condition was mentioned only in passing or engaged substantively as a barrier to forecasting performance.',
        'A single primary barrier was identified. Of the fifteen dimensions, only the appropriate amount of data qualified, the question of whether enough of the right data is available for a model to learn from. The dimensions expected to dominate, among them completeness and accuracy, did not qualify. A consistent gap was found between the data problems the field most often names and those it most often measures.',
        'From this finding, a practical artefact is developed: the AI-SCM Data Quality Requirements Matrix, which links each data quality dimension to the forecasting failure it produces. The matrix is intended for assessing data readiness before an AI forecasting system is deployed, so that the conditions most likely to limit a forecast can be checked in advance rather than diagnosed after deployment. The thesis concludes that the field’s attention sits with the data problems it names, not with the conditions shown to constrain forecasting performance.',
      ],
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
        'Olen tietojärjestelmätieteen maisteriopiskelija Vaasan yliopistosta ja valmistun syksyllä 2026. Taustallani on jo kauppatieteiden kandidaatin tutkinto. Opinnoissani olen perehtynyt IT-infrastruktuurin, tiedonhallinnan ja järjestelmäintegraatioiden perusteisiin, ja olen täydentänyt tätä käytännön kokemuksella suurissa yrityksissä.',
        'Työskentely erilaisissa rooleissa suurissa yrityksissä, jotka käyttävät SAP:in kaltaisia toiminnanohjausjärjestelmiä, on antanut minulle vahvan käyttäjätason ymmärryksen ERP-järjestelmistä sekä todellisen käsityksen siitä, miten monimutkainen yritysten IT-infrastruktuuri todellisuudessa on. Olen käyttänyt näitä järjestelmiä päivittäin, minkä uskon antavan minulle hyvät valmiudet niiden rakentamiseen ja kehittämiseen, en pelkästään niiden käyttämiseen. Aiemmissa työtehtävissäni rakensin myös oma-aloitteisesti pitkäjänteisiä automaatioratkaisuja UiPathin ja Excelin avulla ja tehostin näin aiemmin hitaita ja manuaalisia prosesseja.',
        'Teknisellä puolella toimin sujuvasti Windows-ympäristössä ja Microsoft Office -ohjelmistoilla, työskentelen säännöllisesti analytiikkatyökalujen kuten Power BI:n ja SPSS:n parissa ja tunnen toiminnanohjausjärjestelmät, mukaan lukien SAP. Minulla on hallussa ohjelmoinnin perusteet (Python, Java, SQL) sekä akateeminen tausta data-analytiikassa, jossa olen hyödyntänyt SPSS:ää, SQL:ää, Exceliä ja Power BI:tä datan analysointiin.',
        'Opintojeni ohella olen työskennellyt suoraan asiakkaiden kanssa sekä asiakaspalvelutaustani että oman yritystoimintani kautta, jossa rakensin verkkosivuja asiakkaille. Tämä kokemus on kehittänyt ongelmanratkaisutaitojani ja kykyäni muuttaa asiakkaiden tarpeet toimiviksi ratkaisuiksi.',
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
        'Koneoppimisesta on tullut hallitseva lähestymistapa kysynnän ennustamiseen toimitusketjun hallinnassa, ja se, kuinka hyvin opetettu malli suoriutuu, riippuu datasta, jolla se on opetettu.',
      mscThesisAbstract: [
        'Koneoppimisesta on tullut hallitseva lähestymistapa kysynnän ennustamiseen toimitusketjun hallinnassa, ja se, kuinka hyvin opetettu malli suoriutuu, riippuu datasta, jolla se on opetettu. Tarkat ennusteet ovat tärkeitä, koska virheet ovat kalliita. Liian korkea ennuste sitoo pääomaa varastoon, joka ei käy kaupaksi, ja liian matala ennuste tyhjentää hyllyt ja johtaa menetettyihin myynteihin. Toimitusketjujen tuottama data on kuitenkin usein vaikeaa käsitellä. Kysyntä on katkonaista, perustiedot ovat hajanaisia ja lähteet ovat keskenään ristiriidassa. Datan laatua käsitellään ennustamiskirjallisuudessa silti löyhästi. Ongelma mainitaan usein, mutta niitä erityisiä olosuhteita, jotka rajoittavat mallia, mitataan harvoin. Tämä aukko motivoi tutkimusta.',
        'Tutkimus on systemaattinen kirjallisuuskatsaus, joka on toteutettu parhaiten sopivan viitekehyssynteesin (best-fit framework synthesis) menetelmällä. Menetelmä koodaa empiiristä aineistoa ennalta valittua viitekehystä vasten ja laajentaa viitekehystä vain siellä, missä aineisto sitä edellyttää. Valittu viitekehys jäsentää datan käyttökelpoisuuden viisitoista ulottuvuutta neljään kategoriaan, ja sitä käytetään tässä koodausvälineenä eikä teoreettisena linssinä. Kirjallisuus haettiin ja seulottiin tunnustettujen raportointistandardien mukaisesti, jolloin jäljelle jäi pieni joukko empiirisiä artikkeleita koneoppimispohjaisesta kysynnän ennustamisesta lääke-, vähittäiskaupan, autoteollisuuden ja varaosa-alan konteksteissa. Jokainen artikkeli koodattiin viitekehyksen ulottuvuuksia vasten sen määrittämiseksi, mainittiinko datan ominaisuus vain ohimennen vai käsiteltiinkö sitä olennaisesti ennustetarkkuutta rajoittavana esteenä.',
        'Tutkimuksessa tunnistettiin yksi ensisijainen este. Viidestätoista ulottuvuudesta vain datan riittävä määrä täytti kriteerit, eli kysymys siitä, onko oikeaa dataa saatavilla riittävästi, jotta malli voi oppia siitä. Ne ulottuvuudet, joiden odotettiin nousevan hallitseviksi, kuten täydellisyys ja tarkkuus, eivät täyttäneet kriteerejä. Havaittiin johdonmukainen ero niiden data-ongelmien välillä, jotka ala useimmin nimeää, ja niiden, joita se useimmin mittaa.',
        'Tämän havainnon pohjalta kehitetään käytännön työkalu: tekoälyn ja toimitusketjun datan laadun vaatimusten matriisi (AI-SCM Data Quality Requirements Matrix), joka yhdistää kunkin datan laadun ulottuvuuden siihen ennustevirheeseen, jonka se aiheuttaa. Työkalu on tarkoitettu datavalmiuden arviointiin ennen tekoälypohjaisen ennustejärjestelmän käyttöönottoa, jotta ennustetta todennäköisimmin rajoittavat olosuhteet voidaan tarkistaa etukäteen sen sijaan, että ne todettaisiin vasta käyttöönoton jälkeen. Tutkielman johtopäätös on, että alan huomio kohdistuu niihin data-ongelmiin, jotka se nimeää, eikä niihin olosuhteisiin, joiden on osoitettu rajoittavan ennustetarkkuutta.',
      ],
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
