import "../components/Register.css";
import { useState } from "react";

function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const registerUser = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="register" onSubmit={registerUser}>
        <h1>Register</h1>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        ></input>
        <label>Password</label>
        <input
          type="text"
          placeholder="Enter your password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        ></input>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        ></input>
        <label>Remember Me</label>
        <input type="checkbox"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
