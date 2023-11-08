import { useState } from "react";
import axios from "axios";

import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", { email, password });
      const { result } = response.data;

      if (result === "password match") {
        alert("Login success");
        navigate("/");
      } else if (result === "password not match") {
        alert("password not match");
      } else {
        alert("User not exist, please register");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="login register" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    </div>
  );
}
