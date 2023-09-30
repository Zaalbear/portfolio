import styles from "./styles.module.scss"
import "../styles.scss"

export const PortSection = () => {
  return (
    <section id="port" className="section__container">
      <h3 className="section__icon">{`{!}`}</h3>
      <h2 className="section__title">{`<portfolio/>`}</h2>
      <p  className="section__subtitle">...Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <ul className={styles.port__list}>

        </ul>
    </section>
  )
}