export default function ContactsCard() {
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
        Emergency Contacts
      </h2>

      <p style={{ marginBottom: "10px", lineHeight: "1.6" }}>
        👩‍👧 Mom  
        <br />
        👨‍👧 Dad  
        <br />
        🩺 Family Doctor  
        <br />
        👤 Close Friend
      </p>

      {/* Quick contact buttons */}
      <button
        style={{
          background: "#0A7A17",
          color: "white",
          padding: "8px 18px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Call Primary Contact
      </button>
    </div>
  );
}
