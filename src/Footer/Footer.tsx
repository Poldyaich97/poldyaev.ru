import styles from "./Footer.module.css";
import Slider from "../Slider/Slider";
import container from "../Container/Container.module.css";
import Time from "./Time/Time";
import Year from "./Year/Year";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footer__slider}>
        <Slider />
      </div>
      <div className={container.container} style={{ height: "100%" }}>
        <div className={styles.footer__content}>
          <h2 className={styles.title}>
            давайте делать крутые <br />
            продукты вместе🤘
          </h2>

          <div className={styles.contacts}>
            <a
              href="mailto:daniil@poldyaev.ru&body=Привет, хочу предложить тебе работу."
              className={styles.button}
            >
              daniil@poldyaev.ru
            </a>
            <a href="tel:+79678532813" className={styles.button}>
              +7 967 853 28 13
            </a>
          </div>
          <div>
            <div className={styles.line}></div>
            <div className={styles.infoWrapper}>
              <div className={styles.dataZone}>
                <Year />
                <Time />
              </div>

              <div className={styles.info}>
                <p className={styles.infoTitle}>контакты</p>

                <div className={styles.social}>
                  <a
                    className={styles.link}
                    href="https://t.me/PoldyaevD"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="none"
                    >
                      <path
                        d="M12.8635 0.242022L0.460122 5.04978C-0.039006 5.27365 -0.207829 5.72204 0.339461 5.96536L3.52148 6.9818L11.2151 2.2024C11.6352 1.90235 12.0653 1.98236 11.6952 2.31242L5.08739 8.32626L4.87982 10.8713C5.07208 11.2643 5.42411 11.2661 5.64865 11.0708L7.4768 9.33203L10.6078 11.6887C11.335 12.1215 11.7307 11.8422 11.8871 11.049L13.9408 1.27447C14.154 0.298132 13.7904 -0.132039 12.8635 0.242022Z"
                        fill="white"
                        strokeWidth=".55"
                      />
                    </svg>
                    <span className={styles.link__title}>telegram</span>
                  </a>
                  <a
                    className={styles.link}
                    href="https://github.com/Poldyaich97"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="none"
                    >
                      <path
                        d="M5.99984 0.166687C5.23379 0.166687 4.47525 0.317571 3.76752 0.610723C3.05978 0.903876 2.41672 1.33356 1.87505 1.87523C0.781085 2.96919 0.166504 4.45292 0.166504 6.00002C0.166504 8.57835 1.84067 10.7659 4.1565 11.5417C4.44817 11.5884 4.5415 11.4075 4.5415 11.25C4.5415 11.1159 4.5415 10.7484 4.5415 10.2642C2.92567 10.6142 2.5815 9.48252 2.5815 9.48252C2.31317 8.80585 1.934 8.62502 1.934 8.62502C1.40317 8.26335 1.97484 8.27502 1.97484 8.27502C2.55817 8.31585 2.86734 8.87585 2.86734 8.87585C3.37484 9.76252 4.23234 9.50002 4.56484 9.36002C4.61734 8.98085 4.769 8.72419 4.93234 8.57835C3.63734 8.43252 2.27817 7.93085 2.27817 5.70835C2.27817 5.06085 2.49984 4.54169 2.879 4.12752C2.82067 3.98169 2.6165 3.37502 2.93734 2.58752C2.93734 2.58752 3.42734 2.43002 4.5415 3.18252C5.00234 3.05419 5.504 2.99002 5.99984 2.99002C6.49567 2.99002 6.99734 3.05419 7.45817 3.18252C8.57234 2.43002 9.06234 2.58752 9.06234 2.58752C9.38317 3.37502 9.179 3.98169 9.12067 4.12752C9.49984 4.54169 9.7215 5.06085 9.7215 5.70835C9.7215 7.93669 8.3565 8.42669 7.05567 8.57252C7.26567 8.75335 7.45817 9.10919 7.45817 9.65169C7.45817 10.4334 7.45817 11.0634 7.45817 11.25C7.45817 11.4075 7.5515 11.5942 7.849 11.5417C10.1648 10.76 11.8332 8.57835 11.8332 6.00002C11.8332 5.23398 11.6823 4.47543 11.3891 3.7677C11.096 3.05997 10.6663 2.41691 10.1246 1.87523C9.58295 1.33356 8.93989 0.903876 8.23216 0.610723C7.52443 0.317571 6.76588 0.166687 5.99984 0.166687Z"
                        fill="white"
                        strokeWidth=".55"
                      />
                    </svg>
                    <span className={styles.link__title}>gitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
