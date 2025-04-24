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
        <li><NavLink to="/call-now" activeClassName="active"><button>CALL NOW</button></NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
