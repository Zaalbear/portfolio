import { useState } from "react"
import { Skills } from "./fragments/Skills"
import { Education } from "./fragments/Education"
//import { Experience } from "./fragments/Experience"
import styles from "./styles.module.scss"
import dev_img from "../../../assets/decorations/computer.svg"
import { coursesList, educationList } from "../../../data/education.database"

export const About = () => {
  let projects_count = 0
  let certifications_count = 0
  let commend_count = 0
  const [infos, setInfos] = useState('skills')

  educationList.map((course) => (
    course.certificate ? certifications_count += 1 : null
  ));

  coursesList.map((course) => (
    course.certificate ? certifications_count += 1 : null
  ));

  return (
    <main className={styles.main_container}>
      <div className={styles.text_container}>
        <h2 className='title1'>A minha <span className='highlight'>jornada</span> até aqui...</h2>
        <p className='body'>Ingressei na carreira de TI por interesse em jogos, comecei a modificar e estudar codigos para criar meus propríos jogos e, com o tempo, comecei a estudar por conta própria e acabei me apaixonando pela area. Foi então que decidir me escrever para um curso em tempo integral na Kenzie Academy e, agora, sou um desenvolvedor fullstack fazendo projetos freelance.</p>
        <ul className={styles.counter_container}>
          <li className={styles.counter_box}>
            <h5 className={styles.counter}>{projects_count}+</h5>
            <span className={styles.description}>projetos finalizados</span>
          </li>
          <li className={styles.counter_box}>
            <h5 className={styles.counter}>{certifications_count}+</h5>
            <span className={styles.description}>certificações concluídas</span>
          </li>
          <li className={styles.counter_box}>
            <h5 className={styles.counter}>{commend_count}+</h5>
            <span className={styles.description}>avaliações positivas</span>
          </li>
        </ul>
      </div>

      <div className={styles.techs_container}>
        <nav className={styles.nav_bar_container}>
          <button className={styles.nav_bar_button} onClick={() => { setInfos('skills') }}>Habilidades</button>
          <button className={styles.nav_bar_button} onClick={() => { setInfos('education') }}>Educação</button>
          {/* <button className={styles.nav_bar_button} onClick={() => {setInfos('experience')}}>Experiência</button> */}
        </nav>

        <section>
          {infos === 'skills' ? <Skills /> : null}
          {infos === 'education' ? <Education /> : null}
          {/* {infos === 'experience' ? <Experience /> : null} */}
        </section>

        <div className={styles.img_container}>
          <img src={dev_img} alt="coding workshop" />
        </div>
      </div>
    </main>
  )
}