import styles from './Appearances.module.css'

export default function Appearances() {
  const items = [
    { abbr: 'LD', date: '2025 · LEAP Conference', title: 'Digitizing the last mile in emerging markets', speaker: 'Talha Ansari — Co-founder, Retailo' },
    { abbr: 'SC', date: '2024 · Step Conference', title: 'Building enterprise SaaS in MENAP', speaker: 'Wahaj Ahmed — Co-founder, Retailo' },
    { abbr: 'GX', date: '2024 · GITEX Global', title: 'AI for retail and FMCG operators', speaker: 'Muhammad Nowkhaiz — Co-founder, Retailo' },
    { abbr: 'FF', date: '2023 · Future Forward', title: 'The next chapter of MENAP commerce', speaker: 'Retailo founding team' },
  ]

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>Appearances & talks</div>
        <div className={styles.grid}>
          {items.map(item => (
            <div key={item.title} className={styles.card}>
              <div className={styles.thumb}>{item.abbr}</div>
              <div className={styles.body}>
                <div className={styles.date}>{item.date}</div>
                <h4>{item.title}</h4>
                <p>{item.speaker}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
