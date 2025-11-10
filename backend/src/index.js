import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middleware

app.use(express.json());

// Routes

// start the server

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is runing at port ${PORT}`);
});
