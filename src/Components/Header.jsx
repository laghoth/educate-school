import React from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import {
  FaSquareXTwitter,
  FaPhone,
  FaArrowRightLong,
  FaRegUser,
  FaBagShopping,
  FaBars,
} from "react-icons/fa6";

import { AiFillCaretDown } from "react-icons/ai";
import Logo from "../images/logo.png";

function Header() {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);

    console.log(showNavbar);
  };
  return (
    <>
      <header>
        <div className="bar-top">
          <div className="bar-left">
            <ul>
              <li>
                <FaMapMarkerAlt />
                109 Guiliz Marrakech, Maroc
              </li>

              <li>
                <FaPhone />
                +2120614096392 222s
              </li>
            </ul>
          </div>

          <div className="bar-right">
            <div className="border-rgt">
              <FaRegUser />
              <Link to="/signIn">Login </Link>/
              <Link to="/signUp">Register</Link>
            </div>

            <ul className="socials">
              <li>
                <Link to="#">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaInstagramSquare />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaSquareXTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={"logo-area " + `${showNavbar && "add-over"}`}>
          <div className="logo">
            <Link to="/">
              <img src={Logo} />
            </Link>
          </div>

          <nav className={`${showNavbar && "active"}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/cours">Courses</Link>
              </li>

              <li>
                <a>Pages</a>
                <AiFillCaretDown />

                <ul className="dropdown">
                  <li>
                    <Link to="/faqs">Faq</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/coming-son">Coming Soon</Link>
                  </li>
                  <li>
                    <Link to="/404">404</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="btn-contact-cart">
              <button className="btn-cart">
                <FaBagShopping />
              </button>

              <button className="main-btn">
                Contact Us
                <FaArrowRightLong />
              </button>
            </div>
          </nav>

          <div className="hamburger" onClick={handleShowNavbar}>
            <FaBars />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
