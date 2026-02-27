import React from 'react'
import styles from './Social.module.scss'
function Social({tooltip,children}) {
  return (
    <div className={styles.social_item}>
        <span className={styles.social_item__icon}  aria-label={tooltip}>
            {children}
        </span>
        <div className={styles.social_item__tooltip}>
            <span>{tooltip}</span>
        </div>
    </div>
  )
}

export default Social