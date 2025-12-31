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

  // 🚨 SEND SOS → WhatsApp with address + emergency
  const triggerSOS = () => {
    setPanicMode(true);
    setTimeout(() => setPanicMode(false), 3000);

    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await res.json();
        const address = data.display_name || "Address not available";

        const parentNumber = "916397859115"; // digits only

        const text = `🚨 SOS ALERT 🚨
Emergency: ${selectedEmergency || "General"}
Message: ${message || "No message"}

Address:
${address}

Map:
https://www.google.com/maps?q=${lat},${lng}`;

        window.location.href =
          "https://wa.me/" +
          parentNumber +
          "?text=" +
          encodeURIComponent(text);
      },
      () => alert("Please allow location access"),
      { enableHighAccuracy: true }
    );
  };

  // 📞 CALL SOS 112
  const callSOS112 = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    window.location.href = "tel:112";

    if (!isMobile) {
      setTimeout(() => {
        alert("Choose a calling application to dial emergency number 112.");
      }, 500);
    }
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
                fontSize: "15px",
                border:
                  selectedEmergency === type
                    ? "2px solid #B00020"
                    : "2px solid #d5d5d5",
                background:
                  selectedEmergency === type ? "#FFD6D6" : "#ffffff",
                color:
                  selectedEmergency === type ? "#B00020" : "#333",
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
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <textarea
            placeholder="Add additional emergency details..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>

        {/* BIG SOS + CALL BUTTONS */}
        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
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
            }}
          >
            🚨 SEND SOS NOW
          </button>

          <button
            onClick={callSOS112}
            style={{
              background: "#000",
              color: "white",
              padding: "18px 40px",
              border: "none",
              borderRadius: "14px",
              fontSize: "22px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            📞 CALL SOS (112)
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
