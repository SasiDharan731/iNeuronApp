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
import axios from 'axios'
import {useState, useEffect} from 'react'

export default function Home() {
  const [currentReply, setCurrentReply] = useState()
  const [currentQues, setCurrentQues] = useState()
  const [chats, setChat] = useState()
  const updateChat = () => {
    axios.get("http://192.168.1.228:8800/getChat").then((data) => {
         
          data.data.length != 0 ? 
          setChat(data && JSON.parse(data.data))
          :
          null
    })
    
  }
  const getChatBotReply = () => {
    axios.post("http://192.168.1.228:8800/", {
      msg : currentQues,
    }).then((data) => {
          setCurrentReply(data.data)
          sendChatBot(data.data)
    })
  }

  const sendChatUser = () => {
    axios.post("http://192.168.1.228:8800/chat", {
      msg : currentQues,
      byBot: false
    }).then((data) => {
      console.log(currentQues, "Hey logging here!");
      console.log(data);
      updateChat()
      getChatBotReply()

    })
  }

  const sendChatBot = (data) => {
    axios.post("http://192.168.1.228:8800/chat", {
      msg : data && data,
      byBot: true
    }).then((data1) => {
       updateChat()
    })
  }

  useEffect(() => {
    updateChat()
    console.log(chats);
  }, [])

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
        {
          chats && chats.map((data) => (
            
              data.ans ?
              <Incoming_Msg key={chats._id} msg={data.ques.replace("output: ", "")}/>:
              <Outgoing_Msg key={chats._id} msg={data.ques} />
            
          ))
        }
      </div>
    

      <div className={styles.inputField}>
        <input className={styles.typeText} type="text" placeholder="Type a Message" onChange={(e) => e.target.value != null ? setCurrentQues(e.target.value): null}/>
        
        <div className={styles.sendIcon} onClick={sendChatUser}>
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
