import styles from "../styles.module.scss"

export const NavBar = () => {
  return (
    <ul className={styles.nav__list}>
        <li className={styles.list__item}>_home</li>
        <li className={styles.list__item}>_sobre</li>
        <li className={styles.list__item}>_portfolio</li>
        <li className={styles.list__item}>_serviços</li>
        <li className={styles.list__item}>_currículo</li>
        <li className={styles.list__item}>_contato</li>
    </ul>
  )
}