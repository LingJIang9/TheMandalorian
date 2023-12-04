import React, { useState, useEffect } from "react";
import { NavbarItem } from "./NavbarData";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "./context/AuthContext.jsx";

function Navbar({ userName }) {
  const [clicked, setClicked] = useState(false);
  const { isLoggedIn, authUser } = useAuth();
  const { setAuthUser, setIsLoggedIn } = useAuth();
  // Retrieve user info from local storage when Navbar mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setAuthUser(userData);
    }
  }, [setIsLoggedIn, setAuthUser]);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar">
      <h1>MUBI</h1>
      <p>{userName} </p>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <i className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
      </div>

      <ul className={clicked ? "active" : ""}>
        {NavbarItem.map((item, index) => {
          // Hide the Register/Login link if the user is logged in
          if (item.title === "Register/Login" && isLoggedIn) {
            return null;
          }
          // Display other navbar items normally
          return (
            <li key={index}>
              <Link to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        {isLoggedIn && (
          <li>
            <span>{authUser?.Name}</span> {/* Displaying the user's name */}
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
