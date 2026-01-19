const mongoose = require("mongoose");
const DEFAULT_ADMIN = require("../controllers/authController")

const connectDB = async () => {
  const LIVE_URL = ""

  try {
    await mongoose.connect(LIVE_URL); // Removed deprecated options
    console.log("✅ MongoDB Connected");
    await DEFAULT_ADMIN.createAdminUser();
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
