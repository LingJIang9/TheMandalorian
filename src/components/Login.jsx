import { useState, useEffect } from "react";
import axios from "axios";

import "./Register.css";

import { useAuth } from "./context/AuthContext.jsx";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // set username, new
  const [userName, setUserName] = useState("");

  //login and logout
  const { setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  // Retrieve user info from local storage when component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUserName(userData.Name);
      setIsLoggedIn(true);
      setAuthUser(userData);
    }
  }, [setIsLoggedIn, setAuthUser]);

  //logout
  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setAuthUser(null);
    localStorage.removeItem("authUser");
  };

  //retrieve username by email provided.new
  const fetchUsername = async () => {
    try {
      const response = await axios.get(`/getUserByEmail?email=${email}`);
      return response.data; // Return the user data
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", { email, password });
      const { result } = response.data;

      if (result === "password match") {
        //new
        const fetchedUser = await fetchUsername(); // fetchUsername needs to return the user

        setIsLoggedIn(true);
        setAuthUser({ Name: fetchedUser.name });

        localStorage.setItem(
          "authUser",
          JSON.stringify({ Name: fetchedUser.name })
        );
        alert("Login success");
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

        {/* <span>
          User is {isLoggedIn ? `logged in as ${userName}` : "logged out"}
        </span> */}

        {isLoggedIn ? (
          <button
            type="submit"
            className="btn btn-dark"
            onClick={(e) => logOut(e)}
          >
            Logout
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-dark"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
}
