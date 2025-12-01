const express = require('express');
const User = require('../models/userSchema');   // Use capital U for model
const router = express.Router();


// SIGNUP ROUTE
router.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await User.create({ name, email, password }); // await added
    res.json({ message: "User created", user: newUser });
  } catch (err) {
    res.json({ message: "Error creating user", err });
  }
});


// LOGIN ROUTE
router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email }); // fixed User variable

    if (!existingUser) {
      return res.json({ message: "User not found" });
    }

    if (existingUser.password !== password) {
      return res.json({ message: "Wrong password" });
    }

    res.json({ message: "Login successful", user: existingUser });

  } catch (err) {
    res.json({ message: "Error", err });
  }
});


module.exports = router;
