import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>retailo<span>.</span></Link>
            <p>Technology company transforming retail and FMCG operations across MENAP.</p>
          </div>
          <div className={styles.col}>
            <h5>Solutions</h5>
            <a href="#">Supply Chain SaaS</a>
            <a href="#">AI Consulting</a>
            <a href="#">Tech Services</a>
          </div>
          <div className={styles.col}>
            <h5>Company</h5>
            <Link href="/about">About</Link>
            <Link href="/news">News</Link>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div className={styles.col}>
            <h5>Legal</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2025 Retailo Technologies. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="#" className={styles.sLink} aria-label="LinkedIn">in</a>
            <a href="#" className={styles.sLink} aria-label="Twitter">tw</a>
            <a href="#" className={styles.sLink} aria-label="Instagram">ig</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
