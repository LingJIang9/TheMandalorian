import "../components/Navbar.css";
import React, { useState } from "react"; // Import React and useState

function Navbar() {
  // Use the useState hook to manage the "clicked" state
  const [clicked, setClicked] = useState(false);
  const toggleMenu = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <nav>
        <img src="src/assets/logoipsum-293.svg" alt="Logo" />{" "}
        {/* Add an "alt" attribute */}
        <div>
          <ul className={`navbar ${clicked ? "active" : ""}`}>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <a href="index.html">Gliding Training</a>
            </li>
            <li>
              <a href="index.html">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="mobile" onClick={toggleMenu}>
          <i
            id="bar"
            className={
              clicked ? "fa-solid fa-xmark fa-sm" : "fa-solid fa-bars fa-sm"
            }
          ></i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar; // Export the component for use in other parts of your application
