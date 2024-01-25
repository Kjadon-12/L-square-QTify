import React from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";

const Search = ({placeholder}) => {
  const onSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={onSubmit} className={styles.wrapper}>
        <input
          placeholder={placeholder}
          className={styles.search}
          required
        ></input>
        <button type="submit" className={styles.searchButton}>
          <SearchIcon width={20} height={20} />
        </button>
      </form>
    </>
  );
};

export default Search;
