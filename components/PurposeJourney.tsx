import styles from './PurposeJourney.module.css'

export default function PurposeJourney() {
  const journey = [
    { year: '2020', title: 'Founded', text: 'Three co-founders set out to digitize traditional trade across MENAP.' },
    { year: '2021', title: 'Series A', text: 'Backed by leading global VCs to scale across Pakistan, KSA, and UAE.' },
    { year: '2023', title: '500K+ retailers', text: 'Crossed half a million SMEs enabled on the platform.' },
    { year: '2025', title: 'The pivot', text: 'Launched Retailo Technologies — taking 7 years of operational experience and turning it into enterprise SaaS, AI consulting, and technology services.' },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h2 className={styles.h2}>Our <em>purpose.</em></h2>
        <p>To improve the lives of the unserved segments of society through technology.</p>
        <p>We've spent years in the trenches of MENAP retail — building marketplaces, running distribution networks, working alongside the brands and retailers who keep communities running. Now we're turning that operational reality into technology that scales.</p>
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
