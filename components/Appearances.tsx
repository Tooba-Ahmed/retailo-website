import styles from './Appearances.module.css'

// PLACEHOLDER SECTION
// All appearances below are placeholders.
// Replace with real, verifiable conference appearances before publishing.
// If no appearances exist yet, remove this section from news/page.tsx entirely.

const items = [
  {
    abbr: '??',
    date: '[Year · Conference name]',
    title: '[Replace with real talk title]',
    speaker: '[Speaker name] — [Role], Retailo',
  },
  {
    abbr: '??',
    date: '[Year · Conference name]',
    title: '[Replace with real talk title]',
    speaker: '[Speaker name] — [Role], Retailo',
  },
  {
    abbr: '??',
    date: '[Year · Conference name]',
    title: '[Replace with real talk title]',
    speaker: '[Speaker name] — [Role], Retailo',
  },
  {
    abbr: '??',
    date: '[Year · Conference name]',
    title: '[Replace with real talk title]',
    speaker: '[Speaker name] — [Role], Retailo',
  },
]

export default function Appearances() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>Appearances & talks</div>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
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
