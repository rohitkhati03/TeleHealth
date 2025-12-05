import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import wellbeingRoutes from "./routes/wellbeingRoutes.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// CORS setup (required for frontend http://localhost:5173)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Body parser (allows reading JSON data)
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/wellbeing", wellbeingRoutes);

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
