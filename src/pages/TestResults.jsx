import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function TestResults(){
  const { state } = useLocation();
  const navigate = useNavigate();
  const recs = state?.recommendations || [];

  return (
    <div style={{ padding:20 }}>
      <h1>Results</h1>

      {state.type === "mental" && (
        <>
          <p>GAD-7 Score: {state.gad7Score ?? "N/A"}</p>
          <p>PHQ-9 Score: {state.phq9Score ?? "N/A"}</p>
        </>
      )}

      {state.type === "emotional" && (
        <>
          <p>Emotional Score: {state.emotionalScore}</p>
        </>
      )}

      <h3>Recommendations</h3>
      <ul>
        {recs.map((r,i) => (
          <li key={i}>
            {r} <button onClick={()=> navigate("/doctors?specialty="+r)}>See {r} doctors</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
