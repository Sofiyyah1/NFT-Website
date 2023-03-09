import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/altura-logo.svg";
import "./nav.css";

const Nav = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // close menu on click
  const closeMenu = () => setClick(false);

  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Alutra-logo" />
            <span>Altura</span>
          </a>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#" onClick={closeMenu}>
              Connect Wallet
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#f8f8f8" }} />
          ) : (
            <FaBars size={30} style={{ color: "#f8f8f8" }} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
