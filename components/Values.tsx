import styles from './Values.module.css'

export default function Values() {
  const values = [
    { num: '01', title: 'We are owners', desc: "We don't work for Retailo. We truly own the company — its vision, values, challenges, and successes." },
    { num: '02', title: 'Dream big, start small', desc: 'We go from small to big, growing every day till we get to Mars.' },
    { num: '03', title: 'Enjoy the journey, together', desc: 'We celebrate the joy of working together and thrive on positive energy.' },
    { num: '04', title: 'Be humble and respectful', desc: 'We can only truly serve Retailo by serving all our stakeholders with utmost respect.' },
    { num: '05', title: 'Wow our customers', desc: 'We constantly strive to serve our customers beyond their expectations and surprise them every single day.' },
    { num: '06', title: 'Build with integrity', desc: 'What we ship represents who we are. We build with care, transparency, and a long-term mindset.' },
  ]

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="s-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="s-eyebrow-dot" />
            Our values
          </div>
          <h2 className="s-title">What we stand for.</h2>
          <p className="s-desc" style={{ margin: '0 auto' }}>
            The principles that guide every decision, every product, every conversation.
          </p>
        </div>

        <div className={styles.grid}>
          {values.map(v => (
            <div key={v.num} className={styles.value}>
              <div className={styles.icon}>{v.num}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
