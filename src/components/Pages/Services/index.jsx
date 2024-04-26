import dev_img from "../../../assets/decorations/coding_workshop.svg"
import styles from "./styles.module.scss";

export const Services = () => {
  return (
    <main className={styles.main_container}>
      <div className={styles.text_box}>
        <div className={styles.title_container}>
          <h2 className='title1'>
            Meus serviços <span className='highlight'>:</span>
          </h2>
        </div>
        <div className={styles.paragraph_container}>
          <p className='body'>
            Transformo conceitos em realidade digital, com especialização em
            design gráfico, desenvolvimento web e soluções visuais
            personalizadas para elevar a presença online da sua empresa.
          </p>
        </div>
      </div>

      <div className={styles.cards_container}>
        <div className={styles.card}>
          <i className={`${styles.icon} devicon-appwrite-plain`}></i>
          <h5 className={`${styles.card_title} headline`}>Front-end</h5>
          <p className={`${styles.card_text} body`}>Trabalho em soluções que abrangem todo o front-end. Estou apto a criar aplicações robustas, integradas e responsivas, para proporcionar a melhor experiência possível para o usuário.</p>
          <div className={styles.card_img_container}>
            <i className={`${styles.img} devicon-react-original-wordmark`}></i>
            <i className={`${styles.img} devicon-sass-original`}></i>
            <i className={`${styles.img} devicon-javascript-plain`}></i>
          </div>
        </div>

        <div className={styles.card}>
          <i className={`${styles.icon} devicon-azuresqldatabase-plain`}></i>
          <h5 className={`${styles.card_title} headline`}>Back-end</h5>
          <p className={`${styles.card_text} body`}>Sou capaz de desenvolver no back-end para construir bases sólidas para aplicações, garantindo desempenho, escalabilidade e segurança.</p>
          <div className={styles.card_img_container}>
            <i className={`${styles.img} devicon-python-plain-wordmark`}></i>
            <i className={`${styles.img} devicon-django-plain`}></i>
            <i className={`${styles.img} devicon-typescript-plain`}></i>
          </div>
        </div>

        <div className={styles.card}>
          <i className={`${styles.icon} devicon-chrome-plain`}></i>
          <h5 className={`${styles.card_title} headline`}>Outros</h5>
          <p className={`${styles.card_text} body`}>Sou entusiasta do aprendizado contínuo alimentando minha busca por novos desafios e soluções inovadoras em programação.</p>
          <div className={styles.card_img_container}>
            <i className={`${styles.img} devicon-windows8-original`}></i>
            <i className={`${styles.img} devicon-linux-plain`}></i>
            <i className={`${styles.img} devicon-apple-original`}></i>
          </div>
        </div>
      </div>
    </main>
  );
};
