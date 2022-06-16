import { useRef, useEffect } from "react";
import styles from "./Slider.module.css";
const SPEED = 2;
export default function Slider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let contentWidth = contentRef.current!.offsetWidth;
    let progress = -contentWidth;
    const callBack = () => {
      contentWidth = contentRef.current!.offsetWidth;
    };
    window.addEventListener("load", callBack);

    function loop() {
      progress = progress - SPEED;
      containerRef.current!.style.transform = "translateX(" + progress + "px)";

      if (progress <= -contentWidth) {
        progress = 0;
      }

      window.requestAnimationFrame(loop);
    }
    const animation = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("load", callBack);
      window.cancelAnimationFrame(animation);
    };
  }, []);
  return (
    <div className={styles.marquee}>
      <div ref={containerRef} className={styles.inner}>
        <p ref={contentRef}>FRONTEND DEVELOPER&nbsp;</p>
        <p>FRONTEND DEVELOPER</p>
      </div>
    </div>
  );
}
