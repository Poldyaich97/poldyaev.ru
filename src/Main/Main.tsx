import container from "../Container/Container.module.css";
import styles from "./Main.module.css";
import Portfolio from "./Portfolio/Portfolio";

export default function Header() {
  return (
    <main className={styles.mainStyles}>
      <div className={container.container}>
        <div className={styles.column}>
          <div className={styles.row}>
            <a
              href="https://github.com/Poldyaich97/airbnb"
              className={styles.link}
            >
              <p className={styles.nameProject}>airbnb</p>
              <p className={styles.project}>React</p>
            </a>
          </div>
          <div className={styles.row}>
            <a
              href="https://github.com/Poldyaich97/StarWars"
              className={styles.link}
            >
              <p className={styles.nameProject}>starwars</p>
              <p className={styles.project}>JS Canvas</p>
            </a>
          </div>
          <div className={styles.row}>
            <a
              href="https://github.com/Poldyaich97/poldyaev.ru"
              className={styles.link}
            >
              <p className={styles.nameProject}>portfolio</p>
              <p className={styles.project}>Html/CSS/Js</p>
            </a>
          </div>
        </div>
        <Portfolio />
      </div>
    </main>
  );
}
