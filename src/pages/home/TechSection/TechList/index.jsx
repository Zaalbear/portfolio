import { technologies } from "../../../../data/technologies"
import styles from "../styles.module.scss"

export const TechList = () => {
    return(
        technologies.map(({ name, img }) => {
            return (
                <li className={styles.list__item}>
                    <img className={styles.item__image} src={img} alt={`logo de ${name}`} />
                    <h3 className={styles.item__name}>{`{" _${name}|"}`}</h3>
                </li>
            )
        })
    )
}