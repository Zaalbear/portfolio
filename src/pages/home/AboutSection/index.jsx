import styles from "./styles.module.scss"
import "../styles.scss"

export const AboutSection = () => {
  return (
    <section id="about" className="section__container">
      <h3 className="section__icon">{`{/}`}</h3>
      <h2 className="section__title">{`<sobre_mim/>`}</h2>
      <p  className="section__subtitle">...Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div  className={styles.about__container}>
            <p className={styles.about__big}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit ipsam, dolorem illum voluptas itaque? Aperiam rerum ab, dicta reprehenderit id libero quam magnam tempore doloribus accusamus impedit repellendus aliquid!</p>

            <p className={styles.about__small}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repudiandae! Ipsa esse aperiam facilis quia aliquid provident vero ullam corrupti culpa, voluptatibus aut quis neque! Sint esse dicta perspiciatis inventore.</p>
        </div>
            <button className={styles.section__bttn}>{`{read_more}`}</button>

    </section>
  )
}