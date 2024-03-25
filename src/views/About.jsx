import React from "react";
import { FaArrowRightLong, FaArrowRight, FaCircleCheck } from "react-icons/fa6";

function About() {
  return (
    <div className="page-about">
      <div className="title-single-page">
        <div className="section-bg-opacity"></div>
        <h1>About Us</h1>
      </div>

      <div className="content-page-about">
        <div className="part1">
          <img src="/images/image-about-3.jpg" />
        </div>

        <div className="part2">
          <img src="/images/image-about-4.jpg" />
        </div>

        <div className="part3">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            non voluptatum placeat ea id doloremque possimus tenetur sint
            dolorem eaque accusantium corrupti necessitatibus ipsa quae
            pariatur, ex ipsam veniam vitae.
          </p>

          <ul>
            <li>
              <span className="color-nbr">700+</span>
              <span className="text">Happy Students</span>
            </li>
            <li>
              <span className="color-nbr">30+</span>
              <span className="text">Teachers</span>
            </li>
            <li>
              <span className="color-nbr">120+</span>
              <span className="text">Courses</span>
            </li>
          </ul>

          <button className="main-btn">
            Admission Open
            <FaArrowRightLong />
          </button>
        </div>

        <div className="part4">
          <img src="/images/image-about-1.jpg" />
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

      <div className="mission">
        <div className="top">
          <ul>
            <li className="btn-our">
              <span>
                <FaArrowRight /> Why EDUCATE
              </span>
            </li>

            <li className="btn-our">
              <span>
                <FaArrowRight /> Our Vision
              </span>
            </li>

            <li className="btn-our">
              <span>
                <FaArrowRight /> Our Mission
              </span>
            </li>

            <li className="btn-our">
              <span>
                <FaArrowRight /> Our Research
              </span>
            </li>

            <li className="btn-our">
              <span>
                <FaArrowRight /> Our Ranking
              </span>
            </li>

            <li className="btn-our">
              <span>
                <FaArrowRight /> Our Ranking
              </span>
            </li>
          </ul>
        </div>

        <div className="parties">
          <div className="prt">
            <h3>Why EDUCATE</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              architecto incidunt dolorum ex sed? Ipsa, ad laboriosam porro,
              officia cum sed corrupti quae blanditiis, excepturi perferendis
              quod. Accusamus, nam consectetur.
            </p>
            <ul>
              <li>
                <FaCircleCheck />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                excepturi laboriosam minima ex aperiam!
              </li>
              <li>
                <FaCircleCheck />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                excepturi laboriosam minima ex aperiam!
              </li>
              <li>
                <FaCircleCheck />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                excepturi laboriosam minima ex aperiam!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
