import styles from "./Portfolio.module.css";
import card from "./projects1.png";
import card2 from "./projects2.png";
import card3 from "./projects3.png";

export default function Portfolio() {
  return (
    <div id="portfolio" className={styles.content}>
      <div className={styles.card}>
        <img src={card3} alt="Airbnb" />
      </div>
      <div className={styles.card}>
        <img src={card2} alt="Star Wars" />
      </div>
      <div className={styles.card}>
        <img src={card} alt="Portfolio" />
      </div>
    </div>
  );
}
