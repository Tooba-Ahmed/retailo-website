'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/retailo-icon.svg"
          alt="Retailo icon"
          width={19}
          height={18}
          priority
        />
        retailo<span>.</span>
      </Link>
      <ul className={styles.links}>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="/#contact" className={styles.cta}>Book a demo</Link></li>
      </ul>
    </nav>
  )
}
