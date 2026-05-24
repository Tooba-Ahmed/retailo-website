import Link from 'next/link'
import styles from './Spotlight.module.css'

export default function Spotlight() {
  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <div className="s-eyebrow">
            <span className="s-eyebrow-dot" />
            In the spotlight
          </div>
          <h2 className="s-title">
            Here&apos;s what&apos;s<br /><em>happening.</em>
          </h2>
        </div>
        <Link href="/news" className="btn-outline">View all news →</Link>
      </div>

      <div className={styles.grid}>
        {/* PLACEHOLDER — replace with real press/news items before launch */}
        <article className={styles.card}>
          <div className={`${styles.img} ${styles.g3}`}>
            <div className={styles.ring}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M9 9h6M9 13h6M9 17h4" />
              </svg>
            </div>
            <span className={styles.tag}>Product</span>
          </div>
          <div className={styles.content}>
            <div className={styles.date}>[Month Year] · Product</div>
            <h4>[Headline — replace with real launch or announcement]</h4>
            <p className={styles.excerpt}>
              [Replace with real news item. Do not publish placeholder content.]
            </p>
            <span className={styles.link}>Read more →</span>
          </div>
        </article>

        <article className={styles.card}>
          <div className={`${styles.img} ${styles.g2}`}>
            <div className={styles.ring}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 7a4 4 0 11-8 0 4 4 0 018 0zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <span className={styles.tag}>Partnership</span>
          </div>
          <div className={styles.content}>
            <div className={styles.date}>[Month Year] · Press</div>
            <h4>[Headline — replace with real partnership or press coverage]</h4>
            <p className={styles.excerpt}>
              [Replace with real news item. Do not publish placeholder content.]
            </p>
            <span className={styles.link}>Read more →</span>
          </div>
        </article>

        <article className={styles.card}>
          <div className={`${styles.img} ${styles.g1}`}>
            <div className={styles.ring}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
              </svg>
            </div>
            <span className={styles.tag}>Milestone</span>
          </div>
          <div className={styles.content}>
            <div className={styles.date}>[Month Year] · Company</div>
            <h4>[Headline — replace with real company milestone]</h4>
            <p className={styles.excerpt}>
              [Replace with real news item. Do not publish placeholder content.]
            </p>
            <span className={styles.link}>Read more →</span>
          </div>
        </article>
      </div>
    </section>
  )
}
