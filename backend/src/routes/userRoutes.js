import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {authorizeRole} from "../middleware/roleMiddleware.js"

const router = express.Router();

// only admin can access this route

router.get("/admin", verifyToken,authorizeRole("admin"), (req, res) => {
  res.json({ message: "Welcome admin" });
});

// both admin and manager can access this route

router.get("/manager", verifyToken,authorizeRole("admin","manager"), (req, res) => {
  res.json({ message: "Welcome manager" });
});

// all can access this route

router.get("/user", verifyToken,authorizeRole("admin", "manager", "user"), (req, res) => {
  res.json({ message: "Welcome user" });
});

export default router;
