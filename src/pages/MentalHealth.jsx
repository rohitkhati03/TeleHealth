import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/mentalHealth.module.css";

const quickQuestions = [
  "I feel stressed often.",
  "I have trouble relaxing.",
  "I feel overwhelmed frequently.",
  "I have difficulty sleeping due to worry.",
  "I find it hard to concentrate.",
];

export default function MentalHealth() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(5).fill(0));

  const updateAnswer = (index, value) => {
    const updated = [...answers];
    updated[index] = Number(value);
    setAnswers(updated);
  };

  const handleSubmit = () => {
    const score = answers.reduce((a, b) => a + b, 0);

    if (score >= 12) {
      // High stress → send user to deep test
      navigate("/wellbeing/mental/deep-test", {
        state: { quickScore: score },
      });
    } else {
      // Mild stress → show result directly
      navigate("/wellbeing/results", {
        state: {
          type: "mental",
          quickScore: score,
          recommendations: [
            "Practice breathing exercises 10 minutes daily",
            "Try maintaining a consistent sleep schedule",
            "Reduce screen time before bed",
          ],
        },
      });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mental Well-Being Check</h1>
      <p className={styles.subtitle}>
        Answer a few quick questions to check your stress level.
      </p>

      {quickQuestions.map((q, i) => (
        <div key={i} className={styles.questionCard}>
          <p className={styles.questionText}>
            {i + 1}. {q}
          </p>

          <select
            className={styles.select}
            value={answers[i]}
            onChange={(e) => updateAnswer(i, e.target.value)}
          >
            <option value={0}>Never</option>
            <option value={1}>Sometimes</option>
            <option value={2}>Often</option>
            <option value={3}>Always</option>
          </select>
        </div>
      ))}

      <button className={styles.submitBtn} onClick={handleSubmit}>
        Submit Answers
      </button>
    </div>
  );
}
