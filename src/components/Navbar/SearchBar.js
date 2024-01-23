import React from 'react'
import styles from './Navbar.module.css'
import  {ReactComponent as SearchIcon }   from '../../assets/searchIcon.svg'

const SearchBar = () => {
  return (
    <>
    
        <form className={styles.searchBarContainer}>
        <input placeholder='Search a song of your choice' className={styles.searchBarInput}></input>
        <div type='submit' className={styles.searchBarButton}><SearchIcon/></div>
        </form>
    
    </>
  )
}

export default SearchBar