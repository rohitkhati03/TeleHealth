import React from "react";

export default function TestimonialCard({ name, feedback }) {
  const styles = {
    card: {
      backgroundColor: "#ffffff",
      width: "280px",
      padding: "22px",
      borderRadius: "16px",
      textAlign: "center",
      border: "1px solid #e5e9ff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "0.3s ease",
      position: "relative",
      cursor: "pointer",
    },

    quoteIcon: {
      fontSize: "38px",
      color: "#2E5BFF",
      opacity: 0.28,
      position: "absolute",
      top: "12px",
      left: "12px",
    },

    feedback: {
      fontStyle: "italic",
      fontSize: "15px",
      color: "#333",
      margin: "20px 0 15px",
      lineHeight: 1.4,
    },

    footer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    avatar: {
      width: "48px",
      height: "48px",
      backgroundColor: "#2E5BFF",
      color: "#fff",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "8px",
      boxShadow: "0 3px 10px rgba(46,91,255,0.35)",
    },

    name: {
      color: "#111",
      fontSize: "17px",
      fontWeight: 600,
      marginTop: "4px",
    },
  };

  // Hover animation simulated using events
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(46,91,255,0.25)";
    e.currentTarget.style.borderColor = "#2E5BFF";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
    e.currentTarget.style.borderColor = "#e5e9ff";
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={styles.quoteIcon}>❝</div>

      <p style={styles.feedback}>"{feedback}"</p>

      <div style={styles.footer}>
        <div style={styles.avatar}>{name.charAt(0).toUpperCase()}</div>
        <h4 style={styles.name}>{name}</h4>
      </div>
    </div>
  );
}
