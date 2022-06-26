import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import home from '../public/home.png'
import dashboard from '../public/dashboard.png'
import styles from '../styles/doubts_dashboard.module.css'
import Doubts_Card from '../Components/Doubts_Card/doubt_card'

function doubts_dashboard() {
  return (
    <div>

        <nav className={styles.navBar}>

        <div className={styles.icon1}><Image
          src={logo}
          alt="logo"
        /></div>

        <div className={styles.icon2}><a href="/">
          <Image
            src={home}
            alt="home"
          /></a>
        </div>

        <div className={styles.icon2}><a href="doubts_dashboard"><Image
          src={dashboard}
          alt="dashboard"
        /></a></div>
        
      </nav>

      <div className={styles.card_div}>
        
        <a href="doubt_clearing"><Doubts_Card /></a>

      </div>

    </div>
  )
}

export default doubts_dashboard