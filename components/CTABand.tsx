import styles from './CTABand.module.css'

interface Props {
  headline?: React.ReactNode
  subline?: string
  primaryLabel?: string
  secondaryLabel?: string
}

export default function CTABand({
  headline = <>The most powerful platform<br />for <span>retail in MENAP.</span></>,
  subline = 'Book a 30-minute demo — no commitment, no sales pressure, just the platform.',
  primaryLabel = 'Book a demo →',
  secondaryLabel = 'Contact sales',
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
