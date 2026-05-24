'use client';

import styles from './Solutions.module.css';

const solutions = [
  {
    number: '01',
    category: 'SUPPLY CHAIN SAAS',
    title: 'End-to-end distribution platform',
    description:
      'Direct ordering, field sales, delivery, planning, and credit — all in one system built for how MENAP brands and distributors actually operate.',
    variant: 'light',
    visual: (
      <div className={styles.visualStack}>
        <div className={styles.stackRow}><span>Orders</span><span className={styles.stackDot} /></div>
        <div className={styles.stackRow}><span>Delivery</span><span className={styles.stackDot} /></div>
        <div className={styles.stackRow}><span>Credit</span><span className={styles.stackDot} /></div>
        <div className={styles.stackRow}><span>Planning</span><span className={styles.stackDot} /></div>
      </div>
    ),
  },
  {
    number: '02',
    category: 'AI CONSULTING',
    title: 'Enterprise AI transformation',
    description:
      'We embed into your team and take you from AI strategy to live deployment — with domain expertise in FMCG and retail that generalist consultants don\'t have.',
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
    title: 'Build your product with us',
    description:
      'Have an idea that needs to become software? We design, build, and ship it — with a team that has shipped production systems for one of MENAP\'s largest retail networks.',
    variant: 'orange',
    visual: (
      <div className={styles.visualCode}>
        <div className={styles.codeLine}><span className={styles.codeKw}>design</span><span className={styles.codeParen}>(</span><span className={styles.codeStr}>"product"</span><span className={styles.codeParen}>)</span></div>
        <div className={styles.codeLine}><span className={styles.codeKw}>build</span><span className={styles.codeParen}>(</span><span className={styles.codeStr}>"fast"</span><span className={styles.codeParen}>)</span></div>
        <div className={styles.codeLine}><span className={styles.codeKw}>ship</span><span className={styles.codeParen}>(</span><span className={styles.codeStr}>"production"</span><span className={styles.codeParen}>)</span></div>
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
          WHAT WE DO
        </p>
        <h2 className={styles.heading}>
          Three ways we work<br />
          <span className={styles.headingAccent}>with you.</span>
        </h2>
        <p className={styles.subheading}>
          Whether you need a platform, a transformation partner, or a team to
          build your vision — we bring 7 years of MENAP retail operations to the table.
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
