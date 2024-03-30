import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function ComingSon() {
  return (
    <div className="coming-son">
      <div className="section-bg-opacity"></div>

      <div className="contents">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>

        <div className="title">
          <h1>We are launching soon</h1>
        </div>

        <div className="countdown-timer">
          <ul>
            <li>
              <span className="nbr">30</span>
              <span className="txt">Days</span>
            </li>
            <li>
              <span className="nbr">18</span>
              <span className="txt">Hours</span>
            </li>
            <li>
              <span className="nbr">36</span>
              <span className="txt">Minutes</span>
            </li>
            <li>
              <span className="nbr">10</span>
              <span className="txt">Seconds</span>
            </li>
          </ul>
        </div>

        <div className="news-lettre">
          <div className="news-texte">
            <h3>Don't miss our news & updates</h3>
          </div>
          <div className="news-form">
            <form action="">
              <div className="news-email">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="btn-send">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className="social-network">
          <ul>
            <li>
              <Link to="#">
                {" "}
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
    </div>
  );
}

export default ComingSon;
