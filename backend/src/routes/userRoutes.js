import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// only admin can access this route

router.get("/admin", verifyToken, (req, res) => {
  res.json({ message: "Welcome admin" });
});

// both admin and manager can access this route

router.get("/manager", verifyToken, (req, res) => {
  res.json({ message: "Welcome manager" });
});

// all can access this route

router.get("/user", verifyToken, (req, res) => {
  res.json({ message: "Welcome user" });
});

export default router;
