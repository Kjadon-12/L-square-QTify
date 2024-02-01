// import axios from 'axios'
import React  from 'react'
import Section from '../../components/Section/Section'
import styles from './HomePage.module.css'
import HeroSection from '../../components/HeroSection/HeroSection';
import { useOutletContext } from 'react-router-dom';
import { fetchFilters } from '../../api/api';

const HomePage = () => {
    const {data} = useOutletContext()
    const {topAlbums , newAlbums ,songs} = data;
    console.log(data)
  return (
    <>
    <div>
      <HeroSection/>
      <div className={styles.wrapper}>
      <Section title="Top Albums" type="album" data={topAlbums}  />
      <Section title="New Albums" type="album" data={newAlbums}  />
      <hr/>
      <Section title="Songs" type="songs" data={songs} filterSource={fetchFilters}  />
      </div>
    </div>
    
    </>
  )
}

export default HomePage