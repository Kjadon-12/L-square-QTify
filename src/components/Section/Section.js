import React, { useState , useEffect } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filter from "../Filter/Filter";

const Section = ({ title, type, data , filterSource  }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  
  const [filters , setFilters] = useState([{key:'all', label:"All"}])
  const[selectedFilterIndex , setSelectedFilterIndex] = useState(0)
  
  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };
  console.log(data);
  
  
    useEffect(() => {
      if(filterSource){
        filterSource().then((response)=> {
          const { data} = response;
          setFilters((prevState) => [...prevState, ...data])
        })

       
      }
      
    },[])

    const showFilters = filters.length>1;
    const cardsToRender = data.filter((card)=> showFilters && selectedFilterIndex !==0 ? card.genre.key === filters[selectedFilterIndex].key : card )
  
  console.log(filters)
  
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type !== "songs" && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {!carouselToggle ? "Collapse All" : "Show All"}
          </h4>
        )}
      </div>

{showFilters && <Filter filterTabs={filters} selectedFilterIndex={selectedFilterIndex} setSelectedFilterIndex={setSelectedFilterIndex}/>}
      {cardsToRender?.length ? (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {cardsToRender?.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <div>
              <Carousel data={cardsToRender} type={type} />
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
