import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink to="/" exact activeClassName="active">HOME</NavLink></li>
        <li><NavLink to="/gallery" activeClassName="active">GALLERY</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">CONTACT</NavLink></li>
        <li>
          <NavLink to="#" activeClassName="active" onClick={(e) => {
          e.preventDefault();  // Stop navigation
           window.location.href = "tel:+2779 288 9816"; // Make call
    }}>
        CALL NOW
    </NavLink>
</li>

      </ul>
    </div>
  );
}

export default Navbar;
