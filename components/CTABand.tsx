import styles from './CTABand.module.css'

interface Props {
  headline?: React.ReactNode
  subline?: string
  primaryLabel?: string
  secondaryLabel?: string
}

export default function CTABand({
  headline = <>The infrastructure for<br /><span>MENAP retail.</span></>,
  subline = 'Talk to us about your supply chain, your AI roadmap, or your next product. We\'ve built it before.',
  primaryLabel = 'Book a demo →',
  secondaryLabel = 'Talk to sales',
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
