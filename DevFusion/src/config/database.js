const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbURI = process.env.DB_CONNECTION_STRING; 
    const conn = await mongoose.connect(dbURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
