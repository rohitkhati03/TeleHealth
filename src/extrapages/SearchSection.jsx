import React from "react";
import styles from "../styles/SearchSelection.module.css";
import searchimage from "../assets/searchimage.png"
function SearchSection() {
  return (
    <section className={styles["search-hero"]}>
      {/* Left side text + search */}
      <div className={styles["search-hero-left"]}>
        <h1 className={styles["search-hero-title"]}>Find a Doctor Near You</h1>
        <p className={styles["search-hero-subtitle"]}>
          Instant access to verified doctors and clinics in your area.
        </p>

        <div className={styles["search-box-wrapper"]}>
          <input
            type="text"
            placeholder="Location"
            className={styles["search-input-field"]}
          />
          <select className={styles["search-input-field"]}>
            <option>Doctor Specialty</option>
            <option>Cardiologist</option>
            <option>Dermatologist</option>
            <option>Pediatrician</option>
            <option>Neurologist</option>
          </select>
          <button className={styles["primary-btn"]}>Search</button>
        </div>
      </div>

      {/* Right side image / illustration */}
      <div className={styles["search-hero-right"]}>
      
         <img src={searchimage} width={210} />
      </div>
    </section>
  );
}

export default SearchSection;
