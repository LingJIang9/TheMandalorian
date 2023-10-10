import "../components/Register.css";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

function Register() {
  // const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <form className="register" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="text"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        ></input>

        <button type="submit">Submit</button>
        <p>
          Already a member?
          <Link to="/login">here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
