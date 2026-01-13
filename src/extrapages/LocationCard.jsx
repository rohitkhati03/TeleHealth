import { useEffect, useState } from "react";

export default function LocationCard() {
  const [address, setAddress] = useState({});
  const [coords, setCoords] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setCoords(`Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`);

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
          );
          const data = await res.json();
          setAddress(data.address || {});
        } catch {
          setAddress({});
        }
      },
      () => {},
      { enableHighAccuracy: true }
    );
  }, []);

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

      {/* Address line 1 */}
      <p style={{ fontSize: "15px", fontWeight: "600" }}>
        House No: {address.house_number || "NA"}, 
        Street: {address.road || "NA"}
      </p>

      {/* Address line 2 */}
      <p style={{ fontSize: "15px", fontWeight: "600" }}>
        Village: {address.village || "NA"}, 
        City: {address.city || address.town || "NA"}, 
        Pincode: {address.postcode || "NA"}
      </p>

      <br />

      {/* Coordinates */}
      <p style={{ fontSize: "14px", color: "#555" }}>
        {coords}
      </p>

      <small style={{ color: "#555" }}>
        Enable location permissions for accuracy
      </small>
    </div>
  );
}
