import styles from './Marquee.module.css'

const brands = [
  'Unilever', 'Nestlé', 'P&G', 'Coca-Cola', 'PepsiCo',
  'Henkel', 'Reckitt', 'Colgate', 'Mondelēz', 'Ferrero',
]

export default function Marquee() {
  // Duplicate for seamless infinite loop
  const items = [...brands, ...brands]

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {items.map((brand, i) => (
          <span key={i} className={styles.item}>
            {brand}
          </span>
        ))}
      </div>
    </div>
  )
}
