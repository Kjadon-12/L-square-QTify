import React ,{useState , useRef ,useEffect} from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import SearchedData from "../SearchedData/SearchedData";
import useComponentVisible from "../../customHooks/useComponentVisible";


const Search = ({placeholder , topAlbums}) => {
  const [searchAlbum , setSearchAlbum] = useState('')
  const [filteredSong , setFilteredSong] = useState(topAlbums)
  const [showAlbumList , setShowAlbumList] = useState(false)
  const inputRef = useRef(null)
  
const {albumListRef, isAlbumListVisible, setIsAlbumListVisible} = useComponentVisible(true)
 console.log(isAlbumListVisible)
  const onSubmit = (e)=>{
    e.preventDefault();

  }
  let timer;

  const debounce = (func, delay) => {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
    
  };
     


  
  const filterSong = (e)=>{
       setSearchAlbum(e.target.value)
       debounce(() => {
        // Your filtering logic goes here
        // For now, it's just updating setFilteredSong with the filtered results
        const filteredResults = topAlbums.filter((album) =>
          album.title.toLowerCase().includes(searchAlbum.toLowerCase())
        );
        setFilteredSong(filteredResults);
      }, 300);
       
  }
  useEffect(()=>{
setFilteredSong(topAlbums)
  },[topAlbums])
  
  return (
    <>
    <div onClick={() =>  setIsAlbumListVisible(true)}>
      <form onSubmit={onSubmit} className={styles.wrapper}>
         <input
          value={searchAlbum}
          placeholder={placeholder}
          className={styles.search}
          required
          onChange={filterSong}
        ></input> 



        <button type="submit" className={styles.searchButton}>
          <SearchIcon width={20} height={20} />
        </button>
      </form>
      </div>
      {isAlbumListVisible && <SearchedData ref={albumListRef}  topAlbums={filteredSong}/>}


    </>
  );
  }

export default Search;
