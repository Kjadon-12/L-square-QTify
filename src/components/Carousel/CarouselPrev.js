import React ,{useState , useEffect} from 'react'
import {ReactComponent as PrevBtn} from '../../assets/prevBtn.svg'
import { useSwiper } from "swiper/react";
import styles from './Carousel.module.css'
const CarouselPrev = () => {
    const swiper = useSwiper();

	const [isBegin, setIsBegin] = useState(true); 

	useEffect(() => {
		swiper.on("slideChange", () => {
			setIsBegin(swiper.isBeginning); // Update isBegin when slideChange event occurs.
		});
	}, [swiper]); // Include swiper in the dependencies array.

	return (
		<div className={styles.prevBtn}>
			{!isBegin && <PrevBtn onClick={() => swiper.slidePrev()} />}
		</div>
	);
}

export default CarouselPrev