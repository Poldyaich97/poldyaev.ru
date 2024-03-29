import styles from "./Burger.module.css";

export default function Burger(props: { onClick: () => void }) {
  return (
    <div className={styles.burger} onClick={props.onClick}>
      <span></span>
    </div>
  );
}
