import styles from "../styles.module.scss"

export const NavBar = () => {
  return (
    <ul className={styles.nav__list}>
        <li className={styles.list__item}>_home</li>
        <li className={styles.list__item}>_about</li>
        <li className={styles.list__item}>_projects</li>
        <li className={styles.list__item}>_services</li>
        <li className={styles.list__item}>_resume</li>
        <li className={styles.list__item}>_contact</li>
    </ul>
  )
}