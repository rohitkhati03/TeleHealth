import React from "react";
import sosheadimage from "../assets/sosheadimage.png";

export default function EmergencyGuideImage() {
  return (
    <>
      <div style={styles.center}>
        <div style={styles.border}>
          <div style={styles.inner}>
            <img
              src={sosheadimage}
              alt="Emergency Assistance Guide"
              style={styles.image}
            />
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes borderRun {
            0% { background-position: 0% 50%; }
            100% { background-position: 400% 50%; }
          }
        `}
      </style>
    </>
  );
}

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    marginTop: "14px",
    marginBottom: "28px", // space below
  },

  // 🔴 THIS IS THE BORDER (ONLY 5px)
  border: {
    padding: "5px",                 // ✅ EXACT 5px BORDER
    borderRadius: "16px",
    background: "linear-gradient(90deg, red, black, red, black)",
    backgroundSize: "400% 400%",
    animation: "borderRun 4s linear infinite",
    width: "30%",
    boxSizing: "border-box",
  },

  // ❌ NO PADDING HERE
  inner: {
    borderRadius: "11px",            // slightly less than border
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",  // no background
  },

  image: {
    width: "100%",
    display: "block",
    borderRadius: "11px",
  },
};
