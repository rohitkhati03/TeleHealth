import { useEffect, useState } from "react";

export default function EmergencyCard() {
  const [sosNumber, setSosNumber] = useState("");

  // load saved number
  useEffect(() => {
    const saved = localStorage.getItem("sendSOSNumber");
    if (saved) setSosNumber(saved);
  }, []);

  // save number
  const saveSOSNumber = () => {
    if (!/^\d{10,13}$/.test(sosNumber)) {
      alert("Enter a valid phone number with country code");
      return;
    }
    localStorage.setItem("sendSOSNumber", sosNumber);
    alert("SOS number saved successfully");
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        background: "#FFF5F5",
        border: "1px solid #FFB3B3",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h2 style={{ color: "#B00020", marginBottom: "12px", fontSize: "20px" }}>
        Emergency Categories
      </h2>

      <ul style={{ lineHeight: "1.7", fontSize: "15px", color: "#333" }}>
        <li>🔥 Fire Emergency</li>
        <li>🚑 Medical Emergency</li>
        <li>🚓 Police / Crime Report</li>
        <li>💥 Accident or Trauma</li>
      </ul>

      {/* SET SEND SOS NUMBER */}
      <div style={{ marginTop: "14px" }}>
        <input
          type="tel"
          placeholder="Set SEND SOS number"
          value={sosNumber}
          onChange={(e) => setSosNumber(e.target.value)}
          style={{
            width: "100%",
            padding: "9px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            fontSize: "14px",
          }}
        />

        <button
          onClick={saveSOSNumber}
          style={{
            width: "100%",
            background: "#B00020",
            color: "white",
            padding: "9px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Save Send SOS Number
        </button>
      </div>
    </div>
  );
}
