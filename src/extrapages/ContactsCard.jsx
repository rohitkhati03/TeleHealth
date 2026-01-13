import { useEffect, useState } from "react";

export default function ContactsCard({ userId }) {
  const [primaryContact, setPrimaryContact] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  // 🔑 user-specific storage key
  const storageKey = `primaryContact_${userId}`;

  // 📥 Load saved contact for this user
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setPrimaryContact(saved);
    }
  }, [storageKey]);

  // 💾 Save primary contact
  const savePrimaryContact = () => {
    if (!/^\d{10,13}$/.test(inputNumber)) {
      alert("📵 Enter a valid phone number with country code");
      return;
    }

    localStorage.setItem(storageKey, inputNumber);
    setPrimaryContact(inputNumber);
    setInputNumber("");
    alert("✅ Primary contact saved");
  };

  // 📞 Call primary contact
  const callPrimaryContact = () => {
    if (!primaryContact) {
      alert("⚠️ No primary contact set");
      return;
    }

    window.location.href = `tel:${primaryContact}`;
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        background: "#F3FFF3",
        border: "1px solid #B7F5B7",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h2 style={{ color: "#0A7A17", marginBottom: "12px", fontSize: "20px" }}>
        📇 Emergency Contacts
      </h2>

      <p style={{ marginBottom: "10px", lineHeight: "1.6" }}>
        👩‍👧 Mom <br />
        👨‍👧 Dad <br />
        🩺 Family Doctor <br />
        👤 Close Friend
      </p>

      <input
        type="tel"
        placeholder="📱 Set primary contact number"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
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
        onClick={savePrimaryContact}
        style={{
          background: "#0A7A17",
          color: "white",
          padding: "8px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        💾 Set Primary Contact
      </button>

      <button
        onClick={callPrimaryContact}
        style={{
          background: "#0A7A17",
          color: "white",
          padding: "8px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
          width: "100%",
        }}
      >
        📞 Call Primary Contact
      </button>
    </div>
  );
}
