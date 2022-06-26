import styles from "./Burger.module.css";
import { useState } from "react";

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((currentOpen) => !currentOpen);

  if (isOpen === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <div className={styles.burger__icon} onClick={handleClick}>
      <span></span>
    </div>
  );
}
