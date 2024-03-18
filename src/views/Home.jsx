import React from "react";
import { Link } from "react-router-dom";

// Slider importants
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FaArrowRightLong,
  FaCartShopping,
  FaStar,
  FaRegStar,
  FaRegClock,
  FaRegCircleUser,
  FaFileInvoice,
  FaShareNodes,
} from "react-icons/fa6";

function Home() {
  return (
    <div className="home">
      <div className="slide">
        <div className="slide-content">
          <h3>Learn New Skills Online With Us</h3>
          <p>
            We are experienced in educationl platform and skilled strategies for
            the success of our online learning.
          </p>
          <div className="btn-crs-student">
            <button className="main-btn">
              <Link to="/cours"> Our Courses</Link>
              <FaArrowRightLong />
            </button>
            <span>
              Happy <br /> Students
            </span>
            <div className="imgs-students">
              <img src="/Images/students/student1.jpg" />
              <img src="/Images/students/student2.jpg" />
              <img src="/Images/students/student3.jpg" />
              <img src="/Images/students/student4.jpg" />
            </div>
          </div>
        </div>
        <div className="slide-image">
          <div className="image-student">
            <img src="/Images/slider.png" alt="" />
          </div>
        </div>
      </div>

      <div className="about">
        <div className="icon-animt-rotate">
          <img src="/images/icons/custom2.png" />
        </div>

        <div className="icon-animt-moveit">
          <img src="/images/icons/pattern.png" />
        </div>

        <div className="img-about">
          <div>
            <img src="/Images/about-img.jpg" />
          </div>
        </div>
        <div className="content-about">
          <div>
            <div className="title-section bg-wt">
              <span>about us</span>
            </div>
            <div className="desc-section">
              <h2>Learn & Grow Your Skills From Anywhere</h2>
            </div>

            <h3>
              We Have Experienced Professionals & We Do Our Best To Achieve Your
              Goal. Your Happiness Is Our First Priority.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              obcaecati. Nobis natus corrupti cumque autem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, non voluptatum placeat ea id doloremque possimus
              tenetur sint dolorem eaque accusantium corrupti necessitatibus
              ipsa quae pariatur, ex ipsam veniam vitae.
            </p>

            <ul>
              <li>
                <span className="color-nbr1">700+</span>
                <span className="text">Happy Students</span>
              </li>
              <li>
                <span className="color-nbr2">30+</span>
                <span className="text">Teachers</span>
              </li>
              <li>
                <span className="color-nbr3">120+</span>
                <span className="text">Courses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="title-section">
          <span>categories</span>
        </div>

        <div className="desc-section">
          <h2>Browse By Categories</h2>
          <button className="main-btn">
            <Link to="/cours">All Categories</Link>
            <FaArrowRightLong />
          </button>
        </div>

        <div className="categories-content">
          <div className="category">
            <div className="image-cat">
              <img src="/Images/categories/graphic-designer.png" />
            </div>
            <span className="category-name">Web Design</span>
            <a href="">
              25 Courses <FaArrowRightLong />
            </a>
          </div>

          <div className="category">
            <div className="image-cat">
              <img src="/Images/categories/coding.png" />
            </div>
            <span className="category-name">Personal Development</span>
            <a href="">
              40 Courses <FaArrowRightLong />
            </a>
          </div>

          <div className="category">
            <div className="image-cat">
              <img src="/images/categories/mobile-development.png" />
            </div>
            <span className="category-name">IT And Software</span>
            <a href="">
              30 Courses <FaArrowRightLong />
            </a>
          </div>

          <div className="category">
            <div className="image-cat">
              <img src="/images/categories/direct-marketing.png" />
            </div>
            <span className="category-name">Seles Marketing</span>
            <a href="">
              17 Courses <FaArrowRightLong />
            </a>
          </div>

          <div className="category">
            <div className="image-cat">
              <img src="/images/categories/mobile-development.png" />
            </div>
            <span className="category-name">Mobile Application</span>
            <a href="">
              5 Courses <FaArrowRightLong />
            </a>
          </div>

          <div className="category">
            <div className="image-cat">
              <img src="/images/categories/bars.png" />
            </div>
            <span className="category-name">Finance & Accounting</span>
            <a href="">
              10 Courses <FaArrowRightLong />
            </a>
          </div>

          <div className="category">
            <div className="image-cat">
              <img src="/images/categories/art.png" />
            </div>
            <span className="category-name">Art & Humanities</span>
            <a href="">
              20 Courses <FaArrowRightLong />
            </a>
          </div>

          <div className="category">
            <div className="image-cat">
              <img src="/images/categories/coding.png" />
            </div>
            <span className="category-name">Personal Development</span>
            <a href="">
              40 Courses <FaArrowRightLong />
            </a>
          </div>
        </div>
      </div>

      <div className="call">
        <div className="section-bg-opacity"></div>

        <div className="call-content">
          <span>Join Our New Session</span>
          <h3>
            Call To Enroll Your Child <br />
            <Link href="#">(+212) - 614096392</Link>
          </h3>
          <button className="main-btn-2">
            Joint With Us
            <FaArrowRightLong />
          </button>
        </div>
      </div>

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
          <button className="main-btn">
            Our Courses
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div className="instructor">
        <div className="title-section ">
          <span>our instructors</span>
        </div>
        <div className="desc-section">
          <h2>Meet Our Expert Enstructor</h2>
        </div>
        <div className="constructors-list">
          <div className="constructor-item">
            <div className="section-bg-opacity"></div>

            <div className="constructor-image">
              <img src="/images/constructors/teacher1.jpg" />
            </div>
            <div className="share-links">
              <button>
                <FaShareNodes />
              </button>
              <ul>
                <li>
                  <Link to={"#"}>
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="constructor-texte">
              <div className="names">
                <h3>othmane laghlimi</h3>
                <span>Web Developer</span>
              </div>
              <Link to={"#"} className="open-link">
                <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className="constructor-item">
            <div className="section-bg-opacity"></div>
            <div className="constructor-image">
              <img src="/images/constructors/teacher2.jpg" />
            </div>
            <div className="share-links">
              <button>
                <FaShareNodes />
              </button>
              <ul>
                <li>
                  <Link to={"#"}>
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="constructor-texte">
              <div className="names">
                <h3>othmane laghlimi</h3>
                <span>Web Developer</span>
              </div>
              <Link to={"#"} className="open-link">
                <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className="constructor-item">
            <div className="section-bg-opacity"></div>
            <div className="constructor-image">
              <img src="/images/constructors/teacher3.jpg" />
            </div>
            <div className="share-links">
              <button>
                <FaShareNodes />
              </button>
              <ul>
                <li>
                  <Link to={"#"}>
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="constructor-texte">
              <div className="names">
                <h3>othmane laghlimi</h3>
                <span>Web Developer</span>
              </div>
              <Link to={"#"} className="open-link">
                <FaArrowRightLong />
              </Link>
            </div>
          </div>

          <div className="constructor-item">
            <div className="section-bg-opacity"></div>
            <div className="constructor-image">
              <img src="/images/constructors/teacher4.jpg" />
            </div>
            <div className="share-links">
              <button>
                <FaShareNodes />
              </button>
              <ul>
                <li>
                  <Link to={"#"}>
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="constructor-texte">
              <div className="names">
                <h3>othmane Johnson</h3>
                <span>Web Developer</span>
              </div>
              <Link to={"#"} className="open-link">
                <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="funfact">
        <div className="funfact-bg">
          <div className="section-bg-opacity"></div>
          <div className="funfact-items">
            <div className="funfact-item">
              <div className="funfact-img">
                <img src="/images/teacher.png" />
              </div>
              <div className="funfact-text">
                <h3>3k+</h3>
                <span>Successfully Trained</span>
              </div>
            </div>
            <div className="funfact-item">
              <div className="funfact-img">
                <img src="/images/review.png" />
              </div>
              <div className="funfact-text">
                <h3>26k+</h3>
                <span>Satisfaction Rate</span>
              </div>
            </div>
            <div className="funfact-item">
              <div className="funfact-img">
                <img src="/images/completed-task.png" />
              </div>
              <div className="funfact-text">
                <h3>17k+</h3>
                <span>Classes Completed</span>
              </div>
            </div>
            <div className="funfact-item">
              <div className="funfact-img">
                <img src="/images/class.png" />
              </div>
              <div className="funfact-text">
                <h3>89K+</h3>
                <span> Students Community</span>
              </div>
            </div>
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

export default Home;
