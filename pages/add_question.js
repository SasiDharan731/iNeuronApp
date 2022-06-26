import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import home from '../public/home.png'
import dashboard from '../public/dashboard.png'
import styles from '../styles/add_question.module.css'
import {useState} from 'react'
import axios from 'axios'
function Add_question() {
  const [ques, setQues] = useState()
  const [ans, setAns] = useState()

  const upload = () => {
    axios.post("http://3.108.184.78:8800/learn", {
      ques,
      ans
    }).then((data) => {
      console.log(data);
    })
  }
  return (
    <div>

        <nav className={styles.navBar}>

        <div className={styles.icon1}><Image
          src={logo}
          alt="logo"
        /></div>

        <div className={styles.icon2}><Link href="/">
          <Image
            src={home}
            alt="home"
          /></Link>
        </div>

        <div className={styles.icon2}><Link href="doubts_dashboard"><Image
          src={dashboard}
          alt="dashboard"
        /></Link></div>
        
      </nav>

      <div className={styles.details}>
        <h2 className={styles.name}>KIRA Bot</h2>
        <p className={styles.time}>06:30 PM</p>
      </div>

      <div className={styles.inputField}>
        <label className={styles.inputName} htmlFor="">Question</label>
        <textarea className={styles.typeText} rows="6" cols="45" type="text" placeholder="Type the question here" onChange={(e) => setQues(e.target.value)}/>
        
        <label className={styles.inputName} htmlFor="">Answer</label>
        <textarea className={styles.typeText} rows="6" cols="45"  type="text" placeholder="Type the answer here"  onChange={(e) => setAns(e.target.value)}/>

        <Link href="/">

        <div className={styles.button} onClick={upload}>Submit</div>
        </Link>

    </div>

    </div>
  )
}

export default Add_question