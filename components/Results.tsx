import styles from './Results.module.css'

export default function Results() {
  const results = [
    { num: '>94', suffix: '%', label: 'On-time delivery rate across the network' },
    { num: '30', suffix: '%', label: 'Reduction in order processing time' },
    { num: '20', suffix: '%', label: 'Reduction in supply chain costs' },
    { num: '2', suffix: '×', label: 'Increase in retailer reorder frequency' },
  ]

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="s-eyebrow">
            <span className="s-eyebrow-dot" />
            Results, delivered
          </div>
          <h2 className="s-title">
            Numbers that<br /><em>move the business.</em>
          </h2>
          <p className="s-desc">
            Consistent performance improvements by transforming retail operations
            as a single connected system — not isolated tools.
          </p>
        </div>

        <div className={styles.grid}>
          {results.map(r => (
            <div key={r.label} className={styles.cell}>
              <div className={styles.num}>
                {r.num}<span>{r.suffix}</span>
              </div>
              <div className={styles.label}>{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
