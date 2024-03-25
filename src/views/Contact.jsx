import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

function Contact() {
  const handleClick = (e) => {
    const el = document.querySelector(".oth");
  };

  return (
    <div className="contact">
      <div className="title-single-page">
        <div className="section-bg-opacity"></div>
        <h1>Contact Us</h1>
      </div>

      <div className="contact-formulaire">
        <div className="container">
          <div className="contact-informations">
            <div className="desc-section">
              <h2>Get in Touch</h2>
            </div>
            <h3></h3>
            <p>
              Suspendisse ultrice gravida dictum fusce placerat ultricies
              integer
            </p>
            <div className="address">
              <ul>
                <li>
                  <a href="http://">
                    <FaMapMarkerAlt />
                    <div className="title-des">
                      <span className="title">Our Address</span>
                      <span className="desc">
                        1564 Goosetown Drive Matthews, NC 28105
                      </span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="http://">
                    <FaPhoneAlt />
                    <div className="title-des">
                      <span className="title">Contact</span>
                      <span className="desc">
                        +99- 35895-4565 <br /> supportyou@info.com
                      </span>
                    </div>
                  </a>
                </li>

                <li>
                  <FaClock />
                  <div className="title-des">
                    <span className="title">Hours Of Operation</span>
                    <span className="desc">Mon - Fri: 9.00am to 5.00pm</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-form main-educate-form">
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
                <label htmlFor="phone">Phone*</label>
                <input type="text" id="phone" placeholder="Phone" />
              </div>

              <div className="inpt-row">
                <label htmlFor="subject">Subject*</label>
                <input type="text" id="subject" placeholder="Subject" />
              </div>

              <div className="inpt-row">
                <label htmlFor="message">Message*</label>

                <textarea id="message" placeholder="Message"></textarea>
              </div>

              <div className="inpt-row">
                <button className="main-btn" type="submit">
                  Send Message
                  <FaArrowRightLong />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
