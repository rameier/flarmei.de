import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Werdegang - flarmei.de',
  description:
    'Beruflicher und ehrenamtlicher Werdegang von Ralf Meier. Softwareentwicklung, CPQ, Product Management und eSports-Vereinsarbeit.',
}

export default function WerdeganPage() {
  return (
    <>
      <style>{`
        .cv-section { margin-bottom: var(--spacing-lg); }
        .cv-entry { margin-bottom: var(--spacing-lg); }
        .cv-entry h3 { margin-top: 0; margin-bottom: var(--spacing-xs); }
        .cv-meta { color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: var(--spacing-sm); font-family: var(--font-sans); }
        .cv-tech { color: var(--color-accent); font-size: 0.8rem; margin-top: var(--spacing-sm); font-family: var(--font-sans); }
        .cv-skills div { margin-bottom: var(--spacing-md); }
        .cv-skills h3 { margin-top: 0; margin-bottom: var(--spacing-xs); }
        .cv-skills p { color: var(--color-text-muted); font-size: 0.85rem; }
      `}</style>

      <h1>Werdegang</h1>

      <section className="cv-section">
        <p>
          Technikbegeisterter Softwareentwickler mit Fokus auf moderne Webtechnologien, CPQ-Systeme
          und Produktentwicklung. Ich verbinde Softwareentwicklung und Design mit starkem
          ehrenamtlichem Engagement im eSports-Bereich. Meine Schwerpunkte: saubere Strukturen,
          transparente Kommunikation, Community-Aufbau und nachhaltige Organisationsentwicklung.
        </p>
      </section>

      <hr />

      <section className="cv-section">
        <h2>Berufserfahrung</h2>

        <div className="cv-entry">
          <h3>Softwareentwickler</h3>
          <p className="cv-meta">encoway GmbH &middot; Bremen &middot; seit Februar 2022</p>
          <ul>
            <li>Mitwirkung an Konzeption und Umsetzung einer neuen React/TypeScript-basierten UI im Rahmen der Produktentwicklung für CPQ-Software</li>
            <li>Entwicklung und Pflege von CPQ-Lösungen</li>
            <li>Enge Zusammenarbeit mit Produkt-, Design- und Projektteams</li>
          </ul>
          <p className="cv-tech">TypeScript &middot; React &middot; Java &middot; Spring Boot &middot; Maven &middot; CPQ Software</p>
        </div>

        <div className="cv-entry">
          <h3>Werkstudent Softwareentwicklung</h3>
          <p className="cv-meta">newport it GmbH & Co. KG &middot; Bremen &middot; Dez 2019 – Nov 2021</p>
          <ul>
            <li>Support und Weiterentwicklung einer Mobile-News-App in ReactJS</li>
            <li>Pflege und Erweiterung von WordPress-Websites und Plugins</li>
            <li>Entwicklung in PHP</li>
          </ul>
          <p className="cv-tech">ReactJS &middot; PHP &middot; WordPress</p>
        </div>

        <div className="cv-entry">
          <h3>Studentischer Tutor</h3>
          <p className="cv-meta">Universität Bremen &middot; Okt 2018 – März 2019</p>
          <ul>
            <li>Tutor im Modul <em>Praktische Informatik 1b</em></li>
            <li>Unterstützung von Studierenden bei Übungsaufgaben und Grundlagen der Programmierung</li>
          </ul>
        </div>

        <div className="cv-entry">
          <h3>Werkstudent Software Development</h3>
          <p className="cv-meta">encoway GmbH &middot; Bremen &middot; Apr – Sep 2017</p>
          <ul>
            <li>Mitarbeit im Bereich Softwareentwicklung</li>
            <li>Erste praktische Erfahrungen in professionellen Entwicklungsprozessen</li>
          </ul>
        </div>
      </section>

      <hr />

      <section className="cv-section">
        <h2>Ehrenamt</h2>

        <div className="cv-entry">
          <h3>Stellvertretender Vorstandsvorsitzender</h3>
          <p className="cv-meta">Bremen eSports e.V. &middot; seit Februar 2025</p>
          <ul>
            <li>Strategische und organisatorische Mitverantwortung für den Verein</li>
            <li>Weiterentwicklung der Vereinsstrukturen und -vision</li>
          </ul>
        </div>

        <div className="cv-entry">
          <h3>Berater / Organisationsmitglied</h3>
          <p className="cv-meta">Bremen eSports e.V. &middot; seit Mai 2023</p>
          <ul>
            <li>Arbeitsgruppe Sponsoring & Förderung</li>
            <li>Arbeitsgruppe League of Legends Community</li>
          </ul>
        </div>

        <div className="cv-entry">
          <h3>Vorstandsmitglied Jugendwart</h3>
          <p className="cv-meta">Bremen eSports e.V. &middot; März 2021 – Apr 2023</p>
        </div>

        <div className="cv-entry">
          <h3>Leiter des Hochschulbereichs</h3>
          <p className="cv-meta">Bremen eSports e.V. &middot; Mai 2020 – Apr 2023</p>
          <ul>
            <li>Verwaltung der sozialen Kanäle des Hochschulbereichs</li>
            <li>Organisation von Liga- und Turnierübertragungen auf Twitch</li>
            <li>Mitgliederakquise und Vermarktung</li>
            <li>Verwaltung der Kommunikationswege (insb. Discord)</li>
            <li>Teammanagement</li>
          </ul>
        </div>
      </section>

      <hr />

      <section className="cv-section">
        <h2>Gremienarbeit</h2>

        <div className="cv-entry">
          <h3>Studiengangs-Ausschuss Wirtschaftsinformatik</h3>
          <p className="cv-meta">Universität Bremen &middot; Okt 2016 – Juni 2021</p>
          <ul>
            <li>Ansprechpartner für Studierende bei organisatorischen und prüfungsbezogenen Themen</li>
            <li>Mitarbeit bei der Organisation von Veranstaltungen</li>
            <li>Vermittlung zwischen Lehrenden und Studierenden</li>
          </ul>
        </div>

        <div className="cv-entry">
          <h3>Studentische Vertretung</h3>
          <p className="cv-meta">Gemeinsam beschließender Ausschuss & Prüfungsausschuss Wirtschaftsinformatik &middot; Okt 2016 – Juni 2021</p>
        </div>
      </section>

      <hr />

      <section className="cv-section">
        <h2>Ausbildung</h2>

        <div className="cv-entry">
          <h3>B.Sc. Wirtschaftsinformatik</h3>
          <p className="cv-meta">Universität Bremen &middot; 2016 – 2022</p>
          <p>Schwerpunkt: Gründungsmanagement & E-Business</p>
        </div>

        <div className="cv-entry">
          <h3>Allgemeine Hochschulreife (Informationstechnologie)</h3>
          <p className="cv-meta">Technisches Bildungszentrum Mitte Bremen &middot; 2013 – 2016</p>
          <p>Leistungskurse: Informationstechnik und Mathematik</p>
        </div>
      </section>

      <hr />

      <section className="cv-section">
        <h2>Kenntnisse</h2>

        <div className="cv-skills">
          <div>
            <h3>Technologien</h3>
            <p>TypeScript &middot; JavaScript &middot; Java &middot; React &middot; Spring Boot &middot; CSS &middot; PHP</p>
          </div>
          <div>
            <h3>Bereiche</h3>
            <p>Frontend &middot; Backend &middot; CPQ Software &middot; Produktentwicklung &middot; eSport-Management &middot; Eventplanung &middot; Öffentlichkeitsarbeit</p>
          </div>
          <div>
            <h3>Sprachen</h3>
            <p>Deutsch (Muttersprache) &middot; Englisch (fließend) &middot; Französisch (Grundkenntnisse)</p>
          </div>
        </div>
      </section>
    </>
  )
}
