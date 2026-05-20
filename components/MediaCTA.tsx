import styles from './MediaCTA.module.css'

export default function MediaCTA() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.glow} />
          <div className={styles.text}>
            <h3>Media inquiries</h3>
            <p>Reporters, analysts, podcasters — get in touch.</p>
          </div>
          <a href="mailto:press@retailo.co" className="btn-orange">
            Contact us →
          </a>
        </div>
      </div>
    </section>
  )
}
