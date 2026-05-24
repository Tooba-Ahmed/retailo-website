import styles from './Results.module.css'

export default function Results() {
  // PLACEHOLDERS — replace each [X] with real verified data before launch.
  // These slots are intentionally left blank to avoid publishing false figures.
  const results = [
    {
      num: '7',
      suffix: 'yr',
      label: 'Operating in MENAP retail — longer than any competitor',
      // REAL: founded 2018, 7 years of field operations
    },
    {
      num: '[X]',
      suffix: '+',
      label: 'Brands and distributors on the platform',
      // PLACEHOLDER: replace with real onboarding count
    },
    {
      num: '[X]',
      suffix: '%',
      label: 'Reduction in manual order processing time',
      // PLACEHOLDER: replace with measured client outcome
    },
    {
      num: '[X]',
      suffix: '+',
      label: 'Orders processed through the platform',
      // PLACEHOLDER: replace with real transaction volume
    },
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
            Real operations,<br /><em>measurable outcomes.</em>
          </h2>
          <p className="s-desc">
            Seven years of running one of MENAP&apos;s largest retail networks
            means every feature we build has been stress-tested in the field.
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
