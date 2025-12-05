export default function EmergencyCard() {
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
    </div>
  );
}
