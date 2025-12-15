import container from "../Container/Container.module.css";
import styles from "./Main.module.css";
import Portfolio from "./Portfolio/Portfolio";

const repositories = [
  {
    name: "airbnb",
    tech: "React, TypeScript",
    link: "https://github.com/Poldyaich97/airbnb",
    description: "Клон Airbnb c карточками жилья и авторизацией.",
  },
  {
    name: "starwars",
    tech: "Vanilla JS + Canvas",
    link: "https://github.com/Poldyaich97/StarWars",
    description: "Мини-игра на Canvas с анимацией и управлением.",
  },
  {
    name: "portfolio",
    tech: "HTML/CSS/JS",
    link: "https://github.com/Poldyaich97/poldyaev.ru",
    description: "Первая версия портфолио: верстка и базовые эффекты.",
  },
  {
    name: "admtalk",
    tech: "CRA + TypeScript",
    link: "https://github.com/Poldyaich97/admtalk",
    description: "Чат-приложение с роутингом и состояниями.",
  },
];

export default function Main() {
  return (
    <main id="main" className={styles.mainStyles}>
      <div className={container.container}>
        <section className={styles.section}>
          <p className={styles.lead}>
            Я люблю превращать идеи в быстрые интерфейсы. Собираю
            дизайн-системы, работаю с React/TypeScript, аккуратно стыкую фронт с
            API и не боюсь сложных анимаций. Для меня важно, чтобы код был
            чистым, а пользователю — понятно и удобно.
          </p>
          <div className={styles.pills}>
            <span>React</span>
            <span>TypeScript</span>
            <span>CRA/Vite</span>
            <span>REST API</span>
            <span>CSS Modules</span>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>что умею</p>
            <h2 className={styles.sectionTitle}>Ключевые навыки</h2>
            <p className={styles.note}>
              Комбинация инженерного подхода, дизайна и заботы о пользователе.
            </p>
          </div>
          <div className={styles.skillGrid}>
            <div className={styles.skillCard}>
              <h3>Интерфейсы</h3>
              <p>
                Верстаю адаптивно, пишу переиспользуемые компоненты, держу
                контраст и читаемость.
              </p>
            </div>
            <div className={styles.skillCard}>
              <h3>Логика</h3>
              <p>
                Работаю с состоянием, формами и валидацией, подключаю сторонние
                API и сервисы.
              </p>
            </div>
            <div className={styles.skillCard}>
              <h3>Качество</h3>
              <p>
                Следую гайдлайнам, держу структуру проекта, пишу понятный код и
                коммиты.
              </p>
            </div>
            <div className={styles.skillCard}>
              <h3>Управление проектами</h3>
              <p>
                Четко фиксирую задачи, приоритезирую, ставлю сроки и держу
                статус.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>проекты</p>
            <h2 className={styles.sectionTitle}>Код и демо</h2>
            <p className={styles.note}>
              Открытые репозитории и живые превью с основными результатами.
            </p>
          </div>

          <div className={styles.repoList}>
            {repositories.map((repo) => (
              <a
                key={repo.name}
                href={repo.link}
                className={styles.repoCard}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <p className={styles.nameProject}>{repo.name}</p>
                  <p className={styles.project}>{repo.tech}</p>
                  <p className={styles.repoDescription}>{repo.description}</p>
                </div>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>

          <Portfolio />
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>формат</p>
            <h2 className={styles.sectionTitle}>Рабочий порядок</h2>
          </div>
          <ul className={styles.checklist}>
            <li className={styles.checkItem}>
              Собираю требования, задаю вопросы, фиксирую объем работы.
            </li>
            <li className={styles.checkItem}>
              Разбиваю задачи, показываю промежуточные демо, быстро реагирую на
              фидбек.
            </li>
            <li className={styles.checkItem}>
              Передаю сборку, помогаю с деплоем и проверкой на проде.
            </li>
          </ul>
        </section>

        <section className={`${styles.section} ${styles.contactSection}`}>
          <p className={styles.kicker}>контакты</p>
          <h2 className={styles.sectionTitle}>Готов обсудить задачу</h2>
          <p className={styles.lead}>
            Пишите в Telegram или на почту — отвечаю быстро и предлагаю
            конкретные шаги.
          </p>
          <div className={styles.contactActions}>
            <a
              className={styles.primaryButton}
              href="https://t.me/PoldyaevD"
              target="_blank"
              rel="noreferrer"
            >
              Написать в Telegram
            </a>
            <a
              className={styles.secondaryButton}
              href="mailto:daniil@poldyaev.ru"
            >
              daniil@poldyaev.ru
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
