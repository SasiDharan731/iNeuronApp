import React from 'react'
import styles from '../../styles/doubt_card.module.css'

function doubt_card() {
  return (
    <div className={styles.card}>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius omnis illo vero. Minus dignissimos iure, ut aliquid ex, sequi perferendis tempora veniam modi, illo ipsum. Quo adipisci nostrum voluptate placeat, quidem provident?</p>
        <p className={styles.member_det}><span className={styles.violet}><b> Number of members:</b></span> 101 students</p>
    </div>
  )
}

export default doubt_card