export default function LocationCard() {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        background: "#E8F4FF",
        border: "1px solid #A3D0FF",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
      }}
    >
      <h2 style={{ color: "#0051A8", marginBottom: "12px", fontSize: "20px" }}>
        Live Location
      </h2>
      <p style={{ fontSize: "15px", color: "#333" }}>
        📍 Fetching your real-time GPS location...
      </p>
      <small style={{ color: "#555" }}>
        *Enable location permissions for accuracy
      </small>
    </div>
  );
}
