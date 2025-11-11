import mongoose, { mongo } from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected successfully ✅")
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
