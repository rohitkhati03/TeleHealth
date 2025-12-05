import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialList({ testimonials }) {
  const wrapperStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "22px",
    padding: "20px",
    marginTop: "10px",
  };

  return (
    <div style={wrapperStyle}>
      {testimonials.map((t, index) => (
        <TestimonialCard key={index} name={t.name} feedback={t.feedback} />
      ))}
    </div>
  );
}
