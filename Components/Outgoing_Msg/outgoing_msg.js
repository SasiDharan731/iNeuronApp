import React from 'react'
import styles from '../../styles/outgoing_msg.module.css'

function outgoing_msg(props) {
  return (
    <div className={styles.outgoing_card}>

        <p className={styles.chat}>{props.msg}</p>

    </div>
  )
}

export default outgoing_msg