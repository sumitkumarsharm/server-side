import jwt from "jsonwebtoken";
import { ApiError } from "../utils/api-error.js";
import { User } from "../models/user.model.js";

export const VerifyUser = async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request", false);
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id).select(
      "-password -emailVerificationToken -forgotPasswordToken"
    );

    if (!user) throw new ApiError(401, "Unauthorized request", false);

    req.user = user;

    next();
  } catch (err) {
    throw new ApiError(401, err?.message || "Unauthorized request", false);
  }
};
