import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EMOJIS = ["😄","🙂","😐","😞","😭"];

export default function EmotionalHealth() {
  const [emoji, setEmoji] = useState("😄");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await axios.post("/api/wellbeing/emotional", { moodEmoji: emoji, moodText: text });
      navigate("/wellbeing/results", { state: { type: "emotional", emotionalScore: res.data.emotionalScore, recommendations: res.data.recommendations }});
    } catch (err) {
      alert("Failed to save.");
    }
  };

  return (
    <div style={{ padding:20 }}>
      <h1>Emotional Check-in</h1>
      <p>Tap an emoji that best describes your mood</p>

      <div style={{ display:"flex", gap:12 }}>
        {EMOJIS.map(e => (
          <button key={e} onClick={()=>setEmoji(e)} style={{ fontSize:28, padding:10, border: emoji===e ? "2px solid #0077ff" : "1px solid #ddd", borderRadius:12 }}>
            {e}
          </button>
        ))}
      </div>

      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Describe your feelings (optional)" rows={4} style={{ width:"100%", marginTop:12 }} />

      <button onClick={submit} style={{ marginTop:12 }}>Save & See Recommendations</button>
    </div>
  );
}

