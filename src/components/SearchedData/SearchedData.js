// SearchedData.js
import React from 'react';
import styles from './SearchedData.module.css'
import SearchedSong from '../SearchedSong/SearchedSong';

const SearchedData = React.forwardRef(({ topAlbums }, ref) => {
  // Your component logic here

  return (
    <div ref={ref} className={styles.searchData} >
      {/* Render your content using topAlbums */}
      {topAlbums?.map((album ,idx)=>(
        <SearchedSong key={album.id} album={album}></SearchedSong>
      ))}
    </div>
  );
});

export default SearchedData;
