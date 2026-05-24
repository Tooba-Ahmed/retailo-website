import styles from './AboutHero.module.css'

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className="s-eyebrow">
        <span className="s-eyebrow-dot" />
        About Retailo
      </div>
      <h1 className={styles.h1}>
        Built in the field.<br /><em>Built for it too.</em>
      </h1>
      <p className={styles.sub}>
        We didn't start as a software company. We ran one of MENAP's largest
        retail distribution networks for seven years — and built the technology
        because nothing on the market was good enough.
      </p>
    </section>
  )
}
