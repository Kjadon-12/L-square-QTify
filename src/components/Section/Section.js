import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";

const Section = ({ title, type, data }) => {
  const [carouselToggle, setCarouselToggle] = useState(false);
  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };
    console.log(data)
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      
      
      {data?.length ? (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data?.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <div>
              
              carousell
            </div>
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Section;
