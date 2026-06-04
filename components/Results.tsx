import styles from './Results.module.css'

export default function Results() {
  // Figures grounded in Retailo's real operating history.
  // Labelled conservatively (30K+, 100K+) since the public figures are from
  // the marketplace era and are floors, not ceilings. Update when newer data lands.
  const results = [
    {
      num: '30K',
      suffix: '+',
      label: 'Retailers served across our platform',
    },
    {
      num: '100K',
      suffix: '+',
      label: 'Orders processed every month at scale',
    },
    {
      num: '$53',
      suffix: 'M',
      label: 'Raised from global investors',
    },
    {
      num: '3',
      suffix: '+',
      label: 'Countries with live operations',
    },
  ]

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="s-eyebrow">
            <span className="s-eyebrow-dot" />
            Proven at scale
          </div>
          <h2 className="s-title">
            We&apos;ve built at scale,<br /><em>not just advised on it.</em>
          </h2>
          <p className="s-desc">
            Before we became your technology partner, we ran the operations
            ourselves. Every system we ship is informed by what it takes to
            run at real volume, in real markets.
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
