import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/mentalDeepTest.module.css";

const quickQs = [
  "I feel stressed often.",
  "I have trouble relaxing.",
  "I feel overwhelmed frequently.",
  "I have difficulty sleeping due to worry.",
  "I find it hard to concentrate."
];

const GAD7_QS = [
 "Feeling nervous, anxious or on edge",
 "Not being able to stop or control worrying",
 "Worrying too much about different things",
 "Trouble relaxing",
 "Being so restless it's hard to sit still",
 "Becoming easily annoyed or irritable",
 "Feeling afraid as if something awful might happen"
];

const PHQ9_QS = [
 "Little interest or pleasure in doing things",
 "Feeling down, depressed, or hopeless",
 "Trouble falling or staying asleep",
 "Feeling tired or having little energy",
 "Poor appetite or overeating",
 "Feeling bad about yourself",
 "Trouble concentrating",
 "Moving or speaking slowly or being fidgety",
 "Thoughts that you would be better off dead"
];

export default function MentalDeepTest() {
  const navigate = useNavigate();

  const [quickAnswers, setQuickAnswers] = useState(Array(5).fill(0));
  const [gadAnswers, setGadAnswers] = useState(Array(7).fill(0));
  const [phqAnswers, setPhqAnswers] = useState(Array(9).fill(0));

  const setArray = (setter, arr, i, val) => {
    const updated = [...arr];
    updated[i] = Number(val);
    setter(updated);
  };

  const submitQuick = () => {
    const score = quickAnswers.reduce((a,b)=>a+b,0);

    if (score >= 12) {
      alert("Your quick score suggests a deeper check. Please complete the detailed tests below.");
    } else {
      axios.post("/api/wellbeing/mental", { quick: quickAnswers })
        .then(r =>
          navigate("/wellbeing/results", {
            state: {
              type: "mental",
              quickScore: score,
              recommendations: r.data.recommendations
            }
          })
        )
        .catch(() => alert("Unable to save results."));
    }
  };

  const submitDeep = async () => {
    try {
      const res = await axios.post("/api/wellbeing/mental", {
        gad7: gadAnswers,
        phq9: phqAnswers
      });

      navigate("/wellbeing/results", {
        state: {
          type: "mental",
          gad7Score: res.data.gad7Score,
          phq9Score: res.data.phq9Score,
          recommendations: res.data.recommendations
        }
      });
    } catch {
      alert("Saving deep test failed.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mental Health — Quick Screening</h1>

      {/* Quick Questions */}
      {quickQs.map((q, i) => (
        <div key={i} className={styles.questionCard}>
          <p>{i + 1}. {q}</p>
          <select
            className={styles.select}
            value={quickAnswers[i]}
            onChange={(e) => setArray(setQuickAnswers, quickAnswers, i, e.target.value)}
          >
            <option value={0}>Never</option>
            <option value={1}>Sometimes</option>
            <option value={2}>Often</option>
            <option value={3}>Always</option>
          </select>
        </div>
      ))}

      <button className={styles.mainBtn} onClick={submitQuick}>
        Submit Quick Test
      </button>

      <div className={styles.divider}></div>

      {/* GAD-7 */}
      <h2 className={styles.subtitle}>Detailed Test — GAD-7</h2>
      {GAD7_QS.map((q, i) => (
        <div key={i} className={styles.questionCard}>
          <p>{i + 1}. {q}</p>
          <select
            className={styles.select}
            value={gadAnswers[i]}
            onChange={(e) => setArray(setGadAnswers, gadAnswers, i, e.target.value)}
          >
            <option value={0}>Not at all</option>
            <option value={1}>Several days</option>
            <option value={2}>More than half the days</option>
            <option value={3}>Nearly every day</option>
          </select>
        </div>
      ))}

      {/* PHQ-9 */}
      <h2 className={styles.subtitle}>Detailed Test — PHQ-9</h2>
      {PHQ9_QS.map((q, i) => (
        <div key={i} className={styles.questionCard}>
          <p>{i + 1}. {q}</p>
          <select
            className={styles.select}
            value={phqAnswers[i]}
            onChange={(e) => setArray(setPhqAnswers, phqAnswers, i, e.target.value)}
          >
            <option value={0}>Not at all</option>
            <option value={1}>Several days</option>
            <option value={2}>More than half the days</option>
            <option value={3}>Nearly every day</option>
          </select>
        </div>
      ))}

      <button className={styles.secondaryBtn} onClick={submitDeep}>
        Submit Detailed Tests
      </button>
    </div>
  );
}
