import express from "express";
import Wellbeing from "../models/Wellbeing.js";
import PhysicalEntry from "../models/PhysicalEntry.js";
import authMiddleware from "../middleware/auth.js"; // optional - require login

const router = express.Router();

// POST mental test: expects { gad7: [0..3]*7, phq9?: [0..3]*9 }
router.post("/mental", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const { gad7, phq9 } = req.body;

  // validate arrays length etc (omitted for brevity)
  const gad7Score = (gad7 || []).reduce((a,b)=>a+b,0);
  const phq9Score = phq9 ? phq9.reduce((a,b)=>a+b,0) : null;

  // interpret scores -> recommendations
  const recommendations = [];
  if (gad7Score >= 10 || (phq9Score !== null && phq9Score >= 10)) {
    recommendations.push("psychiatrist", "psychologist");
  } else if (gad7Score >= 5 || (phq9Score !== null && phq9Score >= 5)) {
    recommendations.push("counselor", "psychologist");
  } else {
    recommendations.push("self-care");
  }

  const doc = await Wellbeing.create({
    user: userId,
    type: "mental",
    gad7: { answers: gad7, score: gad7Score },
    phq9: phq9 ? { answers: phq9, score: phq9Score } : undefined,
    recommendations
  });

  res.json({ id: doc._id, gad7Score, phq9Score, recommendations });
});

// POST emotional test
router.post("/emotional", authMiddleware, async (req,res) => {
  const userId = req.user.id;
  const { moodEmoji, moodText } = req.body;

  // simple emotionalScore mapping (customize later)
  const mapping = { "😄": 90, "🙂": 75, "😐": 50, "😞": 30, "😭": 15 };
  const emotionalScore = mapping[moodEmoji] ?? 60;

  const recommendations = emotionalScore < 35 ? ["counselor","psychologist"] : ["self-care"];

  const doc = await Wellbeing.create({
    user: userId,
    type: "emotional",
    moodEmoji,
    moodText,
    emotionalScore,
    recommendations
  });

  res.json({ id: doc._id, emotionalScore, recommendations });
});

// POST physical entry
router.post("/physical", authMiddleware, async (req,res) => {
  const userId = req.user.id;
  const { weightKg, heightCm, heartRate, sleepHours, waterGlasses, notes } = req.body;

  const bmi = weightKg && heightCm ? +(weightKg / ((heightCm/100)*(heightCm/100))).toFixed(1) : null;

  const entry = await PhysicalEntry.create({
    user: userId, weightKg, heightCm, bmi, heartRate, sleepHours, waterGlasses, notes
  });

  res.json(entry);
});

// GET history endpoints
router.get("/physical/history", authMiddleware, async (req,res) => {
  const userId = req.user.id;
  const list = await PhysicalEntry.find({ user: userId }).sort({ date: 1 });
  res.json(list);
});

router.get("/wellbeing/history", authMiddleware, async (req,res) => {
  const userId = req.user.id;
  const list = await Wellbeing.find({ user: userId }).sort({ createdAt: -1 });
  res.json(list);
});

export default router;
