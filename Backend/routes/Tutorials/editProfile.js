import express from "express";
import {
  updateProfile,
  uploadPic,
  delPic,
  retrieveProfileInfo,
} from "../controllers/editProfile.js";

import upload from "../utils/multer.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

/**
 * ✅ GET profile (protected)
 */
router.get("/", isAuthenticated, retrieveProfileInfo);

/**
 * ✅ UPDATE profile (protected)
 */
router.post("/", isAuthenticated, updateProfile);

/**
 * ✅ UPLOAD profile picture (protected)
 */
router.post(
  "/upload",
  isAuthenticated,
  upload.single("profilePic"), // ⚠️ MUST match frontend
  uploadPic
);

/**
 * ✅ DELETE profile picture (protected)
 */
router.post("/delete-pic", isAuthenticated, delPic);

export default router;