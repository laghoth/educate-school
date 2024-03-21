import React from "react";
import { Link } from "react-router-dom";

// Slider importants

import {
  FaCartShopping,
  FaStar,
  FaRegStar,
  FaRegClock,
  FaRegCircleUser,
  FaFileInvoice,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";

function Cours() {
  return (
    <div className="page-cours">
      <div className="title-single-page">
        <div className="section-bg-opacity"></div>
        <h1>Cours</h1>
      </div>
      <div className="cours-list">
        <div className="popular-courses">
          <div className="title-section ">
            <span>top popular courses</span>
          </div>
          <div className="desc-section">
            <h2>Histudy Course Student Can Join With Us.</h2>
          </div>

          <div className="courses-list">
            <div className="course-content">
              <div className="course-category">
                <span>Development</span>
              </div>
              <div className="image-course">
                <Link to={"#"}>
                  <img src="/images/class_dev.jpg" />
                </Link>
              </div>
              <div className="starts">
                <ul>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaRegStar />
                  </li>
                  <li>(4.7)</li>
                </ul>
              </div>
              <div className="textes">
                <h3>
                  <Link to={"#"}>
                    It Statistics Data Science And Business Analysis
                  </Link>
                </h3>
                <ul>
                  <li>
                    <FaRegClock />
                    10h 30min
                  </li>
                  <li>
                    <FaRegCircleUser />
                    Students 50+
                  </li>
                  <li>
                    <FaFileInvoice />
                    Lesson 11
                  </li>
                </ul>
                <div className="main-border-dotted"></div>
                <div className="course-teacher">
                  <img src="/Images/students/student2.jpg" />
                  <h4>
                    By <span>Othmane</span> in <span>Development</span>
                  </h4>
                </div>
                <div className="course-price">
                  <div className="price">
                    $60<span>$50</span>
                  </div>
                  <button className="add-to-cart">
                    <FaCartShopping />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="course-content">
              <div className="course-category">
                <span>Graphic Design</span>
              </div>
              <div className="image-course">
                <Link to={"#"}>
                  <img src="/images/class_eco.jpg" />
                </Link>
              </div>
              <div className="starts">
                <ul>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaRegStar />
                  </li>
                  <li>(4.7)</li>
                </ul>
              </div>
              <div className="textes">
                <h3>
                  <Link to={"#"}>
                    It Statistics Data Science And Business Analysis
                  </Link>{" "}
                </h3>
                <ul>
                  <li>
                    <FaRegClock />
                    10h 30min
                  </li>
                  <li>
                    <FaRegCircleUser />
                    Students 50+
                  </li>
                  <li>
                    <FaFileInvoice />
                    Lesson 11
                  </li>
                </ul>
                <div className="main-border-dotted"></div>
                <div className="course-teacher">
                  <img src="/Images/students/student2.jpg" />
                  <h4>
                    By <span>Othmane</span> in <span>Development</span>
                  </h4>
                </div>
                <div className="course-price">
                  <div className="price">
                    $60<span>$50</span>
                  </div>
                  <button className="add-to-cart">
                    <FaCartShopping />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="course-content">
              <div className="course-category">
                <span>Development</span>
              </div>
              <div className="image-course">
                <Link to={"#"}>
                  <img src="/images/class_children.jpg" />
                </Link>
              </div>
              <div className="starts">
                <ul>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaRegStar />
                  </li>
                  <li>(4.7)</li>
                </ul>
              </div>

              <div className="textes">
                <h3>
                  <Link to={"#"}>
                    It Statistics Data Science And Business Analysis
                  </Link>
                </h3>
                <ul>
                  <li>
                    <FaRegClock />
                    10h 30min
                  </li>
                  <li>
                    <FaRegCircleUser />
                    Students 50+
                  </li>
                  <li>
                    <FaFileInvoice />
                    Lesson 11
                  </li>
                </ul>
                <div className="main-border-dotted"></div>
                <div className="course-teacher">
                  <img src="/Images/students/student2.jpg" />
                  <h4>
                    By <span>Othmane</span> in <span>Development</span>
                  </h4>
                </div>
                <div className="course-price">
                  <div className="price">
                    $60<span>$50</span>
                  </div>
                  <button className="add-to-cart">
                    <FaCartShopping />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="course-content">
              <div className="course-category">
                <span>Development</span>
              </div>
              <div className="image-course">
                <Link to={"#"}>
                  <img src="/images/class_dev.jpg" />
                </Link>
              </div>
              <div className="starts">
                <ul>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaRegStar />
                  </li>
                  <li>(4.7)</li>
                </ul>
              </div>
              <div className="textes">
                <h3>
                  <Link to={"#"}>
                    It Statistics Data Science And Business Analysis
                  </Link>
                </h3>
                <ul>
                  <li>
                    <FaRegClock />
                    10h 30min
                  </li>
                  <li>
                    <FaRegCircleUser />
                    Students 50+
                  </li>
                  <li>
                    <FaFileInvoice />
                    Lesson 11
                  </li>
                </ul>
                <div className="main-border-dotted"></div>
                <div className="course-teacher">
                  <img src="/Images/students/student2.jpg" />
                  <h4>
                    By <span>Othmane</span> in <span>Development</span>
                  </h4>
                </div>
                <div className="course-price">
                  <div className="price">
                    $60<span>$50</span>
                  </div>
                  <button className="add-to-cart">
                    <FaCartShopping />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="course-content">
              <div className="course-category">
                <span>Development</span>
              </div>
              <div className="image-course">
                <Link to={"#"}>
                  <img src="/images/class_eco.jpg" />
                </Link>
              </div>
              <div className="starts">
                <ul>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaRegStar />
                  </li>
                  <li>(4.7)</li>
                </ul>
              </div>
              <div className="textes">
                <h3>
                  <Link to={"#"}>
                    It Statistics Data Science And Business Analysis
                  </Link>{" "}
                </h3>
                <ul>
                  <li>
                    <FaRegClock />
                    10h 30min
                  </li>
                  <li>
                    <FaRegCircleUser />
                    Students 50+
                  </li>
                  <li>
                    <FaFileInvoice />
                    Lesson 11
                  </li>
                </ul>
                <div className="main-border-dotted"></div>
                <div className="course-teacher">
                  <img src="/Images/students/student2.jpg" />
                  <h4>
                    By <span>Othmane</span> in <span>Development</span>
                  </h4>
                </div>
                <div className="course-price">
                  <div className="price">
                    $60<span>$50</span>
                  </div>
                  <button className="add-to-cart">
                    <FaCartShopping />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="course-content">
              <div className="course-category">
                <span>Development</span>
              </div>
              <div className="image-course">
                <Link to={"#"}>
                  <img src="/images/class_children.jpg" />
                </Link>
              </div>
              <div className="starts">
                <ul>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaRegStar />
                  </li>
                  <li>(4.7)</li>
                </ul>
              </div>

              <div className="textes">
                <h3>
                  <Link to={"#"}>
                    It Statistics Data Science And Business Analysis
                  </Link>
                </h3>
                <ul>
                  <li>
                    <FaRegClock />
                    10h 30min
                  </li>
                  <li>
                    <FaRegCircleUser />
                    Students 50+
                  </li>
                  <li>
                    <FaFileInvoice />
                    Lesson 11
                  </li>
                </ul>
                <div className="main-border-dotted"></div>
                <div className="course-teacher">
                  <img src="/Images/students/student2.jpg" />
                  <h4>
                    By <span>Othmane</span> in <span>Development</span>
                  </h4>
                </div>
                <div className="course-price">
                  <div className="price">
                    $60<span>$50</span>
                  </div>
                  <button className="add-to-cart">
                    <FaCartShopping />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="more-courses">
            <ul>
              <li>
                <Link href="http://">
                  <FaAnglesLeft />
                </Link>
              </li>
              <li className="active">
                <Link href="http://">1</Link>
              </li>
              <li>
                <Link href="http://">2</Link>
              </li>
              <li>
                <Link href="http://">3</Link>
              </li>
              <li>
                <Link href="http://">...</Link>
              </li>

              <li>
                <Link href="http://">15</Link>
              </li>
              <li>
                <Link href="http://">
                  <FaAnglesRight />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="news-lettre">
        <div className="news-texte">
          <h3>Join Our Newsletter</h3>
          <p>Subscribe our newsletter to get our latest update & news.</p>
        </div>
        <div className="news-form">
          <form action="">
            <div className="news-email">
              <input type="text" placeholder="Enter your email:" />
            </div>
            <div className="btn-send">
              <button>Subscribe Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cours;
