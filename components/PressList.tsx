import styles from './PressList.module.css'

const pressData = [
  {
    year: '2025',
    items: [
      { date: 'May 2025', publication: 'Arabian Business', headline: 'Retailo launches enterprise SaaS to digitize MENAP supply chains' },
      { date: 'Apr 2025', publication: 'TechCrunch', headline: 'Retailo pivots to enterprise as MENAP retail digitization accelerates' },
      { date: 'Mar 2025', publication: 'Forbes Middle East', headline: '500K+ retailers now enabled on Retailo — what comes next' },
    ],
  },
  {
    year: '2024',
    items: [
      { date: 'Nov 2024', publication: 'Wamda', headline: 'How Retailo is rewiring the MENAP retail supply chain' },
      { date: 'Sep 2024', publication: 'MAGNiTT', headline: 'Retailo named in Top 100 MENAP Startups to Watch' },
      { date: 'Jul 2024', publication: 'Bloomberg', headline: 'Retailo expands its B2B marketplace across Saudi Arabia and UAE' },
      { date: 'Feb 2024', publication: 'Reuters', headline: 'Retailo announces Series B funding to scale supply chain platform' },
    ],
  },
  {
    year: '2023',
    items: [
      { date: 'Oct 2023', publication: 'Khaleej Times', headline: "Inside Retailo's mission to digitize traditional trade in MENAP" },
      { date: 'May 2023', publication: 'Crunchbase News', headline: 'Retailo raises Series A to bring tech to MENAP retailers' },
    ],
  },
]

export default function PressList() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>In the press</div>

        {pressData.map(group => (
          <div key={group.year} className={styles.yearBlock}>
            <div className={styles.yearHeader}>
              <div className={styles.yearLabel}>{group.year}</div>
              <div className={styles.yearCount}>{group.items.length} mentions</div>
            </div>

            {group.items.map(item => (
              <a key={item.headline} href="#" className={styles.item}>
                <div className={styles.date}>{item.date}</div>
                <div className={styles.publication}>{item.publication}</div>
                <div className={styles.headline}>{item.headline}</div>
                <div className={styles.arrow}>→</div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
