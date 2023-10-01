import "../components/Navbar.css";
import { Component } from "react";
import { NavbarItem } from "../components/NavbarData";
// import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1>DBC</h1>
        <div className="hamburger-icon">
          <i className="fa-solid fa-bars"></i>
          <i className="fa-solid fa-times"></i>
        </div>
        <ul>
          {NavbarItem.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
