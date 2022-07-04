import styles from "../Time/Time.module.css";

function getYear() {
  const data = new Date();
  return data.getFullYear().toString();
}
export default function Year() {
  return (
    <div className={styles.info}>
      <p className={styles.infoTitle}>версия</p>
      <p className={styles.infoSubTitle}>{getYear()}</p>
    </div>
  );
}
