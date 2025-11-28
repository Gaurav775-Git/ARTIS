const express = require('express');
const router = express.Router();
const User = require('../models/User');  // using your previous schema

// Create a new demo user
router.post('/create', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Create user
    const newUser = new User({
      name,
      email
    });

    await newUser.save();

    res.status(200).json({
      message: "User created successfully",
      user: newUser
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error creating user",
      error: err.message
    });
  }
});

module.exports = router;
