import React, { useState } from "react";
import Footer from "../components/Footer";
import LocationCard from "../extrapages/LocationCard";
import EmergencyCard from "../extrapages/EmergencyCard";
import ContactsCard from "../extrapages/ContactsCard";

export default function SOS() {
  const [message, setMessage] = useState("");
  const [panicMode, setPanicMode] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState("");

  const emergencyTypes = [
    "Heart Attack",
    "Breathlessness",
    "Accident",
    "Unconscious",
    "Severe Bleeding",
    "Stroke",
  ];

  const triggerSOS = () => {
    setPanicMode(true);
    setTimeout(() => setPanicMode(false), 3000);

    alert(
      `🚨 SOS SENT!\n\nEmergency: ${selectedEmergency || "General"}\nMessage: ${
        message || "No message"
      }\nLocation: Auto-detecting...`
    );
  };

  return (
    <>
      <div
        style={{
          backgroundColor: panicMode ? "#ff2b2bb0" : "#fff",
          transition: "0.3s",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        {/* TITLE */}
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "800",
            color: "#B00020",
            marginBottom: "20px",
          }}
        >
          Emergency SOS
        </h2>

       {/* QUICK EMERGENCY BUTTONS */}
<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "25px",
  }}
>
  {emergencyTypes.map((type) => (
    <button
      key={type}
      onClick={() => setSelectedEmergency(type)}
      style={{
        padding: "12px 20px",
        borderRadius: "30px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "0.25s",
        fontSize: "15px",
        border: selectedEmergency === type ? "2px solid #B00020" : "2px solid #d5d5d5",
        background: selectedEmergency === type ? "#FFD6D6" : "#ffffff",
        color: selectedEmergency === type ? "#B00020" : "#333",
        boxShadow:
          selectedEmergency === type
            ? "0 4px 10px rgba(176,0,32,0.3)"
            : "0 2px 6px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        if (selectedEmergency !== type) {
          e.target.style.background = "#f4f4f4";
        }
      }}
      onMouseLeave={(e) => {
        if (selectedEmergency !== type) {
          e.target.style.background = "#ffffff";
        }
      }}
    >
      {type}
    </button>
  ))}
</div>


        {/* SOS MESSAGE */}
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <textarea
            placeholder="Add additional emergency details..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
              outline: "none",
              boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
            }}
            rows={4}
          />
        </div>

        {/* BIG SOS BUTTON */}
        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <button
            onClick={triggerSOS}
            style={{
              background: "#B00020",
              color: "white",
              padding: "18px 60px",
              border: "none",
              borderRadius: "14px",
              fontSize: "22px",
              fontWeight: "700",
              cursor: "pointer",
              letterSpacing: "1px",
              boxShadow: "0 5px 12px rgba(176,0,32,0.4)",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            🚨 SEND SOS NOW
          </button>
        </div>

        {/* CARDS SECTION */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            maxWidth: "1100px",
            margin: "35px auto",
          }}
        >
          <EmergencyCard />
          <LocationCard />
          <ContactsCard />
        </div>

        <Footer />
      </div>
    </>
  );
}
