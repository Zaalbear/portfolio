import { TechList } from "./TechList"
import styles from "./styles.module.scss"
import "../styles.scss"

export const TechSection = () => {
  return (
    <section id="techs" className="section__container">
      <h3 className="section__icon">{`{#}`}</h3>
      <h2 className="section__title">{`<tecnologias/>`}</h2>
      <p  className="section__subtitle">...Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <ul className={styles.tech__list}>
          <TechList/>
      </ul>
    </section>
  )
}