import styles from "./Portfolio.module.css";
import card from "./airbnb.png";
import card2 from "./starwars.png";
import card3 from "./poldyaev.png";
import businessCard from "./bussiness-card.png";
import fgso66 from "./fgso66.png";

const projects = [
  {
    title: "Бизнес-визитка",
    description:
      "Цифровая визитка с контактами, QR и быстрой загрузкой в телефон.",
    image: businessCard,
    alt: "Скриншот цифровой визитки",
    link: "https://business-card.skbkontur.ru/user/421c9a52-8b2d-42a0-bf8e-924a3b7077d9",
    stack: "React + TypeScript",
  },
  {
    title: "Федерация гандбола СО",
    description:
      "Промо-сайт федерации: новости, разделы о соревнованиях и контакты.",
    image: fgso66,
    alt: "Скриншот сайта федерации гандбола Свердловской области",
    link: "https://fgso66.ru/",
    stack: "HTML/CSS/JS",
  },
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
    description:
      "Canvas-игра: анимация, столкновения, управление с клавиатуры.",
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
