// import axios from 'axios'
import React  from 'react'
import Section from '../../components/Section/Section'
import styles from './HomePage.module.css'
import HeroSection from '../../components/HeroSection/HeroSection';
import { useOutletContext } from 'react-router-dom';

const HomePage = () => {
    const {data} = useOutletContext()
    const {topAlbums , newAlbums ,songs} = data;
    // console.log(data)
  return (
    <>
    <div>
      <HeroSection/>
      <div className={styles.wrapper}>
      <Section title="Top Albums" type="album" data={topAlbums}  />
      <Section title="New Albums" type="album" data={newAlbums}  />
      {/* <Section title="Songs"  type="songs" data={songs}  /> */}
      </div>
    </div>
    
    </>
  )
}

export default HomePage