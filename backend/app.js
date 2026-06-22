
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL , 
}));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
const Room = require("./models/Room");
app.post("/room/create", async (req, res) => {
  try {
    const { roomId } = req.body;
    await Room.create({ roomId, code: "// Start coding here..." });
    res.status(201).json({ message: "Room created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating room" });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;