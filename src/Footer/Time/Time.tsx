import { useState, useEffect } from "react";
import styles from "./Time.module.css";

function getClock() {
  const data = new Date();
  let hours = data.getHours().toString();
  let minutes = data.getMinutes().toString();

  if (hours.length < 2) hours = "0" + hours;
  if (minutes.length < 2) minutes = "0" + minutes;

  return hours + ":" + minutes;
}
function getYear() {
  const data = new Date();
  return data.getFullYear().toString();
}
export default function Time() {
  const [state, setState] = useState({ time: getClock(), year: getYear() });
  useEffect(() => {
    const intervalId = window.setInterval(function () {
      setState({ time: getClock(), year: getYear() });
    }, 1000);
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={styles.timeZone}>
      <div className={styles.info}>
        <p className={styles.infoTitle}>версия</p>
        <p className={styles.infoSubTitle}>{state.year}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.infoTitle}>местное время</p>
        <p className={styles.infoSubTitle}>{state.time}</p>
      </div>
    </div>
  );
}
