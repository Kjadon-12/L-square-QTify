import React from 'react'
import Logo from '../Logo/Logo'
import styles from './Navbar.module.css'
import Search from '../Search/Search'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'



const Navbar = ({topAlbums}) => {
    
  return (
    <nav className={styles.navbar}>
        <Link to='/' ><Logo /></Link>
        <Search placeholder="Search a album of your choice" topAlbums={topAlbums}/>
        <Button>Give Feedback</Button>
    </nav>
  )
}

export default Navbar