const mongoose = require('mongoose');
require('dotenv').config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "artis" // optional but recommended
    });

    console.log("MongoDB connected...");
  } catch (err) {
    console.log("DB Error:", err.message);
  }
};

module.exports = connectdb;
