import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;


    if (!url) {
      throw new Error("MONGO_URI is not defined");
    }

    await mongoose.connect(url);

    console.log("DATABASE CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error(" DATABASE CONNECTION FAILED:", error.message);
    process.exit(1);
  }
};

export default connectDB;
