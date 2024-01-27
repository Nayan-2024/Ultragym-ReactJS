import React from "react";
import "../css/Navbar.css";
import '../index.css';
import Logo from "../images/logo.jpg";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <img src={Logo}></img>
        <ul className="navbar">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Fitness program</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div class="right">
          <button class="btn">
            <a href="tut24.html"> Sign Up </a>
          </button>
          <button class="btn">
            <a href="tut8.html"> Login </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
