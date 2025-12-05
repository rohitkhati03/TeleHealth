import React, { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function PhysicalHealth() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [sleep, setSleep] = useState("");
  const [water, setWater] = useState("");

  const [history, setHistory] = useState([]);

  useEffect(()=>{
    fetchHistory();
  },[]);

  const fetchHistory = async () => {
    try {
      const res = await axios.get("/api/wellbeing/physical/history");
      // format for chart
      const data = res.data.map(d => ({ date: new Date(d.date).toLocaleDateString(), bmi: d.bmi, heartRate: d.heartRate, sleep: d.sleepHours }));
      setHistory(data);
    } catch(e){ console.error(e); }
  };

  const submit = async () => {
    const payload = { weightKg: Number(weight), heightCm: Number(height), heartRate: Number(heartRate), sleepHours: Number(sleep), waterGlasses: Number(water) };
    try {
      await axios.post("/api/wellbeing/physical", payload);
      await fetchHistory();
      alert("Saved");
      setWeight(""); setHeight(""); setHeartRate(""); setSleep(""); setWater("");
    } catch(e){ alert("Failed"); }
  };

  return (
    <div style={{ padding:20 }}>
      <h1>Physical Health</h1>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
        <input placeholder="Height (cm)" value={height} onChange={e=>setHeight(e.target.value)} />
        <input placeholder="Weight (kg)" value={weight} onChange={e=>setWeight(e.target.value)} />
        <input placeholder="Heart rate (bpm)" value={heartRate} onChange={e=>setHeartRate(e.target.value)} />
        <input placeholder="Sleep hours" value={sleep} onChange={e=>setSleep(e.target.value)} />
        <input placeholder="Water glasses" value={water} onChange={e=>setWater(e.target.value)} />
      </div>

      <button onClick={submit} style={{ marginTop:12 }}>Save Vitals</button>

      <h3 style={{ marginTop:24 }}>History (BMI)</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={history}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="bmi" stroke="#0077ff" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <h3>Heart Rate History</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={history}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="heartRate" stroke="#ff6600" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
