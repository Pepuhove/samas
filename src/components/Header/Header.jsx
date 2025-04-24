import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

function Header(){
    return (
     <header className="header">
        <div className="logo">
        {/* <img src="./public/img/icon.jpg" alt="thabang artz-logo" /> */}
            <h2>THABANG ARTZ</h2>
        </div>
        <Navbar />
    </header>
    );
 }
 export default Header;