import React from "react";
import styles from "../styles/NearbyDoctor.module.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Emily Carter",
    specialty: "Cardiologist",
    distance: "1.2 km away",
    image:
      "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 2,
    name: "Dr. Ben Adams",
    specialty: "Dermatologist",
    distance: "2.5 km away",
    image:
      "https://images.pexels.com/photos/8460094/pexels-photo-8460094.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 3,
    name: "Dr. Chloe Davis",
    specialty: "Pediatrician",
    distance: "3.1 km away",
    image:
      "https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 4,
    name: "Dr. Mark Roberts",
    specialty: "Neurologist",
    distance: "4.0 km away",
    image:
      "https://images.pexels.com/photos/2182979/pexels-photo-2182979.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

function NearbyDoctors() {
  return (
    <section className={styles["nearby-wrapper"]}>
      <div className={styles["nearby-header-block"]}>
        <h2 className={styles["nearby-title"]}>Nearby Doctors</h2>
        <p className={styles["nearby-subtitle"]}>
          Professionals ready to help you.
        </p>
      </div>

      <div className={styles["doctor-card-grid"]}>
        {doctors.map((doc) => (
          <div key={doc.id} className={styles["doctor-card-box"]}>
            <img src={doc.image} alt={doc.name} className={styles["doctor-avatar"]} />
            <h3 className={styles["doctor-name-text"]}>{doc.name}</h3>
            <p className={styles["doctor-specialty-text"]}>{doc.specialty}</p>
            <p className={styles["doctor-distance-text"]}>📍 {doc.distance}</p>

            <div className={styles["doctor-button-group"]}>
              <button className={styles["outline-btn"]}>View Profile</button>
              <button className={styles["primary-btn"]}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NearbyDoctors;
