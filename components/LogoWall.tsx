import styles from './LogoWall.module.css'

export default function LogoWall() {
  const brands = ['Unilever', 'Nestlé', 'P&G', 'Coca-Cola', 'PepsiCo', 'Henkel']

  return (
    <section className={styles.wall}>
      <div className={styles.inner}>
        <p className={styles.label}>Trusted by global brands operating across MENAP</p>
        <div className={styles.row}>
          {brands.map(b => (
            <div key={b} className={styles.cell}>{b}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
