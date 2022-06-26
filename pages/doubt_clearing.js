import Image from 'next/image'
import logo from '../public/logo.png'
import home from '../public/home.png'
import dashboard from '../public/dashboard.png'
import styles from '../styles/doubt_clearing.module.css'
import Doubts_Card from '../Components/Doubts_Card/doubt_card'
import Link from 'next/link'
function doubt_clearing() {
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

        <div className={styles.clear_doubt}>

            <Doubts_Card />

            <div className={styles.inputField}>
                <label className={styles.inputName} htmlFor="">Type Answer</label>
                <textarea className={styles.typeText} rows="6" cols="45" type="text" placeholder="Type the question here"/>

                <div className={styles.button_div}>
                    <div className={styles.button}>Submit</div>
                    <div className={styles.button1}>Enter Skype</div>    
                </div>        
            </div> 

        </div>

    </div>
  )
}

export default doubt_clearing