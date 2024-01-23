import React from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";

const SearchBar = ({placeholder}) => {
  return (
    <>
      <form className={styles.searchBarContainer}>
        <input
          placeholder={placeholder}
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
