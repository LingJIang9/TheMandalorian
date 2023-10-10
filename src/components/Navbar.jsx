import "./Navbar.css";
import { Component } from "react";
import { NavbarItem } from "./NavbarData";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  toggleMenu = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbar">
        <h1>Bookhub</h1>
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
                <Link to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
