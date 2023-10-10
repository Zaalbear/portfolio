import React, { useState } from 'react';
import styles from "../styles.module.scss";


export const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className={styles.menu__container}>
       <button className={styles.menu__icon} onClick={toggleMenu}><img src="" alt="" /></button>
       {menu && (
        <ul className={styles.menu__list}>
          <li className={styles.list__item}><a href="#">_home</a></li>
          <li className={styles.list__item}><a href="#about">_sobre</a></li>
          <li className={styles.list__item}><a href="#port">_portfolio</a></li>
          <li className={styles.list__item}><a href="#techs">_tecnologias</a></li>
          <li className={styles.list__item}><a href="#resume">_currículo</a></li>
          <li className={styles.list__item}><a href="#contact">_contato</a></li>
        </ul>
    )}
    </div>
  )
}