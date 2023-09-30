import styles from "./styles.module.scss"

export const BannerSection = () => {
  return (
    <section className={styles.banner__container}>
        <h2 className={styles.banner__title}>// Olá, eu sou ZAALBEAR, um...</h2>
        <p className={styles.banner__text}>{`<p> `}<span className={styles.text__inner}>Desenvolvedor web|</span>{` <p/>`}</p>
        
        <div className={styles.banner__arrow}>
            <a className={styles.arrow} href="#about">{`==>`} </a>
        </div>

        <div className={styles.image__container}>
            <img className={styles.banner__image} />
        </div>
    </section>
  )
}