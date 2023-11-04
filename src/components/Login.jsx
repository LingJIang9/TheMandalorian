import { useState } from "react";
import axios from "axios";

import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login({ setUserName }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.result === "success") {
          const userName = result.data.name;
          alert(`login success, welcome, ${userName}`);
          setUserName(userName);
        } else if (result.data === "user not exists") {
          alert("User not exist, please register");
        } else {
          alert("wrong password");
        }
      })

      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
