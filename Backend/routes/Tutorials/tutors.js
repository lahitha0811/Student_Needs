import express from "express";
import {
  searchAllTutors,
  getTutor,
  updateClass,
  getSchedule,
} from "../controllers/tutors.js";
import { isAuthenticated, isTutor } from "../middleware/auth.js";

const router = express.Router();

// search tutors
router.get("/", searchAllTutors);

// get tutor
router.get("/:tutorId", getTutor);

// add class booking
router.post("/addClass", updateClass);

// get schedule
router.get("/schedule", getSchedule);

//tutor login
router.get("/dashboard", isAuthenticated, isTutor, (req, res) => {
  res.json({ message: "Tutor Dashboard" });
});

export default router;