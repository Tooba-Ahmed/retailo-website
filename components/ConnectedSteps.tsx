import styles from './ConnectedSteps.module.css'

export default function ConnectedSteps() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className="s-eyebrow">
          <span className="s-eyebrow-dot" />
          How it works
        </div>
        <h2 className="s-title">
          One platform,<br /><em>end to end.</em>
        </h2>
        <p className="s-desc">
          Most brands and distributors run on fragmented tools — orders on
          WhatsApp, inventory in spreadsheets, deliveries on paper. Retailo
          brings every layer into one connected operating system.
        </p>
      </div>

      <div className={styles.flow}>
        <div className={styles.lineBg} />

        <div className={styles.card}>
          <div className={styles.node}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <div className={styles.label}>
            <span className={styles.labelDot} />STEP 01
          </div>
          <h3>Order</h3>
          <p>Retailers order directly through a branded digital storefront. No reps, no calls, no friction.</p>
          <div className={styles.tags}>
            <span className={styles.tag}>Direct ordering</span>
            <span className={styles.tag}>Catalogue</span>
            <span className={styles.tag}>Pricing rules</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.node}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div className={styles.label}>
            <span className={styles.labelDot} />STEP 02
          </div>
          <h3>Sell & collect</h3>
          <p>Field sales teams are tracked, managed, and equipped — with credit and collections built in.</p>
          <div className={styles.tags}>
            <span className={styles.tag}>Field sales</span>
            <span className={styles.tag}>Credit</span>
            <span className={styles.tag}>Collections</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.node}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <div className={styles.label}>
            <span className={styles.labelDot} />STEP 03
          </div>
          <h3>Deliver</h3>
          <p>Route-optimized delivery with real-time tracking and proof of delivery at every stop.</p>
          <div className={styles.tags}>
            <span className={styles.tag}>Route planning</span>
            <span className={styles.tag}>Tracking</span>
            <span className={styles.tag}>POD</span>
          </div>
        </div>

      </div>
    </section>
  )
}
