'use client';

import styles from './Solutions.module.css';

const solutions = [
  {
    number: '01',
    category: 'SUPPLY CHAIN SAAS',
    title: 'End-to-end retail platform',
    description:
      'Ordering, sales, delivery, planning, and credit management — all in one unified system for brands and distributors.',
    variant: 'light',
    visual: (
      <div className={styles.visualStack}>
        <div className={styles.stackRow}><span>Orders</span><span className={styles.stackDot} /></div>
        <div className={styles.stackRow}><span>Delivery</span><span className={styles.stackDot} /></div>
        <div className={styles.stackRow}><span>Payments</span><span className={styles.stackDot} /></div>
        <div className={styles.stackRow}><span>Planning</span><span className={styles.stackDot} /></div>
      </div>
    ),
  },
  {
    number: '02',
    category: 'AI CONSULTING',
    title: 'Enterprise AI transformation',
    description:
      'From strategy to deployment — purpose-built guidance for FMCG and retail enterprises navigating AI adoption.',
    variant: 'warm',
    visual: (
      <div className={styles.visualNodes}>
        <div className={styles.nodeCenter}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className={`${styles.nodeSat} ${styles.nodeTL}`}>Strategy</div>
        <div className={`${styles.nodeSat} ${styles.nodeTR}`}>Data</div>
        <div className={`${styles.nodeSat} ${styles.nodeBL}`}>Deploy</div>
        <div className={`${styles.nodeSat} ${styles.nodeBR}`}>Scale</div>
        <svg className={styles.nodeLines} viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="80" y1="60" x2="30" y2="22" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
          <line x1="80" y1="60" x2="130" y2="22" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
          <line x1="80" y1="60" x2="30" y2="98" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
          <line x1="80" y1="60" x2="130" y2="98" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        </svg>
      </div>
    ),
  },
  {
    number: '03',
    category: 'TECH SERVICES',
    title: 'Custom-built solutions',
    description:
      'We design, build, and ship bespoke technology for retail and FMCG companies with deep domain expertise.',
    variant: 'orange',
    visual: (
      <div className={styles.visualCode}>
        <div className={styles.codeLine}><span className={styles.codeKw}>build</span><span className={styles.codeParen}>(</span><span className={styles.codeStr}>"retail"</span><span className={styles.codeParen}>)</span></div>
        <div className={styles.codeLine}><span className={styles.codeKw}>ship</span><span className={styles.codeParen}>(</span><span className={styles.codeStr}>"fast"</span><span className={styles.codeParen}>)</span></div>
        <div className={styles.codeLine}><span className={styles.codeKw}>scale</span><span className={styles.codeParen}>(</span><span className={styles.codeStr}>∞</span><span className={styles.codeParen}>)</span></div>
        <div className={`${styles.codeLine} ${styles.codeCursor}`}><span className={styles.codeKw}>_</span></div>
      </div>
    ),
  },
];

export default function Solutions() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          WHAT WE OFFER
        </p>
        <h2 className={styles.heading}>
          Three ways we<br />
          <span className={styles.headingAccent}>transform retail.</span>
        </h2>
        <p className={styles.subheading}>
          We don't just build software. We bring 7 years of running a MENAP
          marketplace and turn that into technology that works in the field.
        </p>
      </div>

      <div className={styles.grid}>
        {solutions.map((s) => (
          <div key={s.number} className={`${styles.card} ${styles[`card--${s.variant}`]}`}>
            <div className={styles.cardVisual}>{s.visual}</div>
            <div className={styles.cardBody}>
              <p className={styles.cardCategory}>
                <span className={styles.categoryDot} />
                {s.number} / {s.category}
              </p>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
              <a href="#" className={styles.cardLink}>
                Learn more <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
