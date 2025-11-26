import express from "express";
import { userRegistrationValidation } from "../validators/validator.js";
import { validate } from "../middlewares/validator.middleware.js";
import { registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/sign-up", userRegistrationValidation(), validate, registerUser);

export default router;
