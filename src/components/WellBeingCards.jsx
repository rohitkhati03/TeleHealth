import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/wellbeingCards.module.css";

export default function WellBeingCards() {
  const navigate = useNavigate();

  const items = [
    {
      title: "Physical Well-Being",
      desc: "Track your vitals & lifestyle habits",
      emoji: "💪",
      route: "/wellbeing/physical",
    },
    {
      title: "Mental Well-Being",
      desc: "Check your stress & anxiety levels",
      emoji: "🧠",
      route: "/wellbeing/mental",
    },
    {
      title: "Emotional Well-Being",
      desc: "Understand your mood & emotions",
      emoji: "💛",
      route: "/wellbeing/emotional",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Know Your Well-Being</h2>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.emoji}>{item.emoji}</div>

            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>

            <button
              className={styles.btn}
              onClick={() => navigate(item.route)}
            >
              Know Yourself →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
