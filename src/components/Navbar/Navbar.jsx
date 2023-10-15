import logo from '/logo.svg';
import styles from './Navbar.module.css';


function Navbar() {
  return (
    <>
    <nav className={styles.nav}>
      <a href="/">
      <img src={logo} alt="Logo" />
      </a>

      <div className={styles.hamburger}>
        <span className={styles.line1}></span>
        <span className={styles.line2}></span>
        <span className={styles.line3}></span>
      </div>
    </nav>
    </>
  )
}

export default Navbar