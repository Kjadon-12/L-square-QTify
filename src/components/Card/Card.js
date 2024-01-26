import React from "react";
import styles from "./Card.module.css";
import { Tooltip, Chip } from "@mui/material";
import { Link } from "react-router-dom";

const Card = ({ data, type }) => {
  
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, songs, follows, slug, title } = data;
        
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`/album/${slug}`}>
            <div className={styles.wrpper}>
              <div className={styles.card}>
                <img src={image} alt="song" loading="lazy"></img>
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    className={styles.chip}
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
            </Link>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className={styles.wrpper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy"></img>
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };

  return getCard(type);
};

export default Card;
