import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/heroImage.svg";

const HeroSection = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.heroImageWrapper}>
					<div className={styles.banner}>
						<h1>100 Thousand Songs, ad free</h1>
						<h1>Over thousands podcast episodes</h1>
					</div>
					<div>
						<img src={Headphone} alt="Headphone" height="212px" width="212px" />
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;





// import React from "react";
// import styles from "./HeroSection.module.css";
// import HeroImage from "../../assets/heroImage.svg";

// const HeroSection = () => {
//   return (
//     <div className={styles.hero}>
//       <div className={styles.heroSectionText}>
//         <h1>100 Thousand Songs, ad free</h1>
//         <h1>Over thousands podcast episodes</h1>
//       </div>
//       <div>
//         <img src={HeroImage} alt="hero-section" width={212}></img>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
