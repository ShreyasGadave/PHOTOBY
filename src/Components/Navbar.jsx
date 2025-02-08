import React from "react";
import "./Navbar.css";
import logo from "../assets/LOGO.svg";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <div className="menu">
            <ul>
              <li>
                <Link to="/"> HOME </Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/service">SERVICES</Link>
              </li>
              <li>
                <Link to="/project">PROJECT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="socialIcon">
          <TiSocialFacebook size="25px" />
          <FaTwitter size="25px" />
          <FaLinkedin size="25px" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
