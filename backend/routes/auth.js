const express = require('express');
const user = require('../models/userSchema');
const router = express.Router();

//ye sab frontend sai aaaiga data yaha pai sign up ka.

router.post('/signup', (req,res)=>{
    const {name, email, password} = req.body;

    try{
        const newUser = user.create({name, email, password});
        res.json({message: "user created", user: newUser});
    }catch (err) {
    res.json({ message: "Error creating user", err });
    }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.json({ message: "User not found" });

    if (user.password !== password)
      return res.json({ message: "Wrong password" });

    res.json({ message: "Login successful", user });
  } catch (err) {
    res.json({ message: "Error", err });
  }
});

module.exports = router;