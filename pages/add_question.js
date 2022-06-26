import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import home from '../public/home.png'
import styles from '../styles/add_question.module.css'

function add_question() {
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
        
      </nav>

      <div className={styles.details}>
        <h2 className={styles.name}>KIRA Bot</h2>
        <p className={styles.time}>06:30 PM</p>
      </div>

      <div className={styles.inputField}>
        <label className={styles.inputName} htmlFor="">Question</label>
        <textarea className={styles.typeText} rows="6" cols="45" type="text" placeholder="Type the question here"/>
        
        <label className={styles.inputName} htmlFor="">Answer</label>
        <textarea className={styles.typeText} rows="6" cols="45"  type="text" placeholder="Type the answer here"/>

        <div className={styles.button}>Submit</div>
    </div>

    </div>
  )
}

export default add_question