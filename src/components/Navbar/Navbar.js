import React from 'react'
import Logo from './Logo'
import styles from './Navbar.module.css'
import SearchBar from './SearchBar'
import Button from './Button'
import {useNavigate} from 'react-router-dom'


const Navbar = () => {
    const navigate= useNavigate();
  return (
    <div className={styles.navbar}>
        <div className={styles.logo} onClick={()=>navigate('/')}><Logo /></div>
        <SearchBar/>
        <Button btnText="Give Feedback"/>
    </div>
  )
}

export default Navbar