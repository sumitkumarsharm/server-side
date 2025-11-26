import React, { useState } from "react";
import { registerUser } from "../api/userApi";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerUser(formData);
    alert(response.message);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name.."
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="username.."
        name="username"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="email.."
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password.."
        name="password"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
