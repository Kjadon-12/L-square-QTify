import React from 'react'
import styles from './HeroSection.module.css'
import HeroImage from '../../assets/heroImage.svg'

const HeroSection = () => {
  return (
    <>
    <section className={styles.wrapper}>
      {/* <div className={styles.heroSectionContainer}> */}
      <div className={styles.heroSectionText}>
						<h1>100 Thousand Songs, ad free</h1>
						<h1>Over thousands podcast episodes</h1>
					</div>
                    
                        <img src={HeroImage} alt='hero-section'></img>
                    
        
       {/* </div>   */}
    </section>
    </>
  )
}

export default HeroSection