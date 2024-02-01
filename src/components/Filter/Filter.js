import React , {useState} from 'react'
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from './Filter.module.css'



const Filter = ({filterTabs ,selectedFilterIndex, setSelectedFilterIndex}) => {
    
    
   
  
  

  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  }
  return (
    <div className={styles.filterWrapper}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={selectedFilterIndex}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "var(--color-primary)",
                },
              }}
            >
               {filterTabs?.map((item,idx)=><Tab label={item.label} key={idx} className={styles.filterTab}></Tab>)} 
              
            </Tabs>
          </Box>
        </div>
  )
}

export default Filter;