import styles from './Hero.module.css';
import heroImage from '/image-hero-mobile.png'
import audiophileImage from '/client-audiophile.svg'
import databizImage from '/client-databiz.svg'
import makerImage from '/client-maker.svg'
import meetImage from '/client-meet.svg'
import CompLogo from '../compLogo/compLogo';


const Hero = () => {
  let imageUrls = [databizImage, audiophileImage, meetImage, makerImage, ];
  return (
    <>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__image}>
          <img src={heroImage} alt="hero image" />
        </div>

        <div>
          <h1 className={styles.hero__h1}>Make remote work</h1>
          <p className={styles.hero__p}>
          Get your team in sync, no matter your location. Streamline processes, 
          create team rituals, and watch productivity soar.
          </p>
          <button className={styles.hero__btn}>Learn more</button>
        </div>

        <div className={styles.comp__logo}>
          {imageUrls.map((url, index) =>
            <CompLogo logoUrl = {url} key = {index} />
            )}
        </div>
      </div>
    </> 
  )
}

export default Hero