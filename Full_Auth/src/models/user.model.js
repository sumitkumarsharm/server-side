import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new Schema(
  // task -  avatar, mobile, rest kaam aap kroge
  {
    avatar: {
      type: {
        url: String,
        loaclpath: String,
      },
      default: {
        url: "https://placehold.com/600x400",
        loaclpath: "",
      },
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: {
      type: String,
      default: false,
    },
    forgotPasswordTokenExpiry: {
      type: Date,
    },
    refreshToken: {
      type: String,
    },
    emailVerificationToken: {
      type: String,
    },
    emailVerificationTokenExpiry: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
// hashing password ye akib ka task hai nhi -- nhi
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// compair password
userSchema.methods.isPasswordMatched = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// generateAccestoken
userSchema.methods.generateAccessTokem = function () {
  return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
  });
};

// generateRefreshToken
userSchema.methods.generateAccessTokem = function () {
  return jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
  });
};

// verifyRefreshToken
userSchema.methods.verifyRefreshToken = function () {
  const Token = crypto.randomBytes(32).toString("hex");
  const TokenExpires = Date.now() + 30 * 60 * 1000;
  return { Token, TokenExpires };
};

export const User = model("User", userSchema);
