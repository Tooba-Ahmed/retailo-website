import styles from './ConnectedSteps.module.css'

export default function ConnectedSteps() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className="s-eyebrow">
          <span className="s-eyebrow-dot" />
          How Retailo works
        </div>
        <h2 className="s-title">
          Every step,<br /><em>connected.</em>
        </h2>
        <p className="s-desc">
          Most retail operations run on disconnected tools — orders in WhatsApp,
          inventory in Excel, deliveries on paper. Retailo unifies them into one
          operating system.
        </p>
      </div>

      <div className={styles.flow}>
        <div className={styles.lineBg} />

        <div className={styles.card}>
          <div className={styles.node}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 17H7A5 5 0 017 7h2m6 0h2a5 5 0 010 10h-2M8 12h8" />
            </svg>
          </div>
          <div className={styles.label}>
            <span className={styles.labelDot} />STEP 01
          </div>
          <h3>Connect</h3>
          <p>Plug in existing distributors, retailers, and inventory data. No rip-and-replace.</p>
          <div className={styles.tags}>
            <span className={styles.tag}>API</span>
            <span className={styles.tag}>ERP</span>
            <span className={styles.tag}>Migration</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.node}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M9 9h6M9 13h6M9 17h4" />
            </svg>
          </div>
          <div className={styles.label}>
            <span className={styles.labelDot} />STEP 02
          </div>
          <h3>Digitize</h3>
          <p>Orders, sales, credit — everything moves from paper to platform with full visibility.</p>
          <div className={styles.tags}>
            <span className={styles.tag}>Ordering</span>
            <span className={styles.tag}>Field sales</span>
            <span className={styles.tag}>Credit</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.node}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 17l6-6 4 4 8-8M14 7h6v6" />
            </svg>
          </div>
          <div className={styles.label}>
            <span className={styles.labelDot} />STEP 03
          </div>
          <h3>Optimize</h3>
          <p>7 years of MENAP retail data trains forecasting, routing, and replenishment models.</p>
          <div className={styles.tags}>
            <span className={styles.tag}>Forecasting</span>
            <span className={styles.tag}>Routing</span>
            <span className={styles.tag}>Restock</span>
          </div>
        </div>
      </div>
    </section>
  )
}
