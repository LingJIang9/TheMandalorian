import React, { useState } from "react";
import { NavbarItem } from "./NavbarData";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ userName }) {
  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar">
      <h1>MUBI</h1>
      <h7>{userName} </h7>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <i className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
      </div>
      <ul className={clicked ? "active" : ""}>
        {NavbarItem.map((item, index) => (
          <li key={index}>
            <Link to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
