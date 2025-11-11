import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();
dbConnect();
const app = express();

// middleware

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes)


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is runing at port ${PORT}`);
});


