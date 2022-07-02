import styles from "./Menu.module.css";
import Burger from "./Burger/Burger";

import { useEffect, useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((currentOpen) => !currentOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <div className={`${styles.burger_menu}`}>
      <Burger onClick={handleClick} />
      <nav
        className={`${styles.menu__body}  ${
          isOpen ? styles.menu__body_active : ""
        }`}
      >
        <ul className={styles.menu__list}>
          <li>
            <a href="#portfolio" className={styles.link}>
              Работы
            </a>
          </li>
          <li>
            <a
              href="https://career.habr.com/poldyaich97"
              target="_blank"
              className={styles.link}
              rel="noreferrer"
            >
              Резюме
            </a>
          </li>
          <li>
            <a href="#footer" className={styles.link}>
              Контакты
            </a>
          </li>
          <div className={styles.line} />
          <li>
            <a href="mailto:daniil@poldyaev.ru" className={styles.link}>
              daniil@poldyaev.ru
            </a>
          </li>
          <li>
            <a href="tel:+79678532813" className={styles.link}>
              +7 967 853 28 13
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
