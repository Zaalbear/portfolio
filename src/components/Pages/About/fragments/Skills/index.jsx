import { techList, toolsList, uxuiList } from "../../../../../data/skills.database";
import styles from "./styles.module.scss"

export const Skills = () => {
  return (
    <>
      <div className={styles.skills_container}>
        <h3 className={styles.skills_title}>Desenvolvimento Web</h3>
        <ul className={styles.skills_list}>
          {techList.map((skill, index) => (
            <li className={styles.skill} key={index}>
              <i
                className={`skill ${skill.icon}`}
                title={skill.name}
              ></i>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.skills_container}>
        <h3 className={styles.skills_title}>Ferramentas</h3>
        <ul className={styles.skills_list}>
          {toolsList.map((skill, index) => (
            <li className={styles.skill} key={index}>
              <i
                className={`skill ${skill.icon}`}
                title={skill.name}
              ></i>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.skills_container}>
        <h3 className={styles.skills_title}>UX/UI Desing</h3>
        <ul className={styles.skills_list}>
          {uxuiList.map((skill, index) => (
            <li className={styles.skill} key={index}>
              <i
                className={`skill ${skill.icon}`}
                title={skill.name}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
