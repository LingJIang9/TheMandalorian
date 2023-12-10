import React, { useState } from "react";
import { NavbarItem } from "./NavbarData";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "./context/AuthContext.jsx";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const { isLoggedIn, authUser, setIsLoggedIn, setAuthUser } = useAuth();

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  // Logout
  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setAuthUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <nav className="navbar">
      <h1>MUBI</h1>
      {/* Display username from authUser */}

      <div className="hamburger-icon" onClick={toggleMenu}>
        <i className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
      </div>

      <ul className={clicked ? "active" : ""}>
        {NavbarItem.map((item, index) => {
          if (item.title === "Register/Login" && isLoggedIn) {
            return null;
          }
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
            <span style={{ color: "grey" }}>
              {authUser ? authUser.Name : ""}
            </span>
            <i className="fa-solid fa-right-from-bracket" onClick={logOut}></i>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
