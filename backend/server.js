const connectDB = require("./config/db");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);
app.use(express.static(path.join(__dirname, "../frontend")));

// test route
app.get("/", (req, res) => {
  res.send("Hi this is Rohit Kumar");
});

// server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});


