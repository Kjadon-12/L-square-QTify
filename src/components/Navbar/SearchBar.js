import React from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";

const SearchBar = () => {
  return (
    <>
      <form className={styles.searchBarContainer}>
        <input
          placeholder="Search a song of your choice"
          className={styles.searchBarInput}
        ></input>
        <button type="submit" className={styles.searchBarButton}>
          <SearchIcon />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
