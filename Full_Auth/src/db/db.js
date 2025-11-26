import mongoose from "mongoose";

const connetDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
    process.exit(1);
  }
};

export default connetDB;
