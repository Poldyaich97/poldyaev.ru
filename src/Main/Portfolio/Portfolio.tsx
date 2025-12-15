import styles from "./Portfolio.module.css";
import card from "./airbnb.png";
import card2 from "./starwars.png";
import card3 from "./poldyaev.png";

const projects = [
  {
    title: "Портфолио",
    description: "Лендинг с эффектами и анимацией, адаптив под мобильные.",
    image: card3,
    alt: "Скриншот сайта портфолио",
    link: "https://poldyaev.ru",
    stack: "React + CSS Modules",
  },
  {
    title: "Star Wars",
    description: "Canvas-игра: анимация, столкновения, управление с клавиатуры.",
    image: card2,
    alt: "Скриншот игры Star Wars",
    link: "https://github.com/Poldyaich97/StarWars",
    stack: "JS + Canvas",
  },
  {
    title: "Airbnb",
    description: "Каталог жилья с фильтрами, карточками и UI-деталями.",
    image: card,
    alt: "Скриншот проекта Airbnb",
    link: "https://github.com/Poldyaich97/airbnb",
    stack: "React + TS",
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className={styles.content}>
      {projects.map((project) => (
        <a
          key={project.title}
          className={styles.card}
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.imageWrapper}>
            <img src={project.image} alt={project.alt} loading="lazy" />
          </div>
          <div className={styles.cardInfo}>
            <div>
              <p className={styles.cardTitle}>{project.title}</p>
              <p className={styles.stack}>{project.stack}</p>
            </div>
            <p className={styles.cardDescription}>{project.description}</p>
            <span className={styles.cardLink}>
              смотреть <span aria-hidden="true">→</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
