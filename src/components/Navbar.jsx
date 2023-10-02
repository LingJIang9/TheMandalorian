import "../components/Navbar.css";
import { Component } from "react";
import { NavbarItem } from "../components/NavbarData";
// import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  toggleMenu = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbar">
        <h1>DBC</h1>
        <div className="hamburger-icon" onClick={this.toggleMenu}>
          <i
            className={
              this.state.clicked ? "fa-solid fa-times" : "fa-solid fa-bars"
            }
          ></i>
        </div>
        <ul className={this.state.clicked ? "active" : ""}>
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
