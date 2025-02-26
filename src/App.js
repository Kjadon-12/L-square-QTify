

import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import { fetchNewAlbums, fetchTopAlbums , fetchSongs, fetchFilters } from './api/api';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
  const [searchData , setSearchData] = useState();
  const [data , setData] = useState({})
  const generateData = async (key , source)=>{
    const data = await source();
      setData((prevData)=>{
        return {...prevData , [key]: data}
      })
  
  }
  
  useEffect(()=>{
   generateData("topAlbums" , fetchTopAlbums);
   generateData("newAlbums" , fetchNewAlbums);
   generateData("songs" , fetchSongs);
   

  } , [])
  const {topAlbums= [] , newAlbums= [] , songs=[] } = data;
  return (
    <div>
      <Navbar topAlbums={topAlbums}/>
      <Outlet context={{data:{topAlbums , newAlbums , songs }}}/>
      <Footer/>
   
    </div>
  );
}

export default App;
