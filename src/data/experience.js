// Work experience, most recent first. `period.en`/`period.fi` differ only in
// how "present" is expressed, so the timeline stays translated end to end.
//
// `periods` (Wärtsilä only) breaks the overall span into the actual
// alternating full-time/part-time stretches, shown when the row is expanded.
// `description` is the full write-up shown when the row is expanded;
// `bullets` stay visible at all times as the quick-scan summary.

export const experience = [
  {
    id: 'wartsila-delivery-coordinator',
    role: { en: 'Delivery Coordinator', fi: 'Delivery Coordinator' },
    company: 'Wärtsilä Marine',
    period: { en: '06/2024 – Present', fi: '06/2024 – nyt' },
    periods: [
      { range: { en: '06/2024 – 09/2024', fi: '06/2024 – 09/2024' }, type: { en: 'Full-time', fi: 'Kokoaikainen' } },
      { range: { en: '10/2024 – 04/2025', fi: '10/2024 – 04/2025' }, type: { en: 'Part-time', fi: 'Osa-aikainen' } },
      { range: { en: '05/2025 – 09/2025', fi: '05/2025 – 09/2025' }, type: { en: 'Full-time', fi: 'Kokoaikainen' } },
      { range: { en: '10/2025 – 04/2026', fi: '10/2025 – 04/2026' }, type: { en: 'Part-time', fi: 'Osa-aikainen' } },
      { range: { en: '05/2026 – Present', fi: '05/2026 – nyt' }, type: { en: 'Full-time', fi: 'Kokoaikainen' } },
    ],
    bullets: {
      en: ['Freight coordination using SAP and TMS', 'Full ownership of export documentation'],
      fi: [
        'Rahtiliikenteen koordinointi SAP:lla ja TMS-järjestelmällä',
        'Vientidokumentaation kokonaisvastuu',
      ],
    },
    description: {
      en: "Responsible for coordinating and ensuring timely delivery and transport for Wärtsilä spare parts shipments from Wärtsilä's centralized Distribution Center in Kampen, Netherlands. I am responsible for coordinating international spare part deliveries from a centralized distribution center, managing transportation bookings, handling export and invoice documentation, and ensuring delivery dates are met by conducting follow-ups on deliveries. I also participate in the development of robotic process automation (RPA) solutions within my department using UiPath. Maritime logistics, including booking of LCL and FCL sea freight shipments. Additionally booking of courier, air freight, and road freight shipments using TMS and SAP. I work daily in English and work with multiple stakeholders like sales and different logistics personnel. I work as a full-time employee during the summers in this role and as a part-time employee during my studies.",
      fi: 'Vastaan Wärtsilän varaosalähetysten koordinoinnista ja niiden toimitusten sekä kuljetusten oikea-aikaisuudesta Wärtsilän keskitetystä jakelukeskuksesta Kampenista, Alankomaista. Vastaan kansainvälisten varaosatoimitusten koordinoinnista keskitetystä jakelukeskuksesta, kuljetusten varaamisesta, vienti- ja laskutusdokumentaation käsittelystä sekä toimituspäivien toteutumisen varmistamisesta seuraamalla toimituksia. Osallistun myös osastoni ohjelmistorobotiikan (RPA) ratkaisujen kehittämiseen UiPathin avulla. Työhön kuuluu merilogistiikkaa, mukaan lukien LCL- ja FCL-merirahtilähetysten varaaminen. Lisäksi varaan kuriiri-, lentorahti- ja tiekuljetuslähetyksiä TMS:n ja SAP:n avulla. Työskentelen päivittäin englanniksi ja teen yhteistyötä useiden sidosryhmien, kuten myynnin ja eri logistiikkahenkilöstön, kanssa. Toimin tässä roolissa kesäisin täysipäiväisenä työntekijänä ja opintojeni aikana osa-aikaisena.',
    },
  },
  {
    id: 'dhl-transport-coordinator',
    role: { en: 'Transport Coordinator', fi: 'Transport Coordinator' },
    company: 'DHL Freight',
    period: { en: '05/2023 – 08/2023', fi: '05/2023 – 08/2023' },
    bullets: {
      en: [
        'Dispatch planning',
        'Built an automated Excel tool that reduced manual planning work',
        'Assisted the IT team with new transport coordination systems',
      ],
      fi: [
        'Kuljetusten suunnittelu',
        'Automaattisen Excel-työkalun rakentaminen, joka vähensi manuaalista suunnittelutyötä',
        'IT-tiimin avustaminen uusien kuljetuskoordinointijärjestelmien käyttöönotossa',
      ],
    },
    description: {
      en: 'Transport coordination of the Finnish DHL Freight’s full load transports and capital region partial goods. Assisting the IT department in the development of the new enterprise resource system. Cooperation with drivers, customer service and other internal departments as well as other transport companies in searching for shipments, keeping up with the schedule and planning future deliveries and pickups. Planning the daily schedules and routes of the drivers and ensuring continuous cooperation between the drivers. Responding to inquiries about the deliveries and pickups, investigating and dealing with complaints, reclamations and other possible issues.',
      fi: 'DHL:n Suomen runkoliikenteen täysikuormien ja pääkaupunkiseudun kappaletavaran ajojärjestely. IT-osaston avustaminen uusien tuotannonohjaus järjestelmien kehityksessä. Yhteistyö kuskien, asiakaspalvelun ja muiden sisäisten osastojen sekä toisten kuljetusyritysten kanssa lähetysten etsimisessä, aikataulun pitämisessä sekä tulevien toimitusten ja suunnitelmien toteutuksessa. Kuskien päivittäisten aikataulujen ja reittien sopiminen sekä kuskien välisen yhteistyön varmistaminen. Ajojärjestelyyn tuleviin kyselyihin vastaaminen, reklamaatioiden ja muiden mahdollisten ongelmien selvittäminen ja hoitaminen.',
    },
  },
  {
    id: 'dhl-customer-service-specialist',
    role: { en: 'Customer Service Specialist', fi: 'Customer Service Specialist' },
    company: 'DHL Freight',
    period: { en: '04/2022 – 08/2022', fi: '04/2022 – 08/2022' },
    bullets: {
      en: [
        'Multichannel customer support (phone and email)',
        'Trained new employees',
        'Wrote the onboarding guide',
      ],
      fi: [
        'Monikanavainen asiakaspalvelu (puhelin ja sähköposti)',
        'Uusien työntekijöiden perehdyttäminen',
        'Perehdytysoppaan kirjoittaminen',
      ],
    },
    description: {
      en: 'Handling customer inquiries and responding to shipment tracking and price inquiries using the customer communication system and telephone as tools. Receiving and opening transport orders for export and import shipments in the system. DHL service guidance, marketing and sales of value-added services. Possible escalation of inquiries and orders to other work departments. Possible training of new employees. Checking information on transport orders and making sure dangerous substance documents and other documents are filled out correctly. General customer service by phone and email. Communication with different working groups, stakeholders and colleagues in connection with lost shipments and other problems.',
      fi: 'Asiakaskyselyiden hoito ja lähetysten seuranta- ja hintakyselyihin vastaaminen käyttäen työkaluina kommunikointi järjestelmää ja puhelinta. Vienti ja tuonti lähetyksien kuljetustilausten vastaanotto ja avaaminen järjestelmään. DHL:n palveluiden opastus, markkinointi ja lisäarvopalveluiden myynti. Kyselyiden sekä tilausten mahdollinen eskalointi muille osastoille ja sidosryhmille. Uusien työntekijöiden mahdollinen koulutus. Kuljetustilausten tietojen tarkastaminen sekä vaarallisten aineiden ja muiden dokumenttien tarkastaminen. Yleinen asiakaspalvelu puhelimitse ja sähköpostilla. Kommunikointi eri työryhmien, sidosryhmien ja kollegoiden kanssa kadonneiden lähetysten sekä muiden ongelmien yhteydessä.',
    },
  },
  {
    id: 'transval-extra-warehouse-worker',
    role: { en: 'Warehouse Worker', fi: 'Varastotyöntekijä' },
    company: 'Transval Extra Oy',
    period: { en: '03/2021 – 08/2021', fi: '03/2021 – 08/2021' },
    bullets: {
      en: [
        'Sorting incoming and outgoing packages',
        'Assisted forklift and truck drivers, and the occupational safety officer',
      ],
      fi: [
        'Tulevien pakettien syöttäminen sekä lähtevien pakettien lajittelu',
        'Trukki- ja rekkakuskien sekä työturvallisuusvastaavan avustaminen',
      ],
    },
    description: {
      en: "Sorting incoming and outgoing packages. General cleaning in the logistics center, helping forklift and truck drivers in filling trailers and other possible work tasks, as well as assisting the occupational safety officer. Working in the biggest logistical center in Finland, Posti's logistical center in Vantaa.",
      fi: 'Tulevien pakettien syöttäminen sekä lähtevien pakettien lajittelu. Yleinen siivoaminen logistiikkakeskuksessa, trukki- ja rekkakuskien auttaminen trailereiden täytössä sekä muissa mahdollisissa työtehtävissä, sekä työturvallisuus vastaavan avustaminen. Työskentely Suomen suurimmassa logistiikkakeskuksessa, Postin logistiikkakeskuksessa Vantaalla.',
    },
  },
  {
    id: 'boost-your-trade',
    role: { en: 'Co-Founder & Technical Lead', fi: 'Co-Founder & Technical Lead' },
    company: 'Boost Your Trade',
    period: { en: '2025 (ended)', fi: '2025 (päättynyt)' },
    bullets: {
      en: [
        'AI-assisted websites for small businesses',
        'Three client sites shipped',
        'SEO and frontend troubleshooting',
      ],
      fi: [
        'Tekoälyavusteisia verkkosivuja pienyrityksille',
        'Kolme asiakassivustoa toimitettu',
        'SEO- ja frontend-ongelmanratkaisu',
      ],
    },
    description: {
      en: 'I co-founded Boost Your Trade, a two-person startup building AI-assisted websites for small businesses and tradespeople (such as plumbing companies) in New Zealand. I led the technical side of the business: deploying client websites, resolving frontend build issues (npm, file structure, paths), and improving website SEO and performance tracking with Google Analytics. We shipped three client sites before winding the company down. Throughout, I used AI tools to help build and develop the sites, and the work sharpened my problem-solving and my ability to turn client needs into working technical solutions.',
      fi: 'Perustin Boost Your Traden, kahden hengen startupin, joka rakensi tekoälyavusteisia verkkosivuja pienyrityksille ja käsityöläisyrittäjille (kuten putkiyhtiöille) Uudessa-Seelannissa. Vastasin yrityksen teknisestä puolesta: asiakkaiden verkkosivujen julkaisusta, frontend-käännösvirheiden (npm, tiedostorakenne, polut) ratkaisemisesta sekä verkkosivujen hakukoneoptimoinnista ja suorituskyvyn seurannasta Google Analyticsin avulla. Julkaisimme kolme asiakassivustoa ennen toiminnan lopettamista. Hyödynsin työssä tekoälytyökaluja sivustojen rakentamisessa ja kehittämisessä, ja työ kehitti ongelmanratkaisutaitojani sekä kykyäni muuttaa asiakkaiden tarpeet toimiviksi teknisiksi ratkaisuiksi.',
    },
  },
]
