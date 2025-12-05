// models/Wellbeing.js
import mongoose from "mongoose";

const wellbeingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["mental", "emotional"], required: true },

  // mental: store GAD7 + PHQ9 raw answers and scores
  gad7: {
    answers: [Number], // length 7
    score: Number
  },
  phq9: {
    answers: [Number], // length 9
    score: Number
  },

  // emotional
  moodEmoji: String, // e.g. "😊", "😞"
  moodText: String,  // optional description
  emotionalScore: Number, // computed (0-100)

  // generic fields
  recommendations: [String], // e.g. ['psychiatrist','counselor']
  note: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Wellbeing", wellbeingSchema);
