import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={`${styles.header_title} logo`}>João <span className='highlight'>Barcellos</span></h1>
      <ul className={styles.contact_list_container}>
        <li><a className={styles.contact_item} href="https://github.com/Zaalbear" target='_blank'><GitHubIcon /></a></li>
        <li><a className={styles.contact_item} href="https://twitter.com/Zaalbear" target='_blank'><XIcon /></a></li>
        <li><a className={styles.contact_item} href="https://www.facebook.com/joao.barcellos.37" target='_blank'><FacebookIcon /></a></li>
        <li><a className={styles.contact_item} href="https://www.linkedin.com/in/joão-victor-barcellos-23507b165/" target='_blank'><LinkedInIcon /></a></li>
        <li><a className={styles.contact_item} href="https://www.instagram.com/zaalbear13/" target='_blank'><InstagramIcon /></a></li>
      </ul>
    </header>
  )
}