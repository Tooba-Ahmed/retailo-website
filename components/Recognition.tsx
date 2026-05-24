import styles from './Recognition.module.css'

// PLACEHOLDER SECTION
// Both recognition items below are placeholders.
// Replace with real, verifiable awards before publishing.
// If no awards exist yet, remove this section from news/page.tsx entirely.

const items = [
  {
    badge: '[ ]',
    badgeStyle: 'dark',
    tag: '[Award name · Year]',
    title: '[Replace with real award or recognition]',
    desc: '[Replace with real credential. Do not publish invented G2/Gartner/Deloitte recognition.]',
    link: '[Link to source] →',
  },
  {
    badge: '[ ]',
    badgeStyle: 'orange',
    tag: '[Award name · Year]',
    title: '[Replace with real award or recognition]',
    desc: '[Replace with real credential. Do not publish invented recognition.]',
    link: '[Link to source] →',
  },
]

export default function Recognition() {
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
