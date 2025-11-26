import { body } from "express-validator";

const userRegistrationValidation = () => {
  return [
    body("username")
      .trim()
      .notEmpty()
      .isLength({ min: 3, max: 20 })
      .matches(/^[a-zA-Z0-9]+$/)
      .withMessage("username must be alphanumeric"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("email is not valid"),
    body("password")
      .notEmpty()
      .withMessage("password is required")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 characters long"),
  ];
};

// task for you
// const userLoginValidation = () => {};

export { userRegistrationValidation };
