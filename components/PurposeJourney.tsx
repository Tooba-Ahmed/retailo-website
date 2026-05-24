import styles from './PurposeJourney.module.css'

export default function PurposeJourney() {
  const journey = [
    {
      year: '2018',
      title: 'Founded',
      text: 'Three co-founders started Retailo to fix how goods move through MENAP — starting in Pakistan, building from the ground up.',
    },
    {
      year: '2021',
      title: 'Regional expansion',
      text: 'Backed by leading global investors to scale operations into Saudi Arabia and the UAE.',
    },
    {
      year: '2023',
      title: 'Network at scale',
      // PLACEHOLDER: replace milestone description with verified figure/event
      text: 'Built one of MENAP\'s largest retail distribution networks — [X] orders processed, [X] communities served.',
    },
    {
      year: '2025',
      title: 'Retailo Technologies',
      text: 'Launched the enterprise chapter: taking 7 years of operational experience and turning it into SaaS, AI consulting, and technology services for brands and distributors.',
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h2 className={styles.h2}>Our <em>purpose.</em></h2>
        <p>
          To give brands and distributors across MENAP the technology to run
          faster, leaner, and more connected supply chains.
        </p>
        <p>
          We spent years operating inside the problem — running distribution
          networks, managing field sales, processing millions of orders. That
          experience is the foundation everything we build is built on.
        </p>
      </div>

      <div className={styles.card}>
        {journey.map(j => (
          <div key={j.year} className={styles.step}>
            <div className={styles.year}>{j.year}</div>
            <div className={styles.detail}>
              <strong>{j.title}</strong>
              {j.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
