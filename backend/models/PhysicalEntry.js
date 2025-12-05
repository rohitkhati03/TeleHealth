// models/PhysicalEntry.js
import mongoose from "mongoose";

const physicalEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  weightKg: Number,
  heightCm: Number,
  bmi: Number,
  heartRate: Number,
  sleepHours: Number,
  waterGlasses: Number,
  notes: String
});

export default mongoose.model("PhysicalEntry", physicalEntrySchema);
