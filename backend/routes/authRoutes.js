// authRoutes.js

import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Function to generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//SIGNUP

router.post("/signup", async (req, res) => {
  const { username, email, password, category } = req.body;

  try {
    // Check missing fields
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create new user (password gets hashed in User model automatically)
    const user = await User.create({
      username,
      email,
      password,
      category
    });

    // Send response
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        category: user.category,
      },
      token: generateToken(user._id),
    });

  } catch (error) {
    console.log("Signup Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


//         LOGIN

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required" });

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    // Compare password using model method
    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    // Login successful
    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        category: user.category,
      },
      token: generateToken(user._id),
    });

  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
