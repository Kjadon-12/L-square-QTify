import React from 'react';
import styles from './Navbar.module.css'

const Button = ({btnText}) => {
  return (
    <div className={styles.feedbackBtn}>
          {btnText}
    </div>
  )
}

export default Button