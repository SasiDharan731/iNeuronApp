import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import add from '../public/add.png'
import attachment from '../public/attachment.png'
import dashboard from '../public/dashboard.png'
import Incoming_Msg from '../Components/Incoming_Msg/incoming_msg'
import Outgoing_Msg from '../Components/Outgoing_Msg/outgoing_msg'
import send from '../public/send.png'

export default function Home() {
  return (
    <div className={styles.chatBot}>

      <nav className={styles.navBar}>

        <div className={styles.icon1}><Image
          src={logo}
          alt="logo"
        /></div>

        <div className={styles.icon2}><a href="add_question">
          <Image
            src={add}
            alt="add"
          /></a>
        </div>

        <div className={styles.icon2}><a href="doubts_dashboard"><Image
          src={dashboard}
          alt="dashboard"
        /></a></div>
        
      </nav>

      <div className={styles.details}>
        <h2 className={styles.name}>KIRA Bot</h2>
        <p className={styles.time}>06:30 PM</p>
      </div>

      <div className={styles.messages}>
        <Incoming_Msg />
        <Outgoing_Msg />

        <Incoming_Msg />
        <Outgoing_Msg />
        <Outgoing_Msg />

        <Incoming_Msg />
        <Outgoing_Msg />

        <Incoming_Msg />
        <Outgoing_Msg />
      </div>
    

      <div className={styles.inputField}>
        <input className={styles.typeText} type="text" placeholder="Type a Message"/>
        
        <div className={styles.sendIcon}>
          <Image
            src={attachment}
            alt="attachmentIcon"
          />
        </div>

        <div className={styles.sendIcon}>
          <Image
            src={send}
            alt="sendIcon"
          />
        </div>
      </div>
      
    </div>
  )
}
