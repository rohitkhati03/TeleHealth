import React from "react";
import styles from "../styles/CallToAction.module.css";

function CallToAction() {
  return (
    <section className={styles["cta-bar"]}>
      <div className={styles["cta-text"]}>
        Book your appointment with trusted nearby doctors.
      </div>
      <button className={styles["cta-btn"]}>Book Now</button>
    </section>
  );
}

export default CallToAction;
