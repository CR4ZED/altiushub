const mongoose = require("mongoose");

async function initDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/invoice");
  } catch (error) {
    console.log("failed to connect DB");
  }
}

module.exports = {
    initDB
}