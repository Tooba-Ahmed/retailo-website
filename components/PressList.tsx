import styles from './PressList.module.css'

// PLACEHOLDER SECTION
// All press items below are placeholders.
// Replace with real, verifiable press coverage before publishing.
// Each item needs: real date, real publication name, real headline, real URL.
// If no press exists yet, hide this section or show an empty state.

const pressData = [
  {
    year: '2025',
    items: [
      {
        date: '[Month 2025]',
        publication: '[Publication name]',
        headline: '[Replace with real headline from a real article]',
      },
      {
        date: '[Month 2025]',
        publication: '[Publication name]',
        headline: '[Replace with real headline from a real article]',
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        date: '[Month 2024]',
        publication: '[Publication name]',
        headline: '[Replace with real headline from a real article]',
      },
      {
        date: '[Month 2024]',
        publication: '[Publication name]',
        headline: '[Replace with real headline from a real article]',
      },
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

            {group.items.map((item, i) => (
              <a key={i} href="#" className={styles.item}>
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
