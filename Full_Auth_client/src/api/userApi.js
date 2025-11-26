import api from "./axios";

const registerUser = async (data) => {
  const response = await api.post("/register", data);
  return response.data;
};
const loginUser = async (data) => {
  const response = await api.post("/login", data);
  return response.data;
};
const logoutUser = async (data) => {
  const response = await api.post("/logout");
  return response.data;
};
const verifyEmail = async (data) => {
  const response = await api.post("/verify-email/:token");
  return response.data;
};
const forgotPassword = async (data) => {
  const response = await api.post("/forgot-password", { email });
  return response.data;
};
const resetPassword = async (data) => {
  const response = await api.post("/reset-password/:token");
  return response.data;
};

export {
  registerUser,
  loginUser,
  logoutUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
};
