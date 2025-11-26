import { Router } from "express";
import {
  loginUser,
  registerUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  logoutUser,
  getAdminData,
} from "../controllers/user.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userLoginValidator,
  userRegistrationValidatore,
} from "../validators/validator.js";
import { VerifyUser } from "../middlewares/user.middleware.js";

const router = Router();

router.post("/register", userRegistrationValidatore(), validate, registerUser);
router.get("/verify-email/:token", verifyEmail);
router.post("/login", userLoginValidator(), validate, loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/logout", VerifyUser, logoutUser);
// router.get("/getdata", VerifyUser, VerifyAdmin, getAdminData);

export default router;
