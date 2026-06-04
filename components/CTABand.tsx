import styles from './CTABand.module.css'

interface Props {
  headline?: React.ReactNode
  subline?: string
  primaryLabel?: string
  secondaryLabel?: string
}

export default function CTABand({
  headline = <>Let&apos;s build<br /><span>what&apos;s next.</span></>,
  subline = 'Bring us a process to automate, a product to build, or a system to fix. We will tell you exactly how we would approach it.',
  primaryLabel = 'Book a consultation →',
  secondaryLabel = 'Talk to the team',
}: Props) {
  return (
    <section className={styles.wrap} id="contact">
      <div className={styles.rings} />
      <div className={styles.glow} />
      <div className={styles.inner}>
        <h2 className={styles.h2}>{headline}</h2>
        <p className={styles.p}>{subline}</p>
        <div className={styles.btns}>
          <a href="#" className="btn-white">{primaryLabel}</a>
          <a href="#" className="btn-dark-ghost">{secondaryLabel}</a>
        </div>
      </div>
    </section>
  )
}
