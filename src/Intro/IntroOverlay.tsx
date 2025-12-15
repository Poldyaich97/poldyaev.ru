import { useEffect, useState } from "react";
import styles from "./IntroOverlay.module.css";

export default function IntroOverlay() {
  const [phase, setPhase] = useState<"enter" | "exit">("enter");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase("exit"), 1200);
    const hideTimer = setTimeout(() => setHidden(true), 2100);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`${styles.overlay} ${phase === "exit" ? styles.overlayExit : ""}`}
      aria-hidden="true"
    >
      <div className={styles.glow}></div>
      <div className={styles.ring}></div>
      <div className={styles.label}>poldyaev</div>
    </div>
  );
}
