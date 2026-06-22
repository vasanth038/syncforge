import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const SignupPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name : "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {

    e.preventDefault();

    try {
await axios.post(`${backendUrl}/auth/signup`, formData);
      toast.success("Account created! Please login.");
      navigate("/login");

    } catch (error) {

      console.log(error);

    toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (

    <div className="auth-container">

      <div className="auth-box">

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Join SyncForge now
        </p>

        <form
          className="auth-form"
          onSubmit={handleSignup}
        >

          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Signup
          </button>

        </form>

        <div className="auth-footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </div>

      </div>

    </div>
  );
};

export default SignupPage;