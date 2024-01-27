import React ,{useState , useEffect} from 'react'
import { useSwiper } from "swiper/react";
import {ReactComponent as NextBtn} from '../../assets/nextBtn.svg'
import styles from './Carousel.module.css'

const CarouselNext = () => {
  const swiper = useSwiper();

	const [isEnd, setIsEnd] = useState(swiper.isEnd);

	useEffect(() => {
		swiper.on("slideChange", () => {
			setIsEnd(swiper.isEnd);
		});
		
	}, []);

	return (
		<div className={styles.nextBtn}>
			{!isEnd && <NextBtn onClick={() => swiper.slideNext()} />}
		</div>
	);
  
  
}

export default CarouselNext