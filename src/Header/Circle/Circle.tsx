import styles from "./Circle.module.css";

export default function Circle() {
  return (
    <a
      href="https://career.habr.com/poldyaich97"
      target="_blank"
      className={styles.circle}
      rel="noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="37"
        fill="none"
      >
        <g clipPath="url(#a)">
          <path
            fill="#255AF6"
            stroke="#1E1E1E"
            strokeWidth="1.06"
            d="M26.66 23.46V6.33h3.36V30.5H5.86v-3.36h18.4l-.9-.9L4.5 7.38l2.4-2.4 18.86 18.85.9.9v-1.27Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path
              fill="#fff"
              d="M0 0h35.67v35.67H0z"
              transform="rotate(-90 18.18 18.07)"
            />
          </clipPath>
        </defs>
      </svg>
      <div className={styles.circleText}>
        <b>п</b>
        <b>о</b>
        <b>с</b>
        <b>м</b>
        <b>о</b>
        <b>т</b>
        <b>р</b>
        <b>е</b>
        <b>т</b>
        <b>ь</b>
        <b>р</b>
        <b>е</b>
        <b>з</b>
        <b>ю</b>
        <b>м</b>
        <b>е</b>
      </div>
    </a>
  );
}
