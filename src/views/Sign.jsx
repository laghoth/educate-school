import React from "react";
import { FaSignInAlt, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
function Sign() {
  return (
    <div className="sign-page">
      <div className="title-single-page">
        <div className="section-bg-opacity"></div>
        <h1>Log In</h1>
      </div>

      <div className="signin-formulaire">
        <div className="image-signin">
          <div className="section-bg-opacity"></div>
        </div>
        <div className="sign-form main-educate-form">
          <div className="desc-section">
            <h2>Log In</h2>
          </div>
          <form action="">
            <div className="inpt-row">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" placeholder="Name" />
            </div>

            <div className="inpt-row">
              <label htmlFor="email">Email Adress*</label>
              <input type="email" id="email" placeholder="Email" />
            </div>

            <div className="inpt-row">
              <button className="main-btn" type="submit">
                Sign In
                <FaSignInAlt />
              </button>
            </div>

            <div className="inpt-row chk-box">
              <label htmlFor="save">
                <input type="checkbox" id="save" placeholder="Email" /> Email
                Adress
              </label>
              <span className="forget-link">Forgot Password?</span>
            </div>

            <div className="sign-up">
              <span>
                Haven't Any Account Yet? <Link to="/signUp">Click Here</Link>
              </span>
            </div>

            <div className="main-border-dotted"></div>

            <div className="socials-login">
              <span>Login With Social</span>
              <div className="socials-login-btn">
                <button>
                  <FaGoogle /> Google
                </button>
                <button>
                  <FaFacebook /> Facebook
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;
