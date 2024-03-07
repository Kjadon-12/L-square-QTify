import React from 'react'
import styles from './SearchedSong.module.css'
import { Link } from 'react-router-dom'
const SearchedSong = ({album}) => {
  return (
    <div>
        <Link to={`/album/${album.slug}`}>
    <div className={styles.searchSongWrapper}>
        <div style={{display:'flex' , gap:"12px" , alignItems: "center"}} >
            <img className={styles.searchImg} src={album.image} alt='song' width={66} height={71}></img>
            <div>
                <h4>{album.title}</h4>
                <h5 className={styles.truncatedTitle}>{album.description}</h5>
            </div>
            </div>
            
            <div>{album.follows} Follows</div>
            
            
    </div>
    </Link>
    </div>
  )
}

export default SearchedSong