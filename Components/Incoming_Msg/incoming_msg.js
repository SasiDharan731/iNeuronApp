import React from 'react'
import styles from '../../styles/incoming_msg.module.css'

function incoming_msg(props) {
  return (
    <div className={styles.incoming_card}>
        
        <p className={styles.chat}>{props.msg}</p>

    </div>
  )
}

export default incoming_msg