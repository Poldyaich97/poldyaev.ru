import styles from "./Portfolio.module.css";
import card from "./airbnb.png";
import card2 from "./starwars.png";
import card3 from "./poldyaev.png";

export default function Portfolio() {
  return (
    <div id="portfolio" className={styles.content}>
      <div className={styles.card}>
        <img src={card3} alt="Portfolio" />
      </div>
      <div className={styles.card}>
        <img src={card2} alt="Star Wars" />
      </div>
      <div className={styles.card}>
        <img src={card} alt="airbnb" />
      </div>
    </div>
  );
}
