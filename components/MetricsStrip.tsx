import styles from './MetricsStrip.module.css'

export default function MetricsStrip() {
  const metrics = [
    { num: '100', suffix: '+', label: 'Communities served' },
    { num: '500', suffix: 'K+', label: 'Retailers enabled' },
    { num: '3', suffix: 'M+', label: 'Orders received' },
  ]

  return (
    <section className={styles.strip}>
      <div className={styles.line} />
      <div className={styles.grid}>
        {metrics.map(m => (
          <div key={m.label} className={styles.node}>
            <div className={styles.num}>
              {m.num}<span>{m.suffix}</span>
            </div>
            <div className={styles.label}>{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
