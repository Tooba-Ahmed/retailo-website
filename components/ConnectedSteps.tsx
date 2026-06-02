import styles from './ConnectedSteps.module.css'

export default function ConnectedSteps() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className="s-eyebrow">
          <span className="s-eyebrow-dot" />
          How we work
        </div>
        <h2 className="s-title">
          From brief to<br /><em>live in production.</em>
        </h2>
        <p className="s-desc">
          Every engagement follows the same disciplined path. From understanding the problem to shipping the product.
        </p>
      </div>

      <div className={styles.flow}>
        <div className={styles.lineBg} />
        <div className={styles.cards}>

        <div className={styles.card}>
          <div className={styles.node}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </div>
          <div className={styles.label}>
            <span className={styles.labelDot} />STEP 01
          </div>
          <h3>Discover</h3>
          <p>We map your operations, data, and goals before a line of code is written.</p>
          <div className={styles.tags}>
            <span className={styles.tag}>Workshops</span>
            <span className={styles.tag}>Audit</span>
            <span className={styles.tag}>Roadmap</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.node}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>
          <div className={styles.label}>
            <span className={styles.labelDot} />STEP 02
          </div>
          <h3>Design</h3>
          <p>Architecture, data models, AI approach. Designed for your scale and your constraints.</p>
          <div className={styles.tags}>
            <span className={styles.tag}>Architecture</span>
            <span className={styles.tag}>AI strategy</span>
            <span className={styles.tag}>Prototyping</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.node}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div className={styles.label}>
            <span className={styles.labelDot} />STEP 03
          </div>
          <h3>Build</h3>
          <p>Fast, iterative, in the open. Regular releases and real feedback loops throughout.</p>
          <div className={styles.tags}>
            <span className={styles.tag}>Engineering</span>
            <span className={styles.tag}>Sprints</span>
            <span className={styles.tag}>QA</span>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.node}>
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </div>
          <div className={styles.label}>
            <span className={styles.labelDot} />STEP 04
          </div>
          <h3>Run</h3>
          <p>Ongoing support and iteration after launch. Things improve, they don&apos;t just go live and stall.</p>
          <div className={styles.tags}>
            <span className={styles.tag}>Support</span>
            <span className={styles.tag}>Monitoring</span>
            <span className={styles.tag}>Iteration</span>
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}
