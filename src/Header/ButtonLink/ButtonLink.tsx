import styles from "./ButtonLink.module.css";

export default function Button() {
  return (
    <a
      href="https://t.me/PoldyaevD"
      target="_blank"
      rel="noreferrer"
      className={styles.link}
      aria-label="Написать мне в Telegram"
    >
      <span className={styles.linkText}>Написать</span>
      <span className={styles.linkSub}>в Telegram</span>
    </a>
  );
}
