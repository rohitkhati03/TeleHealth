import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/call.module.css";

export default function VideoCall() {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor;

  const localVideoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);

  useEffect(() => {
    // TEMPORARY: shows user's own camera (WebRTC real setup can be added later)
    async function startVideo() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        localVideoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Camera error:", err);
      }
    }
    startVideo();
  }, []);

  return (
    <div className={styles.callWrapper}>

      {/* HEADER */}
      <div className={styles.header}>
        <h2>Video Consultation with {doctor?.name}</h2>
      </div>

      {/* VIDEO AREA */}
      <div className={styles.videoArea}>
        <video ref={localVideoRef} autoPlay muted className={styles.videoFeed}></video>
      </div>

      {/* CALL CONTROLS */}
      <div className={styles.controls}>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={styles.controlBtn}
        >
          {isMuted ? "🔇 Unmute" : "🎤 Mute"}
        </button>

        <button
          onClick={() => setCameraOff(!cameraOff)}
          className={styles.controlBtn}
        >
          {cameraOff ? "📷 Turn Camera On" : "📵 Turn Camera Off"}
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
