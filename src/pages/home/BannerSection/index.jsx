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
            <img className={styles.banner__image} src="https://media.licdn.com/dms/image/D4D03AQFl-NRi0hPgsA/profile-displayphoto-shrink_800_800/0/1685033515614?e=1701907200&v=beta&t=H4aXw52L31ACKOspupDOcNLYNs4KHLoxhPZ7tmndUlA" />
        </div>
    </section>
  )
}