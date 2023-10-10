import { NavBar } from "./NavBar"
import styles from "./styles.module.scss"

export const Header = () => {
  return (
    <header className={styles.header__container}>
      <div className={styles.logo__container}>
          <h1 className={styles.logo__title}><span>//</span>João Victor Barcellos</h1>
          <p className={styles.logo__caption}>web developer</p>
      </div>
        <nav className={styles.nav__container}>
          <NavBar/>
        </nav>
    </header>
  )
}