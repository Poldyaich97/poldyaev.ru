import { useRef, useEffect } from "react";
import styles from "./Slider.module.css";
const SPEED = 4;
export default function Slider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const contentWidth = contentRef.current!.offsetWidth;
    let progress = 0;

    function loop() {
      progress = progress - SPEED;
      containerRef.current!.style.transform = "translateX(" + progress + "px)";
      if (progress <= -contentWidth) {
        progress = 0;
      }

      window.requestAnimationFrame(loop);
    }
    loop();
  }, []);
  return (
    <div className={styles.marquee}>
      <div ref={containerRef} className={styles.inner}>
        <p ref={contentRef}>FRONTEND DEVELOPER</p>
        <p>FRONTEND DEVELOPER</p>
      </div>
    </div>
  );
}
