import styles from './compLogo.module.css';

const CompLogo = (props) => {
  return (
    <>
      <img src={props.logoUrl} alt="" className={styles.comp__logos}/>
    </>
  )
}

export default CompLogo