const express = require('express');
const router = express.Router();
const User = require('../models/userSchema'); // Make sure the model is exported as 'User'

router.get('/create-user', async (req, res) => {
  try {
    const createdUser = await User.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password123",
    });

    res.json(createdUser)
  ;
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: err.message
    });
  }
});

module.exports = router;
