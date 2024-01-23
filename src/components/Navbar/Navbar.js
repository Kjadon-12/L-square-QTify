import React from 'react'
import Logo from './Logo'
import styles from './Navbar.module.css'
import SearchBar from './SearchBar'
import Button from './Button'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Logo/>
        <SearchBar/>
        <Button btnText="Give Feedback"/>
    </div>
  )
}

export default Navbar