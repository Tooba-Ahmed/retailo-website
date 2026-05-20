import styles from './Solutions.module.css'

export default function Solutions() {
  return (
    <section className={styles.wrap} id="solutions">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="s-eyebrow">
            <span className="s-eyebrow-dot" />
            What we offer
          </div>
          <h2 className="s-title">
            Three ways we<br /><em>transform retail.</em>
          </h2>
          <p className="s-desc">
            We don't just build software. We bring 7 years of running a MENAP
            marketplace and turn that into technology that works in the field.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.node}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM12 17v4m-4-4h8" />
              </svg>
            </div>
            <div className={styles.label}>
              <span className={styles.labelDot} />01 / Supply Chain SaaS
            </div>
            <h3>End-to-end retail platform</h3>
            <p>Ordering, sales, delivery, planning, and credit management — all in one unified system for brands and distributors.</p>
            <a href="#" className={styles.link}>Learn more →</a>
          </div>

          <div className={styles.card}>
            <div className={styles.node}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className={styles.label}>
              <span className={styles.labelDot} />02 / AI Consulting
            </div>
            <h3>Enterprise AI transformation</h3>
            <p>From strategy to deployment — purpose-built guidance for FMCG and retail enterprises navigating AI adoption.</p>
            <a href="#" className={styles.link}>Learn more →</a>
          </div>

          <div className={styles.card}>
            <div className={styles.node}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className={styles.label}>
              <span className={styles.labelDot} />03 / Tech Services
            </div>
            <h3>Custom-built solutions</h3>
            <p>We design, build, and ship bespoke technology for retail and FMCG companies with deep domain expertise.</p>
            <a href="#" className={styles.link}>Learn more →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
