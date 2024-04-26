import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import dev_cv from "../../../assets/archives/cv_joao_victor_barcellos.pdf"
import dev_img from "../../../assets/decorations/developer.svg"
import styles from "./style.module.scss"


export const Home = () => {
  return (
    <main className={styles.main_container}>
      <div className={styles.text_box}>
        <div className={styles.title_container}>
          <h2 className='title2'>{'< Desenvolvedor FullStack />'}</h2>
          <h3 className='title3'>Transformando ideas em <span className='highlight'>realidade virtual</span></h3>
        </div>
        <div className={styles.paragraph_container}>
          <p className='body'>Entusiasta de tecnologias de desenvolvimento web. Especializado no front-end em JavaScript e TypeScript, com ênfase na construção de interfaces modernas usando React.js e Next.js. Tambem no back-end utilizando TypeScript, Python, Django e muitas outras. Dedico-me apaixonadamente a criar soluções elegantes e eficazes que aprimoram a experiência do usuário.</p>
        </div>
        <div className={styles.button_container}>
          <a href={dev_cv} download={'cv_joao_victor_barcellos'}>
            <button className={styles.page_button}>Download CV{<ArrowCircleDownOutlinedIcon fontSize="large" />}</button>
          </a>
        </div>
      </div>

      <div className={styles.img_container}>
        <img className={styles.page_img} src={dev_img} alt="coding workshop" />
      </div>
    </main>
  )
}