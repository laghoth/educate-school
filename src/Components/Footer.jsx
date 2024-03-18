import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import { FaSquareXTwitter, FaAngleRight } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="description">
        <div className="logo">
          <img src="/images/logo_footer.png" />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, hic.
        </p>
        <ul className="">
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <FaSquareXTwitter />
            </a>
          </li>
        </ul>
      </div>

      <div className="quick-links">
        <h3>Quick Links</h3>

        <ul>
          <li>
            <FaAngleRight />
            <a href="">Templates</a>
          </li>
          <li>
            <FaAngleRight />
            <a href="">Blog And Article</a>
          </li>
          <li>
            <FaAngleRight />
            <a href="">Integrations</a>
          </li>
          <li>
            <FaAngleRight />
            <a href="">Webinars</a>
          </li>
          <li>
            <FaAngleRight />
            <a href="">Privacy & Policy</a>
          </li>
        </ul>
      </div>

      <div className="services">
        <h3>Our Services</h3>
        <ul>
          <li>
            <FaAngleRight />
            <a href="">Web Development</a>
          </li>
          <li>
            <FaAngleRight />
            <a href="">UI/UX Design</a>
          </li>
          <li>
            <FaAngleRight />
            <a href="">Management</a>
          </li>
          <li>
            <FaAngleRight />
            <a href="">Digital Marketing</a>
          </li>
          <li>
            <FaAngleRight />
            <a href="">Blog News</a>
          </li>
        </ul>
      </div>
      <div className="gallery">
        <h3>Gallery</h3>

        <div className="list-img">
          <a href="">
            <img src="/images/students/student_class1.jpg" />
          </a>
          <a href="">
            <img src="/images/students/student_class2.jpg" />
          </a>
          <a href="">
            <img src="/images/students/student_class3.jpg" />
          </a>
          <a href="">
            <img src="/images/students/student_class4.jpg" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
