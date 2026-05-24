import styles from './Founders.module.css'

export default function Founders() {
  const founders = [
    { initials: 'TA', name: 'Talha Ansari', role: 'Co-Founder', linkedin: '#' },
    { initials: 'MN', name: 'Muhammad Nowkhaiz', role: 'Co-Founder', linkedin: '#' },
    { initials: 'WA', name: 'Wahaj Ahmed', role: 'Co-Founder', linkedin: '#' },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className="s-eyebrow" style={{ justifyContent: 'center' }}>
          <span className="s-eyebrow-dot" />
          Our cofounders
        </div>
        <p className="s-desc" style={{ margin: '0 auto' }}>
          Three operators who spent years running retail at scale across MENAP
          before building the technology to do it better.
        </p>
      </div>

      <div className={styles.grid}>
        {founders.map(f => (
          <div key={f.name} className={styles.card}>
            <div className={styles.imgWrap}>
              <div className={styles.initials}>{f.initials}</div>
            </div>
            <div className={styles.info}>
              <div className={styles.role}>{f.role}</div>
              <div className={styles.name}>{f.name}</div>
              <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
                View on LinkedIn →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
