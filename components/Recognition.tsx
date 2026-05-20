import styles from './Recognition.module.css'

export default function Recognition() {
  const items = [
    {
      badge: 'G2\nLEADER',
      badgeStyle: 'dark',
      tag: 'G2 Leader · Retail SaaS',
      title: 'Recognized in MENAP retail tech',
      desc: 'Top-rated by retailers and FMCG operators across the region based on satisfaction and outcomes.',
      link: 'See on G2 →',
    },
    {
      badge: 'SAUDI\nFAST 50',
      badgeStyle: 'orange',
      tag: 'Award · 2024',
      title: 'Saudi Fast 50',
      desc: "Named one of Saudi Arabia's fastest growing technology companies by Deloitte.",
      link: 'Read announcement →',
    },
  ]

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.label}>Recognition</div>
        <div className={styles.grid}>
          {items.map(item => (
            <div key={item.title} className={styles.card}>
              <div className={`${styles.badge} ${styles[item.badgeStyle]}`}>
                {item.badge.split('\n').map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
              <div className={styles.body}>
                <div className={styles.tag}>{item.tag}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#" className={styles.link}>{item.link}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
