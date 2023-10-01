import "../components/Navbar.css";
import { Component } from "react";
// import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1>DBC</h1>
        <ul>
          <li>
            <a href="/">
              <i className="fa-solid fa-house-chimney-window"></i>
              Home
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
