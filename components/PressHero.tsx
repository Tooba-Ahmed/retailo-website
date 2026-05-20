import styles from './PressHero.module.css'

export default function PressHero() {
  return (
    <section className={styles.hero}>
      <div className="s-eyebrow">
        <span className="s-eyebrow-dot" />
        In the spotlight
      </div>
      <h1 className={styles.h1}>
        What&apos;s said<br />about <em>Retailo.</em>
      </h1>
      <p className={styles.sub}>
        Coverage, recognition, product launches, and milestones from the team.
        For media inquiries, write to{' '}
        <a href="mailto:press@retailo.co">press@retailo.co</a>.
      </p>
    </section>
  )
}
