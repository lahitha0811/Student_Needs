import express from "express";
import {
  redirectReg,
  requestOtp,
  verifyOtpAndRegister,
  resendOtp,
} from "../controllers/register.js";

const router = express.Router();

// redirect (optional)
router.get("/", redirectReg);

// request OTP
router.post("/request-otp", requestOtp);

// verify OTP and register
router.post("/verify-otp", verifyOtpAndRegister);

// resend OTP
router.post("/resend-otp", resendOtp);

export default router;