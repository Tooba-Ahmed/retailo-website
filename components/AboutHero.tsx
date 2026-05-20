import styles from './AboutHero.module.css'

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className="s-eyebrow">
        <span className="s-eyebrow-dot" />
        About Retailo
      </div>
      <h1 className={styles.h1}>
        Supercharging<br /><em>retail</em> across MENAP.
      </h1>
      <p className={styles.sub}>
        Through our high-powered platforms and data-driven teams, we're transforming
        how retail operates across the Middle East, North Africa, and Pakistan.
      </p>
    </section>
  )
}
