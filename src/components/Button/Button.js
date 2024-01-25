import React from 'react';
import styles from './Button.module.css'

const Button = ({btnText}) => {
  return (
    <div className={styles.feedbackBtn}>
          {btnText}
    </div>
  )
}

export default Button