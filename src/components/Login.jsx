import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <form className="login" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
