import express from "express";
import upload from "../utils/multer.js";
import { uploadProfilePic } from "../controllers/uploadController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// 🔥 ONLY IMAGE UPLOAD ROUTE
router.post(
  "/profile-pic",
  isAuthenticated,
  upload.single("profilePic"),
  uploadProfilePic
);

export default router;