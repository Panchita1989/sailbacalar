import express from "express";
import Admin from "../models/admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = new Admin({ email, password });
    await admin.save(); // Passwort wird durch dein Model automatisch gehasht
    res.status(201).json({ message: "Admin created" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Admin already exists or error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Invalid email" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
