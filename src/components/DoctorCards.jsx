import React from "react";
import { useNavigate } from "react-router-dom";   // <-- ADD THIS
import styles from "../styles/doctorcards.module.css";

import firstcardimg from "../assets/firstcardimg.webp";
import secondcardimg from "../assets/secondcardimg.webp";
import thirdcardimg from "../assets/thirdcardimg.webp";
import fourthcardimg from "../assets/fourthcardimg.webp";
import fifthcardimg from "../assets/fifthcardimg.webp";

export default function DoctorCards() {
  const navigate = useNavigate();  // <-- ADD THIS

  const doctors = [
    { img: firstcardimg, name: "Dr. Rohinipriyanka Reddy", role: "General Practitioner", exp: "9 Years MBBS", loc: "Hyderabad", rating: 4.9, online: true },
    { img: secondcardimg, name: "Dr. Syed Ismail Ali", role: "General Practitioner", exp: "7 Years MBBS", loc: "Hyderabad", rating: 4.7, online: false },
    { img: thirdcardimg, name: "Dr. D Bhanu Prakash", role: "General Practitioner", exp: "10 Years MBBS", loc: "Hyderabad", rating: 4.8, online: true },
    { img: fourthcardimg, name: "Dr. Shubham Chauhan", role: "General Practitioner", exp: "4 Years MBBS", loc: "Lucknow", rating: 4.6, online: false },
    { img: fifthcardimg, name: "Dr. M L Ezhilarasan", role: "General Practitioner", exp: "6 Years MBBS", loc: "Visakhapatnam", rating: 4.7, online: true },
  ];

  return (
    <section className={styles.cardsSection}>
      <h2 className={styles.sectionTitle}>Top Doctors — Category Wise</h2>

      {/* HORIZONTAL SLIDER CONTAINER */}
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          {doctors.map((doc, index) => (
            <div className={styles.card} key={index}>

              {/* Image + Online Badge */}
              <div className={styles.imageWrapper}>
                <img src={doc.img} alt={doc.name} className={styles.doctorImg} />
                <span className={`${styles.statusBadge} ${doc.online ? styles.online : styles.offline}`}>
                  {doc.online ? "Online" : "Offline"}
                </span>
              </div>

              {/* Name */}
              <h3 className={styles.doctorName}>{doc.name}</h3>

              {/* Rating */}
              <div className={styles.ratingBox}>
                ⭐ {doc.rating}
                <span className={styles.ratingSub}> / 5.0</span>
              </div>

              {/* Details */}
              <div className={styles.detailsBox}>
                <p><strong>Speciality:</strong> {doc.role}</p>
                <p><strong>Experience:</strong> {doc.exp}</p>
                <p><strong>Location:</strong> {doc.loc}</p>
              </div>

              {/* CTA */}
              <button
                className={styles.consultBtn}
                onClick={() => navigate("/consultation", { state: { doctor: doc } })}
              >
                Consult Now
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
