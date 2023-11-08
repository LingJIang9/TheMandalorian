import { useState } from "react";
import axios from "axios";

import "./Register.css";
import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/login", { email, password });
//       const { profile } = response.data;

//       if (profile.error) {
//         alert("data error");
//       } else {
//         setEmail(profile.email);
//         setPassword(profile.password);
//         alert("login success");
//         navigate("/");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
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
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // rest of your component

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
