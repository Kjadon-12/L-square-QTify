import React from 'react';
import styles from './Carousel.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import Card from '../Card/Card';
import CarouselPrev from './CarouselPrev';
import CarouselNext from './CarouselNext';

const Carousel = ({data , type}) => {
  return (
    <>
    
    <Swiper
    
       spaceBetween={23}
       initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        
        allowTouchMove
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
        <CarouselPrev/>
        <CarouselNext/>
      {data.map((item) =>
        <SwiperSlide key={item.id}><Card data={item} type={type}/> </SwiperSlide>
      )}
      
      
    </Swiper>
    </>
  )
}

export default Carousel