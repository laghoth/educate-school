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
  FaMagnifyingGlass,
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

          <div className="cours-categories-section">
            <div className="categories-section">
              <div className="search-part part-bd">
                <h2>Search Cource</h2>
                <form action="#">
                  <div className="form-control">
                    <input
                      type="text"
                      className="form-control-input"
                      placeholder="Search"
                    />
                    <button type="submit">
                      <FaMagnifyingGlass />
                    </button>
                  </div>
                </form>
              </div>

              <div className="category-part part-bd">
                <h2>Course Category</h2>
                <div className="form-check"></div>

                <ul>
                  <li>
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option1"
                        value="something"
                      />
                      React Js Learning
                    </label>
                    <span>09</span>
                  </li>

                  <li>
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option1"
                        value="something"
                      />
                      Graphic Design
                    </label>
                    <span>19</span>
                  </li>

                  <li>
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option1"
                        value="something"
                      />
                      Development
                    </label>
                    <span>12</span>
                  </li>

                  <li>
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option1"
                        value="something"
                      />
                      Web Design
                    </label>
                    <span>10</span>
                  </li>

                  <li>
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option1"
                        value="something"
                      />
                      Php Programming
                    </label>
                    <span>06</span>
                  </li>

                  <li>
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option1"
                        value="something"
                      />
                      Full Stack Developer
                    </label>
                    <span>23</span>
                  </li>
                </ul>
              </div>

              <div className="price-part part-bd">
                <h2>Cours Price</h2>
                <ul>
                  <li>
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option1"
                        value="something"
                      />
                      All
                    </label>
                    <span>79</span>
                  </li>

                  <li>
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option1"
                        value="something"
                      />
                      Paid
                    </label>
                    <span>38</span>
                  </li>

                  <li>
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option1"
                        value="something"
                      />
                      Free
                    </label>
                    <span>23</span>
                  </li>

                  <li>
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="option1"
                        value="something"
                      />
                      Scholarship
                    </label>
                    <span>18</span>
                  </li>
                </ul>
              </div>

              <div className="tags-part part-bd">
                <h2>Cours Tag</h2>
                <div className="tags-list">
                  <Link to="/">HTML</Link>
                  <Link to="/">CSS</Link>
                  <Link to="/">REACT</Link>
                  <Link to="/">JS</Link>
                  <Link to="/">SASS</Link>
                </div>
              </div>
            </div>

            <div className="courses-list cours-section">
              <div className="course-content">
                <div className="course-category">
                  <span>Development</span>
                </div>
                <div className="image-course">
                  <Link to={"#"}>
                    <img src="/images/class_dev.jpg" />
                  </Link>
                  <div className="teacher-price">
                    <div className="course-teacher">
                      <img src="/Images/students/student2.jpg" />
                      <h4>
                        Othmane Lag <br /> <span>12 Courses</span>
                      </h4>
                    </div>
                    <div className="price">$50</div>
                  </div>
                </div>

                <div className="textes">
                  <h3>
                    <Link to={"#"}>
                      It Statistics Data Science And Business Analysis
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur accusamus hic ea in autem debitis.
                  </p>
                  <div className="main-border-dotted"></div>
                  <ul>
                    <li>
                      <FaRegClock />
                      10h 30min
                    </li>
                    <li>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <span>(4.7)</span>
                    </li>
                    <li>
                      <FaFileInvoice />
                      Lesson 11
                    </li>
                  </ul>
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
                  <div className="teacher-price">
                    <div className="course-teacher">
                      <img src="/Images/students/student2.jpg" />
                      <h4>
                        Othmane Lag <br /> <span>12 Courses</span>
                      </h4>
                    </div>
                    <div className="price">$50</div>
                  </div>
                </div>

                <div className="textes">
                  <h3>
                    <Link to={"#"}>
                      It Statistics Data Science And Business Analysis
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur accusamus hic ea in autem debitis.
                  </p>
                  <div className="main-border-dotted"></div>
                  <ul>
                    <li>
                      <FaRegClock />
                      10h 30min
                    </li>
                    <li>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <span>(4.7)</span>
                    </li>
                    <li>
                      <FaFileInvoice />
                      Lesson 11
                    </li>
                  </ul>
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
                  <div className="teacher-price">
                    <div className="course-teacher">
                      <img src="/Images/students/student2.jpg" />
                      <h4>
                        Othmane Lag <br /> <span>12 Courses</span>
                      </h4>
                    </div>
                    <div className="price">$50</div>
                  </div>
                </div>

                <div className="textes">
                  <h3>
                    <Link to={"#"}>
                      It Statistics Data Science And Business Analysis
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur accusamus hic ea in autem debitis.
                  </p>
                  <div className="main-border-dotted"></div>
                  <ul>
                    <li>
                      <FaRegClock />
                      10h 30min
                    </li>
                    <li>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <span>(4.7)</span>
                    </li>
                    <li>
                      <FaFileInvoice />
                      Lesson 11
                    </li>
                  </ul>
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
                  <div className="teacher-price">
                    <div className="course-teacher">
                      <img src="/Images/students/student2.jpg" />
                      <h4>
                        Othmane Lag <br /> <span>12 Courses</span>
                      </h4>
                    </div>
                    <div className="price">$50</div>
                  </div>
                </div>

                <div className="textes">
                  <h3>
                    <Link to={"#"}>
                      It Statistics Data Science And Business Analysis
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur accusamus hic ea in autem debitis.
                  </p>
                  <div className="main-border-dotted"></div>
                  <ul>
                    <li>
                      <FaRegClock />
                      10h 30min
                    </li>
                    <li>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <span>(4.7)</span>
                    </li>
                    <li>
                      <FaFileInvoice />
                      Lesson 11
                    </li>
                  </ul>
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
                  <div className="teacher-price">
                    <div className="course-teacher">
                      <img src="/Images/students/student2.jpg" />
                      <h4>
                        Othmane Lag <br /> <span>12 Courses</span>
                      </h4>
                    </div>
                    <div className="price">$50</div>
                  </div>
                </div>

                <div className="textes">
                  <h3>
                    <Link to={"#"}>
                      It Statistics Data Science And Business Analysis
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur accusamus hic ea in autem debitis.
                  </p>
                  <div className="main-border-dotted"></div>
                  <ul>
                    <li>
                      <FaRegClock />
                      10h 30min
                    </li>
                    <li>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <span>(4.7)</span>
                    </li>
                    <li>
                      <FaFileInvoice />
                      Lesson 11
                    </li>
                  </ul>
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
                  <div className="teacher-price">
                    <div className="course-teacher">
                      <img src="/Images/students/student2.jpg" />
                      <h4>
                        Othmane Lag <br /> <span>12 Courses</span>
                      </h4>
                    </div>
                    <div className="price">$50</div>
                  </div>
                </div>

                <div className="textes">
                  <h3>
                    <Link to={"#"}>
                      It Statistics Data Science And Business Analysis
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur accusamus hic ea in autem debitis.
                  </p>
                  <div className="main-border-dotted"></div>
                  <ul>
                    <li>
                      <FaRegClock />
                      10h 30min
                    </li>
                    <li>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <span>(4.7)</span>
                    </li>
                    <li>
                      <FaFileInvoice />
                      Lesson 11
                    </li>
                  </ul>
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
    </div>
  );
}

export default Cours;
