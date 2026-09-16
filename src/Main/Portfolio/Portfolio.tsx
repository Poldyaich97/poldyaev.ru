import styles from "./Portfolio.module.css";
import { useState } from "react";
import card from "./airbnb.png";
import card2 from "./starwars.png";
import card3 from "./poldyaev.png";
import businessCard from "./bussiness-card.png";
import fgso66 from "./fgso66.png";
import belleVie from "./pic1.png";
import amelie from "./pic2.png";
import elenaOrlova from "./pic3.png";

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
  {
    title: "BelleVie",
    description:
      "Премиальный сайт салона красоты, который сразу показывает атмосферу, услуги и помогает записаться онлайн.",
    image: belleVie,
    alt: "Главная страница сайта салона красоты BelleVie",
    stack: "React + TypeScript + HTML/CSS",
  },
  {
    title: "АМЕЛИЕ",
    description:
      "Имиджевый сайт студии интерьеров: сильная презентация проектов, понятный процесс работы и уверенный путь к консультации.",
    image: amelie,
    alt: "Главная страница сайта студии интерьеров АМЕЛИЕ",
    stack: "React + TypeScript + HTML/CSS",
  },
  {
    title: "Elena Orlova",
    description:
      "Сайт дизайнера интерьеров с портфолио, услугами и кейсами, который превращает эстетичную подачу в новые обращения клиентов.",
    image: elenaOrlova,
    alt: "Главная страница сайта дизайнера интерьеров Elena Orlova",
    stack: "React + TypeScript + HTML/CSS",
  },
];

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <>
      <div id="portfolio" className={styles.content}>
        {projects.map((project) => (
          project.link ? (
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
          ) : (
            <button
              key={project.title}
              type="button"
              className={`${styles.card} ${styles.cardStatic}`}
              onClick={() => setExpandedProject(project)}
              aria-label={`Открыть изображение проекта ${project.title}`}
            >
              <div className={`${styles.imageWrapper} ${styles.imageWrapperCase}`}>
                <img src={project.image} alt={project.alt} loading="lazy" />
            </div>
              <div className={styles.cardInfo}>
                <div>
                  <p className={styles.cardTitle}>{project.title}</p>
                  <p className={styles.stack}>{project.stack}</p>
                </div>
                <p className={styles.cardDescription}>{project.description}</p>
                <span className={styles.cardLink}>
                  увеличить <span aria-hidden="true">↗</span>
                </span>
              </div>
            </button>
          )
        ))}
      </div>

      {expandedProject && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Изображение проекта ${expandedProject.title}`}
          onClick={() => setExpandedProject(null)}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setExpandedProject(null)}
            aria-label="Закрыть изображение"
          >
            ×
          </button>
          <img
            className={styles.expandedImage}
            src={expandedProject.image}
            alt={expandedProject.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
