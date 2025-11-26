import express from "express";
import userRouter from "./routes/user.route.js";
import { ApiError } from "./utils/api-error.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);

// golbal error handler
app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      stack: err.stack,
    });
  }

  console.error("Unexpected Error", err);

  res.status(500).json({
    success: false,
    message: err.message,
    stack: err.stack,
  });
});

export default app;
