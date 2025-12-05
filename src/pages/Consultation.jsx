import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/consultation.module.css";

export default function Consultation() {
  const location = useLocation();
  const navigate = useNavigate();
  const doctor = location.state?.doctor;

  if (!doctor) {
    return <h2 style={{ padding: "20px" }}>No doctor selected!</h2>;
  }

  return (
    <div className={styles.container}>

      {/* Doctor Section */}
      <div className={styles.doctorCard}>
        <img src={doctor.img} className={styles.doctorImg} alt={doctor.name} />

        <div className={styles.infoSection}>
          <h2 className={styles.name}>{doctor.name}</h2>
          <p className={styles.speciality}>{doctor.role}</p>
          <p className={styles.exp}>Experience: {doctor.exp}</p>
          <p className={styles.location}>📍 {doctor.loc}</p>

          <span
            className={`${styles.status} ${
              doctor.online ? styles.online : styles.offline
            }`}
          >
            {doctor.online ? "🟢 Online" : "⚪ Offline"}
          </span>

          <p className={styles.rating}>⭐ {doctor.rating} / 5.0</p>
        </div>
      </div>

      {/* Consultation Options */}
      <div className={styles.optionsBox}>
        <h3>
          {doctor.online
            ? "Choose Consultation Method"
            : "Doctor is offline — Please book an appointment"}
        </h3>

        {/* IF DOCTOR IS ONLINE → Consultation Options */}
        {doctor.online && (
          <div className={styles.buttonsGrid}>
            <button
              className={styles.optionBtn}
              onClick={() => navigate("/videocall", { state: { doctor } })}
            >
              📹 Video Call
            </button>

            <button
              className={styles.optionBtn}
              onClick={() => navigate("/audiocall", { state: { doctor } })}
            >
              📞 Audio Call
            </button>
          </div>
        )}

        {/* IF DOCTOR IS OFFLINE → Book Appointment Only */}
        {!doctor.online && (
          <button
            className={styles.bookBtn}
            onClick={() => navigate("/bookappointment", { state: { doctor } })}
          >
            📅 Book Appointment
          </button>
        )}

        {/* DOCTOR IS ONLINE → Also show booking option */}
        {doctor.online && (
          <>
            <div className={styles.separator}></div>
            <button
              className={styles.bookBtn}
              onClick={() => navigate("/bookappointment", { state: { doctor } })}
            >
              📅 Book Appointment
            </button>
          </>
        )}
      </div>

    </div>
  );
}
