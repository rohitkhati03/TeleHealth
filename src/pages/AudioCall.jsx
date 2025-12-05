import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/call.module.css";

export default function AudioCall() {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor;

  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className={styles.callWrapper}>

      {/* HEADER */}
      <div className={styles.header}>
        <h2>Audio Call with {doctor?.name}</h2>
      </div>

      {/* AUDIO VISUALIZER / UI */}
      <div className={styles.audioArea}>
        <div className={styles.circlePulse}></div>
        <div className={styles.circlePulse}></div>
        <div className={styles.circlePulse}></div>
      </div>

      <p className={styles.callingText}>🔊 Connected...</p>

      {/* CONTROLS */}
      <div className={styles.controls}>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={styles.controlBtn}
        >
          {isMuted ? "🔇 Unmute" : "🎤 Mute"}
        </button>

        <button
          className={styles.endCall}
          onClick={() => navigate("/")}
        >
          🔴 End Call
        </button>
      </div>

    </div>
  );
}
