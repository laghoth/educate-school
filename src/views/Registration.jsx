import React from "react";
import { Link } from "react-router-dom";
function Registration() {
  return (
    <div className="sign-page">
      <div className="title-single-page">
        <div className="section-bg-opacity"></div>
        <h1>Registration</h1>
      </div>

      <div className="signin-formulaire">
        <div className="sign-form main-educate-form">
          <div className="desc-section">
            <h2>Registration</h2>
          </div>
          <form action="">
            <div className="inpt-row">
              <label htmlFor="firstname">First Name*</label>
              <input type="text" id="firstname" placeholder="First Name" />
            </div>

            <div className="inpt-row">
              <label htmlFor="lastname">Last Name*</label>
              <input type="text" id="lastname" placeholder="Last Name" />
            </div>

            <div className="inpt-row">
              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" placeholder="Last Name" />
            </div>

            <div className="inpt-row">
              <label htmlFor="username">User Name*</label>
              <input type="text" id="username" placeholder="User Name" />
            </div>

            <div className="inpt-row">
              <label htmlFor="password">Password*</label>
              <input type="password" id="password" placeholder="Password" />
            </div>

            <div className="inpt-row">
              <label htmlFor="confirmpassword">Confirm Password*</label>
              <input
                type="password"
                id="confirmpassword"
                placeholder="Confirm Password"
              />
            </div>

            <div className="inpt-row">
              <button className="main-btn" type="submit">
                Register Now
              </button>
            </div>

            <div className="sign-up">
              <span>
                Already have an account? <Link to="/signIn">Login Here</Link>
              </span>
            </div>
          </form>
        </div>
        <div className="image-registration">
          <div className="section-bg-opacity"></div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
