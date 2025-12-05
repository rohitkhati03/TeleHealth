import React, { useState, useEffect } from "react";
import styles from "../styles/homeslider.module.css";

// Import Local Slider Images
import firstslider from "../assets/Slider_01.png";
import secondslider from "../assets/secondsliderimg.jpg";
import thirdslider from "../assets/thirdsliderimg.jpg";

// Store images inside array
const images = [firstslider, secondslider, thirdslider];

export default function HomeSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4.5 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(autoSlide);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className={styles.sliderWrapper}>
      <div
        className={styles.sliderTrack}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div className={styles.slide} key={i}>
            <img src={src} alt={`Slide ${i + 1}`} className={styles.slideImg} />

            {/* Overlay Text */}
            <div className={styles.overlay}>
              <h2 className={styles.title}>Your Health, Our Priority</h2>
              <p className={styles.subtitle}>
                Trusted TeleHealth Services from Top Doctors
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className={`${styles.arrow} ${styles.left}`} onClick={prev}>
        ❮
      </button>
      <button className={`${styles.arrow} ${styles.right}`} onClick={next}>
        ❯
      </button>

      {/* Dot Indicators */}
      <div className={styles.dotsWrapper}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${index === i ? styles.activeDot : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
