import { projectsList } from "../../../data/projects.database";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import dev_img from "../../../assets/decorations/relaxing_dev.svg"
import styles from "./styles.module.scss";

export const Projects = () => {
  return (
    <main className={styles.main_container}>
      <div className={styles.title_container}>
        <h2 className="title1">Meus projetos <span className="highlight">.</span></h2>
        <p className="body">Explore meu portfólio de projetos como desenvolvedor frontend, onde cada linha de código conta uma história visual. De websites responsivos a experiências interativas, cada projeto demonstra meu compromisso em combinar estética e funcionalidade no mundo digital.</p>

        <div className={styles.img_container}>
          <img src={dev_img} alt="coding workshop" />
        </div>
      </div>

      <div className={styles.projects_container}>
        <ul className={styles.projects_list}>
          {projectsList.map((project, index) => (
            <li className={styles.project_card} key={index}>
              <div className={styles.card_img_container}>
                <div className={styles.card_tags}>
                  {project.field === 'front' ? <span className={styles.front_tag}>Front-end</span> : <span className={styles.back_tag}>Back-end</span>}
                  {project.isNew ? <span className={styles.new_tag}>Latest</span> : null}
                </div>
                <img className={styles.card_img} src={project.imgURL} alt="projectimg" />
              </div>
              <a href={project.repoURL} className={styles.cover} target="_blank">
                <p className={`${styles.cover_text} headline`}>Ver projeto <ArrowForwardIcon /></p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}