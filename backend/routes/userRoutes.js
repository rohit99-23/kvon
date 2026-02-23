const express = require("express");
const router = express.Router();
const User = require("../models/user");

// POST - Register User
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({ message: "User Registered Successfully ✅" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user ❌" });
  }
});

module.exports = router;
