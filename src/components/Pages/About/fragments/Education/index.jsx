import { coursesList, educationList } from "../../../../../data/education.database"
import styles from "./styles.module.scss"

export const Education = () => {
  return (
    <>
      <div className={styles.education_container}>
        <h3 className={styles.education_title}>Formação Acadêmica</h3>
        <ul className={styles.education_list}>
          {educationList.map((course, index) => (
            <li className={styles.education} key={index}>
              <p className={styles.education_text}><span className={styles.education_school}>{course.school}</span> <span className={styles.education_name}>{course.name}</span> | <span className={styles.education_date}>{course.startsAt[0]} {course.startsAt[1]} {course.endsAt[0]} {course.endsAt[1]}</span></p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.education_container}>
        <h3 className={styles.education_title}>Formação Acadêmica</h3>
        <ul className={styles.education_list}>
          {coursesList.map((course, index) => (
            <li className={styles.education} key={index}>
              <p className={styles.education_text}><span className={styles.education_school}>{course.school}</span> <span className={styles.education_name}>{course.name}</span> | <span className={styles.education_date}>{course.startsAt[0]} {course.startsAt[1]} {course.endsAt[0]} {course.endsAt[1]}</span></p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}